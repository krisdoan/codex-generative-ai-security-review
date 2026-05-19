import { GoogleGenAI } from "@google/genai";

export const requireEnv = (name) => {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
};

export const getGeminiClient = () => {
  // Prefer a server-owned key so the browser never needs to send secrets.
  const apiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GEMINI_APIKEY ||
    process.env.GOOGLE_APIKEY;
  if (!apiKey) throw new Error("Missing GEMINI_API_KEY env var.");
  return new GoogleGenAI({ apiKey });
};

export const http300s = { timeout: 300_000 };

export const fetchUrlAsInlineData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch input image: ${res.status}`);
  const ct = res.headers.get("content-type") || "application/octet-stream";
  const buf = Buffer.from(await res.arrayBuffer());
  return {
    inlineData: {
      data: buf.toString("base64"),
      mimeType: ct,
    },
  };
};

export const isHttp400 = (err) => {
  const status = err?.status || err?.code || err?.response?.status;
  if (status === 400) return true;
  const msg = String(err?.message || "").toLowerCase();
  return msg.includes("400") || msg.includes("bad request");
};

