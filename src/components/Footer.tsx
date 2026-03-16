import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#101726] text-white pt-16 pb-12 overflow-hidden relative border-t-4 border-[#1c2c45]">
      <div className="absolute inset-0 opacity-10 flex justify-end items-end pointer-events-none -mr-20 -mb-20">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-t from-white/20 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-8 max-w-[1400px] grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Logo & Intro */}
        <div className="lg:col-span-1 flex gap-6">
          <div className="font-serif text-2xl font-bold writing-vertical-rl text-white tracking-[0.3em] flex gap-3 h-48 border-l border-white/20 pl-4">
            <span>饮者留茗</span>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end">
          <p className="text-gray-400 text-sm mt-8 leading-relaxed max-w-sm">
            匠心定制，专属茗香。<br />
            创建您的个性化高端茶礼，甄选优质原料。
          </p>
        </div>

        {/* Links & Copyright */}
        <div className="lg:col-span-1 flex flex-col items-end justify-between font-serif text-sm text-gray-400 h-full">
          <div className="flex gap-6 mb-12 lg:mb-0 pt-2">
            <Link href="/" className="hover:text-white transition-colors">首页</Link>
            <Link href="/selection" className="hover:text-white transition-colors">选茶</Link>
            <Link href="/customization" className="hover:text-white transition-colors">定制</Link>
            <Link href="/story" className="hover:text-white transition-colors">品牌故事</Link>
          </div>
          <p className="text-xs font-sans text-gray-500 text-right mt-auto pb-1">
            © 2026 YIN ZHE LIU MING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
