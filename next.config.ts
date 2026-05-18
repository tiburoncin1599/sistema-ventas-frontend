import type { NextConfig } from 'next';

const API_HOST = process.env.NEXT_PUBLIC_API_URL
  ? new URL(process.env.NEXT_PUBLIC_API_URL).hostname
  : 'localhost';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: API_HOST,
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: API_HOST,
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;