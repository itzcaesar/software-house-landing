import { ProspectFinder } from "@/components/prospect-finder";

export const dynamic = "force-dynamic";

export default function ProspectsPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-semibold">Prospect finder</h1>
      <p className="mt-1 mb-6 text-sm text-muted-foreground">
        Well-reviewed businesses with no website — your warmest cold outreach. Added prospects
        land in Leads with source <span className="text-brand-2">maps</span>, assigned to you.
      </p>
      <ProspectFinder hasKey={Boolean(process.env.GOOGLE_MAPS_API_KEY)} />
    </div>
  );
}
