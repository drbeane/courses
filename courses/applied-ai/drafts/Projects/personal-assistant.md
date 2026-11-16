# Build a Personal Assistant

> **Instructor note.** This project is a draft. Its scope, the week it runs, how it is graded, and its prerequisites are still to be decided. The plan below is a starting point.

**Status:** Draft. The details below may change before the project is assigned.

## What You'll Build

A personal assistant in Claude that knows how you work and can see and update your tasks and notes. By the end it should be able to answer questions such as "What's due this week, and what should I do first?" and handle requests such as "Add the three action items from today's meeting to my task list."

The assistant has three parts:

1. **A Claude project** with instructions that describe you, your commitments, and how you want the assistant to behave.
2. **Connectors** that let the assistant read and update the tools where your work already lives, such as a task manager (Todoist) and a notes app (Notion).
3. **A few Markdown files** that the assistant keeps up to date, such as a weekly plan or a running list of decisions.

## What You Need First

These are the parts of the course the project draws on. The final list will be set when the project is scheduled.

| You'll need | Where it's covered |
|---|---|
| Writing clear instructions | Week 2, Writing Strong Prompts and Memory and Custom Instructions |
| Markdown files and handoffs | Week 2, Markdown and Handoffs |
| Projects and project instructions | Week 4, Projects |
| Standing instruction files | Week 7, Standing Instructions |
| Connectors and their risks | Week 8, Connectors, and Prompt Injection and Defenses |

You will also need accounts on the tools you connect. Todoist and Notion both have free plans that are enough for this project.

## Part 1: The Project and Its Instructions

Create a Claude project for the assistant. Its instructions are the most important thing you'll write. They should cover:

- **Who you are**: your program, your job or other commitments, and your usual week.
- **What the assistant is for**: planning your week, keeping track of tasks, drafting short messages, or something else that fits your life.
- **How it should behave**: how much detail you want, when it should ask before acting, and what it should never do (for example, never delete a task without asking).
- **Where things live**: which tool holds your tasks, which holds your notes, and how they're organized.

Test the instructions with a set of five realistic requests, as you did in Week 2, and revise them at least twice.

## Part 2: Connectors

Connect the assistant to at least one tool where your work lives. Todoist and Notion are suggested, but any connector Claude supports is fine. A calendar is a useful third.

For each connector, record:

- what the assistant can read and what it can change,
- which actions you have set to require your approval, and
- one way the connection could go wrong, and what you've done about it.

Be careful about what you connect. A connector gives the assistant access to everything in that account, and text in a task or note could contain instructions the assistant might follow (Week 8). Start with read access where you can, and turn on changes only after you trust how it behaves.

## Part 3: Markdown Files

Give the assistant a small amount of written memory it can keep up to date: a `weekly-plan.md` file it rewrites every Monday, for example, or a `decisions.md` file that records what you decided and why. Keep it simple. One or two files are enough.

## What You'll Submit

To be decided. A likely set:

- Your project instructions, with the earlier versions and what you changed.
- A short write-up of each connector and its settings.
- A log of one week of real use: what you asked, what it did, and what went wrong.
- A reflection on what you'd hand to the assistant and what you'd keep doing yourself.

## Privacy

Your assistant will see your tasks, notes, and plans. Don't connect accounts that hold other people's private information, such as a work account with client records, unless your employer allows it. Review what the project and its connectors can reach before you submit anything, and remove anything private from what you hand in.
