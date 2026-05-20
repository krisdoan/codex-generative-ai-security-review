import { readJsonBody, sendJson } from "./_lib/http.js";
import {
  clearAuthCookie,
  createAuthToken,
  getAuthFromRequest,
  requireAuth,
  setAuthCookie,
} from "./_lib/auth.js";
import { enforceRateLimit, getClientIp } from "./_lib/rate-limit.js";
import {
  createUser,
  ensureDefaultAdmins,
  getUserByEmail,
  hashPassword,
  isSuperAdmin,
  listUsers,
  removeUser,
  updateUser,
  verifyPassword,
} from "./_lib/users-store.js";

const normalizeEmail = (s) => String(s || "").trim().toLowerCase();
const validatePassword = (password) => {
  const value = String(password || "");
  if (value.length < 12) return "Password must be at least 12 characters.";
  if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value)) return "Password must include letters and numbers.";
  const weak = new Set(["password1234", "123456789012"]);
  if (weak.has(value.toLowerCase())) return "Password is too easy to guess.";
  return null;
};

export default async function handler(req, res) {
  try {
    // GET is reserved for lightweight auth introspection.
    if (req.method === "GET") {
      const auth = getAuthFromRequest(req);
      if (!auth) return sendJson(res, 200, { user: null });
      const user = await getUserByEmail(auth.email);
      if (!user) return sendJson(res, 200, { user: null });
      return sendJson(res, 200, { user: { email: user.email, name: user.name, role: user.role } });
    }

    if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });

    const body = await readJsonBody(req);
    const action = String(body?.action || "");

    if (action === "login") {
      const email = normalizeEmail(body?.email);
      const limitKey = `login:${email || "empty"}:${getClientIp(req)}`;
      if (!enforceRateLimit(req, res, { key: limitKey, limit: 8, windowMs: 15 * 60 * 1000 })) return;
      await ensureDefaultAdmins();
      const password = String(body?.password || "");
      if (!email || !password) return sendJson(res, 400, { error: "Missing email/password." });

      const user = await getUserByEmail(email);
      if (!user) return sendJson(res, 401, { error: "Invalid email or password." });
      const ok = await verifyPassword(password, user.password);
      if (!ok) return sendJson(res, 401, { error: "Invalid email or password." });

      const now = Math.floor(Date.now() / 1000);
      const token = createAuthToken({
        email: user.email,
        name: user.name,
        role: user.role,
        iat: now,
        exp: now + 60 * 60 * 12,
      });
      setAuthCookie(res, token);
      return sendJson(res, 200, { user: { email: user.email, name: user.name, role: user.role } });
    }

    if (action === "logout") {
      clearAuthCookie(res);
      return sendJson(res, 200, { ok: true });
    }

    const tokenAuth = requireAuth(req, res);
    if (!tokenAuth) return;
    const activeUser = await getUserByEmail(tokenAuth.email);
    if (!activeUser) return sendJson(res, 401, { error: "Unauthorized" });
    const auth = { ...tokenAuth, email: activeUser.email, name: activeUser.name, role: activeUser.role };

    if (action === "users.list") {
      if (auth.role !== "admin") return sendJson(res, 403, { error: "Forbidden" });
      await ensureDefaultAdmins();
      const users = await listUsers();
      return sendJson(res, 200, { users });
    }

    if (action === "users.create") {
      if (auth.role !== "admin") return sendJson(res, 403, { error: "Forbidden" });
      await ensureDefaultAdmins();
      const email = normalizeEmail(body?.email);
      const name = String(body?.name || "").trim();
      const password = String(body?.password || "");
      const requestedRole = String(body?.role || "user");
      if (!email || !name || !password) return sendJson(res, 400, { error: "Missing email/name/password." });
      const passwordError = validatePassword(password);
      if (passwordError) return sendJson(res, 400, { error: passwordError });
      const role = isSuperAdmin(auth.email) && requestedRole === "admin" ? "admin" : "user";
      const user = await createUser({ email, name, password, role });
      return sendJson(res, 200, { user });
    }

    if (action === "users.remove") {
      if (auth.role !== "admin") return sendJson(res, 403, { error: "Forbidden" });
      const email = normalizeEmail(body?.email);
      if (!email) return sendJson(res, 400, { error: "Missing email." });
      const target = await getUserByEmail(email);
      if (!target) return sendJson(res, 404, { error: "User not found." });
      if (target.role === "admin") return sendJson(res, 400, { error: "Admins cannot be removed." });
      await removeUser(email);
      return sendJson(res, 200, { ok: true });
    }

    if (action === "users.setRole") {
      if (auth.role !== "admin") return sendJson(res, 403, { error: "Forbidden" });
      if (!isSuperAdmin(auth.email)) return sendJson(res, 403, { error: "Only super admin can change roles." });
      const email = normalizeEmail(body?.email);
      const role = String(body?.role || "");
      if (!email || (role !== "admin" && role !== "user")) return sendJson(res, 400, { error: "Invalid email/role." });
      if (normalizeEmail(auth.email) === email) return sendJson(res, 400, { error: "Cannot change your own role." });
      const target = await getUserByEmail(email);
      if (!target) return sendJson(res, 404, { error: "User not found." });
      await updateUser(email, { role });
      return sendJson(res, 200, { ok: true });
    }

    if (action === "users.updateMe") {
      const nextName = body?.name != null ? String(body.name).trim() : null;
      const currentPassword = body?.currentPassword != null ? String(body.currentPassword) : null;
      const newPassword = body?.newPassword != null ? String(body.newPassword) : null;
      if (!nextName && !newPassword) return sendJson(res, 400, { error: "Nothing to update." });

      const user = await getUserByEmail(auth.email);
      if (!user) return sendJson(res, 404, { error: "User not found." });

      if (newPassword != null) {
        if (!currentPassword) return sendJson(res, 400, { error: "Missing currentPassword." });
        const ok = await verifyPassword(currentPassword, user.password);
        if (!ok) return sendJson(res, 401, { error: "Current password is incorrect." });
        const passwordError = validatePassword(newPassword);
        if (passwordError) return sendJson(res, 400, { error: passwordError });
      }

      const patch = {};
      if (nextName) patch.name = nextName;
      if (newPassword != null) patch.password = await hashPassword(newPassword);
      await updateUser(auth.email, patch);

      // Refresh cookie claims
      const now = Math.floor(Date.now() / 1000);
      const token = createAuthToken({
        email: user.email,
        name: nextName || user.name,
        role: user.role,
        iat: now,
        exp: now + 60 * 60 * 12,
      });
      setAuthCookie(res, token);
      return sendJson(res, 200, { ok: true });
    }

    return sendJson(res, 400, { error: "Unknown action." });
  } catch (e) {
    console.error("Auth API error", e);
    return sendJson(res, 500, { error: "Auth error." });
  }
}
