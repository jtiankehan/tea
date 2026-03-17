"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// 模拟产品数据（可以根据需要扩展）
const searchData = [
  { id: "raw-puer", name: "生普", category: "普洱茶", price: "138", img: "/product_green_ceramic.png", link: "/selection/raw-puer" },
  { id: "ripe-puer", name: "熟普", category: "普洱茶", price: "148", img: "/product_brown_ceramic.png", link: "/selection/ripe-puer" },
  { id: "dian-hong", name: "滇红", category: "红茶", price: "128", img: "/product_red_ceramic.png", link: "/selection/dian-hong" },
  { id: "white-tea", name: "白茶", category: "白茶", price: "158", img: "/product_white_ceramic.png", link: "/selection/white-tea" },
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  // 快捷键 ESC 关闭
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // 搜索逻辑
  const results = query.trim() 
    ? searchData.filter(item => 
        item.name.includes(query) || 
        item.category.includes(query)
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col p-8 md:p-20"
        >
          {/* 关闭按钮 */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 md:top-12 md:right-12 p-3 text-gray-400 hover:text-[#1f3d33] transition-colors rounded-full hover:bg-gray-100"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* 搜索框 */}
          <div className="max-w-4xl mx-auto w-full pt-10">
            <div className="relative border-b-2 border-gray-100 focus-within:border-[#1f3d33] transition-colors pb-4 mb-20">
              <SearchIcon className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={32} strokeWidth={1.5} />
              <input 
                autoFocus
                type="text"
                placeholder="搜索您心仪的茗茶..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-4xl md:text-6xl font-serif text-[#1f3d33] pl-16 outline-none placeholder:text-gray-100"
              />
            </div>

            {/* 搜索结果 */}
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
              <AnimatePresence mode="popLayout">
                {results.length > 0 ? (
                  results.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link 
                        href={item.link} 
                        onClick={onClose}
                        className="group flex items-center gap-6 p-4 rounded-3xl hover:bg-[#faf8f4] transition-all"
                      >
                        <div className="w-24 h-24 relative bg-[#f0ece4] rounded-2xl flex items-center justify-center p-4">
                          <Image src={item.img} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                          <span className="text-[10px] tracking-[0.2em] text-[#cfaa6b] uppercase font-sans mb-1 block">{item.category}</span>
                          <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-400">¥{item.price} 起</p>
                        </div>
                        <ArrowRight className="text-gray-200 group-hover:text-[#1f3d33] group-hover:translate-x-2 transition-all" size={24} />
                      </Link>
                    </motion.div>
                  ))
                ) : query.trim() ? (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-400 font-serif text-xl col-span-2 text-center py-20"
                  >
                    抱歉，由于资源稀缺，未找到匹配的茗茶。
                  </motion.p>
                ) : (
                  <div className="col-span-2">
                    <p className="text-xs tracking-[0.4em] text-gray-300 uppercase font-sans mb-8">热门推荐</p>
                    <div className="flex flex-wrap gap-4">
                      {["滇红", "古树白茶", "普洱", "礼盒定制"].map(tag => (
                        <button 
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-6 py-2.5 rounded-full border border-gray-100 text-gray-500 font-serif hover:border-[#cfaa6b] hover:text-[#cfaa6b] transition-all"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
