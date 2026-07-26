/** Minimal class combiner — no variant merging needed in this app. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
