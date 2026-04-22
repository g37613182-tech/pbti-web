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
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#fcf9f2] p-6">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-8 border-slate-200 border-t-red-500 rounded-full mb-6"
        />
        <p className="text-xl font-black animate-pulse">正在提取你的隐性人格基因...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full h-full flex flex-col items-center bg-[#fcf9f2] p-6 relative overflow-y-auto overflow-x-hidden pb-24"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-30 -translate-x-1/4" />

      <h2 className="text-2xl font-black text-slate-500 mt-4 mb-2 z-10">你的 PBTI 结果是</h2>
      
      <div className="w-full max-w-sm bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 mb-8 z-10 flex flex-col items-center relative transform rotate-1">
        <div className="absolute -top-5 -right-5 bg-yellow-300 text-black border-4 border-black font-black px-4 py-2 rounded-full transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          确诊！
        </div>
        
        <h1 className="text-6xl font-black text-red-500 tracking-tighter mb-2">{result.type}</h1>
        <h3 className="text-3xl font-black mb-4">{result.title}</h3>
        
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {result.tags.map((tag, i) => (
            <span key={i} className="bg-slate-100 border-2 border-black font-bold px-3 py-1 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
        
        <p className="text-slate-700 font-medium leading-relaxed text-center text-sm mb-4">
          {result.desc}
        </p>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4 z-10 mt-auto">
        <div className="bg-yellow-100 border-2 border-black rounded-xl p-3 text-center mb-1">
           <p className="text-sm font-bold text-slate-700">想要属于你的 PBTI 照片名片？</p>
        </div>

        <motion.a
          href="https://www.xingtu.com/" // 替换为真实的醒图深层链接或活动页
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#ff4757] text-white border-4 border-black font-black text-xl py-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 relative overflow-hidden"
        >
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-white opacity-20 skew-x-12"
          />
          <Camera size={24} />
          去醒图搜索【PBTI】体验
        </motion.a>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="flex-1 bg-white border-4 border-black font-black py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center gap-2"
          >
            <RefreshCcw size={20} />
            再测一次
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('请截图保存此页面！')}
            className="flex-1 bg-[#2ed573] border-4 border-black font-black py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center gap-2"
          >
            <Download size={20} />
            保存截图
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
