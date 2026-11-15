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
