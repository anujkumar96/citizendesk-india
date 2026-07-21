import { useTranslations } from "next-intl";

import { Container } from "@/src/components/design/Container";
import { Section } from "@/src/components/design/Section";

const sections = [
  [
    "Independent platform",
    "CitizenDesk India is not a government portal, court, law firm, or grievance authority.",
  ],
  [
    "Informational guidance",
    "Content is provided to help users understand procedures. It is not legal advice and should be verified with official sources.",
  ],
  [
    "User responsibility",
    "Users are responsible for the accuracy of their complaint details and final submissions to official portals or authorities.",
  ],
  [
    "Future services",
    "AI assistance, accounts, tracking, and paid features may be introduced later with additional terms.",
  ],
];

export default function TermsPage() {
  const t = useTranslations("pages");
  return (
    <Section className="bg-white dark:bg-slate-950">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">
          {t("termsTitle")}
        </h1>
        <div className="mt-8 space-y-8">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {body}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
