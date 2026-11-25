/*
 * 顯示用名稱（只影響網站上看到的文字，不影響分析資料）
 * data.js 重新產生時不會蓋到這個檔案；新增商品或類別時，在這裡補上中文名稱和簡稱即可。
 * 沒寫到的類別或商品，會直接用 data.js 裡的名稱。
 */
window.SITE_LABELS = {
  // 類別分組（下拉選單裡的分組順序）
  "groups": ["音訊", "電腦周邊", "穿戴裝置", "攝影", "影音家電", "配件"],

  // 類別：中文名稱、所屬分組
  "categories": {
    "headphones":                { "name": "耳機（組上精選）", "group": "音訊" },
    "electronic_f7d92acc0667a8": { "name": "入耳式耳機",       "group": "音訊" },
    "electronic_430fe46f1bc21d": { "name": "頭戴式耳機",       "group": "音訊" },
    "electronic_516f2a5f4baeea": { "name": "藍牙喇叭",         "group": "音訊" },
    "keyboard":                  { "name": "鍵盤",             "group": "電腦周邊" },
    "electronic_547155c18e0327": { "name": "筆記型電腦",       "group": "電腦周邊" },
    "electronic_2d11db339e45c3": { "name": "智慧手錶",         "group": "穿戴裝置" },
    "electronic_92aa526719924d": { "name": "手環錶帶",         "group": "穿戴裝置" },
    "electronic_d5ee651e435314": { "name": "數位相機",         "group": "攝影" },
    "electronic_4c399c9e7e653c": { "name": "攝影背景布",       "group": "攝影" },
    "electronic_1dd56569f88ed4": { "name": "電視天線",         "group": "影音家電" },
    "electronic_41baf3ded3a5ca": { "name": "遙控器與配件",     "group": "影音家電" },
    "electronic_a1b7132494fa4e": { "name": "平板保護殼",       "group": "配件" },
    "electronic_740782dd90d5b4": { "name": "轉接頭",           "group": "配件" }
  },

  // 商品簡稱（選單、圖表、卡片用；完整名稱會顯示在卡片小字）
  "products": {
    "B07PXGQC1Q": "AirPods 2",
    "B0BVYGWJWM": "AirPods Pro 2",
    "B08DBDSVBC": "Sony WH-1000XM4",
    "B0BH6V8TTG": "Bose QuietComfort 45",
    "B002MMY4WY": "Logitech K350",
    "B081C4XWXZ": "Microsoft Ergonomic 4000",
    "B06XKRXLDR": "KHOMO iPad 2/3/4 保護殼",
    "B084HR4X5P": "Dteck iPad 9.7 吋皮套",
    "B079ZNCN64": "JLab JBuds Pro",
    "B0913F9PD5": "Samsung Galaxy Buds Pro",
    "B07L8YT6PG": "ISSUNTEX 棉布背景布",
    "B07CN13QB3": "PartyDelight 亮片背景布",
    "B07DBYS7DG": "Akwox Apple TV 遙控器套",
    "B07C64RPH5": "Xfinity XR15 語音遙控器",
    "B08SCLGXRV": "YOUKEX Fitbit 尼龍錶帶",
    "B01N1TCT1Z": "AK Fitbit Alta HR 皮錶帶",
    "B07X2586Y5": "DOSS SoundBox Pro+",
    "B0BJZ8X96P": "Sonos One SL 雙件組",
    "B0BL78QGLK": "WINONLY 睡眠頭帶耳機",
    "B094ZNRZMD": "Perytong 睡眠頭帶耳機",
    "B08157248B": "MacBook Air 2019",
    "B09YRY6QCX": "ASUS E410",
    "B00Q7OVXMW": "Samsung WB350F",
    "B001SER460": "Canon PowerShot D10",
    "B07RVLLCP4": "Mohu Curve 50 室內天線",
    "B00KYKYLZQ": "1byone 室外電視天線",
    "B00JLF73VE": "CKITZE 瑞士插頭轉接頭",
    "B0089GXGWQ": "BlastCase 30-pin 延長轉接",
    "B01JII2ADE": "ASUS ZenWatch 2",
    "B0BHFX8L75": "Google Pixel Watch"
  }
};
