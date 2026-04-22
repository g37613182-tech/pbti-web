import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function Home({ onStart }) {
  return (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#c0c0c0] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNjMGMwYzAiLz48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjYjBiMGIwIi8+PC9zdmc+')] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#ff00ff] rounded-full blur-3xl opacity-50 mix-blend-screen" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#00ffff] rounded-full blur-3xl opacity-50 mix-blend-screen" />

      <motion.div 
        className="text-center z-10 y2k-border bg-[#c0c0c0] p-6 mb-8 shadow-[4px_4px_0px_0px_#ff00ff]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <div className="bg-[#000080] text-white font-pixel text-xs px-1 text-left mb-4">
          C:\PBTI\SCAN.EXE
        </div>
        <h2 className="text-2xl font-pixel mb-2 text-[#ff00ff] drop-shadow-[2px_2px_0px_#fff]">
          测测你的
        </h2>
        <h1 className="text-5xl font-pixel mb-6 y2k-text-gradient drop-shadow-[2px_2px_0px_#000]">
          隐性抽象人格
        </h1>
        
        <div className="y2k-border-inset bg-white p-3">
          <p className="text-sm font-bold font-pixel">SYSTEM ERROR:</p>
          <p className="text-xs text-slate-600 mt-1 font-pixel">只需 4 题，快速确诊！</p>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="z-10 y2k-metallic font-pixel text-xl py-3 px-8 flex items-center gap-2"
      >
        <Zap size={20} className="text-[#ff00ff]" />
        [ ENTER / 开始发疯 ]
      </motion.button>
      
      <p className="absolute bottom-6 text-[10px] text-[#ff00ff] font-pixel z-10 text-center w-full px-4 drop-shadow-[1px_1px_0px_#fff]">
        * 体验版小测试，测完记得去醒图用特效哦 *
      </p>
    </motion.div>
  );
}
