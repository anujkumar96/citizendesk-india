import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { complaintCategories } from "@/src/data/complaints";

export function CategoryGrid() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="categories-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-blue-700">Complaint categories</p>
          <h2 id="categories-title" className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">Start with the right forum, not guesswork.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Common grievance paths grouped around real citizen problems and the authorities that usually handle them.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {complaintCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.title} href={category.href} className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-10 items-center justify-center rounded-md bg-blue-50 text-blue-700"><Icon className="size-5" aria-hidden="true" /></span>
                  <ArrowUpRight className="size-4 text-slate-400 transition group-hover:text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-950">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                <dl className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <div><dt className="font-semibold text-slate-700">Authority</dt><dd>{category.authority}</dd></div>
                  <div><dt className="font-semibold text-slate-700">Timeline</dt><dd>{category.timeframe}</dd></div>
                </dl>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
