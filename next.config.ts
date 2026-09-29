import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // The dev-mode "N" badge sits over the landing footer at phone width. CI runs
  // the a11y scan against `next dev`, so the badge would be scanned as page UI.
  devIndicators: false,
};

export default nextConfig;
