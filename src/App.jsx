import React, { useState } from 'react';
import Promo from './components/Promo';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

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
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#fcf9f2] overflow-x-hidden text-slate-800">
      
      {/* 左侧：广告宣传区 (Desktop 主视角) */}
      <div className="w-full lg:w-[60%] p-8 lg:p-20 xl:pr-32 flex flex-col justify-center relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-300 rounded-full blur-[100px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-400 rounded-full blur-[120px] opacity-30 pointer-events-none" />
        
        <Promo />
      </div>

      {/* 右侧：互动测试区 (次要位置) */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-8 lg:p-20 bg-yellow-50 border-t-8 lg:border-t-0 lg:border-l-8 border-black relative">
        {/* 类似手机的容器 */}
        <div className="w-full max-w-md h-[750px] max-h-[85vh] relative overflow-hidden bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] border-8 border-black flex flex-col">
          {currentStep === 'home' && <Home onStart={startQuiz} />}
          {currentStep === 'quiz' && <Quiz onFinish={finishQuiz} />}
          {currentStep === 'result' && <Result scores={scores} onRestart={restartQuiz} />}
        </div>
      </div>
      
    </div>
  );
}

export default App;
