import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/src/config/site";

const trustSignals = ["Authority discovery", "Procedure guidance", "Draft preparation"] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50" aria-labelledby="home-hero-title">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">Independent citizen assistance for India</p>
          <h1 id="home-hero-title" className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Navigate complaint procedures with calm, evidence-backed guidance. CitizenDesk India helps you identify the right authority and prepare your next step with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/complaint-finder" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Start complaint finder
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/blog" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Read procedure guides
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            {trustSignals.map((signal) => (
              <li key={signal} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-600" aria-hidden="true" />
                {signal}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70">
          <div className="rounded-md bg-slate-950 p-5 text-white">
            <p className="text-sm font-medium text-blue-200">Complaint readiness</p>
            <div className="mt-5 space-y-4">
              {[
                ["Issue type", "Banking transaction dispute"],
                ["Likely authority", "RBI Integrated Ombudsman"],
                ["Next step", "Check bank response and prepare escalation"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
                  <p className="mt-1 text-base font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            <div className="rounded-md border border-slate-200 p-4">
              <p className="text-2xl font-semibold text-slate-950">Clear</p>
              <p className="mt-1 text-sm text-slate-600">Know where to go first.</p>
            </div>
            <div className="rounded-md border border-slate-200 p-4">
              <p className="text-2xl font-semibold text-slate-950">Prepared</p>
              <p className="mt-1 text-sm text-slate-600">File with better context.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

