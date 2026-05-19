import { getFirestore, getFieldValue } from "../_lib/firestore.js";
import { readJsonBody, sendJson } from "../_lib/http.js";
import { requireAuth } from "../_lib/auth.js";

const collectionName = "od_app_config_v1";
const docId = "defaults";

export default async function handler(req, res) {
  const auth = requireAuth(req, res);
  if (!auth) return;
  try {
    const db = getFirestore();
    const FieldValue = getFieldValue();

    if (req.method === "GET") {
      const doc = await db.collection(collectionName).doc(docId).get();
      if (!doc.exists) return sendJson(res, 200, { defaults: null });
      const data = doc.data() || {};
      return sendJson(res, 200, {
        defaults: data.defaults || null,
        // Stored here to stay within the Vercel Hobby Serverless Function limit (<=12).
        specOptions: data.specOptions || null,
        customSpecFields: data.customSpecFields || null,
        modelDatabase: Array.isArray(data.modelDatabase) ? data.modelDatabase : [],
        budgetLimits: data.budgetLimits || null,
        budgetStatusKey: data.budgetStatusKey || null,
        hasGeminiApiKey: Boolean(data.geminiApiKey),
        geminiApiKeyScope: data.geminiApiKeyScope || null,
        geminiApiKeyOwnerEmail: data.geminiApiKeyOwnerEmail || null,
        geminiApiKeySavedAt: data.geminiApiKeySavedAt || null,
      });
    }

    if (req.method === "POST") {
      if (auth.role !== "admin") return sendJson(res, 403, { error: "Forbidden" });
      const body = await readJsonBody(req);
      const defaults = body?.defaults;
      const specOptions = body?.specOptions;
      const resetSpecOptions = Boolean(body?.resetSpecOptions);
      const customSpecFields = body?.customSpecFields;
      const modelDatabase = body?.modelDatabase;
      const resetCustomSpecFields = Boolean(body?.resetCustomSpecFields);
      const budgetLimits = body?.budgetLimits;
      const budgetStatusKey = body?.budgetStatusKey;
      const geminiApiKey = body?.geminiApiKey;
      const removeGeminiApiKey = Boolean(body?.removeGeminiApiKey);
      const geminiApiKeyScope = body?.geminiApiKeyScope;
      const geminiApiKeyOwnerEmail = body?.geminiApiKeyOwnerEmail;
      const geminiApiKeySavedAt = body?.geminiApiKeySavedAt;

      if (
        (!defaults || typeof defaults !== "object") &&
        (!specOptions || typeof specOptions !== "object") &&
        !resetSpecOptions &&
        (!Array.isArray(customSpecFields)) &&
        (!Array.isArray(modelDatabase)) &&
        !resetCustomSpecFields &&
        (!budgetLimits || typeof budgetLimits !== "object") &&
        (!budgetStatusKey || typeof budgetStatusKey !== "string") &&
        (!geminiApiKey || typeof geminiApiKey !== "string") &&
        !removeGeminiApiKey
      ) {
        return sendJson(res, 400, { error: "Missing defaults or specOptions object." });
      }

      const patch = { updatedAt: FieldValue.serverTimestamp() };
      if (defaults && typeof defaults === "object") patch.defaults = defaults;
      if (specOptions && typeof specOptions === "object") patch.specOptions = specOptions;
      if (resetSpecOptions) patch.specOptions = null;
      if (Array.isArray(customSpecFields)) patch.customSpecFields = customSpecFields;
      if (Array.isArray(modelDatabase)) {
        patch.modelDatabase = modelDatabase
          .map((item) => ({
            id: String(item?.id || "").trim(),
            name: String(item?.name || "").trim(),
            gender: String(item?.gender || "").trim(),
            age: String(item?.age || "").trim(),
            preview: String(item?.preview || "").trim(),
            pathname: item?.pathname ? String(item.pathname) : null,
            savedAt: item?.savedAt ? String(item.savedAt) : new Date().toISOString(),
            savedBy: item?.savedBy ? String(item.savedBy) : String(auth.email || ""),
          }))
          .filter((item) => item.id && item.name && item.preview);
      }
      if (resetCustomSpecFields) patch.customSpecFields = null;
      if (budgetLimits && typeof budgetLimits === "object") patch.budgetLimits = budgetLimits;
      if (budgetStatusKey && typeof budgetStatusKey === "string") patch.budgetStatusKey = budgetStatusKey;
      if (geminiApiKey && typeof geminiApiKey === "string") {
        patch.geminiApiKey = geminiApiKey;
        patch.geminiApiKeyScope = typeof geminiApiKeyScope === "string" ? geminiApiKeyScope : "permanent";
        // Only store ownerEmail as the authenticated admin (never trust client-provided owner).
        patch.geminiApiKeyOwnerEmail = String(auth.email || "");
        patch.geminiApiKeySavedAt = typeof geminiApiKeySavedAt === "string" ? geminiApiKeySavedAt : new Date().toISOString();
      }
      if (removeGeminiApiKey) {
        patch.geminiApiKey = null;
        patch.geminiApiKeyScope = null;
        patch.geminiApiKeyOwnerEmail = null;
        patch.geminiApiKeySavedAt = null;
      }

      await db.collection(collectionName).doc(docId).set(
        patch,
        { merge: true }
      );
      return sendJson(res, 200, { ok: true });
    }

    return sendJson(res, 405, { error: "Method not allowed" });
  } catch (e) {
    return sendJson(res, 500, { error: e?.message || "Config error." });
  }
}
