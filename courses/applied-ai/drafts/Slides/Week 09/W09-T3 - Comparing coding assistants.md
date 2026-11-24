---
marp: true
title: "Week 9: Comparing Coding Assistants"
paginate: true
---

# Comparing Coding Assistants
### Week 9
COSC-300/500 Applied AI Essentials

---

## The Forms a Coding Assistant Takes

- **Autocomplete**: suggests the next lines as you type
- **Chat in the editor**: answers questions and sees your open files
- **Agent**: plans, edits many files, and runs commands and tests
- **Cloud agent**: works on a copy of the project and returns a finished change for review

This course uses the agent form, because it's the one that needs the most supervision.

---

## Claude Code vs GitHub Copilot Student

| | Claude Code (Pro) | GitHub Copilot Student |
|---|---|---|
| Where | VS Code, terminal | VS Code, terminal |
| Plan step | Plan mode | Plan agent |
| Model choice | Yes | Automatic only |
| Allowance | Pro's 5-hour and weekly limits | Monthly credit allowance |

<!-- Re-check Copilot Student terms the week of class; they changed twice in 2026. -->

---

## What the Class's Own Tests Showed

Same 10-prompt build, one run each:

- Claude Pro (Sonnet): about **2%** of a weekly allowance
- Copilot Student (automatic): **27%** of the monthly allowance; app failed 2 tests and wouldn't launch

One run each: treat as a data point, not a law.

---

## Two Different Things

**Quality**: did the finished application work? Did it pass the checks, and does it launch?

**Cost**: how much of the allowance did it use to get there?

On a fixed allowance, both matter. A tool that works but uses a quarter of your month on one small app limits what else you can build.

---

## Comparing Tools Fairly

- Give both the **same task**, word for word.
- Start both from the **same starting point**: the same files, the same instructions.
- Decide what you'll **measure** before you start, not after you see the results.
- Run the **same checks** on both results.
- Repeat if you can. One run can be lucky or unlucky.
- Record the **date and versions**, because both change.

---

## What to Measure

| Measure | Record |
|---|---|
| Did it work? | Checks passed |
| How much did you step in? | Corrections and restarts |
| How long? | Minutes to a working result |
| What did it cost? | Share of allowance |

---

## Comparisons Go Out of Date

- Models are replaced several times a year, and a tool's default model can change overnight.
- Plans and allowances are revised, sometimes more than once a term.
- A comparison from six months ago may describe tools that no longer exist in that form.

The method lasts: same task, same checks, a record of what you measured.
