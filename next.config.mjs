/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // You can use an empty string or omit it if not needed
        pathname: "/**", // Use '**' to match all paths
      },
    ],
  },
};

export default nextConfig;
