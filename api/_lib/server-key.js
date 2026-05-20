export const getServerGeminiApiKey = async () => {
  const envKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GEMINI_APIKEY ||
    process.env.GOOGLE_APIKEY;
  if (envKey) return String(envKey);
  return null;
};

export const hasServerGeminiApiKey = () =>
  Boolean(
    process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.GEMINI_APIKEY ||
      process.env.GOOGLE_APIKEY
  );
