export const splitNextSteps = (text: string) => {
  if (!text) return [];

  return text
    .split("،")
    .map((step) => step.trim())
    .filter(Boolean);
};
