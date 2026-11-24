---
marp: true
title: "Week 7: Skills"
paginate: true
---

# Skills
### Week 7
COSC-300/500 Applied AI Essentials

---

## Skills

A **skill** is a reusable, documented procedure.

- A folder with a `SKILL.md`
- Optional scripts, templates, reference files
- The agent **loads it when relevant**
- An open format used by several vendors' tools

Instruction files describe a **place**. Skills describe a **procedure**.

---

## Anatomy of a Skill

```markdown
---
name: weekly-status
description: Turn my notes folder into a weekly status update.
  Use when asked for a status report.
---
# Weekly status update
1. Read notes/ from the last 7 days
2. Group by project
3. Write: done, next, blocked
4. Save as status/YYYY-MM-DD.md
```

---

## Loaded in Stages

| Stage | In the context | When |
|---|---|---|
| 1 | Name and description | Always |
| 2 | The full `SKILL.md` | When your request matches |
| 3 | Templates, examples | When the steps call for them |

A long skill costs nothing on tasks that don't use it.

---

## How the Agent Picks a Skill

- The agent always sees every installed skill's **name and description**, and nothing more.
- When your request matches a description, it loads that skill's full instructions.
- So **the description is the trigger**. If it's vague, the skill won't load when you need it, or will load when you don't.

Write the description last, after you know exactly what the skill does.

---

## Descriptions

| Description | Verdict |
|---|---|
| "Helps with reports." | Too vague |
| "Weekly status." | No "when" |
| "Turn my notes folder into a weekly status update. Use when asked for a status report or weekly summary." | What **and** when |

Or ask by name: "Use the weekly-status skill."

---

## Writing the Instructions

1. **Steps**, in order
2. **Output**: format and where to save
3. **Rules**: never do, and what to do when unclear
4. **Supporting files**: a template, an example

Not "format it properly". Say what proper means.

<!-- Test: could a classmate follow it without asking you anything? -->

---

## Which One?

- You've stated the same **fact about the folder** twice → put it in the instruction file.
- You've explained the same **procedure** twice → write a skill.
- It's a one-time job → write a brief, and don't save it.

Each one keeps the others short: the skill doesn't need to repeat the folder's layout, and the brief doesn't need the procedure.

---

## Testing a Skill

- Does it **trigger** when it should? And stay out of the way when it shouldn't?
- Does it follow **every step**, or skip the ones it finds unimportant?
- Does it hold up on **awkward input**: an empty folder, an odd file, a long week?
- After each revision, rerun every test, not just the one that failed.

---

## Live Demo: Writing a Skill

1. Pick a task I do every week.
2. Write the description: what it does and when to use it.
3. Write the steps, the output, and the rules.
4. Run it on a real input.
5. Fix what went wrong, and run it again.
