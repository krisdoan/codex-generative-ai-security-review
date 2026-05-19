export const STYLE_IDENTITY_OPTIONS = [
  "Randomize",
  "Japanese",
  "Taiwan",
  "Hong Kong",
  "Thailand",
  "Singapore",
  "Vietnamese",
];

export const NATURAL_EXPRESSION_OPTIONS = [
  "Randomize",
  "Soft natural smile",
  "Warm closed-lip smile",
  "Gentle candid smile while looking off-camera",
  "Listening to someone off-camera",
  "Speaking softly to someone off-camera",
  "Calm thoughtful gaze away from camera",
  "Quiet confident relaxed expression",
  "Gentle laugh just after speaking",
  "Bright friendly smile with relaxed eyes",
  "Small amused smile as if reacting naturally",
  "Soft open-lip smile in mid conversation",
  "Attentive expression with subtle curiosity",
  "Relaxed neutral face with natural warmth",
  "Polite service-style smile, natural and approachable",
  "Natural pause between speaking and smiling",
  "Light conversational expression with soft eye contact off-camera",
  "Gentle side glance with a hint of a smile",
  "Thoughtful listening face with calm breathing",
  "Warm expression as if greeting someone nearby",
  "Subtle smile while quietly acknowledging someone off-camera",
];

const EXPRESSION_PROMPTS = {
  "Soft natural smile":
    "A soft natural smile with relaxed cheeks and authentic warmth, never exaggerated.",
  "Warm closed-lip smile":
    "A warm closed-lip smile, subtle and polite, with relaxed eyes and natural facial tension.",
  "Gentle candid smile while looking off-camera":
    "A gentle candid smile while looking slightly off-camera, as if reacting to a real person nearby.",
  "Listening to someone off-camera":
    "A natural listening expression while focusing on someone off-camera, attentive and relaxed.",
  "Speaking softly to someone off-camera":
    "A realistic mid-conversation expression, softly speaking to someone off-camera with calm natural mouth movement.",
  "Calm thoughtful gaze away from camera":
    "A calm thoughtful expression with the gaze directed away from camera, natural and unforced.",
  "Quiet confident relaxed expression":
    "A quiet confident expression with relaxed mouth, soft eyes, and no stiffness.",
  "Gentle laugh just after speaking":
    "A light post-conversation laugh, subtle and elegant, captured in a natural candid moment.",
  "Bright friendly smile with relaxed eyes":
    "A bright friendly smile with relaxed eyes and natural warmth, suitable for candid lifestyle photography.",
  "Small amused smile as if reacting naturally":
    "A small amused smile, as if naturally reacting to a real person or comment off-camera.",
  "Soft open-lip smile in mid conversation":
    "A soft open-lip smile in the middle of a natural conversation, gentle and realistic.",
  "Attentive expression with subtle curiosity":
    "An attentive expression with subtle curiosity, as if listening and processing something interesting nearby.",
  "Relaxed neutral face with natural warmth":
    "A relaxed neutral expression that still feels warm, human, and approachable, never blank or stiff.",
  "Polite service-style smile, natural and approachable":
    "A polite approachable smile with natural restraint, welcoming but not overly posed.",
  "Natural pause between speaking and smiling":
    "A natural in-between expression, like a pause between speaking and smiling, candid and lifelike.",
  "Light conversational expression with soft eye contact off-camera":
    "A light conversational expression with soft eye contact toward someone off-camera, easy and realistic.",
  "Gentle side glance with a hint of a smile":
    "A gentle side glance with a hint of a smile, calm and natural like a candid lifestyle moment.",
  "Thoughtful listening face with calm breathing":
    "A thoughtful listening expression with calm breathing and relaxed facial muscles, subtle and believable.",
  "Warm expression as if greeting someone nearby":
    "A warm greeting expression directed toward someone nearby, friendly, natural, and lightly animated.",
  "Subtle smile while quietly acknowledging someone off-camera":
    "A subtle acknowledging smile toward someone off-camera, understated and authentic.",
};

const STYLE_PROFILES = {
  Japanese: {
    female: {
      profile: "jp_female_commercial",
      hairStyles: [
        "Female – Middle-Part Straight Hair, balanced and symmetrical for product focus",
        "Female – Tucked-Behind-Ears, exposes temples clearly on both sides",
        "Female – Low Ponytail, minimal and clean, keeps attention on the glasses",
        "Female – Short Bob (Chin Length), stylish and frame-friendly",
        "Japanese Female – Soft Layer Bob, polished ends, clean Tokyo salon silhouette",
        "Japanese Female – Straight Medium Hair with Soft Airy Bangs, neat and refined",
      ],
      beautyPrompt:
        "Japanese commercial beauty styling: clean natural-glow base, soft translucency, refined straight or softly rounded brows, subtle eyeliner, delicate blush, sheer glossy lip, polished restrained finish. Avoid heavy contour, oversized lashes, or dramatic glam.",
      hairPrompt:
        "Japanese salon finish: precise silhouette, tidy edges, controlled shine, refined natural dark hair tones.",
    },
    male: {
      profile: "jp_male_commercial",
      hairStyles: [
        "Male – Side Part, structured and mature, ideal for business eyewear",
        "Male – Classic Short Cut, clean and professional, keeps focus on the glasses",
        "Male – Textured Short Crop, casual and modern without covering the frame",
        "Male – Short Wavy / Perm Style, trendy in Japan, adds texture while keeping frames visible",
        "Japanese Male – Clean Center Part, neat temples, modern Tokyo salon finish",
        "Japanese Male – Soft Straight Fringe, tidy and understated",
      ],
      beautyPrompt:
        "Japanese men's grooming: clean understated skin, neat brows, minimal facial hair, polished but natural finish, contemporary Tokyo commercial styling.",
      hairPrompt:
        "Japanese men's salon finish: tidy silhouette around temples and ears, natural dark hair, controlled texture.",
    },
  },
  Taiwan: {
    female: {
      profile: "tw_female_commercial",
      hairStyles: [
        "Female – Middle-Part Straight Hair, balanced and symmetrical for product focus",
        "Female – Long Straight Hair Slightly Pulled Back, soft and controlled look",
        "Female – Half-Up Half-Down, neat front with natural volume",
        "Taiwan Female – Glossy Long Layers with Soft Face Framing",
        "Taiwan Female – Airy Lob with Light See-Through Bangs",
        "Taiwan Female – Soft Layer Bob with subtle inward ends",
      ],
      beautyPrompt:
        "Taiwanese commercial beauty styling: luminous natural skin, soft peach or rose blush, refined brows, subtle eye definition, glossy fresh lip, polished approachable finish.",
      hairPrompt:
        "Taiwan salon styling: smooth glossy texture, soft movement, elegant face framing, modern feminine finish.",
    },
    male: {
      profile: "tw_male_commercial",
      hairStyles: [
        "Male – Textured Short Crop, casual and modern without covering the frame",
        "Male – Side Part, structured and mature, ideal for business eyewear",
        "Taiwan Male – Soft Two-Block Texture, neat and lightweight",
        "Taiwan Male – Natural Center Part with gentle movement",
        "Taiwan Male – Clean Layered Short Cut with soft volume",
      ],
      beautyPrompt:
        "Taiwanese men's grooming: fresh clean skin, tidy brows, natural polished finish, youthful but refined commercial styling.",
      hairPrompt:
        "Taiwan salon men's styling: lightweight texture, soft volume, neat contemporary silhouette.",
    },
  },
  "Hong Kong": {
    female: {
      profile: "hk_female_commercial",
      hairStyles: [
        "Female – Slick Back Hair, modern and sharp, clearly shows frame shape",
        "Female – Middle-Part Straight Hair, balanced and symmetrical for product focus",
        "Female – Short Bob (Chin Length), stylish and frame-friendly",
        "Hong Kong Female – Sleek Blowout Lob with polished ends",
        "Hong Kong Female – Glossy Side-Part Long Layers, refined and urban",
      ],
      beautyPrompt:
        "Hong Kong commercial beauty styling: polished modern base, softly defined eyeliner, elegant brows, refined blush placement, muted glossy lip, chic urban finish.",
      hairPrompt:
        "Hong Kong salon styling: sleek polished finish, urban sophistication, controlled shine, refined shape.",
    },
    male: {
      profile: "hk_male_commercial",
      hairStyles: [
        "Male – Side Part, structured and mature, ideal for business eyewear",
        "Male – Slick Back, sharp and confident, highlights temples and hinges",
        "Hong Kong Male – Polished Smart Side Part, urban and refined",
        "Hong Kong Male – Clean Textured Crop with subtle volume",
        "Hong Kong Male – Sharp Center Part with professional finish",
      ],
      beautyPrompt:
        "Hong Kong men's grooming: refined city-smart grooming, clean skin, neat brows, polished contemporary finish.",
      hairPrompt:
        "Hong Kong men's styling: sleek urban polish, controlled volume, sophisticated business-casual silhouette.",
    },
  },
  Thailand: {
    female: {
      profile: "th_female_commercial",
      hairStyles: [
        "Female – Long Straight Hair Slightly Pulled Back, soft and controlled look",
        "Female – Soft Waves (Below Cheek Level), natural movement without hiding frames",
        "Female – Half-Up Half-Down, neat front with natural volume",
        "Thailand Female – Glossy Long Layers with soft movement",
        "Thailand Female – Face-Framing Layers with polished volume",
      ],
      beautyPrompt:
        "Thai commercial beauty styling: radiant healthy skin, soft eye definition, warm natural blush, glossy hydrated lips, polished elegant finish. Avoid heavy western contour.",
      hairPrompt:
        "Thai salon styling: glossy healthy hair, controlled movement, elegant feminine finish suited to warm climate polish.",
    },
    male: {
      profile: "th_male_commercial",
      hairStyles: [
        "Male – Textured Short Crop, casual and modern without covering the frame",
        "Male – Short Wavy / Perm Style, trendy in Japan, adds texture while keeping frames visible",
        "Thailand Male – Soft Middle Part with tidy shape",
        "Thailand Male – Clean Modern Crop with natural movement",
        "Thailand Male – Neat Short Wave with polished texture",
      ],
      beautyPrompt:
        "Thai men's grooming: healthy natural skin, neat brows, clean fresh grooming, stylish but relaxed commercial finish.",
      hairPrompt:
        "Thai men's styling: clean modern shape with controlled texture and an easy natural finish.",
    },
  },
  Singapore: {
    female: {
      profile: "sg_female_commercial",
      hairStyles: [
        "Female – Tucked-Behind-Ears, exposes temples clearly on both sides",
        "Female – Low Bun, elegant and tidy, suitable for premium eyewear",
        "Female – Low Ponytail, minimal and clean, keeps attention on the glasses",
        "Singapore Female – Sleek Straight Lob, humidity-controlled and polished",
        "Singapore Female – Controlled Long Layers with clean professional finish",
      ],
      beautyPrompt:
        "Singapore commercial beauty styling: clean professional natural makeup, fresh skin, softly defined brows, subtle eye emphasis, neat polished lip color, refined modern finish.",
      hairPrompt:
        "Singapore styling: humidity-aware polished finish, controlled flyaways, clean practical elegance, professional modern silhouette.",
    },
    male: {
      profile: "sg_male_commercial",
      hairStyles: [
        "Male – Classic Short Cut, clean and professional, keeps focus on the glasses",
        "Male – Side Part, structured and mature, ideal for business eyewear",
        "Singapore Male – Clean Short Textured Cut, polished and practical",
        "Singapore Male – Neat Center Part with lightweight control",
        "Singapore Male – Professional Crop with tidy taper",
      ],
      beautyPrompt:
        "Singapore men's grooming: clean professional grooming, tidy brows, healthy skin, refined understated commercial finish.",
      hairPrompt:
        "Singapore men's styling: practical polished structure, humidity-controlled texture, clean business-friendly silhouette.",
    },
  },
  Vietnamese: {
    female: {
      profile: "vn_female_commercial",
      hairStyles: [
        "Female – Middle-Part Straight Hair, balanced and symmetrical for product focus",
        "Female – Long Straight Hair Slightly Pulled Back, soft and controlled look",
        "Female – Low Ponytail, minimal and clean, keeps attention on the glasses",
        "Vietnamese Female – Glossy Long Dark Hair with elegant softness",
        "Vietnamese Female – Airy Straight Layers with delicate face framing",
      ],
      beautyPrompt:
        "Vietnamese commercial beauty styling: fresh luminous skin, soft blush, delicate eye definition, refined brows, glossy natural lip, elegant feminine finish.",
      hairPrompt:
        "Vietnamese styling: smooth glossy dark hair, elegant length, refined softness, polished modern finish.",
    },
    male: {
      profile: "vn_male_commercial",
      hairStyles: [
        "Male – Classic Short Cut, clean and professional, keeps focus on the glasses",
        "Male – Textured Short Crop, casual and modern without covering the frame",
        "Vietnamese Male – Soft Center Part with clean youthful shape",
        "Vietnamese Male – Tidy Straight Fringe with natural texture",
        "Vietnamese Male – Neat Side Part with polished finish",
      ],
      beautyPrompt:
        "Vietnamese men's grooming: fresh clean skin, natural brows, minimal facial hair, polished youthful commercial styling.",
      hairPrompt:
        "Vietnamese men's styling: neat modern silhouette, natural texture, clean refined finish.",
    },
  },
};

export const normalizeIdentityValue = (value) => {
  const raw = String(value || "").trim().toLowerCase();
  if (raw === "japanese") return "Japanese";
  if (raw === "taiwan" || raw === "taiwanese") return "Taiwan";
  if (raw === "hong kong" || raw === "hongkong" || raw === "hong konger") return "Hong Kong";
  if (raw === "thailand" || raw === "thai") return "Thailand";
  if (raw === "singapore" || raw === "singaporean") return "Singapore";
  if (raw === "vietnamese" || raw === "vietnam") return "Vietnamese";
  return String(value || "").trim();
};

export const normalizeBinaryGender = (value) => {
  const raw = String(value || "").trim().toLowerCase();
  if (raw === "male") return "Male";
  if (raw === "female") return "Female";
  return String(value || "").trim();
};

export const getExpressionPrompt = (value) =>
  EXPRESSION_PROMPTS[String(value || "").trim()] ||
  "A natural real-life expression, subtle and candid, never stiff or exaggerated.";

export const getStyleProfile = (identityValue, genderValue) => {
  const identity = normalizeIdentityValue(identityValue);
  const gender = normalizeBinaryGender(genderValue).toLowerCase() === "male" ? "male" : "female";
  const identityProfile = STYLE_PROFILES[identity];
  if (!identityProfile) return null;
  return {
    identity,
    gender: gender === "male" ? "Male" : "Female",
    ...identityProfile[gender],
  };
};

export const getHairStylePool = (identityValue, genderValue, availableOptions = []) => {
  const profile = getStyleProfile(identityValue, genderValue);
  const safeOptions = availableOptions.filter((option) => option !== "Randomize");
  const gender = normalizeBinaryGender(genderValue).toLowerCase();
  const genderFiltered = safeOptions.filter((option) => {
    if (gender === "male") return !/^female\b/i.test(option);
    if (gender === "female") return !/^male\b/i.test(option);
    return true;
  });
  if (!profile) return genderFiltered;
  const preferred = profile.hairStyles.filter((option) => genderFiltered.includes(option));
  return preferred.length > 0 ? preferred : genderFiltered;
};
