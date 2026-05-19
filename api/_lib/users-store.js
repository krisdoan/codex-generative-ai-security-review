import crypto from "node:crypto";
import { getFirestore, getFieldValue } from "./firestore.js";

const usersCollection = "od_users_v2";

const SUPER_ADMIN_EMAIL = "krisdoan.fr@gmail.com";

const DEFAULT_ADMINS = [
  {
    email: "krisdoan.fr@gmail.com",
    name: "Security Review Dummy",
    password: "123456",
    role: "admin",
  },
];

const normalizeEmail = (s) => String(s || "").trim().toLowerCase();

const shouldUseFirestore = () => {
  if (process.env.FIRESTORE_DISABLED === "1") return false;
  if (process.env.FIRESTORE_EMULATOR_HOST) return true;
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) return true;
  if (process.env.GOOGLE_CLOUD_PROJECT) return true;
  if (process.env.GCLOUD_PROJECT) return true;
  if (process.env.FIRESTORE_PROJECT_ID) return true;
  return false;
};

const shouldFallbackToMemory = (error) => {
  const message = String(error?.message || "").toLowerCase();
  const code = Number(error?.code || 0);
  return (
    code === 8 ||
    message.includes("resource_exhausted") ||
    message.includes("quota exceeded") ||
    message.includes("quota") ||
    message.includes("billing")
  );
};

const withUserStoreFallback = async (task, fallbackTask) => {
  if (!shouldUseFirestore()) return fallbackTask();
  try {
    return await task();
  } catch (error) {
    if (!shouldFallbackToMemory(error)) throw error;
    process.env.FIRESTORE_DISABLED = "1";
    return fallbackTask();
  }
};

const memoryUsers = new Map();

const pbkdf2Async = (password, salt, iterations) =>
  new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, 32, "sha256", (err, derivedKey) => {
      if (err) reject(err);
      else resolve(derivedKey);
    });
  });

export const hashPassword = async (password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const iterations = 120_000;
  const buf = await pbkdf2Async(String(password), salt, iterations);
  return {
    salt,
    iterations,
    hash: Buffer.from(buf).toString("hex"),
  };
};

export const verifyPassword = async (password, record) => {
  if (!record || !record.salt || !record.hash || !record.iterations) return false;
  const buf = await pbkdf2Async(String(password), String(record.salt), Number(record.iterations));
  const hex = Buffer.from(buf).toString("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(hex, "hex"), Buffer.from(String(record.hash), "hex"));
  } catch {
    return false;
  }
};

export const ensureDefaultAdmins = async () => {
  const seedMemoryAdmins = async () => {
    await Promise.all(
      DEFAULT_ADMINS.map(async (a) => {
        const email = normalizeEmail(a.email);
        if (memoryUsers.has(email)) return;
        const pw = await hashPassword(a.password);
        memoryUsers.set(email, {
          id: email,
          email,
          name: a.name,
          role: a.role,
          password: pw,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      })
    );
    return;
  };

  return withUserStoreFallback(async () => {
    const db = getFirestore();
    const FieldValue = getFieldValue();
    await Promise.all(
      DEFAULT_ADMINS.map(async (a) => {
        const email = normalizeEmail(a.email);
        const ref = db.collection(usersCollection).doc(email);
        const doc = await ref.get();
        if (doc.exists) return;
        const pw = await hashPassword(a.password);
        await ref.set({
          email,
          name: a.name,
          role: a.role,
          password: pw,
          createdAt: new Date().toISOString(),
          updatedAt: FieldValue.serverTimestamp(),
        });
      })
    );
  }, seedMemoryAdmins);
};

export const getUserByEmail = async (email) => {
  const fromMemory = async () => {
    await ensureDefaultAdmins();
    const key = normalizeEmail(email);
    return memoryUsers.get(key) || null;
  };

  return withUserStoreFallback(async () => {
    const db = getFirestore();
    const key = normalizeEmail(email);
    const doc = await db.collection(usersCollection).doc(key).get();
    if (!doc.exists) return null;
    const data = doc.data() || {};
    return {
      id: doc.id,
      email: data.email,
      name: data.name,
      role: data.role,
      password: data.password || null,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }, fromMemory);
};

export const listUsers = async () => {
  const fromMemory = async () => {
    await ensureDefaultAdmins();
    return Array.from(memoryUsers.values())
      .sort((a, b) => String(a.email).localeCompare(String(b.email)))
      .map((x) => ({
        id: x.id,
        email: x.email,
        name: x.name,
        role: x.role,
        createdAt: x.createdAt,
      }));
  };

  return withUserStoreFallback(async () => {
    const db = getFirestore();
    const snap = await db.collection(usersCollection).orderBy("email", "asc").limit(500).get();
    return snap.docs.map((d) => {
      const x = d.data() || {};
      return {
        id: d.id,
        email: x.email,
        name: x.name,
        role: x.role,
        createdAt: x.createdAt,
      };
    });
  }, fromMemory);
};

export const createUser = async ({ email, name, password, role }) => {
  const inMemory = async () => {
    await ensureDefaultAdmins();
    const key = normalizeEmail(email);
    if (memoryUsers.has(key)) throw new Error("User already exists.");
    const pw = await hashPassword(password);
    const user = {
      id: key,
      email: key,
      name: String(name || "").trim(),
      role: role === "admin" ? "admin" : "user",
      password: pw,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    memoryUsers.set(key, user);
    return { id: user.id, email: user.email, name: user.name, role: user.role };
  };

  return withUserStoreFallback(async () => {
    const db = getFirestore();
    const FieldValue = getFieldValue();
    const key = normalizeEmail(email);
    const ref = db.collection(usersCollection).doc(key);
    const existing = await ref.get();
    if (existing.exists) throw new Error("User already exists.");
    const pw = await hashPassword(password);
    await ref.set({
      email: key,
      name: String(name || "").trim(),
      role: role === "admin" ? "admin" : "user",
      password: pw,
      createdAt: new Date().toISOString(),
      updatedAt: FieldValue.serverTimestamp(),
    });
    return { id: key, email: key, name: String(name || "").trim(), role: role === "admin" ? "admin" : "user" };
  }, inMemory);
};

export const updateUser = async (email, patch) => {
  const inMemory = async () => {
    await ensureDefaultAdmins();
    const key = normalizeEmail(email);
    const current = memoryUsers.get(key);
    if (!current) return;
    memoryUsers.set(key, {
      ...current,
      ...patch,
      updatedAt: new Date().toISOString(),
    });
    return;
  };

  return withUserStoreFallback(async () => {
    const db = getFirestore();
    const FieldValue = getFieldValue();
    const key = normalizeEmail(email);
    const ref = db.collection(usersCollection).doc(key);
    await ref.set({ ...patch, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  }, inMemory);
};

export const removeUser = async (email) => {
  const inMemory = async () => {
    const key = normalizeEmail(email);
    memoryUsers.delete(key);
    return;
  };

  return withUserStoreFallback(async () => {
    const db = getFirestore();
    const key = normalizeEmail(email);
    await db.collection(usersCollection).doc(key).delete();
  }, inMemory);
};

export const isSuperAdmin = (email) => normalizeEmail(email) === normalizeEmail(SUPER_ADMIN_EMAIL);
