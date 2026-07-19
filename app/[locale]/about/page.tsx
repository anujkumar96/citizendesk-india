import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/src/components/design/Container";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { Section } from "@/src/components/design/Section";

const values = ["Clarity before action", "Respect for official process", "Privacy by design", "Plain-language civic education"];

export default function AboutPage() {
  const t = useTranslations("pages");
  return (
    <Section className="bg-white dark:bg-slate-950">
      <Container>
        <div className="max-w-3xl"><p className="text-sm font-semibold text-blue-700 dark:text-blue-300">About</p><h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">{t("aboutTitle")}</h1><p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{t("aboutText")}</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {values.map((value) => <PremiumCard key={value} className="p-6"><CheckCircle2 className="size-5 text-green-600" /><h2 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{value}</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">A product principle that keeps CitizenDesk useful, responsible, and citizen-first as the platform grows.</p></PremiumCard>)}
        </div>
      </Container>
    </Section>
  );
}
