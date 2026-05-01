/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "static.bhphoto.com" },
      { protocol: "https", hostname: "code.visualstudio.com" },
      { protocol: "https", hostname: "github.githubassets.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

module.exports = nextConfig;
