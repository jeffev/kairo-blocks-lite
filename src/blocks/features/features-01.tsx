import { BellRing, BrainCircuit, Gauge, Layers, LockKeyhole, Users } from "lucide-react";

export const meta = {
  name: "Three-column icon grid",
  description: "Eyebrow, heading and six features in a responsive grid with icon tiles.",
};

const features = [
  {
    icon: Layers,
    title: "Every source, one view",
    description: "Connect product analytics, support tickets and surveys in minutes. Nimbus unifies them per customer.",
  },
  {
    icon: BrainCircuit,
    title: "AI-written insights",
    description: "Weekly summaries explain what changed, why it matters and which accounts are driving it.",
  },
  {
    icon: Gauge,
    title: "Real-time dashboards",
    description: "Track activation, retention and NPS as they happen, with no SQL and no waiting on the data team.",
  },
  {
    icon: BellRing,
    title: "Smart alerts",
    description: "Get pinged in Slack when churn risk spikes, a feature stalls or a key account goes quiet.",
  },
  {
    icon: Users,
    title: "Built for the whole team",
    description: "Shared boards, comments and mentions keep product, success and marketing on the same page.",
  },
  {
    icon: LockKeyhole,
    title: "Secure by default",
    description: "SOC 2 Type II, SSO, granular roles and EU data residency come standard on every plan.",
  },
];

export default function Features01() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Features</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Everything you need to understand your customers
        </h2>
        <p className="mt-4 text-muted-foreground">
          Nimbus brings every signal into one place, so you spend less time digging and more time shipping.
        </p>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title}>
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <feature.icon className="size-5" />
            </div>
            <h3 className="mt-4 font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
