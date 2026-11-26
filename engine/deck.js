// Slide deck controls: arrow keys, buttons, a slide menu (G), F for full screen, Esc to go back to the slides list, and a #n link to each slide.
(function () {
  var stage = document.getElementById('stage');
  var slides = Array.prototype.slice.call(stage.querySelectorAll('.slide'));
  var count = document.getElementById('count');
  var pick = document.getElementById('pick');
  var menu = document.getElementById('menu');
  var at = 0;

  function fit() {
    var bar = document.fullscreenElement ? 0 : 44;
    var scale = Math.min(window.innerWidth / 1280, (window.innerHeight - bar) / 720);
    stage.style.transform = 'scale(' + scale + ')';
  }

  // Shrink the text on a slide that holds more than fits. A widget slide is skipped: the widget
  // is sized in rem and scrolls inside itself instead.
  function shrink(slide) {
    slide.style.fontSize = '';
    if (slide.classList.contains('widget')) return;
    var size = parseFloat(getComputedStyle(slide).fontSize);
    while (slide.scrollHeight > slide.clientHeight && size > 20) {
      size -= 1;
      slide.style.fontSize = size + 'px';
    }
  }

  // A slide's name in the menu is its heading, or else the start of its text.
  function title(slide) {
    var el = (slide.querySelector('h1, h2, h3') || slide).cloneNode(true);
    el.querySelectorAll('.katex-mathml, style, script').forEach(function (x) { x.remove(); });
    var text = el.textContent.replace(/\s+/g, ' ').trim();
    return text.length > 60 ? text.slice(0, 57).trim() + '...' : text || 'Untitled slide';
  }

  // Built before the diagrams are drawn, so a diagram's labels never end up in a name.
  var items = slides.map(function (slide, i) {
    var li = document.createElement('li');
    var b = document.createElement('button');
    var num = document.createElement('span');
    num.textContent = i + 1;
    b.type = 'button';
    b.append(num, title(slide));
    b.onclick = function () { show(i); setMenu(false); };
    li.append(b);
    menu.append(li);
    return b;
  });

  // Closing drops focus back to the page, so the arrows and Space move through the slides again.
  function setMenu(open) {
    menu.hidden = !open;
    pick.setAttribute('aria-expanded', String(open));
    if (open) {
      items[at].focus();
      items[at].scrollIntoView({ block: 'nearest' });
    } else if (document.activeElement && document.activeElement.closest('.bar')) {
      document.activeElement.blur();
    }
  }

  pick.onclick = function () { setMenu(menu.hidden); };
  document.addEventListener('pointerdown', function (e) {
    if (!menu.hidden && !menu.contains(e.target) && !pick.contains(e.target)) setMenu(false);
  });
  // Tabbing out of the menu closes it.
  menu.addEventListener('focusout', function (e) {
    var to = e.relatedTarget;
    if (to && to !== pick && !menu.contains(to)) setMenu(false);
  });
  // Keys pressed in the open menu stay there. Enter and Space press the focused slide name.
  menu.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    e.stopPropagation();
    var k = e.key, i = items.indexOf(document.activeElement), to = null;
    if (k === 'ArrowDown') to = i + 1;
    else if (k === 'ArrowUp') to = i - 1;
    else if (k === 'Home') to = 0;
    else if (k === 'End') to = items.length - 1;
    else if (k === 'Escape' || k === 'g' || k === 'G') { e.preventDefault(); setMenu(false); }
    if (to === null) return;
    e.preventDefault();
    items[Math.max(0, Math.min(items.length - 1, to))].focus();
  });

  function show(n) {
    at = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach(function (s, i) { s.classList.toggle('on', i === at); });
    shrink(slides[at]);
    count.textContent = (at + 1) + ' of ' + slides.length;
    items.forEach(function (b, i) {
      if (i === at) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
    history.replaceState(null, '', '#' + (at + 1));
  }

  function full() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  }

  // Esc leaves the deck, but only outside full screen. In full screen the browser uses Esc to
  // leave full screen, and that press must not also leave the deck.
  var escDown = false, leftFull = 0;
  function exit() { location.href = document.querySelector('.bar a').href; }

  document.getElementById('prev').onclick = function () { show(at - 1); };
  document.getElementById('next').onclick = function () { show(at + 1); };
  document.getElementById('full').onclick = full;
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    // Keys typed into a widget belong to it: text boxes, lists and sliders use the arrows and
    // Space, and Space or Enter presses a focused button.
    var t = e.target;
    if (t.closest && t.closest('.wx')) {
      if (t.matches('textarea, select, [contenteditable], input:not([type=button]):not([type=checkbox]):not([type=radio])')) return;
      if ((k === ' ' || k === 'Enter') && t.matches('button, [role=button], input, summary')) return;
    }
    // Enter and Space on the slide count open the menu. Esc closes an open menu, not the deck.
    if (t === pick && (k === ' ' || k === 'Enter')) return;
    if (!menu.hidden && k === 'Escape') { e.preventDefault(); setMenu(false); return; }
    // Up and Down change slides too, except inside a widget, where they may scroll it.
    var inWidget = t.closest && t.closest('.wx');
    if (!inWidget && (k === 'ArrowDown' || k === 'ArrowUp')) k = k === 'ArrowDown' ? 'ArrowRight' : 'ArrowLeft';
    if (k === 'g' || k === 'G') { e.preventDefault(); setMenu(menu.hidden); }
    else if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); show(at + 1); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); show(at - 1); }
    else if (k === 'Home') show(0);
    else if (k === 'End') show(slides.length - 1);
    else if (k === 'f' || k === 'F') full();
    else if (k === 'Escape' && !document.fullscreenElement && Date.now() - leftFull > 500) {
      // Firefox treats Esc as "stop loading" and cancels a page change started on key down.
      // Block that, and change page when the key is released.
      e.preventDefault();
      escDown = true;
    }
  });
  document.addEventListener('keyup', function (e) {
    if (e.key !== 'Escape' || !escDown) return;
    escDown = false;
    exit();
  });
  // diagrams.js sends this after it draws the diagrams, which changes how much a slide holds.
  document.addEventListener('deck:refit', function () { fit(); shrink(slides[at]); });
  window.addEventListener('resize', fit);
  document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement) { leftFull = Date.now(); escDown = false; }
    fit();
  });

  fit();
  show((parseInt(location.hash.slice(1), 10) || 1) - 1);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { shrink(slides[at]); });
})();
