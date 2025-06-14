import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  output: 'standalone',
  reactStrictMode: false,
  transpilePackages: ['@t3-oss/env-nextjs', '@t3-oss/env-core'],
}

export default nextConfig
