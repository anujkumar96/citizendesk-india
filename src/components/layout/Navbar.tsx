import { ArrowRight, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

import { LanguageSelector } from "@/src/components/controls/LanguageSelector";
import { ThemeToggle } from "@/src/components/controls/ThemeToggle";
import { Link } from "@/src/i18n/navigation";
import { mainNavigation } from "@/src/constants/navigation";

export function Navbar() {
  const t = useTranslations("nav");
  const common = useTranslations("common");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 shadow-sm shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/20">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          aria-label={`${common("brand")} home`}
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/25">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-semibold tracking-normal text-slate-950 dark:text-white sm:block">
            {common("brand")}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <LanguageSelector label={t("language")} />
            <ThemeToggle label={t("theme")} />
          </div>
          <Link
            href="/complaint-finder"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
          >
            {t("findAuthority")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </nav>
      <div className="flex gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        <LanguageSelector label={t("language")} />
        <ThemeToggle label={t("theme")} />
      </div>
    </header>
  );
}
