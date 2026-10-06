export const meta = {
  name: "Four big numbers",
  description: "Short heading followed by four large statistics in a row, separated by dividers.",
};

const stats = [
  { value: "4,800+", label: "Teams using Nimbus" },
  { value: "2.1B", label: "Customer events analyzed each month" },
  { value: "37%", label: "Average drop in churn after one year" },
  { value: "4.8/5", label: "Rating across 900+ G2 reviews" },
];

export default function Stats01() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Trusted by teams who obsess over customers
        </h2>
        <p className="mt-4 text-muted-foreground">
          From seed-stage startups to public companies, Nimbus powers decisions every day.
        </p>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-y-10 lg:mt-16 lg:grid-cols-4 lg:divide-x">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse items-center justify-end px-4 text-center">
            <dt className="mt-2 max-w-[14rem] text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
