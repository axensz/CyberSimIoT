/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/CyberSimIoT' : '', // Nota: CyberSimIoT con C y S mayúsculas
  trailingSlash: true,
  distDir: 'out',
}

export default nextConfig