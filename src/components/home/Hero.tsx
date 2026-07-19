import { ArrowRight, CheckCircle2, FileText, Landmark, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/src/i18n/navigation";

const trustSignals = ["Authority discovery", "Procedure guidance", "Draft preparation"] as const;

export function Hero() {
  const t = useTranslations("home");
  const common = useTranslations("common");

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(180deg,#f8fafc,#ffffff)] dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.28),transparent_32%),linear-gradient(180deg,#020617,#0f172a)]" aria-labelledby="home-hero-title">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40 dark:opacity-20" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm backdrop-blur dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-200">{t("eyebrow")}</p>
          <h1 id="home-hero-title" className="mt-6 max-w-5xl text-5xl font-semibold tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{t("heroText")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/complaint-finder" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              {common("start")}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/guides" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white/80 px-5 text-sm font-semibold text-slate-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
              {common("learn")}
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            {trustSignals.map((signal) => (
              <li key={signal} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                {signal}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 hidden rounded-lg border border-white/60 bg-white/85 p-4 shadow-xl shadow-slate-300/50 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/30 sm:block">
            <div className="flex items-center gap-3"><ShieldCheck className="size-5 text-green-600" /><span className="text-sm font-semibold text-slate-950 dark:text-white">Verified process</span></div>
          </div>
          <div className="absolute -right-2 bottom-12 hidden rounded-lg border border-white/60 bg-white/85 p-4 shadow-xl shadow-blue-200/60 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/30 md:block">
            <div className="flex items-center gap-3"><Landmark className="size-5 text-blue-600" /><span className="text-sm font-semibold text-slate-950 dark:text-white">Authority mapped</span></div>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-2xl shadow-slate-300/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-black/40">
            <div className="rounded-xl bg-slate-950 p-6 text-white dark:bg-black/40">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-blue-200">Complaint readiness</p>
                <FileText className="size-5 text-blue-200" aria-hidden="true" />
              </div>
              <div className="mt-6 space-y-4">
                {[["Issue type", "Banking transaction dispute"], ["Likely authority", "RBI Integrated Ombudsman"], ["Next step", "Check response and prepare escalation"]].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
                    <p className="mt-1 text-base font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5"><p className="text-2xl font-semibold text-slate-950 dark:text-white">Clear</p><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Know where to go first.</p></div>
              <div className="rounded-lg border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5"><p className="text-2xl font-semibold text-slate-950 dark:text-white">Prepared</p><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">File with better context.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
