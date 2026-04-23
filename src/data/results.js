// 精简版 PBTI 醒图人设库 (13 个核心人设)
export const results = {
  XXDS: { type: "XXDS", title: "邪修大师", desc: "掌握邪修焚诀的神，花式玩转涂鸦笔是你的天赋我了解~", tags: ["鬼斧神工", "花式涂鸦", "脑洞大开"] },
  HANDCRAFT: { type: "HANDCRAFT", title: "手搓匠人", desc: "在 ai 盛行的时代，身为拍照 p 图界老艺术家的你仍在坚持手搓。", tags: ["老艺术家", "拒绝AI", "精雕细琢"] },
  HAILUO: { type: "HAILUO", title: "海螺姑娘", desc: "你是那种会默默把合照中所有人的美貌都细致还原、并弱弱地不让大家知道的好人。", tags: ["人间大爱", "合照活菩萨", "深藏功与名"] },
  NIGHT_PTU: { type: "NIGHT PTU", title: "深夜p图者", desc: "凌晨 4 点的洛杉矶俺不知道，但凌晨 4 点的醒图见过你的努力。", tags: ["凌晨四点", "修仙狂魔", "夜间灵感"] },
  DETAILED: { type: "DETAILED", title: "精修细节怪", desc: "你是那种会把图放大 10 几倍像素级液化，但其实别人完全不知道你 p 了什么的完美主义修图 er。", tags: ["像素级液化", "放大镜女孩", "别人看不出"] },
  STIFF: { type: "STIFF", title: "摆拍僵住癌", desc: "被镜头封印住的灵魂，本人比照片好看就是你的真实写照。", tags: ["镜头封印", "手足无措", "本人更好看"] },
  YANPAI: { type: "YANPAI", title: "我要验牌！", desc: "镜头前的变脸大师，镜头后摄影师最严厉的父亲/母亲。", tags: ["严加把控", "摄影师噩梦", "出片质检员"] },
  NO_HURRY: { type: "NO HURRY", title: "p图拖延症", desc: "大声告诉我，上回出门拍的照片修完了吗？嗯？", tags: ["囤图大户", "下次一定", "手机内存告急"] },
  DAIYU: { type: "DAIYU", title: "林黛玉", desc: "别人修的是图，你修的是命。每修完一张图都仿佛耗尽了毕生心血。", tags: ["易碎感", "修图耗命", "战损版"] },
  PIC_BOSS: { type: "PIC BOSS", title: "神图主理人", desc: "别人还在卷设备，你用醒图相机随手一拍就是朋友圈顶流大片。", tags: ["随手大片", "审美王者", "朋友圈霸主"] },
  CHARACTER: { type: "CHARACTER", title: "主角", desc: "自带 bgm，主角登场！自动开启 C 位 buff，所有人都是你生命中的过客。", tags: ["天生C位", "气场两米八", "自带BGM"] },
  ACTOR: { type: "ACTOR", title: "抓拍表演家", desc: "超绝抓拍氛围感的背后，其实是鬼畜发癫式动态摆拍。越癫越出片也是被你拿捏了。", tags: ["假装抓拍", "鬼畜摆拍", "拿捏氛围"] },
  FREE: { type: "FREE", title: "天性解放者", desc: "姿势越怪，出片越快，国内最强的活人感出图就是你！", tags: ["放飞自我", "生命力", "绝佳活人感"] }
};

// 根据计分结果匹配最合适的人设
export const getResult = (scores) => {
  // scores 将会是一个对象，记录用户在各个维度的得分。
  // 我们将 13 个人设划分为几个主要特征：
  // 1. 努力程度 (Hardwork): 高 -> NIGHT_PTU, HANDCRAFT, DETAILED | 低 -> NO_HURRY, DAIYU
  // 2. 社交自信 (Social): 高 -> CHARACTER, PIC_BOSS, ACTOR, FREE | 低 -> STIFF, HAILUO
  // 3. 修图风格 (Style): 狂野/抽象 -> XXDS, FREE | 精细/严苛 -> YANPAI, DETAILED, HANDCRAFT

  let resultKey = "PIC_BOSS"; // 默认兜底

  const h = scores.Hardwork || 0;
  const s = scores.Social || 0;
  const st = scores.Style || 0;

  // 简单的判定逻辑树
  if (h > 2 && st > 1) {
    resultKey = "DETAILED";
  } else if (h > 1 && st < 0) {
    resultKey = "NIGHT_PTU";
  } else if (h < -1 && s < 0) {
    resultKey = "NO_HURRY";
  } else if (h < 0 && st > 1) {
    resultKey = "HANDCRAFT";
  } else if (s > 2 && st > 0) {
    resultKey = "CHARACTER";
  } else if (s > 1 && st < 0) {
    resultKey = "FREE";
  } else if (s < -1 && st > 0) {
    resultKey = "YANPAI";
  } else if (s < -2) {
    resultKey = "STIFF";
  } else if (st > 2) {
    resultKey = "HAILUO";
  } else if (st < -2) {
    resultKey = "XXDS";
  } else if (s > 0 && h > 0) {
    resultKey = "ACTOR";
  } else if (h < -2) {
    resultKey = "DAIYU";
  } else {
    resultKey = "PIC_BOSS"; // 各项均衡或没有极值
  }

  return results[resultKey];
};
