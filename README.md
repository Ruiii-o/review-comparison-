# 商品評論比較網站

## 怎麼打開
直接雙擊 `index.html` 就能用，不需要架伺服器。
（資料放在 `data/data.js`，用 `<script>` 載入，所以本機開檔也讀得到。）

## 檔案
| 檔案 | 用途 |
|---|---|
| `index.html` | 頁面骨架：選擇區、圖表區、評論區 |
| `style.css` | 樣式（手機、電腦、深色模式都支援） |
| `app.js` | 讀資料 → 選兩款 → 算數量 → 畫圖 → 列評論和篩選 |
| `data/data.js` | 資料：耳機 4 款、鍵盤 2 款（Amazon Reviews 2023） |

## 資料格式（給整合、資料組、分析組）
```js
window.SITE_DATA = {
  "categories": [
    { "category_id": "headphone", "category_name": "耳機",
      "aspects": [ { "aspect": "sound", "label": "音質" }, { "aspect": "battery", "label": "續航" }, { "aspect": "comfort", "label": "舒適度" } ] },
    { "category_id": "keyboard", "category_name": "鍵盤",
      "aspects": [ { "aspect": "feel", "label": "手感" }, { "aspect": "comfort", "label": "舒適度" }, { "aspect": "durability", "label": "耐用做工" } ],
      "note": "（可省略）顯示在圖表上方的說明" }
  ],
  "products": [ { "product_id": "...", "product_name": "...", "category_id": "headphone" } ],
  "reviews":  [ { "review_id": "...", "product_id": "...", "rating": 5, "title": "評論標題（可省略）", "text": "評論原文" } ],
  "analysis": [ { "review_id": "...", "aspect": "sound", "sentiment": "pos" } ]
};
```
- `categories` 可省略，省略時全部商品放同一類，面向預設為音質／續航／舒適度
- 每個類別可以有自己的面向；analysis 的 `aspect` 填該類別面向的 `aspect` 或 `label` 都可以（例如 `feel` 或 `手感`）
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
- 先選類別（耳機／鍵盤），再選兩款（不能選同一款），按「比較」
- 各面向的好評／負評長條圖：好評往右、負評往左，滑過顯示數字
- 點長條 → 評論區自動篩成那款耳機、那個面向、好評或負評
- 評論區可依商品、面向、評價篩選；每則顯示星等、原文、標籤、評論 ID
- 「用表格看數字」給看不清顏色或要抄數字的人
- 沒被標到任何面向的評論，會顯示「沒標到比較的面向」

## 要加新類別或新面向
在 data.js 的 `categories` 加一個類別或面向，商品的 `category_id` 對上就好，不用改程式。
