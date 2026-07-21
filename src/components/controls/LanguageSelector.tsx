"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { localeLabels, locales, type Locale } from "@/src/i18n/routing";

export function LanguageSelector({ label = "Language" }: { label?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <label className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white/70 px-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
      <Languages className="size-4 text-blue-600" aria-hidden="true" />
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={(event) =>
          router.replace(pathname, { locale: event.target.value as Locale })
        }
        className="bg-transparent text-sm outline-none"
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
