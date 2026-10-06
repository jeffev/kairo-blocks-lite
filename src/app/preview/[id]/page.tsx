import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HeightReporter } from "@/components/site/height-reporter";
import { blocks } from "@/lib/blocks";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blocks.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: blocks.find((b) => b.id === id)?.meta.name ?? "Preview" };
}

/** A single block rendered on its own, used by the showcase iframes. */
export default async function PreviewPage({ params }: Props) {
  const { id } = await params;
  const block = blocks.find((b) => b.id === id);
  if (!block) notFound();
  const { Component } = block;

  return (
    // Navbars get room below them so dropdowns and mobile menus are visible in the preview.
    <HeightReporter className={block.category === "navbar" ? "min-h-[560px]" : undefined}>
      <Component />
    </HeightReporter>
  );
}
