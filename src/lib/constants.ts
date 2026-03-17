/* 经典礼盒预设 */
export const CLASSIC_BOXES = [
  {
    id: "guoyun-1",
    name: "深林飞鸟 - 经典绿",
    gradient: "linear-gradient(135deg,#1f3d33 0%,#2d5a47 60%,#1a3028 100%)",
    accent: "#cfaa6b",
    pattern: "🦢",
    price: "298",
  },
  {
    id: "huacai-1",
    name: "盛世华彩 - 喜庆红",
    gradient: "linear-gradient(135deg,#7b1b1b 0%,#a82d2d 60%,#5a1414 100%)",
    accent: "#ffd700",
    pattern: "🧧",
    price: "328",
  },
  {
    id: "jianye-1",
    name: "简意归真 - 极简黑",
    gradient: "linear-gradient(135deg,#1a1a1a 0%,#333333 60%,#000000 100%)",
    accent: "#ffffff",
    pattern: "🎋",
    price: "268",
  },
  {
    id: "jiling-1",
    name: "集灵瑞气 - 雅致蓝",
    gradient: "linear-gradient(135deg,#1a365d 0%,#2c5282 60%,#153e75 100%)",
    accent: "#90cdf4",
    pattern: "💠",
    price: "288",
  },
];

/* 模拟橱窗展示的初始礼盒数据 */
export const SHOWCASE_DESIGN = CLASSIC_BOXES[0];

export const STEPS = [
  { n: "01", title: "甄选铭茶", desc: "从云南古树普洱到清雅白茶，提供多样化的高端茶底选择。", img: "/product_green_ceramic.png" },
  { n: "02", title: "礼盒选样", desc: "四大原创包装系列，支持从风格到材质的全面定制。", img: "/hero_tea_box.png" },
  { n: "03", title: "印刻心意", desc: "实时预览企业Logo或专属祝福，由资深工匠精细印刻。", img: "/product_red_ceramic.png" },
];

export const POPULAR_ITEMS = [
  { name: "滇红", en: "Yunnan Black Tea", img: "/product_red_ceramic.png", bg: "#7b1b1b", btnBg: "#7b1b1b", price: "128" },
  { name: "古树白茶", en: "Ancient White Tea", img: "/product_white_ceramic.png", bg: "#3a4a55", btnBg: "#3a4a55", price: "158" },
  { name: "云南普洱", en: "Yunnan Pu-erh", img: "/product_brown_ceramic.png", bg: "#a84432", btnBg: "#1a365d", price: "129" },
];
