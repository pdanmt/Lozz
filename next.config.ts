import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
      optimizePackageImports: ["@chakra-ui/react"],
    },
    images: {
      domains: [
        'res.cloudinary.com',
        'lh3.googleusercontent.com'
      ]
    }
};

export default nextConfig;
