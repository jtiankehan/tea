import Header from "@/components/Header";
import Footer from "@/components/Footer";

const timeline = [
  {
    year: "明清",
    title: "翟氏茶脉",
    desc: "自明清两朝，翟氏先祖即事茶为生，世礼传家，以诚信为本，以茶道传世。",
  },
  {
    year: "2004",
    title: "扎根大雪山",
    desc: "翟世超响应临沧市政府号召，深入永德大雪山扶贫开发，兴修水利、修路架桥、建造茶园，历时3年让深山亮起来。",
  },
  {
    year: "2005",
    title: "云茶之邦创立",
    desc: "在云南省临沧市正式注册成立「云茶之邦」，专注于普洱茶的发掘、研制生产和文化推广。",
  },
  {
    year: "2008",
    title: "三大雪山布局",
    desc: "系统发掘整理临沧三大雪山（邦东、勐库、永德）原生态古茶树林资源，建立初制厂与精制加工厂。",
  },
  {
    year: "2015",
    title: "屡获国际大奖",
    desc: "旗舰产品紫祥菁连续 5 年（2015–2019）荣获韩国世界茶评大赛金奖，蜚声国际。",
  },
  {
    year: "至今",
    title: "古树纯料标杆",
    desc: "19 万棵古茶树，千亩古茶园，完整普洱茶产业链，持续为市场提供健康干净的一杯云南茶。",
  },
];

const values = [
  {
    icon: "🌿",
    title: "源头古树",
    en: "ANCIENT TREE ORIGIN",
    desc: "三大雪山脚下核心基地，19 万棵原生态古茶树，千亩古茶园，原料纯正可溯源。",
  },
  {
    icon: "🏔️",
    title: "匠心工艺",
    en: "ARTISANAL CRAFT",
    desc: "古法传承，匠心技艺。初制厂 3 所、精制加工厂 1 所，全程品控，守护每一片叶子的品质。",
  },
  {
    icon: "🤝",
    title: "诚信公益",
    en: "INTEGRITY & CHARITY",
    desc: "深耕云南扶贫二十年，以茶为媒助力山区振兴。翟世超：「只有诚信，才能出好茶。」",
  },
];

const honors = [
  { year: "2015–2019", text: "韩国世界茶评大赛金奖（连续 5 年）" },
  { year: "2017", text: "深圳市首届斗茶赛金奖（紫祥菁）" },
  { year: "2016–2017", text: "中国深圳（国际）茶博会金奖" },
  { year: "2009", text: "中国（东莞）国际茶博会金奖（兰石寨）" },
  { year: "2018–2021", text: "广东省企业文化建设功勋人物（连续多年）" },
  { year: "2019–2020", text: "广东省诚信建设杰出企业家" },
];

export default function StoryPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#faf8f4] text-gray-800">
      <Header />

      {/* Hero */}
      <section className="relative w-full pt-16 overflow-hidden bg-[#1f3d33]" style={{ minHeight: "420px" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#cfaa6b] blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#437a63] blur-[100px]" />
        </div>
        <div className="container mx-auto px-8 max-w-[1400px] flex flex-col items-center justify-center py-24 relative z-10 text-center">
          <p className="text-[#cfaa6b] tracking-[0.4em] text-xs font-sans uppercase mb-5">Brand Story</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight tracking-wide">
            一叶知味，一盏见心
          </h1>
          <div className="w-20 h-[2px] bg-[#cfaa6b] my-8 rounded-full" />
          <p className="text-[#c0cfc8] text-lg max-w-2xl leading-relaxed tracking-wider">
            自明清翟氏茶脉延续至今，深耕云南临沧三大雪山二十余年，
            <br />
            以 19 万棵古茶树为根，以诚信匠心为魂，书写中国普洱茶的现代传奇。
          </p>
        </div>
      </section>

      {/* 创始人故事 */}
      <section className="py-24 bg-[#faf8f4]">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* 左侧视觉 */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#1f3d33] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1f3d33]/90 to-[#437a63]/50" />
              <div className="relative z-10 text-center px-10">
                <div className="text-6xl mb-5">🏔️</div>
                <p className="font-serif text-white text-2xl font-bold tracking-widest mb-2">永德大雪山</p>
                <p className="text-white/60 text-sm tracking-wider">海拔 1800m · 临沧核心茶区</p>
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                  {["邦东大雪山", "勐库大雪山", "永德大雪山"].map((s) => (
                    <span key={s} className="text-[10px] text-[#cfaa6b] border border-[#cfaa6b]/40 px-3 py-1 rounded-full tracking-wider font-sans">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧文字 */}
            <div>
              <p className="text-[#cfaa6b] tracking-[0.3em] text-xs uppercase mb-4">Founder's Story</p>
              <h2 className="font-serif text-4xl font-bold text-[#1f3d33] mb-4 leading-tight">
                翟世超与云南
                <br />
                二十年的茶缘
              </h2>
              <div className="w-12 h-[2px] bg-[#cfaa6b] mb-8" />
              <p className="text-gray-500 leading-relaxed mb-5 text-[15px]">
                自明清两朝，翟氏先祖即事茶为生，世礼传家。翟世超用 10 余年时间游走云南各大茶山，搜老茶树，访老茶师，学老工艺，将家族百年茶脉延续至现代。
              </p>
              <p className="text-gray-500 leading-relaxed mb-5 text-[15px]">
                2004年，他响应临沧市政府号召，在永德大雪山扎下了根——兴修水利、修路架桥、资助学校，历时三年让这片深山亮起来，也让世代贫困的山民因茶破茧重生。
              </p>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                2005年，"云茶之邦"正式创立。如今，三大雪山脚下 19 万棵古茶树、千亩古茶园，成为中国古树纯料普洱茶最重要的标杆产地之一。
              </p>

              <blockquote className="mt-8 pl-5 border-l-2 border-[#cfaa6b]">
                <p className="font-serif text-[#1f3d33] italic leading-relaxed">
                  「只有诚信，才能出好茶；只有诚信，才能在艰难困苦时不放弃；只有诚信，才能使村民们不返贫。」
                </p>
                <p className="text-[#cfaa6b] text-xs mt-3 tracking-wider font-sans">—— 翟世超，云茶之邦创始人</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 核心理念 */}
      <section className="py-24 bg-[#f0ece4]">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="text-center mb-16">
            <p className="text-[#cfaa6b] tracking-[0.3em] text-xs uppercase mb-3">Our Values</p>
            <h2 className="font-serif text-4xl font-bold text-[#1f3d33]">三大核心理念</h2>
            <div className="w-16 h-[2px] bg-[#cfaa6b] mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group">
                <div className="text-5xl mb-6">{v.icon}</div>
                <p className="text-[10px] tracking-[0.35em] text-[#cfaa6b] uppercase mb-2 font-sans">{v.en}</p>
                <h3 className="font-serif text-2xl font-bold text-[#1f3d33] mb-4">{v.title}</h3>
                <div className="w-8 h-[2px] bg-[#cfaa6b] mb-5 group-hover:w-16 transition-all duration-300" />
                <p className="text-gray-500 leading-relaxed text-[14px]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 时间轴 */}
      <section className="py-24 bg-[#1f3d33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#cfaa6b] blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-[#437a63] blur-[80px]" />
        </div>
        <div className="container mx-auto px-8 max-w-[900px] relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#cfaa6b] tracking-[0.3em] text-xs uppercase mb-3">Milestones</p>
            <h2 className="font-serif text-4xl font-bold text-white">品牌发展历程</h2>
            <div className="w-16 h-[2px] bg-[#cfaa6b] mx-auto mt-6" />
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex items-start gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="flex-1">
                    <div className={`bg-white/8 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/12 transition-all ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                      <span className="text-[#cfaa6b] font-serif text-2xl font-bold block mb-2">{item.year}</span>
                      <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#cfaa6b] border-4 border-[#1f3d33] shadow-[0_0_0_2px_#cfaa6b] mt-6 z-10 relative" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 荣誉墙 */}
      <section className="py-24 bg-[#faf8f4]">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="text-center mb-16">
            <p className="text-[#cfaa6b] tracking-[0.3em] text-xs uppercase mb-3">Awards & Honors</p>
            <h2 className="font-serif text-4xl font-bold text-[#1f3d33]">荣誉与认证</h2>
            <div className="w-16 h-[2px] bg-[#cfaa6b] mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {honors.map((h) => (
              <div key={h.text} className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.06)] flex items-start gap-4 hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#f0ece4] flex items-center justify-center flex-shrink-0 text-[#cfaa6b] text-xl">🏆</div>
                <div>
                  <p className="text-[10px] text-[#cfaa6b] tracking-wider font-sans mb-1">{h.year}</p>
                  <p className="font-serif text-sm font-bold text-[#1f3d33] leading-snug">{h.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 数据亮点 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { num: "19万", unit: "棵", label: "原生态古茶树" },
              { num: "千亩", unit: "", label: "古茶园规模" },
              { num: "3", unit: "座", label: "三大雪山基地" },
              { num: "20+", unit: "年", label: "深耕云南茶山" },
            ].map((d) => (
              <div key={d.label} className="bg-[#1f3d33] rounded-2xl p-6 text-center">
                <p className="font-serif text-3xl font-bold text-[#cfaa6b]">{d.num}<span className="text-lg ml-0.5">{d.unit}</span></p>
                <p className="text-white/60 text-xs tracking-wider mt-2 font-sans">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
