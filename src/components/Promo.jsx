import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Search, Sparkles, HandMetal } from 'lucide-react';

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
      <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full font-bold mb-6 shadow-[4px_4px_0px_0px_rgba(255,71,87,1)]">
        <Sparkles size={18} className="text-yellow-300" />
        <span className="tracking-wider">全新爆款玩法现已上线</span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter text-slate-800">
        你的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">PBTI</span> 专属特效<br />
        现已登陆 <span className="underline decoration-wavy decoration-red-500 underline-offset-8">醒图 App</span>
      </motion.h1>

      <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-slate-600 mb-12 font-medium leading-relaxed">
        告别无聊的传统测试！用特效秀出你的隐性抽象人格。<br />
        <span className="text-slate-400 text-lg">（顺便，右边的小玩具可以先测测看 👉）</span>
      </motion.p>

      <motion.div 
        variants={itemVariants} 
        className="bg-white border-4 border-black p-6 lg:p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative"
      >
        <div className="absolute -top-6 -right-6 bg-yellow-300 text-black border-4 border-black font-black px-4 py-2 rounded-full transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          快速入口
        </div>

        <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
          <HandMetal size={28} className="text-red-500" />
          如何获取同款特效？
        </h3>
        
        <ul className="space-y-6 font-bold text-lg lg:text-xl text-slate-800">
          <li className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 bg-red-100 rounded-full flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Smartphone size={24} className="text-red-600" />
            </div>
            <span>第一步：打开 <span className="text-red-500">醒图 App</span></span>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 bg-yellow-100 rounded-full flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Search size={24} className="text-yellow-600" />
            </div>
            <span>第二步：在首页搜索栏输入 <span className="bg-yellow-200 px-2 rounded-md">PBTI</span></span>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 bg-green-100 rounded-full flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles size={24} className="text-green-600" />
            </div>
            <span>第三步：点击使用，开始你的发疯创作！</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
