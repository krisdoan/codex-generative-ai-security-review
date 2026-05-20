import { collectionName, getFirestore } from "./firestore.js";

const configCollection = "od_app_config_v1";
const configDoc = "defaults";

export const imageGenerationCost = (imageSize) => {
  const raw = String(imageSize || "").trim().toLowerCase();
  if (raw === "0.5k" || raw === "512px") return 0.045;
  if (raw === "2k" || raw === "2048px") return 0.101;
  if (raw === "4k" || raw === "4096px") return 0.151;
  return 0.067;
};

const tokyoParts = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const pick = (type) => parts.find((p) => p.type === type)?.value;
  return { year: Number(pick("year")), month: Number(pick("month")), day: Number(pick("day")) };
};

const startOfTokyoDayUtc = (y, m, d) => new Date(Date.UTC(y, m - 1, d, -9, 0, 0, 0));

const periodRanges = () => {
  const now = new Date();
  const { year, month, day } = tokyoParts(now);
  const dayStart = startOfTokyoDayUtc(year, month, day);
  const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);
  const localDow = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  const mondayOffset = localDow === 0 ? 6 : localDow - 1;
  const weekStartLocal = new Date(Date.UTC(year, month - 1, day - mondayOffset));
  const weekStart = startOfTokyoDayUtc(
    weekStartLocal.getUTCFullYear(),
    weekStartLocal.getUTCMonth() + 1,
    weekStartLocal.getUTCDate()
  );
  const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
  const monthStart = startOfTokyoDayUtc(year, month, 1);
  const nextMonth = month === 12 ? { year: year + 1, month: 1 } : { year, month: month + 1 };
  const monthEnd = startOfTokyoDayUtc(nextMonth.year, nextMonth.month, 1);
  return {
    day: [dayStart.toISOString(), dayEnd.toISOString()],
    week: [weekStart.toISOString(), weekEnd.toISOString()],
    month: [monthStart.toISOString(), monthEnd.toISOString()],
  };
};

const usedForRange = async (db, fromIso, toIso) => {
  const snap = await db
    .collection(collectionName)
    .where("loginAt", ">=", fromIso)
    .where("loginAt", "<", toIso)
    .limit(1000)
    .get();
  return snap.docs.reduce((sum, doc) => sum + Number(doc.data()?.totalCost || 0), 0);
};

export const enforceBudgetLimit = async (costDelta) => {
  const cost = Number(costDelta || 0);
  if (!Number.isFinite(cost) || cost <= 0) return { ok: true };

  try {
    const db = getFirestore();
    const configSnap = await db.collection(configCollection).doc(configDoc).get();
    const limits = configSnap.exists ? configSnap.data()?.budgetLimits || {} : {};
    const ranges = periodRanges();

    for (const period of ["day", "week", "month"]) {
      const limit = Number(limits?.[period] || 0);
      if (!Number.isFinite(limit) || limit <= 0) continue;
      const [fromIso, toIso] = ranges[period];
      const used = await usedForRange(db, fromIso, toIso);
      if (used + cost > limit) {
        return { ok: false, period, limit, used, attempted: cost };
      }
    }
  } catch (error) {
    console.error("Budget check skipped because monitoring storage failed.", error);
  }

  return { ok: true };
};
