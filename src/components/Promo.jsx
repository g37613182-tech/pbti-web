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
        你的 <span className="y2k-text-gradient">"P"BTI</span> 醒图人格<br />
        专属特效现已登陆 <span className="text-[#ccff00] underline decoration-wavy decoration-[#ff00ff] underline-offset-8">醒图 App</span>
      </motion.h1>

      <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-white mb-12 font-bold leading-relaxed drop-shadow-[2px_2px_0px_#000]">
        <span className="text-[#00ffff] text-xl font-pixel">{'>>'} 入口：醒图 - 玩法 - PBTI {'<<'}</span>
      </motion.p>
    </motion.div>
  );
}
