import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const meta = {
  name: "Primary banner with two buttons",
  description: "Full-width primary-colored banner with headline, supporting copy and two CTAs.",
};

export default function Cta01() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-primary-foreground/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 -z-10 size-80 rounded-full bg-primary-foreground/10 blur-3xl"
          />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Stop guessing what your customers want
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Join 4,000+ product teams that use Nimbus to turn feedback, tickets and usage data into a roadmap
                they can defend.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">
                  Start free trial <ArrowRight />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground dark:hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="#">Talk to sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
