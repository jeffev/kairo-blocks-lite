# Kairo Blocks Lite

10 free landing page sections for **Next.js 16**, **Tailwind CSS 4** and **shadcn/ui**. Every block is a single,
self-contained `.tsx` file you can copy into any shadcn/ui project. MIT licensed.

| Category | Block |
|---|---|
| Navbar | `navbar-01`: responsive header with a mobile menu |
| Hero | `hero-01`: centered hero with product shot |
| Logo cloud | `logos-01`: logo grid |
| Features | `features-01`: three-column icon grid |
| Stats | `stats-01`: four big numbers |
| Testimonials | `testimonials-01`: three testimonial cards |
| Pricing | `pricing-01`: three tiers with billing toggle |
| FAQ | `faq-01`: accordion |
| Call to action | `cta-01`: primary banner with two buttons |
| Footer | `footer-01`: logo with four link columns |

- Built only on shadcn/ui theme tokens, so every block adopts your colors, radius and dark mode
- Responsive at phone, tablet and desktop widths
- No external images or extra npm packages: only shadcn/ui, `lucide-react` and Next.js
- Accessible markup: heading order, labelled controls, keyboard-friendly menus and accordions

> **Want more?** [Kairo Blocks](https://payhip.com/b/gD6od) has **61 blocks in 14 categories**: every variant of
> these sections plus team, blog, contact and newsletter blocks.
> [Live demo of the full pack](https://kairo-blocks-demo.jeffev123.workers.dev).

## Using a block in your project

Your project needs Tailwind CSS 4 and shadcn/ui ([setup guide](https://ui.shadcn.com/docs/installation)).

1. Copy the file, for example `src/blocks/hero/hero-01.tsx`, into your project
   (any folder, e.g. `components/sections/`).
2. Add the shadcn/ui components it imports. Every block lists them at the top of the file:

   ```bash
   npx shadcn@latest add button badge
   ```

3. Render it:

   ```tsx
   import Hero01 from "@/components/sections/hero-01";

   export default function Page() {
     return <Hero01 />;
   }
   ```

4. Replace the sample copy, links and data (kept in constants at the top of each component) with your own.

Each file also exports a small `meta` object used by the showcase; you can delete it. `navbar-01` and
`pricing-01` start with `"use client"` because they use state (mobile menu, billing toggle).

## Running the showcase

```bash
npm install
npm run dev
```

Open http://localhost:3000 to browse the blocks with live previews (desktop, tablet and mobile) and the code
view. `npm run build` produces a static site in `out/` that you can deploy anywhere.

## Customizing the look

Blocks use theme tokens (`bg-primary`, `text-muted-foreground`, `border`…), so changing your shadcn/ui theme
in `globals.css` restyles every block at once.

## License

[MIT](./LICENSE.md). Use the blocks in personal and commercial projects. The full Kairo Blocks pack is sold
separately under its own license.

Made by [Jefferson Valandro](https://jeffev.github.io/jeffersonvalandro/) · [ValandroUI](https://payhip.com/ValandroUI)
