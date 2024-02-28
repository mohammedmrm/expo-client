import ar from "@/i18n/lng/ar.json";
import en from "@/i18n/lng/en.json";
import ku from "@/i18n/lng/ku.json";

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  ku: {
    translation: ku,
  },
};

export type Language = keyof typeof resources;
