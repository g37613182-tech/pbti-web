import React from 'react';
import { motion } from 'framer-motion';

export default function Intro({ onNext }) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center p-8 relative bg-transparent text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
    >
      <div className="mb-12">
        <span className="text-7xl mb-6 block animate-bounce">🎉</span>
        <h2 className="text-4xl font-bold font-pixel text-[#0bd055] leading-relaxed mb-6">
          竟然被你发现了小彩蛋！
        </h2>
        <p className="text-xl text-gray-600 font-pixel leading-loose">
          既然来了，不如来做个额外的趣味测验吧？<br/>
          只需 5 道题，测出你的隐性人格！
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="w-full max-w-xs bg-[#0bd055] text-white font-pixel font-bold text-2xl py-4 rounded-2xl shadow-xl hover:bg-[#09b048] transition-colors"
      >
        接受挑战
      </motion.button>
    </motion.div>
  );
}
