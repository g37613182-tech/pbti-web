import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import BackgroundMarquee from './components/BackgroundMarquee';

function App() {
  const [currentStep, setCurrentStep] = useState('home'); // 'home', 'quiz', 'result'
  const [scores, setScores] = useState({});

  const startQuiz = () => {
    setCurrentStep('quiz');
    setScores({});
  };

  const finishQuiz = (finalScores) => {
    setScores(finalScores);
    setCurrentStep('result');
  };

  const restartQuiz = () => {
    setCurrentStep('home');
    setScores({});
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-slate-800 overflow-x-hidden relative bg-white">
      
      {/* 新增的滚动弹幕背景 */}
      <BackgroundMarquee />

      {/* 居中的互动测试区，纯净白底 */}
      <div className="w-full max-w-md h-[750px] max-h-[85vh] relative z-10 flex flex-col bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6">
        <div className="flex-1 overflow-y-auto relative rounded-2xl">
          {currentStep === 'home' && <Home onStart={startQuiz} />}
          {currentStep === 'quiz' && <Quiz onFinish={finishQuiz} />}
          {currentStep === 'result' && <Result scores={scores} onRestart={restartQuiz} />}
        </div>
      </div>
      
    </div>
  );
}

export default App;
