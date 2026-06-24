const PRODUCTS = [
  // --- CASUAL SHOES (休閒鞋) ---
  {
    id: "casual_1",
    name: "極簡奢華小白鞋",
    englishName: "Minimalist White Sneaker",
    price: 3280,
    category: "casual",
    categoryName: "休閒鞋",
    image: "assets/casual_1.png",
    description: "精心挑選頂級義大利牛皮製成，極簡純白設計，舒適透氣，是您日常穿搭的完美選擇。",
    features: ["義大利進口牛皮", "防滑耐磨橡膠大底", "超軟高彈力乳膠鞋墊", "人體工學包覆設計"],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: [
      { name: "經典純白", value: "#ffffff" },
      { name: "象牙米白", value: "#f4f0ea" }
    ],
    specifications: {
      "鞋面材質": "真皮 / 牛皮",
      "內裡材質": "真皮 / 豬皮",
      "大底材質": "耐磨防滑生膠底",
      "產地": "台灣手工製作"
    }
  },
  {
    id: "casual_2",
    name: "經典麂皮樂福鞋",
    englishName: "Classic Suede Loafer",
    price: 3680,
    category: "casual",
    categoryName: "休閒鞋",
    image: "assets/casual_2.png",
    description: "奢華質感麂皮面料，手工精細縫製，散發雅痞英倫風範。免綁帶設計，穿脫自如且極具優雅感。",
    features: ["頂級進口麂皮", "手工馬克縫線", "柔軟吸汗真皮內裡", "休閒商務兩相宜"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: [
      { name: "雅痞深棕", value: "#4e3629" },
      { name: "經典曜黑", value: "#1a1a1a" }
    ],
    specifications: {
      "鞋面材質": "進口反絨麂皮",
      "內裡材質": "全粒面豬皮",
      "大底材質": "高彈橡膠發泡底",
      "產地": "台灣手工製作"
    }
  },
  {
    id: "casual_3",
    name: "率性帆布休閒鞋",
    englishName: "Urban Canvas Sneaker",
    price: 1980,
    category: "casual",
    categoryName: "休閒鞋",
    image: "assets/casual_3.png",
    description: "選用高磅數純棉帆布，耐磨且具有卓越的透氣性。街頭街景日常必備款，簡單卻不失質感。",
    features: ["高磅數12oz耐磨帆布", "硫化製鞋工藝", "經典黑白撞色設計", "加厚減壓鞋墊"],
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43],
    colors: [
      { name: "個性曜黑", value: "#111111" },
      { name: "百搭純白", value: "#ffffff" }
    ],
    specifications: {
      "鞋面材質": "高規格100%棉質帆布",
      "內裡材質": "透氣斜紋布",
      "大底材質": "高彈防滑橡膠底",
      "產地": "越南製造"
    }
  },
  {
    id: "casual_4",
    name: "輕量針織漫步鞋",
    englishName: "Knit Walking Sneaker",
    price: 2480,
    category: "casual",
    categoryName: "休閒鞋",
    image: "assets/casual_4.png",
    description: "採用一體成型3D飛織技術，極致輕盈貼合。優異的空氣對流孔設計，讓雙腳自在呼吸一整天。",
    features: ["3D一體飛織鞋面", "極致輕量化中底", "襪套式貼合設計", "後跟雙重提環方便穿脫"],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: "太空冷灰", value: "#7a7e80" },
      { name: "極簡炭黑", value: "#2c302e" }
    ],
    specifications: {
      "鞋面材質": "聚酯纖維飛織線",
      "內裡材質": "親膚抗菌網底",
      "大底材質": "MD輕量發泡 + 橡膠貼片",
      "產地": "中國製造"
    }
  },

  // --- SPORTS SHOES (運動鞋) ---
  {
    id: "sports_1",
    name: "極速螢光慢跑鞋",
    englishName: "Aero Running Sneaker",
    price: 4280,
    category: "sports",
    categoryName: "運動鞋",
    image: "assets/sports_1.png",
    description: "為跑步者量身打造的旗艦慢跑鞋。搭載超彈爆米花中底與螢光流線型設計，在夜間奔馳依舊引人矚目。",
    features: ["超高回彈超臨界中底", "夜間安全3M反光條", "耐磨防滑馬牌橡膠", "透氣網孔強效散熱"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: "螢光電綠", value: "#39ff14" },
      { name: "極速湛藍", value: "#0000ff" }
    ],
    specifications: {
      "鞋面材質": "雙層工程賈卡網布",
      "內裡材質": "吸濕排汗超細纖維",
      "大底材質": "耐磨超耐用橡膠大底",
      "產地": "越南製造"
    }
  },
  {
    id: "sports_2",
    name: "黑金戰神籃球鞋",
    englishName: "Ares Basketball Sneaker",
    price: 4980,
    category: "sports",
    categoryName: "運動鞋",
    image: "assets/sports_2.png",
    description: "結合黑金尊爵配色與高筒包覆，為您提供無可匹敵的球場控制力與腳踝保護，成就球場傳奇。",
    features: ["強化腳踝TPU支撐片", "前後掌氣墊緩震系統", "耐磨人字紋大底", "透氣皮革拼接網眼"],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: [
      { name: "曜石黑金", value: "#c5a059" },
      { name: "極限紅白", value: "#ff0000" }
    ],
    specifications: {
      "鞋面材質": "超纖合成革 + 強力透氣網布",
      "內裡材質": "防滑加厚棉織",
      "大底材質": "高摩擦室內外通用橡膠",
      "產地": "中國製造"
    }
  },
  {
    id: "sports_3",
    name: "星海多功能訓練鞋",
    englishName: "Starry Cross-Trainer",
    price: 3580,
    category: "sports",
    categoryName: "運動鞋",
    image: "assets/sports_3.png",
    description: "兼顧重訓穩定度與有氧靈活度的全能訓練鞋。漸層湛藍星海色彩，展現您的極致運動美學。",
    features: ["寬足弓平穩中底", "抗扭轉平衡片", "防側翻安全結構", "輕量工程網布"],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: [
      { name: "漸層星藍", value: "#4a6fa5" },
      { name: "冷冽全白", value: "#ffffff" }
    ],
    specifications: {
      "鞋面材質": "透氣三層網布",
      "內裡材質": "舒適親膚面料",
      "大底材質": "全掌抓地橡膠",
      "產地": "越南製造"
    }
  },
  {
    id: "sports_4",
    name: "碳纖競速馬拉松鞋",
    englishName: "Carbon Race Pro",
    price: 6800,
    category: "sports",
    categoryName: "運動鞋",
    image: "assets/sports_4.png",
    description: "頂級馬拉松競速跑鞋。內嵌全掌碳纖維板，每一次起步都提供澎湃的推進力，帶您突破個人最佳紀錄。",
    features: ["全掌勺型碳纖維板", "極速推進科技中底", "亮橘漸變競速配色", "羽量級超薄單層網布"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: [
      { name: "競速橘黃", value: "#ff5e00" },
      { name: "閃耀青綠", value: "#00ffcc" }
    ],
    specifications: {
      "鞋面材質": "Monofilament 紗羅網布",
      "內裡材質": "極輕防滑布",
      "大底材質": "DSP輕量顆粒橡膠大底",
      "產地": "越南製造"
    }
  },

  // --- HIGH HEELS (高跟鞋) ---
  {
    id: "heels_1",
    name: "奢華漆皮尖頭高跟鞋",
    englishName: "Luxury Patent Stiletto",
    price: 4500,
    category: "heels",
    categoryName: "高跟鞋",
    image: "assets/heels_1.png",
    description: "經典8公分細高跟，採用極致亮麗的進口漆皮，流暢的楦頭曲線完美修飾雙腳，散發無可挑剔的優雅性感。",
    features: ["奢華進口亮面漆皮", "8cm性感優雅細高跟", "高密度足弓支撐墊", "防滑超薄耐磨橡膠底"],
    sizes: [34, 35, 36, 37, 38, 39, 40],
    colors: [
      { name: "深邃亮黑", value: "#000000" },
      { name: "裸色溫柔", value: "#e8c3b9" }
    ],
    specifications: {
      "鞋面材質": "進口牛皮漆皮",
      "內裡材質": "細膩小羊皮",
      "鞋跟高度": "8 cm",
      "產地": "台灣手工訂製"
    }
  },
  {
    id: "heels_2",
    name: "閃耀金燦細帶晚宴鞋",
    englishName: "Starlight Gold Sandal",
    price: 5200,
    category: "heels",
    categoryName: "高跟鞋",
    image: "assets/heels_2.png",
    description: "如繁星般璀璨。細帶綴滿高品質水鑽，優雅纏繞足踝，奢華金箔質感亮面設計，令您在晚宴中光芒四射。",
    features: ["手工璀璨滿鑽鑲嵌", "奢華金箔壓紋牛皮", "可調節精緻足踝帶", "前掌加厚減壓設計"],
    sizes: [34, 35, 36, 37, 38, 39],
    colors: [
      { name: "璀璨流金", value: "#d4af37" },
      { name: "閃耀極銀", value: "#e5e4e2" }
    ],
    specifications: {
      "鞋面材質": "真皮鍍金屬膜 + 優質水鑽",
      "內裡材質": "柔軟羊皮內裡",
      "鞋跟高度": "9 cm",
      "產地": "台灣手工訂製"
    }
  },
  {
    id: "heels_3",
    name: "魅惑紅麂皮尖頭鞋",
    englishName: "Crimson Velvet Pump",
    price: 4200,
    category: "heels",
    categoryName: "高跟鞋",
    image: "assets/heels_3.png",
    description: "濃郁深邃的魅惑正紅，絨面麂皮溫潤有質感。不論是正式場合或是亮點穿搭，皆能成為眾人目光的焦點。",
    features: ["頂級進口紅色麂皮", "人體工學黃金比例鞋跟", "超軟綿羊皮氣墊鞋墊", "超防滑靜音鞋跟墊"],
    sizes: [35, 36, 37, 38, 39, 40],
    colors: [
      { name: "魅惑正紅", value: "#a6192e" },
      { name: "法式復古綠", value: "#0b3c2e" }
    ],
    specifications: {
      "鞋面材質": "進口羊麂皮",
      "內裡材質": "全粒面羊皮",
      "鞋跟高度": "7 cm",
      "產地": "台灣手工訂製"
    }
  },
  {
    id: "heels_4",
    name: "優雅粗跟一字帶單鞋",
    englishName: "Chic Block Heel Pump",
    price: 3800,
    category: "heels",
    categoryName: "高跟鞋",
    image: "assets/heels_4.png",
    description: "為都市通勤女性量身打造。5公分穩健粗跟，結合極簡一字踝帶，氣質柔和，穿著一整天也毫無壓力。",
    features: ["5cm穩重木紋粗跟", "可調式一字搭扣踝帶", "親膚柔軟羊皮中底", "商務幹練與優雅兼備"],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: [
      { name: "溫潤氣質裸", value: "#dec7b9" },
      { name: "幹練霧黑", value: "#262626" }
    ],
    specifications: {
      "鞋面材質": "優質進口軟牛皮",
      "內裡材質": "吸汗羊皮內裡",
      "鞋跟高度": "5 cm",
      "產地": "台灣手工製作"
    }
  },

  // --- KIDS SHOES (童鞋) ---
  {
    id: "kids_1",
    name: "繽紛樂園魔鬼氈童鞋",
    englishName: "Playground Velcro Kids",
    price: 1680,
    category: "kids",
    categoryName: "童鞋",
    image: "assets/kids_1.png",
    description: "專為學步期與愛動寶貝設計的繽紛童鞋。超寬頭防踢撞設計，搭配雙魔鬼氈，穿脫快速且穩固安全。",
    features: ["超寬楦頭防踢防撞", "安全寬版雙魔鬼氈", "抗菌防臭可拆洗鞋墊", "超彈防滑天然橡膠底"],
    sizes: [25, 26, 27, 28, 29, 30, 31, 32],
    colors: [
      { name: "繽紛樂園", value: "#ff9f43" },
      { name: "海洋探險", value: "#0abde3" }
    ],
    specifications: {
      "鞋面材質": "雙層親膚網布 + 超纖皮皮面",
      "內裡材質": "抗菌消臭透氣棉",
      "大底材質": "天然橡膠防滑大底",
      "產地": "台灣製造"
    }
  },
  {
    id: "kids_2",
    name: "粉紅璀璨亮片帆布鞋",
    englishName: "Pink Glitter Canvas Kids",
    price: 1580,
    category: "kids",
    categoryName: "童鞋",
    image: "assets/kids_2.png",
    description: "閃閃發光的小公主必備款！亮片材質在陽光下無比耀眼，內側附有拉鍊設計，孩子自己穿鞋超有成就感。",
    features: ["璀璨粉紅防落亮片", "內側穿脫YKK環保拉鍊", "減震發泡防滑底", "柔軟不刮腳領口"],
    sizes: [24, 25, 26, 27, 28, 29, 30, 31],
    colors: [
      { name: "亮粉甜心", value: "#ff82a9" },
      { name: "極光漸變", value: "#a9c5ff" }
    ],
    specifications: {
      "鞋面材質": "亮片帆布",
      "內裡材質": "100%透氣純棉布",
      "大底材質": "高抗折耐磨防滑大底",
      "產地": "台灣製造"
    }
  },
  {
    id: "kids_3",
    name: "探索者防水小皮靴",
    englishName: "Explorer Waterproof Boots",
    price: 2280,
    category: "kids",
    categoryName: "童鞋",
    image: "assets/kids_3.png",
    description: "防水、保暖、耐髒。無論是雨天漫步、野外露營，這款皮靴都能貼心守護寶貝雙腳，保證乾爽舒適。",
    features: ["防水防潑水科技鞋面", "高筒保暖防風鞋領", "抓地齒痕防滑耐磨大底", "超軟減震中底"],
    sizes: [26, 27, 28, 29, 30, 31, 32, 33, 34],
    colors: [
      { name: "經典大地棕", value: "#8e6f3e" },
      { name: "帥氣曜石黑", value: "#212121" }
    ],
    specifications: {
      "鞋面材質": "優質防潑水PU合成革",
      "內裡材質": "柔軟防風抓絨",
      "大底材質": "大深紋耐磨抓地底",
      "產地": "中國製造"
    }
  },
  {
    id: "kids_4",
    name: "酷炫閃電發光跑鞋",
    englishName: "Flash Light-Up Sneaker",
    price: 1880,
    category: "kids",
    categoryName: "童鞋",
    image: "assets/kids_4.png",
    description: "每一步都伴隨著閃耀！踏地即亮 LED 燈光設計，不僅酷炫十足，在夜間過馬路時也多了一份安全保障。",
    features: ["踏地感應式七彩LED發光", "酷炫閃電流線型鞋身", "輕盈回彈緩震中底", "透氣蜂巢網布"],
    sizes: [26, 27, 28, 29, 30, 31, 32, 33],
    colors: [
      { name: "極速電藍", value: "#0055ff" },
      { name: "酷炫炫紫", value: "#a020f0" }
    ],
    specifications: {
      "鞋面材質": "3D透氣網布 + 超纖熱熔片",
      "內裡材質": "親膚抗菌透氣網布",
      "大底材質": "發光組件 + TPR輕量底",
      "產地": "中國製造"
    }
  },

  // --- OTHERS (其它類) ---
  {
    id: "others_1",
    name: "專業防水防污噴霧",
    englishName: "Waterproof Shield Spray",
    price: 490,
    category: "others",
    categoryName: "其它類",
    image: "assets/logo.png",
    description: "強效奈米防護科技！一噴形成隱形防護網，阻隔水份、污漬與油汙，保護您的愛鞋不受雨水髒污侵害。適用於各類皮革、麂皮及帆布鞋款。",
    features: ["奈米級長效防護", "超高透氣性不傷鞋面", "一噴速乾只需10分鐘", "環保無毒配方安全無氣味"],
    sizes: ["單一尺寸 (220ml)"],
    colors: [{ name: "防護透明", value: "transparent" }],
    specifications: {
      "產品規格": "220 ml / 罐",
      "主要成分": "氟素防水劑、溶劑、LPG",
      "保存期限": "5 年",
      "產地": "台灣研發製造"
    }
  },
  {
    id: "others_2",
    name: "頂級馬毛除塵刷",
    englishName: "Premium Horsehair Brush",
    price: 350,
    category: "others",
    categoryName: "其它類",
    image: "assets/logo.png",
    description: "100% 天然優質馬毛，毛質細軟而柔韌，不易刮傷皮革。能輕鬆掃除鞋面皺褶處的灰塵與髒污，是真皮皮鞋日常保養必備良伴。",
    features: ["100%天然進口馬毛", "人體工學原木握柄", "毛量濃密不脫毛", "適合麂皮與細緻真皮"],
    sizes: ["單一尺寸"],
    colors: [{ name: "天然原木色", value: "#c19a6b" }],
    specifications: {
      "刷毛材質": "天然進口馬毛",
      "手柄材質": "天然櫸木",
      "產品尺寸": "17 cm x 5.2 cm",
      "產地": "台灣製造"
    }
  },
  {
    id: "others_3",
    name: "全粒面真皮編織鞋帶",
    englishName: "Premium Leather Shoelaces",
    price: 290,
    category: "others",
    categoryName: "其它類",
    image: "assets/logo.png",
    description: "精選高質感純棉蠟打磨或真皮編織，完美適配皮鞋與休閒鞋。質感堅韌不鬆脫，為您的鞋履增添畫龍點睛的細節質感。",
    features: ["高品質密織蠟鞋帶", "抗拉扯不易斷裂", "精緻金屬帶頭包邊", "提昇鞋履質感細節"],
    sizes: ["120 cm", "140 cm"],
    colors: [
      { name: "經典深棕", value: "#4e3629" },
      { name: "紳士曜黑", value: "#111111" }
    ],
    specifications: {
      "產品材質": "純棉蠟化打磨 / 金屬帶頭",
      "產品長度": "120 cm 與 140 cm",
      "適用鞋款": "皮鞋、樂福鞋、休閒皮鞋",
      "產地": "台灣製造"
    }
  },
  {
    id: "others_4",
    name: "抗菌防臭竹炭運動襪",
    englishName: "Bamboo Charcoal Sports Socks",
    price: 190,
    category: "others",
    categoryName: "其它類",
    image: "assets/logo.png",
    description: "添加天然竹炭纖維，卓越的除臭吸汗功效。足弓強化彈力包覆，結合後跟防滑矽膠，運動慢跑日常穿搭皆舒適有感。",
    features: ["天然竹炭長效吸濕消臭", "足弓環狀緊密支撐", "腳底減壓毛圈厚底", "後跟立體防脫滑設計"],
    sizes: ["M (22-25cm)", "L (25-28cm)"],
    colors: [
      { name: "運動酷灰", value: "#888888" },
      { name: "簡約曜黑", value: "#1a1a1a" }
    ],
    specifications: {
      "產品成分": "70% 竹炭棉, 20% 彈性纖維, 10% 橡膠圈",
      "產品包裝": "一雙裝",
      "洗滌建議": "可機洗、請勿使用漂白劑與高溫烘乾",
      "產地": "台灣製造 (社頭)"
    }
  }
];
