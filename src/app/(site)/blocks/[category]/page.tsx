import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlockPreview } from "@/components/site/block-preview";
import { blockSource, blocksIn, categoriesWithCounts } from "@/lib/blocks";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categoriesWithCounts().map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const found = categoriesWithCounts().find((c) => c.id === category);
  return { title: found ? `${found.name} blocks` : "Blocks" };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cats = categoriesWithCounts();
  const current = cats.find((c) => c.id === category);
  if (!current) notFound();

  const list = await Promise.all(
    blocksIn(category).map(async (block) => ({ block, source: await blockSource(block.file) })),
  );

  return (
    <div className="mx-auto grid max-w-[1600px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[180px_1fr]">
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <nav className="flex gap-1 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {cats.map((c) => (
            <Link
              key={c.id}
              href={`/blocks/${c.id}`}
              className={cn(
                "flex shrink-0 items-center justify-between gap-3 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-muted",
                c.id === category ? "bg-muted font-medium text-foreground" : "text-muted-foreground",
              )}
            >
              {c.name}
              <span className="text-xs text-muted-foreground">{c.count}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <div className="grid min-w-0 gap-12">
        <header className="grid gap-1">
          <h1 className="text-3xl font-semibold tracking-tight">{current.name}</h1>
          <p className="text-muted-foreground">{current.description}</p>
        </header>
        {(siteConfig.fullPack.perCategory[category] ?? 0) > list.length && (
          <a
            href={siteConfig.purchaseUrl}
            className="rounded-lg border border-dashed border-primary/40 bg-primary/5 px-4 py-3 text-sm text-muted-foreground hover:border-primary"
          >
            <span className="font-medium text-foreground">+{siteConfig.fullPack.perCategory[category] - list.length} more {current.name.toLowerCase()}</span>{" "}
            in the full Kairo Blocks pack →
          </a>
        )}
        {list.map(({ block, source }) => (
          <BlockPreview
            key={block.id}
            id={block.id}
            name={block.meta.name}
            description={block.meta.description}
            interactive={block.meta.interactive ?? false}
            file={block.file}
            code={source.code}
            html={source.html}
          />
        ))}
      </div>
    </div>
  );
}
