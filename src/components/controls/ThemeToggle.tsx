"use client";

import { Monitor, Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const modes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

const accents = [
  { value: "blue", label: "Blue", className: "bg-blue-600" },
  { value: "emerald", label: "Emerald", className: "bg-emerald-600" },
  { value: "violet", label: "Violet", className: "bg-violet-600" },
  { value: "rose", label: "Rose", className: "bg-rose-600" },
  { value: "amber", label: "Amber", className: "bg-amber-600" },
] as const;

type Accent = (typeof accents)[number]["value"];

function subscribeAccent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("citizendesk-accent", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("citizendesk-accent", callback);
  };
}

function getAccentSnapshot(): Accent {
  if (typeof document === "undefined") return "blue";
  return (document.documentElement.dataset.accent as Accent | undefined) ?? "blue";
}

function setAccent(accent: Accent) {
  document.documentElement.dataset.accent = accent;
  window.localStorage.setItem("citizendesk-accent", accent);
  window.dispatchEvent(new Event("citizendesk-accent"));
}

export function ThemeToggle({ label = "Theme" }: { label?: string }) {
  const { theme, setTheme } = useTheme();
  const accent = useSyncExternalStore(subscribeAccent, getAccentSnapshot, () => "blue");

  return (
    <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white/75 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5" aria-label={label}>
      {modes.map((option) => {
        const Icon = option.icon;
        const active = theme === option.value;
        return (
          <button key={option.value} type="button" onClick={() => setTheme(option.value)} className={`flex size-8 items-center justify-center rounded-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] ${active ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"}`} aria-label={option.label} aria-pressed={active}>
            <Icon className="size-4" aria-hidden="true" />
          </button>
        );
      })}
      <span className="mx-1 h-5 w-px bg-slate-200 dark:bg-white/10" aria-hidden="true" />
      <Palette className="mx-1 size-4 text-slate-500 dark:text-slate-300" aria-hidden="true" />
      {accents.map((item) => (
        <button key={item.value} type="button" onClick={() => setAccent(item.value)} className={`size-5 rounded-full ${item.className} ring-offset-2 ring-offset-white transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] dark:ring-offset-slate-950 ${accent === item.value ? "ring-2 ring-slate-950 dark:ring-white" : "ring-1 ring-black/10"}`} aria-label={`${item.label} accent`} aria-pressed={accent === item.value} />
      ))}
    </div>
  );
}
