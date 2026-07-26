"use client";

import { trustedLogos } from "@/lib/content";
import { useDict } from "@/lib/i18n";

export function TrustedBy() {
  const t = useDict();
  const logos = [...trustedLogos, ...trustedLogos];

  return (
    <section aria-label="Trusted by" className="border-y border-border/60 py-12">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">{t.trusted.label}</p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14 pr-14">
            {logos.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-xl font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
