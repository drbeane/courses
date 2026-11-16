---
marp: true
title: "Week 2: Memory and Custom Instructions"
paginate: true
---

# Memory and Custom Instructions
### Week 2
COSC-300/500 Applied AI Essentials

---

## Standing Context

Two ways to give the model context **every time**:

- **Custom instructions / preferences**: what you write once about how you want answers
- **Memory**: what the tool saves about you from past chats

Both quietly enter the context of every chat. Neither changes the model.

---

## Custom Instructions: An Example

> I'm a junior nursing student and a part-time pharmacy tech. Assume I know basic anatomy and pharmacology.
>
> Start with a one- or two-sentence answer, then the detail. Flag any dose or lab value I should confirm. If my question is ambiguous, ask first.

Who you are + how you want answers.

---

## Keep Instructions Short

Avoid:

- Rules for one task ("always use APA")
- Long lists: every line is read on every chat
- Instructions that fight each other

A paragraph or two is enough.

---

## Two Kinds of Memory

| Kind | How it works |
|---|---|
| **Saved memories** | Short facts the tool writes down. You can read and edit the list. |
| **Reference to past chats** | The tool searches or summarizes earlier conversations. Less visible. |

Either way: text added to the context.

<!-- Plans differ in which memory features they include. Check before class. -->

---

## What Memory Costs

- **Leaks** between unrelated tasks
- **Stale** facts that are no longer true
- **Wrong inferences** about you
- **Hidden influence** on answers
- **Privacy**: it sits in your account

---

## What Belongs There

**Good**
- Your role and field
- Format preferences ("be brief", "use tables")
- Recurring constraints

**Not good**
- One-off task details
- Passwords and ID numbers
- Anything sensitive you wouldn't want resurfacing
- Information about other people

---

## Demo: Inspect Your Memory

1. Open memory settings
2. Read what's been saved
3. Edit or delete an item
4. Start a temporary chat
5. Turn memory off

**Responsible use:** know what's stored about you.

