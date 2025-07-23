/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 this tells Next.js to statically export the site
  images: {
    unoptimized: true, // 👈 required if you're using <Image /> in static export
  },
};

module.exports = nextConfig;
