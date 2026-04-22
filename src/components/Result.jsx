import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, Camera } from 'lucide-react';

export default function Result({ onRestart }) {
  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    // 模拟计算过程，制造悬念
    setTimeout(() => {
      setAnalyzing(false);
    }, 1500);
  }, []);

  if (analyzing) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-transparent p-6 text-black font-pixel text-center relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-16 h-16 border-4 border-dashed border-[#0bd055] rounded-full mb-6"
        />
        <p className="text-xl animate-pulse text-black mb-2">ANALYZING DATA...</p>
        <p className="text-sm text-gray-500">生成隐性人格中...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full h-full flex flex-col items-center justify-center bg-transparent p-6 relative overflow-y-auto overflow-x-hidden"
    >
      <div className="w-full max-w-sm bg-white rounded-3xl p-8 mb-8 z-10 flex flex-col items-center relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
        <div className="absolute -top-4 -left-4 bg-[#0bd055] text-white font-pixel px-3 py-1 transform -rotate-6 shadow-lg rounded-lg">
          GENERATED!
        </div>
        
        <h3 className="text-2xl font-bold mb-6 font-pixel text-gray-600 mt-2">你的醒图人格是...</h3>
        <h1 className="text-8xl font-pixel text-[#0bd055] tracking-tighter mb-6 animate-bounce">?</h1>
        
        <div className="bg-gray-50 p-4 rounded-2xl w-full text-center border border-gray-100">
          <p className="text-gray-700 font-pixel leading-relaxed text-lg">
            你的测试结果已生成！<br/>
            想知道你是 <span className="font-bold text-[#0bd055]">34</span> 种隐性人格中的哪一种吗？
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4 z-10">
        <motion.a
          href="https://www.xingtu.com/" // 替换为真实的醒图深层链接或活动页
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#0bd055] text-white rounded-2xl font-pixel text-2xl py-5 shadow-xl flex items-center justify-center gap-3 relative overflow-hidden hover:bg-[#09b048] transition-colors"
        >
          <Camera size={28} />
          去醒图 APP 揭晓结果
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="w-full bg-white border-2 border-gray-200 rounded-2xl font-pixel py-4 flex justify-center items-center gap-2 text-xl text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <RefreshCcw size={20} />
          再测一次
        </motion.button>
      </div>
    </motion.div>
  );
}
