import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const meta = {
  name: "Centered accordion FAQ",
  description: "Centered heading with a single-column accordion of common questions and a contact link.",
};

const faqs = [
  {
    q: "What is Nimbus?",
    a:
      "Nimbus is a customer-insights platform. It pulls in feedback from support tickets, surveys, reviews, " +
      "sales calls and product analytics, then uses AI to group it into themes so your team knows what to fix next.",
  },
  {
    q: "Which tools does Nimbus connect to?",
    a:
      "More than 60 sources out of the box, including Intercom, Zendesk, Salesforce, HubSpot, Gong, Typeform, " +
      "Segment, App Store reviews and any SQL warehouse. Anything else can be sent through our API.",
  },
  {
    q: "How long does setup take?",
    a:
      "Most teams connect their first sources in under 15 minutes. Nimbus backfills up to two years of history, " +
      "so your first themes are usually ready the same day.",
  },
  {
    q: "How accurate is the AI tagging?",
    a:
      "On customer benchmarks our theme detection agrees with human reviewers 92% of the time. You can rename, " +
      "merge or split any theme, and Nimbus learns from every correction.",
  },
  {
    q: "Is my customer data secure?",
    a:
      "Yes. Nimbus is SOC 2 Type II certified and GDPR compliant, encrypts data at rest and in transit, and never " +
      "uses your data to train shared models. EU data residency is available on every paid plan.",
  },
  {
    q: "Can I try Nimbus before buying?",
    a: "Absolutely. Every paid plan starts with a 14-day free trial with all features unlocked. No credit card needed.",
  },
];

export default function Faq01() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-4 text-muted-foreground">Everything you need to know about Nimbus, in one place.</p>
      </div>

      <Accordion type="single" collapsible defaultValue="item-0" className="mx-auto mt-12 max-w-3xl border-y">
        {faqs.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="py-5 text-base hover:no-underline">{item.q}</AccordionTrigger>
            <AccordionContent className="pb-5 text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Still have questions?{" "}
        <Link href="#" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
          Chat with our team
        </Link>
      </p>
    </section>
  );
}
