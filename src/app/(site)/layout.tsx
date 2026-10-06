import { SiteHeader } from "@/components/site/site-header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        Built with Next.js, Tailwind CSS and shadcn/ui.
      </footer>
    </>
  );
}
