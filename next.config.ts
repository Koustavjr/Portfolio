import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "", // Leave empty if not applicable
        pathname: "/**", // Match all paths on this domain
      },
    ],
  },
  /* other config options */
};

export default nextConfig;
