"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // 实际项目中这里会对接 API
  };

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#faf8f4] text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1f3d33] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-8 max-w-[1200px] relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#cfaa6b] tracking-[0.4em] text-xs uppercase font-sans mb-4"
          >
            Contact & Partnership
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            联系我们
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/50 text-lg max-w-2xl mx-auto font-serif"
          >
            无论是企业批量定制咨询，还是寻找合作伙伴，
            <br />
            云茶之邦专业顾问将竭诚为您服务。
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-20">
            
            {/* 左侧：联系信息 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-[#1f3d33] mb-8">服务热线</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#cfaa6b] shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-1 font-sans">招商及大客户热线</p>
                    <a href="tel:4001103366" aria-label="拨打招商及大客户热线 400 110 3366" className="text-2xl font-serif font-bold text-[#1a1a1a] hover:text-[#cfaa6b] transition-colors block">
                      400 110 3366
                    </a>
                    <p className="text-xs text-gray-400 mt-1">周一至周日 09:00 - 21:00</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#cfaa6b] shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-1 font-sans">深圳体验馆</p>
                    <address className="text-lg font-serif font-bold text-[#1a1a1a] not-italic">深圳市龙华区新区大道3号翠岭华庭17号</address>
                    <a 
                      href="https://uri.amap.com/search?keyword=深圳市龙华区新区大道3号翠岭华庭17号" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="在地图中查看深圳体验馆位置"
                      className="text-[#cfaa6b] text-xs font-serif mt-2 inline-block border-b border-[#cfaa6b]/30 pb-0.5 hover:border-[#cfaa6b] transition-all"
                    >
                      在地图中开启
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#cfaa6b] shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-1 font-sans">电子邮箱</p>
                    <a href="mailto:service@yczbpuer.com" aria-label="发送邮件至 service@yczbpuer.com" className="text-lg font-serif font-bold text-[#1a1a1a] hover:text-[#cfaa6b] transition-colors block">
                      service@yczbpuer.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#cfaa6b] shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-1 font-sans">生产基地</p>
                    <p className="text-lg font-serif font-bold text-[#1a1a1a]">云南省临沧市永德县大雪山乡</p>
                  </div>
                </div>
              </div>

              {/* 装饰卡片 */}
              <div className="mt-16 p-8 bg-[#f0ece4] rounded-3xl border border-white/50">
                <p className="font-serif text-[#8c7a56] leading-relaxed italic">
                  "我们扎根于大雪山，为了改善环境，兴修水利，
                  建造茶园，只为向世人呈上一杯干净、健康的云南茶。"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8c7a56]/20 flex items-center justify-center text-[#8c7a56]">🦚</div>
                  <span className="text-xs tracking-widest text-[#8c7a56] font-sans uppercase">Yin Zhe Liu Ming · China</span>
                </div>
              </div>
            </motion.div>

            {/* 右侧：意向表单 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              {!submitted ? (
                <>
                  <div className="mb-10 text-center">
                    <div className="w-16 h-16 bg-[#faf8f4] rounded-full flex items-center justify-center text-[#cfaa6b] mx-auto mb-4">
                      <MessageSquare size={28} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1f3d33]">企业咨询 / 定制预约</h3>
                    <p className="text-sm text-gray-400 mt-2">请留下您的信息，我们将由资深顾问与您对接</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs tracking-widest text-gray-400 font-sans uppercase px-1">您的姓名</label>
                        <input required placeholder="如：张先生" className="w-full bg-[#faf8f4] border-none rounded-2xl px-5 py-4 text-sm focus:ring-1 focus:ring-[#cfaa6b] transition-all placeholder:text-gray-200 outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs tracking-widest text-gray-400 font-sans uppercase px-1">联系电话</label>
                        <input required placeholder="请输入您的手机号" className="w-full bg-[#faf8f4] border-none rounded-2xl px-5 py-4 text-sm focus:ring-1 focus:ring-[#cfaa6b] transition-all placeholder:text-gray-200 outline-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-widest text-gray-400 font-sans uppercase px-1">企业全称</label>
                      <input placeholder="请输入公司或机构名称" className="w-full bg-[#faf8f4] border-none rounded-2xl px-5 py-4 text-sm focus:ring-1 focus:ring-[#cfaa6b] transition-all placeholder:text-gray-200 outline-none" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-widest text-gray-400 font-sans uppercase px-1">咨询意向</label>
                      <div className="grid grid-cols-2 gap-3">
                        {["节日礼品定制", "企业年礼采购", "商务交流茶叙", "加盟商洽谈"].map(tag => (
                          <label key={tag} className="flex items-center gap-3 p-4 rounded-2xl bg-[#faf8f4] cursor-pointer hover:bg-white border border-transparent hover:border-[#cfaa6b]/20 transition-all">
                            <input type="checkbox" className="w-4 h-4 rounded-sm accent-[#cfaa6b]" />
                            <span className="text-xs text-gray-500 font-serif">{tag}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-widest text-gray-400 font-sans uppercase px-1">具体需求描述</label>
                      <textarea placeholder="请简要描述您的定制预算、数量或特殊要求..." rows={4} className="w-full bg-[#faf8f4] border-none rounded-2xl px-5 py-4 text-sm focus:ring-1 focus:ring-[#cfaa6b] transition-all placeholder:text-gray-200 outline-none resize-none" />
                    </div>

                    <button type="submit" className="w-full bg-[#1f3d33] text-white py-5 rounded-2xl font-serif tracking-[0.3em] font-bold text-sm shadow-xl hover:bg-[#cfaa6b] hover:transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                      <span>提交意向单</span>
                      <Send size={18} />
                    </button>
                    <p className="text-[10px] text-gray-300 text-center font-sans">提交即代表您同意我们将使用该信息与您取得联系</p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-[#f0f9f1] rounded-full flex items-center justify-center text-[#437a63] mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#1f3d33] mb-4">提交成功</h3>
                  <p className="text-gray-400 leading-relaxed max-w-xs mx-auto mb-10">
                    感谢您的信任！专属定制顾问将在24小时内与您联系，请保持手机畅通。
                  </p>
                  <button onClick={() => setSubmitted(false)} className="px-10 py-3 rounded-full border border-gray-100 text-gray-400 hover:text-[#1f3d33] hover:border-[#1f3d33] transition-all font-serif text-sm tracking-widest">
                    返回修改
                  </button>
                </motion.div>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
