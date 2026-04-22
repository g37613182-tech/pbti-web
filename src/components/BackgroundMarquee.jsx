import React from 'react';
import { results } from '../data/results';

// 导入所有真实的 PBTI 效果图
import img1 from '../assets/pbti/20260423-005944.jpg';
import img2 from '../assets/pbti/20260423-005947.jpg';
import img3 from '../assets/pbti/20260423-005952.jpg';
import img4 from '../assets/pbti/20260423-005956.jpg';
import img5 from '../assets/pbti/20260423-005959.jpg';
import img6 from '../assets/pbti/20260423-010002.jpg';
import img7 from '../assets/pbti/20260423-010029.jpg';
import img8 from '../assets/pbti/20260423-010034.jpg';
import img9 from '../assets/pbti/20260423-010041.jpg';
import img10 from '../assets/pbti/comfyui_task_output_3afbe48c-dc0f-4867-8431-d14e9008574e.png';
import img11 from '../assets/pbti/comfyui_task_output_3b6c6262-c303-4ab8-bcc9-e4184e125c6f.png';
import img12 from '../assets/pbti/comfyui_task_output_9dc3a746-de32-4456-b2ac-518e194d0571.png';
import img13 from '../assets/pbti/comfyui_task_output_e48b57dd-40a0-480a-88aa-16c43fd7e8a1.png';

const pbtiImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

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
    <div className="fixed inset-0 z-0 overflow-hidden bg-white flex flex-col justify-center pointer-events-none">
      {Array.from({ length: rowCount }).map((_, index) => {
        const isReverse = index % 2 !== 0;
        const rowData = getRowData();
        
        return (
          <div 
            key={index} 
            className="flex py-6 whitespace-nowrap overflow-visible bg-transparent"
          >
            <div className={`flex items-center gap-12 ${isReverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
              {rowData.map((item) => (
                <React.Fragment key={item.id}>
                  <span className="text-5xl md:text-7xl font-pixel font-bold text-gray-200 uppercase tracking-wider">
                    {item.text}
                  </span>
                  {item.img && (
                    <img 
                      src={item.img} 
                      alt="effect" 
                      className="h-48 md:h-64 w-auto object-cover shadow-2xl relative z-10 mx-4"
                    />
                  )}
                  <span className="text-gray-200 text-3xl font-pixel">✦</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
