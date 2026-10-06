"use client";

import * as React from "react";
import { Check, Copy, ExternalLink, Monitor, Smartphone, Tablet } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const viewports = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "390px" },
] as const;

export function BlockPreview({
  id,
  name,
  description,
  interactive,
  file,
  code,
  html,
}: {
  id: string;
  name: string;
  description: string;
  interactive: boolean;
  file: string;
  code: string;
  html: string;
}) {
  const [tab, setTab] = React.useState<"preview" | "code">("preview");
  const [viewport, setViewport] = React.useState<(typeof viewports)[number]["id"]>("desktop");
  const [height, setHeight] = React.useState(480);
  const [copied, setCopied] = React.useState(false);
  const frameRef = React.useRef<HTMLIFrameElement>(null);

  // The preview page reports its content height so the iframe never scrolls.
  React.useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.source === frameRef.current?.contentWindow && event.data?.type === "block-height") {
        setHeight(Math.max(200, Math.ceil(event.data.height)));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success(`Copied ${file.split("/").pop()}`);
    setTimeout(() => setCopied(false), 1500);
  };

  const width = viewports.find((v) => v.id === viewport)!.width;

  return (
    <section id={id} className="grid scroll-mt-20 gap-3">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="grid gap-0.5">
          <h2 className="flex items-center gap-2 font-semibold">
            {name}
            {interactive && <Badge variant="secondary">Interactive</Badge>}
          </h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md border p-0.5" role="tablist" aria-label="View">
            {(["preview", "code"] as const).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={cn("rounded px-3 py-1 text-sm capitalize", tab === t ? "bg-muted font-medium" : "text-muted-foreground")}
              >
                {t}
              </button>
            ))}
          </div>
          {tab === "preview" && (
            <div className="hidden rounded-md border p-0.5 sm:flex">
              {viewports.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  aria-label={v.label}
                  aria-pressed={viewport === v.id}
                  onClick={() => setViewport(v.id)}
                  className={cn("rounded p-1.5", viewport === v.id ? "bg-muted" : "text-muted-foreground")}
                >
                  <v.icon className="size-4" />
                </button>
              ))}
            </div>
          )}
          <Button variant="outline" size="icon-sm" asChild aria-label="Open in new tab">
            <a href={`/preview/${id}/`} target="_blank" rel="noreferrer">
              <ExternalLink />
            </a>
          </Button>
          <Button variant="outline" size="sm" onClick={copy}>
            {copied ? <Check /> : <Copy />}
            {copied ? "Copied" : "Copy code"}
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-muted/30">
        {tab === "preview" ? (
          <div className="flex justify-center">
            <iframe
              ref={frameRef}
              src={`/preview/${id}/`}
              title={name}
              loading="lazy"
              className="block bg-background transition-[width] duration-300"
              style={{ width, height, maxWidth: "100%" }}
            />
          </div>
        ) : (
          <div className="max-h-[560px] overflow-auto bg-card text-[13px] leading-relaxed">
            <div className="sticky top-0 border-b bg-card/95 px-4 py-2 font-mono text-xs text-muted-foreground backdrop-blur">{file}</div>
            <div className="p-4 [&_pre]:!bg-transparent" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )}
      </div>
    </section>
  );
}
