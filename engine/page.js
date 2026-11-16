// Shared page behavior: the text size control in the lower right corner, and the search box in a
// course's top bar.
(() => {
  // ---------- Text size ----------
  // Three sizes. The choice is kept in this browser, and the page head applies it before drawing.
  const SIZES = [['small', 'Small text'], ['', 'Standard text'], ['large', 'Large text']];
  const root = document.documentElement;
  const box = document.createElement('div');
  box.className = 'textsize';
  box.setAttribute('role', 'group');
  box.setAttribute('aria-label', 'Text size');
  box.innerHTML = SIZES.map(([v, label], i) =>
    `<button type="button" data-v="${v}" aria-label="${label}" title="${label}"><span class="a${i}">A</span></button>`).join('');
  document.body.appendChild(box);
  const mark = () => box.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String((root.dataset.text || '') === b.dataset.v)));
  box.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.v) root.dataset.text = b.dataset.v; else delete root.dataset.text;
    try { if (b.dataset.v) localStorage.setItem('text-size', b.dataset.v); else localStorage.removeItem('text-size'); } catch (err) {}
    mark();
  });
  mark();

  // ---------- Search ----------
  const wrap = document.querySelector('.search');
  if (!wrap) return;
  const input = wrap.querySelector('input');
  const list = wrap.querySelector('.q-list');
  let index = null, loading = null, hits = [], at = -1;

  const load = () => loading || (loading = fetch(wrap.dataset.index).then((r) => r.json()).then((d) => {
    index = d.map((e) => ({ ...e, lt: e.t.toLowerCase(), lh: e.h.map(([, h]) => h.toLowerCase()), lx: e.x.toLowerCase() }));
  }).catch(() => { index = []; }));

  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const mark1 = (s, words) => {
    let out = esc(s);
    for (const w of words) out = out.replace(new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>');
    return out;
  };
  const count = (hay, w) => { let n = 0, i = -1; while ((i = hay.indexOf(w, i + 1)) !== -1 && n < 50) n++; return n; };

  // Each word must appear somewhere in the page. Matches in the title count most, then headings,
  // then the text.
  function search(q) {
    const words = q.toLowerCase().split(/\s+/).filter((w) => w.length > 1 || /\d/.test(w));
    if (!words.length) return [];
    const found = [];
    for (const e of index) {
      let score = 0, ok = true;
      for (const w of words) {
        const t = e.lt.includes(w) ? 1 : 0;
        const h = e.lh.filter((x) => x.includes(w)).length;
        const x = count(e.lx, w);
        if (!t && !h && !x) { ok = false; break; }
        score += t * 40 + (e.lt.startsWith(w) ? 10 : 0) + h * 8 + Math.min(x, 15);
      }
      if (!ok) continue;
      if (e.lt.includes(q.toLowerCase())) score += 30;
      const head = e.h.find(([, x]) => words.every((w) => x.toLowerCase().includes(w))) || e.h.find(([, x]) => words.some((w) => x.toLowerCase().includes(w)));
      const whole = e.lx.indexOf(q.toLowerCase());
      const i = whole >= 0 ? whole : e.lx.indexOf(words[0]);
      const snip = i < 0 ? '' : `${i > 60 ? '…' : ''}${e.x.slice(Math.max(0, i - 60), i + 110).trim()}…`;
      found.push({ e, score, head, snip, words });
    }
    return found.sort((a, b) => b.score - a.score).slice(0, 8);
  }

  function show() {
    const q = input.value.trim();
    if (!q) { close(); return; }
    hits = search(q);
    at = -1;
    list.innerHTML = hits.length ? hits.map((r, i) => `<li role="option" id="q-${i}" aria-selected="false"><a href="${r.e.u}${r.head ? `#${r.head[0]}` : ''}">
  <span class="q-where">${esc(r.e.w)}</span>
  <span class="q-title">${mark1(r.e.t, r.words)}</span>${r.head ? `<span class="q-head">${mark1(r.head[1], r.words)}</span>` : ''}
  ${r.snip ? `<span class="q-snip">${mark1(r.snip, r.words)}</span>` : ''}</a></li>`).join('')
      : `<li class="q-none">No lessons match “${esc(q)}”.</li>`;
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    input.removeAttribute('aria-activedescendant');
  }
  function close() {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    at = -1;
  }
  function move(d) {
    if (!hits.length || list.hidden) return;
    const items = list.querySelectorAll('[role=option]');
    if (at >= 0) items[at].setAttribute('aria-selected', 'false');
    at = (at + d + items.length) % items.length;
    items[at].setAttribute('aria-selected', 'true');
    items[at].scrollIntoView({ block: 'nearest' });
    input.setAttribute('aria-activedescendant', items[at].id);
  }

  input.addEventListener('focus', () => { load(); if (input.value.trim()) load().then(show); });
  input.addEventListener('input', () => load().then(show));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') {
      const a = list.querySelectorAll('[role=option] a')[at < 0 ? 0 : at];
      if (a && !list.hidden) { e.preventDefault(); location.href = a.href; }
    } else if (e.key === 'Escape') { if (!list.hidden) { e.preventDefault(); close(); } else input.blur(); }
  });
  document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) close(); });
  // "/" jumps to the search box, as on many sites, unless the reader is typing somewhere.
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) && !document.activeElement.isContentEditable) { e.preventDefault(); input.focus(); }
  });
})();
