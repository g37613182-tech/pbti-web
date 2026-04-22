import React, { useState } from 'react';
import Promo from './components/Promo';
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
    <div className="min-h-screen w-full flex flex-col lg:flex-row text-slate-800 overflow-x-hidden relative">
      
      {/* 新增的滚动弹幕背景 */}
      <BackgroundMarquee />

      {/* 飘屏/滚动字幕特效 */}
      <div className="absolute top-0 left-0 w-full bg-[#00ffff] text-[#ff00ff] font-pixel text-xl py-1 overflow-hidden z-50 border-b-4 border-[#ff00ff]">
        <div className="whitespace-nowrap animate-[marquee_10s_linear_infinite] font-bold">
          ⚠ WARNING: PBTI VIRUS DETECTED ⚠ MILLENNIUM BUG ⚠ 2000 ⚠ ABSTRACT PERSONALITY TEST ⚠ ERROR 404 ⚠ WARNING: PBTI VIRUS DETECTED ⚠
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* 左侧：广告宣传区 (Desktop 主视角) */}
      <div className="w-full lg:w-[60%] p-8 pt-16 lg:p-20 xl:pr-32 flex flex-col justify-center relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#ccff00] rounded-full mix-blend-screen filter blur-xl opacity-70 animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#00ffff] rounded-full mix-blend-screen filter blur-2xl opacity-60 animate-pulse pointer-events-none" />
        
        <Promo />
      </div>

      {/* 右侧：互动测试区 (次要位置) */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-8 pt-12 lg:p-20 relative">
        {/* Y2K 手机/电脑窗口容器 */}
        <div className="w-full max-w-md h-[750px] max-h-[85vh] relative overflow-hidden y2k-border flex flex-col shadow-[10px_10px_0px_0px_#00ffff]">
          {/* Win98 风格标题栏 */}
          <div className="bg-[#000080] text-white flex justify-between items-center px-2 py-1">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-sm">PBTI.EXE</span>
            </div>
            <div className="flex gap-1">
              <button className="y2k-border bg-[#c0c0c0] w-5 h-5 flex items-center justify-center text-black text-xs font-bold focus:y2k-border-inset">_</button>
              <button className="y2k-border bg-[#c0c0c0] w-5 h-5 flex items-center justify-center text-black text-xs font-bold focus:y2k-border-inset">□</button>
              <button className="y2k-border bg-[#c0c0c0] w-5 h-5 flex items-center justify-center text-black text-xs font-bold focus:y2k-border-inset">X</button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#c0c0c0] relative">
            {currentStep === 'home' && <Home onStart={startQuiz} />}
            {currentStep === 'quiz' && <Quiz onFinish={finishQuiz} />}
            {currentStep === 'result' && <Result scores={scores} onRestart={restartQuiz} />}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
