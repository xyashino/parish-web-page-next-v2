/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    mdxRs: true,
    serverActions: true,
    workerThreads: false,
    cpus: 1,
  },
  images: {
    domains: ["test.yashino.live"],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
