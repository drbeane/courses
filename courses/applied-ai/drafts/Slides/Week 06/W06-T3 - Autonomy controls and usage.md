---
marp: true
title: "Week 6: Autonomy Controls and Usage"
paginate: true
---

# Autonomy Controls and Usage
### Week 6
COSC-300/500 Applied AI Essentials

---

## Autonomy Controls

How much the agent may do **without asking**:

- **Plan first**: it proposes a plan, and nothing changes until you approve it.
- **Ask each time**: you approve every action before it happens.
- **Auto-accept edits**: it edits files freely, and you review afterward.
- **More autonomy**: fewer checks, faster work, more risk.

Choose the setting by what a mistake would cost, not by how much you trust the tool.

---

## Plan Before Acting

- Read the plan like a manager reads a proposal from a new hire.
- Is the goal right? Are the inputs right? Does the order make sense?
- **Edit the plan** before approving it. You can add, remove, or reorder steps.
- This is the cheapest moment to catch a mistake: nothing has changed yet.

---

## What to Look for in a Plan

- A step you **didn't ask for**, such as "remove duplicate files"
- A **missing** step, such as checking the result before reporting
- A wrong **assumption** about your files or your goal
- The wrong **scope**: too many folders, or too few

Ask: what would make me refuse this plan?

---

## Irreversible Actions

Pause and think before approving:

- Deleting or overwriting files
- Sending messages or email
- Spending money
- Anything outside the working folder

**Keep backups. Work on copies.**

---

## Interrupt and Redirect

- You can stop an agent mid-task when you see it heading the wrong way.
- Say what's wrong and what to do instead: "Stop. Don't rename the originals. Copy them into `sorted/` instead."
- Recovering well is a skill. Don't just start over: the agent already knows the folder, and you can keep the good work.

---

## Approval Fatigue

Twenty requests in a row → you stop reading and select "yes".

- Let low-risk actions, such as reading files, through without asking.
- Keep approvals for actions that change or send something.
- Then **read** the requests you do see. An approval you didn't read isn't supervision.

---

## Reviewing the Result

"Done" means ready for review.

- Go through your **acceptance criteria**
- Open the files; compare **counts**
- Check a **sample** by hand
- Ask: "What did you not do? What were you unsure about?"
- Look for **side effects**

---

## Usage and Context

- Every task consumes **usage** from your plan
- Big folders and long tasks fill the **context window**
- Check what a task cost after it runs
- Cost drivers: how much it reads, how many steps, the model, rework
- A clear brief is the cheapest way to cut usage

> Pro limits reset on a 5-hour session and a weekly window.

<!-- Show the Cowork usage view or "Explain usage". In Claude Code, /usage and /context; covered in week 9. -->
