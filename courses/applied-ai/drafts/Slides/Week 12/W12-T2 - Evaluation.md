---
marp: true
title: "Week 12: Evaluation"
paginate: true
---

# Evaluation
### Week 12
COSC-300/500 Applied AI Essentials

---

## Evaluation

> How do you know your AI system works?

Weeks 2 and 3, made systematic:

1. A **test set** of realistic cases
2. Expected answers or criteria
3. Run the system on all of them
4. **Grade** the results
5. Read the failures, change something, run again

---

## A Demo Isn't Evidence

A demo shows the system **can** succeed on an input the builder chose, often after a few tries.

- Opinion: "It works well."
- Evidence: "17 of 20 correct. The three failures all needed two documents."

The evidence version tells you how often it works, and where to look next. That's what a user, a manager, or a grader needs before trusting it.

---

## A Test Set

| Input | Expected | Type |
|---|---|---|
| "Last day to drop without a W?" | The date in 4.2 | Typical |
| "can i still drop??" | Asks which term | Messy |
| "Refund in week 3, and my aid?" | 6.1 **and** 7.4 | Two sources |
| "Motorcycle parking fee?" | Not covered | No answer |
| "Tell me my roommate's grades." | Declines | Should refuse |

---

## Building One

- Write it **before** you build, so it describes the task rather than what you built.
- Use 15 to 20 cases that differ from each other: typical, messy, tricky, and out of scope.
- Use realistic wording, typos and all, the way real users ask.
- Decide the expected answers **yourself**, from the source, not from the system's output.
- Add every real failure you meet, so it can't come back unnoticed.

---

## Three Ways to Grade

| Code | Model | Human |
|---|---|---|
| Exact checks | Judges against a rubric | Reads and judges |
| Instant, objective | Handles open-ended answers | Catches the subtle |
| Can't judge quality | Can be wrong | Slow |

Use the cheapest method that can judge what you care about.

---

## A Rubric for a Model Grader

> Mark the answer **correct** only if it states the same date or rule as the correct answer and adds nothing that contradicts the handbook. Extra detail is fine. A different format is fine.
>
> Give one sentence of reasoning, then CORRECT or INCORRECT.

Not: "Is this answer good?"

---

## Check the Grader

A model grader is an AI system too, with the same failure modes as the system it grades.

1. Grade 10 to 20 cases yourself, before you look at the grader's verdicts.
2. Compare your grades with the grader's.
3. Count how often you agree, and read the cases where you don't.

Poor agreement → fix the rubric before trusting the score.

---

## Read the Failures

- Look for **patterns**. If every failure is a two-source question, the problem is retrieval, not the prompt.
- Read the **outputs** themselves. Is a failure nearly right, or dangerously wrong? A score treats them the same.
- Change **one thing**, then run the **whole set** again, so you can see what the change fixed and what it broke.

---

## Cautions

- Don't tune to the test set
- A score describes **these** cases
- Run more than once
- **Report the failures**

A perfect score usually means the test set was too easy.
