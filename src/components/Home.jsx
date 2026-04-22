import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function Home({ onStart }) {
  return (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#fcf9f2]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-red-400 rounded-full blur-3xl opacity-30" />

      <motion.div 
        className="text-center z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <h2 className="text-3xl font-black mb-2 tracking-tighter text-slate-800 drop-shadow-md">
          测测你的
        </h2>
        <h1 className="text-5xl font-black mb-8 tracking-tighter text-red-500 drop-shadow-md">
          隐性抽象人格
        </h1>
        
        <div className="bg-white border-4 border-black p-4 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12 transform -rotate-2">
          <p className="text-lg font-bold">不知道自己是什么 PBTI？</p>
          <p className="text-sm text-slate-500 mt-2 font-medium">只需 4 题，快速确诊！</p>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="z-10 bg-[#2ed573] border-4 border-black text-black font-black text-2xl py-4 px-10 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 hover:bg-[#26bd65] transition-colors"
      >
        <Zap size={28} />
        开始发疯
      </motion.button>
      
      <p className="absolute bottom-6 text-xs text-slate-400 font-bold z-10">
        * 体验版小测试，测完记得去醒图用特效哦
      </p>
    </motion.div>
  );
}
