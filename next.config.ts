import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
    },
    turbopack: {
        root: path.resolve(__dirname),
    },
};

export default nextConfig;
