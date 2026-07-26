"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { LOCALES, LOCALE_LABELS, useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Language switch. `compact` renders a minimal ghost button (globe + current
 * locale) to match the theme toggle; the default segmented control is used
 * where there's more room (e.g. the mobile menu).
 */
export function LanguageToggle({
  className,
  variant = "segmented",
}: {
  className?: string;
  variant?: "segmented" | "compact";
}) {
  const { locale, setLocale, toggle } = useLocale();

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={`Switch language, currently ${LOCALE_LABELS[locale]}`}
        title="Switch language"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
          className,
        )}
      >
        <Globe className="size-[1.05rem]" />
        {LOCALE_LABELS[locale]}
      </button>
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label="Language"
      className={cn(
        "relative inline-flex items-center rounded-full border border-border bg-secondary/60 p-0.5",
        className,
      )}
    >
      {LOCALES.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setLocale(code)}
            className={cn(
              "relative z-10 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              active ? "text-brand-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {LOCALE_LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
