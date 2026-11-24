---
marp: true
title: "Week 11: Lab and Assignment: First API Program With Tool Use"
paginate: true
---

# First API Program With Tool Use
### Week 11 · Lab and Assignment
COSC-300/500 Applied AI Essentials

---

## Guided Practice

Everyone leaves with a **working first program**:

- A system prompt written for one specific job
- Output returned as JSON, so another program could use it
- The token usage printed after every call

Use Claude Code to write it. Read each part until you can say what it does.

---

## Lab: Add a Tool

Pick one:

- Unit converter
- Lookup in a CSV file
- Date calculator

Use Claude Code to write it. You define what it should do: the tool's name, its description, and its inputs.

Then print the messages, and trace one full round trip.

---

## Share-Out

- What did the model do when your tool returned an error?
- Did it ever call the tool when it shouldn't have, or skip it when it should have?
- What did you change in the description to fix it?
- How much did your runs cost, in tokens and in dollars?

---

## Responsible Use

- **API keys are secrets**: never put them in code you share or commit.
- Set **spend limits** before you start, so a runaway loop can't run up a bill.
- Know what data the API provider **retains**, and for how long, before you send anything sensitive.

---

## Assignment: First API Program With Tool Use

A program that uses a system prompt, returns JSON, and calls one tool you define. Submit code, 3 runs with token usage and cost, and 300 words explaining one tool-use round trip in your own words.

- **500 extension:** run it on a local open model too; compare quality, speed, cost
- About 3–4 hours

---

## Before Next Week

- **Building with the Claude API**: "Prompt evaluation", "RAG and agentic search", "Model Context Protocol" (watch)
- Optional (500): **Model Context Protocol: Advanced topics**
- Final project checkpoint next week
