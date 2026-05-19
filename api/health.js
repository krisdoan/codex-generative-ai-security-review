import { getFirestore } from "./_lib/firestore.js";
import { sendJson } from "./_lib/http.js";

export default async function handler(_req, res) {
  try {
    const db = getFirestore();
    sendJson(res, 200, { ok: true, firestore: Boolean(db) });
  } catch (e) {
    sendJson(res, 500, { ok: false, error: e?.message || "health failed" });
  }
}

