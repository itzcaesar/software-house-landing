import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/common/reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Removes the default max-width container. */
  bleed?: boolean;
};

/** Standard page section: semantic landmark + consistent rhythm + container. */
export function Section({
  id,
  children,
  className,
  containerClassName,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28 lg:py-32", className)}
    >
      {bleed ? (
        children
      ) : (
        <div className={cn("mx-auto w-full max-w-6xl px-6 lg:px-8", containerClassName)}>
          {children}
        </div>
      )}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5",
        "text-xs font-medium tracking-wide text-muted-foreground uppercase",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-brand" aria-hidden />
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

/** Eyebrow + title + supporting copy, with a reveal animation. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-muted-foreground sm:text-lg text-pretty">{description}</p>
      ) : null}
    </Reveal>
  );
}
