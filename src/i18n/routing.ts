import { defineRouting } from "next-intl/routing";

export const locales = ["en", "hi", "bn", "mr", "ta", "te", "gu", "kn", "ml", "pa", "or", "as"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  bn: "বাংলা",
  mr: "मराठी",
  ta: "தமிழ்",
  te: "తెలుగు",
  gu: "ગુજરાતી",
  kn: "ಕನ್ನಡ",
  ml: "മലയാളം",
  pa: "ਪੰਜਾਬੀ",
  or: "ଓଡ଼ିଆ",
  as: "অসমীয়া",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
