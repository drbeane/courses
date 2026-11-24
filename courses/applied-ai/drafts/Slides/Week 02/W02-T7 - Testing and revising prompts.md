---
marp: true
title: "Week 2: Testing and Revising Prompts"
paginate: true
---

# Testing and Revising Prompts
### Week 2
COSC-300/500 Applied AI Essentials

---

## Why Trying It Once Isn't Enough

- **Answers vary** from run to run. When an output is good, was it the prompt, or luck?
- A prompt that works on **one input** can fail on another: a longer document, messier notes, a missing detail.
- If you'll reuse a prompt, it has to work on inputs you haven't seen yet.

One good output proves little.

---

## Build a Test Set

A small, fixed group of inputs. Five is enough.

- **Typical** (two or three)
- **Long or messy**
- **Short or thin**
- **Tricky**: probes a specific worry

Build it before you start revising, and keep it the same through every version so the results are comparable.

<!-- The difficult cases are the valuable ones. Most prompts pass the typical inputs on the first try. -->

---

## Decide What Good Looks Like

Write three to five checks first. For meeting notes → summary:

- Lists every decision, and none that was reversed
- Names an owner for every action item, or says none was stated
- Under 150 words
- Nothing that isn't in the notes

Two people should agree on whether an output passes.

---

## The Revision Loop

1. Run all the test inputs
2. Read every output against your checks
3. Find the most common failure
4. Make **one change** aimed at it
5. Run **all** the inputs again
6. Record what changed, why, and what happened

---

## Two Steps People Skip

**One change at a time**
If you change three things and the output improves, you can't tell which change helped, or whether one of them made things worse.

**Rerun what already passed**
A change that fixes one case often breaks another. Adding "be thorough" to fix a thin summary can push a long one over the word limit.

Both steps feel slow. Both are faster than chasing a problem you can't explain.

---

## A Worked Example

| Version | What changed | Result |
|---|---|---|
| v1 | "Summarize these notes." | Lengths vary; action items buried |
| v2 | Audience and three sections | Consistent shape; thin input padded |
| v3 | "Say so if the notes don't say" | No padding; reversed decision wrong |
| v4 | "Report only the final outcome" | All five pass |

<!-- Each row: one change, a reason from the outputs, a result on all five inputs. This is what the lab log should look like. -->

---

## When to Stop

- It passes your checks on every input, or
- The remaining failures are cheaper to fix by hand

Warning signs you've gone too far:

- A rule for every case, so the prompt reads like a legal contract
- Tuning to the five test inputs instead of the task they stand for

This habit returns in weeks 3 and 12 as **evaluation**.
