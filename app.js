/* 商品評論比較
 * 流程：讀資料 → 選類別 → 選兩款 → 算各面向的好評/負評數 → 畫圖 → 列評論（可篩選）
 * 類別和面向寫在 data.js 的 categories；沒寫的話預設成耳機的三個面向
 */
(function () {
  'use strict';

  // ---------- 預設面向（data.js 沒寫 categories 時用） ----------
  var DEFAULT_ASPECTS = [
    { aspect: 'sound',   label: '音質',   aliases: ['audio', '音效'] },
    { aspect: 'battery', label: '續航',   aliases: ['電池', '電量'] },
    { aspect: 'comfort', label: '舒適度', aliases: ['舒適', '配戴'] }
  ];
  var ASPECTS = [];   // 目前選到的類別的面向
  var SENTS = [
    { key: 'pos', label: '好評', aliases: ['pos', 'positive', '好評', '正面', '1', '+1'] },
    { key: 'neg', label: '負評', aliases: ['neg', 'negative', '負評', '負面', '-1'] }
  ];

  function findKey(list, value) {
    var v = String(value == null ? '' : value).trim().toLowerCase();
    for (var i = 0; i < list.length; i++) {
      if (list[i].aliases.indexOf(v) !== -1) return list[i].key;
    }
    return null;
  }
  function labelOf(list, key) {
    for (var i = 0; i < list.length; i++) if (list[i].key === key) return list[i].label;
    return key;
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function $(id) { return document.getElementById(id); }

  // ---------- 1. 讀資料並整理 ----------
  var raw = window.SITE_DATA;
  if (!raw || !raw.products || !raw.reviews || !raw.analysis) {
    var err = $('data-error');
    err.textContent = '讀不到資料：請確認 data/data.js 存在，而且裡面有 products、reviews、analysis 三個欄位。';
    err.hidden = false;
    $('pick-section').hidden = true;
    return;
  }

  // 類別：每個類別有自己的面向
  function makeAspects(list) {
    return list.map(function (a) {
      var key = String(a.aspect || a.key);
      var label = String(a.label || key);
      var aliases = [key, label].concat(a.aliases || []).map(function (x) { return String(x).trim().toLowerCase(); });
      return { key: key, label: label, aliases: aliases };
    });
  }
  var categories = (raw.categories && raw.categories.length ? raw.categories : [
    { category_id: 'default', category_name: '商品', aspects: DEFAULT_ASPECTS }
  ]).map(function (c) {
    return {
      id: String(c.category_id),
      name: String(c.category_name || c.category_id),
      note: c.note ? String(c.note) : '',
      aspects: makeAspects(c.aspects && c.aspects.length ? c.aspects : DEFAULT_ASPECTS)
    };
  });
  var categoryById = {};
  categories.forEach(function (c) { categoryById[c.id] = c; });

  var products = raw.products.map(function (p) {
    var cat = p.category_id && categoryById[String(p.category_id)] ? String(p.category_id) : categories[0].id;
    return { id: String(p.product_id), name: String(p.product_name || p.product_id), category: cat };
  });
  var productById = {};
  products.forEach(function (p) { productById[p.id] = p; });

  var reviews = raw.reviews.map(function (r) {
    return {
      id: String(r.review_id),
      productId: String(r.product_id),
      rating: Number(r.rating) || 0,
      title: String(r.title || ''),
      text: String(r.text || '')
    };
  });

  var reviewById = {};
  reviews.forEach(function (r) { reviewById[r.id] = r; });
  function aspectsOfReview(rid) {
    var r = reviewById[rid];
    var p = r && productById[r.productId];
    return p ? categoryById[p.category].aspects : null;
  }

  // 每則評論的標籤（同一面向＋同一評價只算一次；面向依該商品的類別判斷）
  var tagsByReview = {};
  var skipped = 0;
  raw.analysis.forEach(function (a) {
    var list0 = aspectsOfReview(String(a.review_id));
    var aspect = list0 ? findKey(list0, a.aspect) : null;
    var sent = findKey(SENTS, a.sentiment);
    if (!aspect || !sent) { skipped++; return; }
    var rid = String(a.review_id);
    var list = tagsByReview[rid] || (tagsByReview[rid] = []);
    var dup = list.some(function (t) { return t.aspect === aspect && t.sent === sent; });
    if (!dup) list.push({ aspect: aspect, sent: sent });
  });
  if (skipped) console.warn('有 ' + skipped + ' 筆分析結果的面向或評價看不懂，已略過。');

  // 照面向順序排標籤，顯示比較整齊
  Object.keys(tagsByReview).forEach(function (rid) {
    var list = aspectsOfReview(rid);
    tagsByReview[rid].sort(function (x, y) {
      return aspectIndex(list, x.aspect) - aspectIndex(list, y.aspect) || (x.sent === 'pos' ? -1 : 1);
    });
  });
  function aspectIndex(list, k) {
    for (var i = 0; i < list.length; i++) if (list[i].key === k) return i;
    return 99;
  }

  // ---------- 狀態 ----------
  var state = {
    cat: '',                   // 目前的類別
    a: '', b: '',              // 已比較的兩款
    filter: { product: 'all', aspect: 'all', sent: 'all' }
  };

  // ---------- 2. 選擇區 ----------
  var selA = $('select-a'), selB = $('select-b'), btn = $('compare-btn'), hint = $('pick-hint');

  function fillProductSelect(sel) {
    sel.innerHTML = '<option value="">請選擇</option>' + products.filter(function (p) {
      return p.category === state.cat;
    }).map(function (p) {
      return '<option value="' + esc(p.id) + '">' + esc(p.name) + '</option>';
    }).join('');
  }

  // 類別切換（只有一個類別就不顯示）
  var catRow = $('category-row');
  function renderCategoryButtons() {
    catRow.innerHTML = categories.map(function (c) {
      var on = c.id === state.cat;
      return '<button type="button" class="cat-btn' + (on ? ' is-on' : '') + '" role="radio" aria-checked="' + on +
        '" data-cat="' + esc(c.id) + '">' + esc(c.name) + '</button>';
    }).join('');
  }
  function setCategory(id) {
    state.cat = id;
    state.a = state.b = '';
    ASPECTS = categoryById[id].aspects;
    renderCategoryButtons();
    fillProductSelect(selA);
    fillProductSelect(selB);
    $('chart-section').hidden = true;
    $('review-section').hidden = true;
    hideTip();
    var note = categoryById[id].note;
    $('category-note').textContent = note;
    $('category-note').hidden = !note;
    syncPick();
  }
  catRow.addEventListener('click', function (e) {
    var b = e.target.closest('.cat-btn');
    if (b && b.getAttribute('data-cat') !== state.cat) setCategory(b.getAttribute('data-cat'));
  });
  $('category-field').hidden = categories.length < 2;

  function syncPick() {
    // 另一邊已選的商品不能重複選
    [[selA, selB.value], [selB, selA.value]].forEach(function (pair) {
      Array.prototype.forEach.call(pair[0].options, function (opt) {
        opt.disabled = opt.value !== '' && opt.value === pair[1];
      });
    });
    var ok = selA.value && selB.value && selA.value !== selB.value;
    btn.disabled = !ok;
    hint.textContent = ok ? '' : (!selA.value || !selB.value ? '請選兩款不同的商品。' : '兩邊不能選同一款。');
  }
  selA.addEventListener('change', syncPick);
  selB.addEventListener('change', syncPick);

  btn.addEventListener('click', function () {
    state.a = selA.value;
    state.b = selB.value;
    state.filter = { product: 'all', aspect: 'all', sent: 'all' };
    $('chart-section').hidden = false;
    $('review-section').hidden = false;
    renderChart();
    renderTable();
    fillFilters();
    renderReviews();
    $('chart-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // ---------- 3. 計算數量 ----------
  function countFor(productId) {
    var out = {};
    ASPECTS.forEach(function (a) { out[a.key] = { pos: 0, neg: 0 }; });
    reviews.forEach(function (r) {
      if (r.productId !== productId) return;
      (tagsByReview[r.id] || []).forEach(function (t) { out[t.aspect][t.sent]++; });
    });
    return out;
  }

  // ---------- 4. 圖表（SVG，好評往右、負評往左） ----------
  var chartEl = $('chart'), tip = $('tooltip');
  var lastWidth = 0;

  function renderChart() {
    var ids = [state.a, state.b];
    var counts = {};
    ids.forEach(function (id) { counts[id] = countFor(id); });

    var max = 1;
    ids.forEach(function (id) {
      ASPECTS.forEach(function (a) {
        max = Math.max(max, counts[id][a.key].pos, counts[id][a.key].neg);
      });
    });

    var W = Math.max(280, Math.floor(chartEl.clientWidth || 600));
    lastWidth = W;
    var cx = W / 2;
    var half = cx - 34;                 // 留空間給數字
    var topH = 22, groupHead = 28, labelH = 18, barH = 16, rowGap = 12;
    var rowH = labelH + barH + rowGap;
    var H = topH + ASPECTS.length * (groupHead + ids.length * rowH) + 4;

    var s = [];
    var aspectNames = ASPECTS.map(function (a) { return a.label; }).join('、');
    s.push('<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img" aria-label="兩款商品在' + esc(aspectNames) + '的好評與負評數量">');
    // 方向說明
    s.push('<text x="' + (cx - 8) + '" y="14" text-anchor="end" font-size="13" style="fill:var(--muted)">← 負評</text>');
    s.push('<text x="' + (cx + 8) + '" y="14" font-size="13" style="fill:var(--muted)">好評 →</text>');

    var y = topH;
    var groupTops = [];
    ASPECTS.forEach(function (asp) {
      groupTops.push(y);
      s.push('<text x="0" y="' + (y + 19) + '" font-size="15" font-weight="600" style="fill:var(--text)">' + esc(asp.label) + '</text>');
      y += groupHead;
      ids.forEach(function (pid) {
        var c = counts[pid][asp.key];
        var name = productById[pid] ? productById[pid].name : pid;
        s.push('<text x="0" y="' + (y + 13) + '" font-size="13" style="fill:var(--text-2)">' + esc(name) + '</text>');
        var by = y + labelH;
        s.push(bar('neg', c.neg, by));
        s.push(bar('pos', c.pos, by));
        // 點擊/滑過的範圍比長條大
        s.push(hit(pid, asp, 'neg', c.neg, 0, y, cx, labelH + barH + 4, name));
        s.push(hit(pid, asp, 'pos', c.pos, cx, y, W - cx, labelH + barH + 4, name));
        y += rowH;

        function bar(sent, n, by) {
          var len = n / max * half;
          var id = 'bar-' + pid + '-' + asp.key + '-' + sent;
          var out = '';
          if (n > 0) {
            var x0 = sent === 'pos' ? cx + 1 : cx - 1;          // 中線兩側留 2px
            var x1 = sent === 'pos' ? x0 + len : x0 - len;
            out += '<path class="bar" data-bar="' + esc(id) + '" d="' + roundedEnd(x0, x1, by, barH, 4) + '" style="fill:var(--' + sent + ')"></path>';
          }
          var tx = sent === 'pos' ? cx + 1 + len + 6 : cx - 1 - len - 6;
          out += '<text x="' + tx + '" y="' + (by + 12) + '" font-size="13" ' +
            (sent === 'pos' ? '' : 'text-anchor="end" ') +
            'style="font-variant-numeric: tabular-nums; fill:' + (n > 0 ? 'var(--text)' : 'var(--muted)') + '">' + n + '</text>';
          return out;
        }
      });
    });
    // 中線
    s.push('<line x1="' + cx + '" x2="' + cx + '" y1="' + (topH - 2) + '" y2="' + (H - 4) + '" style="stroke:var(--axis)" stroke-width="1"></line>');
    // 面向之間的分隔線
    groupTops.slice(1).forEach(function (gy) {
      s.push('<line x1="0" x2="' + W + '" y1="' + (gy - 2) + '" y2="' + (gy - 2) + '" style="stroke:var(--grid)" stroke-width="1"></line>');
    });
    s.push('</svg>');
    chartEl.innerHTML = s.join('');
  }

  // 只有外側一端是圓角（貼著中線那端是直的）
  function roundedEnd(x0, x1, y, h, r) {
    var dir = x1 >= x0 ? 1 : -1;
    var len = Math.abs(x1 - x0);
    r = Math.min(r, len, h / 2);
    var xe = x1 - dir * r;
    var sweep = dir === 1 ? 1 : 0;
    return 'M' + x0 + ',' + y +
      'H' + xe +
      'A' + r + ',' + r + ' 0 0 ' + sweep + ' ' + x1 + ',' + (y + r) +
      'V' + (y + h - r) +
      'A' + r + ',' + r + ' 0 0 ' + sweep + ' ' + xe + ',' + (y + h) +
      'H' + x0 + 'Z';
  }

  function hit(pid, asp, sent, n, x, y, w, h, name) {
    var label = name + '・' + asp.label + '・' + labelOf(SENTS, sent) + ' ' + n + ' 則';
    return '<rect class="hit" tabindex="0" role="button" aria-label="' + esc(label + '，看這些評論') + '"' +
      ' data-pid="' + esc(pid) + '" data-aspect="' + asp.key + '" data-sent="' + sent + '"' +
      ' data-bar="' + esc('bar-' + pid + '-' + asp.key + '-' + sent) + '" data-tip="' + esc(label) + '"' +
      ' x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="transparent"></rect>';
  }

  function setHover(barId) {
    chartEl.classList.toggle('has-hover', !!barId);
    Array.prototype.forEach.call(chartEl.querySelectorAll('.bar'), function (b) {
      b.classList.toggle('is-hover', b.getAttribute('data-bar') === barId);
    });
  }
  function showTip(text, x, y) {
    tip.textContent = text + '（點一下看評論）';
    tip.hidden = false;
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var left = Math.min(x + 12, window.innerWidth - tw - 8);
    var top = y - th - 12 < 8 ? y + 16 : y - th - 12;
    tip.style.left = Math.max(8, left) + 'px';
    tip.style.top = top + 'px';
  }
  function hideTip() { tip.hidden = true; setHover(null); }

  chartEl.addEventListener('pointermove', function (e) {
    var t = e.target.closest ? e.target.closest('.hit') : null;
    if (!t) { hideTip(); return; }
    setHover(t.getAttribute('data-bar'));
    showTip(t.getAttribute('data-tip'), e.clientX, e.clientY);
  });
  chartEl.addEventListener('pointerleave', hideTip);
  chartEl.addEventListener('focusin', function (e) {
    var t = e.target.closest('.hit');
    if (!t) return;
    var r = t.getBoundingClientRect();
    setHover(t.getAttribute('data-bar'));
    showTip(t.getAttribute('data-tip'), r.left + r.width / 2, r.top);
  });
  chartEl.addEventListener('focusout', hideTip);

  function pickBar(t) {
    state.filter = {
      product: t.getAttribute('data-pid'),
      aspect: t.getAttribute('data-aspect'),
      sent: t.getAttribute('data-sent')
    };
    hideTip();
    syncFilterInputs();
    renderReviews();
    $('review-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  chartEl.addEventListener('click', function (e) {
    var t = e.target.closest('.hit');
    if (t) pickBar(t);
  });
  chartEl.addEventListener('keydown', function (e) {
    var t = e.target.closest('.hit');
    if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pickBar(t); }
  });

  // 圖表區寬度改變時重畫（手機轉向、出現捲軸都會觸發）
  var resizeTimer;
  function maybeRedraw() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (!state.a || $('chart-section').hidden) return;
      if (Math.floor(chartEl.clientWidth) !== lastWidth) renderChart();
    }, 80);
  }
  if (window.ResizeObserver) new ResizeObserver(maybeRedraw).observe(chartEl);
  window.addEventListener('resize', maybeRedraw);

  // 表格檢視（看不清楚顏色或要抄數字時用）
  function renderTable() {
    var ids = [state.a, state.b];
    var counts = {};
    ids.forEach(function (id) { counts[id] = countFor(id); });
    var h = '<table><thead><tr><th>面向</th><th>商品</th><th class="num">好評</th><th class="num">負評</th></tr></thead><tbody>';
    ASPECTS.forEach(function (a) {
      ids.forEach(function (id) {
        h += '<tr><td>' + esc(a.label) + '</td><td>' + esc(productById[id].name) + '</td>' +
          '<td class="num">' + counts[id][a.key].pos + '</td><td class="num">' + counts[id][a.key].neg + '</td></tr>';
      });
    });
    $('chart-table').innerHTML = h + '</tbody></table>';
  }

  // ---------- 5. 評論區 ----------
  var fProduct = $('filter-product'), fAspect = $('filter-aspect'), fSent = $('filter-sent');

  function fillFilters() {
    fProduct.innerHTML = '<option value="all">兩款都看</option>' + [state.a, state.b].map(function (id) {
      return '<option value="' + esc(id) + '">' + esc(productById[id].name) + '</option>';
    }).join('');
    fAspect.innerHTML = '<option value="all">全部面向</option>' + ASPECTS.map(function (a) {
      return '<option value="' + a.key + '">' + esc(a.label) + '</option>';
    }).join('');
    fSent.innerHTML = '<option value="all">好評和負評</option>' + SENTS.map(function (s) {
      return '<option value="' + s.key + '">' + esc(s.label) + '</option>';
    }).join('');
    syncFilterInputs();
  }
  function syncFilterInputs() {
    fProduct.value = state.filter.product;
    fAspect.value = state.filter.aspect;
    fSent.value = state.filter.sent;
  }
  [fProduct, fAspect, fSent].forEach(function (el) {
    el.addEventListener('change', function () {
      state.filter = { product: fProduct.value, aspect: fAspect.value, sent: fSent.value };
      renderReviews();
    });
  });
  $('filter-reset').addEventListener('click', function () {
    state.filter = { product: 'all', aspect: 'all', sent: 'all' };
    syncFilterInputs();
    renderReviews();
  });

  function matches(r) {
    var f = state.filter;
    if (r.productId !== state.a && r.productId !== state.b) return false;
    if (f.product !== 'all' && r.productId !== f.product) return false;
    if (f.aspect === 'all' && f.sent === 'all') return true;
    // 同一個標籤要同時符合面向和評價
    return (tagsByReview[r.id] || []).some(function (t) {
      return (f.aspect === 'all' || t.aspect === f.aspect) && (f.sent === 'all' || t.sent === f.sent);
    });
  }

  // 啟動：預設第一個類別
  setCategory(categories[0].id);

  function stars(n) {
    var k = Math.max(0, Math.min(5, Math.round(n)));
    return '<span class="stars" aria-label="' + k + ' 顆星">' + '★★★★★'.slice(0, k) + '<span style="color:var(--axis)">' + '★★★★★'.slice(0, 5 - k) + '</span></span>';
  }

  function renderReviews() {
    var total = reviews.filter(function (r) { return r.productId === state.a || r.productId === state.b; }).length;
    var list = reviews.filter(matches);
    $('review-count').textContent = '顯示 ' + list.length + ' / ' + total + ' 則評論';
    if (!list.length) {
      $('review-list').innerHTML = '<li class="empty">沒有符合的評論。</li>';
      return;
    }
    $('review-list').innerHTML = list.map(function (r) {
      var tags = tagsByReview[r.id] || [];
      var tagHtml = tags.length ? tags.map(function (t) {
        return '<span class="tag tag-' + t.sent + '">' + esc(labelOf(ASPECTS, t.aspect)) + ' ' + esc(labelOf(SENTS, t.sent)) + '</span>';
      }).join('') : '<span class="tag tag-none">沒標到比較的面向</span>';
      return '<li class="review">' +
        '<div class="review-head"><span>' + esc(productById[r.productId] ? productById[r.productId].name : r.productId) + '</span>' + stars(r.rating) + '</div>' +
        (r.title ? '<p class="review-title">' + esc(r.title) + '</p>' : '') +
        '<p class="review-text">' + esc(r.text) + '</p>' +
        '<div class="tags">' + tagHtml + '</div>' +
        '<div class="review-id">評論 ID：' + esc(r.id) + '</div>' +
        '</li>';
    }).join('');
  }
})();
