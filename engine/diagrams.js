// Draws each <pre class="mermaid"> block as a diagram. The build adds this script only to pages that have one.
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs';

const nodes = [...document.querySelectorAll('pre.mermaid')];
const stage = document.getElementById('stage'); // present only in a slide deck
const css = getComputedStyle(nodes[0]);
const color = css.getPropertyValue('--c').trim() || '#171b26';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  flowchart: { wrappingWidth: 140, rankSpacing: 36, nodeSpacing: 24 },
  themeVariables: {
    fontFamily: css.getPropertyValue('--display'),
    fontSize: '16px',
    primaryColor: '#f1f3f7',
    primaryTextColor: '#171b26',
    primaryBorderColor: color,
    lineColor: '#586074',
    secondaryColor: '#ffffff',
    tertiaryColor: '#ffffff',
    noteBkgColor: '#ffffff',
    noteBorderColor: '#d9dee7',
    actorBorder: color,
    signalColor: '#171b26',
    edgeLabelBackground: '#ffffff',
  },
});

if (document.fonts && document.fonts.ready) await document.fonts.ready;

// Mermaid measures text as it draws, so a deck's slides must be laid out at full size while it works.
const hidden = stage ? [...stage.querySelectorAll('.slide:not(.on)')] : [];
const scale = stage ? stage.style.transform : '';
if (stage) stage.style.transform = 'none';
hidden.forEach((s) => { s.style.display = 'flex'; s.style.visibility = 'hidden'; });
try {
  await mermaid.run({ nodes });
} finally {
  hidden.forEach((s) => { s.style.display = ''; s.style.visibility = ''; });
  if (stage) stage.style.transform = scale;
  document.dispatchEvent(new Event('deck:refit'));
}
