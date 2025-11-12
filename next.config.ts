import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 100],
  },
  distDir: "dist",
};

export default nextConfig;
