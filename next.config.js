/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify:true,
}

module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com'], // Add the hostname here
  },
};
