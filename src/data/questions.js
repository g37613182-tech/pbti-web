export const questions = [
  {
    id: 1,
    dimension: 'PS', // P图风格
    question: "好不容易出去玩拍了一张大合照，但发现站在边缘的自己脸被拉宽了，你会？",
    options: [
      { text: "只管把自己的脸 P 到极致，其他人不管死活", value: "P", label: "独美" },
      { text: "把所有人都精修一遍，连路人的痘痘都给磨掉", value: "S", label: "劳模" },
      { text: "直接把脸截掉，或者打上一个巨大的马赛克", value: "P", label: "逃避" },
      { text: "算了，直接发，原图直出主打一个松弛感", value: "S", label: "摆烂" }
    ]
  },
  {
    id: 2,
    dimension: 'BN', // 拍照状态
    question: "当朋友举起手机突然对准你喊：“看镜头！3，2，1！”，你的第一反应是？",
    options: [
      { text: "大脑瞬间空白，只能尴尬地比出一个 ✌️", value: "B", label: "失忆" },
      { text: "秒切营业状态，下巴微收，眼神迷离，完美定格", value: "N", label: "戏精" },
      { text: "立刻捂住脸大喊：别拍别拍！我没洗头！", value: "B", label: "社恐" },
      { text: "做个极度扭曲的鬼脸，谁也别想拍到我正常的丑照", value: "N", label: "疯批" }
    ]
  },
  {
    id: 3,
    dimension: 'TF', // 审美偏好
    question: "如果你获得了一个可以瞬间让照片变美的超能力，你最想用来干嘛？",
    options: [
      { text: "一键消除所有废片里的双下巴、眼袋和副乳", value: "T", label: "细节" },
      { text: "无脑加上高斯模糊和胶片漏光，复古氛围拉满", value: "F", label: "氛围" },
      { text: "给自己 P 上八块腹肌/超模大长腿，直接逆天改命", value: "T", label: "造假" },
      { text: "把背景里的路人全部变成水豚或者外星人", value: "F", label: "抽象" }
    ]
  },
  {
    id: 4,
    dimension: 'IE', // 发图心态
    question: "经过两个小时的奋战，你终于 P 完了一组九宫格神图，发朋友圈之前你会想什么？",
    options: [
      { text: "设为仅自己可见，欣赏十分钟后再偷偷公开", value: "I", label: "暗爽" },
      { text: "反复放大检查 100 遍，生怕背景的电线杆被我 P 歪了", value: "E", label: "强迫" },
      { text: "直接发！配上一句极度文艺但不知所云的文案", value: "I", label: "谜语" },
      { text: "立刻私聊发给三个闺蜜/兄弟：“快去给我点赞评论！”", value: "E", label: "讨赞" }
    ]
  }
];
