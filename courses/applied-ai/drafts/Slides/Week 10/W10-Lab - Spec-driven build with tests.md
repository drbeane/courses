---
marp: true
title: "Week 10: Lab and Assignment: Spec-Driven Build With Tests"
paginate: true
---

# Spec-Driven Build With Tests
### Week 10 · Lab and Assignment
COSC-300/500 Applied AI Essentials

---

## Lab: Start the Spec-Driven Build

- You're given a specification and an acceptance test suite.
- They're modeled on the library lending system from our coding test, with the scope reduced for this class.
- Read the spec and run the tests before you ask for any code, so you know where you're starting from.
- Run the tests after every step, and log the results.

---

## Lab: Continue the Build

- Work through the next steps of the spec, one at a time.
- Run the whole test suite after every step, not just the new tests.
- Keep a review log of at least **five** AI-proposed changes: what it proposed, what you checked, and what you decided.
- Commit each step that passes before starting the next.

---

## Share-Out

What failure patterns did you catch in review?

- Did the assistant edit a test, hard-code a value, or change files it didn't need to?
- Did it ever say "done" before the tests passed?
- Which question or check caught it?
- Was there anything you only caught by running the program yourself?

---

## Responsible Use

- **Dependencies**: every package the assistant installs is someone else's code, running in your project.
- **Supply-chain risk**: an unknown or misspelled package name can install malicious code. Check any package you don't recognize.
- **Accountability**: who answers for shipped code? You, not the assistant.

---

## Assignment: Spec-Driven Build With Tests

Submit: repository, test results at each step, review log of 5+ AI-proposed changes (what, accepted?, why)

- **500 extension:** a mid-project requirement change; document how the assistant handled existing tests
- About 4–5 hours
- **Also due: final project proposal**

---

## Before Next Week

- Claude Academy: **Claude Platform 101**
- **Building with the Claude API**: "Accessing Claude with the API" and "Tool use with Claude" (watch)
- API access instructions will be posted
