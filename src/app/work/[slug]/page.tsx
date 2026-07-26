import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectMeta } from "@/lib/content";
import { en } from "@/lib/dictionaries";
import { CaseStudy } from "@/components/sections/case-study";

export function generateStaticParams() {
  return projectMeta.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const index = projectMeta.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  const project = projectMeta[index];
  const copy = en.portfolio.projects[index];
  return {
    title: `${project.title} — Case study`,
    description: copy.description,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projectMeta.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  return <CaseStudy index={index} />;
}
