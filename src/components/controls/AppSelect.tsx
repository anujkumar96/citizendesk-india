"use client";

import { Check, ChevronDown, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/src/utils/helpers";

export type SelectOption = {
  value: string;
  label: string;
  description?: string;
};

export function AppSelect({
  label,
  value,
  options,
  onChange,
  searchable = false,
  className,
}: {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  searchable?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const selected = options.find((option) => option.value === value) ?? options[0];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((option) =>
      `${option.label} ${option.description ?? ""}`.toLowerCase().includes(q),
    );
  }, [options, query]);

  function close() {
    setOpen(false);
    setQuery("");
    setActiveIndex(Math.max(0, options.findIndex((option) => option.value === value)));
  }

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) close();
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  });

  useEffect(() => {
    if (open && searchable) searchRef.current?.focus();
  }, [open, searchable]);

  function commit(option: SelectOption) {
    onChange(option.value);
    close();
  }

  return (
    <div ref={rootRef} className={cn("relative min-w-0", className)}>
      <button
        type="button"
        className="inline-flex h-10 w-full min-w-0 items-center justify-between gap-2 rounded-md border border-border bg-card px-3 text-sm font-medium text-foreground shadow-sm transition hover:border-[var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <span className="truncate">{selected?.label}</span>
        <ChevronDown className={cn("size-4 shrink-0 transition", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open ? (
        <div className="absolute right-0 z-[80] mt-2 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-xl">
          {searchable ? (
            <div className="flex items-center gap-2 border-b border-border px-3 py-2">
              <Search className="size-4 text-muted-foreground" aria-hidden="true" />
              <input
                ref={searchRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                placeholder={label}
              />
            </div>
          ) : null}
          <div
            role="listbox"
            tabIndex={-1}
            aria-label={label}
            className="max-h-80 overflow-auto p-1"
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveIndex((index) => Math.min(index + 1, filtered.length - 1));
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((index) => Math.max(index - 1, 0));
              }
              if (event.key === "Enter" && filtered[activeIndex]) {
                event.preventDefault();
                commit(filtered[activeIndex]);
              }
            }}
          >
            {filtered.map((option, index) => {
              const active = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={cn(
                    "flex w-full items-start gap-2 rounded-sm px-3 py-2 text-left text-sm transition hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                    active && "bg-accent text-accent-foreground",
                    index === activeIndex && "outline outline-1 outline-[var(--brand)]",
                  )}
                  onClick={() => commit(option)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <Check className={cn("mt-0.5 size-4 shrink-0", active ? "opacity-100" : "opacity-0")} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block truncate font-medium">{option.label}</span>
                    {option.description ? <span className="block text-xs text-muted-foreground">{option.description}</span> : null}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
