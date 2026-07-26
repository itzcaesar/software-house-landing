import { cn } from "@/lib/utils";

/** Soft animated aurora blobs. Purely decorative. */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] animate-aurora" />
      <div className="absolute -top-24 right-[8%] size-[30rem] rounded-full bg-brand-2/20 blur-[110px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute top-24 left-[6%] size-[28rem] rounded-full bg-brand-3/20 blur-[110px] animate-aurora [animation-delay:-12s]" />
    </div>
  );
}

/** Grid that fades out toward the edges via a radial mask. */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-grid",
        "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)]",
        className,
      )}
    />
  );
}
