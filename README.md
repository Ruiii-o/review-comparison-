# 耳機評論比較網站（第一版）

## 怎麼打開
直接雙擊 `index.html` 就能用，不需要架伺服器。
（資料放在 `data/data.js`，用 `<script>` 載入，所以本機開檔也讀得到。）

## 檔案
| 檔案 | 用途 |
|---|---|
| `index.html` | 頁面骨架：選擇區、圖表區、評論區 |
| `style.css` | 樣式（手機、電腦、深色模式都支援） |
| `app.js` | 讀資料 → 選兩款 → 算數量 → 畫圖 → 列評論和篩選 |
| `data/data.js` | 資料。現在是範例，之後覆蓋成真實資料 |

## 資料格式（給整合、資料組、分析組）
```js
window.SITE_DATA = {
  "products": [ { "product_id": "...", "product_name": "..." } ],
  "reviews":  [ { "review_id": "...", "product_id": "...", "rating": 5, "title": "評論標題（可省略）", "text": "評論原文" } ],
  "analysis": [ { "review_id": "...", "aspect": "sound", "sentiment": "pos" } ]
};
```
- `aspect`：`sound` / `battery` / `comfort`，也接受 `音質` / `續航` / `舒適度`
- `sentiment`：`pos` / `neg`，也接受 `好評` / `負評`、`positive` / `negative`
- 一則評論可以有好幾筆 analysis，例如「音質好評」＋「舒適度負評」
- `review_id` 一定要跟 reviews 裡的對得上，不然那則評論不會被算進圖表
- 圖表上的數字由網站自己加總，不需要另外給

## 用 Python 產生 data.js
```python
import json
data = {"products": products, "reviews": reviews, "analysis": analysis}
with open("data/data.js", "w", encoding="utf-8") as f:
    f.write("window.SITE_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")
```

## 已完成的功能
- 選兩款耳機（不能選同一款），按「比較」
- 三個面向的好評／負評長條圖：好評往右、負評往左，滑過顯示數字
- 點長條 → 評論區自動篩成那款耳機、那個面向、好評或負評
- 評論區可依商品、面向、評價篩選；每則顯示星等、原文、標籤、評論 ID
- 「用表格看數字」給看不清顏色或要抄數字的人
- 沒被標到任何面向的評論，會顯示「沒標到三個面向」

## 要加新面向
在 `app.js` 最上面的 `ASPECTS` 加一行就好，圖表和篩選會自動多出來。
