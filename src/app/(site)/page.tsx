import Link from "next/link";
import { ArrowRight, Code2, Moon, MousePointerClick, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import { blocks, categoriesWithCounts } from "@/lib/blocks";

const perks = [
  { icon: MousePointerClick, title: "Copy, paste, ship", text: "Every block is one self-contained file. Drop it into any shadcn/ui project." },
  { icon: Smartphone, title: "Responsive", text: "Designed mobile-first and tested at phone, tablet and desktop widths." },
  { icon: Moon, title: "Light and dark", text: "Built only on theme tokens, so blocks adopt your colors and dark mode." },
  { icon: Code2, title: "Clean TypeScript", text: "Readable markup, accessible headings and zero lint errors." },
];

export default function HomePage() {
  const cats = categoriesWithCounts();
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[30rem] max-w-3xl rounded-full bg-primary/20 blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <p className="text-sm font-medium text-primary">{blocks.length} free blocks · MIT license</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Landing page blocks for shadcn/ui
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/blocks/hero">
                Browse blocks <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={siteConfig.purchaseUrl}>Get all {siteConfig.fullPack.total} blocks</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {perks.map((p) => (
          <div key={p.title} className="grid gap-2">
            <p.icon className="size-5 text-primary" />
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </section>

      <section id="categories" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-24 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Categories</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c) => (
            <Link key={c.id} href={`/blocks/${c.id}`} className="group rounded-xl border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-muted/40">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{c.name}</h3>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{c.count}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                View blocks <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-primary/30 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold">
              Need more? The full pack has {siteConfig.fullPack.total} blocks in {siteConfig.fullPack.categories} categories
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Every variant of these sections, plus team, blog, contact and newsletter blocks. Same code style, same theme tokens.
            </p>
          </div>
          <Button asChild>
            <a href={siteConfig.purchaseUrl}>
              Get Kairo Blocks <ArrowRight />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
