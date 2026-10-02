import type { LeadStatus } from "@callumc/db";

export const STATUS_META: Record<
  LeadStatus,
  { label: string; chip: string; dot: string }
> = {
  new: {
    label: "New",
    chip: "bg-brand/15 text-brand-2 ring-brand/25",
    dot: "bg-brand",
  },
  contacted: {
    label: "Contacted",
    chip: "bg-cyan-500/15 text-cyan-300 ring-cyan-500/25",
    dot: "bg-cyan-400",
  },
  discovery: {
    label: "Discovery",
    chip: "bg-violet-500/15 text-violet-300 ring-violet-500/25",
    dot: "bg-violet-400",
  },
  proposal: {
    label: "Proposal",
    chip: "bg-amber-500/15 text-amber-300 ring-amber-500/25",
    dot: "bg-amber-400",
  },
  won: {
    label: "Won",
    chip: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/25",
    dot: "bg-emerald-400",
  },
  lost: {
    label: "Lost",
    chip: "bg-white/8 text-muted-foreground ring-white/10",
    dot: "bg-muted-foreground",
  },
};
