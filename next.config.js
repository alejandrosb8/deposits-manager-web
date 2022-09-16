/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['saintnet.com', 'www.arquetipoyempatia.com', 'lottiefiles.com'],
  },
};

module.exports = nextConfig;
