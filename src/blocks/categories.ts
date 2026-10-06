export const categories = [
  { id: "navbar", name: "Navbars", description: "Responsive headers with mobile menus." },
  { id: "hero", name: "Heroes", description: "First impressions: headlines, CTAs and product shots." },
  { id: "logos", name: "Logo clouds", description: "Social proof from customers and partners." },
  { id: "features", name: "Features", description: "Grids, bento layouts and alternating rows." },
  { id: "stats", name: "Stats", description: "Numbers that build trust." },
  { id: "testimonials", name: "Testimonials", description: "Quotes, walls of love and case studies." },
  { id: "pricing", name: "Pricing", description: "Plans, toggles and comparison tables." },
  { id: "faq", name: "FAQ", description: "Accordions and two-column answers." },
  { id: "cta", name: "Call to action", description: "Closing sections that convert." },
  { id: "team", name: "Team", description: "The people behind the product." },
  { id: "blog", name: "Blog", description: "Article cards and featured posts." },
  { id: "contact", name: "Contact", description: "Forms and contact details." },
  { id: "newsletter", name: "Newsletter", description: "Email capture sections." },
  { id: "footer", name: "Footers", description: "Link columns, newsletter and legal." },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
