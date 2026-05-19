import { getFirestore, getFieldValue, collectionName, toTokyoDateKey } from "./_lib/firestore.js";
import { readJsonBody, sendJson } from "./_lib/http.js";
import { requireAuth } from "./_lib/auth.js";

export default async function handler(req, res) {
  const auth = requireAuth(req, res);
  if (!auth) return;

  const db = getFirestore();

  try {
    if (req.method === "GET") {
      const date = String(req.query?.date || ""); // YYYY-MM-DD
      const from = String(req.query?.from || ""); // ISO (inclusive)
      const to = String(req.query?.to || ""); // ISO (inclusive)
      const userQuery = String(req.query?.userQuery || "").toLowerCase();
      const limit = Math.min(Number(req.query?.limit || 200), 1000);

      let q = db.collection(collectionName).orderBy("loginAt", "desc").limit(limit);
      if (date) q = q.where("dateKey", "==", date);
      if (from) q = q.where("loginAt", ">=", from);
      if (to) q = q.where("loginAt", "<=", to);
      const snap = await q.get();
      let items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));

      if (auth.role !== "admin") {
        const me = String(auth.email || "").toLowerCase();
        items = items.filter((x) => String(x.userEmail || "").toLowerCase() === me);
      }

      if (userQuery) {
        items = items.filter((x) => {
          const email = String(x.userEmail || "").toLowerCase();
          const name = String(x.userName || "").toLowerCase();
          return email.includes(userQuery) || name.includes(userQuery);
        });
      }

      const normalized = items.map((x) => ({
        id: x.id,
        userEmail: x.userEmail,
        userName: x.userName,
        role: x.role,
        loginAt: x.loginAt,
        logoutAt: x.logoutAt || undefined,
        generatedCount: Number(x.generatedCount || 0),
        editedCount: Number(x.editedCount || 0),
        totalCost: Number(x.totalCost || 0),
        events: Array.isArray(x.events) ? x.events : [],
      }));
      return sendJson(res, 200, { sessions: normalized });
    }

    if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });

    const body = await readJsonBody(req);
    const action = String(body?.action || "");

    if (action === "start") {
      const now = new Date().toISOString();
      const FieldValue = getFieldValue();
      const doc = await db.collection(collectionName).add({
        userEmail: String(auth.email || ""),
        userName: String(auth.name || ""),
        role: String(auth.role || ""),
        loginAt: now,
        logoutAt: null,
        generatedCount: 0,
        editedCount: 0,
        totalCost: 0,
        events: [{ at: now, type: "login" }],
        dateKey: toTokyoDateKey(now),
        updatedAt: FieldValue.serverTimestamp(),
      });
      return sendJson(res, 200, { id: doc.id });
    }

    const id = String(body?.id || "");
    if (!id) return sendJson(res, 400, { error: "Missing session id." });
    const ref = db.collection(collectionName).doc(id);

    if (auth.role !== "admin") {
      const doc = await ref.get();
      if (!doc.exists) return sendJson(res, 404, { error: "Session not found." });
      const owner = String(doc.data()?.userEmail || "").toLowerCase();
      if (owner !== String(auth.email || "").toLowerCase()) return sendJson(res, 403, { error: "Forbidden" });
    }

    if (action === "event") {
      const { type, details, generatedCountDelta = 0, editedCountDelta = 0, costDelta = 0 } = body || {};
      if (!type) return sendJson(res, 400, { error: "Missing type." });
      const now = new Date().toISOString();
      const event = { at: now, type, details: details || null };
      const FieldValue = getFieldValue();
      await ref.set(
        {
          generatedCount: FieldValue.increment(Number(generatedCountDelta) || 0),
          editedCount: FieldValue.increment(Number(editedCountDelta) || 0),
          totalCost: FieldValue.increment(Number(costDelta) || 0),
          events: FieldValue.arrayUnion(event),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      return sendJson(res, 200, { ok: true });
    }

    if (action === "end") {
      const now = new Date().toISOString();
      const FieldValue = getFieldValue();
      const event = { at: now, type: "logout", details: null };
      await ref.set(
        {
          logoutAt: now,
          events: FieldValue.arrayUnion(event),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      return sendJson(res, 200, { ok: true });
    }

    return sendJson(res, 400, { error: "Unknown action." });
  } catch (e) {
    return sendJson(res, 500, { error: e?.message || "Sessions error." });
  }
}

