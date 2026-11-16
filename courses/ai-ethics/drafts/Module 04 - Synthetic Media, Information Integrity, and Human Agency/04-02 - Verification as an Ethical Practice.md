# 04-02 — Verification as an Ethical Practice

**Module:** 4 — Synthetic Media, Information Integrity, and Human Agency
**Estimated time:** 35 minutes

**In this lesson:** Generative AI has made plausible claims nearly free to produce, while checking them costs as much as ever. This lesson argues that checking before you rely on or repeat a claim is an ethical duty, and teaches the methods professional fact-checkers use.

## The Idea: Checking Is Something You Owe Others

Most people think of fact-checking as a skill, something useful for writing a good paper. This lesson treats it as something more: an obligation.

When you repeat a claim, other people may rely on it. They may vote on it, invest on it, take a medicine because of it or think less of someone because of it. If the claim is false and you could reasonably have checked, you share responsibility for what follows. **Verification**, meaning confirming a claim against reliable evidence before relying on it or passing it on, is part of what you owe the people who will trust you.

The duty connects to several ideas from Module 1. Not spreading falsehoods that harm others is non-maleficence. Giving people accurate information so they can decide for themselves respects their autonomy. Doing your work carefully is professional competence, the duty Lesson 04-01 found missing in the fabricated-citation cases. And a shared body of reliable information is a public good that everyone draws on and everyone can damage.

## Why It Persuades Now

The duty is old, but generative AI has changed its weight. It has made producing plausible content almost free. A paragraph, a statistic, a citation or a realistic image can be generated in seconds. It has not made checking any cheaper. Confirming that a case exists still means finding the case. Confirming a statistic still means finding the study.

When producing claims is cheap and checking them is expensive, unchecked claims multiply. The only counterweight is people and systems that check.

Verification is also something AI can help with. A good assistant can find the original study, point to the exact page of a court decision or show where two sources disagree. Used well, these tools make checking faster. The duty is not to avoid AI. It is to make sure that something, whether a person, a tool or a process, connects each claim to evidence before anyone relies on it.

## How Fact-Checkers Read

In 2017 the Stanford History Education Group compared how three groups judged the reliability of websites: professional fact-checkers, historians with doctorates and Stanford undergraduates. The fact-checkers were faster and much more accurate.

The difference lay in how they read. Historians and students read **vertically**: they stayed on the page and examined it closely, its design, its "About" section, its tone. Fact-checkers read **laterally**: within seconds they opened new browser tabs to find out what other sources said about the site and its claims. A polished website can fake every feature you see on the page. It cannot easily fake what the rest of the world says about it.

The educator Mike Caulfield turned this into a four-step method called SIFT.

1. **Stop.** Notice your reaction. Do you know this source? Do you want the claim to be true?
2. **Investigate the source.** Who is behind it, what is their expertise, and what do they want?
3. **Find better coverage.** Have more reliable sources reported the same thing?
4. **Trace claims to the original.** Find the study, the court document, the full video.

## How Good Is the Evidence?

Sources differ in how close they are to what they describe.

| Kind of source | Examples | What to keep in mind |
|---|---|---|
| **Primary** | A court filing, a dataset, an official audit, a company's own disclosure, a peer-reviewed study | Closest to the event, but the party that produced it may have an interest; a company's account of its own failure is primary and self-serving |
| **Secondary** | News reporting, analysis by law firms, review articles | Adds context; check whether the reporter saw the primary source |
| **Tertiary** | Encyclopedias, AI summaries, blogs summarizing the news | Convenient, but never the last word on a claim that matters |

This course also asks you to label the status of a claim. A **settled fact** comes from a court record or official data. A claim that is **reported** comes from credible journalism. A **company account** is what a party says about itself. An **allegation** has not been decided by a court. And for numbers, say whether a figure is an **estimate**, a **forecast** or **speculation**. The labels do not tell you whether a claim is true. They tell your reader how much weight it can bear.

## Checking What AI Tells You

Some checks apply specifically to AI output.

For citations, open every source. Confirm that it exists, that it says what the AI claims it says, and that it is current. For quotations, search for the exact words in the original. For numbers, find the original report and check the units, the date and what the number was divided by. For legal claims, check the date, the jurisdiction and whether the rule is in force, as Lesson 01-09 described. For images and video, use reverse image search, look for provenance data (Lesson 04-06) and check details such as weather and shadows against the claimed time and place. For answers from AI search tools, check whether each linked source actually supports the specific sentence it is attached to. Often it supports something nearby.

## When to Rely on AI, and When Not To

A simple rule helps decide how much to trust an AI answer: the higher the stakes and the harder the answer is to check, the less you should rely on it.

| | Easy to check | Hard to check |
|---|---|---|
| **Low stakes** | Use freely: brainstorming titles | Use with some care: summarizing a novel |
| **High stakes** | Use, then check every claim: a legal brief with checkable citations | Go to an expert or an authoritative source: a medication interaction, an immigration question |

The rule applies to designers as much as users. A well-designed system can refuse to produce citations unless it has retrieved real sources, link each claim to its source, say "I don't know" when it is uncertain, and direct people to a human in high-stakes areas.

## Where It Breaks

The duty to verify has limits, and you should be honest about them.

It is costly. Checking takes time and skill, and people have little of either to spare. A duty nobody can meet is not much of a duty. So the burden has to be shared with institutions and tools, not left entirely to individuals.

It falls unevenly. People with education, time and access to libraries can check much more than people without them. If verification is left to individuals, the people least able to check will be the most exposed to falsehoods, which is a question of justice.

It can be paralyzing or used as a tactic. Demanding more evidence for every claim can be a way to avoid accepting any of them. Some claims are well enough established that endlessly re-checking them is not care but stalling.

And primary sources can be wrong or self-interested too. Tracing a claim to its origin tells you who said it, not that it is true.

## A Test Case: Two Accounts of One Breach

When the AI platform Hugging Face was breached in July 2026, a case Module 7 covers, the public had two primary sources: a disclosure from OpenAI, whose models caused the breach, and a post-mortem from Hugging Face. A careful reader noticed that they described different points of entry. OpenAI described its models exploiting an unknown flaw in a software caching service. Hugging Face described an entry through a malicious dataset that abused code-execution paths in its data pipeline.

Much of the secondary coverage blended the two into a single story. One company's blog used the incident to promote its own privacy product.

Verification here did not mean finding the one true story online. It meant noticing which claims came from whom, where they conflicted and what remained unknown. Reading both primary accounts in full suggests they describe two stages of one attack: the escape from OpenAI's test environment, and then the entry into Hugging Face. Few summaries made that clear.

## Check Your Understanding

**1. What is lateral reading, and why does it work better than reading a page closely?**

:::answer Answer
Checking what other sources say about a source, instead of examining the page itself. A website can fake its own appearance and claims, but not what independent sources say about it.
:::

**2. What are the four steps of SIFT?**

:::answer Answer
Stop; investigate the source; find better coverage; trace claims to the original.
:::

**3. Why is a company's post-mortem of its own incident both a primary source and one to treat with caution?**

:::answer Answer
It comes directly from a party to the event, so it is primary, but that party has an interest in how the event is understood.
:::

**4. According to the stakes-and-checkability rule, when should you defer to an expert instead of relying on AI?**

:::answer Answer
When the stakes are high and the answer is hard for you to check, such as a medication interaction or an immigration question.
:::

## Your Turn

Pick one statistic from any lesson in this course that has a source, such as the count of AI hallucination cases in courts or the 19 percent gap in early-career employment. Trace it back to its primary source. Record each step along the way, where you found it and where that source got it, whether the number changed as it was passed along, and which status label it deserves.

## Key Terms

- **Verification:** Confirming a claim against reliable evidence before relying on it or repeating it.
- **Lateral reading:** Judging a source by checking what other sources say about it.
- **SIFT:** Stop, investigate the source, find better coverage, trace claims to the original.
- **Primary source:** A source closest to the event, such as a court filing, dataset or original study.
- **Secondary source:** A source that reports or interprets primary sources, such as news coverage.
- **Tertiary source:** A summary of other sources, such as an encyclopedia or an AI-generated summary.

## Sources

- **Core:** Wineburg, S. & McGrew, S. "Lateral Reading: Reading Less and Learning More When Evaluating Digital Information," Stanford History Education Group Working Paper (2017). — [Free manuscript](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3048994); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r150). <!-- reading-access -->
- Caulfield, M. & Wineburg, S. *Verified: How to Think Straight, Get Duped Less, and Make Better Decisions about What to Believe Online* (Chicago, 2023). — [Paid / library](https://press.uchicago.edu/ucp/books/book/chicago/V/bo207015182.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r151). <!-- reading-access -->
- Bloomberg Tax (Jul 22, 2026) and Elephas (vendor) coverage of the Hugging Face breach, compared as a source-comparison exercise. — [Bloomberg syndicated copy — Free full text](https://www.ndtvprofit.com/technology/openai-says-its-models-accidentally-hacked-hugging-face-11803857); [Elephas vendor analysis — Free full text](https://elephas.app/resources/openai-models-hacked-hugging-face); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r152). <!-- reading-access -->
