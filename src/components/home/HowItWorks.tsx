import { useTranslations } from "next-intl";

import { Heading } from "@/src/components/design/Heading";
import { Section } from "@/src/components/design/Section";
import { processStepKeys } from "@/src/data/complaints";

export function HowItWorks() {
  const home = useTranslations("home");
  const steps = useTranslations("process");

  return (
    <Section
      className="bg-slate-50 dark:bg-slate-900/60"
      aria-labelledby="how-it-works-title"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow={home("howEyebrow")}
          id="how-it-works-title"
          title={home("howTitle")}
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {processStepKeys.map((key, index) => (
            <li
              key={key}
              className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
                {index + 1}
              </span>
              <h3 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">
                {steps(`${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {steps(`${key}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
