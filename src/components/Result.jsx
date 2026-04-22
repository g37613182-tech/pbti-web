import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, RefreshCcw, Camera } from 'lucide-react';
import { getResult } from '../data/results';

export default function Result({ scores, onRestart }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // 模拟计算过程
    setTimeout(() => {
      setResult(getResult(scores));
    }, 1500);
  }, [scores]);

  if (!result) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#000080] p-6 text-white font-pixel text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] mix-blend-overlay"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-16 h-16 border-4 border-dashed border-[#00ffff] rounded-full mb-6"
        />
        <p className="text-xl animate-pulse text-[#00ffff] mb-2">ANALYZING DATA...</p>
        <p className="text-sm text-[#ff00ff]">EXTRACTING PERSONALITY CORE</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full h-full flex flex-col items-center bg-[#c0c0c0] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNjMGMwYzAiLz48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjYjBiMGIwIi8+PC9zdmc+')] p-6 relative overflow-y-auto overflow-x-hidden pb-24"
    >
      <h2 className="text-xl font-pixel text-[#000080] mt-4 mb-2 z-10 bg-white px-2 border border-black shadow-[2px_2px_0px_#ff00ff]">
        [ RESULT.TXT ]
      </h2>
      
      <div className="w-full max-w-sm bg-white y2k-border-inset p-4 mb-6 z-10 flex flex-col items-center relative shadow-[6px_6px_0px_0px_#000]">
        <div className="absolute -top-4 -left-4 bg-[#ccff00] text-black border-2 border-black font-pixel px-2 py-1 transform -rotate-6 shadow-[2px_2px_0px_0px_#000]">
          DIAGNOSIS!
        </div>
        
        <h1 className="text-6xl font-pixel y2k-text-gradient tracking-tighter mb-2 mt-2 drop-shadow-[2px_2px_0px_#000]">{result.type}</h1>
        <h3 className="text-2xl font-bold mb-4 font-pixel text-[#000080]">{result.title}</h3>
        
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {result.tags.map((tag, i) => (
            <span key={i} className="bg-[#000080] text-white font-pixel px-2 py-1 text-xs shadow-[2px_2px_0px_#ff00ff]">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="bg-[#c0c0c0] p-3 y2k-border-inset w-full text-center">
          <p className="text-black font-pixel leading-relaxed text-sm">
            {result.desc}
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4 z-10 mt-auto">
        <div className="bg-black text-[#00ffff] border-2 border-[#ff00ff] p-2 text-center mb-1">
           <p className="text-xs font-pixel animate-pulse">&gt;&gt;&gt; 想要属于你的 Y2K 专属特效？ &lt;&lt;&lt;</p>
        </div>

        <motion.a
          href="https://www.xingtu.com/" // 替换为真实的醒图深层链接或活动页
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#ff00ff] text-white border-2 border-white font-pixel text-xl py-3 shadow-[4px_4px_0px_0px_#000] flex items-center justify-center gap-2 relative overflow-hidden"
        >
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-white opacity-30 skew-x-12"
          />
          <Camera size={20} />
          去醒图搜索【PBTI】
        </motion.a>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="flex-1 y2k-metallic font-pixel py-2 flex justify-center items-center gap-2 text-sm"
          >
            <RefreshCcw size={16} />
            REBOOT
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('SYSTEM: 请截图保存此页面！')}
            className="flex-1 bg-[#ccff00] border-2 border-black text-black font-pixel py-2 shadow-[2px_2px_0px_#000] flex justify-center items-center gap-2 text-sm"
          >
            <Download size={16} />
            SAVE.JPG
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
