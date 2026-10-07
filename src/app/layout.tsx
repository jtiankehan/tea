import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#101726",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tea.reicen.com"),
  title: {
    default: "饮者留茗 | 高端商务茶礼定制与云南古树名茶",
    template: "%s | 饮者留茗",
  },
  description:
    "源自云南传统茶脉与明清制茶世家传承，饮者留茗专注提供高端商务茶礼、古树白茶、滇红及云南普洱茶个性化定制服务。支持 3D 在线实时预览与激光刻字个性化定制，打造高品质国潮企业礼赠与私人专属茶礼。",
  keywords: [
    "商务茶礼定制",
    "云南普洱茶定制",
    "滇红礼盒",
    "古树白茶",
    "饮者留茗",
    "企业礼品茶",
    "3D茶礼定制",
    "高端茶礼定制",
    "茶叶礼盒定制",
    "个性化刻字茶礼",
    "企业商务礼品",
  ],
  authors: [{ name: "饮者留茗", url: "https://tea.reicen.com" }],
  creator: "饮者留茗",
  publisher: "饮者留茗",
  alternates: {
    canonical: "https://tea.reicen.com",
  },
  openGraph: {
    title: "饮者留茗 | 高端商务茶礼定制与云南古树名茶",
    description:
      "源自云南传统茶脉与明清制茶世家传承，专注提供高端商务茶礼定制。支持 3D 实时在线预览与激光雕刻定制服务。",
    url: "https://tea.reicen.com",
    siteName: "饮者留茗",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://tea.reicen.com/hero_tea_box.png",
        width: 1200,
        height: 630,
        alt: "饮者留茗 - 高端商务茶礼定制礼盒展示",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "饮者留茗 | 高端商务茶礼定制与云南古树名茶",
    description:
      "源自云南传统茶脉与明清制茶世家传承，专注提供高端商务茶礼、古树白茶、滇红及普洱茶 3D 视觉定制服务。",
    images: ["https://tea.reicen.com/hero_tea_box.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased bg-[#f7f4ed] text-[#2d2d2d]">
        {children}
      </body>
    </html>
  );
}
