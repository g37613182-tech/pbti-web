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
    <div className="w-full h-full flex flex-col bg-[#fcf9f2] p-6 relative overflow-hidden">
      <div className="w-full max-w-md mx-auto mb-8 mt-4 z-10">
        <div className="flex justify-between text-sm font-bold mb-2">
          <span>题目 {currentIndex + 1} / {questions.length}</span>
          <span>发疯进度 {Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-slate-200 h-3 rounded-full border-2 border-black overflow-hidden">
          <motion.div 
            className="bg-red-500 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3, type: "tween" }}
          className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full z-10"
        >
          <h2 className="text-2xl font-black text-slate-800 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h2>

          <div className="flex flex-col gap-4">
            {currentQuestion.options.map((option, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOptionClick(option.value, currentQuestion.dimension)}
                className="w-full text-left p-4 bg-white border-4 border-black rounded-xl font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50 transition-colors"
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-40 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-30 translate-y-1/4 translate-x-1/4" />
    </div>
  );
}
