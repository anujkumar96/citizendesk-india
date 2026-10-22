"use client";

import { Bot, Copy, Loader2, MessageCircle, RotateCcw, Send, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { AppSelect } from "@/src/components/controls/AppSelect";
import { matchGuidance } from "@/src/data/guidance";
import { localeLabels, locales } from "@/src/i18n/routing";

type Message = { role: "user" | "assistant"; content: string };

export function CitizenAssistant() {
  const t = useTranslations("assistant");
  const categories = useTranslations("categories");
  const guidance = useTranslations("guidance");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(locale);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const suggestions = [t("suggestPension"), t("suggestBank"), t("suggestDraft")];
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: t("welcome") }]);
  const languageOptions = useMemo(() => locales.map((item) => ({ value: item, label: localeLabels[item] })), []);

  async function send(text = input) {
    const question = text.trim();
    if (!question) return;
    setInput("");
    setLoading(true);
    setMessages((current) => [...current, { role: "user", content: question }]);
    const profile = matchGuidance(question);
    const fallbackReply = [
      `${t("likelyPath")} ${categories(`${profile.category}.authority`)}`,
      `${t("firstStep")} ${guidance(`${profile.category}.firstStep`)}`,
      `${t("keepEvidence")} ${(guidance.raw(`${profile.category}.evidence`) as string[]).join(", ")}.`,
      `${t("escalate")} ${guidance(`${profile.category}.escalation`)}`,
      t("disclaimer"),
    ].join("\n\n");
    let reply = fallbackReply;
    if (process.env.NEXT_PUBLIC_GITHUB_PAGES !== "true") {
      
      try {
        const response = await fetch("/api/assistant", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ message: question, language }),
        });
        const data = await response.json();
        if (typeof data.reply === "string" && data.reply.trim()) reply = `${data.reply}\n\n${t("disclaimer")}`;
      } catch {
        reply = fallbackReply;
      }
    }
    setMessages((current) => [...current, { role: "assistant", content: reply }]);
    setLoading(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[70] inline-flex size-14 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-xl transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
        aria-label={t("open")}
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </button>
      {open ? (
        <section className="fixed bottom-4 right-4 z-[90] flex h-[min(42rem,calc(100svh-2rem))] w-[min(26rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-2xl" aria-label={t("title")}>
          <header className="flex items-center justify-between gap-3 border-b border-border p-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground"><Bot className="size-5" aria-hidden="true" /></span>
              <div>
                <h2 className="text-sm font-semibold">{t("title")}</h2>
                <p className="text-xs text-muted-foreground">{t("subtitle")}</p>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-2 focus-visible:outline-[var(--brand)]" aria-label={t("close")}><X className="size-4" /></button>
          </header>
          <div className="border-b border-border p-3">
            <AppSelect label={t("language")} value={language} options={languageOptions} onChange={setLanguage} searchable />
          </div>
          <div className="flex-1 space-y-3 overflow-auto bg-background p-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "ml-8 rounded-lg bg-[var(--brand)] p-3 text-sm text-white" : "mr-8 rounded-lg border border-border bg-card p-3 text-sm leading-6"}>
                <p className="whitespace-pre-wrap">{message.content}</p>
                {message.role === "assistant" ? (
                  <button type="button" onClick={() => navigator.clipboard.writeText(message.content)} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--brand)]"><Copy className="size-3" />{t("copy")}</button>
                ) : null}
              </div>
            ))}
            {loading ? <div className="mr-8 flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm text-muted-foreground"><Loader2 className="size-4 animate-spin" />{t("typing")}</div> : null}
          </div>
          <div className="space-y-3 border-t border-border p-3">
            <div className="flex gap-2 overflow-x-auto">
              {suggestions.map((suggestion) => (
                <button key={suggestion} type="button" onClick={() => send(suggestion)} className="shrink-0 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium hover:bg-muted">
                  {suggestion}
                </button>
              ))}
            </div>
            <form className="flex gap-2" onSubmit={(event) => { event.preventDefault(); send(); }}>
              <input value={input} onChange={(event) => setInput(event.target.value)} className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]/25" placeholder={t("placeholder")} />
              <button type="submit" disabled={loading || !input.trim()} className="inline-flex size-10 items-center justify-center rounded-md bg-[var(--brand)] text-white disabled:opacity-50" aria-label={t("send")}><Send className="size-4" /></button>
              <button type="button" onClick={() => setMessages([{ role: "assistant", content: t("welcome") }])} className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-card" aria-label={t("clear")}><RotateCcw className="size-4" /></button>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
}
