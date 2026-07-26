"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees on each axis. */
  maxTilt?: number;
  /** Radius of the pointer spotlight in px; 0 disables it. */
  spotlight?: number;
};

/**
 * Pointer-tracking 3D tilt + spotlight wrapper for cards. Pure transforms,
 * springs back to rest on leave; tilt is disabled under reduced motion
 * (the spotlight stays — it only follows the pointer, it never auto-plays).
 */
export function TiltCard({
  children,
  className,
  maxTilt = 5,
  spotlight = 260,
}: TiltCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 260, damping: 22 });
  const rotateY = useSpring(ry, { stiffness: 260, damping: 22 });

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    if (reduce) return;
    rx.set((0.5 - py) * maxTilt * 2);
    ry.set((px - 0.5) * maxTilt * 2);
  };

  const onPointerLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div style={{ perspective: 900 }} className={cn("h-full", className)}>
      <motion.div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group/tilt relative h-full"
      >
        {children}
        {spotlight > 0 ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
            style={{
              background: `radial-gradient(${spotlight}px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklch, var(--brand) 10%, transparent), transparent 70%)`,
            }}
          />
        ) : null}
      </motion.div>
    </div>
  );
}
