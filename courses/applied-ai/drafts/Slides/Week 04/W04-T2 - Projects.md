---
marp: true
title: "Week 4: Projects"
paginate: true
---

# Projects
### Week 4
COSC-300/500 Applied AI Essentials

---

## The Problem

- Every new chat starts empty. The model doesn't know your course, your readings, or what you did yesterday.
- Work that runs for weeks means repeating yourself: re-uploading files and re-explaining the task.
- Custom instructions apply to **everything**, so they can't hold one course's details without cluttering all your other chats.
- Long single chats aren't the answer either: they degrade and burn through usage.

---

## Projects

A **project** is a persistent workspace:

- **Instructions** that apply to every chat in it
- **Reference files** (a knowledge base)
- **Project memory**: what it learns across chats
- Many chats about one body of work

What's in the project stays out of your other chats.

---

## Project Instructions Answer Four Questions

1. What is this project for? Name the course, paper, or job, and the goal.
2. Who are you, and who is the audience for what it produces?
3. How should responses look: length, format, tone, citation style?
4. What should the model do or avoid? For example, "give feedback, don't write paragraphs."

Write them once, and every chat in the project starts with them.

---

## Two Lines Worth Adding

**How to use the files**
> Answer from the attached files and tell me which file each point comes from. If they don't cover something, say so.

**What kind of help you want**
> I'm writing the paper myself. Give me feedback and questions. Don't write paragraphs for me.

---

## Choosing Reference Files

- Add what you'd want a helper to have read before they started.
- Leave out what doesn't bear on the work. Extra files dilute the useful ones.
- Use clear file names, so the model can cite them and you can follow the citation.
- Prefer real text over scans and image-heavy slides, which may not be readable.
- Mind what you upload: the same privacy rules apply as in chat.

---

## When a Project Beats a One-Off Chat

- Work that runs across **many sessions**
- Same sources, same instructions, every time
- A course, a research paper, a job search, a client

One-off question? Just chat.

Still start a new chat inside the project when the task changes. The project keeps the context; each chat stays short.

---

## Demo: A Project for a Course You're Taking

1. Create the project
2. Write project instructions (role, audience, format)
3. Add the syllabus and key readings
4. Start two chats; show they share context

<!-- Note: project sharing needs Team/Enterprise; Pro projects are individual. -->

---

## Check That It Works

- Ask something that **is** in your files. Does the answer match, and does it cite the right file?
- Ask something that **isn't** in your files. Does it say so, or does it fill the gap from memory?
- Ask for something your instructions rule out. Do the instructions hold?

Three questions, five minutes. Do it before you rely on the project for real work.
