import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  env: {
    API_HOST: process.env.API_HOST,
  }
};

export default nextConfig;
