import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/src/components/design/Container";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";

export default function AboutPage() {
  const t = useTranslations("pages");
  const values = t.raw("aboutValues") as { title: string; body: string }[];

  return (
    <Section className="bg-white dark:bg-slate-950">
      <Container>
        <div className="max-w-3xl"><p className="text-sm font-semibold text-blue-700 dark:text-blue-300">{t("aboutEyebrow")}</p><h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">{t("aboutTitle")}</h1><p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{t("aboutText")}</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {values.map((value) => <PremiumCard key={value.title} className="p-6"><CheckCircle2 className="size-5 text-green-600" /><h2 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{value.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{value.body}</p></PremiumCard>)}
        </div>
      </Container>
    </Section>
  );
}
