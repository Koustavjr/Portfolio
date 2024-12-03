/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net", // For DevIcons images
      "upload.wikimedia.org", // For Canva logo
      "i.pinimg.com", // Pinterest images (primary CDN for pins)
      "in.pinterest.com"
    ],
  },
};

module.exports = nextConfig;
