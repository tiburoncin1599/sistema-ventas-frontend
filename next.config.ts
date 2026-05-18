import type { NextConfig } from 'next';

const rawUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const API_HOST = rawUrl.startsWith('http')
  ? new URL(rawUrl).hostname
  : rawUrl;

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