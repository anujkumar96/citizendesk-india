import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

import { Container } from "@/src/components/design/Container";
import { Section } from "@/src/components/design/Section";
import { guides } from "@/src/data/guides/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default async function GuideDetailPage({ params }: PageProps<"/[locale]/guides/[slug]">) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();

  return <GuideDetail guide={guide} />;
}

function GuideDetail({ guide }: { guide: (typeof guides)[number] }) {
  const t = useTranslations("pages");
  const common = useTranslations("common");
  const guideText = useTranslations("guides");

  return (
    <Section className="bg-white dark:bg-slate-950">
      <Container className="max-w-4xl">
        <p className="text-sm font-semibold text-[var(--brand)]">{guideText(`categories.${guide.categoryKey}`)}</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">{guideText(`${guide.slug}.title`)}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{guideText(`${guide.slug}.overview`)}</p>
        <a href={guide.officialUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20" aria-label={`${common("officialResource")}: ${guide.officialName}`}>
          {guide.officialName} <ExternalLink className="size-4" />
        </a>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.06]">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{t("guideCovers")}</h2>
          <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
            <li>{t("guidePointAuthority")}</li>
            <li>{t("guidePointDocuments")}</li>
            <li>{t("guidePointEscalation")}</li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
