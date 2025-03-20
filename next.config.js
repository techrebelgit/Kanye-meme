/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "components", "lib", "layouts", "utils", "app"],
  },
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
}

module.exports = nextConfig

