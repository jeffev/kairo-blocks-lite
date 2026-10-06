import Link from "next/link";
import { Cloud } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export const meta = {
  name: "Logo with four link columns",
  description: "Brand blurb, four columns of links and a copyright row with legal links.",
};

const columns = [
  { title: "Product", links: ["Overview", "Insights", "Dashboards", "Integrations", "Pricing"] },
  { title: "Solutions", links: ["Product teams", "Customer success", "Support", "UX research"] },
  { title: "Resources", links: ["Blog", "Documentation", "Guides", "Webinars", "API reference"] },
  { title: "Company", links: ["About", "Careers", "Customers", "Press", "Contact"] },
];

const legal = ["Privacy", "Terms", "Security", "Cookies"];

export default function Footer01() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="#" className="inline-flex items-center gap-2 font-semibold">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Cloud className="size-4" />
              </span>
              Nimbus
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Customer insights for teams that ship. Turn every ticket, survey and session into a clear next step.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="text-sm font-semibold">{column.title}</h3>
                <ul className="mt-4 grid gap-3 text-sm">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Nimbus Analytics, Inc. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((link) => (
              <li key={link}>
                <Link href="#" className="transition-colors hover:text-foreground">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
