"use client";

import { motion } from "framer-motion";

interface Design {
  id: string;
  name: string;
  gradient: string;
  accent: string;
  pattern: string;
  border?: string;
}

export default function InteractiveBox({ design, size = "md", customText = "" }: { design: Design; size?: "sm" | "md" | "lg"; customText?: string }) {

  const accentColor = design.accent || "#cfaa6b";
  
  // Decide size classes
  const sizeClasses = {
    sm: "w-64 h-80",
    md: "w-72 h-96",
    lg: "w-80 h-[420px]"
  }[size] || "w-72 h-96";

  return (
    <motion.div 
      className="w-full h-full flex items-center justify-center relative perspective-[1200px]"
      style={{ minHeight: '400px' }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div 
        className={`relative ${sizeClasses} rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-8 overflow-hidden`}
        style={{ 
          background: design.gradient,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ 
          rotateY: 15, 
          rotateX: 10, 
          scale: 1.05,
          boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)"
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* 背景暗纹（网格） */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
          backgroundImage: `linear-gradient(${accentColor} 1px, transparent 1px), linear-gradient(90deg, ${accentColor} 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />

        {/* 外边框 */}
        <div className="absolute inset-4 border-2 opacity-30 pointer-events-none" style={{ borderColor: accentColor }} />
        
        {/* 内边框 */}
        <div className="absolute inset-6 border pointer-events-none" style={{ borderColor: accentColor }} />

        {/* 边角装饰 */}
        <div className="absolute top-6 left-6 w-10 h-10 border-t-4 border-l-4 pointer-events-none" style={{ borderColor: accentColor }} />
        <div className="absolute top-6 right-6 w-10 h-10 border-t-4 border-r-4 pointer-events-none" style={{ borderColor: accentColor }} />
        <div className="absolute bottom-6 left-6 w-10 h-10 border-b-4 border-l-4 pointer-events-none" style={{ borderColor: accentColor }} />
        <div className="absolute bottom-6 right-6 w-10 h-10 border-b-4 border-r-4 pointer-events-none" style={{ borderColor: accentColor }} />

        {/* 主图案字 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <motion.div 
            className="text-8xl md:text-9xl font-serif font-bold mb-8 drop-shadow-md" 
            style={{ color: accentColor, textShadow: `0 4px 15px ${accentColor}60` }}
            key={design.id + "-pattern"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {design.pattern}
          </motion.div>

          {/* 英文 Tag */}
          <div 
            className="text-xs md:text-sm tracking-[0.4em] uppercase font-serif mb-6 opacity-80 text-center w-full"
            style={{ color: accentColor }}
          >
            Premium Tea Collection
          </div>

          {/* 镭射定制字 */}
          {customText && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-sans tracking-widest px-6 py-2 border-y backdrop-blur-md bg-black/10 mt-2 text-center"
              style={{ color: accentColor, borderColor: `${accentColor}40` }}
            >
              {customText}
            </motion.div>
          )}
        </div>

        {/* 底部印记 */}
        <div 
          className="absolute bottom-10 text-[10px] tracking-[0.4em] uppercase opacity-40 text-center w-full"
          style={{ color: accentColor }}
        >
          Yin Zhe Liu Ming
        </div>

        {/* 高度仿真的玻璃质感与反光 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
