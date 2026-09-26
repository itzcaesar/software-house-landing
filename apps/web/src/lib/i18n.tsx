"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionaries, type Dict, type Locale } from "@/lib/dictionaries";

export const LOCALES: Locale[] = ["en", "id"];
export const LOCALE_LABELS: Record<Locale, string> = { en: "EN", id: "ID" };

const STORAGE_KEY = "callumc:locale";

function isLocale(v: unknown): v is Locale {
  return v === "en" || v === "id";
}

/* ---- persisted external store ---- */

let current: Locale | null = null;
const listeners = new Set<() => void>();

function readInitial(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
    if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("id"))
      return "id";
  } catch {
    /* ignore */
  }
  return "en";
}

function getSnapshot(): Locale {
  if (current === null) current = readInitial();
  return current;
}

function getServerSnapshot(): Locale {
  return "en";
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function setLocaleGlobal(locale: Locale) {
  current = locale;
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

/* ---- context ---- */

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: Dict;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((l: Locale) => setLocaleGlobal(l), []);
  const toggle = useCallback(
    () => setLocaleGlobal(getSnapshot() === "en" ? "id" : "en"),
    [],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggle, t: dictionaries[locale] }),
    [locale, setLocale, toggle],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

/** Convenience: the active dictionary. */
export function useDict(): Dict {
  return useLocale().t;
}
