import React from 'react';
import { results } from '../data/results';

// 导入真实的 PBTI 效果图
import img1 from '../assets/pbti/img1.jpg';
import img2 from '../assets/pbti/img2.jpg';
import img3 from '../assets/pbti/img3.jpg';
import img4 from '../assets/pbti/img4.jpg';
import img5 from '../assets/pbti/img5.jpg';

const pbtiImages = [img1, img2, img3, img4, img5];

// 提取所有结果的 title 和 type
const personalityList = Object.values(results).map(r => `${r.type} ${r.title}`);

// 为了让内容足够长，我们重复几次数据
const getRowData = () => {
  const shuffled = [...personalityList].sort(() => Math.random() - 0.5);
  
  return [...shuffled, ...shuffled, ...shuffled].map((text, i) => ({
    id: i,
    text,
    // 随机从真实图库中挑选一张图片
    img: Math.random() > 0.5 ? pbtiImages[Math.floor(Math.random() * pbtiImages.length)] : null
  }));
};

export default function BackgroundMarquee() {
  const rowCount = 8; // 生成 8 行弹幕

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-white flex flex-col justify-center opacity-80 pointer-events-none">
      {Array.from({ length: rowCount }).map((_, index) => {
        const isReverse = index % 2 !== 0;
        const rowData = getRowData();
        
        return (
          <div 
            key={index} 
            className="flex border-b-[3px] border-black py-2 whitespace-nowrap overflow-hidden bg-white"
          >
            <div className={`flex items-center gap-6 ${isReverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
              {rowData.map((item) => (
                <React.Fragment key={item.id}>
                  <span className="text-4xl md:text-6xl font-pixel font-bold text-black uppercase tracking-wider">
                    {item.text}
                  </span>
                  {item.img && (
                    <img 
                      src={item.img} 
                      alt="effect" 
                      className="h-16 md:h-24 w-auto object-cover border-4 border-black shadow-[4px_4px_0px_0px_#ff00ff] transform hover:scale-110 transition-transform duration-200"
                    />
                  )}
                  <span className="text-[#ff00ff] text-3xl font-pixel animate-pulse">✦</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
