import { platformFeatures, platformStatistics } from "@/src/data/complaints";

export function Features() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="features-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-blue-700">Platform foundation</p>
            <h2 id="features-title" className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">Built for citizens who need clarity before action.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">CitizenDesk India prioritizes plain language, responsible escalation, and official-process awareness so users can move with confidence instead of frustration.</p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {platformStatistics.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-slate-200 p-5">
                  <dt className="text-sm text-slate-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-semibold text-slate-950">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <span className="flex size-10 items-center justify-center rounded-md bg-white text-blue-700 shadow-sm"><Icon className="size-5" aria-hidden="true" /></span>
                  <h3 className="mt-5 text-base font-semibold text-slate-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

