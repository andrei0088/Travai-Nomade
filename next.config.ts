import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Activează exportul static
  output: "export",

  // Alte configurări opționale
  reactStrictMode: true,
  // dacă folosești imagini, ai nevoie să setezi un loader compatibil cu exportul static
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
