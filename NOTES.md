# Notes

Log of site edits. Add an entry whenever you change the site. Each course's earlier history is in
its old repo: `drbeane/cosc-300`, `drbeane/math-309` and `drbeane/cosc-443`.

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
