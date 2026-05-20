import { GoogleGenAI } from "@google/genai";
import dns from "node:dns/promises";
import net from "node:net";

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

const MAX_FETCH_BYTES = 10 * 1024 * 1024;
const ALLOWED_IMAGE_MIME_TYPES = new Set(["image/png", "image/jpeg", "image/webp"]);
const ALLOWED_FETCH_HOSTS = new Set(
  String(process.env.ALLOWED_IMAGE_FETCH_HOSTS || "")
    .split(",")
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean)
);

const isPrivateIp = (ip) => {
  if (net.isIP(ip) === 4) {
    const parts = ip.split(".").map(Number);
    const n = ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
    const inRange = (a, b) => n >= a && n <= b;
    return (
      parts[0] === 10 ||
      parts[0] === 127 ||
      (parts[0] === 169 && parts[1] === 254) ||
      (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
      (parts[0] === 192 && parts[1] === 168) ||
      inRange(0x64400000, 0x647fffff)
    );
  }
  if (net.isIP(ip) === 6) {
    const v = ip.toLowerCase();
    return v === "::1" || v.startsWith("fc") || v.startsWith("fd") || v.startsWith("fe80:");
  }
  return true;
};

const isAllowedFetchHost = (host) => {
  const h = String(host || "").toLowerCase();
  return (
    ALLOWED_FETCH_HOSTS.has(h) ||
    h.endsWith(".public.blob.vercel-storage.com") ||
    h === "public.blob.vercel-storage.com"
  );
};

const validateRemoteImageUrl = async (rawUrl) => {
  const u = new URL(String(rawUrl || ""));
  if (u.protocol !== "https:") throw new Error("Only HTTPS image URLs are allowed.");
  if (!isAllowedFetchHost(u.hostname)) throw new Error("Image URL host is not allowed.");
  const addresses = await dns.lookup(u.hostname, { all: true, verbatim: false });
  if (addresses.some((x) => isPrivateIp(x.address))) throw new Error("Image URL resolves to a private network.");
  return u;
};

const dataUriToInlineData = (raw) => {
  const m = String(raw || "").match(/^data:([^;]+);base64,([A-Za-z0-9+/=]+)$/);
  if (!m) throw new Error("Invalid image data URI.");
  const mimeType = m[1].toLowerCase();
  if (!ALLOWED_IMAGE_MIME_TYPES.has(mimeType)) throw new Error("Unsupported image mimeType.");
  const data = m[2];
  if (Buffer.byteLength(data, "base64") > MAX_FETCH_BYTES) throw new Error("Image data is too large.");
  return { inlineData: { data, mimeType } };
};

export const fetchUrlAsInlineData = async (url) => {
  if (String(url || "").startsWith("data:image/")) return dataUriToInlineData(url);
  const safeUrl = await validateRemoteImageUrl(url);
  const res = await fetch(safeUrl, { redirect: "error" });
  if (!res.ok) throw new Error(`Failed to fetch input image: ${res.status}`);
  const ct = String(res.headers.get("content-type") || "application/octet-stream").split(";")[0].toLowerCase();
  if (!ALLOWED_IMAGE_MIME_TYPES.has(ct)) throw new Error("Unsupported fetched image mimeType.");
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length > MAX_FETCH_BYTES) throw new Error("Fetched image is too large.");
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
