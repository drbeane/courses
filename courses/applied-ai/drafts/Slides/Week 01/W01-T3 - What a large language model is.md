---
marp: true
title: "Week 1: Large Language Models"
paginate: true
---

# Large Language Models
### Week 1
COSC-300/500 Applied AI Essentials

---

## A Next-Token Predictor

- Text is split into **tokens**, which are words or pieces of words.
- The model predicts **the next token**, adds it to the text, then predicts the next, and the next.
- Each prediction is a probability spread over every token the model knows.
- A full answer is hundreds or thousands of these predictions in a row, with no plan written in advance.

> "The capital of France is ___" → *Paris* (very likely), *a* (less likely), …

---

## Two Predictions

| "The capital of France is" | | "My favorite thing about autumn is" | |
|---|---|---|---|
| Paris | 97% | the | 31% |
| a | 1% | how | 14% |
| located | 1% | watching | 9% |

On the left, one answer dominates. On the right, many continuations are reasonable.

The model uses the same process for both. It has no separate mode for facts.

<!-- Illustrative numbers. Open the Next-Token Sampler demo here. -->

---

## Where the Knowledge Lives

- The model doesn't store its training text, and it can't open a document to reread it.
- Training adjusts billions of numbers, called **parameters**, until the predictions get better.
- Knowledge ends up spread across those parameters as patterns, not as records you could look up.

That's why it keeps the gist but not always the wording, and why it can't tell you where it learned something.

---

## Trained in Two Stages

**1. Pretraining**
The model learns to predict the next token across a huge amount of text: books, websites, code, and more.
The result has broad knowledge and fluent language, but it isn't yet an assistant. It just continues text.

**2. Tuning into an assistant**
Examples and human feedback teach it to follow instructions, answer helpfully, hold a conversation, and refuse some requests.

---

## Knowledge Cutoff

- Pretraining data stops at a date, called the **knowledge cutoff**. It's often months before the model is released.
- The model knows nothing after that date **unless a tool supplies it**:
  - web search, uploaded files, or connectors to your other apps
- Before trusting an answer, ask: *"Does this depend on anything recent?"* Prices, laws, product features, and current events usually do.

---

## Why Answers Vary

- The model **samples** from its probabilities instead of always taking the top choice.
- So the same prompt on different runs gives different wording, and sometimes different facts.
- That variety is useful for brainstorming, where you want several different ideas.
- It's a risk when you need the same answer every time, such as a number, a date, or a policy.

---

## Live Demo: Same Prompt, Three Runs

1. Run one prompt three times, each in a fresh chat so earlier answers can't influence it.
2. Compare the three answers on wording, structure, and facts.
3. What stayed the same in every run? What changed?

Parts that change from run to run are the parts the model is least sure about.

<!-- Use a prompt with a factual element and an open-ended element, e.g. "Explain why the 1918 flu spread so quickly, in 5 bullets." -->

---

## What an LLM Is Not

| Tool | How it answers |
|---|---|
| Search engine | Finds pages that already exist |
| Database | Looks up a stored record |
| Calculator | Computes by fixed rules |
| **LLM** | Generates likely text from learned patterns |

Many products combine them: a chat assistant may run a search or a calculation before it writes. Notice when a tool was actually used.

---

## Where to Expect Reliability

| More reliable | Less reliable |
|---|---|
| Widely written-about topics | Niche, local, or recent topics |
| Working with text you supply | Exact quotes and figures from memory |
| Common tasks | Unusual tasks |

It does best with the material in front of it. It's weakest on precise details recalled from memory.

---

## What This Means for You

- A fluent, well-written answer is not necessarily a correct one.
- A confident tone tells you nothing about accuracy either. The model sounds the same when it's wrong.
- The model doesn't "look things up" unless it has a tool to do so, such as web search.
- Your job throughout this course: **decide** what to hand over, **describe** it well, and **check** what comes back.
