import type { Metadata } from "next";
import {
  AboutHero,
  AboutStory,
  AboutValues,
  AboutRoadmap,
  AboutTeam,
  AboutCta,
} from "@/components/sections/about";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Callum C: cerita, misi, nilai, rencana, dan tim di balik setiap proyek.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutRoadmap />
      <AboutTeam />
      <AboutCta />
    </>
  );
}
