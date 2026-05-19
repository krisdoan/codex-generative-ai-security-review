import { Firestore, FieldValue } from "@google-cloud/firestore";

let cached = null;

export const getFieldValue = () => FieldValue;

export const getFirestore = () => {
  if (cached) return cached;

  const projectId =
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.GCLOUD_PROJECT ||
    process.env.FIRESTORE_PROJECT_ID;

  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (raw) {
    const parsed = JSON.parse(raw);
    const credentials = {
      client_email: parsed.client_email,
      private_key: String(parsed.private_key || "").replace(/\\n/g, "\n"),
    };
    cached = new Firestore({ projectId: projectId || parsed.project_id, credentials });
    return cached;
  }

  cached = new Firestore(projectId ? { projectId } : undefined);
  return cached;
};

export const collectionName = "od_session_logs_v1";

export const toTokyoDateKey = (isoString) => {
  const d = new Date(isoString);
  return d.toLocaleDateString("en-CA", { timeZone: "Asia/Tokyo" });
};

