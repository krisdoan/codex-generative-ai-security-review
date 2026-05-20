import { GoogleGenAI } from "@google/genai";
import { readJsonBody, sendJson } from "./_lib/http.js";
import { fetchUrlAsInlineData, http300s } from "./_lib/gemini.js";
import { getServerGeminiApiKey } from "./_lib/server-key.js";
import { requireActiveAuth } from "./_lib/active-auth.js";
import { enforceRateLimit } from "./_lib/rate-limit.js";
import { enforceBudgetLimit, imageGenerationCost } from "./_lib/budget.js";

const MODEL_EDIT = "gemini-2.5-flash-image";
const EDIT_IMAGE_SIZES = new Set(["1K", "2K", "4K"]);

const dataUriToInline = (dataUri) => {
  const m = String(dataUri || "").match(/^data:([^;]+);base64,(.+)$/);
  if (!m) throw new Error("Invalid image data URI.");
  return { inlineData: { mimeType: m[1], data: m[2] } };
};

const extractInlineImage = (resp) => {
  const parts = resp?.candidates?.[0]?.content?.parts || [];
  for (const p of parts) {
    if (p.inlineData) {
      const mimeType = p.inlineData.mimeType || "image/png";
      return { mimeType, dataUri: `data:${mimeType};base64,${p.inlineData.data}` };
    }
  }
  return null;
};

export default async function handler(req, res) {
  if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });
  const auth = await requireActiveAuth(req, res);
  if (!auth) return;
  if (!enforceRateLimit(req, res, { key: `edit:${auth.email}`, limit: 40, windowMs: 60 * 60 * 1000 })) return;
  try {
    const body = await readJsonBody(req);
    const { imageUrl, imageDataUri, instruction, imageSize } = body || {};
    const ins = String(instruction || "").trim() || "Model gazing to the opposite way";
    const normalizedImageSize = EDIT_IMAGE_SIZES.has(String(imageSize || "")) ? String(imageSize) : "2K";
    if (!imageUrl && !imageDataUri) return sendJson(res, 400, { error: "Missing imageUrl/imageDataUri." });

    const budget = await enforceBudgetLimit(imageGenerationCost(normalizedImageSize));
    if (!budget.ok) {
      return sendJson(res, 402, {
        error: `Budget limit exceeded for ${budget.period}. Used $${budget.used.toFixed(3)} of $${budget.limit.toFixed(3)}.`,
      });
    }

    const apiKey = await getServerGeminiApiKey();
    if (!apiKey) return sendJson(res, 400, { error: "Missing server Gemini API key." });
    const ai = new GoogleGenAI({ apiKey });

    const imgPart = imageUrl ? await fetchUrlAsInlineData(String(imageUrl)) : dataUriToInline(imageDataUri);

    const response = await ai.models.generateContent({
      model: MODEL_EDIT,
      contents: {
        parts: [
          imgPart,
          { text: `Edit: ${ins}. Keep eyeglasses and outfit consistent. Keep the original aspect ratio. Negative: looking directly to camera.` },
        ],
      },
      config: { httpOptions: http300s, imageSize: normalizedImageSize },
    });

    const out = extractInlineImage(response);
    if (!out) return sendJson(res, 500, { error: "No image returned by Gemini." });
    return sendJson(res, 200, { ok: true, imageUrl: out.dataUri, mimeType: out.mimeType });
  } catch (e) {
    console.error("Edit API error", e);
    return sendJson(res, 500, { error: "Edit failed." });
  }
}
