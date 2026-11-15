---
marp: true
title: "Week 9: From Chat Window to Coding Assistant"
paginate: true
---

# From Chat Window to Coding Assistant
### Week 9
COSC-300/500 Applied AI Essentials

---

## No Coding Experience Assumed

You won't be graded on writing code.

You **will** learn to:
- specify software work
- supervise an assistant doing it
- check the result

---

## Why This Is in the Course

Small, useful software is within reach of people who don't program.

**Vibe coding**: describe it, accept what comes back.

Fine for a quick personal tool. Not when it has to be correct, keep working, or be trusted by someone else.

---

## A Few Terms

| Term | Plain meaning |
|---|---|
| **Source code** | A program's instructions, as text files |
| **Repository** | A project folder with its history |
| **Dependency** | Someone else's code the project uses |
| **Test** | A small program that checks the main one |
| **Bug** | A mistake that makes it do the wrong thing |

---

## Two Facts About Code

**Code is exact.**
One wrong character and it may not start, or may quietly compute the wrong number.

**Code can be checked by running it.**
You don't have to judge whether it looks right.

---

## Coding in a Chat Window

- Paste code in, copy code out
- Fine for one small file
- Breaks down when:
  - the project has many files
  - you need to run it
  - you need to test it
  - you need to undo a change

You become the messenger in every round.

---

## A Coding Assistant in the Environment

It has access to:

- **The repository**: every file
- **The terminal**: run, install, test
- **The tests**: did it actually work?

It can try, fail, read the error, and fix.

The week 6 agent, with a project as its folder.

---

## The Loop, in a Project

1. Reads the related files
2. Edits three of them
3. Runs the program
4. Reads the error
5. Fixes it
6. Runs the tests and reports

In a chat, steps 3 to 5 are three round trips through you.

---

## Your Role

- **Specify**: what it should do, and how you'll know
- **Supervise**: read the plan, build in small steps
- **Check**: run it, try to break it, ask for explanations

You're responsible for what you ship.

<!-- The lab reflection asks what they accepted without understanding. Raise it now. -->
