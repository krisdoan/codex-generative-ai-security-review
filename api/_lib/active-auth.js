import { requireAuth } from "./auth.js";
import { getUserByEmail } from "./users-store.js";
import { sendJson } from "./http.js";

export const requireActiveAuth = async (req, res) => {
  const auth = requireAuth(req, res);
  if (!auth) return null;

  const user = await getUserByEmail(auth.email);
  if (!user) {
    sendJson(res, 401, { error: "Unauthorized" });
    return null;
  }

  return {
    ...auth,
    email: user.email,
    name: user.name,
    role: user.role,
  };
};
