# Notes

Log of site edits. Add an entry whenever you change the site. The courses came from three
repos, `drbeane/cosc-300`, `drbeane/math-309` and `drbeane/cosc-443`, which were deleted after the
merge on 15 November 2026. Their history was not carried over, so this log starts at the merge.

## 2026-11-23: Tokenization appendix page and demo, W1 edits

- New Appendix page "How Tokenization Works" and a "Tokenizer Explorer" demo (three toy tokenizers and a step-through). Lesson W1 T3 links to both, says a token is not literally a word but can be thought of as one, and has a Demo button.
- W1 T3 objectives: split the first bullet in two; "Predict" became "Anticipate".
- Engine: the outer border around Mermaid diagrams was removed (affects all courses that use diagrams).

## 2026-11-23: Applied AI W1 Lesson 1 wording

- "The topics in this course are loosely ordered by autonomy" and "where you ask questions and it answers", per two Notion edit notes.

## 2026-11-23: Applied AI home page shows lesson counts

- Added the `homeLessonCounts` course setting. When set, the home page shows each week's number of lessons instead of its assignment name. Applied AI uses it, as the notes in Notion asked; Math for AI still shows its lab names.

## 2026-11-15: Combined the three course sites

- Merged `cosc-300`, `math-309` and `cosc-443` into this repo. Each course is served from its own
  path: `/applied-ai/`, `/math-for-ai/` and `/ai-ethics/`. The home page lists the courses.
- One build script, `engine/build.mjs`, replaces the three copies. Differences between courses are
  now settings in each `course.json` (see the README).
- Pages are written with links that start at "/", and the build adds the course's path to them.
- Shared styles are in `engine/site.css`. Math for AI and AI Ethics keep their own page widths and
  centering in `courses/<course>/style.css`, so each course looks as it did before.
- Every built page was compared with the old build of the same course. The only changes are the
  path prefix, an "All courses" link in the footer, and a wrapper around names in the lesson lists.
- Dropped from Math for AI: the `/v2` build and the "New" and "Updated" tags, which were unused.
- The build empties `dist/` instead of deleting it, so the Dropbox-ignore mark on the folder stays.
- `tools/sync.mjs` takes a course name. It handles both draft layouts.

## 2026-11-15: AI Ethics course plan and lesson template

- Stages renamed before the merge: AI and the Individual (Weeks 2–4) and AI and Society (Weeks 5–6).
- `courses/ai-ethics/drafts/Course Docs/01 - Course Outline.md` is the planned outline. It adds one
  lesson per module where the system clearly helps, paid for by five merges, so the count stays
  at 76. The lesson files and the site lesson list still follow the v1 titles and numbering until
  the lessons are rewritten.
- The A2, A3 and A5 recommendations on the Assessments page must state the benefit lost, or the
  cost of not deploying, if the answer is no.
- `04 - Lesson Template.md` replaces the single nine-section structure with three fixed elements
  (an "In this lesson" line, Check your understanding, Sources) and six lesson types: System in the
  world, Idea, How it works, Rules, Case study and Lab. This was pushed to the old `cosc-443` repo
  after the merge and is restored here. No lesson has been rewritten yet, so the site is unchanged.

## 2026-11-15: Optional lessons in AI Ethics

- New engine setting: `"optional": true` on a topic in `course.json` adds an Optional label in the
  lesson list and on the lesson's page. No other course uses it, and their pages are unchanged.
- AI Ethics keeps all 76 lessons as a learning resource. The course assigns 54 of the lessons now
  on the site, and 22 are marked Optional. In the planned outline this is 55 core and 21 optional,
  because some v1 lessons are due to be merged or replaced.
- The Lessons and Assessments pages explain the difference.

## 2026-11-15: Sample rewritten lesson in AI Ethics (02-04)

- Lesson 02-04, Facial Recognition in Policing: Wrongful Arrests, is rewritten in the new structure
  as a sample for review: prose instead of bullets, a section on the case for the system, "Where
  People Disagree", and "Check Your Understanding" with folded answers (`:::answer Answer`).
- The glossary is built from each lesson's Key Terms section, so the new template keeps a short
  Key Terms list. A lesson's type is recorded in the outline, not in the lesson file.
- Five claims in the rewrite need sources. They are listed at the end of
  `drafts/Course Docs/06 - Verification Checklist.md`.

## 2026-11-15: New and Updated tags and the changes page, Math for AI

- New engine setting: `"tag": "new"` or `"updated"` on a topic or a demo in `course.json` shows that
  label in the lesson or demo list and on the lesson's page. No other course uses it, and their
  pages are unchanged.
- A course with `content/changes.md` gets a "What changed" page at `/changes/`. It is not in the top
  navigation. Math for AI links to it from the intro on the Lessons page.
- Math for AI marks 5 lessons and 4 demos New and 21 lessons Updated, for the November 2026
  revision. Lessons that were only corrected are not marked. To retire the tags, remove `tag` from
  `course.json`.

## 2026-11-15: AI Ethics Module 1 rewritten

- All nine Module 1 lessons (01-01 to 01-09) are rewritten in the new structure: prose, headings
  that name the idea, "Check Your Understanding" with folded answers, one "Your Turn" prompt, a
  short Key Terms list and a Core reading. Lesson titles and numbers are unchanged.
- 01-01 adds a fifth case where AI clearly helped (AlphaFold) beside the four 2026 cases.
- The planned outline now has a Type column for all 76 lessons.
- New claims that need sources are listed at the end of `06 - Verification Checklist.md`.

## 2026-11-15: Week 3 widgets for Applied AI

- Eight new widgets in `courses/applied-ai/content/widgets/`, placed in the Week 3 lessons:
  `name-the-error`, `leading-or-neutral` and `risk-spotter` (T1); `check-level`, `claim-picker`
  and `check-match` (T2); `effort-fix` and `feedback-builder` (T3).
- Each placement adds one lead-in sentence and one `{{widget ...}}` line, in the draft and in `content/`.
- `name-the-error`, `leading-or-neutral` and `check-match` reuse the quiz script of `reliability-sort`.
  `risk-spotter` and `claim-picker` share one script: the reader marks parts of a passage, then checks.
- The garden answer in `risk-spotter` is invented, including its ordinance, grant and study, and
  the widget says so. The facts in the `claim-picker` paragraph are real but were not rechecked;
  its superintendent quotation is invented and unattributed on purpose.
- The verdicts in `effort-fix` follow the lesson's "Match the Fix to the Error" table.

## 2026-11-15: Week 2 widgets for Applied AI

- Nine new widgets in `courses/applied-ai/content/widgets/`, placed in the Week 2 lessons:
  `prompt-builder`, `fix-output` and `advice-sort` (T1); `token-estimator` and
  `conversation-growth` (T2); `memory-sort` and `voice-or-type` (T3); `check-sort` and
  `revision-loop` (T4).
- Each placement adds one lead-in sentence and one `{{widget ...}}` line, in the draft and in `content/`.
- The five quiz widgets (`fix-output`, `advice-sort`, `memory-sort`, `voice-or-type`, `check-sort`)
  reuse the markup and script of `reliability-sort` with new items.
- The token counts in `conversation-growth` and `token-estimator` are round numbers or the
  three-quarters-of-a-word rule, and both widgets say so. The context sentence in `prompt-builder`
  and the "Be concise" detour in `revision-loop` are invented for the example.

## 2026-11-15: Week 1 widgets for Applied AI

- Five new widgets in `courses/applied-ai/content/widgets/`, each placed in a Week 1 lesson:
  `reliability-sort` (T2), `surface-explorer` (T3), `delegation-check` (T4), `model-picker` (T5)
  and `opt-out-check` (T6). T2 keeps its `next-token` widget as well.
- Each lesson gained one sentence and one `{{widget ...}}` line, in the draft and in `content/`.
- The numbers in `model-picker` are made up to show the pattern, and the widget says so. Its
  effort levels (Low, Medium, High, Max) were not checked against Claude's menu.
- The surface descriptions in `surface-explorer` are new text, not taken from the lesson.

## 2026-11-15: AI Ethics Module 2 rewritten

- All ten Module 2 lessons are rewritten in the new lesson structure, and Module 2 now follows the
  planned outline.
- 02-07 is now "Always-On Devices: Assistants, Glasses, and Bystanders," which merges the v1
  lessons on always-on assistants and smart glasses.
- 02-08 is new: "Sensing That Helps: Assistive Vision, Captioning, and Access," on blind and deaf
  users of the same sensing technology and what privacy rules would cost them.
- The lesson count is unchanged (10), so no other lesson numbers moved. `course.json` and the
  Topics index are updated. New claims to verify are at the end of `06 - Verification Checklist.md`.

## 2026-11-15: AI Ethics Module 3 rewritten

- All ten Module 3 lessons are rewritten in the new lesson structure, and Module 3 now follows the
  planned outline.
- 03-05 is now "Credit, Insurance, and Housing," which merges the v1 lessons on lending and on
  insurance, housing and tenant screening.
- Criminal justice moves from 03-07 to 03-06, and predictive policing from 03-08 to 03-07.
- 03-08 is new: "Compared to What? When Algorithms Outperform Human Judgment," on the human
  baseline (mammography screening, bail, hiring) and the cost of not deploying.
- The 03-10 lab now asks for the cost of the alternative; its answer key stays in an instructor
  section that the sync removes.
- `course.json`, the Topics index, Resources and lesson references in 05-08, 08-07 and 08-08 are
  updated for the new numbers. New claims to verify are at the end of `06 - Verification Checklist.md`.

## 2026-11-15: AI Ethics Module 4 rewritten

- All ten Module 4 lessons are rewritten in the new lesson structure, and Module 4 now follows the
  planned outline.
- 04-04 is now a case study, "Non-Consensual Intimate Imagery: The Grok Case and the Legal
  Response," which merges the v1 Grok lesson with the lesson on law and platform duties.
- Elections moves from 04-06 to 04-05, and provenance from 04-07 to 04-06.
- 04-07 is new: "Synthetic Media That Helps: Translation, Access, and Restored Voices," on voice
  banking, AI translation and audio description, and consent as the line between help and harm.
- 04-08 and 04-10 no longer point to instructor files; 04-08 now describes its fictional app inline.
- `course.json`, the Topics index, Resources, the design notes and lesson references in 07-09 and
  08-01 to 08-03 are updated for the new numbers. New claims to verify are at the end of
  `06 - Verification Checklist.md`.

## 2026-11-15: AI Ethics Module 5 rewritten

- All nine Module 5 lessons are rewritten in the new lesson structure, and Module 5 now follows the
  planned outline.
- 05-03 is new: "What AI Assistance Does for Workers: Productivity and Skill," on the field
  evidence that AI raises productivity most for less experienced workers, the jagged frontier,
  and whether people learn or come to depend on the tools.
- "Who Captures the Gains?" moves from 05-03 to 05-04.
- 05-05 is now "Algorithmic Management and Workplace Monitoring," which merges the v1 lessons on
  algorithmic management and on monitoring, and holds the Week 5 debate preparation.
- `course.json`, the Topics index and lesson references in 06-06, 07-01 and 07-02 are updated for
  the new numbers. New claims to verify are at the end of `06 - Verification Checklist.md`.

## 2026-11-15: AI Ethics Module 6 rewritten

- All eight Module 6 lessons are rewritten in the new lesson structure, and Module 6 now follows
  the planned outline. No lessons were renumbered.
- The rebound effect (Jevons paradox) moves into 06-02.
- 06-05 is new: "AI for Climate and Science: Forecasting, Grids, and Discovery," replacing
  "Efficiency, Rebound, and AI for Climate." It covers the best-evidenced uses (weather and flood
  forecasting, methane and deforestation monitoring, grid management) and why claims of net climate
  benefit need scrutiny.
- The 06-08 workshop now asks what the county gives up by its recommendation; its instructor notes
  stay in a section the sync removes.
- `course.json` and the Topics index are updated. New claims to verify are at the end of
  `06 - Verification Checklist.md`.

## 2026-11-15: AI Ethics Module 7 rewritten

- All ten Module 7 lessons are rewritten in the new lesson structure, and Module 7 now follows the
  planned outline.
- 07-02 is now "The Cases for Open and Closed Weights," which merges the v1 lessons on each side.
- The v1 lessons 07-04 to 07-09 move up one place, to 07-03 to 07-08.
- 07-09 is new: "AI for Defenders: Finding and Fixing Vulnerabilities," on AI finding and fixing
  software flaws, who gains first, and the cost to open-source maintainers.
- The 07-10 lab no longer points to an instructor file; its notes stay in a section the sync removes.
- `course.json`, the Topics index, Resources, the design notes and lesson references in 01-01 and
  08-01 to 08-08 are updated for the new numbers. New claims to verify are at the end of
  `06 - Verification Checklist.md`.

## 2026-11-15: AI Ethics Module 8 rewritten; course rewrite complete

- All ten Module 8 lessons are rewritten in the new lesson structure. No lessons were renumbered.
- 08-09 now asks for the cost of not deploying alongside the risks of deploying, drawing on the
  "system that helps" lessons in Modules 2 to 7. 08-10's synthesis is updated to match.
- All 76 lessons now follow the new lesson structure, and the outline and Topics notes say so.
- New claims to verify are at the end of `06 - Verification Checklist.md`, grouped by module.

## 2026-11-15 — AI Ethics: verification pass on rewrite claims
- Checked the claims added in the rewrite. Corrected 01-01, 02-04, 02-08, 03-06, 03-07, 03-08, 04-07, 05-06, 05-07, 06-03, 06-05, 06-06, 07-04 and 07-09; added sources across Modules 1-8.
- Verification Checklist: the rewrite sections are replaced by one status list. Still open: 01-03, 01-08 and 07-08.

## 2026-11-15: Applied AI Weeks 1–2 restructured; search, text size, layout, glossary, projects and appendix

Content (Applied AI):
- New Week 1, Topic 2, What Is AI? The old Topics 2 to 6 are now 3 to 7.
- Week 2 now has seven topics: Writing Strong Prompts; Tokens and the Context Window; Markdown and
  Handoffs (new); Managing Usage Limits (new); Memory and Custom Instructions (voice removed);
  Voice Mode and Dictation (new); Testing and Revising Prompts. Each new topic has a deck and a
  widget (`what-is-ai`, `handoff-check`, `usage-saver`).
- Week 5, Topic 1 keeps a short Markdown recap that links to Week 2, Topic 3.
- New Projects section with a draft page, Build a Personal Assistant. New Appendix, linked from the
  footer, with The History of AI.
- Planning list: `drafts/Draft Outline/04 - Planning Notes.md`.

Engine (all three courses):
- Lesson layout: the reading column is centered on the page on wide screens, with the contents list
  in the left margin. Below 79rem the contents list and column sit side by side, centered as a pair.
  Lesson pages use a wider main area (`main.reading`, 86rem). Math for AI's `.lesson` width rule
  was removed so it uses the shared layout.
- New sizes:
  - Lesson text column: 42rem (672px) → 48.5rem (776px), about 15% wider.
  - Lesson text: 1.16rem (18.6px) → 1.06rem (17px).
  - Lesson h2: 1.75rem (28px) → 1.5rem (24px). Lesson h3: 1.2rem (19.2px) → 1.1rem (17.6px).
  - Lesson page title: clamp(2.2rem, 5vw, 3.6rem), at most 57.6px → clamp(1.9rem, 4vw, 2.85rem),
    at most 45.6px.
- Text size control in the lower right of every page (`engine/page.js`): small (93.75%), standard,
  large (112.5%). It scales the whole page and is remembered in the reader's browser.
- Search box in each course's top bar. It searches that course's lessons, projects and appendix
  pages, from `/<course>/search.json`, which the build writes. Results open at the matching
  section. "/" focuses the box; arrow keys and Enter pick a result.
- Glossary: `content/glossary.md` can hold a longer description for any term under a `## Term`
  heading. `tools/sync.mjs` copies it from `drafts/Glossary.md`. Applied AI has descriptions for
  the Week 1 and 2 terms. Terms in each lesson's Key Terms section link to the glossary.
- `course.json` settings: `projects` and `appendix` (slug, name, about, optional weeks and tag),
  with pages in `content/projects/` and `content/appendix/`, synced from `drafts/Projects/` and
  `drafts/Appendix/`. New tag value: `"draft"`.

## 2026-11-15: Glossary pop-ups and filter; title alignment; code blocks; voice lesson

- Glossary (engine, all courses): the list is back to term, short definition and lessons. A term
  with an entry in `content/glossary.md` is a button that opens a pop-up with a detailed
  definition, links to the lessons that use it, and resources (a `### Resources` list under the
  term's `##` heading). A filter box above the list matches terms and definitions. A link to
  `/glossary/#term` opens that term's pop-up, so Key Terms links in lessons open it directly.
- Applied AI: detailed entries and resource links for all 219 glossary terms. Every link was
  checked; the few that refuse automated checks are already on the Resources page.
- Lesson pages: the title block starts at the contents list's left edge again, while the reading
  column stays centered. Project and appendix pages match.
- Fenced code blocks are one shaded box (`.prose pre`), instead of shading each line.
- Applied AI 02-06 (Voice Mode and Dictation): removed the "interface, not a surface" section and
  slide. 14-02: split the combined FERPA/HIPAA key term so HIPAA has its own glossary entry.

## 2026-11-15: Interactive widgets folded by default

- Engine: every `{{widget ...}}` in a lesson is wrapped in a fold (`details.wfold`), closed by
  default. The fold's label is the title and subtitle from the widget's own header, and that
  header is hidden inside the fold. Folds open when the page is printed. Applies to all 26 Applied
  AI widgets; the other courses have none.

## 2026-11-16: Applied AI corrections, Week 1 and "Final project"

- 01-01 About This Course: the course is "loosely" ordered by autonomy; weekly assignments no
  longer drop the lowest score; new "What Claude Academy Is" subsection (the list of required
  courses and how to submit them is still to be filled in); "In many courses, AI use might be
  restricted"; the journal's four questions are now delegate, tools or skills used, check, and
  results. Slides and the draft outline match.
- 01-02 What Is AI?: "A Working Definition of AI"; AI defined as a subfield of computer science;
  section renamed "From Machine Learning to Large Language Models", with LLMs as a fifth level in
  the diagram, a definition, and a paragraph on what "AI tools" means in this course. The "LLM"
  key term (01-02 and 01-03) and glossary entry are now "Large language model (LLM)".
- Renamed "capstone" to "final project" everywhere in Applied AI: lessons, slides, course.json
  titles, the RAG demo, two widgets, resources, and the draft file names.

## 2026-11-16: Applied AI Week 1 revisions from toolbar comments

- Lesson 6 (Vendors, Models, and Effort): new opening line; xAI/SpaceX, more models and products
  in the table; new sections on what the model and the product each do, open and closed weights,
  how reasoning works, and price and benchmarks; Cursor added as a product that uses other
  companies' models. Matching slides added. Vendor facts checked 2026-11-16.
- New widget `widgets/reasoning-trace.html` ("Watch a Model Think"): one problem with no
  thinking, a small budget, and a large budget, step by step.
- Lesson 5 (The 4D Framework): removed the Delegation Check widget and deleted its file.
- Lesson 7 (Privacy Settings): instructor note marks the Claude incognito and ChatGPT temporary
  chat screenshots as pending.
- Renamed the Lesson 4 drafts to "W01-T4 - AI surfaces" and updated the "surfaces map" references
  in the resources page, the slides README, and the Week 1 outline.
