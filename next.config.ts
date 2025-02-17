import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: "/query",
        destination: "http://localhost:8080/query",
      },
    ];
  },
};

export default nextConfig;
