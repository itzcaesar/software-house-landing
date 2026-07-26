"use client";

import { type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "motion/react";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to delay the animation. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

/** Fades + slides content in the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Wrap a group so children reveal in a staggered sequence. */
export function Stagger({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** A single item inside <Stagger>. */
export function StaggerItem({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const reduce = useReducedMotion();
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE },
    },
  };
  return (
    <motion.div variants={itemVariants} className={cn(className)} {...rest}>
      {children}
    </motion.div>
  );
}
