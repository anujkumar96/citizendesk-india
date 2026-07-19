import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

import { footerNavigation } from "@/src/constants/navigation";
import { Link } from "@/src/i18n/navigation";

const groups = [
  ["platform", footerNavigation.platform],
  ["company", footerNavigation.company],
  ["legal", footerNavigation.legal],
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const common = useTranslations("common");

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8 lg:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" aria-label={`${common("brand")} home`}>
            <span className="flex size-10 items-center justify-center rounded-lg bg-blue-600 text-white"><ShieldCheck className="size-5" aria-hidden="true" /></span>
            <span className="font-semibold tracking-normal text-slate-950 dark:text-white">{common("brand")}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">{common("tagline")}</p>
          <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">{common("independent")}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {groups.map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{t(title)}</h3>
              <ul className="mt-4 space-y-3" aria-label={`${t(title)} links`}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-600 transition hover:text-blue-700 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:text-blue-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {common("brand")}. {t("rights")}</p>
          <p>{t("built")}</p>
        </div>
      </div>
    </footer>
  );
}
