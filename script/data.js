const dbProducts = [
  // ==================== CHUỘT ====================
  {
    id: 201,
    name: "Chuột không dây Logitech MX Master 2S",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-khong-day-logitech-mx-master-2s_3_.png",
    price: 1690000,
    rating: 4.8, reviews: 200, isHot: true, discount: 0, oldPrice: null,
    type: "Chuột", brand: "Logitech", connection: "Wireless", led: "None", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Office"
  },
  {
    id: 202,
    name: "Chuột Gaming không dây Logitech G304",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-gaming-khong-day-logitech-g304-lightspeed_1_1.png",
    price: 890000,
    rating: 4.7, reviews: 500, isHot: true, discount: 10, oldPrice: 990000,
    type: "Chuột", brand: "Logitech", connection: "Wireless", led: "None", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Gaming"
  },
  {
    id: 203,
    name: "Chuột có dây Gaming Logitech G102",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-choi-game-co-day-logitech-g102-lightsync-8000dpi_1__2.png",
    price: 450000,
    rating: 4.9, reviews: 1000, isHot: true, discount: 0, oldPrice: null,
    type: "Chuột", brand: "Logitech", connection: "Wired", led: "RGB", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Gaming"
  },
  {
    id: 204,
    name: "Chuột không dây Logitech Signature M650",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_1_3__3.png",
    price: 750000,
    rating: 4.6, reviews: 80, isHot: false, discount: 0, oldPrice: null,
    type: "Chuột", brand: "Logitech", connection: "Wireless", led: "None", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Office"
  },
  {
    id: 205,
    name: "Chuột Gaming Razer Viper Ultimate",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-gaming-khong-day-razer-cobra-pro-rz01-04660100-r3a1.png",
    price: 1490000,
    rating: 4.9, reviews: 110, isHot: true, discount: 20, oldPrice: 1890000,
    type: "Chuột", brand: "Razer", connection: "Wireless", led: "RGB", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Gaming"
  },
  {
    id: 206,
    name: "Chuột không dây Logitech MX Anywhere 3S",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-khong-day-logitech-mx-anywhere-3s_2.png",
    price: 1690000,
    rating: 4.7, reviews: 65, isHot: true, discount: 0, oldPrice: null,
    type: "Chuột", brand: "Logitech", connection: "Wireless", led: "None", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Office"
  },
  {
    id: 207,
    name: "Chuột Gaming DareU EM901 RGB",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-gaming-co-day-dareu-em908x-rgb_2.png",
    price: 499000,
    rating: 4.3, reviews: 200, isHot: false, discount: 10, oldPrice: 550000,
    type: "Chuột", brand: "DareU", connection: "Wireless", led: "RGB", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Gaming"
  },
  {
    id: 208,
    name: "Chuột Apple Magic Mouse 2",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_89_1__1.png",
    price: 1990000,
    rating: 4.0, reviews: 40, isHot: false, discount: 0, oldPrice: null,
    type: "Chuột", brand: "Apple", connection: "Wireless", led: "None", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Office"
  },
  {
    id: 209,
    name: "Chuột Gaming SteelSeries Rival 3",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_267_1_.png",
    price: 790000,
    rating: 4.5, reviews: 35, isHot: false, discount: 0, oldPrice: null,
    type: "Chuột", brand: "SteelSeries", connection: "Wired", led: "RGB", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Gaming"
  },
  {
    id: 210,
    name: "Chuột Corsair Harpoon RGB Wireless",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-gaming-corsair-harpoon-pro-rgb-1.png",
    price: 990000,
    rating: 4.4, reviews: 50, isHot: false, discount: 5, oldPrice: 1050000,
    type: "Chuột", brand: "Corsair", connection: "Wireless", led: "RGB", keycap: "N/A",
    sizeType: "N/A", layoutType: "N/A", purposeType: "Gaming"
  },

  // ==================== BÀN PHÍM ====================
  {
    id: 101,
    name: "Bàn phím không dây Hyper Hyperspace HS2310US",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_-_2025-05-07t153138.532.png",
    price: 990000,
    rating: 4.5, reviews: 10, isHot: true, discount: 10, oldPrice: 1100000,
    type: "Bàn phím", brand: "HyperWork", connection: "Wireless", led: "None", keycap: "PBT",
    sizeType: "TKL", layoutType: "ANSI", purposeType: "Gaming"
  },
  {
    id: 102,
    name: "Bàn phím cơ E-DRA EK375 V2 Beta Blue Black",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_43_.png",
    price: 650000,
    rating: 4.2, reviews: 45, isHot: false, discount: 0, oldPrice: null,
    type: "Bàn phím", brand: "E-Dra", connection: "Wired", led: "Rainbow", keycap: "ABS",
    sizeType: "Fullsize", layoutType: "ISO", purposeType: "Gaming"
  },
  {
    id: 103,
    name: "Bàn phím không dây Philips SPK6338BS",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/b/a/ban-phim-khong-day-philips-spk6338bs.png",
    price: 450000,
    rating: 4.0, reviews: 20, isHot: false, discount: 0, oldPrice: null,
    type: "Bàn phím", brand: "Philips", connection: "Wireless", led: "None", keycap: "ABS",
    sizeType: "Mini", layoutType: "ANSI", purposeType: "Office"
  },
  {
    id: 104,
    name: "Bàn phím cơ không dây AULA F75 Đen",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_1__1.png",
    price: 1450000,
    rating: 4.9, reviews: 88, isHot: true, discount: 15, oldPrice: 1700000,
    type: "Bàn phím", brand: "Aula", connection: "Wireless", led: "RGB", keycap: "PBT",
    sizeType: "TKL", layoutType: "ANSI", purposeType: "Gaming"
  },
  {
    id: 105,
    name: "Bàn phím cơ không dây AULA F75 Trắng Xanh",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_-_2025-08-07t094931.764.png",
    price: 1490000,
    rating: 5.0, reviews: 32, isHot: true, discount: 0, oldPrice: null,
    type: "Bàn phím", brand: "Aula", connection: "Wireless", led: "RGB", keycap: "PBT",
    sizeType: "TKL", layoutType: "ANSI", purposeType: "Office"
  },
  {
    id: 106,
    name: "Bàn phím cơ không dây FL-Esports CMK75",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_-_2025-08-06t154441.677.png",
    price: 3200000,
    rating: 5.0, reviews: 15, isHot: true, discount: 5, oldPrice: 3350000,
    type: "Bàn phím", brand: "FL-Esports", connection: "Wireless", led: "RGB", keycap: "PBT",
    sizeType: "Fullsize", layoutType: "ANSI", purposeType: "Gaming"
  },
  {
    id: 107,
    name: "Bàn phím cơ E-DRA EK368L Alpha",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/b/a/ban-phim-co-e-dra-khong-day-ek368l-alpha-brown-switch_1_.png",
    price: 790000,
    rating: 4.4, reviews: 60, isHot: false, discount: 0, oldPrice: null,
    type: "Bàn phím", brand: "E-Dra", connection: "Wireless", led: "RGB", keycap: "ABS",
    sizeType: "Mini", layoutType: "ISO", purposeType: "Office"
  },
  {
    id: 108,
    name: "Bàn phím Bluetooth Logitech K250",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_-_2025-06-16t162636.887.png",
    price: 550000,
    rating: 4.3, reviews: 100, isHot: false, discount: 0, oldPrice: null,
    type: "Bàn phím", brand: "Logitech", connection: "Wireless", led: "None", keycap: "ABS",
    sizeType: "Mini", layoutType: "ISO", purposeType: "Office"
  },
  {
    id: 109,
    name: "Bàn phím cơ không dây Aula S100 Pro",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_-_2025-08-06t111146.036.png",
    price: 890000,
    rating: 4.6, reviews: 25, isHot: false, discount: 10, oldPrice: 990000,
    type: "Bàn phím", brand: "Aula", connection: "Wireless", led: "Rainbow", keycap: "ABS",
    sizeType: "Fullsize", layoutType: "ISO", purposeType: "Gaming"
  },
  {
    id: 110,
    name: "Bàn phím cơ không dây AULA F75 Ice Green",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_1_.png",
    price: 1450000,
    rating: 4.9, reviews: 40, isHot: true, discount: 0, oldPrice: null,
    type: "Bàn phím", brand: "Aula", connection: "Wireless", led: "RGB", keycap: "PBT",
    sizeType: "Mini", layoutType: "ISO", purposeType: "Gaming"
  },
  {
    id: 111,
    name: "Bàn phím cơ Akko 3068B Plus World Tour Tokyo",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_42__1.png",
    price: 1890000,
    rating: 4.8, reviews: 55, isHot: true, discount: 5, oldPrice: 1990000,
    type: "Bàn phím", brand: "Akko", connection: "Wireless", led: "RGB", keycap: "PBT",
    sizeType: "Mini", layoutType: "ANSI", purposeType: "Gaming"
  },
  {
    id: 112,
    name: "Bàn phím cơ DareU EK87 Multi-LED Black",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_51_.png",
    price: 399000,
    rating: 4.1, reviews: 150, isHot: false, discount: 0, oldPrice: null,
    type: "Bàn phím", brand: "DareU", connection: "Wired", led: "Rainbow", keycap: "ABS",
    sizeType: "TKL", layoutType: "ANSI", purposeType: "Gaming"
  },
  {
    id: 113,
    name: "Bàn phím cơ Keychron K2 Pro QMK/VIA",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/b/a/ban-phim-co-day-keychron-x2-red-backlight-den_1_.png",
    price: 2450000,
    rating: 4.9, reviews: 70, isHot: true, discount: 0, oldPrice: null,
    type: "Bàn phím", brand: "Keychron", connection: "Wireless", led: "RGB", keycap: "PBT",
    sizeType: "TKL", layoutType: "ANSI", purposeType: "Office"
  },
  {
    id: 114,
    name: "Bàn phím Gaming Razer BlackWidow V3",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/b/a/ban-phim-gaming-razer-ornata-v3.png",
    price: 2190000,
    rating: 4.7, reviews: 90, isHot: true, discount: 15, oldPrice: 2590000,
    type: "Bàn phím", brand: "Razer", connection: "Wired", led: "RGB", keycap: "ABS",
    sizeType: "Fullsize", layoutType: "ANSI", purposeType: "Gaming"
  },
  {
    id: 115,
    name: "Bàn phím cơ không dây FL-Esports OG98",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_-_2025-05-29t141650.678.png",
    price: 2850000,
    rating: 5.0, reviews: 12, isHot: false, discount: 0, oldPrice: null,
    type: "Bàn phím", brand: "FL-Esports", connection: "Wireless", led: "RGB", keycap: "PBT",
    sizeType: "Fullsize", layoutType: "ANSI", purposeType: "Office"
  },
  {
    id: 116,
    name: "Bàn phím Logitech G Pro X TKL Lightspeed",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_165_5_.png",
    price: 3590000,
    rating: 4.8, reviews: 30, isHot: true, discount: 10, oldPrice: 3990000,
    type: "Bàn phím", brand: "Logitech", connection: "Wireless", led: "RGB", keycap: "PBT",
    sizeType: "TKL", layoutType: "ANSI", purposeType: "Gaming"
  },

  // ==================== COMBO ====================
  {
    id: 301,
    name: "Combo bàn phím + Chuột Logitech MK240",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_77_.png",
    price: 550000,
    rating: 4.4, reviews: 120, isHot: true, discount: 0, oldPrice: null,
    type: "Combo", brand: "Logitech", connection: "Wireless", led: "None", keycap: "ABS",
    sizeType: "TKL", layoutType: "ISO", purposeType: "Office"
  },
  {
    id: 302,
    name: "Combo Rapoo 8000M",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/gaming_8_-_2025-07-03t152917.052.png",
    price: 390000,
    rating: 4.2, reviews: 80, isHot: false, discount: 0, oldPrice: null,
    type: "Combo", brand: "Rapoo", connection: "Wireless", led: "None", keycap: "ABS",
    sizeType: "TKL", layoutType: "ISO", purposeType: "Office"
  }
];