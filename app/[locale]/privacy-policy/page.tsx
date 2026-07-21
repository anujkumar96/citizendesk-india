import { useTranslations } from "next-intl";

import { Container } from "@/src/components/design/Container";
import { Section } from "@/src/components/design/Section";

const sections = [
  [
    "Information we collect",
    "CitizenDesk India should collect only the information needed to provide guidance, respond to inquiries, and improve public content quality.",
  ],
  [
    "How information is used",
    "Information may be used to operate the platform, improve guides, prevent misuse, and respond to user support requests.",
  ],
  [
    "Sensitive complaint details",
    "Users should avoid submitting unnecessary sensitive personal data through public website forms until a secure assisted workflow is explicitly provided.",
  ],
  ["Contact", "For privacy questions, contact hello@citizendesk.in."],
];

export default function PrivacyPolicyPage() {
  const t = useTranslations("pages");
  return (
    <Section className="bg-white dark:bg-slate-950">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">
          {t("privacyTitle")}
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
