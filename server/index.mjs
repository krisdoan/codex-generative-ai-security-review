import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Firestore, FieldValue } from "@google-cloud/firestore";
import { GoogleGenAI } from "@google/genai";
import authHandler from "../api/auth.js";
import { requireAuth } from "../api/_lib/auth.js";
import { fetchUrlAsInlineData as safeFetchUrlAsInlineData } from "../api/_lib/gemini.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "127.0.0.1";

// For localhost recovery work, prefer the in-memory local store unless explicitly enabled.
if (!process.env.VERCEL && !process.env.K_SERVICE && !process.env.FIRESTORE_EMULATOR_HOST) {
  process.env.FIRESTORE_DISABLED = process.env.FIRESTORE_DISABLED || "1";
}

const app = express();
app.use(express.json({ limit: "2mb" }));

// Basic CORS for the known frontend origins only.
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigins = new Set([
    "https://codex-generative-ai.vercel.app",
    `http://${HOST}:${PORT}`,
    `http://127.0.0.1:${PORT}`,
    `http://localhost:${PORT}`,
  ]);
  const allowed = origin && allowedOrigins.has(String(origin));
  if (allowed) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  if (req.method === "OPTIONS") return res.status(204).end();
  next();
});

const distDir = path.resolve(__dirname, "../dist");

const shouldUseFirestore = () => {
  if (process.env.FIRESTORE_DISABLED === "1") return false;
  // Cloud Run sets GOOGLE_CLOUD_PROJECT; locally you can still use ADC/emulator.
  if (process.env.FIRESTORE_EMULATOR_HOST) return true;
  if (process.env.GOOGLE_CLOUD_PROJECT) return true;
  if (process.env.GCLOUD_PROJECT) return true;
  return false;
};

const firestore = shouldUseFirestore() ? new Firestore() : null;

// Fallback in-memory store for local dev without Firestore.
const memory = {
  sessions: new Map(), // id -> session object
  jobs: new Map(), // id -> job object
  assets: new Map(), // id -> asset record
  config: {
    defaults: null,
    specOptions: null,
    customSpecFields: null,
    budgetLimits: null,
    budgetStatusKey: "month",
    geminiApiKey: null,
    geminiApiKeyScope: null,
    geminiApiKeyOwnerEmail: null,
    geminiApiKeySavedAt: null,
  },
};

const sessionCollection = () => firestore.collection("od_session_logs_v1");

const toDateKey = (isoString) => {
  const d = new Date(isoString);
  // en-CA gives YYYY-MM-DD
  return d.toLocaleDateString("en-CA", { timeZone: "Asia/Tokyo" });
};

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

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, firestore: Boolean(firestore) });
});

app.all("/api/auth", async (req, res) => {
  return authHandler(req, res);
});

app.all("/api/config/defaults", async (req, res) => {
  const auth = requireAuth(req, res);
  if (!auth) return;

  try {
    if (req.method === "GET") {
      if (firestore) {
        const doc = await firestore.collection("od_app_config_v1").doc("defaults").get();
        const data = doc.exists ? doc.data() || {} : {};
        return res.json({
          defaults: data.defaults || null,
          specOptions: data.specOptions || null,
          customSpecFields: data.customSpecFields || null,
          modelDatabase: Array.isArray(data.modelDatabase) ? data.modelDatabase : [],
          budgetLimits: data.budgetLimits || null,
          budgetStatusKey: data.budgetStatusKey || "month",
          hasGeminiApiKey: Boolean(data.geminiApiKey),
          geminiApiKeyScope: data.geminiApiKeyScope || null,
          geminiApiKeyOwnerEmail: data.geminiApiKeyOwnerEmail || null,
          geminiApiKeySavedAt: data.geminiApiKeySavedAt || null,
        });
      }

      return res.json({
        defaults: memory.config.defaults,
        specOptions: memory.config.specOptions,
        customSpecFields: memory.config.customSpecFields,
        modelDatabase: Array.isArray(memory.config.modelDatabase) ? memory.config.modelDatabase : [],
        budgetLimits: memory.config.budgetLimits,
        budgetStatusKey: memory.config.budgetStatusKey || "month",
        hasGeminiApiKey: Boolean(memory.config.geminiApiKey),
        geminiApiKeyScope: memory.config.geminiApiKeyScope || null,
        geminiApiKeyOwnerEmail: memory.config.geminiApiKeyOwnerEmail || null,
        geminiApiKeySavedAt: memory.config.geminiApiKeySavedAt || null,
      });
    }

    if (req.method === "POST") {
      if (auth.role !== "admin") return res.status(403).json({ error: "Forbidden" });
      const body = req.body || {};

      const patch = {};
      if (body.defaults && typeof body.defaults === "object") patch.defaults = body.defaults;
      if (body.specOptions && typeof body.specOptions === "object") patch.specOptions = body.specOptions;
      if (body.resetSpecOptions) patch.specOptions = null;
      if (Array.isArray(body.customSpecFields)) patch.customSpecFields = body.customSpecFields;
      if (Array.isArray(body.modelDatabase)) {
        patch.modelDatabase = body.modelDatabase
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
      if (body.resetCustomSpecFields) patch.customSpecFields = null;
      if (body.budgetLimits && typeof body.budgetLimits === "object") patch.budgetLimits = body.budgetLimits;
      if (typeof body.budgetStatusKey === "string") patch.budgetStatusKey = body.budgetStatusKey;
      if (typeof body.geminiApiKey === "string" && body.geminiApiKey.trim()) {
        patch.geminiApiKey = body.geminiApiKey.trim();
        patch.geminiApiKeyScope = typeof body.geminiApiKeyScope === "string" ? body.geminiApiKeyScope : "permanent";
        patch.geminiApiKeyOwnerEmail = String(auth.email || "");
        patch.geminiApiKeySavedAt = new Date().toISOString();
      }
      if (body.removeGeminiApiKey) {
        patch.geminiApiKey = null;
        patch.geminiApiKeyScope = null;
        patch.geminiApiKeyOwnerEmail = null;
        patch.geminiApiKeySavedAt = null;
      }

      if (firestore) {
        await firestore.collection("od_app_config_v1").doc("defaults").set(
          { ...patch, updatedAt: FieldValue.serverTimestamp() },
          { merge: true }
        );
      } else {
        memory.config = { ...memory.config, ...patch };
      }

      return res.json({ ok: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    return res.status(500).json({ error: e?.message || "Config error." });
  }
});

app.all("/api/assets", async (req, res) => {
  const auth = requireAuth(req, res);
  if (!auth) return;

  const daysAgoIso = (days) => new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

  try {
    if (req.method === "GET") {
      const limit = Math.min(Number(req.query?.limit || 120), 400);
      const q = String(req.query?.q || "").toLowerCase();
      const userEmail = String(req.query?.userEmail || "").toLowerCase();
      const nowIso = new Date().toISOString();

      let items = [];
      if (firestore) {
        const snap = await firestore.collection("od_archived_assets_v1").orderBy("createdAt", "desc").limit(limit).get();
        items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      } else {
        items = Array.from(memory.assets.values()).sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || ""))).slice(0, limit);
      }

      items = items
        .filter((x) => String(x.createdAt || "") >= daysAgoIso(4))
        .filter((x) => !x.expiresAt || String(x.expiresAt) > nowIso);

      if (userEmail) items = items.filter((x) => String(x.userEmail || "").toLowerCase() === userEmail);
      if (q) {
        items = items.filter((x) => {
          const email = String(x.userEmail || "").toLowerCase();
          const name = String(x.userName || "").toLowerCase();
          const ref = String(x.referenceFileName || "").toLowerCase();
          const fileName = String(x.fileName || "").toLowerCase();
          return email.includes(q) || name.includes(q) || ref.includes(q) || fileName.includes(q);
        });
      }

      return res.json({
        assets: items.map((x) => ({
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
        })),
      });
    }

    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const body = req.body || {};
    const action = String(body.action || "");
    if (action !== "register") {
      return res.status(400).json({ error: "Unsupported local assets action." });
    }

    const { kind, mimeType, url, pathname, referenceFileName, fileName } = body;
    if (!kind || !mimeType || !url || !pathname) {
      return res.status(400).json({ error: "Missing kind/mimeType/url/pathname." });
    }
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/webp", "video/mp4"];
    if (!allowedMimeTypes.includes(String(mimeType))) return res.status(400).json({ error: "Unsupported mimeType." });
    if (!isAllowedBlobUrl(url) || !isSafeBlobPathname(pathname)) {
      return res.status(400).json({ error: "Invalid asset URL." });
    }

    const now = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString();
    const id = `asset-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const record = {
      id,
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
      dateKey: toDateKey(now),
      updatedAt: now,
    };

    if (firestore) {
      await firestore.collection("od_archived_assets_v1").doc(id).set({
        ...record,
        updatedAt: FieldValue.serverTimestamp(),
      });
    } else {
      memory.assets.set(id, record);
    }

    return res.json({ ok: true, id });
  } catch (e) {
    return res.status(400).json({ error: e?.message || "Assets error." });
  }
});

// -------------------------
// Async Generation Jobs API
// -------------------------
const requireGeminiKey = () => {
  const key = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!key) throw new Error("Missing GEMINI_API_KEY env var.");
  return key;
};

const http300s = { timeout: 300_000 };

const jobsCollection = () => firestore.collection("od_generation_jobs_v1");

const updateJob = async (id, patch) => {
  const now = new Date().toISOString();
  if (firestore) {
    await jobsCollection().doc(String(id)).set(
      {
        ...patch,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    return;
  }
  const current = memory.jobs.get(id) || { id, createdAt: now };
  memory.jobs.set(id, { ...current, ...patch, updatedAt: now });
};

const readJob = async (id) => {
  if (firestore) {
    const doc = await jobsCollection().doc(String(id)).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...(doc.data() || {}) };
  }
  return memory.jobs.get(id) || null;
};

const createJob = async (payload, auth) => {
  const id = `job-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const now = new Date().toISOString();
  const base = {
    status: "queued",
    progress: 0,
    createdAt: now,
    updatedAt: now,
    payload,
    ownerEmail: String(auth?.email || ""),
    ownerName: String(auth?.name || ""),
    result: null,
    error: null,
  };
  if (firestore) {
    await jobsCollection().doc(id).set({ ...base, updatedAt: FieldValue.serverTimestamp() });
  } else {
    memory.jobs.set(id, base);
  }
  return id;
};

const fetchUrlAsInlineData = safeFetchUrlAsInlineData;

const isHttp400 = (err) => {
  const status = err?.status || err?.code || err?.response?.status;
  if (status === 400) return true;
  return String(err?.message || "").toLowerCase().includes("400");
};

const analyzeImageText = async (ai, inlineDataPart, instruction) => {
  const resp = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
    contents: [{ parts: [inlineDataPart, { text: instruction }] }],
    config: { httpOptions: http300s },
  });
  return (resp.text || "").trim();
};

const buildPromptWithFlash = async (ai, { attributes, envText, fashionText }) => {
  const base = { attributes, env: envText || null, fashion: fashionText || null };
  const resp = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
    contents: [
      {
        parts: [
          {
            text:
              "Return STRICT JSON with keys: prompt, negative_prompt. No markdown. Keep it short and photographic.",
          },
          { text: JSON.stringify(base) },
        ],
      },
    ],
    config: { httpOptions: http300s, responseMimeType: "application/json" },
  });
  try {
    const parsed = JSON.parse(resp.text || "{}");
    return {
      prompt: String(parsed.prompt || ""),
      negativePrompt: String(parsed.negative_prompt || ""),
    };
  } catch {
    return {
      prompt:
        "Photorealistic portrait, model wearing the provided eyeglasses, natural lighting, realistic skin texture.",
      negativePrompt: "blurry, low quality, watermark, text, logo, deformed, unnatural, wrong eyeglasses",
    };
  }
};

const generateImage = async (ai, { glassesInline, fashionInline, envInline, prompt, negativePrompt, seed, aspectRatio, imageSize }) => {
  const parts = [];
  if (glassesInline) parts.push(glassesInline);
  if (fashionInline) parts.push(fashionInline);
  if (envInline) parts.push(envInline);
  parts.push({ text: `${prompt}\n\nNEGATIVE: ${negativePrompt}` });

  const model = process.env.OD_IMAGE_MODEL || "gemini-3.1-flash-image-preview";
  const normalizeAspectRatio = (value) => {
    const raw = String(value || "").trim();
    const allowed = new Set(["1:1", "3:4", "4:3", "9:16", "16:9"]);
    return allowed.has(raw) ? raw : "3:4";
  };
  const normalizeImageSize = (value) => {
    const raw = String(value || "").trim();
    if (!raw || raw.toLowerCase() === "default") return undefined;
    const aliases = new Map([
      ["512px", "0.5K"],
      ["0.5k", "0.5K"],
      ["0.5K", "0.5K"],
      ["1024px", "1K"],
      ["1k", "1K"],
      ["1K", "1K"],
      ["2048px", "2K"],
      ["2k", "2K"],
      ["2K", "2K"],
      ["4096px", "4K"],
      ["4k", "4K"],
      ["4K", "4K"],
    ]);
    return aliases.get(raw) || aliases.get(raw.toLowerCase()) || undefined;
  };
  const normalizedSeed = Number(seed);
  const normalizedImageSize = normalizeImageSize(imageSize);
  const imageConfig = {
    aspectRatio: normalizeAspectRatio(aspectRatio),
  };
  if (Number.isFinite(normalizedSeed)) imageConfig.seed = normalizedSeed;
  if (normalizedImageSize) imageConfig.imageSize = normalizedImageSize;

  const resp = await ai.models.generateContent({
    model,
    contents: [{ parts }],
    config: {
      httpOptions: http300s,
      responseModalities: ["IMAGE"],
      imageConfig,
    },
  });

  const out = resp.candidates?.[0]?.content?.parts || [];
  for (const p of out) {
    if (p.inlineData) {
      const mimeType = p.inlineData.mimeType || "image/png";
      return { mimeType, dataUri: `data:${mimeType};base64,${p.inlineData.data}` };
    }
  }
  throw new Error("No image returned by Gemini.");
};

const jobQueue = {
  running: false,
  ids: [],
};

const enqueueJob = (id) => {
  jobQueue.ids.push(id);
  void pumpJobs();
};

const pumpJobs = async () => {
  if (jobQueue.running) return;
  jobQueue.running = true;
  try {
    while (jobQueue.ids.length > 0) {
      const id = jobQueue.ids.shift();
      // eslint-disable-next-line no-await-in-loop
      await runJob(id);
    }
  } finally {
    jobQueue.running = false;
  }
};

const runJob = async (id) => {
  const job = await readJob(id);
  if (!job) return;
  if (job.status === "running" || job.status === "succeeded" || job.status === "failed") return;

  await updateJob(id, { status: "running", progress: 5, error: null });

  try {
    const ai = new GoogleGenAI({ apiKey: requireGeminiKey() });
    const payload = job.payload || {};
    const { glassesUrl, fashionUrl, envUrl, attributes, seed, aspectRatio, imageSize } = payload;
    if (!glassesUrl) throw new Error("Missing glassesUrl.");

    const glassesInline = await fetchUrlAsInlineData(glassesUrl);
    const fashionInline = fashionUrl ? await fetchUrlAsInlineData(fashionUrl) : null;
    const envInline = envUrl ? await fetchUrlAsInlineData(envUrl) : null;

    await updateJob(id, { progress: 15 });

    let envText = null;
    if (envInline && (attributes?.environment === "Reference upload (default)" || attributes?.environment === "Randomize")) {
      await updateJob(id, { progress: 22 });
      envText = await analyzeImageText(ai, envInline, "Identify the location and lighting. Max 10 words.");
    }
    let fashionText = null;
    if (fashionInline && (String(attributes?.clothing || "").includes("1") || attributes?.clothing === "Randomize")) {
      await updateJob(id, { progress: 28 });
      fashionText = await analyzeImageText(ai, fashionInline, "Identify outfit and props. Max 15 words.");
    }

    await updateJob(id, { progress: 35 });
    const built = await buildPromptWithFlash(ai, { attributes, envText, fashionText });

    await updateJob(id, { progress: 55 });

    let result;
    try {
      result = await generateImage(ai, {
        glassesInline,
        fashionInline,
        envInline,
        prompt: built.prompt,
        negativePrompt: built.negativePrompt,
        seed,
        aspectRatio,
        imageSize,
      });
    } catch (e) {
      if (isHttp400(e)) {
        await updateJob(id, { progress: 65, note: "Retrying without reference image…" });
        result = await generateImage(ai, {
          glassesInline: null,
          fashionInline,
          envInline,
          prompt: built.prompt,
          negativePrompt: built.negativePrompt,
          seed,
          aspectRatio,
          imageSize,
        });
      } else {
        throw e;
      }
    }

    await updateJob(id, {
      status: "succeeded",
      progress: 100,
      result: {
        imageDataUri: result.dataUri,
        mimeType: result.mimeType,
        prompt: built.prompt,
        negativePrompt: built.negativePrompt,
      },
    });
  } catch (e) {
    await updateJob(id, {
      status: "failed",
      progress: 100,
      error: String(e?.message || e),
    });
  }
};

app.post("/api/jobs/start", async (req, res) => {
  const auth = requireAuth(req, res);
  if (!auth) return;
  try {
    const payload = req.body?.payload;
    if (!payload || typeof payload !== "object") return res.status(400).json({ error: "Missing payload." });
    if (!payload.glassesUrl) return res.status(400).json({ error: "Missing payload.glassesUrl." });
    const id = await createJob(payload, auth);
    enqueueJob(id);
    return res.json({ job_id: id });
  } catch (e) {
    return res.status(500).json({ error: e?.message || "Failed to start job." });
  }
});

app.get("/api/status/:job_id", async (req, res) => {
  const auth = requireAuth(req, res);
  if (!auth) return;
  try {
    const id = req.params.job_id;
    const job = await readJob(id);
    if (!job) return res.status(404).json({ error: "Job not found." });
    if (String(job.ownerEmail || "").toLowerCase() !== String(auth.email || "").toLowerCase() && auth.role !== "admin") {
      return res.status(403).json({ error: "Forbidden" });
    }
    return res.json({
      job_id: id,
      status: job.status,
      progress: Number(job.progress || 0),
      result: job.result || null,
      error: job.error || null,
    });
  } catch (e) {
    return res.status(500).json({ error: e?.message || "Status error." });
  }
});

app.get("/status/:job_id", async (req, res) => {
  return res.status(410).json({ error: "Use authenticated /api/status/:job_id." });
});

app.all("/api/sessions", async (req, res) => {
  const auth = requireAuth(req, res);
  if (!auth) return;

  try {
    if (req.method === "GET") {
      const date = String(req.query.date || "");
      const from = String(req.query.from || "");
      const to = String(req.query.to || "");
      const userQuery = String(req.query.userQuery || "").toLowerCase();
      const limit = Math.min(Number(req.query.limit || 200), 1000);

      let items = [];
      if (firestore) {
        let q = sessionCollection().orderBy("loginAt", "desc").limit(limit);
        if (date) q = q.where("dateKey", "==", date);
        if (from) q = q.where("loginAt", ">=", from);
        if (to) q = q.where("loginAt", "<=", to);
        const snap = await q.get();
        items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      } else {
        items = Array.from(memory.sessions.values()).sort((a, b) => (a.loginAt < b.loginAt ? 1 : -1));
        if (date) items = items.filter((x) => x.dateKey === date);
        if (from) items = items.filter((x) => String(x.loginAt || "") >= from);
        if (to) items = items.filter((x) => String(x.loginAt || "") <= to);
        items = items.slice(0, limit);
      }

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
      return res.json({ sessions: normalized });
    }

    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const action = String(req.body?.action || "");

    if (action === "start") {
      const now = new Date().toISOString();
      const base = {
        userEmail: String(auth.email || ""),
        userName: String(auth.name || ""),
        role: String(auth.role || ""),
        loginAt: now,
        logoutAt: null,
        generatedCount: 0,
        editedCount: 0,
        totalCost: 0,
        events: [{ at: now, type: "login" }],
        dateKey: toDateKey(now),
        updatedAt: now,
      };

      if (firestore) {
        const doc = await sessionCollection().add({
          ...base,
          updatedAt: FieldValue.serverTimestamp(),
        });
        return res.json({ id: doc.id });
      }

      const id = `mem-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      memory.sessions.set(id, { id, ...base });
      return res.json({ id });
    }

    const id = String(req.body?.id || "");
    if (!id) return res.status(400).json({ error: "Missing session id." });

    let current = null;
    if (firestore) {
      const doc = await sessionCollection().doc(id).get();
      if (!doc.exists) return res.status(404).json({ error: "Session not found." });
      current = { id: doc.id, ...doc.data() };
    } else {
      current = memory.sessions.get(id) || null;
      if (!current) return res.status(404).json({ error: "Session not found." });
    }

    if (auth.role !== "admin") {
      const owner = String(current.userEmail || "").toLowerCase();
      if (owner !== String(auth.email || "").toLowerCase()) {
        return res.status(403).json({ error: "Forbidden" });
      }
    }

    if (action === "event") {
      const now = new Date().toISOString();
      const event = {
        at: now,
        type: String(req.body?.type || ""),
        details: req.body?.details || null,
      };
      if (!event.type) return res.status(400).json({ error: "Missing type." });
      const generatedCountDelta = Number(req.body?.generatedCountDelta || 0);
      const editedCountDelta = Number(req.body?.editedCountDelta || 0);
      const costDelta = Number(req.body?.costDelta || 0);

      if (firestore) {
        await sessionCollection().doc(id).set(
          {
            generatedCount: FieldValue.increment(generatedCountDelta),
            editedCount: FieldValue.increment(editedCountDelta),
            totalCost: FieldValue.increment(costDelta),
            events: FieldValue.arrayUnion(event),
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } else {
        current.generatedCount = Number(current.generatedCount || 0) + generatedCountDelta;
        current.editedCount = Number(current.editedCount || 0) + editedCountDelta;
        current.totalCost = Number(current.totalCost || 0) + costDelta;
        current.events = [...(Array.isArray(current.events) ? current.events : []), event];
        current.updatedAt = now;
        memory.sessions.set(id, current);
      }

      return res.json({ ok: true });
    }

    if (action === "end") {
      const now = new Date().toISOString();
      const event = { at: now, type: "logout", details: null };

      if (firestore) {
        await sessionCollection().doc(id).set(
          {
            logoutAt: now,
            events: FieldValue.arrayUnion(event),
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } else {
        current.logoutAt = now;
        current.events = [...(Array.isArray(current.events) ? current.events : []), event];
        current.updatedAt = now;
        memory.sessions.set(id, current);
      }

      return res.json({ ok: true });
    }

    return res.status(400).json({ error: "Unknown action." });
  } catch (e) {
    return res.status(500).json({ error: e?.message || "Sessions error." });
  }
});

app.post("/api/sessions/start", async (req, res) => {
  return res.status(410).json({ error: "Use authenticated /api/sessions action=start." });
});

app.post("/api/sessions/:id/event", async (req, res) => {
  return res.status(410).json({ error: "Use authenticated /api/sessions action=event." });
});

app.post("/api/sessions/:id/end", async (req, res) => {
  return res.status(410).json({ error: "Use authenticated /api/sessions action=end." });
});

app.get("/api/sessions", async (req, res) => {
  return res.status(410).json({ error: "Use authenticated /api/sessions." });
});

// Static app (after build)
app.use(express.static(distDir));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT} (firestore=${Boolean(firestore)})`);
});
