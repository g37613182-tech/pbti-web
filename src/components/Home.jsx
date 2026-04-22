import React from 'react';
import { motion } from 'framer-motion';

export default function Home({ onStart }) {
  return (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center p-6 relative bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="text-center z-10 flex flex-col items-center justify-center mb-12"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <h2 className="text-3xl font-pixel mb-2 text-black">
          测一测你的
        </h2>
        <h1 className="text-7xl font-pixel mb-4 text-black font-bold tracking-widest">
          "P"BTI
        </h1>
        <h3 className="text-3xl font-pixel mb-8 text-black font-bold">
          醒图人格
        </h3>
        
        <div className="mt-2">
          <p className="text-lg text-black font-pixel font-bold bg-gray-100 px-6 py-3 rounded-full">
            入口：醒图 - 玩法 - PBTI
          </p>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="z-10 bg-black text-white font-pixel font-bold text-2xl py-4 px-12 rounded-full shadow-xl hover:bg-gray-800 transition-colors"
      >
        开始测试
      </motion.button>
    </motion.div>
  );
}
