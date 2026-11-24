---
marp: true
title: "Week 2: Tokens and the Context Window"
paginate: true
---

# Tokens and the Context Window
### Week 2
COSC-300/500 Applied AI Essentials

---

## Tokens

- Models read and write **tokens**, not words. A token is a common word or a piece of a longer one.
- In English, a token is roughly ¾ of a word, so 100 words is about 130 tokens.
- Everything costs tokens: your prompt, the files you attach, and the answer.
- Usage limits and prices are counted in tokens, so tokens are the unit to think in.

---

## How Much Is That?

| Text | Words | Tokens (about) |
|---|---|---|
| A short question | 15 | 20 |
| One page | 500 | 650 |
| A 10-page paper | 5,000 | 6,500 |
| A 300-page novel | 90,000 | 120,000 |

Code, tables, and other languages often take more tokens per word, because they split into smaller pieces.

---

## The Context Window

The model's **working memory** for one conversation.

- It's counted in tokens, and it holds everything the model can see at once.
- Current windows hold hundreds of thousands of tokens, and for some models a million or more.
- It's finite: when it's full, something has to go, and the product decides what.
- A big window doesn't mean the model attends equally well to everything in it.

<!-- Recheck current window sizes on the vendors' model pages before class. -->

---

## The Model Rereads Everything, Every Time

- The model keeps no memory between messages
- Each turn, the product sends the **whole conversation** again
- Message 30 carries the 29 before it
- A new chat starts empty

What isn't in the context doesn't exist for the model.

<!-- This surprises students. It explains why long chats with big files burn through usage limits. -->

---

## What Fills the Context

- **System prompt**: the vendor's instructions, added before you type anything
- **Memory and custom instructions**: what the product remembers about you
- **Conversation history**: every earlier message and reply
- **Files** you attach
- **Tool results**: search results, code output, and anything a connector fetched

You control some of it, not all. A single web search can add more text than your whole prompt.

<!-- Demo: Context Window Budget. Add a long file, then a web search, and watch the bar fill. -->

---

## Why Long Chats Degrade

- Early details get crowded out by everything that came after them.
- Old mistakes stay in the context, so the model keeps seeing them and repeating them.
- The topic drifts as the conversation wanders, and the original goal loses weight.
- When the window fills, the product may summarize or drop old messages without telling you.

---

## Signs a Chat Has Degraded

- It repeats a mistake you already corrected.
- It forgets a constraint you set early, such as a word limit or audience.
- It contradicts something it said earlier in the chat.
- Answers get more generic and less tied to your situation.

When you see these, more correcting rarely helps. Starting fresh usually does.

---

## Start Fresh With a Handoff

> Summarize what we've decided so far so I can continue in a new conversation. Include the goal, the decisions, the current draft, and what is still open. Leave out the approaches we rejected.

- Keep one conversation per task.
- Attach only what the task needs.
- When a reply goes wrong, edit and resend your message instead of arguing with it.
