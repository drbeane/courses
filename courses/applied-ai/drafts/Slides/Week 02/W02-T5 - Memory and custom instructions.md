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

Two ways to give the model context **every time**, without retyping it:

- **Custom instructions / preferences**: what you write once about yourself and how you want answers
- **Memory**: what the tool saves about you from past chats

Both quietly enter the context of every chat, alongside your message. Neither changes the model itself: delete them and the effect is gone.

---

## Custom Instructions: An Example

> I'm a junior nursing student and a part-time pharmacy tech. Assume I know basic anatomy and pharmacology.
>
> Start with a one- or two-sentence answer, then the detail. Flag any dose or lab value I should confirm. If my question is ambiguous, ask first.

The first paragraph says who you are. The second says how you want answers. That pattern works for almost anyone.

---

## Keep Instructions Short

Avoid:

- Rules for one task, such as "always use APA", that get in the way of every other task
- Long lists: every line is read on every chat, and the important ones get diluted
- Instructions that fight each other, such as "be brief" and "explain everything fully"

A paragraph or two is enough. Put task-specific rules in the prompt, or in a project (week 4).

---

## Two Kinds of Memory

| Kind | How it works |
|---|---|
| **Saved memories** | Short facts the tool writes down. You can read and edit the list. |
| **Reference to past chats** | The tool searches or summarizes earlier conversations. Less visible. |

Either way, memory is just text added to the context. The model reads it like anything else you'd type.

<!-- Plans differ in which memory features they include. Check before class. -->

---

## What Memory Costs

- **Leaks**: details from one task show up in an unrelated one.
- **Stale facts**: it keeps using things that are no longer true, like last year's job.
- **Wrong inferences**: it may conclude things about you that you never said.
- **Hidden influence**: answers shift for reasons you can't see in the chat.
- **Privacy**: everything it saves sits in your account.

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
