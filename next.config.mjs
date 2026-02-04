/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configurações otimizadas para Design System
  images: {
    domains: [],
  },
  // Rewrites para servir Storybook via /storybook
  async rewrites() {
    return [
      {
        source: '/storybook',
        destination: 'http://localhost:6006/',
      },
      {
        source: '/storybook/:path*',
        destination: 'http://localhost:6006/:path*',
      },
    ];
  },
};

export default nextConfig;
