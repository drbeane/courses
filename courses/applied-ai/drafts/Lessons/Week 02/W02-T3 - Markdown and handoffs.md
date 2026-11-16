# Week 2: Markdown and Handoffs

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Have a finished chat with some real work in it (a research summary works well). You will ask for it as a Markdown file, download it, open it in a text editor, and convert it to a Word document. Then ask for a handoff file and paste it into a new chat. Check where the download and "copy" controls sit in Claude this week. Timing: 15 min.

## What You Will Be Able to Do

- Read and write the basic Markdown symbols.
- Ask an AI tool for its output as a Markdown file, and turn that file into a Word document.
- Explain why a long chat fills its context window, and when starting a new chat saves usage.
- Write a handoff file that lets a new chat, or another person, pick up where you left off.

## Markdown in One Page

**Markdown** is a way to mark a document's structure with ordinary characters. A `#` at the start of a line makes a heading, a `-` makes a bullet, and `**two asterisks**` on each side make bold text. A Markdown file is plain text: you can open it in any text editor and read it, with nothing hidden.

You have already been reading Markdown. Chat tools write their replies in it and display the result, which is where the headings, bullets, and bold text in a reply come from. This course's lessons and slides are Markdown files too.

```markdown
# Research summary: campus food insecurity

## Key findings

- About a third of students surveyed reported skipping meals to save money.
- Use of the campus pantry rose **40%** in two years.

## Open questions

1. How many students qualify for SNAP but don't apply?
2. Which interventions have been tested at schools like ours?

Source: [the 2026 student survey](https://example.edu/survey)
```

The symbols to know:

| You type | You get |
|---|---|
| `# ` at the start of a line | A heading. More `#` signs make smaller headings: `##`, `###`. |
| `- ` at the start of a line | A bullet |
| `1. ` at the start of a line | A numbered item |
| `**text**` | Bold |
| `*text*` | Italic |
| `[words](address)` | A link |
| `` `text` `` | Code or an exact value |
| Lines of cells separated by `\|` | A table |

That short list covers almost everything you will need. Week 5 returns to Markdown alongside other plain-text formats (CSV, JSON, and diagrams written as text).

## Markdown as an Output Format

When you ask an AI tool for something you plan to keep, ask for it **as a Markdown file**. It is a good default for written output for several reasons:

- **It keeps the structure.** Headings, lists, and tables survive. Text copied out of a chat window often loses them.
- **It opens anywhere.** Any text editor, any notes app, GitHub, and most AI tools read Markdown.
- **It converts easily.** A Markdown file becomes a Word document, a PDF, a web page, or a slide deck with very little work.
- **It's easy to check.** Everything in the file is visible. Nothing is hidden in formatting.

A research request might end like this:

> Put the summary in a Markdown file I can download. Use a heading for each question, bullets for the findings, and a Sources section at the end with a link for each source.

Most chat tools show the file as a separate document you can download. If yours doesn't, ask it to put the whole document in one code block, and copy it from there.

### From Markdown to Word

When you need a Word document, for an assignment or for someone who works in Word, you have several routes:

- **Ask the tool.** Many chat tools can create a `.docx` file directly from the Markdown. Week 5 covers file creation in more detail.
- **Paste it into a converter.** Google Docs has a setting that turns Markdown into formatting as you paste, and several free tools and editors convert a `.md` file to `.docx`.
- **Use Pandoc.** It is a free program that converts between dozens of formats, and it is the standard tool for this job if you do it often.

:::steps Converting a Markdown File with Google Docs
1. In Google Docs, open **Tools**, then **Preferences**, and turn on **Enable Markdown**.
2. Open the Markdown file in a text editor, select all of it, and copy it.
3. In a new Google Doc, open **Edit**, then **Paste from Markdown**. If that item isn't there, paste normally.
4. To get a Word file, open **File**, then **Download**, then **Microsoft Word (.docx)**.
:::

> **Instructor note.** Google Docs menu names change. Check these steps the week you teach.

## Why Long Chats Get Expensive

The last topic showed that a model rereads the whole conversation every time you send a message. Two things follow:

- **A long chat costs more with every message.** Message 40 carries the 39 messages before it, plus every file attached along the way. On a subscription, that extra reading comes out of your usage limit. Through the API (Week 11), you pay for it directly.
- **A long chat also gets worse.** Early details get crowded out, old mistakes stay, and the topic drifts.

So the habit is the same for cost and for quality: **when a chat has done its job, or has wandered, start a new one** and bring along only what matters. The next topic looks at usage limits in more detail. The rest of this one is about the "bring along only what matters" part.

## Handoff Files

A **handoff file** is a short Markdown document that captures where a piece of work stands, written so that a new chat (or a classmate, or you next week) can continue it without the whole history.

Ask for one at the end of a working session:

> We're going to continue this in a new chat. Write a handoff file in Markdown with these sections: Goal, What We Decided, Current Draft, Open Questions, and Next Steps. Leave out the approaches we rejected. Keep it under a page.

A handoff might look like this:

```markdown
# Handoff: cover letter for the County Health internship

## Goal
A one-page cover letter for the summer data internship, due Friday.

## What we decided
- Lead with the hospital volunteer project, not coursework.
- Mention the Excel dashboard by name, with the 20% time saving.
- Formal tone, but no "To whom it may concern."

## Current draft
(The latest version of the letter is pasted below.)

## Open questions
- Should the letter mention the statistics minor?

## Next steps
1. Tighten the second paragraph to three sentences.
2. Write a closing that asks for an interview.
```

Then:

1. **Read it and correct it.** The model may have left out a decision or kept one you rejected. You are the one who knows.
2. **Save it** as a `.md` file, named for the project and the date.
3. **Start a new chat**, attach or paste the file, and say what to do next: "Here's where we left off. Start on step 1."

The new chat starts with the decisions and without the dead ends, and every message in it is cheaper than it would have been at the end of the old one.

### Why Write It as a File

You could paste a handoff summary straight into a new chat, as the last topic suggested. Saving it as a Markdown file adds a few things:

- **It lasts.** A file you saved is there next week. A summary buried in a chat is hard to find again.
- **It travels.** The same file works in another product, in a project (Week 4), or with an agent on your computer (Week 6). It also works for a person: send it to a group partner.
- **It grows.** Update the file at the end of each session, and it becomes a running record of the project.

This is also how the agents later in the course keep track of long work. In Week 7 you will write instruction files for agents, and they are Markdown files too.

Test your judgment on a few situations below.

{{widget handoff-check}}

> **Instructor note: demo.** Take your prepared chat, ask for the summary as a Markdown file, and open the file in a plain text editor so students see the symbols. Convert it to Word. Then ask for a handoff file, start a new chat with it, and continue the work in one message.

## Key Terms

- **Markdown**: a way to mark a document's structure (headings, lists, bold text, links, tables) with ordinary characters, saved as a plain-text `.md` file.
- **Plain text**: a file that holds only characters, with no hidden formatting, so any text editor can open and show all of it.
- **Handoff file**: a short Markdown document that records where a piece of work stands, so a new chat or another person can continue it.
- **Pandoc**: a free program that converts documents between formats, such as Markdown to Word.
