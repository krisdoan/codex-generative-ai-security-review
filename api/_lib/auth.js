import crypto from "node:crypto";

const COOKIE_NAME = "od_auth_v1";

const b64url = (buf) =>
  Buffer.from(buf)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

const b64urlJson = (obj) => b64url(JSON.stringify(obj));

const fromB64url = (s) => {
  const padded = String(s || "")
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(Math.ceil(String(s || "").length / 4) * 4, "=");
  return Buffer.from(padded, "base64");
};

const parseCookies = (req) => {
  const header = req?.headers?.cookie || "";
  const out = {};
  for (const part of String(header).split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (!k) continue;
    out[k] = decodeURIComponent(v);
  }
  return out;
};

const setCookie = (res, { name, value, maxAgeSeconds, httpOnly = true }) => {
  const parts = [];
  parts.push(`${name}=${encodeURIComponent(value)}`);
  parts.push("Path=/");
  parts.push("SameSite=Lax");
  if (httpOnly) parts.push("HttpOnly");
  if (maxAgeSeconds) parts.push(`Max-Age=${maxAgeSeconds}`);
  // Only set Secure in production hosting (prevents cookie being dropped on http://localhost).
  if (process.env.VERCEL === "1" || process.env.NODE_ENV === "production") parts.push("Secure");
  res.setHeader("Set-Cookie", parts.join("; "));
};

const clearCookie = (res, name) => {
  res.setHeader("Set-Cookie", `${name}=; Path=/; Max-Age=0; SameSite=Lax`);
};

const getAuthSecret = () => {
  const explicit = process.env.OD_AUTH_SECRET;
  if (explicit && String(explicit).trim()) return String(explicit).trim();

  // Stable fallback based on existing secrets (never returned to clients).
  const sa = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (sa && String(sa).trim()) {
    return crypto.createHash("sha256").update(String(sa)).digest("hex");
  }
  const blob = process.env.BLOB_READ_WRITE_TOKEN;
  if (blob && String(blob).trim()) {
    return crypto.createHash("sha256").update(String(blob)).digest("hex");
  }
  // Last resort (dev only)
  return "dev-insecure-auth-secret";
};

const sign = (data) => {
  return b64url(crypto.createHmac("sha256", getAuthSecret()).update(String(data)).digest());
};

export const createAuthToken = (payload) => {
  const header = { alg: "HS256", typ: "JWT" };
  const h = b64urlJson(header);
  const p = b64urlJson(payload);
  const sig = sign(`${h}.${p}`);
  return `${h}.${p}.${sig}`;
};

export const verifyAuthToken = (token) => {
  const parts = String(token || "").split(".");
  if (parts.length !== 3) return null;
  const [h, p, sig] = parts;
  const expected = sign(`${h}.${p}`);
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  } catch {
    return null;
  }
  try {
    const payload = JSON.parse(fromB64url(p).toString("utf8"));
    const exp = Number(payload?.exp || 0);
    if (exp && Date.now() / 1000 > exp) return null;
    return payload;
  } catch {
    return null;
  }
};

export const getAuthFromRequest = (req) => {
  // 1) Cookie (preferred)
  const cookies = parseCookies(req);
  const cookieToken = cookies[COOKIE_NAME];
  if (cookieToken) {
    const payload = verifyAuthToken(cookieToken);
    if (payload) return payload;
  }

  // 2) Authorization: Bearer <token>
  const authz = req?.headers?.authorization || req?.headers?.Authorization || "";
  const m = String(authz).match(/^Bearer\s+(.+)$/i);
  if (m?.[1]) {
    const payload = verifyAuthToken(m[1]);
    if (payload) return payload;
  }
  return null;
};

export const requireAuth = (req, res) => {
  const payload = getAuthFromRequest(req);
  if (!payload) {
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Unauthorized" }));
    return null;
  }
  return payload;
};

export const setAuthCookie = (res, token) => {
  // Session cookie by default; keeps users forced to log in again after browser close.
  setCookie(res, { name: COOKIE_NAME, value: token, httpOnly: true });
};

export const clearAuthCookie = (res) => clearCookie(res, COOKIE_NAME);

export const COOKIE_NAME_AUTH = COOKIE_NAME;
