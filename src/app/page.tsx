import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full mt-16 bg-[#bdd3c9] overflow-hidden" style={{ height: 'calc(100vh - 64px)', minHeight: '520px', maxHeight: '680px' }}>
        {/* 背景整体铺满 */}
        <Image
          src="/hero_bg_scene.png"
          alt="Hero Banner"
          fill
          className="object-cover object-center"
          priority
        />

        {/* 左侧文字叠加层 */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8 max-w-[1400px]">
            <div className="flex flex-col justify-center max-w-xl pl-4 md:pl-16">
              <h1 className="font-serif font-bold text-[#2a3a30] leading-tight whitespace-nowrap" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
                匠心定制
                <span className="inline-block mx-3" style={{ fontSize: '0.6em' }}>·</span>
                尊享茗香
              </h1>
              <p className="text-[#4a5a50] mt-4 mb-8 tracking-wider font-medium" style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}>
                为每一份礼，寻那一味香 | 企业大客户与个人专属定制服务
              </p>
              <div>
                <button className="relative bg-gradient-to-b from-[#d95648] to-[#b32b2b] text-white rounded-full font-serif tracking-widest shadow-[0_8px_20px_rgba(204,64,64,0.4)] hover:shadow-[0_8px_25px_rgba(204,64,64,0.6)] hover:-translate-y-1 transition-all duration-300 border border-[#e67568]/30 overflow-hidden group" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)', padding: '12px 40px' }}>
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  立即定制
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧产品图 hero_tea_box.png */}
        <div className="absolute right-0 bottom-0 w-[52%] h-[115%] pointer-events-none">
          <Image
            src="/hero_tea_box.png"
            alt="Product Box"
            fill
            className="object-contain object-right-bottom drop-shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-24 bg-[#fcf9f5]">
        <div className="container mx-auto px-8 max-w-[1400px]">

          {/* Section Heading */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-gray-300"></div>
              <div className="w-2 h-2 rotate-45 bg-gray-300"></div>
              <h2 className="font-serif text-2xl font-bold tracking-[0.2em] text-[#333] px-2">人气热推</h2>
              <div className="w-2 h-2 rotate-45 bg-gray-300"></div>
              <div className="w-16 h-[1px] bg-gray-300"></div>
            </div>
            <p className="text-gray-400 text-[10px] tracking-[0.3em] font-sans font-medium uppercase mt-2">
              Popular Items
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">

            {/* Card 1: 滇红 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 relative flex flex-col h-[520px]">
              {/* Colored Top Area */}
              <div className="h-[55%] bg-[#7b1b1b] relative rounded-t-3xl overflow-hidden flex justify-center items-end pb-8">
                {/* Tags */}
                <div className="absolute top-6 left-6 flex flex-col items-center gap-1 z-20">
                  <div className="bg-[#cc4040] text-white w-8 py-3 rounded-full flex flex-col items-center justify-center text-xs font-serif writing-vertical-rl shadow-lg">
                    滇红
                  </div>
                  <div className="bg-[#e8dcc4] text-[#8c7a56] w-8 h-12 rounded-full flex flex-col items-center justify-center text-xs font-serif font-bold shadow-lg">
                    <span className="text-[8px] -mb-1">¥</span>
                    <span className="writing-vertical-rl tracking-widest leading-none">128</span>
                  </div>
                </div>

                {/* Product Image */}
                <div className="w-48 h-56 relative z-10 translate-y-16 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                  <Image src="/product_red_tin.png" alt="滇红" fill className="object-contain" />
                </div>
              </div>

              {/* White Bottom Area */}
              <div className="h-[45%] bg-[#faf9f7] flex flex-col items-center pt-24 pb-8 px-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">滇红</h3>
                <p className="text-[10px] text-gray-400 tracking-[0.2em] font-sans mt-1 mb-6 uppercase">
                  Yunnan Black Tea
                </p>
                <Link href="/customization" className="mt-auto bg-[#7b1b1b] hover:bg-[#5e1313] text-white px-8 py-2.5 rounded-full font-serif text-sm tracking-widest shadow-md hover:shadow-lg transition-all w-[140px] text-center">
                  立即定制
                </Link>
              </div>
            </div>

            {/* Card 2: 古树白茶 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 relative flex flex-col h-[520px]">
              <div className="h-[55%] bg-[#3a4a55] relative rounded-t-3xl overflow-hidden flex justify-center items-end pb-8">
                <div className="absolute top-6 left-6 flex flex-col items-center gap-1 z-20">
                  <div className="bg-[#cc4040] text-white w-8 py-3 rounded-full flex flex-col items-center justify-center text-xs font-serif writing-vertical-rl shadow-lg">
                    古树白茶
                  </div>
                  <div className="bg-[#e8dcc4] text-[#8c7a56] w-8 h-12 rounded-full flex flex-col items-center justify-center text-xs font-serif font-bold shadow-lg">
                    <span className="text-[8px] -mb-1">¥</span>
                    <span className="writing-vertical-rl tracking-widest leading-none">158</span>
                  </div>
                </div>

                <div className="w-48 h-56 relative z-10 translate-y-16 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                  <Image src="/product_green_tin.png" alt="古树白茶" fill className="object-contain" />
                </div>
              </div>

              <div className="h-[45%] bg-[#faf9f7] flex flex-col items-center pt-24 pb-8 px-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">古树白茶</h3>
                <p className="text-[10px] text-gray-400 tracking-[0.2em] font-sans mt-1 mb-6 uppercase">
                  Ancient Tree White Tea
                </p>
                <Link href="/customization" className="mt-auto bg-[#3a4a55] hover:bg-[#2a3a45] text-white px-8 py-2.5 rounded-full font-serif text-sm tracking-widest shadow-md hover:shadow-lg transition-all w-[140px] text-center">
                  立即定制
                </Link>
              </div>
            </div>

            {/* Card 3: 云南普洱 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 relative flex flex-col h-[520px]">
              <div className="h-[55%] bg-[#a84432] relative rounded-t-3xl overflow-hidden flex justify-center items-end pb-8">
                <div className="absolute top-6 left-6 flex flex-col items-center gap-1 z-20">
                  <div className="bg-[#1a365d] text-white w-8 py-3 rounded-full flex flex-col items-center justify-center text-xs font-serif writing-vertical-rl shadow-lg">
                    云南普洱
                  </div>
                  <div className="bg-[#e8dcc4] text-[#8c7a56] w-8 h-12 rounded-full flex flex-col items-center justify-center text-xs font-serif font-bold shadow-lg">
                    <span className="text-[8px] -mb-1">¥</span>
                    <span className="writing-vertical-rl tracking-widest leading-none">129</span>
                  </div>
                </div>

                <div className="w-48 h-56 relative z-10 translate-y-16 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                  <Image src="/product_brown_tin.png" alt="云南普洱" fill className="object-contain" />
                </div>
              </div>

              <div className="h-[45%] bg-[#faf9f7] flex flex-col items-center pt-24 pb-8 px-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">云南普洱</h3>
                <p className="text-[10px] text-gray-400 tracking-[0.2em] font-sans mt-1 mb-6 uppercase">
                  Yunnan Pu-erh
                </p>
                <Link href="/customization" className="mt-auto bg-[#1a365d] hover:bg-[#122540] text-white px-8 py-2.5 rounded-full font-serif text-sm tracking-widest shadow-md hover:shadow-lg transition-all w-[140px] text-center">
                  立即定制
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
