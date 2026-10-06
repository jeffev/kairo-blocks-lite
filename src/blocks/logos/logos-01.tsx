import { Anchor, Aperture, Atom, Compass, Flame, Hexagon, Leaf, Mountain, Orbit, Sun, Triangle, Wind } from "lucide-react";

export const meta = {
  name: "Logo grid",
  description: "Small heading over a responsive grid of twelve customer wordmarks that brighten on hover.",
};

const logos = [
  { name: "Northwind", icon: Compass, className: "font-semibold tracking-tight" },
  { name: "LUMEN", icon: Sun, className: "font-bold tracking-[0.2em]" },
  { name: "Orbitly", icon: Orbit, className: "font-medium" },
  { name: "Pinecrest", icon: Mountain, className: "font-semibold italic" },
  { name: "hexa", icon: Hexagon, className: "font-mono font-bold" },
  { name: "Fernway", icon: Leaf, className: "font-semibold tracking-tight" },
  { name: "Quanta", icon: Atom, className: "font-bold" },
  { name: "Driftwood", icon: Anchor, className: "font-medium tracking-wide" },
  { name: "EMBERLY", icon: Flame, className: "font-semibold tracking-widest" },
  { name: "Aperture", icon: Aperture, className: "font-semibold" },
  { name: "Tessel", icon: Triangle, className: "font-bold tracking-tight" },
  { name: "Gale", icon: Wind, className: "font-medium italic" },
];

export default function Logos01() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="text-center text-sm font-medium text-muted-foreground">
        Trusted by teams at 4,000+ companies, from seed-stage startups to the Fortune 500
      </h2>
      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo) => (
          <li
            key={logo.name}
            className="flex items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <logo.icon className="size-5 shrink-0" aria-hidden />
            <span className={`text-lg ${logo.className}`}>{logo.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
