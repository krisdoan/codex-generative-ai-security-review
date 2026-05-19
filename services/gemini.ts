import { GoogleGenAI } from "@google/genai";
import { ModelAttributes } from "../types";
import { getExpressionPrompt, getStyleProfile } from "../styleProfiles.js";

// Model IDs must match Gemini API exactly (v1beta ListModels).
const MODEL_PROMPT_BUILDER = "gemini-3.1-flash-lite-preview";
const MODEL_LOGIC_JSON = "gemini-3.1-pro-preview";
const MODEL_IMAGE_GENERATION = "gemini-3.1-flash-image-preview";
const CORE_NO_CAMERA_NEGATIVE = "looking directly to camera, direct eye contact, staring into camera lens";

const buildGenderHairRule = (attributes: ModelAttributes) => {
  const gender = String(attributes?.gender || '').trim();
  const hairStyle = String(attributes?.hairStyle || '').trim();
  if (!gender && !hairStyle) return '';
  const genderLower = gender.toLowerCase();
  if (genderLower === 'male') {
    return `Gender is Male. Hair must stay masculine and match this hairstyle exactly: ${hairStyle}. Do not use feminine hairstyles.`;
  }
  if (genderLower === 'female') {
    return `Gender is Female. Hair must stay feminine and match this hairstyle exactly: ${hairStyle}. Do not use masculine hairstyles.`;
  }
  if (hairStyle) return `Use this hairstyle exactly: ${hairStyle}.`;
  return '';
};

const getIdentityFeaturesPrompt = (identity: string) => {
  const normalized = String(identity || '').trim().toLowerCase();
  if (normalized === 'japanese') return 'Contemporary Japanese commercial/editorial styling language.';
  if (normalized === 'taiwan') return 'Contemporary Taiwanese commercial beauty styling language.';
  if (normalized === 'hong kong') return 'Contemporary Hong Kong commercial/editorial styling language.';
  if (normalized === 'thailand') return 'Contemporary Thai commercial beauty styling language.';
  if (normalized === 'singapore') return 'Contemporary Singapore commercial styling language.';
  if (normalized === 'vietnamese') return 'Contemporary Vietnamese commercial beauty styling language.';
  return 'Natural regional styling.';
};

const mergeNegativePrompt = (value: string) => {
  const raw = String(value || '').trim();
  if (!raw) return CORE_NO_CAMERA_NEGATIVE;
  const lowered = raw.toLowerCase();
  if (lowered.includes('looking directly to camera') || lowered.includes('direct eye contact') || lowered.includes('staring into camera lens')) {
    return raw;
  }
  return `${raw}, ${CORE_NO_CAMERA_NEGATIVE}`;
};

const normalizeAspectRatio = (value: unknown) => {
  const raw = String(value || '').trim();
  return ['1:1', '3:4', '4:3', '9:16', '16:9'].includes(raw) ? raw : '3:4';
};

const normalizeImageSize = (value: unknown) => {
  const raw = String(value || '').trim();
  if (!raw || raw.toLowerCase() === 'default') return undefined;
  const aliases: Record<string, string> = {
    '512px': '0.5K',
    '0.5k': '0.5K',
    '0.5K': '0.5K',
    '1024px': '1K',
    '1k': '1K',
    '1K': '1K',
    '2048px': '2K',
    '2k': '2K',
    '2K': '2K',
    '4096px': '4K',
    '4k': '4K',
    '4K': '4K',
  };
  return aliases[raw] || aliases[raw.toLowerCase()];
};

const requireApiKey = (apiKey?: string) => {
  if (!apiKey || apiKey.trim().length === 0) {
    throw new Error("Missing API key.");
  }
  return apiKey.trim();
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const dataUriToImage = (dataUri: string): { imageBytes: string; mimeType: string } => {
  const match = dataUri.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) {
    throw new Error("Invalid image data URI.");
  }
  return { mimeType: match[1], imageBytes: match[2] };
};

const fileToImage = async (file: File): Promise<{ imageBytes: string; mimeType: string }> => {
  const part = await fileToGenerativePart(file);
  return { imageBytes: part.inlineData.data, mimeType: part.inlineData.mimeType };
};

export const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1];
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Analyzes an environment image and returns a concise descriptive text.
 */
export const analyzeEnvironment = async (file: File, apiKey?: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: requireApiKey(apiKey) });
    const imgPart = await fileToGenerativePart(file);
    const response = await ai.models.generateContent({
      model: MODEL_LOGIC_JSON,
      contents: [
        {
          parts: [
            imgPart,
            { text: "Identify the location and lighting in this image. Return a simple, concise description (max 10 words). Example: 'Modern sunlit minimalist cafe'. No conversational filler." }
          ]
        }
      ],
      config: { httpOptions: { timeout: 300_000 } },
    });
    return response.text?.trim() || "Realistic background.";
  } catch (error) {
    console.error("Environment analysis failed:", error);
    return "A realistic natural background.";
  }
};

/**
 * Analyzes a fashion lay image and returns a simple descriptive text.
 * Now specifically looks for props/accessories.
 */
export const analyzeFashion = async (file: File, apiKey?: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: requireApiKey(apiKey) });
    const imgPart = await fileToGenerativePart(file);
    const response = await ai.models.generateContent({
      model: MODEL_LOGIC_JSON,
      contents: [
        {
          parts: [
            imgPart,
            { text: "Identify the main clothing pieces, colors, and any non-clothing props (bags, coffee, phone, etc) in this flat-lay. Return a concise description. If props exist, explicitly mention them. Example: 'Black blazer over white tee with a brown leather handbag'. Max 15 words." }
          ]
        }
      ],
      config: { httpOptions: { timeout: 300_000 } },
    });
    return response.text?.trim() || "Outfit from reference.";
  } catch (error) {
    console.error("Fashion analysis failed:", error);
    return "A stylish outfit.";
  }
};

const buildFinalPromptFast = async (jsonPrompt: any, apiKey?: string): Promise<{ prompt: string; negativePrompt: string }> => {
  const ai = new GoogleGenAI({ apiKey: requireApiKey(apiKey) });
  const response = await ai.models.generateContent({
    model: MODEL_PROMPT_BUILDER,
    contents: [
      {
        parts: [
          {
            text:
              "You are a prompt builder. Return STRICT JSON with keys: prompt, negative_prompt. No markdown, no commentary.",
          },
          { text: `Always include this brand rule in negative_prompt: ${CORE_NO_CAMERA_NEGATIVE}.` },
          { text: JSON.stringify(jsonPrompt) },
        ],
      },
    ],
    config: { httpOptions: { timeout: 300_000 }, responseMimeType: 'application/json' as any },
  });
  try {
    const parsed = JSON.parse(response.text || '{}');
    return {
      prompt: String(parsed.prompt || ''),
      negativePrompt: mergeNegativePrompt(String(parsed.negative_prompt || '')),
    };
  } catch {
    return {
      prompt: `Create a photorealistic portrait. Use these technical specs: ${JSON.stringify(jsonPrompt)}`,
      negativePrompt: mergeNegativePrompt('blurry, low quality, watermark, text, logo, wrong eyeglasses'),
    };
  }
};

export const generateModelWithGlasses = async (
  glassesFile: File,
  fashionFile: File | null,
  fashionDescription: string | null,
  envDescription: string | null,
  attributes: ModelAttributes,
  customSpecs: Record<string, string> | null,
  specificSeed: number,
  apiKey?: string
): Promise<{ imageUrl: string; promptJson: string; mimeType?: string }> => {
  try {
    const ai = new GoogleGenAI({ apiKey: requireApiKey(apiKey) });
    const glassesPart = await fileToGenerativePart(glassesFile);
    const parts: any[] = [glassesPart];
    
    // Maintain visual consistency by passing reference images
    if (fashionFile && attributes.clothing.includes("1")) {
      const fashionPart = await fileToGenerativePart(fashionFile);
      parts.push(fashionPart);
    }

    const colorGradingPrompts: Record<string, string> = {
      "Film Simulation": "Analog film aesthetic, subtle grain, natural skin tones, soft shadows.",
      "Magazine": "High-fashion magazine editorial look. Natural contrast, slight saturation, sharp focus, vibrant and clean colors.",
      "Web Use": "E-commerce standard. Middle tone focus with natural color feel, accurate and realistic color representation."
    };

    const environmentPrompts: Record<string, string> = {
      "Reference upload (default)": envDescription || "The environment from the reference.",
      "Clean Spacious Room": "Inside a clean, minimalist white room with soft shadows.",
      "Modern Office": "Sleek contemporary office interior with blurred workstations and architectural glass.",
      "South East Asian Park": "Tropical lush park in Southeast Asia, vibrant greenery and dappled sunlight.",
      "Urban Walking Path (SEA)": "Modern urban pedestrian walkway in a Southeast Asian city, architectural elements in distance.",
      "Midday Coffee Shop": "Stylish coffee shop interior with natural midday light streaming through large windows."
    };

    const styleProfile = getStyleProfile(attributes.ethnicity, attributes.gender);
    const expressionPrompt = getExpressionPrompt(attributes.facialExpression);

    // Detect if fashion lay description suggests the model should be holding something
    const propKeywords = ["holding", "bag", "handbag", "cup", "phone", "smartphone", "book", "magazine", "wallet", "accessory"];
    const fashionHasProps = fashionDescription && propKeywords.some(kw => fashionDescription.toLowerCase().includes(kw));

    const getHandPropsPromptValue = () => {
      // If props appear in fashion lay upload, ignore user hand posture selection
      if (fashionHasProps) {
        return "The model is naturally interacting with the accessories identified in the fashion reference.";
      }
      
      const val = attributes.handProps.toLowerCase();
      const isPosture = val.includes("relaxed") || val.includes("touching") || val.includes("pocket") || val.includes("clasped");
      
      if (isPosture) {
        return `Hand posture: ${attributes.handProps}.`;
      }
      return `Model is holding a ${attributes.handProps}.`;
    };

    const jsonPrompt = {
      subject: `A ${attributes.ethnicity} ${attributes.gender} model, age ${attributes.age}.`,
      eyewear: "Model is wearing the exact eyeglasses shown in the primary reference image.",
      clothing: (fashionDescription && attributes.clothing.includes("1"))
        ? fashionDescription 
        : attributes.clothing,
      custom_specs: customSpecs || {},
      identity_style_profile: styleProfile?.profile || null,
      features: getIdentityFeaturesPrompt(attributes.ethnicity),
      skin: attributes.skinTexture,
      hair: attributes.hairStyle,
      beauty_grooming: styleProfile?.beautyPrompt || "Natural commercial grooming and restrained makeup.",
      hair_finish: styleProfile?.hairPrompt || "Natural polished hair finish.",
      expression: expressionPrompt,
      environment: environmentPrompts[attributes.environment] || attributes.environment,
      hand_props_posture: getHandPropsPromptValue(),
      composition: {
        pose: `The model is ${attributes.pose}.`,
        shot_type: attributes.shotType,
      },
      photography: {
        style: attributes.artStyle,
        lighting: attributes.lighting,
        color_grading: colorGradingPrompts[attributes.colorGrading] || attributes.colorGrading,
        skin_detail: attributes.skinTexture,
        negative_aspect: CORE_NO_CAMERA_NEGATIVE
      }
    };

    const textPrompt = `
      Create a photorealistic portrait.
      1. Model MUST wear the eyeglasses from the first image.
      2. If clothing reference is provided, replicate the style, items, and accessories from that image: ${jsonPrompt.clothing}.
      3. Interaction/Posture: ${jsonPrompt.hand_props_posture}.
      4. Environment: ${jsonPrompt.environment}.
      4b. Expression Direction: ${expressionPrompt}
      4c. Styling Direction: ${styleProfile?.beautyPrompt || 'Natural commercial styling.'}
      4d. Hair Finish Direction: ${styleProfile?.hairPrompt || 'Natural polished hair finish.'}
      4e. Custom Specs: ${JSON.stringify(customSpecs || {})}
      5. Full Technical Guidelines: ${JSON.stringify(jsonPrompt)}
      NEGATIVE: ${CORE_NO_CAMERA_NEGATIVE}, western features, caucasian, european face, glasses mismatch.
    `;

    const built = await buildFinalPromptFast(jsonPrompt, apiKey);
    const genderHairRule = buildGenderHairRule(attributes);
    const resolvedGender = String(attributes.gender || '').trim();
    const resolvedHairStyle = String(attributes.hairStyle || '').trim();

    const modelName = MODEL_IMAGE_GENERATION;

    const imageConfig: any = {
      aspectRatio: normalizeAspectRatio(attributes.aspectRatio),
    };
    if (Number.isFinite(Number(specificSeed))) imageConfig.seed = Number(specificSeed);

    if (modelName === MODEL_IMAGE_GENERATION) {
      const normalizedSize = normalizeImageSize(attributes.imageSize);
      if (normalizedSize) imageConfig.imageSize = normalizedSize;
    }

    const doRequest = async (includeReferenceImage: boolean) => {
      const usedParts = includeReferenceImage ? parts : parts.slice(1); // remove glasses ref only
      const response = await ai.models.generateContent({
        model: modelName,
        contents: {
          parts: [
            ...usedParts,
            { text: `${built.prompt}\n\nNEGATIVE: ${mergeNegativePrompt(built.negativePrompt)}\n\n${textPrompt}\n\nRules: ${genderHairRule}` },
          ],
        },
        config: {
          httpOptions: { timeout: 300_000 },
          responseModalities: ['IMAGE'] as any,
          imageConfig,
        } as any,
      });
      return response;
    };

    let response: any;
    try {
      response = await doRequest(true);
    } catch (e: any) {
      // If Gemini rejects the reference image, retry without it.
      const msg = String(e?.message || '').toLowerCase();
      const status = e?.status || e?.code || e?.response?.status;
      if (status === 400 || msg.includes('400') || msg.includes('bad request')) {
        response = await doRequest(false);
      } else {
        throw e;
      }
    }

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const mimeType = (part.inlineData as any).mimeType || 'image/png';
          return { 
            imageUrl: `data:${mimeType};base64,${part.inlineData.data}`,
            promptJson: JSON.stringify({ ...jsonPrompt, resolved_gender: resolvedGender, resolved_hair_style: resolvedHairStyle, resolved_style_profile: styleProfile?.profile || null, enforced_rule: genderHairRule, prompt: built.prompt, negative_prompt: mergeNegativePrompt(built.negativePrompt) }, null, 2),
            mimeType,
          };
        }
      }
    }
    throw new Error("No image generated.");
  } catch (error: any) {
    throw new Error(error.message || "API Error");
  }
};

export const editGeneratedImage = async (imageDataUri: string, instruction: string, apiKey?: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: requireApiKey(apiKey) });
  const base64Data = imageDataUri.replace(/^data:image\/\w+;base64,/, "");
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { inlineData: { mimeType: 'image/png', data: base64Data } },
        { text: `Edit: ${instruction}. Keep eyeglasses and outfit consistent. Negative: looking directly to camera.` }
      ],
    },
  });
  const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
  if (!part?.inlineData) return imageDataUri;
  const mimeType = (part.inlineData as any).mimeType || 'image/png';
  return `data:${mimeType};base64,${part.inlineData.data}`;
};

export const generateVideoFromImage = async (params: {
  imageDataUri?: string;
  imageFile?: File;
  prompt: string;
  negativePrompt: string;
  seed?: number;
  fps: number;
  durationSeconds: number;
  apiKey?: string;
}): Promise<{ videoUrl: string; seedUsed?: number }> => {
  const ai = new GoogleGenAI({ apiKey: requireApiKey(params.apiKey) });
  const image = params.imageDataUri
    ? dataUriToImage(params.imageDataUri)
    : params.imageFile
      ? await fileToImage(params.imageFile)
      : null;

  if (!image) {
    throw new Error("Missing input image.");
  }

  let operation: any = await ai.models.generateVideos({
    model: 'veo-2.0-generate-001',
    image: {
      imageBytes: image.imageBytes,
      mimeType: image.mimeType,
    },
    prompt: params.prompt,
    config: {
      numberOfVideos: 1,
      fps: params.fps,
      durationSeconds: params.durationSeconds,
      seed: params.seed,
      negativePrompt: params.negativePrompt,
      enhancePrompt: false,
    },
  });

  // Poll until done. Veo operations can take a while.
  for (let i = 0; i < 60 && !operation.done; i++) {
    await sleep(5000);
    operation = await ai.operations.getVideosOperation({ operation });
  }

  if (!operation.done) {
    throw new Error("Video generation is taking too long. Try again shortly.");
  }

  const video = operation.response?.generatedVideos?.[0]?.video;
  if (!video) {
    throw new Error("No video generated.");
  }

  if (video.videoBytes && video.mimeType) {
    return { videoUrl: `data:${video.mimeType};base64,${video.videoBytes}`, seedUsed: params.seed };
  }
  if (video.uri) {
    return { videoUrl: video.uri, seedUsed: params.seed };
  }

  throw new Error("Unsupported video response.");
};
