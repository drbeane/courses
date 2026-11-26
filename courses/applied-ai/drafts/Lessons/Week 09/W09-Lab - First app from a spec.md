# Week 9 Lab and Assignment: First App From a Spec

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

## What You Will Be Able to Do

- Build a small application from a written specification using an instruction file, plan mode, and small commits.
- Deploy the application and check that it works at its web address.

## Setup Clinic

1. Confirm VS Code, Git, and Claude Code are installed.
2. Sign in to Claude Code with your Claude Pro account.
3. Clone the sample repository.
4. Ask Claude Code, **in plan mode**, for one small change.
5. Review the diff, approve, run the program, and commit.

> **Instructor note.** Pair students who finish quickly with those who are stuck. Common problems: Git not on the system path (Windows), not signed in, the wrong folder opened in VS Code.

## Lab: Your First App From a Spec

Choose one of three one-page specifications: a personal **budget tracker**, a **flashcard** app, or a **course-planner** web page.

### Requirements

- An **instruction file** (`CLAUDE.md` or `AGENTS.md`).
- **Five or more commits** with meaningful messages.
- A short **README** explaining what the app does and how to run it.

### Work This Way

1. Write the instruction file first: what the project is, the technology, any conventions.
2. Ask for a **plan** and edit it before approving.
3. Build one feature at a time.
4. **Run the app** after every change.
5. **Read the diff**, then commit.
6. If a change breaks things, **revert** it rather than piling fixes on top.

> **Instructor note.** Many students will let the assistant build everything in one go. Ask them to stop after the first feature, run it, and commit. The one-feature-at-a-time rhythm is the skill.

## Put It Online

Once your app works on your computer, deploy it so that other people can use it. Deployment is part of the assignment. Follow the steps under Deploying Your App in this week's lesson on the development environment, and then open the web address and test the app again.

Before you deploy, check that the repository holds no secrets and no real personal data, and use made-up examples in the app. A deployed page should be treated as public. If you have a reason not to publish your work publicly, talk with your instructor before you deploy.

## Share-Out

What did the plan get wrong? What did you accept **without understanding it**? Did a commit save you from a bad change?

## Responsible Use

- **Secrets** such as API keys and passwords never belong in code or in a chat. If one ends up in a repository, assume it's been exposed.
- **Licenses.** Code suggested by an AI can resemble existing code with license terms.
- **Accountability.** You're responsible for what you ship, whoever wrote it.

## Assignment: First App From a Spec

Build a small application from one of the provided specifications.

**Submit:**
- A link to the repository, which must include an instruction file, at least five commits with meaningful messages, and a README.
- A link to the deployed app.
- A 300-word reflection on what you reviewed and what you accepted without understanding.

**500 extension:** build the same feature with GitHub Copilot Student and compare process, quality, and usage consumed.

**Estimated time:** 3–4 hours.

## Before Next Week

- Claude Academy: **Claude Code in action**.
- **The AI-native SDLC playbook**.
- Optional: **Introduction to subagents**.
- Start thinking about your **final project**; the proposal is due next week.
- Journal entry.
