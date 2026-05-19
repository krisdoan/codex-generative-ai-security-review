import { getFirestore } from "./firestore.js";

const collectionName = "od_app_config_v1";
const docId = "defaults";

export const getServerGeminiApiKey = async () => {
  const envKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GEMINI_APIKEY ||
    process.env.GOOGLE_APIKEY;
  if (envKey) return String(envKey);

  // Fallback: config-stored key (set by admin in-app).
  const db = getFirestore();
  const doc = await db.collection(collectionName).doc(docId).get();
  const data = doc.exists ? doc.data() || {} : {};
  const k = data?.geminiApiKey;
  if (k && typeof k === "string" && k.trim()) return k.trim();
  return null;
};

