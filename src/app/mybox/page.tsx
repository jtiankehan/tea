"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Order = {
  id: number;
  tea: string;
  box: string;
  companyName: string;
  greeting: string;
  quantity: string;
  contact: string;
  contactName: string;
  status: "制作中" | "已发货" | "已完成";
  createdAt: string;
};

const statusColors: Record<string, { bg: string; text: string }> = {
  制作中: { bg: "bg-amber-50", text: "text-amber-600" },
  已发货: { bg: "bg-blue-50", text: "text-blue-600" },
  已完成: { bg: "bg-green-50", text: "text-green-600" },
};

export default function MyBoxPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = JSON.parse(localStorage.getItem("mybox_orders") || "[]");
    setOrders(stored);
  }, []);

  const removeOrder = (id: number) => {
    const updated = orders.filter((o) => o.id !== id);
    setOrders(updated);
    localStorage.setItem("mybox_orders", JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#faf8f4] text-gray-800">
      <Header />

      {/* Banner */}
      <section className="relative w-full pt-16 bg-[#f0ece4] overflow-hidden" style={{ height: "220px" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-[#cfaa6b] blur-[100px]" />
        </div>
        <div className="container mx-auto px-8 max-w-[1400px] h-full flex flex-col justify-center relative z-10">
          <p className="text-[#cfaa6b] tracking-[0.4em] text-xs uppercase font-sans mb-3">My Gift Box</p>
          <h1 className="font-serif text-5xl font-bold text-[#1f3d33] tracking-wide">我的礼盒</h1>
          <p className="text-gray-400 mt-2 text-sm tracking-wider">您的专属定制订单</p>
        </div>
      </section>

      {/* 内容区 */}
      <section className="flex-1 py-16">
        <div className="container mx-auto px-8 max-w-[1000px]">
          {!mounted ? null : orders.length === 0 ? (
            /* 空状态 */
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="text-8xl mb-8">🎋</div>
              <h2 className="font-serif text-3xl font-bold text-[#1f3d33] mb-4">礼盒还是空的</h2>
              <p className="text-gray-400 mb-10 leading-relaxed max-w-sm">
                您还没有提交任何定制申请。
                <br />
                去甄选一款专属茶礼，开始您的定制之旅吧。
              </p>
              <div className="flex gap-4">
                <Link
                  href="/customization"
                  className="px-8 py-3 bg-[#1f3d33] text-white rounded-full font-serif tracking-widest text-sm hover:-translate-y-0.5 transition-all shadow-md"
                >
                  立即定制
                </Link>
                <Link
                  href="/selection"
                  className="px-8 py-3 border border-gray-200 text-gray-400 rounded-full font-serif tracking-widest text-sm hover:border-gray-400 transition-all"
                >
                  先去选茶
                </Link>
              </div>
            </div>
          ) : (
            /* 订单列表 */
            <div>
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-400 text-sm tracking-wider">
                  共 <span className="font-serif text-[#1f3d33] font-bold">{orders.length}</span> 个定制订单
                </p>
                <Link
                  href="/customization"
                  className="px-6 py-2.5 bg-[#1f3d33] text-white rounded-full font-serif tracking-widest text-xs hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  + 新建定制
                </Link>
              </div>

              <div className="flex flex-col gap-5">
                {orders.map((order) => {
                  const sc = statusColors[order.status] || statusColors["制作中"];
                  return (
                    <div
                      key={order.id}
                      className="bg-white rounded-3xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)] transition-all"
                    >
                      <div className="flex items-stretch">
                        {/* 左侧色块 */}
                        <div className="w-3 bg-[#1f3d33] flex-shrink-0 rounded-l-3xl" />

                        {/* 内容 */}
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between flex-wrap gap-4">
                            <div>
                              <div className="flex items-center gap-3 flex-wrap">
                                <h3 className="font-serif text-xl font-bold text-[#1a1a1a]">
                                  {order.companyName}
                                </h3>
                                <span className={`text-xs px-3 py-1 rounded-full font-serif tracking-wider ${sc.bg} ${sc.text}`}>
                                  {order.status}
                                </span>
                              </div>
                              <p className="text-[10px] text-gray-300 font-sans mt-1 tracking-wider">
                                提交于 {order.createdAt} · 订单号 #{order.id}
                              </p>
                            </div>
                            <button
                              onClick={() => removeOrder(order.id)}
                              className="text-gray-200 hover:text-red-300 transition-colors text-sm font-sans"
                            >
                              删除
                            </button>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                            {[
                              { label: "茶叶品类", value: order.tea },
                              { label: "礼盒风格", value: order.box },
                              { label: "定制数量", value: `${order.quantity} 套` },
                              { label: "联系方式", value: order.contact },
                            ].map((item) => (
                              <div key={item.label} className="bg-[#faf8f4] rounded-xl p-3">
                                <p className="text-[10px] text-gray-300 tracking-wider mb-1 font-sans">{item.label}</p>
                                <p className="font-serif text-sm text-[#1a1a1a] font-medium">{item.value}</p>
                              </div>
                            ))}
                          </div>

                          {order.greeting && (
                            <p className="text-sm text-[#cfaa6b] font-serif italic mt-4 pl-1">
                              「{order.greeting}」
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
