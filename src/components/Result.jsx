import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, RefreshCcw, Camera } from 'lucide-react';
import { getResult } from '../data/results';

export default function Result({ scores, onRestart }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // 模拟计算过程
    setTimeout(() => {
      setResult(getResult(scores));
    }, 1500);
  }, [scores]);

  if (!result) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-transparent p-6 text-black font-pixel text-center relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-16 h-16 border-4 border-dashed border-black rounded-full mb-6"
        />
        <p className="text-xl animate-pulse text-black mb-2">ANALYZING DATA...</p>
        <p className="text-sm text-gray-500">EXTRACTING PERSONALITY CORE</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full h-full flex flex-col items-center bg-transparent p-6 relative overflow-y-auto overflow-x-hidden pb-24"
    >
      <h2 className="text-xl font-pixel text-black mt-4 mb-2 z-10 bg-white px-4 py-1 rounded-full shadow-sm border border-gray-200">
        RESULT.TXT
      </h2>
      
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 mb-6 z-10 flex flex-col items-center relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 mt-4">
        <div className="absolute -top-4 -left-4 bg-[#0bd055] text-white font-pixel px-3 py-1 transform -rotate-6 shadow-lg rounded-lg">
          DIAGNOSIS!
        </div>
        
        <h1 className="text-6xl font-pixel text-[#0bd055] tracking-tighter mb-2 mt-2">{result.type}</h1>
        <h3 className="text-2xl font-bold mb-4 font-pixel text-gray-600">{result.title}</h3>
        
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {result.tags.map((tag, i) => (
            <span key={i} className="bg-[#e6fcf0] text-[#0bd055] font-pixel px-3 py-1 text-sm rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="bg-gray-50 p-4 rounded-2xl w-full text-center border border-gray-100">
          <p className="text-gray-700 font-pixel leading-relaxed text-base">
            {result.desc}
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4 z-10 mt-auto">
        <div className="bg-[#e6fcf0] text-[#0bd055] rounded-xl p-2 text-center mb-1">
           <p className="text-sm font-pixel font-bold">想要属于你的专属特效？</p>
        </div>

        <motion.a
          href="https://www.xingtu.com/" // 替换为真实的醒图深层链接或活动页
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#0bd055] text-white rounded-2xl font-pixel text-2xl py-4 shadow-xl flex items-center justify-center gap-3 relative overflow-hidden hover:bg-[#09b048] transition-colors"
        >
          <Camera size={24} />
          去醒图搜索【PBTI】
        </motion.a>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="flex-1 bg-white border-2 border-gray-200 rounded-xl font-pixel py-3 flex justify-center items-center gap-2 text-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <RefreshCcw size={18} />
            REBOOT
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('SYSTEM: 请截图保存此页面！')}
            className="flex-1 bg-white border-2 border-black rounded-xl text-black font-pixel py-3 shadow-[4px_4px_0px_0px_#000] flex justify-center items-center gap-2 text-lg hover:bg-gray-50 transition-colors"
          >
            <Download size={18} />
            SAVE.JPG
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
