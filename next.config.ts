import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.forgecdn.net",
      },
    ],
  },
};

export default nextConfig;
