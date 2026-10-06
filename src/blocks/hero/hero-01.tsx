import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const meta = {
  name: "Centered hero with product shot",
  description: "Announcement badge, headline, two CTAs and a browser-framed product preview.",
};

export default function Hero01() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 mx-auto h-[28rem] max-w-3xl rounded-full bg-primary/20 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28">
        <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1">
          <Sparkles className="size-3.5 text-primary" />
          New: AI reports are here
          <ArrowRight className="size-3.5" />
        </Badge>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          The fastest way to understand your customers
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Nimbus turns product analytics, support tickets and surveys into clear answers your whole team can act on.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="#">
              Start free trial <ArrowRight />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#">Book a demo</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">14-day trial · No credit card required</p>

        <div className="mx-auto mt-16 max-w-5xl rounded-xl border bg-card p-2 shadow-2xl">
          <div className="flex items-center gap-1.5 px-2 pb-2">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-lg border bg-background text-left sm:grid-cols-[180px_1fr]">
            <div className="hidden flex-col gap-2 border-r bg-muted/40 p-4 sm:flex">
              {["Overview", "Insights", "Surveys", "Tickets", "Settings"].map((item, i) => (
                <div key={item} className={i === 0 ? "rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary" : "px-3 py-1.5 text-xs text-muted-foreground"}>
                  {item}
                </div>
              ))}
            </div>
            <div className="grid content-start gap-4 p-5">
              <div className="grid grid-cols-3 gap-3">
                {["Active users", "NPS", "Open tickets"].map((label, i) => (
                  <div key={label} className="rounded-lg border p-3">
                    <p className="text-[11px] text-muted-foreground">{label}</p>
                    <p className="mt-1 text-lg font-semibold">{["12,480", "61", "34"][i]}</p>
                  </div>
                ))}
              </div>
              <div className="flex h-32 items-end gap-1.5 rounded-lg border p-3 sm:h-44">
                {[40, 55, 35, 60, 72, 50, 80, 66, 90, 75, 95, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-primary/70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
