---
marp: true
title: "Week 12: Lab and Assignment: Mini RAG App or MCP Server With an Eval"
paginate: true
---

# Mini RAG App or MCP Server With an Eval
### Week 12 · Lab and Assignment
COSC-300/500 Applied AI Essentials

---

## Three Tracks

- **A · RAG**: Q&A over 10–30 of your documents, with citations
- **B · MCP**: a small MCP server with two tools or resources, connected to Claude
- **C · Analysis**: evaluate an existing tool (a project, NotebookLM, or your week 7 skill) on a 20-item test set

All tracks: 15+ test cases, results, discussion of failures.

---

## Lab: Choose and Start

1. Pick your track. Choose the one where you'll learn the most, not the one that looks easiest.
2. Draft your test set **first**, with the expected answer or behavior for each case.
3. Start building, or set up the tool you'll evaluate.

Writing the test set first keeps you honest: it describes the task, not what you happened to build.

---

## Lab

- Continue your track, building in small steps you can test.
- Run your full test set, not just the cases you expect to pass.
- Record the results and every failure, with the output that failed.
- For RAG, print the retrieved chunks, so you can tell retrieval failures from generation failures.

---

## Responsible Use

- **Grounding does not guarantee accuracy.** A cited answer can still misread or miss its source.
- Evaluation is an **accountability tool**: it's how you show a system works, and where it doesn't.
- An MCP server you build can be called by an agent you don't fully control, so design it for least privilege.

---

## Final Project Checkpoint

**3 minutes each:**

- What you're building
- What works so far
- What's blocking you
- What you'll evaluate

---

## Assignment: Mini RAG App, MCP Server, or Tool Evaluation

All tracks: test set (15+ cases), results, 400-word discussion of failures

- **500 extension:** both code-based and model-based grading, with a check of the model grader against your own judgment on a sample
- About 4–5 hours
- **Also due: final project checkpoint**

---

## Before Next Week

- Read: the posted Muse summary (facts and privacy settings) and Meta's Muse help pages
- Claude Academy: **Building effective human-agent teams** (beta)
- Optional: **Introduction to Claude Tag**
- Optional: **AI Fluency**, lesson 12
