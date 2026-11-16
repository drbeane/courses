# Notes

Log of site edits. Add an entry whenever you change the site. The courses came from three
repos, `drbeane/cosc-300`, `drbeane/math-309` and `drbeane/cosc-443`, which were deleted after the
merge on 15 November 2026. Their history was not carried over, so this log starts at the merge.

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
