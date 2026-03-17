"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import InteractiveBox from "@/components/InteractiveBox";
import { motion } from "framer-motion";
import { STEPS } from "@/lib/constants";

/* ─── 茶底 ─── */
const teas = [
  { id: 1, name: "生普", en: "Raw Pu-erh", desc: "清香高扬，茶气强劲", origin: "云南古树", grade: "春茶", basePrice: 138, img: "/product_green_tin.png", bg: "linear-gradient(135deg,#2d5016 0%,#4a7c20 100%)", tag: "绿茶类" },
  { id: 2, name: "熟普", en: "Ripe Pu-erh", desc: "陈香醇厚，甘润回甘", origin: "云南勐海", grade: "宫廷级", basePrice: 148, img: "/product_brown_tin.png", bg: "linear-gradient(135deg,#4a2c10 0%,#7a4520 100%)", tag: "后发酵" },
  { id: 3, name: "滇红", en: "Yunnan Black Tea", desc: "蜜香浓郁，汤色红亮", origin: "云南凤庆", grade: "特级", basePrice: 128, img: "/product_red_tin.png", bg: "linear-gradient(135deg,#7b1b1b 0%,#b83232 100%)", tag: "红茶" },
  { id: 4, name: "白茶", en: "White Tea", desc: "毫香清纯，滋味甘醇", origin: "福建福鼎", grade: "白毫银针", basePrice: 158, img: "/product_green_tin.png", bg: "linear-gradient(135deg,#3a4a55 0%,#5a7080 100%)", tag: "微发酵" },
];

/* ─── 价格阶梯 ─── */
const PRICE_TIERS = [
  { min: 30, max: 49, boxPrice: 58, label: "30–49套" },
  { min: 50, max: 99, boxPrice: 48, label: "50–99套" },
  { min: 100, max: 199, boxPrice: 38, label: "100–199套" },
  { min: 200, max: 500, boxPrice: 28, label: "200+套" },
];

function getBoxPrice(qty: number) {
  return PRICE_TIERS.find((t) => qty >= t.min && qty <= t.max)?.boxPrice ?? 28;
}

/* ─── 包装系列 ─── */
type Design = {
  id: string; name: string; tag: string; desc: string;
  gradient: string; border: string; accent: string; pattern: string;
};
type BoxSeries = {
  id: string; name: string; en: string; intro: string; headBg: string; designs: Design[];
};

const boxSeries: BoxSeries[] = [
  {
    id: "guoyun", name: "国韵系列", en: "CHINESE HERITAGE",
    intro: "汲取传统国画与非遗工艺之美，烫金压印，丝绸内衬",
    headBg: "linear-gradient(135deg,#1f3d33 0%,#2d5a47 100%)",
    designs: [
      { id: "guoyun-1", name: "飞鸟云纹", tag: "最受欢迎", desc: "仙鹤祥云图，烫金工艺，附青瓷扣", gradient: "linear-gradient(135deg,#1f3d33 0%,#2d5a47 60%,#1a3028 100%)", border: "#cfaa6b", accent: "#cfaa6b", pattern: "🦢" },
      { id: "guoyun-2", name: "山水墨境", tag: "文人首选", desc: "水墨山河，木版印刷，毛边纸内页", gradient: "linear-gradient(135deg,#2c3e50 0%,#3d5a72 60%,#1a2c40 100%)", border: "#8ab4cc", accent: "#a0c8e0", pattern: "🏔️" },
      { id: "guoyun-3", name: "牡丹华彩", tag: "典雅大气", desc: "牡丹刺绣外覆，织锦缎面，金线勾边", gradient: "linear-gradient(135deg,#5c1c2c 0%,#8b3a4a 60%,#4a1020 100%)", border: "#d4af37", accent: "#ffd700", pattern: "🌸" },
    ],
  },
  {
    id: "jianye", name: "简约系列", en: "MODERN MINIMAL",
    intro: "以少胜多，留白是它的语言，适合注重品味的现代礼赠",
    headBg: "linear-gradient(135deg,#2d4a3e 0%,#3d6050 100%)",
    designs: [
      { id: "jianye-1", name: "素雅留白", tag: "极简美学", desc: "白色哑光厚卡，烫黑LOGO，无多余装饰", gradient: "linear-gradient(135deg,#e8e4dc 0%,#f5f2ea 60%,#ddd8cc 100%)", border: "#999", accent: "#555", pattern: "○" },
      { id: "jianye-2", name: "竹影清风", tag: "禅意十足", desc: "竹纹纸基，深绿绒面腰封，竹木扣件", gradient: "linear-gradient(135deg,#1f3a2a 0%,#2d5a40 60%,#183020 100%)", border: "#5a9a6a", accent: "#7fc48a", pattern: "🎋" },
      { id: "jianye-3", name: "墨韵禅意", tag: "沉稳内敛", desc: "哑黑磨砂壳，宣纸白题字，暗纹浮雕", gradient: "linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 60%,#111 100%)", border: "#666", accent: "#999", pattern: "✦" },
    ],
  },
  {
    id: "huacai", name: "华彩系列", en: "GRAND LUXURY",
    intro: "隆重华贵，适合企业年礼、婚庆回礼等重要场合",
    headBg: "linear-gradient(135deg,#6b1515 0%,#a02020 100%)",
    designs: [
      { id: "huacai-1", name: "龙凤呈祥", tag: "企业首选", desc: "龙凤织锦外覆，大红底金纹，配玛瑙扣", gradient: "linear-gradient(135deg,#8b1c1c 0%,#c0392b 60%,#6b1010 100%)", border: "#d4af37", accent: "#ffd700", pattern: "🐉" },
      { id: "huacai-2", name: "锦绣山河", tag: "收藏级", desc: "仿古木盒外壳，山河锦绣刺绣，附黄铜锁扣", gradient: "linear-gradient(135deg,#5c3317 0%,#8b5520 60%,#3c2010 100%)", border: "#d4af37", accent: "#ffcc44", pattern: "🏯" },
      { id: "huacai-3", name: "鎏金岁月", tag: "尊享至臻", desc: "深蓝漆面，四方鎏金浮雕，附丝巾礼带", gradient: "linear-gradient(135deg,#0d1b42 0%,#1a2d6e 60%,#080d20 100%)", border: "#cfaa6b", accent: "#e8cc88", pattern: "✨" },
    ],
  },
  {
    id: "jiling", name: "节令系列", en: "SEASONAL SPECIAL",
    intro: "专为中秋、春节、企业年会等重要节令设计，应时应景，礼重情深",
    headBg: "linear-gradient(135deg,#7a3a10 0%,#b86030 100%)",
    designs: [
      { id: "jiling-1", name: "中秋月圆", tag: "节令首选", desc: "琉璃蓝底金月，团圆纹路，附月饼模具", gradient: "linear-gradient(135deg,#0d2044 0%,#1a3570 60%,#081528 100%)", border: "#cfaa6b", accent: "#e8d090", pattern: "🌕" },
      { id: "jiling-2", name: "春节吉祥", tag: "新年必备", desc: "大红福字腰封，烫金双喜，喜庆大气", gradient: "linear-gradient(135deg,#8b0000 0%,#cc2200 60%,#600000 100%)", border: "#ffd700", accent: "#ffd700", pattern: "🧧" },
      { id: "jiling-3", name: "企业年礼", tag: "商务首选", desc: "深蓝商务风，金色LOGO烫印，彰显品位", gradient: "linear-gradient(135deg,#0a1628 0%,#1a2d50 60%,#040810 100%)", border: "#cfaa6b", accent: "#cfaa6b", pattern: "🎊" },
    ],
  },
];

/* ─── 查找设计 ─── */
function findDesign(id: string | null) {
  if (!id) return null;
  for (const s of boxSeries) {
    const d = s.designs.find((d) => d.id === id);
    if (d) return { series: s, design: d };
  }
  return null;
}

/* ─── WebGL CSS 降级 Wrapper (兼容旧的 CSS prop 接口) ─── */
function Box3D({ design, companyName, greeting, size = "md" }: {
  design: Design | null; companyName: string; greeting: string; size?: "sm" | "md" | "lg";
}) {
  if (!design) {
    return (
      <div className="flex items-center justify-center h-full w-full text-white/25 font-serif text-sm tracking-wider">
        请先选择包装款式
      </div>
    );
  }

  // 性能优化：同屏渲染多个 WebGL Canvas 极其消耗性能
  // 对于仅用于展示的缩略图 (size="sm")，我们降级使用 CSS 渲染
  if (size === "sm") {
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div 
           className="w-full h-full rounded-xl shadow-inner border-2 relative overflow-hidden flex flex-col items-center justify-center"
           style={{ background: design.gradient, borderColor: `${design.accent}55` }}
        >
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: "12px", opacity: 0.3, background: design.accent }} />
          <div style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", height: "10px", opacity: 0.3, background: design.accent }} />
          <span className="text-4xl relative z-10" style={{ filter: `drop-shadow(0 4px 6px rgba(0,0,0,0.3))` }}>{design.pattern}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
       <InteractiveBox 
         design={design}
         size={size} 
         customText={greeting ? `${companyName} ${greeting}` : companyName}
       />
    </div>
  );
}

/* ─── 价格计算器组件 ─── */
function PriceCalculator({ qty, onQtyChange, teaBasePrice }: {
  qty: number; onQtyChange: (n: number) => void; teaBasePrice: number;
}) {
  const boxPrice = getBoxPrice(qty);
  const unitTotal = teaBasePrice + boxPrice;
  const total = unitTotal * qty;
  const currentTier = PRICE_TIERS.find((t) => qty >= t.min && qty <= t.max);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between mb-4">
        <p className="font-serif text-sm font-bold text-[#1f3d33] tracking-wider">定制数量</p>
        <div className="flex items-center gap-2">
          <button onClick={() => onQtyChange(Math.max(30, qty - 10))} className="w-7 h-7 rounded-full border border-gray-200 text-gray-400 hover:border-[#1f3d33] hover:text-[#1f3d33] transition-all text-sm font-bold flex items-center justify-center">−</button>
          <span className="font-serif text-xl font-bold text-[#1f3d33] w-14 text-center">{qty}</span>
          <button onClick={() => onQtyChange(Math.min(500, qty + 10))} className="w-7 h-7 rounded-full border border-gray-200 text-gray-400 hover:border-[#1f3d33] hover:text-[#1f3d33] transition-all text-sm font-bold flex items-center justify-center">+</button>
          <span className="text-xs text-gray-400 font-sans">套</span>
        </div>
      </div>

      {/* 滑块 */}
      <input
        type="range" min={30} max={500} step={10} value={qty}
        onChange={(e) => onQtyChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer mb-4"
        style={{ background: `linear-gradient(to right, #1f3d33 ${((qty - 30) / 470) * 100}%, #e5e7eb ${((qty - 30) / 470) * 100}%)` }}
      />

      {/* 阶梯价格 */}
      <div className="grid grid-cols-4 gap-1.5 mb-4">
        {PRICE_TIERS.map((t) => {
          const active = currentTier?.label === t.label;
          return (
            <div key={t.label} onClick={() => onQtyChange(t.min)} className={`rounded-lg p-2 text-center cursor-pointer transition-all border ${active ? "bg-[#1f3d33] border-[#1f3d33]" : "bg-gray-50 border-gray-100 hover:border-[#1f3d33]/30"}`}>
              <p className={`text-[9px] font-sans mb-0.5 ${active ? "text-white/70" : "text-gray-400"}`}>{t.label}</p>
              <p className={`font-serif text-xs font-bold ${active ? "text-[#cfaa6b]" : "text-gray-600"}`}>+¥{t.boxPrice}<span className="text-[9px]">/套</span></p>
            </div>
          );
        })}
      </div>

      {/* 费用摘要 */}
      <div className="bg-[#faf8f4] rounded-xl p-3 space-y-1.5">
        <div className="flex justify-between text-xs">
          <span className="text-gray-400 font-sans">茶叶单价</span>
          <span className="font-serif text-gray-600">¥{teaBasePrice}/套</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400 font-sans">包装单价</span>
          <span className="font-serif text-gray-600">¥{boxPrice}/套</span>
        </div>
        <div className="flex justify-between text-xs border-t border-gray-100 pt-1.5">
          <span className="text-gray-400 font-sans">单套合计</span>
          <span className="font-serif text-[#1f3d33] font-bold">¥{unitTotal}/套</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400 font-sans">{qty}套 预估总价</span>
          <span className="font-serif text-lg font-bold text-[#cc4040]">¥{total.toLocaleString()}</span>
        </div>
      </div>
      <p className="text-[10px] text-gray-300 mt-2 font-sans">最终价格以客服确认报价为准</p>
    </div>
  );
}

/* ─── 表单类型 ─── */
type FormData = { teaId: number | null; boxDesignId: string | null; companyName: string; greeting: string; quantity: string; contact: string; contactName: string; };

/* ─── 主组件 ─── */
export default function CustomizationPage() {
  const [step, setStep] = useState(1);
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [qty, setQty] = useState(50);
  const [form, setForm] = useState<FormData>({ teaId: null, boxDesignId: null, companyName: "", greeting: "", quantity: "50", contact: "", contactName: "" });
  const [submitted, setSubmitted] = useState(false);

  const selectedTea = teas.find((t) => t.id === form.teaId);
  const selectedBoxInfo = findDesign(form.boxDesignId);

  const handleQtyChange = (n: number) => { setQty(n); setForm((f) => ({ ...f, quantity: String(n) })); };

  const steps = [{ n: 1, label: "选茶" }, { n: 2, label: "包装" }, { n: 3, label: "信息" }, { n: 4, label: "确认" }];

  const handleSubmit = () => {
    const existing = JSON.parse(localStorage.getItem("mybox_orders") || "[]");
    const newOrder = {
      id: Date.now(), tea: selectedTea?.name,
      box: selectedBoxInfo ? `${selectedBoxInfo.series.name} · ${selectedBoxInfo.design.name}` : "",
      companyName: form.companyName, greeting: form.greeting, quantity: form.quantity,
      contact: form.contact, contactName: form.contactName, status: "制作中",
      createdAt: new Date().toLocaleDateString("zh-CN"),
    };
    localStorage.setItem("mybox_orders", JSON.stringify([newOrder, ...existing]));
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false); setStep(1); setSelectedSeries(null); setQty(50);
    setForm({ teaId: null, boxDesignId: null, companyName: "", greeting: "", quantity: "50", contact: "", contactName: "" });
  };

  /* 成功页 */
  if (submitted) {
    return (
      <main className="min-h-screen flex flex-col font-sans bg-[#faf8f4]">
        <Header />
        <div className="flex-1 flex items-center justify-center flex-col pt-16 px-4 text-center">
          <div className="text-7xl mb-6">🎋</div>
          <h2 className="font-serif text-4xl font-bold text-[#1f3d33] mb-4">定制申请已提交</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">感谢您的信任，我们将在 1 个工作日内与您联系确认。<br />您可以在「我的礼盒」中查看订单状态。</p>
          <div className="flex gap-4">
            <Link href="/mybox" className="px-8 py-3 bg-[#1f3d33] text-white rounded-full font-serif tracking-widest text-sm hover:-translate-y-0.5 transition-all shadow-md">查看我的礼盒</Link>
            <button onClick={reset} className="px-8 py-3 border border-gray-200 text-gray-400 rounded-full font-serif tracking-widest text-sm hover:border-gray-400 transition-all">再次定制</button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#faf8f4] text-gray-800">
      <Header />

      {/* Banner */}
      <section className="relative w-full pt-16 bg-[#1f3d33] overflow-hidden" style={{ height: "220px" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#cfaa6b] blur-[100px]" />
        </div>
        <div className="container mx-auto px-8 max-w-[1400px] h-full flex flex-col justify-center relative z-10">
          <p className="text-[#cfaa6b] tracking-[0.4em] text-xs uppercase font-sans mb-3">Customization</p>
          <h1 className="font-serif text-5xl font-bold text-white tracking-wide">专属定制</h1>
          <p className="text-white/50 mt-2 text-sm tracking-wider">四步完成您的专属茶礼</p>
        </div>
      </section>

      {/* ── Customization Steps ── */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl font-bold tracking-[0.2em] mb-4">定制流程</h2>
            <div className="w-12 h-[2px] bg-[#cc4040] mx-auto mb-4" />
            <p className="text-gray-400 text-[10px] tracking-[0.5em] uppercase">Simple Steps to Perfection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative max-w-[1000px] mx-auto">
            {/* 背景连线 */}
            <div className="hidden md:block absolute top-[60px] left-1/4 right-1/4 h-[1px] bg-gray-100 -z-10" />

            {STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-3xl bg-[#faf8f4] flex items-center justify-center mb-8 relative group-hover:bg-[#cc4040] transition-colors duration-500 shadow-md">
                  <span className="absolute -top-3 -right-3 text-3xl font-serif font-bold text-gray-100 group-hover:text-white/20 transition-colors">{step.n}</span>
                  <div className="w-16 h-16 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src={step.img} alt={step.title} fill sizes="96px" className="object-contain" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 tracking-widest">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[240px] font-sans">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 步骤条 */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="container mx-auto px-8 max-w-[1100px] py-5">
          <div className="flex items-center justify-center gap-0">
            {steps.map((s, i) => (
              <div key={s.n} className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-serif font-bold text-sm transition-all border-2 ${step > s.n ? "bg-[#1f3d33] border-[#1f3d33] text-white" : step === s.n ? "bg-[#cc4040] border-[#cc4040] text-white" : "bg-white border-gray-200 text-gray-300"}`}>
                    {step > s.n ? "✓" : s.n}
                  </div>
                  <span className={`text-[11px] tracking-wider font-serif ${step >= s.n ? "text-[#1f3d33]" : "text-gray-300"}`}>{s.label}</span>
                </div>
                {i < steps.length - 1 && <div className={`w-24 h-[2px] mx-2 mb-4 transition-all ${step > s.n ? "bg-[#1f3d33]" : "bg-gray-100"}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="flex-1 py-14">
        <div className="container mx-auto px-8 max-w-[1100px]">

          {/* ── Step 1: 选茶 ── */}
          {step === 1 && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1f3d33] mb-1">选择基底茶叶</h2>
              <p className="text-gray-400 text-sm mb-10 tracking-wider">四款云南特色原料茶，皆为产地头采</p>
              <div className="grid md:grid-cols-4 gap-5">
                {teas.map((tea) => {
                  const active = form.teaId === tea.id;
                  return (
                    <div key={tea.id} onClick={() => setForm({ ...form, teaId: tea.id })} className={`rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 group ${active ? "ring-4 ring-[#cc4040] shadow-xl -translate-y-2" : "shadow-md hover:-translate-y-2 hover:shadow-xl"}`}>
                      <div className="h-44 flex items-end justify-center pb-6 relative" style={{ background: tea.bg }}>
                        {active && <div className="absolute top-3 right-3 w-7 h-7 bg-[#cc4040] rounded-full flex items-center justify-center text-white font-bold text-xs z-10">✓</div>}
                        <div className="absolute top-3 left-3"><span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-sans tracking-wider">{tea.tag}</span></div>
                        <div className="w-24 h-28 relative drop-shadow-2xl translate-y-6 group-hover:scale-110 transition-transform duration-500">
                          <Image src={tea.img} alt={tea.name} fill className="object-contain" />
                        </div>
                      </div>
                      <div className="bg-white p-4 text-center">
                        <h3 className="font-serif text-xl font-bold text-[#1a1a1a]">{tea.name}</h3>
                        <p className="text-[10px] text-gray-400 tracking-wider mt-0.5 font-sans">{tea.en}</p>
                        <p className="text-xs text-gray-400 mt-2 leading-relaxed">{tea.desc}</p>
                        <div className="flex justify-center gap-2 mt-3">
                          <span className="text-[10px] bg-[#f0ece4] text-[#8c7a56] px-2 py-0.5 rounded-full font-sans">{tea.origin}</span>
                          <span className="text-[10px] bg-[#f0ece4] text-[#8c7a56] px-2 py-0.5 rounded-full font-sans">{tea.grade}</span>
                        </div>
                        <p className="text-[#cc4040] font-serif font-bold mt-3 text-sm">¥{tea.basePrice} 起</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end mt-10">
                <button disabled={!form.teaId} onClick={() => setStep(2)} className="px-10 py-3 bg-[#1f3d33] text-white rounded-full font-serif tracking-widest text-sm disabled:opacity-30 hover:-translate-y-0.5 transition-all shadow-md">下一步 →</button>
              </div>
            </div>
          )}

          {/* ── Step 2: 包装 ── */}
          {step === 2 && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1f3d33] mb-1">选择礼盒包装</h2>
              <p className="text-gray-400 text-sm mb-10 tracking-wider">先选风格系列，再选具体款式 — 9款可选</p>

              {/* 一级：系列 */}
              <div className="grid md:grid-cols-4 gap-4 mb-10">
                {boxSeries.map((s) => {
                  const active = selectedSeries === s.id;
                  return (
                    <div key={s.id} onClick={() => { setSelectedSeries(active ? null : s.id); setForm({ ...form, boxDesignId: null }); }} className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${active ? "ring-4 ring-[#cfaa6b] shadow-xl -translate-y-1" : "shadow-md hover:-translate-y-1 hover:shadow-xl"}`}>
                      <div className="h-16 flex flex-col items-center justify-center relative" style={{ background: s.headBg }}>
                        {active && <div className="absolute top-2 right-2 w-5 h-5 bg-[#cfaa6b] rounded-full flex items-center justify-center text-white text-[10px] font-bold">✓</div>}
                        <p className="font-serif font-bold text-white text-base tracking-widest">{s.name}</p>
                        <p className="text-white/50 text-[9px] tracking-[0.3em] font-sans mt-0.5">{s.en}</p>
                      </div>
                      <div className="bg-white px-3 py-2"><p className="text-xs text-gray-400 leading-relaxed text-center">{s.intro}</p></div>
                    </div>
                  );
                })}
              </div>

              {/* 二级：款式 */}
              {selectedSeries && (() => {
                const series = boxSeries.find((s) => s.id === selectedSeries)!;
                const seriesId = series.id;
                return (
                  <div>
                    <p className="text-[#1f3d33] font-serif font-bold mb-5 tracking-widest text-sm">── {series.name} · 款式选择 ──</p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {series.designs.map((d) => {
                        const active = form.boxDesignId === d.id;
                        return (
                          <div key={d.id} onClick={() => setForm({ ...form, boxDesignId: d.id })} className={`rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group relative ${active ? "ring-4 shadow-2xl -translate-y-2" : "shadow-md hover:-translate-y-2 hover:shadow-2xl"}`} style={{ boxShadow: active ? `0 20px 50px -10px ${d.border}66` : "" }}>
                            {/* 预览区 */}
                            <div className="h-64 relative overflow-hidden flex flex-col items-center justify-start pt-6" style={{
                              background: d.gradient,
                            }}>
                              {/* 角线装饰 */}
                              {["top-3 left-3 border-t-2 border-l-2", "top-3 right-3 border-t-2 border-r-2", "bottom-3 left-3 border-b-2 border-l-2", "bottom-3 right-3 border-b-2 border-r-2"].map((cls) => (
                                <div key={cls} className={`absolute w-5 h-5 ${cls} rounded-sm`} style={{ borderColor: d.accent }} />
                              ))}
                              {/* 标签 */}
                              <span className="text-[9px] px-3 py-0.5 rounded-full font-sans tracking-wider border mb-3" style={{ color: d.accent, borderColor: `${d.accent}55`, background: `${d.accent}11` }}>{d.tag}</span>
                              {/* 3D 礼盒 */}
                              <div className="flex-1 w-full pointer-events-none">
                                <Box3D design={d} companyName="" greeting="" size="sm" />
                              </div>
                              {/* 光晕 */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: `radial-gradient(circle, ${d.accent} 0%, transparent 70%)` }} />
                              {/* 选中 */}
                              {active && <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shadow-lg" style={{ background: d.accent, color: "#fff" }}>✓</div>}
                            </div>
                            <div className="bg-white px-5 py-4 text-center">
                              <h3 className="font-serif text-lg font-bold text-[#1a1a1a]">{d.name}</h3>
                              <p className="text-xs text-gray-400 mt-1 leading-relaxed">{d.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

              <div className="flex justify-between mt-10">
                <button onClick={() => setStep(1)} className="px-8 py-3 border border-gray-200 text-gray-400 rounded-full font-serif tracking-widest text-sm hover:border-gray-400 transition-all">← 上一步</button>
                <button disabled={!form.boxDesignId} onClick={() => setStep(3)} className="px-10 py-3 bg-[#1f3d33] text-white rounded-full font-serif tracking-widest text-sm disabled:opacity-30 hover:-translate-y-0.5 transition-all shadow-md">下一步 →</button>
              </div>
            </div>
          )}

          {/* ── Step 3: 信息 + 实时预览 ── */}
          {step === 3 && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1f3d33] mb-1">填写定制信息</h2>
              <p className="text-gray-400 text-sm mb-8 tracking-wider">填写的文字会实时显示在右侧礼盒预览上</p>

              <div className="grid md:grid-cols-[1fr_380px] gap-8 items-start">
                {/* 左：表单 */}
                <div className="space-y-5">
                  {/* 价格计算器 */}
                  <PriceCalculator qty={qty} onQtyChange={handleQtyChange} teaBasePrice={selectedTea?.basePrice ?? 138} />

                  <div className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] grid md:grid-cols-2 gap-5">
                    {[
                      { key: "companyName", label: "企业/个人名称", placeholder: "将印制在礼盒正面", required: true },
                      { key: "greeting", label: "定制祝语", placeholder: "将印于腰封，可留空", required: false },
                      { key: "contactName", label: "联系人姓名", placeholder: "请输入联系人姓名", required: true },
                      { key: "contact", label: "联系电话", placeholder: "请输入手机号码", required: true },
                    ].map((field) => (
                      <div key={field.key} className={field.key === "greeting" ? "md:col-span-2" : ""}>
                        <label className="block text-sm font-serif text-[#1f3d33] mb-2 tracking-wider">
                          {field.label}{field.required && <span className="text-[#cc4040] ml-1">*</span>}
                        </label>
                        <input
                          type="text" placeholder={field.placeholder}
                          value={form[field.key as keyof FormData] as string}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-[#1f3d33] focus:ring-1 focus:ring-[#1f3d33] transition-all placeholder:text-gray-300 font-sans"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 右：实时 3D 预览（sticky） */}
                <div className="md:sticky md:top-32">
                  <p className="text-[10px] text-center text-gray-300 tracking-widest font-sans mb-3 uppercase">Live Preview</p>
                  <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: selectedBoxInfo?.design.gradient || "#1f3d33", height: "340px" }}>
                    <Box3D design={selectedBoxInfo?.design ?? null} companyName={form.companyName} greeting={form.greeting} size="lg" />
                  </div>
                  <div className="bg-white rounded-2xl p-4 mt-3 shadow-sm text-center">
                    <p className="font-serif text-sm font-bold text-[#1f3d33]">{selectedBoxInfo?.series.name} · {selectedBoxInfo?.design.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{selectedTea?.name} × {qty}套</p>
                    <p className="font-serif text-lg font-bold text-[#cc4040] mt-1">
                      ¥{((selectedTea?.basePrice ?? 138) + getBoxPrice(qty)) * qty}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-10">
                <button onClick={() => setStep(2)} className="px-8 py-3 border border-gray-200 text-gray-400 rounded-full font-serif tracking-widest text-sm hover:border-gray-400 transition-all">← 上一步</button>
                <button disabled={!form.companyName || !form.contact || !form.contactName} onClick={() => setStep(4)} className="px-10 py-3 bg-[#1f3d33] text-white rounded-full font-serif tracking-widest text-sm disabled:opacity-30 hover:-translate-y-0.5 transition-all shadow-md">下一步 →</button>
              </div>
            </div>
          )}

          {/* ── Step 4: 确认 ── */}
          {step === 4 && (
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1f3d33] mb-1">确认定制信息</h2>
              <p className="text-gray-400 text-sm mb-10 tracking-wider">提交前请核对您的定制内容</p>
              <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
                <div className="grid md:grid-cols-2">
                  {/* 左：3D 礼盒预览 */}
                  <div className="relative overflow-hidden flex flex-col items-center justify-center" style={{ background: selectedBoxInfo?.design.gradient || "#1f3d33", minHeight: "360px" }}>
                    {/* 角线 */}
                    {["top-4 left-4 border-t-2 border-l-2", "top-4 right-4 border-t-2 border-r-2", "bottom-4 left-4 border-b-2 border-l-2", "bottom-4 right-4 border-b-2 border-r-2"].map((cls) => (
                      <div key={cls} className={`absolute w-8 h-8 ${cls}`} style={{ borderColor: selectedBoxInfo?.design.accent || "#cfaa6b" }} />
                    ))}
                    <div className="w-full" style={{ height: "280px" }}>
                      <Box3D design={selectedBoxInfo?.design ?? null} companyName={form.companyName} greeting={form.greeting} size="lg" />
                    </div>
                    <p className="font-serif font-bold tracking-widest text-base mb-1" style={{ color: selectedBoxInfo?.design.accent || "#cfaa6b" }}>
                      {selectedBoxInfo?.series.name} · {selectedBoxInfo?.design.name}
                    </p>
                    <p className="text-white/50 text-xs tracking-wider mb-4">{selectedTea?.name}</p>
                  </div>
                  {/* 右：摘要 */}
                  <div className="p-8">
                    <h3 className="font-serif text-lg font-bold text-[#1f3d33] mb-5 pb-4 border-b border-gray-100">定制摘要</h3>
                    {[
                      { label: "茶叶品类", value: selectedTea?.name },
                      { label: "包装系列", value: selectedBoxInfo?.series.name },
                      { label: "礼盒款式", value: selectedBoxInfo?.design.name },
                      { label: "定制名称", value: form.companyName },
                      { label: "礼盒祝语", value: form.greeting || "—" },
                      { label: "定制数量", value: `${qty} 套` },
                      { label: "预估单价", value: `¥${(selectedTea?.basePrice ?? 138) + getBoxPrice(qty)}/套` },
                      { label: "预估总价", value: `¥${((selectedTea?.basePrice ?? 138) + getBoxPrice(qty)) * qty}` },
                      { label: "联系人", value: form.contactName },
                      { label: "联系电话", value: form.contact },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-gray-50">
                        <span className="text-xs text-gray-400 tracking-wider font-sans">{row.label}</span>
                        <span className={`font-serif text-sm font-medium ${row.label.includes("总价") ? "text-[#cc4040] text-base font-bold" : "text-[#1a1a1a]"}`}>{row.value}</span>
                      </div>
                    ))}
                    <p className="text-[10px] text-gray-300 mt-5 leading-relaxed">提交后，客服将在 1 个工作日内与您电话确认，最终价格以客服报价为准。</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <button onClick={() => setStep(3)} className="px-8 py-3 border border-gray-200 text-gray-400 rounded-full font-serif tracking-widest text-sm hover:border-gray-400 transition-all">← 修改信息</button>
                <button onClick={handleSubmit} className="px-10 py-3 bg-gradient-to-b from-[#d95648] to-[#b32b2b] text-white rounded-full font-serif tracking-widest text-sm hover:-translate-y-0.5 transition-all shadow-[0_8px_20px_rgba(204,64,64,0.4)]">提交定制申请</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
