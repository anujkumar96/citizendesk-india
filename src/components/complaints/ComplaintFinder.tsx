"use client";

import { ArrowLeft, Copy, FileText, RotateCcw, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import { AppSelect } from "@/src/components/controls/AppSelect";
import { PremiumCard } from "@/src/components/design/PremiumCard";
import { complaintCategories, type ComplaintCategoryKey } from "@/src/data/complaints";
import { matchGuidance } from "@/src/data/guidance";
import { Link } from "@/src/i18n/navigation";

type Step = "describe" | "result" | "draft";

export function ComplaintFinder({ initialCategory }: { initialCategory?: string }) {
  const t = useTranslations("finder");
  const categories = useTranslations("categories");
  const guidance = useTranslations("guidance");
  const hasInitialCategory = complaintCategories.some((item) => item.key === initialCategory);
  const [step, setStep] = useState<Step>(hasInitialCategory ? "result" : "describe");
  const [issue, setIssue] = useState("");
  const [category, setCategory] = useState<ComplaintCategoryKey | "">(
    hasInitialCategory ? (initialCategory as ComplaintCategoryKey) : "",
  );
  const [copied, setCopied] = useState(false);
  const profile = useMemo(() => matchGuidance(issue, category || undefined), [category, issue]);
  const categoryMeta = complaintCategories.find((item) => item.key === profile.category) ?? complaintCategories[0];
  const Icon = categoryMeta.icon;
  const evidence = guidance.raw(`${profile.category}.evidence`) as string[];
  const draft = `${t("draftGreeting")}\n\n${t("draftIntro")} ${categories(`${profile.category}.title`)}.\n\n${t("draftFacts")}\n- ${issue || t("draftPlaceholder")}\n\n${t("draftEvidence")}\n${evidence.map((item) => `- ${item}`).join("\n")}\n\n${t("draftRelief")}\n${guidance(`${profile.category}.draftFocus`)}\n\n${t("draftClose")}`;
  const canSearch = issue.trim().length > 8 || Boolean(category);

  function reset() {
    setStep("describe");
    setIssue("");
    setCategory("");
    setCopied(false);
  }

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <PremiumCard className="p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Search className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-foreground">{t("startTitle")}</h2>
            <p className="text-sm text-muted-foreground">{t("startText")}</p>
          </div>
        </div>
        <div className="mt-6 space-y-5">
          <label className="block">
            <span className="text-sm font-semibold text-foreground">{t("issueLabel")}</span>
            <textarea
              value={issue}
              onChange={(event) => setIssue(event.target.value)}
              rows={5}
              placeholder={t("issuePlaceholder")}
              className="mt-2 w-full resize-none rounded-md border border-border bg-card p-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/25"
            />
          </label>
          <div>
            <span className="mb-2 block text-sm font-semibold text-foreground">{t("categoryLabel")}</span>
            <AppSelect
              label={t("categoryLabel")}
              value={category}
              searchable
              options={[
                { value: "", label: t("categoryAuto") },
                ...complaintCategories.map((item) => ({
                  value: item.key,
                  label: categories(`${item.key}.title`),
                  description: categories(`${item.key}.authority`),
                })),
              ]}
              onChange={(value) => setCategory(value as ComplaintCategoryKey | "")}
            />
          </div>
          {!canSearch ? <p className="text-sm text-destructive">{t("validation")}</p> : null}
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              disabled={!canSearch}
              onClick={() => setStep("result")}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-4 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("find")} <Search className="size-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={reset} className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]">
              {t("reset")} <RotateCcw className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </PremiumCard>

      <PremiumCard className="p-5 sm:p-6" aria-live="polite">
        {step === "describe" ? (
          <EmptyPanel />
        ) : step === "result" ? (
          <div>
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--brand)]">{t("likelyAuthority")}</p>
                <h2 className="mt-1 text-2xl font-semibold text-foreground">{categories(`${profile.category}.authority`)}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{categories(`${profile.category}.description`)}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Info title={t("procedure")} text={guidance(`${profile.category}.firstStep`)} />
              <Info title={t("timeline")} text={categories(`${profile.category}.timeframe`)} />
              <Info title={t("escalation")} text={guidance(`${profile.category}.escalation`)} />
              <div className="rounded-md border border-border bg-background p-4">
                <h3 className="text-sm font-semibold text-foreground">{t("evidence")}</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {evidence.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={() => setStep("draft")} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-4 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]">
                {t("prepareDraft")} <FileText className="size-4" aria-hidden="true" />
              </button>
              <Link href={`/guides/${profile.guide}`} className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-4 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]">
                {t("viewProcedure")}
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <button type="button" onClick={() => setStep("result")} className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]">
              <ArrowLeft className="size-4" aria-hidden="true" /> {t("back")}
            </button>
            <h2 className="text-xl font-semibold text-foreground">{t("draftTitle")}</h2>
            <pre className="mt-4 whitespace-pre-wrap rounded-md border border-border bg-background p-4 text-sm leading-6 text-foreground">{draft}</pre>
            <button
              type="button"
              onClick={async () => {
                await navigator.clipboard.writeText(draft);
                setCopied(true);
              }}
              className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-4 text-sm font-semibold text-white"
            >
              {copied ? t("copied") : t("copyDraft")} <Copy className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </PremiumCard>
    </div>
  );

  function EmptyPanel() {
    return (
      <div className="flex min-h-72 flex-col justify-center rounded-lg border border-dashed border-border bg-background p-6">
        <h2 className="text-xl font-semibold text-foreground">{t("emptyTitle")}</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{t("emptyText")}</p>
      </div>
    );
  }
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
