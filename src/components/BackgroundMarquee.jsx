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

// 为了让内容足够长以铺满大屏幕，我们增加重复次数，保证内容在 translateX(-50%) 时能覆盖全屏
const getRowData = () => {
  const shuffledTop = [...personalityList].sort(() => Math.random() - 0.5);
  const shuffledBottom = [...personalityList].sort(() => Math.random() - 0.5);
  
  // 我们将两行文字配对成一组（一个块），然后在块之间插入大图
  // 为了防止大屏幕留白，把生成块的数量扩大到原来的 3 倍
  const blocks = [];
  for (let i = 0; i < shuffledTop.length * 6; i++) {
    blocks.push({
      id: i,
      textTop: shuffledTop[i % shuffledTop.length],
      textBottom: shuffledBottom[i % shuffledBottom.length],
      // 每隔几个块随机插入一张大图片
      img: Math.random() > 0.4 ? pbtiImages[Math.floor(Math.random() * pbtiImages.length)] : null
    });
  }
  return blocks;
};

export default function BackgroundMarquee({ onStart, isClickable }) {
  const rowCount = 8; // 生成 8 组“双行弹幕块”以适配高分辨率大屏

  return (
    <div className={`fixed inset-0 z-0 overflow-hidden bg-white flex flex-col justify-evenly ${isClickable ? '' : 'pointer-events-none'}`}>
      {Array.from({ length: rowCount }).map((_, index) => {
        const isReverse = index % 2 !== 0;
        const rowData = getRowData();
        
        return (
          <div 
            key={index} 
            className={`marquee-row flex py-2 whitespace-nowrap overflow-visible bg-transparent border-b border-gray-50 ${isClickable ? 'is-clickable group cursor-pointer' : ''}`}
            onClick={isClickable ? onStart : undefined}
          >
            <div className={`flex items-center gap-6 ${isReverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
              {rowData.map((item) => (
                <React.Fragment key={item.id}>
                  {/* 两行文字的块 */}
                  <div className="flex flex-col justify-center items-start gap-1">
                    <span className={`text-3xl md:text-5xl font-pixel font-bold text-gray-300 uppercase tracking-wider leading-none transition-colors duration-300 ${isClickable ? 'group-hover:text-[#0bd055]' : ''}`}>
                      {item.textTop}
                    </span>
                    <span className={`text-3xl md:text-5xl font-pixel font-bold text-gray-300 uppercase tracking-wider leading-none transition-colors duration-300 ${isClickable ? 'group-hover:text-[#0bd055]' : ''}`}>
                      {item.textBottom}
                    </span>
                  </div>
                  
                  <span className={`text-gray-200 text-3xl font-pixel self-center transition-colors duration-300 ${isClickable ? 'group-hover:text-[#0bd055]' : ''}`}>✦</span>

                  {/* 跨越两行高度的大图 */}
                  {item.img && (
                    <img 
                      src={item.img} 
                      alt="effect" 
                      className={`h-[4.5rem] md:h-[7.5rem] w-auto object-cover shadow-xl border-2 border-white mx-2 transition-colors duration-300 ${isClickable ? 'group-hover:border-[#0bd055]' : ''}`}
                    />
                  )}
                  
                  {item.img && <span className={`text-gray-200 text-3xl font-pixel self-center transition-colors duration-300 ${isClickable ? 'group-hover:text-[#0bd055]' : ''}`}>✦</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
