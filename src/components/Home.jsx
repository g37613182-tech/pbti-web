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
          测一测你的
        </h2>
        <h1 className="text-6xl font-pixel mb-2 y2k-text-gradient drop-shadow-[2px_2px_0px_#000]">
          "P"BTI
        </h1>
        <h3 className="text-2xl font-pixel mb-6 text-black font-bold">
          醒图人格
        </h3>
        
        <div className="mt-4">
          <p className="text-sm text-slate-800 font-pixel font-bold bg-[#ffff00] px-3 py-2 inline-block border-2 border-black shadow-[2px_2px_0px_#000]">
            入口：醒图 - 玩法 - PBTI
          </p>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="z-10 y2k-metallic font-pixel text-xl py-3 px-8 flex items-center gap-2 mt-4"
      >
        <Zap size={20} className="text-[#ff00ff]" />
        [ ENTER / 开始测试 ]
      </motion.button>
    </motion.div>
  );
}
