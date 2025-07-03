/** @type {import('next').NextConfig} */

let withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  output: 'export',
  basePath: '/llm-viz',
  reactStrictMode: false, // Recommended for the `pages` directory, default in `app`.
  productionBrowserSourceMaps: true,
  experimental: {
    appDir: true,
  },
  env: {
    BASE_URL: '',
  },
};

module.exports = withBundleAnalyzer(nextConfig);
