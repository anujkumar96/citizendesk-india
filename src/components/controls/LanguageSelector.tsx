"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";

import { AppSelect } from "@/src/components/controls/AppSelect";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { localeLabels, locales, type Locale } from "@/src/i18n/routing";

export function LanguageSelector({ label = "Language" }: { label?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex min-w-40 items-center gap-2">
      <Languages className="size-4 shrink-0 text-[var(--brand)]" aria-hidden="true" />
      <AppSelect
        label={label}
        value={locale}
        searchable
        options={locales.map((item) => ({ value: item, label: localeLabels[item] }))}
        onChange={(nextLocale) => {
          const query = Object.fromEntries(new URLSearchParams(window.location.search).entries());
          router.replace(
            Object.keys(query).length ? { pathname, query } : pathname,
            { locale: nextLocale as Locale },
          );
        }}
      />
    </div>
  );
}
