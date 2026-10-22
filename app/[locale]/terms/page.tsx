import { getTranslations } from "next-intl/server";

import { Container } from "@/src/components/design/Container";
import { Section } from "@/src/components/design/Section";

export default async function TermsPage({ params }: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages" });
  const sections = t.raw("termsSections") as { title: string; body: string }[];

  return (
    <Section className="bg-white dark:bg-slate-950">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">
          {t("termsTitle")}
        </h1>
        <div className="mt-8 space-y-8">
          {sections.map(({ title, body }) => (
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
