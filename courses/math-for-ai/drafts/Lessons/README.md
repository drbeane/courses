# MATH 309/509 Math for AI: lesson texts

Full lesson text, organized by topic within each week. A week has one file per topic (`WNN-TN - Title.md`) and one lab file (`WNN-Lab - Lab N.md`). These files were first converted from the MATH 509 Canvas master shell. They are now the source of truth: edit here, then run `node tools/sync.mjs drafts` to copy them into `content/`.

The order and titles of a week's topics are set in `content/course.json`. If you add, remove, rename or reorder a topic, change it there and renumber the files to match.

## How each lesson is organized
- A first line with the week and title. The site drops it and takes the title from `course.json`.
- A facts line: the course name in bold, then the stage, separated by ` · `.
- An opening paragraph, usually with a link to the lesson's Colab notebook.
- Sections under `##` headings, in sentence case. The site builds its "On this page" list from them.
- Optionally, a `## Key terms` section holding one paragraph of `**Term**: definition.` pairs. The site's glossary is built from these. No lesson has one yet.

## Math
Write math as LaTeX. Use `$...$` inside a sentence and `$$...$$` on a line of its own for a displayed equation. Keep a displayed equation on one line. Write a literal dollar sign as `\$`. Nothing inside a code block or code span is treated as math. If an equation cannot be read, the build prints a warning that names the lesson.

## Code
Put code and program output in fenced blocks (three backticks). Put short code inside a sentence in single backticks.

## Images and videos
Images live in `content/images/` and are written as `<img src="/images/name.png" alt="..." width="400">`. The width is optional. A video is an embedded player inside `<div class="video">...</div>`.

## Collapsible callouts
Material that is useful to have but breaks up the reading goes in a callout, which the site shows folded until the reader opens it:

```
:::image Image description: Tangent line
A red curve rises, turns down, then rises again...
:::
```

- `:::image` holds the long description of a figure. `:::steps` holds click-by-click steps and is titled "Step-by-step instructions". Text after the type sets the title.
- A callout can hold paragraphs, lists, and tables. It cannot hold another callout.
- New types are added in `build.mjs`, in the `CALLOUTS` list, each with its default title.

## Instructor notes
An instructor note is a blockquote that begins with **"Instructor note"**:

> **Instructor note: preparation.** ...

Sync removes these from the published lesson. Other blockquotes are kept. No lesson has an instructor note yet.
