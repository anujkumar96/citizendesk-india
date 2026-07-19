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

  return (
    <Section className="bg-white dark:bg-slate-950">
      <Container className="max-w-4xl">
        <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">{guide.category}</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">{guide.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{guide.description}</p>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.06]">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">What this guide covers</h2>
          <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
            <li>Identify the correct first-level authority before escalation.</li>
            <li>Prepare facts, dates, evidence, and reference numbers clearly.</li>
            <li>Understand when to wait, follow up, or escalate responsibly.</li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
