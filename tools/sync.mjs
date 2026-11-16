// Copies a course's drafts into its content/, removing anything meant only for the instructor.
// Usage: node tools/sync.mjs <course> [week numbers]
// For example, "node tools/sync.mjs applied-ai 1 2" copies only the lessons and slides of weeks 1
// and 2. Without week numbers, every lesson and deck in the drafts is copied.
//
// The drafts are laid out in one of two ways, set by "draftLayout" in the course's course.json:
//   weeks (the default)  Lessons/Week NN/WNN-TN - Title.md and WNN-Lab - Title.md, the same under
//                        Slides/, and Draft Outline/03 - Supplementary Resources.md.
//   modules              Module MM - Name/MM-LL - Title.md, the same under Slides/, and
//                        Course Docs/03 - Assessments.md and Course Docs/Resources.md.
import fs from 'node:fs';
import path from 'node:path';

const name = process.argv[2];
const dir = path.join(import.meta.dirname, '..', 'courses', name || '');
if (!name || !fs.existsSync(path.join(dir, 'content/course.json'))) {
  console.error('Give a course: one of the folders in courses/.');
  process.exit(1);
}
const src = path.join(dir, 'drafts');
const out = path.join(dir, 'content');
const only = process.argv.slice(3).map(Number);
const layout = JSON.parse(fs.readFileSync(path.join(out, 'course.json'), 'utf8')).draftLayout || 'weeks';

// The lesson or deck files under a folder, with the page id each one becomes.
function pageFiles(folder, isFolder, toId) {
  const found = [];
  if (!fs.existsSync(folder)) return found;
  for (const sub of fs.readdirSync(folder)) {
    const sdir = path.join(folder, sub);
    if (!isFolder(sub) || !fs.statSync(sdir).isDirectory()) continue;
    for (const f of fs.readdirSync(sdir)) {
      const page = toId(f);
      if (page && (!only.length || only.includes(page.week))) found.push({ id: page.id, file: path.join(sdir, f) });
    }
  }
  return found;
}

// Drop Marp front matter and speaker notes (HTML comments).
function cleanSlides(md) {
  return md.replace(/\r\n/g, '\n').replace(/^---\n[\s\S]*?\n---\n/, '').replace(/<!--[\s\S]*?-->\n?/g, '').trim() + '\n';
}

const layouts = {
  weeks() {
    // Topic files are named WNN-TN. Each week's lab and assignment page is WNN-Lab.
    const toId = (f) => {
      const m = f.match(/^W(\d\d)-(T\d+|Lab)\b.*\.md$/);
      return m && { week: +m[1], id: `w${m[1]}-${m[2].toLowerCase()}` };
    };
    // Drop "> **Instructor note..." blockquotes.
    const stripInstructorNotes = (md) => {
      const keep = [];
      let skipping = false;
      for (const line of md.split(/\r?\n/)) {
        if (/^>\s*\*\*Instructor note/.test(line)) { skipping = true; continue; }
        if (skipping && line.startsWith('>')) continue;
        if (skipping && line.trim() === '') { skipping = false; continue; }
        skipping = false;
        keep.push(line);
      }
      return keep.join('\n');
    };
    // Drop drafting notes, link-check marks, and the Outcomes column.
    const cleanResources = (md) => {
      const keep = [];
      let drop = -1, inTable = false;
      for (let line of md.replace(/\r\n/g, '\n').split('\n')) {
        if (/^## Notes/.test(line)) break;
        if (/^# /.test(line) || /^_Compiled/.test(line) || /^\*\*Key:\*\*/.test(line)) continue;
        line = line.replace(/[✓◦] /g, '');
        if (line.startsWith('|')) {
          const cells = line.split('|').slice(1, -1);
          if (!inTable) { drop = cells.findIndex((c) => c.trim() === 'Outcomes'); inTable = true; }
          if (drop >= 0) cells.splice(drop, 1);
          line = '|' + cells.join('|') + '|';
        } else inTable = false;
        keep.push(line);
      }
      return keep.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
    };
    return {
      lessons: pageFiles(path.join(src, 'Lessons'), () => true, toId),
      slides: pageFiles(path.join(src, 'Slides'), () => true, toId),
      cleanLesson: stripInstructorNotes,
      docs: [['Draft Outline/03 - Supplementary Resources.md', 'resources.md', cleanResources]],
    };
  },

  modules() {
    // Lesson LL of module MM, in the file MM-LL - Title.md, becomes page wMM-tL.
    const isModule = (sub) => /^Module \d\d/.test(sub);
    const toId = (f) => {
      const m = f.match(/^(\d\d)-(\d\d) .*\.md$/);
      return m && { week: +m[1], id: `w${m[1]}-t${+m[2]}` };
    };
    // Drop "## ... instructor ..." sections (to the next ## heading) and "> **Instructor note" blockquotes.
    const stripInstructor = (md) => {
      const keep = [];
      let section = false, quote = false;
      for (const line of md.split(/\r?\n/)) {
        if (/^## /.test(line)) section = /instructor/i.test(line);
        if (section) continue;
        if (/^>\s*\*\*Instructor note/.test(line)) { quote = true; continue; }
        if (quote && line.startsWith('>')) continue;
        if (quote && line.trim() === '') { quote = false; continue; }
        quote = false;
        keep.push(line);
      }
      return keep.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
    };
    // The drafts link to the reading access register and research notes, which are not published.
    // Drop the "access notes" links and markers, drop lines that point only at local course
    // material, and turn any other link to a local .md file into plain text.
    const stripLocalLinks = (md) => md
      .replace(/;?\s*\[access notes\]\([^)]*\.md[^)]*\)/g, '')
      .replace(/\s*<!-- reading-access -->/g, '')
      .split('\n').filter((l) => !/Local course material/.test(l)).join('\n')
      .replace(/\[([^\]]+)\]\((?!https?:)[^)]*\.md(#[^)]*)?\)/g, '$1');
    // Course documents: drop the title, and any line or sentence that is only for the instructor.
    const cleanDoc = (dropLines) => (md) => stripLocalLinks(md.replace(/\r\n/g, '\n'))
      .split('\n').filter((l) => !/^# /.test(l) && !dropLines.some((re) => re.test(l))).join('\n')
      .replace(/ ?This revises COSC-643's "[^"]*" assignment\./g, '')
      .replace(/ New tasks replace old ones; nothing here is in addition to the old [^.]*\./g, '')
      .replace(/\n{3,}/g, '\n\n').trim() + '\n';
    return {
      lessons: pageFiles(src, isModule, toId),
      slides: pageFiles(path.join(src, 'Slides'), isModule, toId),
      cleanLesson: (md) => stripLocalLinks(stripInstructor(md)),
      docs: [
        ['Course Docs/03 - Assessments.md', 'assessments.md', cleanDoc([/COSC-643 pattern/, /_Instructor\//])],
        ['Course Docs/Resources.md', 'resources.md', cleanDoc([/^These are stable references/])],
      ],
    };
  },
};

if (!layouts[layout]) { console.error(`Unknown draftLayout "${layout}" in ${name}.`); process.exit(1); }
const plan = layouts[layout]();
fs.mkdirSync(path.join(out, 'lessons'), { recursive: true });
fs.mkdirSync(path.join(out, 'slides'), { recursive: true });
for (const s of plan.lessons) fs.writeFileSync(path.join(out, 'lessons', s.id + '.md'), plan.cleanLesson(fs.readFileSync(s.file, 'utf8')));
for (const s of plan.slides) fs.writeFileSync(path.join(out, 'slides', s.id + '.md'), cleanSlides(fs.readFileSync(s.file, 'utf8')));
for (const [from, to, clean] of plan.docs) {
  const file = path.join(src, from);
  if (fs.existsSync(file)) fs.writeFileSync(path.join(out, to), clean(fs.readFileSync(file, 'utf8')));
}
// In either layout: drafts/Projects/<slug>.md and drafts/Appendix/<slug>.md become those pages,
// and drafts/Glossary.md holds the glossary's longer descriptions. Instructor notes are removed.
let extra = 0;
for (const folder of ['Projects', 'Appendix']) {
  const from = path.join(src, folder);
  if (!fs.existsSync(from)) continue;
  const to = path.join(out, folder.toLowerCase());
  fs.mkdirSync(to, { recursive: true });
  for (const f of fs.readdirSync(from).filter((f) => f.endsWith('.md'))) {
    fs.writeFileSync(path.join(to, f), plan.cleanLesson(fs.readFileSync(path.join(from, f), 'utf8')));
    extra++;
  }
}
if (fs.existsSync(path.join(src, 'Glossary.md'))) fs.writeFileSync(path.join(out, 'glossary.md'), fs.readFileSync(path.join(src, 'Glossary.md'), 'utf8'));
console.log(`Synced ${plan.lessons.length} lessons, ${plan.slides.length} decks and ${extra} project and appendix pages into`, out);
