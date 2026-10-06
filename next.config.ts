import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The showcase is a static site: `npm run build` writes it to /out.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
