import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: "docs" // esta línea hace que genere directo en /docs
};

export default nextConfig;
