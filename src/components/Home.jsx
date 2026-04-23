import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="text-center flex flex-col items-center justify-center drop-shadow-2xl pointer-events-auto"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <h1 className="text-[8rem] md:text-[12rem] font-pixel mb-4 text-black font-bold tracking-widest leading-none cursor-default" style={{ textShadow: '4px 4px 0 #fff, -4px -4px 0 #fff, 4px -4px 0 #fff, -4px 4px 0 #fff' }}>
          <span className="text-[#0bd055]">"P"</span>BTI
        </h1>
        <h2 className="text-4xl md:text-6xl font-pixel mb-12 text-black font-bold cursor-default" style={{ textShadow: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff' }}>
          测一测你的醒图人格
        </h2>
        
        <div className="mt-4 cursor-default">
          <p className="text-2xl text-black font-pixel font-bold bg-white px-8 py-4 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_#0bd055]">
            入口：<span className="text-[#0bd055]">醒图</span> - 玩法 - PBTI
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
