// Shared helpers for the demos. Loaded on every demo page before the demo's own script.
//   DX.plot(canvas, { xmin, xmax, ymin, ymax, equal })  sizes the canvas for the screen, clears it,
//     and returns functions that draw in graph coordinates. Call it again to redraw.
//   DX.rng(seed)       a repeatable random number generator (same seed, same numbers).
//   DX.onResize(fn)    redraw when the window changes size.
window.DX = (function () {
  function plot(canvas, o) {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const cs = getComputedStyle(canvas);
    const v = (n) => cs.getPropertyValue(n).trim();
    const col = { ink: v('--ink'), muted: v('--muted'), rule: v('--rule'), wash: v('--wash'), accent: v('--c'), soft: '#e6e9ef' };
    const m = Object.assign({ l: 42, r: 12, t: 12, b: 26 }, o.margin);
    let { xmin, xmax, ymin, ymax } = o;
    const pw = Math.max(1, w - m.l - m.r), ph = Math.max(1, h - m.t - m.b);
    if (o.equal) {
      // Widen one range so that one unit is the same length on both axes.
      const sx = pw / (xmax - xmin), sy = ph / (ymax - ymin);
      if (sx > sy) { const extra = pw / sy - (xmax - xmin); xmin -= extra / 2; xmax += extra / 2; }
      else { const extra = ph / sx - (ymax - ymin); ymin -= extra / 2; ymax += extra / 2; }
    }
    const X = (x) => m.l + (x - xmin) / (xmax - xmin) * pw;
    const Y = (y) => h - m.b - (y - ymin) / (ymax - ymin) * ph;
    const P = { ctx, col, w, h, m, xmin, xmax, ymin, ymax, X, Y };
    P.at = (ev) => {
      const r = canvas.getBoundingClientRect();
      return { x: xmin + (ev.clientX - r.left - m.l) / pw * (xmax - xmin), y: ymin + (h - m.b - (ev.clientY - r.top)) / ph * (ymax - ymin) };
    };
    const nice = (range, target) => {
      const raw = range / target, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p;
      return (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * p;
    };
    const fmt = (val, step) => {
      const d = Math.max(0, -Math.floor(Math.log10(step) + 1e-9));
      return (Math.abs(val) < step / 1e6 ? 0 : val).toFixed(d);
    };
    P.clip = (fn) => { ctx.save(); ctx.beginPath(); ctx.rect(m.l, m.t, pw, ph); ctx.clip(); fn(); ctx.restore(); };
    // Grid lines, tick labels along the left and bottom edges, and darker lines for the two axes.
    P.axes = (opt = {}) => {
      const sx = opt.xstep || nice(xmax - xmin, Math.max(3, pw / 70)), sy = opt.ystep || nice(ymax - ymin, Math.max(3, ph / 50));
      ctx.font = '12px ' + cs.fontFamily;
      ctx.lineWidth = 1;
      ctx.fillStyle = col.muted;
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (let k = Math.ceil(xmin / sx - 1e-9); k * sx <= xmax + 1e-9; k++) {
        const x = k * sx, px = Math.round(X(x)) + 0.5;
        ctx.strokeStyle = Math.abs(x) < sx / 1e6 && ymin <= 0 && ymax >= 0 ? col.muted : col.soft;
        if (opt.xgrid !== false || ctx.strokeStyle === col.muted) { ctx.beginPath(); ctx.moveTo(px, m.t); ctx.lineTo(px, h - m.b); ctx.stroke(); }
        if (opt.xlabels !== false) ctx.fillText(opt.xfmt ? opt.xfmt(x) : fmt(x, sx), px, h - m.b + 6);
      }
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      for (let k = Math.ceil(ymin / sy - 1e-9); k * sy <= ymax + 1e-9; k++) {
        const y = k * sy, py = Math.round(Y(y)) + 0.5;
        ctx.strokeStyle = Math.abs(y) < sy / 1e6 && xmin <= 0 && xmax >= 0 ? col.muted : col.soft;
        ctx.beginPath(); ctx.moveTo(m.l, py); ctx.lineTo(w - m.r, py); ctx.stroke();
        ctx.fillText(opt.yfmt ? opt.yfmt(y) : fmt(y, sy), m.l - 6, py);
      }
    };
    P.seg = (x1, y1, x2, y2, color, width = 2, dash) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; if (dash) ctx.setLineDash(dash);
      ctx.beginPath(); ctx.moveTo(X(x1), Y(y1)); ctx.lineTo(X(x2), Y(y2)); ctx.stroke(); ctx.restore();
    };
    P.path = (pts, color, width = 2, dash) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineJoin = 'round'; if (dash) ctx.setLineDash(dash);
      ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])))); ctx.stroke(); ctx.restore();
    };
    // The graph of y = f(x) between a and b.
    P.curve = (f, color, width = 2.5, a = xmin, b = xmax, dash) => P.clip(() => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineJoin = 'round'; if (dash) ctx.setLineDash(dash);
      ctx.beginPath();
      let pen = false;
      const n = Math.max(60, Math.round(pw));
      for (let i = 0; i <= n; i++) {
        const x = a + (b - a) * i / n, y = f(x);
        if (!isFinite(y)) { pen = false; continue; }
        const py = Math.max(-1e4, Math.min(1e4, Y(y)));
        if (pen) ctx.lineTo(X(x), py); else ctx.moveTo(X(x), py);
        pen = true;
      }
      ctx.stroke(); ctx.restore();
    });
    // The region between y = f(x) and the x-axis, from a to b.
    P.area = (f, a, b, color) => P.clip(() => {
      ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(X(a), Y(0));
      const n = Math.max(40, Math.round(pw / 2));
      for (let i = 0; i <= n; i++) { const x = a + (b - a) * i / n; ctx.lineTo(X(x), Y(f(x))); }
      ctx.lineTo(X(b), Y(0)); ctx.closePath(); ctx.fill(); ctx.restore();
    });
    P.rect = (x1, y1, x2, y2, fill, stroke) => {
      const px = X(Math.min(x1, x2)), py = Y(Math.max(y1, y2)), rw = Math.abs(X(x2) - X(x1)), rh = Math.abs(Y(y2) - Y(y1));
      if (fill) { ctx.fillStyle = fill; ctx.fillRect(px, py, rw, rh); }
      if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1; ctx.strokeRect(px + 0.5, py + 0.5, rw, rh); }
    };
    P.poly = (pts, fill, stroke, width = 1.5) => {
      ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])))); ctx.closePath();
      if (fill) { ctx.fillStyle = fill; ctx.fill(); }
      if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = width; ctx.stroke(); }
    };
    P.dot = (x, y, color, r = 5, hollow) => {
      ctx.beginPath(); ctx.arc(X(x), Y(y), r, 0, Math.PI * 2);
      if (hollow) { ctx.fillStyle = '#fff'; ctx.fill(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke(); }
      else { ctx.fillStyle = color; ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke(); }
    };
    P.arrow = (x1, y1, x2, y2, color, width = 2.5) => {
      const ax = X(x1), ay = Y(y1), bx = X(x2), by = Y(y2), len = Math.hypot(bx - ax, by - ay);
      ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = width; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
      if (len > 4) {
        const t = Math.atan2(by - ay, bx - ax), s = Math.min(10, len * 0.6);
        ctx.beginPath(); ctx.moveTo(bx, by);
        ctx.lineTo(bx - s * Math.cos(t - 0.42), by - s * Math.sin(t - 0.42));
        ctx.lineTo(bx - s * Math.cos(t + 0.42), by - s * Math.sin(t + 0.42));
        ctx.closePath(); ctx.fill();
      }
      ctx.restore();
    };
    P.label = (text, x, y, color, align = 'left', dx = 8, dy = -8) => {
      ctx.save(); ctx.font = '600 13px ' + cs.fontFamily; ctx.textAlign = align; ctx.textBaseline = 'middle';
      ctx.lineWidth = 4; ctx.strokeStyle = '#fff'; ctx.lineJoin = 'round';
      ctx.strokeText(text, X(x) + dx, Y(y) + dy); ctx.fillStyle = color; ctx.fillText(text, X(x) + dx, Y(y) + dy); ctx.restore();
    };
    return P;
  }

  // mulberry32: a small generator that gives the same sequence for the same seed.
  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function onResize(fn) {
    let timer;
    addEventListener('resize', () => { clearTimeout(timer); timer = setTimeout(fn, 80); });
  }

  // Mix a color toward white: tint('#1f6fc4', 0.2) is a pale version of that blue.
  function tint(hex, amount) {
    const n = parseInt(hex.replace('#', ''), 16);
    const ch = (s) => Math.round(255 + (((n >> s) & 255) - 255) * amount);
    return `rgb(${ch(16)}, ${ch(8)}, ${ch(0)})`;
  }

  const num = (x, d = 2) => (Math.abs(x) < 0.5 * Math.pow(10, -d) ? 0 : x).toFixed(d).replace('-', '−');

  return { plot, rng, onResize, tint, num };
})();
