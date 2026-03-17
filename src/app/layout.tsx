import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "饮者留茗 | 专注高端茶礼定制 - 汇聚高山原叶，传承国潮美学",
  description: "提供一站式高端茶叶与包装个性化定制服务。涵盖滇红、古树白茶、普洱等优质茶源，支持高保真交互式定制预览，所见即所得。传承百年工艺，打造专属您的品牌礼赠。",
  keywords: ["茶叶定制", "高端礼盒", "茶礼定制", "饮者留茗", "企业礼赠", "礼品定制"],
  authors: [{ name: "饮者留茗" }],
  openGraph: {
    title: "饮者留茗 | 高端茶礼定制专家",
    description: "汇聚高山原叶，每一份茶礼都承载着独特的心意。立即开启您的专属定制之旅。",
    url: "https://tea.example.com",
    siteName: "饮者留茗",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "饮者留茗定制礼盒展示",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "饮者留茗 | 高端茶礼定制专家",
    description: "传承国潮美学，为您提供专业的一站式茶礼定制方案。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
