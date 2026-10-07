"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, PenTool, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveBox from "@/components/InteractiveBox";

import { CLASSIC_BOXES, POPULAR_ITEMS } from "@/lib/constants";
import { useState } from "react";

export default function Home() {
  const [customText, setCustomText] = useState("");
  const [activeDesign, setActiveDesign] = useState(CLASSIC_BOXES[0]);


  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-gray-800 overflow-x-hidden">
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative w-full mt-16 bg-[#bdd3c9] overflow-hidden" style={{ height: 'calc(100vh - 64px)', minHeight: '600px', maxHeight: '800px' }}>
        <Image
          src="/hero_bg_scene.png"
          alt="饮者留茗 - 云南传统茶礼定制山水茶境背景图"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8 max-w-[1400px]">
            <div className="flex flex-col justify-center max-w-2xl pl-4 md:pl-16 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-[1px] bg-[#2a3a30]/30" />
                  <span className="text-[10px] tracking-[0.4em] text-[#2a3a30] uppercase font-bold">Est. Ming & Qing Dynasties</span>
                </div>
                <h1 className="font-serif font-bold text-[#2a3a30] leading-tight" style={{ fontSize: 'clamp(40px, 5vw, 76px)' }}>
                  匠心定制
                  <span className="inline-block mx-3 opacity-30 font-light">|</span>
                  尊享茗香
                </h1>
                <p className="text-[#4a5a50] mt-6 mb-10 tracking-widest font-serif italic text-lg opacity-80">
                  “为每一份礼，寻那一味香。”
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <Link href="/customization" aria-label="立即定制茶礼盒">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-[#cc4040] text-white px-10 py-4 rounded-full font-serif tracking-widest shadow-xl hover:shadow-[#cc4040]/30 transition-all overflow-hidden group"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite]" />
                      立即定制礼盒
                    </motion.button>
                  </Link>
                  <Link href="/selection" aria-label="前往甄选好茶">
                    <button className="px-10 py-4 rounded-full font-serif tracking-widest text-[#2a3a30] border border-[#2a3a30]/20 hover:bg-[#2a3a30]/5 transition-all">
                      甄选端好茶
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 右侧产品装饰 */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute right-0 bottom-0 w-[55%] h-[120%] pointer-events-none"
        >
          <div className="relative w-full h-full group">
            <Image
              src="/hero_tea_box.png"
              alt="饮者留茗 - 高端定制商务茶礼盒与精品茶罐展示"
              fill
              className="object-contain object-right-bottom drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              priority
            />
            {/* 动态光影呼吸效果 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* ── 3D Showcase Section ── */}
      <section className="py-24 bg-[#101726] overflow-hidden relative">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(207,170,107,0.8)_0%,transparent_70%)]" />
          <div className="absolute bottom-48 right-1/4 w-64 h-64 bg-[radial-gradient(circle,rgba(204,64,64,0.8)_0%,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-8 max-w-[1400px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧说明 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <Sparkles size={14} className="text-[#cfaa6b]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/60">3D Interactive Premiere</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
                触手可及的<br /><span className="text-[#cfaa6b]">定制艺术</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-serif italic max-w-lg">
                "不仅仅是一盒茶，更是您的品牌印记。从材质挑选到信息雕刻，每一处细节皆可实时交互。"
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  { icon: <Layers size={20} />, text: "四大主流系列，涵盖所有节令需求" },
                  { icon: <PenTool size={20} />, text: "实时刻字预览，所见即所得" },
                  { icon: <CheckCircle2 size={20} />, text: "丝绸内衬与烫金工艺，尽显尊贵" },
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-white/80"
                  >
                    <div className="text-[#cfaa6b]">{item.icon}</div>
                    <span className="font-serif tracking-wide">{item.text}</span>
                  </motion.li>
                ))}
              </ul>

              
                  {/* 经典系列快速选择 */}
              <div className="mt-12">
                <p className="text-[10px] tracking-[0.3em] text-[#cfaa6b] uppercase mb-4 mb-6">经典系列快速预览</p>
                <div className="flex flex-wrap gap-4">
                  {CLASSIC_BOXES.map((box) => (
                    <button 
                      key={box.id}
                      onClick={() => setActiveDesign(box)}
                      className={`group relative w-12 h-12 rounded-xl border-2 overflow-hidden transition-all duration-300 ${activeDesign.id === box.id ? 'border-[#cfaa6b] scale-110 shadow-lg' : 'border-white/10 hover:border-white/30'}`}
                      title={box.name}
                      aria-label={`预览 ${box.name} 款式礼盒`}
                    >
                      <div className="absolute inset-0" style={{ background: box.gradient }} />
                      <div className="absolute inset-0 flex items-center justify-center text-lg">{box.pattern}</div>
                      {activeDesign.id === box.id && (
                         <div className="absolute inset-0 bg-white/10 animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-1">
                  <h4 className="font-serif text-xl font-bold">{activeDesign.name}</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-[#cfaa6b] font-bold">¥{activeDesign.price}</span>
                    <span className="text-white/40 text-[10px] tracking-widest line-through">¥{(Number(activeDesign.price) * 1.2).toFixed(0)}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <Link href="/customization" className="flex-1" aria-label="前往深度定制专属茶礼">
                  <button className="w-full group flex items-center justify-center gap-4 px-8 py-4 bg-white text-[#101726] rounded-full font-bold tracking-widest hover:bg-[#cfaa6b] hover:text-white transition-all shadow-2xl">
                    去深度定制
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
                <Link href="/customization" aria-label="立即前往结算茶礼">
                  <button className="px-8 py-4 bg-[#cc4040] text-white rounded-full font-bold tracking-widest hover:brightness-110 transition-all shadow-xl">
                    直接结算
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* 右侧 3D 展示 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center bg-white/5 rounded-[3rem] border border-white/10 shadow-inner group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full h-full max-w-sm max-h-sm relative">
                <InteractiveBox design={activeDesign} size="lg" customText={customText} />
              </div>
              
              {/* 实时定制面板 */}
              <div className="absolute top-6 left-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl">
                  <p className="text-[9px] tracking-[0.3em] font-serif text-[#cfaa6b] uppercase mb-2">Personalize Your Box</p>
                  <input 
                    type="text" 
                    placeholder="在这里输入您的专属寄语..." 
                    aria-label="定制激光雕刻专属寄语（最多15字）"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value.slice(0, 15))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs font-serif placeholder:text-white/20 focus:outline-none focus:border-[#cfaa6b]/50 transition-all shadow-inner"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-[8px] text-white/30 italic">最多 15 个字</span>
                    <span className="text-[8px] text-[#cfaa6b] font-bold">Real-time Preview</span>
                  </div>
                </div>
              </div>

              {/* 装饰提示 */}
              <div className="absolute bottom-6 flex items-center gap-3 text-white/30 text-[10px] tracking-[0.4em] uppercase">
                <span className="animate-pulse">●</span> Hover to Interact
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── Popular Items Section ── */}
      <section className="py-24 bg-[#fcf9f5]">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-[0.2em] text-[#333]">人气热推</h2>
            <p className="text-gray-400 text-[10px] tracking-[0.3em] font-sans font-medium uppercase mt-2">Popular Items</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
            {POPULAR_ITEMS.map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 relative flex flex-col h-[520px]"
              >
                <div className="h-[55%] relative rounded-t-[2.5rem] overflow-hidden flex justify-center items-end pb-8" style={{ background: product.bg }}>
                   <div className="absolute top-6 left-6 flex flex-col items-center gap-2 z-20">
                     <span className="bg-[#cc4040] text-white px-3 py-1 rounded-full text-[10px] font-serif tracking-widest leading-none shadow-lg">{product.name}</span>
                     <span className="bg-white/90 backdrop-blur-sm text-[#333] px-3 py-1 rounded-full text-[10px] font-bold shadow-lg">¥{product.price}</span>
                   </div>
                   <div className="w-48 h-56 relative z-10 translate-y-16 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                     <Image src={product.img} alt={`饮者留茗 - ${product.name}陶瓷罐装茶礼`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" />
                   </div>
                </div>
                <div className="h-[45%] bg-[#faf9f7] flex flex-col items-center pt-24 pb-8 px-6 text-center">
                   <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">{product.name}</h3>
                   <div className="w-10 h-[1px] bg-[#cfaa6b] my-3 group-hover:w-16 transition-all duration-500" />
                   <p className="text-[10px] text-gray-400 tracking-[0.2em] font-sans uppercase mb-8">{product.en}</p>
                   <Link href="/customization" aria-label={`立即定制 ${product.name} 茶礼礼盒`} className="mt-auto px-10 py-3 rounded-full text-white text-[12px] font-serif tracking-[0.2em] shadow-lg hover:brightness-110 transition-all font-bold" style={{ background: product.btnBg }}>
                     立即定制
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
