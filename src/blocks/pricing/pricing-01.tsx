"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export const meta = {
  name: "Three tiers with billing toggle",
  description: "Monthly/annual switch, highlighted popular plan and feature checklists.",
  interactive: true,
};

const plans = [
  { name: "Starter", price: 0, description: "For individuals trying things out.", features: ["1 project", "1,000 events / month", "Community support"], cta: "Get started" },
  { name: "Pro", price: 29, description: "For growing teams that need more.", features: ["Unlimited projects", "100k events / month", "AI insights", "Email support"], cta: "Start free trial", popular: true },
  { name: "Enterprise", price: 99, description: "Security and scale for larger orgs.", features: ["Everything in Pro", "SSO & audit logs", "Dedicated manager", "99.99% SLA"], cta: "Contact sales" },
];

export default function Pricing01() {
  const [annual, setAnnual] = React.useState(true);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-4 text-muted-foreground">Start free and upgrade as you grow. Cancel anytime.</p>
        <div className="mt-8 inline-flex items-center gap-3 text-sm">
          <span className={cn(!annual ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
          <Switch checked={annual} onCheckedChange={setAnnual} aria-label="Toggle annual billing" />
          <span className={cn(annual ? "text-foreground" : "text-muted-foreground")}>Annual</span>
          <Badge variant="secondary">Save 20%</Badge>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-card p-6",
              plan.popular && "border-primary shadow-lg ring-1 ring-primary",
            )}
          >
            {plan.popular && <Badge className="absolute -top-2.5 left-6">Most popular</Badge>}
            <h3 className="font-semibold">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
            <p className="mt-6">
              <span className="text-4xl font-semibold tracking-tight">${annual ? Math.round(plan.price * 0.8) : plan.price}</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full" variant={plan.popular ? "default" : "outline"}>
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
