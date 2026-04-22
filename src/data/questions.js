export const questions = [
  {
    id: 1,
    dimension: 'PS', // P or S
    question: "当你在朋友圈发了一张自拍，5分钟过去了一个赞都没有，你会？",
    options: [
      { text: "立刻删掉，并陷入深深的自我怀疑", value: "P", label: "破防 (P)" },
      { text: "顺手给自己点个赞，然后开始私聊发给朋友要求点赞", value: "S", label: "社牛 (S)" },
      { text: "无所谓，反正我是发给自己看的（其实心里还是有点在意）", value: "P", label: "破防 (P)" },
      { text: "直接在评论区发疯：为什么没人理我！！", value: "S", label: "社牛 (S)" }
    ]
  },
  {
    id: 2,
    dimension: 'BN', // B or N
    question: "周末你正在睡觉，老板突然在工作群里@所有人说要开个短会，你此时的状态是？",
    options: [
      { text: "在心里痛骂一万句，然后回复：好的收到老板～", value: "B", label: "暴躁 (B)" },
      { text: "直接装死，假装没看到，等星期一再说", value: "N", label: "佛系 (N)" },
      { text: "截图发到吐槽群，并配上十几个问号", value: "B", label: "暴躁 (B)" },
      { text: "立刻坐起，甚至开始思考怎么在会上表现自己", value: "N", label: "脑补 (N)" }
    ]
  },
  {
    id: 3,
    dimension: 'TF', // T or F
    question: "如果有一天你醒来，发现自己变成了一只水豚（卡皮巴拉），你会做什么？",
    options: [
      { text: "谁惹我我就咬谁，主打一个物理输出", value: "T", label: "抬杠 (T)" },
      { text: "太好了，终于可以光明正大地发呆和摆烂了", value: "F", label: "发呆 (F)" },
      { text: "先分析一下变成水豚的科学依据，并尝试找回人类身体", value: "T", label: "推理 (T)" },
      { text: "跑去动物园应聘，混吃混喝", value: "F", label: "发疯 (F)" }
    ]
  },
  {
    id: 4,
    dimension: 'IE', // I or E
    question: "路上遇到一个半熟不熟的同事迎面走来，你的反应是？",
    options: [
      { text: "立刻掏出手机假装回消息，完美错过", value: "I", label: "隐身 (I)" },
      { text: "大老远就挥手大喊：“嗨！吃了吗你！”", value: "E", label: "显眼 (E)" },
      { text: "突然转身假装看路边的树叶，直到他走远", value: "I", label: "自闭 (I)" },
      { text: "冲上去给他讲一个刚刚看到的冷笑话", value: "E", label: "恶心人 (E)" }
    ]
  }
];
