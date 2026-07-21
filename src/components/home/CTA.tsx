import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/src/i18n/navigation";

export function CTA() {
  const t = useTranslations("home");
  const common = useTranslations("common");

  return (
    <section
      className="bg-white py-20 dark:bg-slate-950 sm:py-24"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-6 py-14 text-center shadow-2xl shadow-slate-300/50 dark:bg-white/10 dark:shadow-black/30 sm:px-10 lg:px-16">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb55,transparent_40%)]"
            aria-hidden="true"
          />
          <div className="relative">
            <h2
              id="cta-title"
              className="mx-auto max-w-3xl text-3xl font-semibold tracking-normal text-white sm:text-4xl"
            >
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              {t("ctaText")}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/complaint-finder"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {common("openFinder")}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
