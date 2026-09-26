"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type CurrencyCode = "USD" | "IDR";

type CurrencyMeta = {
  code: CurrencyCode;
  symbol: string;
  label: string;
  locale: string;
};

export const CURRENCIES: Record<CurrencyCode, CurrencyMeta> = {
  USD: { code: "USD", symbol: "$", label: "USD", locale: "en-US" },
  IDR: { code: "IDR", symbol: "Rp", label: "IDR", locale: "id-ID" },
};

export const CURRENCY_ORDER: CurrencyCode[] = ["USD", "IDR"];

const STORAGE_KEY = "callumc:currency";

function isCurrencyCode(value: unknown): value is CurrencyCode {
  return value === "USD" || value === "IDR";
}

/* ---- Tiny external store (persisted, cross-component) ---- */

let current: CurrencyCode | null = null;
const listeners = new Set<() => void>();

function readInitial(): CurrencyCode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isCurrencyCode(stored)) return stored;
    if (typeof navigator !== "undefined" && navigator.language?.startsWith("id")) return "IDR";
  } catch {
    /* localStorage unavailable */
  }
  return "USD";
}

function getSnapshot(): CurrencyCode {
  if (current === null) current = readInitial();
  return current;
}

function getServerSnapshot(): CurrencyCode {
  return "USD";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setCurrencyGlobal(code: CurrencyCode) {
  current = code;
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* ignore persistence errors */
  }
  listeners.forEach((l) => l());
}

/* ---- Context (keeps a stable, ergonomic hook API) ---- */

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  toggle: () => void;
  /** Format a numeric amount in the active currency, no decimals. */
  format: (amount: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const currency = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setCurrency = useCallback((code: CurrencyCode) => setCurrencyGlobal(code), []);
  const toggle = useCallback(
    () => setCurrencyGlobal(getSnapshot() === "USD" ? "IDR" : "USD"),
    [],
  );

  const format = useCallback(
    (amount: number) => {
      const meta = CURRENCIES[currency];
      return new Intl.NumberFormat(meta.locale, {
        style: "currency",
        currency: meta.code,
        maximumFractionDigits: 0,
      }).format(amount);
    },
    [currency],
  );

  const value = useMemo<CurrencyContextValue>(
    () => ({ currency, setCurrency, toggle, format }),
    [currency, setCurrency, toggle, format],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return ctx;
}
