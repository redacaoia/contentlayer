const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com","github.com"],
  },
};

module.exports = withContentlayer(nextConfig);
