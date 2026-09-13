"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/src/i18n/navigation";

export default function LocaleError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("pages");
  const common = useTranslations("common");

  return (
    <main className="grid min-h-[70svh] place-items-center bg-slate-50 px-4 py-16 text-center dark:bg-slate-950">
      <div className="max-w-md">
        <p className="text-sm font-semibold text-[var(--brand)]">{t("errorEyebrow")}</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white">{t("errorTitle")}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{t("errorText")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => reset()} className="inline-flex h-11 items-center rounded-md bg-[var(--brand)] px-4 text-sm font-semibold text-white">
            {t("retry")}
          </button>
          <Link href="/complaint-finder" className="inline-flex h-11 items-center rounded-md border border-border bg-card px-4 text-sm font-semibold text-foreground">
            {common("openFinder")}
          </Link>
        </div>
      </div>
    </main>
  );
}
