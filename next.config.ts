import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // ---- 禁用缓存，方便调试 ----
  // 禁用数据缓存（fetch 默认不缓存）
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
  // 为所有路由添加 no-cache 响应头
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate, proxy-revalidate" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
};

export default nextConfig;
