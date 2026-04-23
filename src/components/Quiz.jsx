import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';

export default function Quiz({ onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({});

  const handleOptionClick = (value, dimension) => {
    // 累加对应维度的得分
    const currentScore = scores[dimension] || 0;
    const newScores = { ...scores, [dimension]: currentScore + value };
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
    <div className="w-full h-full flex flex-col bg-transparent p-6 relative overflow-hidden">
      <div className="w-full max-w-md mx-auto mb-6 mt-2 z-10">
        <div className="flex justify-between text-sm font-pixel mb-2 text-gray-500">
          <span>{currentIndex + 1} / {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <motion.div 
            className="bg-[#0bd055] h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full z-10"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black leading-relaxed font-pixel">
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
                className="w-full text-left p-4 bg-gray-50 rounded-2xl font-pixel text-xl text-black hover:bg-[#e6fcf0] transition-colors shadow-sm flex items-center gap-3 border border-gray-100 hover:border-[#0bd055]"
              >
                <span className="text-[#0bd055] font-bold">[{idx + 1}]</span>
                {option.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
