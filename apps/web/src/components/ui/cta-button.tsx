"use client";

import { useRef, type MouseEventHandler, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "motion/react";

export interface CtaButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  /** In-page `#hash` smooth-scrolls; any other value navigates. */
  href?: string;
}

const MAX_PULL = 8;

/**
 * Primary call-to-action: cobalt gradient + gloss + hover shimmer (pure CSS),
 * with a magnetic pointer pull (label pulls slightly further for depth).
 * Renders a real <button>; an in-page `href` smooth-scrolls to the hash.
 */
export function CtaButton({
  href,
  onClick,
  onMouseMove,
  onMouseLeave,
  style,
  size = "md",
  className = "",
  type = "button",
  children,
  ...rest
}: CtaButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 320, damping: 22 });
  const y = useSpring(my, { stiffness: 320, damping: 22 });
  const labelX = useTransform(x, (v) => v * 0.45);
  const labelY = useTransform(y, (v) => v * 0.45);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || !href) return;
    if (href.startsWith("#")) {
      window.history.replaceState(null, "", href);
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  const handleMove: MouseEventHandler<HTMLButtonElement> = (e) => {
    onMouseMove?.(e);
    const el = ref.current;
    if (!el || reduce || rest.disabled) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.2;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
    mx.set(Math.max(-MAX_PULL, Math.min(MAX_PULL, dx)));
    my.set(Math.max(-MAX_PULL, Math.min(MAX_PULL, dy)));
  };

  const handleLeave: MouseEventHandler<HTMLButtonElement> = (e) => {
    onMouseLeave?.(e);
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={handleClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={rest.disabled ? undefined : { scale: 0.97 }}
      style={{ ...style, x, y }}
      className={`cta-button cta-button--${size}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <motion.span style={{ x: labelX, y: labelY }} className="cta-button__label">
        {children}
      </motion.span>
    </motion.button>
  );
}
