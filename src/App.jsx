import React, { useState } from 'react';
import { X } from 'lucide-react';
import Home from './components/Home';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Result from './components/Result';
import BackgroundMarquee from './components/BackgroundMarquee';

function App() {
  const [currentStep, setCurrentStep] = useState('home'); // 'home', 'intro', 'quiz', 'result'
  const [scores, setScores] = useState({});

  const startQuiz = () => {
    setCurrentStep('intro');
    setScores({});
  };

  const beginQuiz = () => {
    setCurrentStep('quiz');
  };

  const finishQuiz = (finalScores) => {
    setScores(finalScores);
    setCurrentStep('result');
  };

  const restartQuiz = () => {
    setCurrentStep('intro');
    setScores({});
  };

  const returnHome = () => {
    setCurrentStep('home');
    setScores({});
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-slate-800 overflow-x-hidden relative bg-white">
      
      {/* 新增的滚动弹幕背景，传递 onStart 函数使其可点击 */}
      <BackgroundMarquee onStart={startQuiz} isClickable={currentStep === 'home'} />

      {/* Home 页：无窗口纯标题，漂浮在弹幕上 */}
      {currentStep === 'home' && <Home />}

      {/* 居中的互动测试区，纯净白底 */}
      {currentStep !== 'home' && (
        <div className="w-full max-w-md h-auto max-h-[95vh] min-h-[650px] relative z-10 flex flex-col bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 pt-14">
          
          {/* 返回主页的关闭按钮 */}
          <button 
            onClick={returnHome}
            className="absolute top-4 right-4 text-gray-400 hover:text-[#0bd055] hover:bg-[#e6fcf0] transition-colors z-50 bg-gray-50 p-2 rounded-full border border-gray-100"
            title="返回主页"
          >
            <X size={20} />
          </button>

          <div className="flex-1 overflow-y-auto relative rounded-2xl custom-scrollbar">
            {currentStep === 'intro' && <Intro onNext={beginQuiz} />}
            {currentStep === 'quiz' && <Quiz onFinish={finishQuiz} />}
            {currentStep === 'result' && <Result scores={scores} onRestart={restartQuiz} />}
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;
