"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Category = "全部" | "绿茶" | "红茶" | "乌龙" | "普洱" | "白茶";

const categories: Category[] = ["全部", "绿茶", "红茶", "乌龙", "普洱", "白茶"];

const products = [
  {
    id: 1,
    name: "西湖龙井",
    en: "West Lake Longjing",
    category: "绿茶",
    price: 139,
    origin: "浙江杭州",
    grade: "特级",
    desc: "淡雅清香，回甘持久。采摘于清明前后，手工炒制，叶片扁平光滑，色泽嫩绿。",
    img: "/product_green_tin.png",
    bg: "#1a365d",
    btnBg: "#c24239",
  },
  {
    id: 2,
    name: "武夷岩茶",
    en: "Wuyi Rock Oolong",
    category: "乌龙",
    price: 129,
    origin: "福建武夷山",
    grade: "一级",
    desc: "岩骨花香，醇厚甘爽。生长于武夷山核心风景区，独特的岩石矿物质赋予其独特韵味。",
    img: "/product_brown_tin.png",
    bg: "#2b7a78",
    btnBg: "#2b7a78",
  },
  {
    id: 3,
    name: "云南普洱",
    en: "Yunnan Pu-erh",
    category: "普洱",
    price: 129,
    origin: "云南西双版纳",
    grade: "特级",
    desc: "陈香醇厚，越陈越香。选用古树春茶压制，历经时光酝酿，每一口都是岁月的沉淀。",
    img: "/product_red_tin.png",
    bg: "#a84432",
    btnBg: "#1a365d",
  },
  {
    id: 4,
    name: "安吉白茶",
    en: "Anji White Tea",
    category: "绿茶",
    price: 168,
    origin: "浙江安吉",
    grade: "特级",
    desc: "鲜爽清甜，氨基酸含量极高。白化茶树的珍稀之作，口感柔和细腻，生津止渴。",
    img: "/product_green_tin.png",
    bg: "#2d5016",
    btnBg: "#2d5016",
  },
  {
    id: 5,
    name: "正山小种",
    en: "Lapsang Souchong",
    category: "红茶",
    price: 158,
    origin: "福建桐木关",
    grade: "特级",
    desc: "松烟香、桂圆味，世界红茶鼻祖。源自武夷山桐木关，松木熏制工艺独树一帜。",
    img: "/product_red_tin.png",
    bg: "#7b2d1e",
    btnBg: "#7b2d1e",
  },
  {
    id: 6,
    name: "福鼎白毫银针",
    en: "Fuding Silver Needle",
    category: "白茶",
    price: 188,
    origin: "福建福鼎",
    grade: "特级",
    desc: "白毫披覆，香气清纯。以单芽为原料，轻微萎凋后自然干燥，最大限度保留茶叶本真。",
    img: "/product_green_tin.png",
    bg: "#4a3728",
    btnBg: "#4a3728",
  },
];

export default function SelectionPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("全部");
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  const filtered =
    activeCategory === "全部" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#faf8f4] text-gray-800">
      <Header />

      {/* Banner */}
      <section className="relative w-full pt-16 bg-[#f0ece4] overflow-hidden" style={{ height: "260px" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#437a63] blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-[#cfaa6b] blur-[80px]" />
        </div>

        <div className="container mx-auto px-8 max-w-[1400px] h-full flex flex-col justify-center relative z-10">
          <p className="text-[#cfaa6b] tracking-[0.4em] text-xs uppercase font-sans mb-3">
            Tea Selection
          </p>
          <h1 className="font-serif text-5xl font-bold text-[#1f3d33] tracking-wide">
            甄选茗品
          </h1>
          <p className="text-gray-500 mt-3 text-sm tracking-wider">
            匠心甄选 · 原产地直采 · 品类齐全
          </p>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="sticky top-16 z-40 bg-[#faf8f4] border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-8 max-w-[1400px] flex items-center gap-2 py-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-6 py-2 rounded-full font-serif text-sm tracking-widest transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#1f3d33] text-white shadow-md"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-[#1f3d33] hover:text-[#1f3d33]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 产品网格 */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 flex flex-col h-[480px] cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* 彩色顶部 */}
                <div
                  className="h-[55%] relative rounded-t-3xl overflow-hidden flex justify-center items-end pb-8"
                  style={{ background: product.bg }}
                >
                  <div className="absolute top-5 left-5 flex flex-col gap-1 z-20">
                    <div className="bg-[#cc4040] text-white text-[10px] font-serif px-3 py-1 rounded-full shadow-lg tracking-wider">
                      {product.category}
                    </div>
                    <div className="bg-[#e8dcc4] text-[#8c7a56] text-[10px] font-serif px-3 py-1 rounded-full shadow-lg font-bold tracking-wider">
                      ¥{product.price}
                    </div>
                  </div>

                  <div className="w-44 h-52 relative z-10 translate-y-14 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                    <Image src={product.img} alt={product.name} fill className="object-contain" />
                  </div>
                </div>

                {/* 白色底部 */}
                <div className="h-[45%] bg-[#faf9f7] flex flex-col items-center pt-20 pb-6 px-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">{product.name}</h3>
                  <p className="text-[10px] text-gray-400 tracking-[0.2em] font-sans mt-1 mb-4 uppercase">
                    {product.en}
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <button
                      className="text-gray-400 border border-gray-200 px-5 py-2 rounded-full text-sm font-serif tracking-wider hover:border-gray-400 transition-all"
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                    >
                      查看详情
                    </button>
                    <Link
                      href="/customization"
                      className="text-white px-5 py-2 rounded-full text-sm font-serif tracking-wider shadow-md hover:shadow-lg transition-all"
                      style={{ background: product.btnBg }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      立即定制
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 详情弹窗 */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-48 flex items-center justify-center relative"
              style={{ background: selectedProduct.bg }}
            >
              <div className="w-36 h-40 relative drop-shadow-2xl">
                <Image src={selectedProduct.img} alt={selectedProduct.name} fill className="object-contain" />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-[#1a1a1a]">{selectedProduct.name}</h2>
                  <p className="text-[10px] text-gray-400 tracking-[0.2em] font-sans mt-1 uppercase">{selectedProduct.en}</p>
                </div>
                <span className="font-serif text-2xl font-bold text-[#cc4040]">¥{selectedProduct.price}</span>
              </div>
              <div className="flex gap-3 mb-6">
                <span className="text-xs bg-[#f0ece4] text-[#8c7a56] px-3 py-1 rounded-full font-serif tracking-wider">
                  {selectedProduct.origin}
                </span>
                <span className="text-xs bg-[#f0ece4] text-[#8c7a56] px-3 py-1 rounded-full font-serif tracking-wider">
                  {selectedProduct.grade}
                </span>
                <span className="text-xs bg-[#f0ece4] text-[#8c7a56] px-3 py-1 rounded-full font-serif tracking-wider">
                  {selectedProduct.category}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{selectedProduct.desc}</p>
              <div className="flex gap-4">
                <button
                  className="flex-1 py-3 border border-gray-200 rounded-full font-serif text-sm text-gray-400 tracking-widest hover:border-gray-400 transition-all"
                  onClick={() => setSelectedProduct(null)}
                >
                  关闭
                </button>
                <Link
                  href="/customization"
                  className="flex-1 py-3 text-white rounded-full font-serif text-sm tracking-widest text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  style={{ background: selectedProduct.btnBg }}
                >
                  立即定制
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
