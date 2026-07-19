import { Building2, FileQuestion, Landmark, ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";

import { Heading } from "@/src/components/design/Heading";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";
import { platformFeatureKeys, platformStatistics } from "@/src/data/complaints";

const icons = { mapping: Landmark, procedure: FileQuestion, draft: ShieldAlert, learning: Building2 } as const;

export function Features() {
  const home = useTranslations("home");
  const features = useTranslations("features");
  const stats = useTranslations("stats");

  return (
    <Section className="bg-white dark:bg-slate-950" aria-labelledby="features-title">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Heading eyebrow={home("featuresEyebrow")} id="features-title" title={home("featuresTitle")} description={home("featuresText")} />
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {platformStatistics.map((value, index) => (
              <PremiumCard key={value} className="p-5">
                <dt className="text-sm text-slate-600 dark:text-slate-300">{stats(`items.${index}`)}</dt>
                <dd className="mt-2 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-3xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-200">{value}</dd>
              </PremiumCard>
            ))}
          </dl>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {platformFeatureKeys.map((key) => {
            const Icon = icons[key];
            return (
              <PremiumCard key={key} className="p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-400/10 dark:text-blue-300"><Icon className="size-5" aria-hidden="true" /></span>
                <h3 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">{features(`${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{features(`${key}.description`)}</p>
              </PremiumCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
