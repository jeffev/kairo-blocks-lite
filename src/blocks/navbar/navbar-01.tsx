"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Cloud, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const meta = {
  name: "Classic navbar",
  description: "Logo on the left, centered links, sign-in and CTA on the right, with a slide-out mobile menu.",
  interactive: true,
};

const links = ["Product", "Solutions", "Pricing", "Customers", "Docs"];

function Logo() {
  return (
    <Link href="#" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Cloud className="size-4" />
      </span>
      Nimbus
    </Link>
  );
}

export default function Navbar01() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr]">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href="#">Sign in</Link>
          </Button>
          <Button className="hidden sm:inline-flex" asChild>
            <Link href="#">Start free trial</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="border-b">
                <SheetTitle className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Cloud className="size-3.5" />
                  </span>
                  Nimbus
                </SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="grid gap-1 px-2">
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-muted"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto grid gap-2 border-t p-4">
                <Button variant="outline" size="lg" asChild>
                  <Link href="#" onClick={() => setOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href="#" onClick={() => setOpen(false)}>
                    Start free trial <ArrowRight />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
