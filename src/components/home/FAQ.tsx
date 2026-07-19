import { homepageFaq } from "@/src/data/faq";

export function FAQ() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24" aria-labelledby="faq-title">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-blue-700">FAQ</p>
          <h2 id="faq-title" className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">Straight answers before you start.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Clear expectations are part of trust. CitizenDesk India should help users understand both what the platform does and what it does not do.</p>
        </div>
        <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {homepageFaq.map((item) => (
            <details key={item.question} className="group p-6 open:bg-white">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
                <span className="flex items-center justify-between gap-6">
                  {item.question}
                  <span className="text-xl leading-none text-blue-700 group-open:hidden" aria-hidden="true">+</span>
                  <span className="hidden text-xl leading-none text-blue-700 group-open:inline" aria-hidden="true">-</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
