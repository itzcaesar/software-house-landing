"use client";

import { motion } from "motion/react";
import { PRICING_SCOPES, type PricingScope } from "@/lib/pricing";
import { cn } from "@/lib/utils";

/** Animated Web/App segmented control for the pricing page. */
export function ScopeToggle({
  value,
  onChange,
  labels,
  className,
  pillId = "scope-pill",
}: {
  value: PricingScope;
  onChange: (scope: PricingScope) => void;
  labels: Record<PricingScope, string>;
  className?: string;
  /** Unique layoutId — required when two toggles render on the same page. */
  pillId?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Build type"
      className={cn(
        "relative inline-flex items-center rounded-full border border-border bg-secondary/60 p-1",
        className,
      )}
    >
      {PRICING_SCOPES.map((scope) => {
        const active = value === scope;
        return (
          <button
            key={scope}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(scope)}
            className={cn(
              "relative z-10 rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium whitespace-nowrap transition-colors",
              "sm:px-5 sm:py-2 sm:text-sm",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              active ? "text-brand-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active && (
              <motion.span
                layoutId={pillId}
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {labels[scope]}
          </button>
        );
      })}
    </div>
  );
}
