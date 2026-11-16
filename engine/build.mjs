// Builds every course in courses/ into dist/<course>/, plus the home page that lists them.
// Usage: node engine/build.mjs
// Each course is built from courses/<course>/content/. Settings that differ between courses
// (page text, stage colors, math, numbering) are in that course's content/course.json.
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import katex from 'katex';

const root = path.join(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const site = JSON.parse(fs.readFileSync(path.join(root, 'site.json'), 'utf8'));

// Labels for a topic or demo with "tag" set in course.json.
const STATUS = { new: 'New', updated: 'Updated', draft: 'Draft' };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const pad = (n) => String(n).padStart(2, '0');
const slug = (s) => s.replace(/<[^>]+>/g, '').toLowerCase().replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const fontLink = (families) => `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?${families}&display=swap" rel="stylesheet">`;
const FONTS = fontLink('family=Figtree:wght@400..800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..700');
const DECK_FONTS = fontLink('family=Source+Sans+3:ital,wght@0,400..800;1,400..800');
const KATEX_CSS = '\n<link rel="stylesheet" href="/assets/katex/katex.min.css">';

// Pages are written with links that start at "/". A course is served from /<course>/, so its links
// gain that prefix here. Shared files in /assets/ keep their address, and "@ROOT@" is the home page.
function write(base, p, html) {
  const file = path.join(dist, base, p);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (base) html = html.replace(/(href|src)="\/(?!\/|assets\/)/g, `$1="/${base}/`);
  fs.writeFileSync(file, html.replaceAll('@ROOT@', '/'));
}

// The reader's text size (small, standard or large) is set by the control in the lower right
// corner, which is engine/page.js. It is kept in the browser and applied here, before the page is
// drawn, so the page doesn't jump.
const TEXT_SIZE = `<script>try { const t = localStorage.getItem('text-size'); if (t) document.documentElement.dataset.text = t; } catch (e) {}</script>`;

// The frame around every page: top bar, main area, footer. A course's pages also get a search box
// in the top bar, which searches that course only (engine/page.js and /<course>/search.json).
function shell({ title, head = '', brand, nav = '', search = '', foot, body, scripts = '', mainClass = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
${TEXT_SIZE}
${FONTS}
<link rel="stylesheet" href="/assets/site.css">${head}
</head>
<body>
<header class="top">
  ${brand}
  <nav aria-label="Sections">${nav}</nav>${search}
</header>
<main${mainClass ? ` class="${mainClass}"` : ''}>
${body}
</main>
<footer class="foot">${foot}</footer>
<script src="/assets/page.js" defer></script>
${scripts}</body>
</html>
`;
}

// A ```mermaid code block is drawn as a diagram in the reader's browser by engine/diagrams.js.
// To show Mermaid source as code instead, mark the block ```text.
const diagrams = (html) => html.replace(/<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g, '<pre class="mermaid">$1</pre>');
const diagramScript = (html) => html.includes('<pre class="mermaid">') ? '<script type="module" src="/assets/diagrams.js"></script>\n' : '';

function buildCourse(base) {
  const dir = path.join(root, 'courses', base);
  const read = (p) => fs.readFileSync(path.join(dir, p), 'utf8').replace(/\r\n/g, '\n');
  const has = (p) => fs.existsSync(path.join(dir, p));
  const course = JSON.parse(read('content/course.json'));
  const text = course.text || {};
  // A course written in sentence case ("On this page") sets "sentenceCase" in course.json.
  const T = (titleCase, sentence) => (course.sentenceCase ? sentence : titleCase);
  const hasAssess = has('content/assessments.md');

  // Every topic in order, with what has been posted for it. A topic is a title, or an object with
  // a title and optionally "lab", "optional", "assess" and "tag". A week with an "assignment" also gets a lab page.
  // "tag" is "new" or "updated", and shows that label beside the lesson. A demo can carry one too.
  // With "lessonNumbers", lesson L of week NN has the course number NN-LL.
  const items = course.weeks.flatMap((wk) => {
    const make = (key, t, label, n) => {
      const id = `w${pad(wk.n)}-${key}`;
      return {
        id, wk, label, title: t.title ?? t, num: n ? `${pad(wk.n)}-${pad(n)}` : '', assess: t.assess || [], optional: !!t.optional, tag: STATUS[t.tag] ? t.tag : '',
        lesson: has(`content/lessons/${id}.md`), slides: has(`content/slides/${id}.md`),
      };
    };
    const list = wk.topics.map((t, i) => make(`t${i + 1}`, t, t.lab ? 'Lab' : `${course.topicLabel || 'Topic'} ${i + 1}`, i + 1));
    if (wk.assignment) list.push(make('lab', wk.assignment, 'Lab'));
    return list;
  });
  const statusTag = (x) => (STATUS[x.tag] ? `<span class="tag ${x.tag}">${STATUS[x.tag]}</span>` : '');
  const byNum = new Map(items.map((s) => [s.num, s]));
  const kicker = (s) => `Week ${s.wk.n}, ${s.label === 'Lab' ? text.labKicker || 'Lab' : s.label}${s.optional ? ', Optional' : ''}${s.tag ? `, ${STATUS[s.tag]}` : ''}`;
  // The posted demos that list this lesson under "lessons" in course.json.
  const demosFor = (s) => course.demos.filter((d) => (d.lessons || []).includes(s.id) && has(`content/demos/${d.slug}.html`));

  // Projects and the Appendix are optional. A course lists them in "projects" and "appendix" in
  // course.json, each entry with a slug, a name and "about", and writes each page in
  // content/projects/<slug>.md or content/appendix/<slug>.md. Projects get a place in the top bar.
  // The Appendix sits outside the course's structure, so it is linked only from the footer.
  const projects = (course.projects || []).filter((p) => has(`content/projects/${p.slug}.md`));
  const appendix = (course.appendix || []).filter((p) => has(`content/appendix/${p.slug}.md`));
  const NAV = [['lessons', 'Lessons'], ...(hasAssess ? [['assessments', 'Assessments']] : []), ['slides', 'Slides'], ['demos', 'Demos'], ...(projects.length ? [['projects', 'Projects']] : []), ['resources', 'Resources'], ['glossary', 'Glossary']];
  // A course with its own stage colors lists them in "colors"; otherwise the shared ones are used.
  const COLORS = course.colors ? `\n<style>:root { ${course.colors.map((c, i) => `--s${i + 1}: ${c};`).join(' ')} }</style>` : '';
  const STYLE = has('style.css') ? '\n<link rel="stylesheet" href="/style.css">' : '';

  const SEARCH = `
  <div class="search" role="search" data-index="/${base}/search.json">
    <label class="vh" for="q">${T('Search This Course', 'Search this course')}</label>
    <input id="q" type="search" placeholder="Search lessons" autocomplete="off" spellcheck="false" role="combobox" aria-expanded="false" aria-controls="q-list" aria-autocomplete="list">
    <ul id="q-list" class="q-list" role="listbox" hidden></ul>
  </div>`;

  function page({ title, section, body, mainClass }) {
    return shell({
      title: title ? `${title} | ${course.title}` : course.title,
      head: `${body.includes('class="katex') ? KATEX_CSS : ''}${COLORS}${STYLE}`,
      brand: `<a class="brand" href="/">${esc(course.title)}</a>`,
      nav: NAV.map(([s, label]) => `<a href="/${s}/"${s === section ? ' aria-current="page"' : ''}>${label}</a>`).join(''),
      search: SEARCH,
      foot: `${[course.code, course.school, course.term].filter(Boolean).map(esc).join(', ')} <a class="all" href="@ROOT@">All courses</a>${appendix.length ? `<a class="all" href="/appendix/">Appendix</a>` : ''}`,
      body,
      mainClass,
      scripts: `<script>addEventListener('beforeprint', () => document.querySelectorAll('details.callout, details.wfold').forEach((d) => { d.open = true; }));</script>\n${diagramScript(body)}`,
    });
  }

  // Collapsible callouts. In a lesson, write:
  //   :::steps
  //   1. First step.
  //   :::
  // The block is folded until the reader opens it. Text after the type replaces the default title,
  // as in ":::steps On a phone". To add a type, add it here with its default title.
  const CALLOUTS = { steps: T('Step-by-Step Instructions', 'Step-by-step instructions'), image: T('Image Description', 'Image description') };
  function callouts(md) {
    let fence = false, open = false;
    return md.split('\n').map((line) => {
      if (/^```/.test(line)) fence = !fence;
      if (fence) return line;
      const start = line.match(/^:::([a-z]+)[ \t]*(.*)$/);
      if (start && !open) {
        open = true;
        const title = start[2].trim() || CALLOUTS[start[1]] || start[1][0].toUpperCase() + start[1].slice(1);
        return `<details class="callout ${start[1]}">\n<summary>${marked.parseInline(title)}<span class="hint">Show</span></summary>\n`;
      }
      if (line.trim() === ':::' && open) { open = false; return '\n</details>\n'; }
      return line;
    }).join('\n');
  }

  // Math, for a course with "math" set. It is written as LaTeX: $...$ inside a sentence, $$...$$ on
  // a line of its own for a displayed equation. KaTeX turns it into HTML here, at build time, so
  // pages need no script to show it. A literal dollar sign is written \$. Nothing inside code is
  // treated as math.
  const mathErrors = [];
  function mathToHtml(md, where) {
    const found = [];
    let fence = false;
    const text = md.split('\n').map((line) => {
      if (/^\s*(```|~~~)/.test(line)) { fence = !fence; return line; }
      if (fence) return line;
      return line.replace(/(`+)[^`]*?\1|\$\$(.+?)\$\$|(?<!\\)\$((?:\\.|[^$\\])+?)\$/g, (m, tick, display, inline) => {
        if (tick) return m;
        found.push({ tex: display ?? inline, display: display !== undefined });
        return `⟦M${found.length - 1}⟧`;
      });
    }).join('\n');
    const restore = (html) => html.replace(/⟦M(\d+)⟧/g, (_, i) => {
      const { tex, display } = found[+i];
      try {
        return katex.renderToString(tex, { displayMode: display, throwOnError: true });
      } catch (e) {
        mathErrors.push(`${where}: ${tex} (${e.message})`);
        return katex.renderToString(tex, { displayMode: display, throwOnError: false });
      }
    });
    return { text, restore };
  }
  const mdToHtml = (md, where) => {
    if (!course.math) return diagrams(marked.parse(md));
    const { text, restore } = mathToHtml(md, where);
    return diagrams(restore(marked.parse(text)));
  };

  // With "lessonNumbers", course numbers in text become links: "02-04" links to that lesson once it
  // is posted, and "A2" links to that assessment. Text inside links, code and headings is left alone.
  const assessIds = new Set(hasAssess ? [...read('content/assessments.md').matchAll(/^## A(\d)\./gm)].map((m) => m[1]) : []);
  function crossLinks(html) {
    let skip = 0;
    return html.split(/(<[^>]+>)/).map((part) => {
      const tag = part.match(/^<(\/?)(a|code|pre|h[1-6])\b/);
      if (tag) { skip += tag[1] ? -1 : 1; return part; }
      if (skip > 0 || part.startsWith('<')) return part;
      return part
        .replace(/(?<![\w-])(\d\d-\d\d)(?![\w-])/g, (m) => {
          const s = byNum.get(m);
          return s && s.lesson ? `<a href="/lessons/${s.id}/">${m}</a>` : m;
        })
        .replace(/(?<![\w-])A(\d)(?![\w-])/g, (m, n) => (assessIds.has(n) ? `<a href="/assessments/#a${n}">${m}</a>` : m));
    }).join('');
  }

  // Interactive widgets inside a lesson. A line reading {{widget next-token}}, on its own with a
  // blank line above and below, is replaced by content/widgets/next-token.html. A widget is a
  // fragment (its own style, markup and script) with styles scoped to ".wx".
  // Every widget is folded until the reader opens it. The fold is labeled with the title and
  // subtitle from the widget's own header (<div class="wx-head"><b>Title</b><span>Subtitle</span>),
  // and that header is hidden inside the fold so it isn't shown twice.
  const widgets = (html) => html.replace(/<p>\{\{widget ([a-z0-9-]+)\}\}<\/p>/g, (_, name) => {
    const frag = read(`content/widgets/${name}.html`);
    const head = frag.match(/<div class="wx-head"><b>([^<]*)<\/b>(?:<span>([^<]*)<\/span>)?/);
    const title = head ? head[1] : T('Try It', 'Try it');
    return `<details class="wfold">
<summary><span class="wf-text"><span class="wf-title">${title}</span>${head && head[2] ? `<span class="wf-sub">${head[2]}</span>` : ''}</span><span class="hint">Open</span></summary>
${frag}
</details>`;
  });

  // Markdown to HTML, with ids on h2 headings, scrollable tables, diagrams, collapsible callouts,
  // math, widgets, and links for lesson and assessment numbers.
  function render(md, where) {
    const toc = [];
    let html = mdToHtml(callouts(md), where);
    html = html.replace(/<h2>(.*?)<\/h2>/g, (_, t) => {
      const a = hasAssess && t.match(/^A(\d)\./);
      const id = a ? `a${a[1]}` : slug(t);
      toc.push({ id, text: t.replace(/<[^>]+>/g, '') });
      return `<h2 id="${id}">${t}</h2>`;
    });
    html = html.replace(/<table>/g, '<div class="scroll"><table>').replace(/<\/table>/g, '</table></div>');
    html = html.replace(/<a href="http/g, '<a rel="noopener" href="http');
    html = widgets(html);
    if (course.lessonNumbers) html = crossLinks(html);
    return { html, toc };
  }

  const tocNav = (toc) =>
    `<nav class="toc" aria-label="On this page"><p>${T('On This Page', 'On this page')}</p><ol>${toc.map((t) => `<li><a href="#${t.id}">${t.text}</a></li>`).join('')}</ol></nav>`;
  const tags = (s) => s.assess.map((a) => `<a class="tag" href="/assessments/#${a.toLowerCase()}">${a}</a>`).join('') + (s.optional ? '<span class="tag opt">Optional</span>' : '') + statusTag(s);

  // ---------- Home ----------
  function home() {
    const steps = course.stages.map((st) => {
      const weeks = course.weeks.filter((w) => w.stage === st.n).map((w) =>
        `<li><a href="/lessons/#w${pad(w.n)}"><span class="wk">Week ${w.n}</span><span class="tp">${esc(w.topic)}</span><span class="as">${w.assignment ? esc(w.assignment) : `${w.topics.length} lessons`}</span></a></li>`
      ).join('');
      return `<section class="step s${st.n}"><h2>${esc(st.name)}</h2><ol>${weeks}</ol></section>`;
    }).join('\n');
    return page({
      body: `<div class="hero">
  <h1>${esc(course.title)}</h1>
  <p class="where">${esc(course.code)} at ${esc(course.school)}${course.term ? `, ${esc(course.term)}` : ''}${course.meets ? `. ${esc(course.meets)}.` : ''}</p>
  <p class="lede">${esc(course.description)}</p>
</div>
<div class="stages">
  <p class="note">${esc(course.stagesNote)}</p>
${steps}
</div>`,
    });
  }

  // ---------- Lessons and Slides indexes ----------
  function index(kind) {
    const isLessons = kind === 'lessons';
    const blocks = course.weeks.map((wk) => {
      const rows = items.filter((s) => s.wk === wk).map((s) => {
        const posted = isLessons ? s.lesson : s.slides;
        const name = posted ? `<a href="/${kind}/${s.id}/">${esc(s.title)}</a>` : `<span>${esc(s.title)}</span>`;
        return `<li><span class="sn">${s.label}</span><span class="nm">${name}${isLessons ? tags(s) : ''}</span>${posted ? '' : '<span class="soon">Not posted yet</span>'}</li>`;
      }).join('');
      return `<section class="week s${wk.stage}" id="w${pad(wk.n)}">
  <header><p class="wk">Week ${wk.n}</p><h2>${esc(wk.topic)}</h2></header>
  <ul class="sess">${rows}</ul>
  ${isLessons && wk.focus ? `<p class="about">Assignment: ${esc(wk.assignment)}. This week's focus: ${esc(wk.focus)}.</p>` : ''}
</section>`;
    }).join('\n');
    return page({
      title: isLessons ? 'Lessons' : 'Slides',
      section: kind,
      body: `<div class="head"><h1>${isLessons ? 'Lessons' : 'Slides'}</h1>
<p>${text[kind]}</p></div>
<div class="weeks">
${blocks}
</div>`,
    });
  }

  // ---------- One lesson ----------
  // Under the title, a lesson can list a few facts. They are written either as one line (the course
  // name in bold, then items separated by " · ") or as bold "**Label:** value" lines, of which
  // Module is not shown. The title itself comes from course.json.
  function lesson(s) {
    let md = read(`content/lessons/${s.id}.md`).replace(/^# .*\n+/, '');
    let facts = [];
    md = md.replace(/^\*\*[^*\n]+\*\* · (.*)\n/, (_, m) => { facts = m.split(' · '); return ''; });
    if (!facts.length) md = md.replace(/^(?:\*\*[A-Za-z ]+:\*\* .*\n)+/, (block) => {
      facts = block.trim().split('\n').filter((line) => !/^\*\*Module:/.test(line));
      return '';
    });
    const { html: raw, toc } = render(md, s.id);
    const html = linkKeyTerms(raw);
    const posted = items.filter((x) => x.lesson);
    const at = posted.indexOf(s);
    const prev = posted[at - 1], next = posted[at + 1];
    const link = (x, label) => x ? `<a href="/lessons/${x.id}/"><span>${label}</span>${esc(x.title)}</a>` : '<span></span>';
    const buttons = `${s.slides ? `<a class="btn" href="/slides/${s.id}/">Open the slides</a>` : ''}${demosFor(s).map((d) => `<a class="btn alt" href="/demos/${d.slug}/">Demo: ${esc(d.name)}</a>`).join('')}`;
    return page({
      title: s.title,
      section: 'lessons',
      mainClass: 'reading',
      body: `<article class="lesson s${s.wk.stage}">
  <header class="lhead">
    <p class="wk">${kicker(s)}</p>
    <h1>${esc(s.title)}</h1>
    <ul class="facts">${facts.map((f) => `<li>${marked.parseInline(f)}</li>`).join('')}</ul>
    ${buttons ? `<p>${buttons}</p>` : ''}
  </header>
  <div class="cols">
    ${tocNav(toc)}
    <div class="prose">${html}</div>
  </div>
  <nav class="pager" aria-label="Other lessons">${link(prev, 'Previous')}${link(next, 'Next')}</nav>
</article>`,
    });
  }

  // ---------- One slide deck ----------
  function deck(s) {
    // Split on slide breaks, but not on a --- line inside a code block.
    const parts = [''];
    let fence = false;
    for (const line of read(`content/slides/${s.id}.md`).split('\n')) {
      if (/^```/.test(line)) fence = !fence;
      if (line === '---' && !fence) parts.push('');
      else parts[parts.length - 1] += line + '\n';
    }
    const slides = parts.map((part) => {
      const html = mdToHtml(part.trim(), `slides ${s.id}`);
      return `<section class="slide${/^\s*<h1/.test(html) ? ' lead' : ''}">${html}</section>`;
    }).join('\n');
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(`Slides: ${s.title} | ${course.title}`)}</title>
${DECK_FONTS}
<link rel="stylesheet" href="/assets/deck.css">${slides.includes('class="katex') ? KATEX_CSS : ''}${COLORS}
</head>
<body class="s${s.wk.stage}">
<div class="stage" id="stage">
${slides}
</div>
<div class="bar">
  <a href="/slides/#w${pad(s.wk.n)}">All slides</a>
  ${s.lesson ? `<a href="/lessons/${s.id}/">Read the lesson</a>` : ''}
  <span class="grow"></span>
  <button id="prev" aria-label="Previous slide">Back</button>
  <span id="count" aria-live="polite"></span>
  <button id="next" aria-label="Next slide">Next</button>
  <button id="full">Full screen</button>
</div>
<script src="/assets/deck.js"></script>
${diagramScript(slides)}</body>
</html>
`;
  }

  // ---------- Demos ----------
  const demoWeeks = (d) => `Week${d.weeks.length > 1 ? 's' : ''} ${d.weeks.join(' and ')}`;
  function demos() {
    const list = course.demos.map((d) => {
      const posted = has(`content/demos/${d.slug}.html`);
      const wk = course.weeks.find((w) => w.n === d.weeks[0]);
      return `<li class="demo s${wk.stage}">
  <h2>${posted ? `<a href="/demos/${d.slug}/">${esc(d.name)}</a>` : esc(d.name)}${statusTag(d)}</h2>
  <p>${esc(d.about)}</p>
  <p class="about">${demoWeeks(d)}${posted ? '' : '<span class="soon">Not posted yet</span>'}</p>
</li>`;
    }).join('\n');
    return page({
      title: 'Demos',
      section: 'demos',
      body: `<div class="head"><h1>Demos</h1>
<p>Small interactive models of ideas from the course. They run in your browser and need no account. Each one simplifies the real thing so you can see how it works.</p></div>
${list ? `<ul class="demos">\n${list}\n</ul>` : '<p class="empty">No demos yet. They appear here as they are posted.</p>'}`,
    });
  }

  // A demo is a fragment (its own style, markup and script) placed inside the site page, under the
  // demo's name. Its styles are scoped to ".dx", and it takes the color of its first week's stage.
  // A course with "demoHelper" loads the shared drawing helper, engine/demo.js, before the demo.
  function demoPage(d, fragment) {
    const wk = course.weeks.find((w) => w.n === d.weeks[0]);
    const goes = (d.lessons || []).map((id) => items.find((s) => s.id === id && s.lesson)).filter(Boolean);
    if (course.demoHelper) fragment = `<script src="/assets/demo.js"></script>\n${fragment}`;
    return page({
      title: d.name,
      section: 'demos',
      body: `<div class="head dhead s${wk.stage}"><p class="wk"><a href="/demos/">Demos</a> / ${demoWeeks(d)}</p><h1>${esc(d.name)}</h1></div>
<div class="dx s${wk.stage}">
${fragment}
</div>
${goes.length ? `<p class="goes s${wk.stage}">Goes with ${goes.map((s) => `<a href="/lessons/${s.id}/">Week ${s.wk.n}: ${esc(s.title)}</a>`).join(', ')}.</p>` : ''}`,
    });
  }

  // ---------- Assessments, Resources and Changes ----------
  // A course with content/changes.md gets a page at /changes/ that lists what a revision changed.
  function doc({ file, title, section, cls }) {
    const { html, toc } = render(read(file), section);
    return page({
      title,
      section,
      body: `<div class="head"><h1>${title}</h1>
<p>${text[section]}</p></div>
<div class="cols wide">
  ${tocNav(toc)}
  <div class="prose ${cls}">${html}</div>
</div>`,
    });
  }

  // ---------- Glossary ----------
  // Collected from the "Key Terms" section of every posted lesson, so it grows as lessons are
  // posted. A term is written "**Term**: definition" or "**Term:** definition", with or without a
  // list bullet. A term defined in more than one lesson keeps its first definition and links to
  // each lesson.
  function glossaryTerms() {
    const terms = new Map();
    for (const s of items.filter((x) => x.lesson)) {
      const block = read(`content/lessons/${s.id}.md`).match(/^## Key terms\n([\s\S]*?)(?=^## |$(?![\s\S]))/mi);
      if (!block) continue;
      for (const [, term, def] of block[1].replace(/^[-*] +/gm, '').matchAll(/\*\*(.+?)(?::\*\*|\*\*:)\s*([\s\S]*?)(?=\s*\*\*[^*]+(?::\*\*|\*\*:)|\s*$(?![\s\S]))/g)) {
        const key = term.toLowerCase();
        if (!terms.has(key)) terms.set(key, { term, def: def.trim(), from: [] });
        terms.get(key).from.push(s);
      }
    }
    return [...terms.values()].sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base', numeric: true }));
  }

  // A course can give any term a detailed entry in content/glossary.md, under a "## Term" heading
  // that matches the term as the lesson writes it: a few paragraphs, then optionally a
  // "### Resources" heading over a list of links. On the Glossary page, a term with an entry opens
  // it in a pop-up, along with links to the lessons that use the term. Text before the first
  // heading is a note for whoever edits the file, and is not shown.
  const details = new Map();
  if (has('content/glossary.md')) {
    for (const part of read('content/glossary.md').split(/^## /m).slice(1)) {
      const nl = part.indexOf('\n');
      const [body, links = ''] = part.slice(nl + 1).split(/^### Resources[ \t]*$/m);
      details.set(part.slice(0, nl).trim().toLowerCase(), { body: body.trim(), links: links.trim() });
    }
  }
  const glossTerms = glossaryTerms();
  const glossIds = new Set(glossTerms.map((t) => slug(t.term)));

  function glossary() {
    const terms = glossTerms;
    const lessonName = (s) => course.lessonNumbers ? `${s.num}: ${esc(s.title)}` : `Week ${s.wk.n}, ${s.label}: ${esc(s.title)}`;
    const list = terms.map((t) => {
      const id = slug(t.term);
      const from = t.from.map((s) => `<a href="/lessons/${s.id}/">${course.lessonNumbers ? s.num : `Week ${s.wk.n}`}: ${esc(s.title)}</a>`).join(', ');
      const def = marked.parseInline(t.def.replace(/^[a-z]/, (c) => c.toUpperCase()));
      const d = details.get(t.term.toLowerCase());
      const name = marked.parseInline(t.term);
      if (!d) return `<div class="term" id="${id}"><dt>${name}</dt><dd>${def} <span class="from">${from}</span></dd></div>`;
      const ext = (html) => html.replace(/<a href="http/g, '<a rel="noopener" href="http');
      const more = `<h2 id="gm-title">${name}</h2>
<div class="gm-text">${ext(mdToHtml(d.body, `glossary ${t.term}`))}</div>
<h3>${T('In the Lessons', 'In the lessons')}</h3>
<ul class="gm-links">${t.from.map((s) => `<li><a href="/lessons/${s.id}/">${lessonName(s)}</a></li>`).join('')}</ul>${d.links ? `
<h3>${T('Resources', 'Resources')}</h3>
<div class="gm-res">${ext(mdToHtml(d.links, `glossary ${t.term}`))}</div>` : ''}`;
      return `<div class="term has-more" id="${id}"><dt><button type="button" class="gt" aria-haspopup="dialog">${name}</button></dt><dd>${def} <span class="from">${from}</span></dd><template>${more}</template></div>`;
    }).join('\n');
    return page({
      title: 'Glossary',
      section: 'glossary',
      body: `<div class="head"><h1>Glossary</h1>
<p>The key terms from each posted lesson, in alphabetical order.${details.size ? ' Select a term to open a fuller explanation, with the lessons that use it and resources for further reading.' : ' Each term links to the lesson that introduces it.'}</p></div>
${terms.length ? `<div class="gfilter">
  <label class="vh" for="gq">${T('Filter Terms', 'Filter terms')}</label>
  <input id="gq" type="search" placeholder="Filter terms" autocomplete="off" spellcheck="false">
  <span class="gcount" aria-live="polite">${terms.length} terms</span>
</div>
<dl class="gloss">\n${list}\n</dl>
<p class="gnone" hidden>No terms match.</p>
<dialog class="gmodal" aria-labelledby="gm-title"><button type="button" class="gm-x" aria-label="Close">×</button><div class="gm-body"></div></dialog>` : '<p class="empty">No terms yet. They appear here as lessons are posted.</p>'}`,
    });
  }

  // In a lesson's Key Terms section, each term links to its entry on the Glossary page.
  function linkKeyTerms(html) {
    return html.replace(/(<h2 id="key-terms">[\s\S]*?)(?=<h2 |$(?![\s\S]))/, (section) =>
      section.replace(/<(li|p)><strong>(.+?)<\/strong>/g, (m, tag, term) => {
        const id = slug(term.replace(/:$/, ''));
        return glossIds.has(id) ? `<${tag}><a class="gl" href="/glossary/#${id}"><strong>${term}</strong></a>` : m;
      }));
  }

  // ---------- Projects and Appendix ----------
  function listPage({ section, title, intro, entries, cls }) {
    const list = entries.map((p) => {
      const wk = p.weeks && course.weeks.find((w) => w.n === p.weeks[0]);
      return `<li class="demo${wk ? ` s${wk.stage}` : ''}">
  <h2><a href="/${section}/${p.slug}/">${esc(p.name)}</a>${statusTag(p)}</h2>
  <p>${esc(p.about)}</p>${p.weeks ? `\n  <p class="about">Draws on ${demoWeeks(p)}</p>` : ''}
</li>`;
    }).join('\n');
    return page({
      title,
      section,
      body: `<div class="head"><h1>${title}</h1>
<p>${esc(intro)}</p></div>
<ul class="demos ${cls}">\n${list}\n</ul>`,
    });
  }
  function entryPage({ section, title, p }) {
    const md = read(`content/${section}/${p.slug}.md`).replace(/^# .*\n+/, '');
    const { html, toc } = render(md, `${section} ${p.slug}`);
    const wk = p.weeks && course.weeks.find((w) => w.n === p.weeks[0]);
    return page({
      title: p.name,
      section,
      mainClass: 'reading',
      body: `<article class="lesson${wk ? ` s${wk.stage}` : ''}">
  <header class="lhead">
    <p class="wk"><a href="/${section}/">${title}</a>${p.tag && STATUS[p.tag] ? `, ${STATUS[p.tag]}` : ''}</p>
    <h1>${esc(p.name)}</h1>
  </header>
  <div class="cols">
    ${toc.length ? tocNav(toc) : '<span></span>'}
    <div class="prose">${html}</div>
  </div>
</article>`,
    });
  }

  // ---------- Search index ----------
  // One entry per posted lesson, project and appendix page, with its headings and its text as plain
  // words. engine/page.js loads it the first time a reader uses the search box.
  const plain = (md) => md
    .replace(/^>\s*\*\*Instructor note[\s\S]*?(?:\n\n|$)/gm, '')
    .replace(/^\{\{widget [^}]*\}\}$/gm, '')
    .replace(/```mermaid[\s\S]*?```/g, '')
    .replace(/^:::.*$/gm, '')
    .replace(/^\s*(?:[-*+]|\d+\.) +/gm, '')
    .replace(/^\|?[\s|:-]+\|?$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#*_`>|]+/g, ' ')
    .replace(/-{3,}/g, ' ')
    .replace(/\$+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  function searchIndex() {
    // Headings are kept with their ids, so a result can open the page at the matching section.
    const decode = (s) => s.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    const entry = (url, title, where, md) => {
      const n = mathErrors.length; // already reported when the page itself was built
      const heads = render(md, `search ${url}`).toc.map((t) => [t.id, decode(t.text)]);
      mathErrors.length = n;
      return { u: `/${base}${url}`, t: title, w: where, h: heads, x: plain(md.replace(/^# .*\n+/, '')) };
    };
    return JSON.stringify([
      ...items.filter((s) => s.lesson).map((s) => entry(`/lessons/${s.id}/`, s.title, `Week ${s.wk.n}, ${s.label}`, read(`content/lessons/${s.id}.md`))),
      ...projects.map((p) => entry(`/projects/${p.slug}/`, p.name, 'Project', read(`content/projects/${p.slug}.md`))),
      ...appendix.map((p) => entry(`/appendix/${p.slug}/`, p.name, 'Appendix', read(`content/appendix/${p.slug}.md`))),
    ]);
  }

  // ---------- Write the course ----------
  const out = (p, html) => write(base, p, html);
  fs.mkdirSync(path.join(dist, base), { recursive: true });
  if (has('style.css')) fs.copyFileSync(path.join(dir, 'style.css'), path.join(dist, base, 'style.css'));
  // Lesson images are served from /<course>/images/.
  if (has('content/images')) fs.cpSync(path.join(dir, 'content/images'), path.join(dist, base, 'images'), { recursive: true });
  out('index.html', home());
  out('lessons/index.html', index('lessons'));
  out('slides/index.html', index('slides'));
  out('demos/index.html', demos());
  if (hasAssess) out('assessments/index.html', doc({ file: 'content/assessments.md', title: 'Assessments', section: 'assessments', cls: 'assess' }));
  if (has('content/resources.md')) out('resources/index.html', doc({ file: 'content/resources.md', title: 'Resources', section: 'resources', cls: 'res' }));
  if (has('content/changes.md')) out('changes/index.html', doc({ file: 'content/changes.md', title: T('What Changed', 'What changed'), section: 'changes', cls: 'changes' }));
  out('glossary/index.html', glossary());
  if (projects.length) {
    out('projects/index.html', listPage({ section: 'projects', title: 'Projects', intro: text.projects || '', entries: projects, cls: 'projects' }));
    for (const p of projects) out(`projects/${p.slug}/index.html`, entryPage({ section: 'projects', title: 'Projects', p }));
  }
  if (appendix.length) {
    out('appendix/index.html', listPage({ section: 'appendix', title: 'Appendix', intro: text.appendix || '', entries: appendix, cls: 'appendix' }));
    for (const p of appendix) out(`appendix/${p.slug}/index.html`, entryPage({ section: 'appendix', title: 'Appendix', p }));
  }
  fs.writeFileSync(path.join(dist, base, 'search.json'), searchIndex());
  for (const s of items) {
    if (s.lesson) out(`lessons/${s.id}/index.html`, lesson(s));
    if (s.slides) out(`slides/${s.id}/index.html`, deck(s));
  }
  for (const d of course.demos) {
    const src = `content/demos/${d.slug}.html`;
    if (has(src)) out(`demos/${d.slug}/index.html`, demoPage(d, read(src)));
  }
  if (mathErrors.length) console.warn(`${base}: ${mathErrors.length} equations could not be read:\n  ${mathErrors.join('\n  ')}`);
  const unmatched = [...details.keys()].filter((k) => !glossTerms.some((t) => t.term.toLowerCase() === k));
  if (unmatched.length) console.warn(`${base}: content/glossary.md has descriptions for terms no lesson defines: ${unmatched.join(', ')}`);
  const extra = [[projects.length, 'project'], [appendix.length, 'appendix page'], [details.size, 'detailed glossary term']].filter(([n]) => n).map(([n, w]) => `, ${n} ${w}${n === 1 ? '' : 's'}`).join('');
  console.log(`${base}: Built ${items.filter((s) => s.lesson).length} lessons and ${items.filter((s) => s.slides).length} decks${extra}.`);
  return course;
}

// ---------- The home page that lists the courses ----------
function siteShell({ title, body }) {
  return shell({
    title: title ? `${title} | ${site.title}` : site.title,
    brand: `<a class="brand" href="/">${esc(site.title)}</a>`,
    foot: esc(site.where),
    body,
  });
}
function siteHome(courses) {
  const list = courses.map(({ base, course }, i) => `<li class="demo s${i + 1}">
  <h2><a href="/${base}/">${esc(course.title)}</a></h2>
  <p>${esc(course.description)}</p>
  <p class="about">${esc(course.code)}</p>
</li>`).join('\n');
  return siteShell({
    body: `<div class="hero">
  <h1>${esc(site.title)}</h1>
  <p class="where">${esc(site.where)}</p>
</div>
<ul class="demos">
${list}
</ul>`,
  });
}

// ---------- Build ----------
// dist/ is emptied, not deleted, so a mark that keeps it out of Dropbox sync stays on the folder.
// Retries cover a sync tool briefly holding a file open.
fs.mkdirSync(dist, { recursive: true });
for (const f of fs.readdirSync(dist)) fs.rmSync(path.join(dist, f), { recursive: true, force: true, maxRetries: 10, retryDelay: 200 });
fs.mkdirSync(path.join(dist, 'assets'), { recursive: true });
for (const f of fs.readdirSync(import.meta.dirname)) {
  if (/\.(css|js)$/.test(f)) fs.copyFileSync(path.join(import.meta.dirname, f), path.join(dist, 'assets', f));
}
// KaTeX's stylesheet and fonts, for pages that show math.
const katexDist = path.join(root, 'node_modules/katex/dist');
fs.mkdirSync(path.join(dist, 'assets/katex/fonts'), { recursive: true });
fs.copyFileSync(path.join(katexDist, 'katex.min.css'), path.join(dist, 'assets/katex/katex.min.css'));
for (const f of fs.readdirSync(path.join(katexDist, 'fonts'))) if (f.endsWith('.woff2')) fs.copyFileSync(path.join(katexDist, 'fonts', f), path.join(dist, 'assets/katex/fonts', f));

const courses = site.courses.map((base) => ({ base, course: buildCourse(base) }));
write('', 'index.html', siteHome(courses));
write('', '404.html', siteShell({ title: 'Page Not Found', body: '<div class="head"><h1>Page Not Found</h1><p>That page is not on this site. Start again from the <a href="/">list of courses</a>.</p></div>' }));
