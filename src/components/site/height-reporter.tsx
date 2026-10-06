"use client";

import * as React from "react";

/** Posts the content height to the parent window so the showcase iframe can fit it. */
export function HeightReporter({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || window.parent === window) return;
    const report = () => window.parent.postMessage({ type: "block-height", height: el.scrollHeight }, "*");
    const observer = new ResizeObserver(report);
    observer.observe(el);
    report();
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
