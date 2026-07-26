"use client";

import { motion } from "motion/react";
import { CURRENCY_ORDER, useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";

/** Animated segmented control that switches the active pricing currency. */
export function CurrencyToggle({ className }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      role="radiogroup"
      aria-label="Display currency"
      className={cn(
        "relative inline-flex items-center rounded-full border border-border bg-secondary/60 p-1",
        className,
      )}
    >
      {CURRENCY_ORDER.map((code) => {
        const active = currency === code;
        return (
          <button
            key={code}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setCurrency(code)}
            className={cn(
              "relative z-10 min-w-14 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              active ? "text-brand-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active && (
              <motion.span
                layoutId="currency-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {code}
          </button>
        );
      })}
    </div>
  );
}
