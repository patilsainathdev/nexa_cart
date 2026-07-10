import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🚀 Force build output into a temporary directory on your faster system drive
    
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
