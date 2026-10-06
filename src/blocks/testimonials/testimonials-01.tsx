import { Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const meta = {
  name: "Three testimonial cards",
  description: "Section heading and three cards with star rating, quote, avatar, name and role.",
};

const testimonials = [
  {
    quote:
      "We used to spend the first week of every month stitching together survey exports. Nimbus does it overnight, " +
      "and the summaries are better than what we wrote by hand.",
    name: "Priya Raman",
    role: "Head of Product, Lattice Labs",
    initials: "PR",
    rating: 5,
  },
  {
    quote:
      "The churn-risk alerts paid for the whole year in the first quarter. Our CS team now calls accounts before " +
      "they go quiet, not after.",
    name: "Marcus Oyelaran",
    role: "VP Customer Success, Fieldwise",
    initials: "MO",
    rating: 5,
  },
  {
    quote:
      "Setup took an afternoon. We connected Intercom and Segment, and by the next morning every ticket was tagged " +
      "by theme and sentiment.",
    name: "Elena Sokolova",
    role: "Support Operations Lead, Brightcart",
    initials: "ES",
    rating: 4,
  },
];

export default function Testimonials01() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Testimonials</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Teams that finally hear their customers
        </h2>
        <p className="mt-4 text-muted-foreground">
          More than 2,000 product, research and support teams use Nimbus to turn feedback into decisions.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex gap-0.5" role="img" aria-label={`Rated ${t.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  aria-hidden
                  className={i < t.rating ? "size-4 fill-amber-400 text-amber-400" : "size-4 text-muted-foreground/30"}
                />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-pretty text-card-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t pt-6">
              <Avatar size="lg">
                <AvatarFallback className="bg-primary/10 font-medium text-primary">{t.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
