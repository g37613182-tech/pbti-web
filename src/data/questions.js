export const questions = [
  {
    id: 1,
    dimension: 'Style', // 风格：正数代表精细/严苛，负数代表狂野/抽象
    question: "好不容易出去玩拍了一张大合照，但发现站在边缘的自己脸被拉宽了，你会？",
    options: [
      { text: "把所有人都精修一遍，连路人的痘痘都给磨掉", value: 2, label: "细节" },
      { text: "只管把自己的脸 P 到极致，其他人不管死活", value: 0, label: "独美" },
      { text: "直接发！配上搞笑贴纸把自己的脸遮住", value: -1, label: "搞怪" },
      { text: "算了，直接发，原图直出主打一个松弛感", value: -2, label: "真实" }
    ]
  },
  {
    id: 2,
    dimension: 'Social', // 社交：正数代表外向/表现欲，负数代表内向/社恐
    question: "当朋友举起手机突然对准你喊：“看镜头！3，2，1！”，你的第一反应是？",
    options: [
      { text: "秒切营业状态，下巴微收，眼神迷离，完美定格", value: 2, label: "戏精" },
      { text: "做个极度扭曲的鬼脸，谁也别想拍到我正常的丑照", value: 1, label: "疯批" },
      { text: "大脑瞬间空白，只能尴尬地比出一个 ✌️", value: -1, label: "失忆" },
      { text: "立刻捂住脸大喊：别拍别拍！我没洗头！", value: -2, label: "社恐" }
    ]
  },
  {
    id: 3,
    dimension: 'Hardwork', // 努力程度：正数代表勤奋/死磕，负数代表拖延/佛系
    question: "如果你获得了一个可以瞬间让照片变美的超能力，你最想用来干嘛？",
    options: [
      { text: "一键消除所有废片里的双下巴、眼袋和副乳", value: 2, label: "细节" },
      { text: "给自己 P 上八块腹肌/超模大长腿，直接逆天改命", value: 1, label: "造假" },
      { text: "无脑加上高斯模糊和胶片漏光，复古氛围拉满", value: -1, label: "氛围" },
      { text: "把背景里的路人全部变成水豚或者外星人", value: -2, label: "抽象" }
    ]
  },
  {
    id: 4,
    dimension: 'Social', // 社交：正数代表外向/表现欲，负数代表内向/社恐
    question: "经过两个小时的奋战，你终于 P 完了一组九宫格神图，发朋友圈之前你会想什么？",
    options: [
      { text: "立刻私聊发给三个闺蜜/兄弟：“快去给我点赞评论！”", value: 2, label: "讨赞" },
      { text: "直接发！配上一句极度文艺但不知所云的文案", value: 1, label: "谜语" },
      { text: "反复放大检查 100 遍，生怕背景的电线杆被我 P 歪了", value: -1, label: "强迫" },
      { text: "设为仅自己可见，欣赏十分钟后再偷偷公开", value: -2, label: "暗爽" }
    ]
  },
  {
    id: 5,
    dimension: 'Hardwork', // 努力程度：正数代表勤奋/死磕，负数代表拖延/佛系
    question: "当你修完一张绝美自拍，但发现背后的墙被你 P 歪了，你会？",
    options: [
      { text: "撤回重修，哪怕再花半小时也要把墙拉直", value: 2, label: "完美" },
      { text: "找个可爱的贴纸或者涂鸦把歪掉的墙挡住", value: 0, label: "机智" },
      { text: "发圈并配文：墙歪了是因为我美丽的气场太强", value: -1, label: "戏精" },
      { text: "假装那是空间扭曲的艺术，直接发！", value: -2, label: "自信" }
    ]
  },
  {
    id: 6,
    dimension: 'Style', // 风格：正数代表精细/严苛，负数代表狂野/抽象
    question: "朋友发来一张你们的合照让你帮忙修一下，你的修图策略是？",
    options: [
      { text: "帮她也精修一下，做到两人双赢，岁月静好", value: 2, label: "活菩萨" },
      { text: "只修自己，甚至顺手把她稍微拉宽一点点", value: 1, label: "心机" },
      { text: "加上一堆夸张的特效和文字，做成表情包发回给她", value: -1, label: "整活" },
      { text: "随手套个滤镜就发回去了，主打一个敷衍", value: -2, label: "敷衍" }
    ]
  },
  {
    id: 7,
    dimension: 'Social', // 社交：正数代表外向/表现欲，负数代表内向/社恐
    question: "在网红打卡地拍照，周围全都是人，你会？",
    options: [
      { text: "完全无视路人，直接开启疯狂连拍模式", value: 2, label: "无视" },
      { text: "等别人拍完，自己上去火速摆几个 pose 赶紧撤", value: 0, label: "效率" },
      { text: "觉得太尴尬了，最后只拍了几张风景照", value: -1, label: "尴尬" },
      { text: "假装在看手机，其实是在等所有人都走光", value: -2, label: "社恐" }
    ]
  },
  {
    id: 8,
    dimension: 'Hardwork', // 努力程度：正数代表勤奋/死磕，负数代表拖延/佛系
    question: "你手机相册里目前的状态最接近以下哪种？",
    options: [
      { text: "全是精修好的图，而且分门别类整理在不同的相册里", value: 2, label: "强迫症" },
      { text: "有很多修了一半或者打算以后再修的图，越积越多", value: -1, label: "拖延" },
      { text: "几乎全是毫无意义的随手拍和搞笑表情包", value: -2, label: "抽象" },
      { text: "每天都在提示内存不足，但我就是一张都不删", value: -3, label: "摆烂" }
    ]
  }
];
