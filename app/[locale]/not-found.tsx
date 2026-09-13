import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/src/i18n/navigation";

export default async function LocaleNotFound() {
  const locale = await getLocale();
  const t = await getTranslations("pages");
  const common = await getTranslations("common");

  return (
    <main className="grid min-h-[70svh] place-items-center bg-slate-50 px-4 py-16 text-center dark:bg-slate-950">
      <div className="max-w-md">
        <p className="text-sm font-semibold text-[var(--brand)]">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white">{t("notFoundTitle")}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{t("notFoundText")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" locale={locale} className="inline-flex h-11 items-center rounded-md bg-[var(--brand)] px-4 text-sm font-semibold text-white">
            {common("brand")}
          </Link>
          <Link href="/complaint-finder" locale={locale} className="inline-flex h-11 items-center rounded-md border border-border bg-card px-4 text-sm font-semibold text-foreground">
            {common("openFinder")}
          </Link>
        </div>
      </div>
    </main>
  );
}
