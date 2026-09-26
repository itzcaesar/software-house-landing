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
  title: "About",
  description:
    "Callum C is a young product studio with senior craft — our story, mission, values, roadmap, and the team behind the work.",
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
