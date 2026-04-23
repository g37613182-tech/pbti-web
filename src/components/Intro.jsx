import React from 'react';
import { motion } from 'framer-motion';

export default function Intro({ onNext }) {
  return (
    <motion.div
      className="w-full flex-1 flex flex-col items-center justify-between p-8 relative bg-transparent text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <span className="text-7xl mb-8 block animate-bounce">🎉</span>
        <h2 className="text-4xl font-bold font-pixel text-[#0bd055] leading-relaxed mb-6">
          你发现了一个彩蛋
        </h2>
        <p className="text-xl text-gray-600 font-pixel leading-loose">
          这是一个额外的小测试，仅供娱乐
        </p>
      </div>

      <div className="w-full mt-auto pt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="w-full max-w-xs bg-[#0bd055] text-white font-pixel font-bold text-2xl py-4 rounded-2xl shadow-xl hover:bg-[#09b048] transition-colors mx-auto"
        >
          开始测试
        </motion.button>
      </div>
    </motion.div>
  );
}
