"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";
type ThemeContextValue = { theme: Theme; setTheme: (theme: Theme) => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", theme === "dark" || (theme === "system" && prefersDark));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");

  useEffect(() => {
    const saved = window.localStorage.getItem("citizendesk-theme");
    const initialTheme: Theme = saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
    // Load the saved preference after hydration so static rendering stays deterministic.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    setTheme(nextTheme) {
      window.localStorage.setItem("citizendesk-theme", nextTheme);
      setThemeState(nextTheme);
      applyTheme(nextTheme);
    },
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
