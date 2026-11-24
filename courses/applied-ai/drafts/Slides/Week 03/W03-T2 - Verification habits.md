---
marp: true
title: "Week 3: Verification Habits"
paginate: true
---

# Verification Habits
### Week 3
COSC-300/500 Applied AI Essentials

---

## How Much to Check?

Two questions:

- **What would a mistake cost?**
- **How likely is a mistake?**

| Situation | Checking |
|---|---|
| Brainstorm, rough outline | Read it over |
| Study guide, email to a colleague | Spot-check the facts |
| Paper, report, advice you'll act on | Verify every claim it depends on |
| Medical, legal, financial, safety | Starting point only |

---

## First: Pull Out the Checkable Claims

Before you check anything, mark every:

- name of a person, place, or organization
- number and date
- quotation
- citation
- causal claim: "X caused Y"

The list is shorter than the text makes it seem. Most sentences connect the claims; only the claims need checking.

---

## Five Habits

- **Trace sources**: open the link and find the claim on the page.
- **Recompute**: redo the numbers yourself, in a spreadsheet, or in code.
- **Test**: run the code, follow the steps, try the formula.
- **Cross-check**: ask in a new chat, try a second model, or find a non-AI source.
- **Ask about uncertainty**: "Which claims are you least sure of?" points you to where to look first.

---

## Trace Sources: Three Ways to Fail

1. The source **doesn't exist**
2. The source exists and **doesn't say that**
3. The source says it and **isn't reliable**

A link that exists is not a link that supports the claim.

Use Ctrl+F on the page to find the number, name, or phrase the answer relied on.

<!-- Number 2 is the most common with web-search tools. Show one live if you have an example. -->

---

## Recompute and Test

- Is the answer the right **size**? A ten-second estimate catches many errors.
- Let a spreadsheet add the column instead of trusting the total in the text.
- Ask the model to calculate **in code**, where the arithmetic is done by the computer.
- Run code on more than the example shown, including an edge case.
- Follow the steps yourself: menus and settings change after training.

---

## Cross-Check

- Ask the same model again in a **new chat**, without the earlier answer in view.
- Ask a different model, from a different company.
- Find a source that isn't AI: a textbook, an official site, a person who knows.

**Agreement** is weak evidence: models learned from similar text and share mistakes.
**Disagreement** tells you exactly where to dig.

---

## Match the Check to the Error

| Worried about | Best check |
|---|---|
| Hallucination | Trace sources |
| Outdated knowledge | Find a current, dated source |
| Arithmetic | Recompute |
| Reasoning | Follow the steps; new chat |
| Misread instructions | Compare to your prompt |
| Sycophancy | Ask again, neutrally |

---

## Self-Critique: Useful, but Limited

- Asking "check your answer" sometimes catches real errors, especially arithmetic and dropped constraints.
- It can also invent new problems to seem helpful, or confirm the old ones.
- In the same chat, it has the same context and the same pull toward its first answer.
- It is **not** a substitute for an outside check against a source or a recomputation.

---

## When You Can't Verify It

- Leave it out, if the work doesn't depend on it.
- Say that it's unverified, and say what you couldn't confirm.
- Ask someone who would know, such as an instructor, librarian, or expert.

Don't present it as established. You're responsible for what you send, whoever drafted it.
