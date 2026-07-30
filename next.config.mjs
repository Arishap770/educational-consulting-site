/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // ensure Turbopack resolves from this project folder (avoids picking up parent lockfiles)
    root: './',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
