---
marp: true
title: "Week 10: Debugging, Changing Code, and Sub-Agents"
paginate: true
---

# Debugging, Changing Code, and Sub-Agents
### Week 10
COSC-300/500 Applied AI Essentials

---

## Debugging With an Assistant

1. **Reproduce** the failure first
2. Give the assistant the exact error
3. Ask for the **cause** before the fix
4. Judge: does the fix address the cause, or hide the symptom?
5. Re-run everything

---

## Symptom or Cause?

The app crashes when a member with no loans opens their history.

| | The change | Result |
|---|---|---|
| **Hides it** | Catch any error, show an empty page | Future errors vanish too |
| **Fixes it** | Handle the member with no loans | "No loans yet." |

Ask: *why did this happen?*

---

## A Good Bug Report

- What you **did**, step by step
- What you **expected**
- What **happened**: the exact error, in full
- Whether it **used to work**

Then add a test for the bug. Two failed fixes? Go back to the last commit.

---

## Changing Code You Didn't Write

- Ask the assistant to **explain the codebase** first
- Find the tests that cover the area
- Change in small steps
- Keep existing tests passing

---

## When Requirements Change

The limit is now 3. Tests that check for 5 will fail.

1. Update the **specification**
2. Update the tests that encode the old rule, **deliberately**
3. Change the code
4. Check that no other test changed

A test may change with the spec. It may not change to hide a failure.

---

## Sub-Agents (Brief)

- An agent can start **helper agents** for parts of a job
- Useful for: independent review, parallel searches
- A fresh reviewer hasn't seen the work being produced, so it isn't grading itself
- It works in its **own context** and returns a summary
- Costs: more usage, and it knows only what it's told

Still an AI review. Run the tests and the program yourself.
