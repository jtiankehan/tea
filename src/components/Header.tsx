"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User } from "lucide-react";

const navItems = [
  { href: "/", label: "首页", en: "HOME" },
  { href: "/selection", label: "选茶", en: "TEA SELECTION" },
  { href: "/customization", label: "定制", en: "CUSTOMIZATION" },
  { href: "/story", label: "品牌故事", en: "STORY" },
  { href: "/mybox", label: "我的礼盒", en: "MY BOX" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fffdfa] border-b border-gray-100/50 shadow-sm h-16 flex items-center">
      <div className="container mx-auto px-8 max-w-[1400px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#cc4040] flex items-center justify-center text-white font-serif text-xl font-bold shadow-md">
            茶
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.15em] text-[#1c1c1c] font-bold leading-tight">
              饮者留茗
            </span>
            <span className="text-[9px] text-gray-400 tracking-[0.2em] font-medium font-sans uppercase">
              Yin Zhe Liu Ming
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="flex items-center">
                {i > 0 && <div className="w-[1px] h-5 bg-gray-200" />}
                <Link
                  href={item.href}
                  className="group flex flex-col items-center px-7 relative py-1"
                >
                  <span
                    className={`font-serif text-[16px] font-bold mb-0.5 transition-colors ${
                      isActive ? "text-[#cc4040]" : "text-[#333] group-hover:text-[#cc4040]"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="text-[9px] text-gray-400 tracking-wider">{item.en}</span>
                  {isActive && (
                    <div className="absolute -bottom-[18px] w-7 h-[3px] bg-[#cc4040] rounded-t-lg" />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 text-gray-700">
          <button className="hover:text-[#cc4040] transition-colors p-2 hover:bg-gray-50 rounded-full">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="hover:text-[#cc4040] transition-colors p-2 hover:bg-gray-50 rounded-full">
            <User className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
