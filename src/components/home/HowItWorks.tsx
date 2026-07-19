import { processSteps } from "@/src/data/complaints";

export function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24" aria-labelledby="how-it-works-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-blue-700">How it works</p>
          <h2 id="how-it-works-title" className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">A calmer complaint process, step by step.</h2>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <span className="flex size-9 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">{index + 1}</span>
              <h3 className="mt-5 text-base font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

