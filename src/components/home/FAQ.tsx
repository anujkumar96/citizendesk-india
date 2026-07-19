import { useTranslations } from "next-intl";

import { Heading } from "@/src/components/design/Heading";
import { Section } from "@/src/components/design/Section";

const faqKeys = ["help", "government", "file", "categories", "privacy"] as const;

export function FAQ() {
  const home = useTranslations("home");
  const faq = useTranslations("faq");

  return (
    <Section className="bg-slate-50 dark:bg-slate-900/60" aria-labelledby="faq-title">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Heading eyebrow="FAQ" id="faq-title" title={home("faqTitle")} description={home("faqText")} />
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.06]">
          {faqKeys.map((key) => (
            <details key={key} className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-white">
                <span className="flex items-center justify-between gap-6">{faq(`${key}.question`)}<span className="text-xl leading-none text-blue-700 group-open:hidden dark:text-blue-300" aria-hidden="true">+</span><span className="hidden text-xl leading-none text-blue-700 group-open:inline dark:text-blue-300" aria-hidden="true">-</span></span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq(`${key}.answer`)}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
