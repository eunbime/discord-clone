// import { webpack } from "next/dist/compiled/webpack/webpack";

const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs: utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },
  images: {
    domains: ["utfs.io"],
  },
};

export default nextConfig;
