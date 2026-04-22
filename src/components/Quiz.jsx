import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';

export default function Quiz({ onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({});

  const handleOptionClick = (value, dimension) => {
    const newScores = { ...scores, [dimension]: value };
    setScores(newScores);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        onFinish(newScores);
      }
    }, 300);
  };

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full h-full flex flex-col bg-[#c0c0c0] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNjMGMwYzAiLz48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjYjBiMGIwIi8+PC9zdmc+')] p-6 relative overflow-hidden">
      <div className="w-full max-w-md mx-auto mb-6 mt-2 z-10 y2k-border bg-[#c0c0c0] p-2">
        <div className="flex justify-between text-xs font-pixel mb-1 text-[#000080]">
          <span>FILE: Q_{currentIndex + 1}.DAT</span>
          <span>LOADING: {Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-black h-4 y2k-border-inset p-[1px]">
          <motion.div 
            className="bg-[#000080] h-full flex items-center justify-end pr-1"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-2 h-full bg-[#00ffff] opacity-50 animate-pulse" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full z-10"
        >
          <div className="bg-white y2k-border-inset p-4 mb-6">
            <h2 className="text-xl font-bold text-black leading-relaxed font-pixel">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {currentQuestion.options.map((option, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOptionClick(option.value, currentQuestion.dimension)}
                className="w-full text-left p-3 bg-[#c0c0c0] y2k-border font-pixel text-lg hover:bg-[#e6e6e6] transition-colors focus:y2k-border-inset active:y2k-border-inset flex items-center gap-2"
              >
                <span className="text-[#ff00ff] font-bold">[{idx + 1}]</span>
                {option.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
