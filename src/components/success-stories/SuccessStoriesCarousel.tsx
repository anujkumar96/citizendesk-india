"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

import type { SuccessStory } from "@/src/data/successStories";

type Labels = { issue: string; authority: string; outcome: string; timeline: string; takeaway: string; previous: string; next: string; choose: string };
const defaultLabels: Labels = { issue: "Issue raised", authority: "Authority", outcome: "Reported outcome", timeline: "Timeline", takeaway: "What citizens can learn", previous: "Previous documented case", next: "Next documented case", choose: "Choose documented case" };

export function SuccessStoriesCarousel({ stories, readSourceLabel, labels = defaultLabels }: { stories: SuccessStory[]; readSourceLabel: string; labels?: Labels }) {
  const [index, setIndex] = useState(0);
  const story = stories[index];

  function show(nextIndex: number) {
    setIndex((nextIndex + stories.length) % stories.length);
  }

  return (
    <section aria-roledescription="carousel" aria-label="Documented public cases" className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-[var(--brand)]">{story.category}</p>
        <p className="text-sm text-muted-foreground" aria-live="polite">{index + 1} / {stories.length}</p>
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-foreground">{story.title}</h2>
      <dl className="mt-6 grid gap-5 text-sm leading-6 sm:grid-cols-2">
        <div><dt className="font-semibold text-foreground">{labels.issue}</dt><dd className="mt-1 text-muted-foreground">{story.issue}</dd></div>
        <div><dt className="font-semibold text-foreground">{labels.authority}</dt><dd className="mt-1 text-muted-foreground">{story.authority}</dd></div>
        <div><dt className="font-semibold text-foreground">{labels.outcome}</dt><dd className="mt-1 text-muted-foreground">{story.outcome}</dd></div>
        <div><dt className="font-semibold text-foreground">{labels.timeline}</dt><dd className="mt-1 text-muted-foreground">{story.timeline}</dd></div>
      </dl>
      <div className="mt-6 rounded-lg bg-[var(--brand-soft)] p-4"><h3 className="font-semibold text-[var(--brand-strong)]">{labels.takeaway}</h3><p className="mt-1 text-sm leading-6 text-foreground">{story.lesson}</p></div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <a href={story.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline">{readSourceLabel}: {story.sourceLabel}<ExternalLink className="size-4" aria-hidden="true" /></a>
        <div className="flex gap-2">
          <button type="button" onClick={() => show(index - 1)} className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-muted" aria-label={labels.previous}><ChevronLeft className="size-4" /></button>
          <button type="button" onClick={() => show(index + 1)} className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-muted" aria-label={labels.next}><ChevronRight className="size-4" /></button>
        </div>
      </div>
      <div className="mt-5 flex gap-2" aria-label={labels.choose}>
        {stories.map((item, itemIndex) => <button key={item.title} type="button" onClick={() => show(itemIndex)} className={`h-2.5 flex-1 rounded-full ${itemIndex === index ? "bg-[var(--brand)]" : "bg-muted"}`} aria-label={`Show case ${itemIndex + 1}`} aria-current={itemIndex === index ? "true" : undefined} />)}
      </div>
    </section>
  );
}
