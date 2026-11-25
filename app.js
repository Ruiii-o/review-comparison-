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
      id: String(c.category_id || c.key),
      name: String(c.category_name || c.label || c.category_id || c.key),
      note: c.note ? String(c.note) : '',
      aspects: makeAspects(c.aspects && c.aspects.length ? c.aspects : DEFAULT_ASPECTS)
    };
  });
  var categoryById = {};
  categories.forEach(function (c) { categoryById[c.id] = c; });

  // 顯示用名稱（data/labels.js，可省略）：類別中文名、分組、商品簡稱
  var LABELS = window.SITE_LABELS || {};
  var catLabels = LABELS.categories || {}, productLabels = LABELS.products || {};
  var groupOrder = (LABELS.groups || []).slice();
  categories.forEach(function (c, i) {
    var l = catLabels[c.id] || {};
    if (l.name) c.name = String(l.name);
    c.group = l.group ? String(l.group) : '其他';
    c.order = Object.keys(catLabels).indexOf(c.id);
    if (c.order < 0) c.order = 1000 + i;
    if (groupOrder.indexOf(c.group) < 0) groupOrder.push(c.group);
  });
  categories.sort(function (x, y) {
    return groupOrder.indexOf(x.group) - groupOrder.indexOf(y.group) || x.order - y.order;
  });

  var products = raw.products.map(function (p) {
    var categoryValue = p.category_id || p.category;
    var cat = categoryValue && categoryById[String(categoryValue)] ? String(categoryValue) : categories[0].id;
    var id = String(p.product_id);
    var full = String(p.product_name || p.display_name || id);
    return { id: id, name: String(productLabels[id] || p.display_name || full), fullName: full, category: cat };
  });
  var productById = {};
  $('source-note').textContent = (raw.metadata && raw.metadata.warning) || 'AI 分析可能誤判，僅供參考。';
  $('stat-chip').textContent = raw.products.length + ' 款商品・' + categories.length + ' 個類別';
  products.forEach(function (p) { productById[p.id] = p; });

  var reviews = [], reviewById = {}, tagsByReview = {}, statusesByReview = {};
  function aspectsOfReview(rid) {
    var r = reviewById[rid], product = r && productById[r.productId];
    return product ? categoryById[product.category].aspects : null;
  }
  function installDataset(rows, analysisRows, statusRows) {
    reviews = []; reviewById = {}; tagsByReview = {}; statusesByReview = {};
    rows.forEach(function(r) {
      var id=String(r.review_id), pid=String(r.product_id);
      if (!id || reviewById[id] || !productById[pid]) throw new Error('評論ID重複或商品ID無法對應。');
      var item={id:id,productId:pid,rating:Number(r.rating)||0,title:String(r.title||''),text:String(r.text||'')};
      reviews.push(item);reviewById[id]=item;
    });
    analysisRows.forEach(function(a) {
      var rid=String(a.review_id), r=reviewById[rid];
      var list0=aspectsOfReview(rid), aspect=list0 && findKey(list0,a.aspect), sent=findKey(SENTS,a.sentiment);
      if (!r || String(a.product_id)!==r.productId || !aspect || !sent) throw new Error('分析與原文、商品或面向對不上，已停止顯示。');
      var list=tagsByReview[rid] || (tagsByReview[rid]=[]);
      if (!list.some(function(t){return t.aspect===aspect && t.sent===sent;}))list.push({aspect:aspect,sent:sent});
    });
    statusRows.forEach(function(s) {
      var rid=String(s.review_id),r=reviewById[rid];
      if (!r || String(s.product_id)!==r.productId)throw new Error('分析狀態與原文ID對不上。');
      (statusesByReview[rid] || (statusesByReview[rid]=[])).push(s);
    });
    Object.keys(tagsByReview).forEach(function(rid) {
      var list=aspectsOfReview(rid);
      tagsByReview[rid].sort(function(x,y){return aspectIndex(list,x.aspect)-aspectIndex(list,y.aspect)||(x.sent==='pos'?-1:1);});
    });
  }
  function aspectIndex(list,k) {for(var i=0;i<list.length;i++)if(list[i].key===k)return i;return 99;}
  try { installDataset(raw.reviews,raw.analysis,raw.statuses||[]); }
  catch(error) {
    $('data-error').textContent=error.message;$('data-error').hidden=false;$('pick-section').hidden=true;return;
  }
  var shardPromises = {}, comparisonRequest = 0, loading = false;
  function loadProduct(pid) {
    var cached = window.SITE_PRODUCT_DATA && window.SITE_PRODUCT_DATA[pid];
    if(cached) return String(cached.product_id)===pid ? Promise.resolve(cached) : Promise.reject(new Error('商品分卷ID錯誤。'));
    if(shardPromises[pid]) return shardPromises[pid];
    shardPromises[pid]=new Promise(function(resolve,reject) {
      var path=raw.product_files[pid];
      if(!path || !/^data\/products\/[a-f0-9]+\.js$/.test(path)) {reject(new Error('找不到這款商品的評論檔案。'));return;}
      var script=document.createElement('script');script.src=path;
      script.onload=function(){
        var data=window.SITE_PRODUCT_DATA && window.SITE_PRODUCT_DATA[pid];
        if(!data || String(data.product_id)!==pid || !Array.isArray(data.reviews) || !Array.isArray(data.analysis)){reject(new Error('商品評論檔案內容不完整。'));return;}
        resolve(data);
      };
      script.onerror=function(){script.remove();reject(new Error('商品評論載入失敗，請稍後再按比較重試。'));};
      document.head.appendChild(script);
    }).catch(function(error){delete shardPromises[pid];throw error;});
    return shardPromises[pid];
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

  // 類別切換：下拉選單，依分組排列（只有一個類別就不顯示）
  var catSel = $('category-select');
  (function fillCategorySelect() {
    var html = '';
    groupOrder.forEach(function (g) {
      var list = categories.filter(function (c) { return c.group === g; });
      if (!list.length) return;
      html += '<optgroup label="' + esc(g) + '">' + list.map(function (c) {
        var n = products.filter(function (p) { return p.category === c.id; }).length;
        return '<option value="' + esc(c.id) + '">' + esc(c.name) + '（' + n + ' 款）</option>';
      }).join('') + '</optgroup>';
    });
    catSel.innerHTML = html;
  })();
  function setCategory(id) {
    comparisonRequest++; loading = false; setLoading(false);
    state.cat = id;
    state.a = state.b = '';
    ASPECTS = categoryById[id].aspects;
    catSel.value = id;
    fillProductSelect(selA);
    fillProductSelect(selB);
    // 只有兩款時直接幫忙選好
    if (selA.options.length === 3) { selA.selectedIndex = 1; selB.selectedIndex = 2; }
    $('chart-section').hidden = true;
    $('review-section').hidden = true;
    hideTip();
    var note = categoryById[id].note;
    $('category-note').textContent = note;
    $('category-note').hidden = !note;
    $('aspect-preview').textContent = '比較面向：' + ASPECTS.map(function (a) { return a.label; }).join('、');
    syncPick();
  }
  catSel.addEventListener('change', function () { if (catSel.value !== state.cat) setCategory(catSel.value); });
  $('category-field').hidden = categories.length < 2;
  function setLoading(on) {
    hint.classList.toggle('is-loading', !!on);
  }

  function syncPick() {
    // 另一邊已選的商品不能重複選
    [[selA, selB.value], [selB, selA.value]].forEach(function (pair) {
      Array.prototype.forEach.call(pair[0].options, function (opt) {
        opt.disabled = opt.value !== '' && opt.value === pair[1];
      });
    });
    var ok = selA.value && selB.value && selA.value !== selB.value;
    btn.disabled = !ok || loading;
    hint.textContent = ok ? '' : (!selA.value || !selB.value ? '請選兩款不同的商品。' : '兩邊不能選同一款。');
  }
  selA.addEventListener('change', syncPick);
  selB.addEventListener('change', syncPick);

  function displayComparison(a,b) {
    state.a=a;state.b=b;state.filter={product:'all',aspect:'all',sent:'all'};
    $('chart-section').hidden=false;$('review-section').hidden=false;
    renderSummary();renderChart();renderTable();fillFilters();renderReviews();
    $('chart-section').scrollIntoView({behavior:'smooth',block:'start'});
  }
  btn.addEventListener('click',function() {
    var a=selA.value,b=selB.value,cat=state.cat;
    if (!a || !b || a===b || productById[a].category!==cat || productById[b].category!==cat)return;
    if (!raw.product_files) {displayComparison(a,b);return;}
    var request=++comparisonRequest, succeeded=false;loading=true;btn.disabled=true;hint.textContent='正在讀取這兩款商品的評論…';setLoading(true);
    $('chart-section').hidden=true;$('review-section').hidden=true;
    Promise.all([loadProduct(a),loadProduct(b)]).then(function(pair) {
      if (request!==comparisonRequest || state.cat!==cat || selA.value!==a || selB.value!==b)return;
      installDataset(pair[0].reviews.concat(pair[1].reviews),pair[0].analysis.concat(pair[1].analysis),(pair[0].statuses||[]).concat(pair[1].statuses||[]));
      displayComparison(a,b);
      succeeded=true;
    }).catch(function(error) {
      if(request===comparisonRequest)hint.textContent=error.message;
    }).finally(function() {
      if(request===comparisonRequest) {loading=false;setLoading(false);btn.disabled=!(selA.value&&selB.value&&selA.value!==selB.value);if(succeeded)hint.textContent='';}
    });
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

  // ---------- 結論卡片 ----------
  function statsFor(pid) {
    var rs = reviews.filter(function (r) { return r.productId === pid; });
    var c = countFor(pid), pos = 0, neg = 0, best = null, worst = null;
    ASPECTS.forEach(function (a) {
      pos += c[a.key].pos; neg += c[a.key].neg;
      if (c[a.key].pos > 0 && (!best || c[a.key].pos > c[best.key].pos)) best = a;
      if (c[a.key].neg > 0 && (!worst || c[a.key].neg > c[worst.key].neg)) worst = a;
    });
    var rated = rs.filter(function (r) { return r.rating > 0; });
    var avg = rated.length ? rated.reduce(function (t, r) { return t + r.rating; }, 0) / rated.length : 0;
    return { n: rs.length, avg: avg, pos: pos, neg: neg, best: best, worst: worst, c: c };
  }
  function renderSummary() {
    var html = [state.a, state.b].map(function (pid, i) {
      var p = productById[pid], st = statsFor(pid);
      var share = st.pos + st.neg ? Math.round(st.pos / (st.pos + st.neg) * 100) : null;
      return '<article class="sum-card">' +
        '<p class="sum-kicker">商品 ' + (i + 1) + '</p>' +
        '<h3 class="sum-name">' + esc(p.name) + '</h3>' +
        '<p class="sum-full" title="' + esc(p.fullName) + '">' + esc(p.fullName) + '</p>' +
        '<div class="sum-stats">' +
          '<div><span class="sum-num">' + (st.avg ? st.avg.toFixed(1) : '–') + '</span><span class="sum-unit">平均星等</span></div>' +
          '<div><span class="sum-num">' + st.n + '</span><span class="sum-unit">則評論</span></div>' +
          '<div><span class="sum-num">' + (share === null ? '–' : share + '%') + '</span><span class="sum-unit">面向好評比例</span></div>' +
        '</div>' +
        '<ul class="sum-points">' +
          '<li><span class="dot dot-pos"></span>最受好評：' + (st.best ? esc(st.best.label) + '（' + st.c[st.best.key].pos + ' 則）' : '尚無') + '</li>' +
          '<li><span class="dot dot-neg"></span>最多抱怨：' + (st.worst ? esc(st.worst.label) + '（' + st.c[st.worst.key].neg + ' 則）' : '尚無') + '</li>' +
        '</ul>' +
      '</article>';
    }).join('');
    $('summary').innerHTML = html;
  }

  // 每個面向：好評比例較高的那款（兩款都有被提到、比例不同才標）
  function winnerOf(counts, key) {
    var a = counts[state.a][key], b = counts[state.b][key];
    var ta = a.pos + a.neg, tb = b.pos + b.neg;
    if (!ta || !tb) return null;
    var ra = a.pos / ta, rb = b.pos / tb;
    if (Math.abs(ra - rb) < 1e-9) return null;
    return ra > rb ? state.a : state.b;
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
      var win = winnerOf(counts, asp.key);
      s.push('<text x="0" y="' + (y + 19) + '" font-size="15" font-weight="600" style="fill:var(--text)">' + esc(asp.label) + '</text>');
      y += groupHead;
      ids.forEach(function (pid) {
        var c = counts[pid][asp.key];
        var name = productById[pid] ? productById[pid].name : pid;
        s.push('<text x="0" y="' + (y + 13) + '" font-size="13" style="fill:var(--text-2)">' + esc(name) +
          (win === pid ? '<tspan dx="6" font-weight="600" style="fill:var(--win)">' + (W < 560 ? '★' : '★ 好評比例較高') + '</tspan>' : '') + '</text>');
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

  $('review-list').addEventListener('click', function (e) {
    var b = e.target.closest('.more-btn');
    if (!b) return;
    var t = b.previousElementSibling, open = t.classList.toggle('is-clamped') === false;
    b.textContent = open ? '收合' : '展開全文';
    b.setAttribute('aria-expanded', String(open));
  });

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
      var statusRows = statusesByReview[r.id] || [];
      var statusHtml = statusRows.length ? '<details class="status-box"><summary>分析來源</summary>' + statusRows.map(function(s) {
        return '<div class="status-line">' + esc(labelOf(ASPECTS,s.aspect)) + '：' + esc(s.provenance || s.status) + (s.review_notes && s.review_notes.length ? '；待確認：' + esc(s.review_notes.join('；')) : '') + '</div>';
      }).join('') + '</details>' : '';
      return '<li class="review">' +
        '<div class="review-head"><span>' + esc(productById[r.productId] ? productById[r.productId].name : r.productId) + '</span>' + stars(r.rating) + '</div>' +
        (r.title ? '<p class="review-title">' + esc(r.title) + '</p>' : '') +
        '<p class="review-text' + (r.text.length > 320 ? ' is-long is-clamped' : '') + '">' + esc(r.text) + '</p>' +
        (r.text.length > 320 ? '<button type="button" class="more-btn" aria-expanded="false">展開全文</button>' : '') +
        '<div class="tags">' + tagHtml + '</div>' +
        statusHtml +
        '<div class="review-id">評論 ID：' + esc(r.id) + '</div>' +
        '</li>';
    }).join('');
  }
})();
