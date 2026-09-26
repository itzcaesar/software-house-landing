import type { SVGProps } from "react";

/** "CC" monogram — same mark as apps/web/src/components/common/logo.tsx. */
export function CCGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M17.66 6.34A8 8 0 1 0 17.66 17.66" />
      <path d="M14.47 9.53A3.5 3.5 0 1 0 14.47 14.47" />
    </svg>
  );
}
