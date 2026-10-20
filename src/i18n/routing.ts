import { defineRouting } from "next-intl/routing";

export const locales = ["en", "hi", "as", "bn", "gu", "kn", "ml", "mr", "or", "pa", "ta", "te"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  as: "অসমীয়া",
  bn: "বাংলা",
  gu: "ગુજરાતી",
  kn: "ಕನ್ನಡ",
  ml: "മലയാളം",
  mr: "मराठी",
  or: "ଓଡ଼ିଆ",
  pa: "ਪੰਜਾਬੀ",
  ta: "தமிழ்",
  te: "తెలుగు",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
