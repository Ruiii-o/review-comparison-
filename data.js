/*
 * 範例資料（之後換成真實資料：用同樣的格式覆蓋這個檔案即可）
 *
 * products  商品：product_id, product_name
 * reviews   評論：review_id, product_id, rating(1-5), text(原文)
 * analysis  分析結果：review_id, aspect, sentiment
 *           aspect    可用 sound / battery / comfort（也接受 音質 / 續航 / 舒適度）
 *           sentiment 可用 pos / neg（也接受 好評 / 負評、positive / negative）
 *           一則評論可以有好幾筆，例如「音質好評」＋「舒適度負評」
 *
 * 注意：以下評論是自己寫的範例句，不是真實評論。
 */
window.SITE_DATA = {
  "products": [
    { "product_id": "SAMPLE-A01", "product_name": "範例耳機 A（頭戴式降噪）" },
    { "product_id": "SAMPLE-B02", "product_name": "範例耳機 B（頭戴式）" },
    { "product_id": "SAMPLE-C03", "product_name": "範例耳機 C（入耳式）" }
  ],
  "reviews": [
    { "review_id": "R-A01", "product_id": "SAMPLE-A01", "rating": 5, "text": "The sound is amazing, deep bass and clear vocals. Battery easily lasts my whole week of commuting." },
    { "review_id": "R-A02", "product_id": "SAMPLE-A01", "rating": 4, "text": "Great sound quality, but my ears hurt after wearing them for two hours." },
    { "review_id": "R-A03", "product_id": "SAMPLE-A01", "rating": 2, "text": "Battery dies after about 6 hours, much less than advertised." },
    { "review_id": "R-A04", "product_id": "SAMPLE-A01", "rating": 5, "text": "Very comfortable, I forget I'm wearing them. Audio is crisp." },
    { "review_id": "R-A05", "product_id": "SAMPLE-A01", "rating": 3, "text": "Sound is okay but a bit muddy at high volume." },
    { "review_id": "R-A06", "product_id": "SAMPLE-A01", "rating": 4, "text": "Charges fast and the battery holds up on long flights." },
    { "review_id": "R-A07", "product_id": "SAMPLE-A01", "rating": 2, "text": "The headband is too tight and presses on my head." },
    { "review_id": "R-A08", "product_id": "SAMPLE-A01", "rating": 5, "text": "Best sounding headphones I've owned at this price." },
    { "review_id": "R-A09", "product_id": "SAMPLE-A01", "rating": 1, "text": "Stopped connecting to my phone after a week." },
    { "review_id": "R-A10", "product_id": "SAMPLE-A01", "rating": 4, "text": "Soft ear cushions, comfortable for long study sessions. Battery is fine." },

    { "review_id": "R-B01", "product_id": "SAMPLE-B02", "rating": 4, "text": "Battery life is incredible, I charge it maybe once every two weeks." },
    { "review_id": "R-B02", "product_id": "SAMPLE-B02", "rating": 2, "text": "Sound feels flat, vocals are not clear." },
    { "review_id": "R-B03", "product_id": "SAMPLE-B02", "rating": 5, "text": "Lightweight and comfortable even with glasses." },
    { "review_id": "R-B04", "product_id": "SAMPLE-B02", "rating": 3, "text": "Comfortable, but the sound lacks bass." },
    { "review_id": "R-B05", "product_id": "SAMPLE-B02", "rating": 4, "text": "Good battery and decent sound for the price." },
    { "review_id": "R-B06", "product_id": "SAMPLE-B02", "rating": 2, "text": "Ear cups get hot and sweaty after an hour." },
    { "review_id": "R-B07", "product_id": "SAMPLE-B02", "rating": 5, "text": "Battery lasts forever and they fold up nicely." },
    { "review_id": "R-B08", "product_id": "SAMPLE-B02", "rating": 3, "text": "Treble is harsh and tiring to listen to." },
    { "review_id": "R-B09", "product_id": "SAMPLE-B02", "rating": 4, "text": "Clear sound for podcasts and calls." },
    { "review_id": "R-B10", "product_id": "SAMPLE-B02", "rating": 1, "text": "Battery drains fast even when turned off." },

    { "review_id": "R-C01", "product_id": "SAMPLE-C03", "rating": 5, "text": "Tiny earbuds with surprisingly rich sound." },
    { "review_id": "R-C02", "product_id": "SAMPLE-C03", "rating": 2, "text": "They keep falling out of my ears and hurt after a while." },
    { "review_id": "R-C03", "product_id": "SAMPLE-C03", "rating": 4, "text": "The case gives several extra charges, battery is great." },
    { "review_id": "R-C04", "product_id": "SAMPLE-C03", "rating": 3, "text": "Sound is fine but the battery only lasts 4 hours per charge." },
    { "review_id": "R-C05", "product_id": "SAMPLE-C03", "rating": 4, "text": "Comfortable for running." },
    { "review_id": "R-C06", "product_id": "SAMPLE-C03", "rating": 2, "text": "Bass is weak and the sound distorts." }
  ],
  "analysis": [
    { "review_id": "R-A01", "aspect": "sound",   "sentiment": "pos" },
    { "review_id": "R-A01", "aspect": "battery", "sentiment": "pos" },
    { "review_id": "R-A02", "aspect": "sound",   "sentiment": "pos" },
    { "review_id": "R-A02", "aspect": "comfort", "sentiment": "neg" },
    { "review_id": "R-A03", "aspect": "battery", "sentiment": "neg" },
    { "review_id": "R-A04", "aspect": "comfort", "sentiment": "pos" },
    { "review_id": "R-A04", "aspect": "sound",   "sentiment": "pos" },
    { "review_id": "R-A05", "aspect": "sound",   "sentiment": "neg" },
    { "review_id": "R-A06", "aspect": "battery", "sentiment": "pos" },
    { "review_id": "R-A07", "aspect": "comfort", "sentiment": "neg" },
    { "review_id": "R-A08", "aspect": "sound",   "sentiment": "pos" },
    { "review_id": "R-A10", "aspect": "comfort", "sentiment": "pos" },
    { "review_id": "R-A10", "aspect": "battery", "sentiment": "pos" },

    { "review_id": "R-B01", "aspect": "battery", "sentiment": "pos" },
    { "review_id": "R-B02", "aspect": "sound",   "sentiment": "neg" },
    { "review_id": "R-B03", "aspect": "comfort", "sentiment": "pos" },
    { "review_id": "R-B04", "aspect": "comfort", "sentiment": "pos" },
    { "review_id": "R-B04", "aspect": "sound",   "sentiment": "neg" },
    { "review_id": "R-B05", "aspect": "battery", "sentiment": "pos" },
    { "review_id": "R-B05", "aspect": "sound",   "sentiment": "pos" },
    { "review_id": "R-B06", "aspect": "comfort", "sentiment": "neg" },
    { "review_id": "R-B07", "aspect": "battery", "sentiment": "pos" },
    { "review_id": "R-B08", "aspect": "sound",   "sentiment": "neg" },
    { "review_id": "R-B09", "aspect": "sound",   "sentiment": "pos" },
    { "review_id": "R-B10", "aspect": "battery", "sentiment": "neg" },

    { "review_id": "R-C01", "aspect": "sound",   "sentiment": "pos" },
    { "review_id": "R-C02", "aspect": "comfort", "sentiment": "neg" },
    { "review_id": "R-C03", "aspect": "battery", "sentiment": "pos" },
    { "review_id": "R-C04", "aspect": "sound",   "sentiment": "pos" },
    { "review_id": "R-C04", "aspect": "battery", "sentiment": "neg" },
    { "review_id": "R-C05", "aspect": "comfort", "sentiment": "pos" },
    { "review_id": "R-C06", "aspect": "sound",   "sentiment": "neg" }
  ]
};
