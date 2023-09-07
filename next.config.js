/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["reqres.in"],
  },
};

module.exports = nextConfig;
