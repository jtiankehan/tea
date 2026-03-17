"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Droplets, Thermometer, Wind, MapPin, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 产品详细数据
const productDetails: Record<string, any> = {
  "raw-puer": {
    name: "古树生普",
    en: "Raw Pu-erh",
    price: 138,
    category: "普洱茶",
    img: "/product_green_ceramic.png",
    bg: "bg-[#1f3d33]",
    desc: "采自云南临沧三大雪山核心产区，单株采摘。茶气强劲，回甘生津极快。",
    origin: {
      location: "云南·临沧·永德大雪山",
      altitude: "1800m - 2100m",
      age: "300年以上核心古茶园",
    },
    flavor: {
      aroma: "兰香、蜜香、原野香",
      taste: "入口微苦，转瞬即甜，韵味深长",
      body: "汤色金黄明亮，稠厚有力",
    },
    brewing: {
      temp: "95℃ - 100℃",
      ratio: "1:20 (建议150ml盖碗投茶7-8g)",
      time: "前3泡 5-8秒即出，后期适当延长",
    }
  },
  "ripe-puer": {
    name: "宫廷熟普",
    en: "Ripe Pu-erh",
    price: 148,
    category: "普洱茶",
    img: "/product_brown_ceramic.png",
    bg: "bg-[#4a2c10]",
    desc: "勐海核心工艺发酵，精选宫廷级细嫩芽头。陈香显著，口感如丝绸般顺滑。",
    origin: {
      location: "云南·西双版纳·勐海",
      altitude: "1200m - 1500m",
      age: "勐海大叶种早春原料",
    },
    flavor: {
      aroma: "陈香、枣香、糯香",
      taste: "醇厚甘润，无堆味，喉韵绵延",
      body: "汤色红浓透明，如红宝石般瑰丽",
    },
    brewing: {
      temp: "100℃沸水",
      ratio: "1:20 (建议150ml盖碗投茶8g)",
      time: "润茶2次，每泡10秒左右",
    }
  },
  "dian-hong": {
    name: "凤庆滇红",
    en: "Yunnan Black Tea",
    price: 128,
    category: "红茶",
    img: "/product_red_ceramic.png",
    bg: "bg-[#7b1b1b]",
    desc: "凤庆特级原料，全手工揉捻。蜜香高扬，滋味浓郁而不失细腻。",
    origin: {
      location: "云南·临沧·凤庆",
      altitude: "1600m以上",
      age: "凤庆大叶种古树群落",
    },
    flavor: {
      aroma: "天然蜜香、花香、果香",
      taste: "鲜爽甜润，回味醇正",
      body: "汤色红艳明亮，金圈显著",
    },
    brewing: {
      temp: "90℃ - 92℃",
      ratio: "1:30 (建议150ml盖碗投茶5g)",
      time: "5-10秒快速出汤",
    }
  },
  "white-tea": {
    name: "古树白茶",
    en: "Ancient White Tea",
    price: 158,
    category: "白茶",
    img: "/product_white_ceramic.png",
    bg: "bg-[#3a4a55]",
    desc: "福鼎传统工艺，萎凋自然。毫香幽淡，清纯甜美，极耐冲泡。",
    origin: {
      location: "福建·宁德·福鼎太姥山",
      altitude: "800m - 1000m",
      age: "高山大毫茶群落",
    },
    flavor: {
      aroma: "毫香、荷叶香、药香(随陈放增长)",
      taste: "清甜甘润，层次分明",
      body: "汤色杏黄透亮，内含物质丰富",
    },
    brewing: {
      temp: "85℃ - 95℃",
      ratio: "1:30 (建议150ml盖碗投茶5g)",
      time: "首泡15秒，后续逐渐累加",
    }
  }
};

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const product = productDetails[id] || productDetails["raw-puer"]; // 容错处理

  return (
    <main className="min-h-screen bg-[#faf8f4] flex flex-col font-sans">
      <Header />

      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 overflow-hidden ${product.bg}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-[120px]" />
        </div>

        <div className="container mx-auto px-8 max-w-[1200px] relative z-10">
          <Link 
            href="/selection" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-10 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-widest font-serif">返回选购</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* 左侧文字 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] tracking-[0.2em] uppercase font-sans border border-white/20">
                  {product.category}
                </span>
                <span className="text-white/40 text-xs tracking-widest uppercase">Premium Grade</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md font-serif italic text-balance">
                "{product.desc}"
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">价格</p>
                  <p className="text-[#cfaa6b] text-3xl font-serif font-bold">¥{product.price} <span className="text-sm font-sans font-normal opacity-60">/套起</span></p>
                </div>
                <Link 
                  href="/customization"
                  className="bg-[#cc4040] text-white px-10 py-4 rounded-full font-serif text-sm tracking-[0.2em] hover:bg-[#b03030] transition-all hover:scale-105 shadow-xl"
                >
                  立即定制此款
                </Link>
              </div>
            </motion.div>

            {/* 右侧图片 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="w-full h-full absolute animate-pulse opacity-20 bg-gradient-to-tr from-white to-transparent rounded-full blur-3xl" />
              <div className="w-80 h-96 relative z-10 drop-shadow-[20px_40px_60px_rgba(0,0,0,0.5)]">
                <Image 
                  src={product.img} 
                  alt={product.name} 
                  fill 
                  className="object-contain" 
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 container mx-auto px-8 max-w-[1200px]">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* 溯源 */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f0ece4] flex items-center justify-center text-[#8c7a56] mb-8">
              <MapPin size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1f3d33] mb-6">核心产地</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-xs text-gray-400 font-sans tracking-widest">具体产地</span>
                <span className="text-sm font-serif font-bold text-[#1a1a1a]">{product.origin.location}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-xs text-gray-400 font-sans tracking-widest">平均海拔</span>
                <span className="text-sm font-serif font-bold text-[#1a1a1a]">{product.origin.altitude}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-xs text-gray-400 font-sans tracking-widest">茶树属性</span>
                <span className="text-sm font-serif font-bold text-[#1a1a1a]">{product.origin.age}</span>
              </div>
            </div>
          </motion.div>

          {/* 风味 */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f0ece4] flex items-center justify-center text-[#8c7a56] mb-8">
              <Award size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1f3d33] mb-6">风味鉴赏</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[#cfaa6b] uppercase mb-2 font-sans">香气特征</p>
                <p className="font-serif text-[#1f3d33] leading-relaxed">{product.flavor.aroma}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[#cfaa6b] uppercase mb-2 font-sans">口感滋味</p>
                <p className="font-serif text-[#1f3d33] leading-relaxed">{product.flavor.taste}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[#cfaa6b] uppercase mb-2 font-sans">汤色特征</p>
                <p className="font-serif text-[#1f3d33] leading-relaxed">{product.flavor.body}</p>
              </div>
            </div>
          </motion.div>

          {/* 冲泡 */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1f3d33] p-10 rounded-[2.5rem] shadow-2xl text-white"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#cfaa6b] mb-8">
              <Droplets size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">冲泡指南</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Thermometer className="text-[#cfaa6b] shrink-0" size={20} />
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-1 font-sans">水温要求</p>
                  <p className="font-serif text-sm">{product.brewing.temp}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Wind className="text-[#cfaa6b] shrink-0" size={20} />
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-1 font-sans">投茶比例</p>
                  <p className="font-serif text-sm leading-relaxed">{product.brewing.ratio}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-5 h-5 rounded-full border border-[#cfaa6b] shrink-0 flex items-center justify-center text-[10px] text-[#cfaa6b]">1</div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-1 font-sans">出汤时间</p>
                  <p className="font-serif text-sm leading-relaxed">{product.brewing.time}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
