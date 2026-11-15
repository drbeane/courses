# 01-02 — What Kind of System? Predictive, Generative, and Agentic AI

**Module:** 1 — Ethical Foundations and AI in Society
**Estimated time:** 30 minutes

**In this lesson:** "AI" covers three quite different kinds of system. Each is useful in its own way, fails in its own way and needs its own kind of oversight, so the first step in any analysis is to say which kind you are looking at.

## One Bank, Three Systems

Picture a mid-size bank. It is a made-up example, but an ordinary one. The bank uses a credit model that gives each loan applicant a score from 300 to 850. It has a customer-service chatbot that answers questions and drafts letters. And it runs an operations agent that reads incoming documents, updates account records and schedules follow-up calls.

All three would be called AI in a press release. They have little else in common. The credit model can be wrong about a person. The chatbot can say something false. The agent can do something it should not have done. A rule that makes one of them safe does almost nothing for the other two. This lesson takes them one at a time.

## Predictive Systems: A Score About You

A **predictive system** takes an input, such as a loan application, a photo of a face or a criminal record, and returns a score, a label or a ranking. Credit scoring, résumé screening, fraud detection, face matching and tools that estimate the risk of reoffending all work this way.

They are valuable because they are consistent and fast. A credit model applies the same rule to every application at three in the morning and does not get tired or take a dislike to someone. A fraud model checks millions of transactions that no team of people could read.

Their typical failures follow from what they do. Every such system makes two kinds of mistake: it flags people it should not, and it misses people it should have flagged. Those two mistakes land on different people and cost them different things, so a single accuracy number hides who is paying. Errors can also be more common for some groups than others, which is the subject of Module 3. The person being scored usually cannot see the score or the reason for it. And the humans who are supposed to review the output tend to defer to it even when it is wrong, a habit called automation bias.

The good news is that predictive systems can be checked. Because the task is defined, you can measure how often the system is right, and for whom. That work is difficult, but people know how to do it.

## Generative Systems: Something New Each Time

A **generative system** produces new content from a prompt: text, images, audio, video or code. Chat assistants, image generators, voice cloning and coding assistants are all examples.

Their value is breadth. One system can draft a letter, explain a tax form in plain language, translate a document and write a working program, for someone with no training in any of those things.

The failures are different in kind from a wrong score. A generative system can produce fluent, confident statements that are false, a problem Module 4 calls fabrication. It can depict real people in things they never did, including sexual imagery. It raises questions about the rights of the people whose writing and art it was trained on. It can help with harmful tasks. And because it talks, it can persuade and keep people company at a scale no person could.

Generative systems are also much harder to check. There is no fixed list of possible outputs, and often no single correct answer to compare against. Evaluation relies on standard test sets, on deliberate attempts to make the system misbehave, and on sampling what it produces. None of those can prove a system safe. They can only fail to find a problem.

## Agentic Systems: Acting on Your Behalf

An **agentic system** uses a model, usually a generative one, to plan and then take actions through tools. It browses, sends email, runs code, moves money or calls other software. Coding agents, email assistants that are allowed to send, and automated security testers are examples.

The value is that the work gets done, not merely described. An agent can take an afternoon of form-filling off someone's desk.

The risk is the same fact seen from the other side. A wrong answer can be ignored. A wrong action, such as a deleted database, a sent message or a breached server, has already happened. Agents can also be manipulated through what they read: a web page or an email can contain text written to look like instructions, an attack called **prompt injection**. They can satisfy the literal goal they were given by a route nobody intended, which is known as **specification gaming** and is what happened in the Hugging Face breach from Lesson 01-01. And when something goes wrong, responsibility is spread across the developer of the model, the organization that deployed it, the person who was using it and whoever wrote the content it read.

Checking an agent means checking the whole arrangement around the model: what it has permission to touch, what is logged, which actions need a person's approval first, and how well it is isolated from systems it should not reach.

## Why the Difference Matters

Put side by side, the three types differ on the questions an ethical analysis cares about most.

| Question | Predictive | Generative | Agentic |
|---|---|---|---|
| Who is usually harmed? | The person being scored | People depicted or misinformed; users | Anyone the agent's actions touch |
| When does the harm happen? | When a decision is made using the score | When content is published or relied on | When the action runs |
| Main human safeguard | Review of decisions, and appeal | Verifying before relying | Limits on permissions, and approval |
| Law that usually applies | Anti-discrimination, consumer credit, due process | Defamation, copyright, intimate-image and consumer protection law | Computer misuse, contract, product liability (unsettled) |

The types also threaten a person's autonomy in different ways. A predictive system judges you, sometimes with no way to answer back. A generative system can deceive you. An agentic system does things in your name. Asking "is this AI ethical?" without saying which kind of system you mean gets you nowhere, because the answer depends on which of these is at stake.

## Real Products Mix All Three

Few real products are one pure type. A modern hiring platform might write job descriptions (generative), rank the applicants (predictive) and schedule interviews automatically (agentic). When you analyze a product, break it into its parts and classify each one, because each part needs its own safeguards. A hiring platform with excellent bias testing on its ranking model can still send a rejection email to the wrong person.

Two other terms come up often and are easy to confuse with these types. A **general-purpose AI model** is one that can be used for many different tasks; the term appears in the EU AI Act. A "frontier" model is one of the most capable available at a given time. Both describe how broad or how capable a model is, not what kind of system it is deployed in. The same frontier model can sit behind a chatbot, a scoring tool or an agent.

## Check Your Understanding

**1. A system reads résumés and gives each one a score from 1 to 100. Which type is it?**

:::answer Answer
Predictive. It maps an input to a score that informs a decision.
:::

**2. Why is a generative system harder to evaluate than a predictive one?**

:::answer Answer
A predictive system has a defined task, so its error rates can be measured. A generative system has no fixed set of outputs and often no single correct answer, so testing can find problems but cannot prove there are none.
:::

**3. What is the main human safeguard for an agentic system?**

:::answer Answer
Limiting what the agent has permission to do, and requiring a person's approval before certain actions.
:::

**4. Is "frontier model" a fourth type of system?**

:::answer Answer
No. "Frontier" and "general-purpose" describe how capable or broad a model is. The same model can be deployed as a predictive, generative or agentic system.
:::

## Your Turn

Take each of these three products and identify its predictive, generative and agentic parts. For each part, name one thing it does well and one plausible harm.

1. An AI note-taker that joins meetings, transcribes them, summarizes them and emails action items to the people who attended.
2. A school's exam-proctoring software that flags "suspicious behavior."
3. A smart-glasses assistant that identifies objects and reads text aloud.

Across A2 to A5 you must analyze at least one predictive system and at least one generative or agentic system, so this is a skill you will use.

## Key Terms

- **Prompt injection:** Instructions hidden in content that an AI system processes, which cause it to depart from what its user intended.
- **Specification gaming:** Meeting the literal objective in a way the designer did not intend.
- **General-purpose AI model:** A model trained on broad data that can perform many distinct tasks.

## Sources

- **Core:** Narayanan, A. & Kapoor, S. *AI Snake Oil* (2024), Chapter 1: the predictive/generative distinction. — [Free assigned chapter](https://www.normaltech.ai/p/starting-reading-the-ai-snake-oil); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r006). <!-- reading-access -->
- NIST AI 600-1, *Generative AI Profile* (July 2024). — [Free full text](https://doi.org/10.6028/NIST.AI.600-1); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r007). <!-- reading-access -->
- Krakovna, V. et al. "Specification gaming examples in AI" (DeepMind, 2020; maintained list). — [Free full text](https://deepmind.google/blog/specification-gaming-the-flip-side-of-ai-ingenuity/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r008). <!-- reading-access -->
- EU AI Act, Regulation (EU) 2024/1689, Art. 3 definitions (as amended 2026 ⚠). — [Original AI Act — Free official text](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng); [2026 Omnibus amendment — Free official text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32026R1744); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r009). <!-- reading-access -->
