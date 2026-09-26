import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@callumc/db"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
