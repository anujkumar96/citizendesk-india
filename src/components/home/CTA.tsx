import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="cta-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-slate-950 px-6 py-12 text-center sm:px-10 lg:px-16">
          <h2 id="cta-title" className="mx-auto max-w-3xl text-3xl font-semibold tracking-normal text-white sm:text-4xl">Find the right complaint path before you file.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">Start with the issue category and build from there: authority, procedure, draft structure, and escalation readiness.</p>
          <div className="mt-8 flex justify-center">
            <Link href="/complaint-finder" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Open complaint finder
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

