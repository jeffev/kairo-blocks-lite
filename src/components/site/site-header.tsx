import Link from "next/link";
import { Blocks } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Blocks className="size-4" />
          </span>
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          <Link href="/blocks/hero" className="hover:text-foreground">Browse blocks</Link>
          <Link href="/#categories" className="hover:text-foreground">Categories</Link>
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />
          <Button size="sm" asChild>
            <a href={siteConfig.purchaseUrl}>Get all {siteConfig.fullPack.total} blocks</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
