import { getFirestore, getFieldValue } from "../_lib/firestore.js";
import { del } from "@vercel/blob";
import { sendJson } from "../_lib/http.js";

const collectionName = "od_archived_assets_v1";

export default async function handler(req, res) {
  // Vercel Cron is a GET request by default.
  if (req.method !== "GET" && req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });

  const required = process.env.CRON_SECRET;
  const provided = String(req.headers["x-cron-secret"] || req.query?.secret || "");
  if (required && provided !== required) return sendJson(res, 401, { error: "Unauthorized" });

  try {
    const nowIso = new Date().toISOString();
    const db = getFirestore();
    const FieldValue = getFieldValue();

    // Avoid requiring composite indexes; scan a small window and filter in memory.
    const snap = await db.collection(collectionName).orderBy("createdAt", "asc").limit(400).get();
    const expired = snap.docs.filter((d) => {
      const x = d.data() || {};
      return x.expiresAt && String(x.expiresAt) <= nowIso;
    });

    let deletedDocs = 0;
    let deletedObjects = 0;

    const batch = db.batch();
    for (const d of expired) {
      const x = d.data() || {};
      batch.delete(d.ref);
      deletedDocs++;

      const url = x.url;
      if (url) {
        try {
          await del(String(url));
          deletedObjects++;
        } catch {
          // ignore
        }
      }
    }

    if (deletedDocs > 0) await batch.commit();

    // touch a marker doc for observability
    await db.collection(collectionName).doc("__purge_marker__").set(
      {
        lastRunAt: nowIso,
        deletedDocs,
        deletedObjects,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return sendJson(res, 200, { ok: true, deletedDocs, deletedObjects });
  } catch (e) {
    return sendJson(res, 500, { error: e?.message || "Failed to purge." });
  }
}
