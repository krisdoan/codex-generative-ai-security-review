import crypto from "node:crypto";
import { handleUpload } from "@vercel/blob/client";
import { getFirestore, getFieldValue, toTokyoDateKey } from "./_lib/firestore.js";
import { readJsonBody, sendJson } from "./_lib/http.js";
import { requireActiveAuth } from "./_lib/active-auth.js";
import { enforceRateLimit } from "./_lib/rate-limit.js";

const collectionName = "od_archived_assets_v1";

const daysAgoIso = (days) => new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
const isAllowedBlobUrl = (rawUrl) => {
  try {
    const u = new URL(String(rawUrl || ""));
    return (
      u.protocol === "https:" &&
      (u.hostname.toLowerCase().endsWith(".public.blob.vercel-storage.com") ||
        u.hostname.toLowerCase() === "public.blob.vercel-storage.com")
    );
  } catch {
    return false;
  }
};
const isSafeBlobPathname = (pathname) => {
  const p = String(pathname || "");
  return p.length > 0 && p.length < 512 && !p.includes("://") && !p.includes("..");
};

export default async function handler(req, res) {
  const auth = await requireActiveAuth(req, res);
  if (!auth) return;

  try {
    if (req.method === "GET") {
      const limit = Math.min(Number(req.query?.limit || 120), 400);
      const q = String(req.query?.q || "").toLowerCase();
      const userEmail = String(req.query?.userEmail || "").toLowerCase();
      const nowIso = new Date().toISOString();

      const db = getFirestore();
      const snap = await db.collection(collectionName).orderBy("createdAt", "desc").limit(limit).get();
      let items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      items = items
        .filter((x) => String(x.createdAt || "") >= daysAgoIso(4))
        .filter((x) => !x.expiresAt || String(x.expiresAt) > nowIso);
      if (userEmail) items = items.filter((x) => String(x.userEmail || "").toLowerCase() === userEmail);
      if (q) {
        items = items.filter((x) => {
          const email = String(x.userEmail || "").toLowerCase();
          const name = String(x.userName || "").toLowerCase();
          const ref = String(x.referenceFileName || "").toLowerCase();
          return email.includes(q) || name.includes(q) || ref.includes(q);
        });
      }
      const normalized = items.map((x) => ({
        id: x.id,
        kind: x.kind,
        mimeType: x.mimeType,
        url: x.url,
        pathname: x.pathname,
        fileName: x.fileName || null,
        userEmail: x.userEmail,
        userName: x.userName,
        referenceFileName: x.referenceFileName || null,
        createdAt: x.createdAt,
        expiresAt: x.expiresAt,
      }));
      return sendJson(res, 200, { assets: normalized });
    }

    if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });
    if (!enforceRateLimit(req, res, { key: `assets:${auth.email}`, limit: 240, windowMs: 60 * 60 * 1000 })) return;

    const body = await readJsonBody(req);
    const action = String(body?.action || "");

    if (action === "register") {
      const { kind, mimeType, url, pathname, referenceFileName, fileName } = body || {};
      if (!kind || !mimeType || !url || !pathname) {
        return sendJson(res, 400, { error: "Missing kind/mimeType/url/pathname." });
      }
      const allowed = ["image/png", "image/jpeg", "image/webp", "video/mp4"];
      if (!allowed.includes(String(mimeType))) return sendJson(res, 400, { error: "Unsupported mimeType." });
      if (!isAllowedBlobUrl(url) || !isSafeBlobPathname(pathname)) {
        return sendJson(res, 400, { error: "Invalid asset URL." });
      }
      const now = new Date().toISOString();
      const expiresAt = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString();
      const db = getFirestore();
      const FieldValue = getFieldValue();
      const id = crypto.randomUUID();

      await db.collection(collectionName).doc(id).set({
        kind,
        mimeType,
        url,
        pathname,
        fileName: fileName || null,
        userEmail: String(auth.email || ""),
        userName: String(auth.name || ""),
        referenceFileName: referenceFileName || null,
        createdAt: now,
        expiresAt,
        dateKey: toTokyoDateKey(now),
        updatedAt: FieldValue.serverTimestamp(),
      });
      return sendJson(res, 200, { ok: true, id });
    }

    // Otherwise, treat as a Vercel Blob upload token request.
    const jsonResponse = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async (_pathname, clientPayload) => {
        const payload =
          typeof clientPayload === "string"
            ? (() => {
                try {
                  return JSON.parse(clientPayload);
                } catch {
                  return {};
                }
              })()
            : (clientPayload || {});

        const kind = String(payload?.kind || "");
        const mimeType = String(payload?.mimeType || "");
        if (!kind || !mimeType) throw new Error("Missing required clientPayload fields.");

        const allowed = ["image/png", "image/jpeg", "image/webp", "video/mp4"];
        if (!allowed.includes(mimeType)) throw new Error(`Unsupported mimeType: ${mimeType}`);

        return {
          access: "public",
          addRandomSuffix: true,
          allowedContentTypes: allowed,
          tokenPayload: { ...payload, userEmail: String(auth.email || ""), userName: String(auth.name || "") },
        };
      },
      onUploadCompleted: async () => {},
    });

    return sendJson(res, 200, jsonResponse);
  } catch (e) {
    console.error("Assets API error", e);
    return sendJson(res, 400, { error: "Assets error." });
  }
}
