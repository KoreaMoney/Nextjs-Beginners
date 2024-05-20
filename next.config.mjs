/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "blog.kakaocdn.net",
      },
      {
        protocol: "https",
        hostname: "images.velog.io",
      },
      {
        protocol: "https",
        hostname: "cdn.engage-ai.co",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png",
      },
    ],
  },
};

export default nextConfig;
