import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#101726] text-white pt-20 pb-12 overflow-hidden relative border-t-4 border-[#1c2c45]">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10 flex justify-end items-end pointer-events-none -mr-20 -mb-20">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-t from-white/20 to-transparent blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-8 max-w-[1400px] relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          
          {/* Logo & Slogan */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#cc4040] flex items-center justify-center text-white font-serif text-xl font-bold shadow-lg">
                茶
              </div>
              <span className="font-serif text-2xl tracking-[0.2em] font-bold">饮者留茗</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-serif italic">
              "自明清两朝，翟氏先祖即事茶为生，世礼传家。匠心传承古法，只为奉上一杯有温度的云南茶。"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 tracking-widest border-b border-white/10 pb-2">快速导航</h4>
            <ul className="space-y-4 font-serif text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[#cfaa6b] transition-colors flex items-center gap-2"><span>·</span> 首页展示</Link></li>
              <li><Link href="/selection" className="hover:text-[#cfaa6b] transition-colors flex items-center gap-2"><span>·</span> 甄选茗品</Link></li>
              <li><Link href="/customization" className="hover:text-[#cfaa6b] transition-colors flex items-center gap-2"><span>·</span> 私人定制</Link></li>
              <li><Link href="/story" className="hover:text-[#cfaa6b] transition-colors flex items-center gap-2"><span>·</span> 品牌故事</Link></li>
              <li><Link href="/contact" className="hover:text-[#cfaa6b] transition-colors flex items-center gap-2"><span>·</span> 联系我们</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 tracking-widest border-b border-white/10 pb-2">联系咨询</h4>
            <div className="space-y-5">
              <div className="flex gap-4 items-center">
                <Phone size={18} className="text-[#cfaa6b] shrink-0" />
                <a href="tel:4001103366" aria-label="拨打全国服务热线 400 110 3366" className="text-sm font-serif text-gray-400 hover:text-[#cfaa6b] transition-colors">
                  400 110 3366
                </a>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin size={18} className="text-[#cfaa6b] shrink-0 mt-0.5" />
                <address className="text-sm font-serif text-gray-400 leading-relaxed not-italic">
                  深圳市龙华区新区大道3号翠岭华庭17号
                </address>
              </div>
              <div className="flex gap-4 items-center">
                <Mail size={18} className="text-[#cfaa6b] shrink-0" />
                <a href="mailto:service@yczbpuer.com" aria-label="发送邮件咨询 service@yczbpuer.com" className="text-sm font-serif text-gray-400 hover:text-[#cfaa6b] transition-colors">
                  service@yczbpuer.com
                </a>
              </div>
            </div>
          </div>

          {/* QR Code Placeholder / Trust */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="w-28 h-28 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 relative overflow-hidden group" aria-label="官方微信服务号二维码">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-[10px] text-gray-500 text-center font-sans tracking-widest uppercase">Official<br/>WeChat</p>
            </div>
            <p className="text-[10px] text-gray-500 mt-4 text-center lg:text-right font-sans tracking-[0.2em] uppercase">Scan for Consultation</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-[0.3em] font-sans">
          <p>© 2026 YIN ZHE LIU MING. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/story" aria-label="品牌隐私说明" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" aria-label="服务条款与支持" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
