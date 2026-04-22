import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Search, Sparkles, HandMetal, Disc } from 'lucide-react';

export default function Promo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="relative z-10 max-w-2xl mx-auto lg:mx-0 lg:ml-auto w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-[#00ffff] text-[#ff00ff] font-pixel border-2 border-[#ff00ff] mb-6 shadow-[4px_4px_0px_0px_#000]">
        <Disc size={16} className="animate-spin" />
        <span className="tracking-wider">CD-ROM NEW RELEASE // V1.0</span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-pixel mb-6 leading-[1.1] text-white drop-shadow-[4px_4px_0px_#ff00ff]">
        你的 <span className="y2k-text-gradient">PBTI</span> 专属特效<br />
        现已登陆 <span className="text-[#ccff00] underline decoration-wavy decoration-[#ff00ff] underline-offset-8">醒图 App</span>
      </motion.h1>

      <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-white mb-12 font-bold leading-relaxed drop-shadow-[2px_2px_0px_#000]">
        告别无聊的传统测试！用千禧复古风秀出你的隐性抽象人格。<br />
        <span className="text-[#00ffff] text-lg font-pixel">{'>>'} CLICK RIGHT WINDOW TO START {'<<'}</span>
      </motion.p>

      <motion.div 
        variants={itemVariants} 
        className="y2k-border p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative bg-[#c0c0c0]"
      >
        <div className="absolute -top-4 -right-4 bg-[#ff00ff] text-white font-pixel px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#00ffff]">
          NEW!
        </div>

        <h3 className="text-2xl font-pixel mb-6 flex items-center gap-2 text-[#000080]">
          <HandMetal size={28} className="text-[#ff00ff]" />
          HOW TO GET IT?
        </h3>
        
        <ul className="space-y-4 font-bold text-lg lg:text-xl text-black">
          <li className="flex items-center gap-4 bg-white y2k-border-inset p-2">
            <div className="w-10 h-10 shrink-0 bg-[#c0c0c0] flex items-center justify-center border-2 border-white border-b-gray-500 border-r-gray-500">
              <Smartphone size={20} className="text-[#ff00ff]" />
            </div>
            <span className="font-pixel">1. 打开 <span className="text-[#ff00ff]">醒图 App</span></span>
          </li>
          <li className="flex items-center gap-4 bg-white y2k-border-inset p-2">
            <div className="w-10 h-10 shrink-0 bg-[#c0c0c0] flex items-center justify-center border-2 border-white border-b-gray-500 border-r-gray-500">
              <Search size={20} className="text-[#000080]" />
            </div>
            <span className="font-pixel">2. 搜索 <span className="bg-[#000080] text-white px-2">PBTI</span></span>
          </li>
          <li className="flex items-center gap-4 bg-white y2k-border-inset p-2">
            <div className="w-10 h-10 shrink-0 bg-[#c0c0c0] flex items-center justify-center border-2 border-white border-b-gray-500 border-r-gray-500">
              <Sparkles size={20} className="text-[#00a800]" />
            </div>
            <span className="font-pixel">3. 点击使用，开始发疯！</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
