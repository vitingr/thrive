import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "img.clerk.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config) {
    // Adicionar alias para '@'
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    // Adicionar suporte para topLevelAwait
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    return config;
  },
};

export default nextConfig;
