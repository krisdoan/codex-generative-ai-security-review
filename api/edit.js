import { GoogleGenAI } from "@google/genai";
import { readJsonBody, sendJson } from "./_lib/http.js";
import { fetchUrlAsInlineData, http300s } from "./_lib/gemini.js";
import { getServerGeminiApiKey } from "./_lib/server-key.js";
import { requireAuth } from "./_lib/auth.js";

const MODEL_EDIT = "gemini-2.5-flash-image";

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
  const auth = requireAuth(req, res);
  if (!auth) return;
  try {
    const body = await readJsonBody(req);
    const { imageUrl, imageDataUri, instruction } = body || {};
    const ins = String(instruction || "").trim() || "Model gazing to the opposite way";
    if (!imageUrl && !imageDataUri) return sendJson(res, 400, { error: "Missing imageUrl/imageDataUri." });

    const apiKey = await getServerGeminiApiKey();
    if (!apiKey) return sendJson(res, 400, { error: "Missing server Gemini API key." });
    const ai = new GoogleGenAI({ apiKey });

    const imgPart = imageUrl ? await fetchUrlAsInlineData(String(imageUrl)) : dataUriToInline(imageDataUri);

    const response = await ai.models.generateContent({
      model: MODEL_EDIT,
      contents: {
        parts: [
          imgPart,
          { text: `Edit: ${ins}. Keep eyeglasses and outfit consistent. Negative: looking directly to camera.` },
        ],
      },
      config: { httpOptions: http300s },
    });

    const out = extractInlineImage(response);
    if (!out) return sendJson(res, 500, { error: "No image returned by Gemini." });
    return sendJson(res, 200, { ok: true, imageUrl: out.dataUri, mimeType: out.mimeType });
  } catch (e) {
    return sendJson(res, 500, { error: e?.message || "Edit failed." });
  }
}
