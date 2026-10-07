"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Category = "全部" | "绿茶" | "红茶" | "乌龙" | "普洱" | "白茶";

const categories: Category[] = ["全部", "绿茶", "红茶", "乌龙", "普洱", "白茶"];

// 更新产品数据，添加 slug 与动态 ID 对应
const products = [
  {
    id: "raw-puer",
    name: "古树生普",
    en: "Raw Pu-erh",
    category: "普洱",
    price: 138,
    origin: "云南临沧",
    grade: "特级",
    img: "/product_green_ceramic.png",
    bg: "#1f3d33",
    btnBg: "#cfaa6b",
  },
  {
    id: "ripe-puer",
    name: "宫廷熟普",
    en: "Ripe Pu-erh",
    category: "普洱",
    price: 148,
    origin: "云南勐海",
    grade: "宫廷级",
    img: "/product_brown_ceramic.png",
    bg: "#4a2c10",
    btnBg: "#cc4040",
  },
  {
    id: "dian-hong",
    name: "凤庆滇红",
    en: "Yunnan Black Tea",
    category: "红茶",
    price: 128,
    origin: "云南凤庆",
    grade: "特级",
    img: "/product_red_ceramic.png",
    bg: "#7b1b1b",
    btnBg: "#cfaa6b",
  },
  {
    id: "white-tea",
    name: "高山白茶",
    en: "White Tea",
    category: "白茶",
    price: 158,
    origin: "福建福鼎",
    grade: "特级",
    img: "/product_white_ceramic.png",
    bg: "#3a4a55",
    btnBg: "#3a4a55",
  },
  {
    id: "longjing",
    name: "西湖龙井",
    en: "West Lake Longjing",
    category: "绿茶",
    price: 139,
    origin: "浙江杭州",
    grade: "特级",
    img: "/product_green_ceramic.png",
    bg: "#1a365d",
    btnBg: "#cc4040",
  },
  {
    id: "rock-tea",
    name: "武夷岩茶",
    en: "Rock Oolong",
    category: "乌龙",
    price: 129,
    origin: "福建武夷山",
    grade: "一级",
    img: "/product_brown_ceramic.png",
    bg: "#2b7a78",
    btnBg: "#2b7a78",
  }
];

export default function SelectionPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("全部");

  const filtered =
    activeCategory === "全部" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#faf8f4] text-gray-800">
      <Header />

      {/* Banner */}
      <section className="relative w-full pt-16 bg-[#1f3d33] overflow-hidden" style={{ height: "320px" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#437a63] blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-[#cfaa6b] blur-[80px]" />
        </div>

        <div className="container mx-auto px-8 max-w-[1400px] h-full flex flex-col justify-center relative z-10 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#cfaa6b] tracking-[0.4em] text-xs uppercase font-sans mb-4"
          >
            Premium Collection
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white tracking-wide"
          >
            甄选茗品
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-[2px] bg-[#cfaa6b] my-6 hidden md:block"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-sm tracking-wider"
          >
            匠心开发 · 三大雪山原产地直采 · 岁月沉淀之味
          </motion.p>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-8 max-w-[1400px] flex items-center justify-center space-x-2 md:space-x-4 py-5 overflow-x-auto scrollbar-hide">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-8 py-2.5 rounded-full font-serif text-sm tracking-widest transition-all duration-300 relative ${
                activeCategory === cat
                  ? "text-white"
                  : "text-gray-400 hover:text-[#1f3d33]"
              }`}
            >
              {activeCategory === cat && (
                <motion.div 
                  layoutId="active-cat"
                  className="absolute inset-0 bg-[#1f3d33] rounded-full -z-10 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* 产品网格 */}
      <section className="py-20 flex-1">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 flex flex-col h-[520px] relative"
                >
                  <Link 
                    href={`/selection/${product.id}`} 
                    className="absolute inset-0 z-10" 
                    aria-label={`查看 ${product.name} 详情`} 
                  />
                  
                  {/* 彩色顶部 */}
                  <div
                    className="h-[55%] relative rounded-t-[2.5rem] overflow-hidden flex justify-center items-end pb-8"
                    style={{ background: product.bg }}
                  >
                    <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                      <div className="bg-white/10 backdrop-blur-md text-white text-[10px] font-sans px-3 py-1 rounded-full border border-white/20 tracking-widest">
                        {product.category}
                      </div>
                      <div className="bg-[#cc4040] text-white text-xs font-serif px-4 py-1.5 rounded-full shadow-xl font-bold tracking-wider">
                        ¥{product.price} <span className="text-[10px] font-normal opacity-70">起</span>
                      </div>
                    </div>

                    <div className="w-52 h-60 relative z-10 translate-y-16 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-[20px_40px_40px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={product.img} 
                        alt={`饮者留茗 - ${product.name}高山原叶茶礼`} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                  </div>

                  {/* 白色底部 */}
                  <div className="h-[45%] bg-[#faf9f7] flex flex-col items-center pt-24 pb-8 px-8 text-center">
                    <h3 className="font-serif text-3xl font-bold text-[#1a1a1a] transition-colors group-hover:text-[#1f3d33]">{product.name}</h3>
                    <div className="w-8 h-[2px] bg-[#cfaa6b] my-3 group-hover:w-16 transition-all duration-500" />
                    <p className="text-[11px] text-gray-400 tracking-[0.3em] font-sans uppercase mb-6">
                      {product.en}
                    </p>
                    
                    <div className="flex gap-4 mt-auto w-full relative z-20">
                      <Link
                        href={`/selection/${product.id}`}
                        aria-label={`鉴赏 ${product.name} 详情`}
                        className="flex-1 text-gray-500 border border-gray-200 py-3 rounded-full text-xs font-serif tracking-widest hover:border-[#1f3d33] hover:text-[#1f3d33] transition-all bg-white"
                      >
                        鉴赏详情
                      </Link>
                      <Link
                        href="/customization"
                        aria-label={`立即定制 ${product.name} 礼盒`}
                        className="flex-1 text-white py-3 rounded-full text-xs font-serif tracking-widest shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all outline-none"
                        style={{ background: product.btnBg }}
                      >
                        立即定制
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
