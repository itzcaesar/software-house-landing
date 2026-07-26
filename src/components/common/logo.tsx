import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-8 place-items-center rounded-[0.55rem] bg-gradient-to-br from-brand-3 via-brand to-brand-2 shadow-[0_4px_16px_-4px_var(--brand)]",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-4 text-white"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 8 5 12l4 4" />
        <path d="m15 8 4 4-4 4" />
      </svg>
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
