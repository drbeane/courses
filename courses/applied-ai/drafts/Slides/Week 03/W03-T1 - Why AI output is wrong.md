---
marp: true
title: "Week 3: Why AI Output Is Wrong"
paginate: true
---

# Why AI Output Is Wrong
### Week 3
COSC-300/500 Applied AI Essentials

---

## Discernment

> Judging what comes back: is it accurate, sourced, and fit for purpose?

It's the most important skill in this course, and it gets harder as the tools get better.

- **Accurate**: are the facts, numbers, and reasoning right?
- **Sourced**: can you trace each claim to something you trust?
- **Fit for purpose**: does it do the job you actually need, for the reader you have?

---

## Mostly Right Is the Hard Case

- If a tool were wrong half the time, you'd check everything it gave you.
- When it's right 19 times in 20, you stop checking.
- The 20th answer goes into your paper, your report, or your email.

The errors that hurt are rare, fluent, and mixed in with correct material, so they don't stand out.

---

## Fluent Is Not the Same as Correct

- In human writing, polish suggests someone did the work. We learn to trust well-written text.
- A model writes polished, confident prose **every time**, whether or not it knows the answer.
- An invented statistic has the same tone, detail, and formatting as a real one.

Judge an answer by checking it, not by how it reads.

---

## Six Ways AI Gets It Wrong

1. **Hallucination**: plausible but invented facts, quotes, citations
2. **Outdated knowledge**: past the knowledge cutoff
3. **Arithmetic slips**
4. **Reasoning errors**: a wrong step in a chain
5. **Misread instructions**: answers a different question
6. **Sycophancy**: agrees with you because you pushed

<!-- Students label their lab failures with these six. Give one quick example of each. -->

---

{{widget name-the-error}}

---

## Why Hallucinations Happen

- The model predicts **plausible** text, not **verified** text. Nothing in the process checks a fact.
- When it doesn't know, a fluent guess is often the likeliest continuation, so that's what it writes.
- Specific details are most at risk: names, numbers, dates, and citations.

A made-up citation looks the same as a real one: plausible authors, a real journal, the right year.

---

## When Hallucination Is More Likely

- The topic is thin in the training data, such as a small town or a niche field.
- You ask for more than exists: "give me ten studies" when there are three.
- The question assumes something false, and the model plays along.
- You ask for an exact quotation instead of the gist.

Newer models say "I don't know" more often. The rate is lower, not zero.

---

## The Quiet Errors

**Reasoning errors**
Every step looks sound, and the conclusion follows from them. The flaw is one assumption near the top that nothing later questions.

**Misread instructions**
You get a good answer to a question you didn't ask: the wrong audience, a dropped constraint, a different scope.
Reread your prompt and compare, constraint by constraint.

---

## Sycophancy

> **You:** "Isn't it true that X?"
> **AI:** "Yes, you're right…"

- Leading questions get agreement, because agreeing is a likely reply.
- Pushback can flip a correct answer to a wrong one, even when you're the one who's mistaken.
- It affects feedback too: "I worked hard on this, what do you think?" gets gentler, less useful criticism.

---

## Ask Neutrally

| Leading | Neutral |
|---|---|
| "This is a strong thesis, right?" | "What are its three weakest points?" |
| "Are you sure? I think it's 1848." | "What's your source for that date?" |

Don't say which answer you hope for. When you want criticism, ask for it directly and ask for specifics.

<!-- Live example: push back on a correct answer with confident wrong information. Discuss whether it caves. -->

---

{{widget leading-or-neutral}}

---

## Where Errors Are Most Likely

- Niche or local topics
- Recent events
- Exact numbers, quotations, citations
- Long multi-step reasoning
- Anything you can't easily check
- Questions you asked in a leading way

Match how much you check to what a mistake would cost.

---

{{widget risk-spotter}}
