import { sendJson } from "./http.js";

const buckets = new Map();

export const getClientIp = (req) => {
  const forwarded = String(req.headers?.["x-forwarded-for"] || "");
  if (forwarded) return forwarded.split(",")[0].trim();
  return String(req.socket?.remoteAddress || req.connection?.remoteAddress || "unknown");
};

export const checkRateLimit = ({ key, limit, windowMs }) => {
  const now = Date.now();
  const bucketKey = String(key || "anonymous");
  const current = buckets.get(bucketKey);
  if (!current || current.resetAt <= now) {
    buckets.set(bucketKey, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: Math.max(0, limit - 1), retryAfter: 0 };
  }

  if (current.count >= limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return {
    ok: true,
    remaining: Math.max(0, limit - current.count),
    retryAfter: 0,
  };
};

export const enforceRateLimit = (req, res, { key, limit = 30, windowMs = 60_000 }) => {
  const result = checkRateLimit({ key, limit, windowMs });
  if (result.ok) return true;
  res.setHeader("Retry-After", String(result.retryAfter));
  sendJson(res, 429, { error: "Too many requests. Please wait and try again." });
  return false;
};
