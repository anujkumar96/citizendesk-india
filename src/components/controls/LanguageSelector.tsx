"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";

import { AppSelect } from "@/src/components/controls/AppSelect";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { localeLabels, locales, type Locale } from "@/src/i18n/routing";

export function LanguageSelector({ label = "Language" }: { label?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);
  const [, startTransition] = useTransition();

  return (
    <div className="flex min-w-40 items-center gap-2">
      <Languages className="size-4 shrink-0 text-[var(--brand)]" aria-hidden="true" />
      <AppSelect
        label={label}
        value={pendingLocale ?? locale}
        searchable
        options={locales.map((item) => ({ value: item, label: localeLabels[item] }))}
        onChange={(nextLocale) => {
          const next = nextLocale as Locale;
          if (next === locale) return;
          setPendingLocale(next);
          const query = Object.fromEntries(new URLSearchParams(window.location.search).entries());
          startTransition(() => {
            router.replace(
              Object.keys(query).length ? { pathname, query } : pathname,
              { locale: next },
            );
          });
        }}
      />
    </div>
  );
}
