# Courses

Course sites for Dr. Robbie Beane's classes at Maryville University, built as one site.

Live site: https://drbeane.vercel.app/

| Course | Address | Folder |
|---|---|---|
| Applied AI Essentials (COSC 300/500) | `/applied-ai/` | `courses/applied-ai/` |
| Math for AI (MATH 309/509) | `/math-for-ai/` | `courses/math-for-ai/` |
| AI, Ethics, and Society (COSC 443) | `/ai-ethics/` | `courses/ai-ethics/` |

## Layout

- `site.json`: the home page title and the list of courses, in the order shown.
- `engine/`: the build script and the styles and scripts every course shares.
- `courses/<course>/`
  - `drafts/`: the working drafts, which are the source of truth for course content.
  - `content/`: what the site publishes, cleaned of instructor and speaker notes.
    - `course.json`: weeks, topics, stages, demos, and the course's settings and page text.
    - `lessons/wNN-tN.md` and `slides/wNN-tN.md`: a topic appears as posted once its file exists.
    - `demos/<slug>.html`, `widgets/<name>.html`, `images/`.
    - `resources.md`, and `assessments.md` where a course has one.
  - `style.css` (optional): rules this course adds to the shared styles.
- `tools/sync.mjs`: copies a course's drafts into its `content/`.
- `tools/serve.mjs`: serves the built site locally.

## Common tasks

- Build: `npm install` once, then `node engine/build.mjs`. It prints one "Built N lessons and N decks" line per course.
- Preview: `node tools/serve.mjs`, then open http://localhost:4173.
- Publish from drafts: `node tools/sync.mjs <course> [week numbers]`. Without week numbers it copies every lesson and deck in the drafts, so check `git status` before committing.
- Edit `drafts/` first, then sync. A change made only in `content/` is undone by the next sync.

## Course settings in course.json

| Setting | Effect |
|---|---|
| `description`, `stagesNote` | Text on the course's home page. |
| `text` | Intro text for the Lessons, Slides, Resources and Assessments pages, and `labKicker`. |
| `colors` | Stage colors. Without it, the shared seven colors are used. |
| `topicLabel` | The word before a topic's number. The default is "Topic". |
| `lessonNumbers` | Numbers lessons `NN-LL` and links those numbers, and "A1" style assessment numbers, in text. |
| `math` | Turns `$...$` and `$$...$$` into typeset math. |
| `sentenceCase` | Uses sentence case for built-in labels such as "On this page". |
| `demoHelper` | Loads `engine/demo.js` on demo pages. |
| `draftLayout` | How the drafts folder is laid out: `weeks` (the default) or `modules`. |

## Adding a course

Create `courses/<name>/content/course.json`, add `<name>` to `site.json`, and build.

## Deploying

Vercel builds the site on every push to `main` by running `node engine/build.mjs`. If any course fails to build, the whole build fails and the previous version stays live.
