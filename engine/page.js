// Shared page behavior: the settings menu and text size control in the lower right corner, and the
// search box in a course's top bar.
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

  // ---------- Settings ----------
  // A gear button above the text size control opens a small menu. For now it has one setting: which
  // side of a lesson page the contents list sits on. The choice is kept in this browser.
  const SIDES = [['left', 'Left'], ['right', 'Right']];
  const gear = document.createElement('button');
  gear.type = 'button';
  gear.className = 'settings-btn';
  gear.setAttribute('aria-label', 'Settings');
  gear.setAttribute('aria-haspopup', 'true');
  gear.setAttribute('aria-expanded', 'false');
  gear.setAttribute('aria-controls', 'settings-menu');
  gear.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>';
  const menu = document.createElement('div');
  menu.className = 'settings-menu';
  menu.id = 'settings-menu';
  menu.hidden = true;
  menu.setAttribute('role', 'group');
  menu.setAttribute('aria-label', 'Settings');
  menu.innerHTML = `<p class="sm-label" id="sm-toc">Contents alignment</p><div class="sm-seg" role="group" aria-labelledby="sm-toc">${
    SIDES.map(([v, label]) => `<button type="button" data-side="${v}">${label}</button>`).join('')}</div>`;
  document.body.append(gear, menu);
  const markSide = () => menu.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String((root.dataset.toc || 'left') === b.dataset.side)));
  const setMenu = (open) => { menu.hidden = !open; gear.setAttribute('aria-expanded', String(open)); };
  gear.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.side === 'right') root.dataset.toc = 'right'; else delete root.dataset.toc;
    try { if (b.dataset.side === 'right') localStorage.setItem('toc-side', 'right'); else localStorage.removeItem('toc-side'); } catch (err) {}
    markSide();
  });
  document.addEventListener('click', (e) => { if (!menu.hidden && !menu.contains(e.target) && !gear.contains(e.target)) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); gear.focus(); } });
  markSide();

  // ---------- Glossary ----------
  // A filter box above the list, and a pop-up with the full entry for terms that have one.
  const gloss = document.querySelector('.gloss');
  if (gloss) {
    const terms = [...gloss.querySelectorAll('.term')];
    // Match on the term and its definition, not on the names of the lessons listed under it.
    const words = terms.map((t) => `${t.querySelector('dt').textContent} ${t.querySelector('dd').textContent.replace(t.querySelector('.from')?.textContent || '', '')}`.toLowerCase());
    const gq = document.getElementById('gq');
    const count = document.querySelector('.gcount');
    const none = document.querySelector('.gnone');
    const total = terms.length;
    gq.addEventListener('input', () => {
      const q = gq.value.trim().toLowerCase();
      let shown = 0;
      terms.forEach((t, i) => {
        const ok = !q || words[i].includes(q);
        t.hidden = !ok;
        if (ok) shown++;
      });
      count.textContent = q ? `${shown} of ${total} terms` : `${total} terms`;
      none.hidden = shown > 0;
    });

    const dlg = document.querySelector('.gmodal');
    const body = dlg.querySelector('.gm-body');
    let opener = null;
    const open = (term, fromButton) => {
      body.innerHTML = term.querySelector('template').innerHTML;
      opener = fromButton || null;
      history.replaceState(null, '', `#${term.id}`);
      dlg.showModal();
      body.scrollTop = 0;
      dlg.querySelector('.gm-x').focus();
    };
    gloss.addEventListener('click', (e) => {
      const b = e.target.closest('button.gt');
      if (b) open(b.closest('.term'), b);
    });
    dlg.querySelector('.gm-x').addEventListener('click', () => dlg.close());
    // A click on the dimmed area outside the box closes it.
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => {
      history.replaceState(null, '', location.pathname + location.search);
      if (opener) opener.focus();
    });
    // A link to /glossary/#term, such as one from a lesson's Key Terms, opens that term.
    const fromHash = () => {
      const t = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (t && t.classList.contains('has-more')) { t.scrollIntoView({ block: 'center' }); open(t, t.querySelector('button.gt')); }
    };
    fromHash();
    addEventListener('hashchange', fromHash);
  }

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
