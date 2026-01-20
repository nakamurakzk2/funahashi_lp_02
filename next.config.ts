import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/funahashi_lp_02',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
