/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
  },
  allowedDevOrigins: ['192.168.0.110', 'localhost:3001']
};

module.exports = nextConfig;
