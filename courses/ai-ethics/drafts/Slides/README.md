# Slide decks

One Markdown deck per lesson, in a folder per module, with the same file name as the lesson: `Slides/Module 01 - Ethical Foundations and AI in Society/01-01 - Why AI Ethics Now.md`. A lesson's "Open the slides" button appears once its deck is synced.

## Format
- Slides are separated by a line containing only `---`.
- A slide that starts with `# ` is a title slide. Other slides start with `## `.
- Front matter (`marp: true`) lets the files render as slides with the Marp extension for VS Code. Sync removes it.
- Speaker notes are HTML comments (`<!-- ... -->`). Sync removes them, so they never reach the site.
