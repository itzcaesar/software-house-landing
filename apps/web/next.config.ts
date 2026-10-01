import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@craftbyte/db"],
  // Old price list page is gone; keep inbound links working.
  async redirects() {
    return [{ source: "/pricing", destination: "/#pricing", permanent: true }];
  },
};

export default nextConfig;
