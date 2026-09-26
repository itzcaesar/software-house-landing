import type { SVGProps } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/** "CC" monogram — two nested C's. Shared by the navbar logo, favicon and OG image. */
export function CCGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      {...props}
    >
      <path d="M17.66 6.34A8 8 0 1 0 17.66 17.66" />
      <path d="M14.47 9.53A3.5 3.5 0 1 0 14.47 14.47" />
    </svg>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-8 place-items-center rounded-[0.55rem] bg-gradient-to-br from-brand-3 via-brand to-brand-2 shadow-[0_4px_16px_-4px_var(--brand)]",
        className,
      )}
      aria-hidden
    >
      <CCGlyph className="size-5 text-white" />
    </span>
  );
}

export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {withWordmark ? (
        <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
      ) : null}
    </span>
  );
}
