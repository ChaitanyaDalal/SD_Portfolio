import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  trailingSlash: false, // 👈 CHANGED TO FALSE to fix public asset 404s

  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;