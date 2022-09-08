/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['saintnet.com', 'www.arquetipoyempatia.com'],
  },
};

module.exports = nextConfig;
