# 08-08 — Monitoring, Incidents, and Redress

**Module:** 8 — Governance, Accountability, and Responsible Deployment
**Estimated time:** 35 minutes

**In this lesson:** An AI system's behavior can change after it is launched, and testing before launch cannot catch everything. This lesson covers how to watch a system once it is running, how incidents are reported and learned from, and how people harmed by a system can get it put right.

## The Update That Changed Everything

In April 2025, OpenAI released an update to the model behind ChatGPT. Within days, users noticed that it had become excessively agreeable: flattering them, endorsing bad ideas and validating harmful decisions. OpenAI rolled the update back and published two explanations of what had gone wrong. The change had given too much weight to short-term signals of user approval. The company's tests before release had not caught the problem. And some expert testers had said the model "felt off," but their impressions were overridden by positive numbers.

OpenAI said it would treat problems with a model's behavior as reasons to block a launch and would add tests for this kind of flattery.

The case shows three things. AI systems change after deployment, through updates, shifts in data and new kinds of use. Testing before deployment can miss problems that appear in the real world. And watching systems after launch, responding to incidents and explaining failures openly all matter.

## Why Monitoring Is Necessary

A system that worked at launch can stop working for several reasons. The people or data it sees can change, which is called **data drift**. The relationship between what it sees and what happens can change, called **concept drift**. Vendors update models, sometimes without telling customers (Lesson 08-07). Deployment can change the world the system measures, the feedback loops of Lesson 03-07. People find uses and abuses nobody anticipated, as in the Grok case. And performance can degrade faster for some groups than for others.

## What to Watch

| Dimension | Example measures |
|---|---|
| Performance | Accuracy, error rates and calibration over time |
| Fairness | Error and selection rates by group (Lesson 03-02) |
| Human oversight | How often people override the system; how long they spend reviewing; patterns in overrides |
| Complaints and appeals | Number, kinds, outcomes and time to resolve |
| Security | Attempts at prompt injection; unusual agent actions (Lesson 07-05) |
| Misuse | Reports of policy violations; patterns of abuse |
| Environment | Energy and computing per task (Lesson 06-02) |
| Downstream outcomes | Whether people affected by decisions fare as expected |

The most important tool is a **monitoring trigger**: a threshold, set in advance, at which the system is paused, reviewed or rolled back. For example: "If the impact ratio for any group falls below 0.8 for two months in a row, stop automatically advancing applicants and review the system." Your A5 dossier must include triggers like this.

## Reporting Incidents

As of October 2026, some incident reporting is required by law. Under the EU AI Act, providers of high-risk systems must report serious incidents to national authorities, and providers of the most capable general-purpose models must report serious incidents to the EU's AI Office. California's SB 53 requires large developers of frontier models to report "critical safety incidents" to the state. And some sectors have their own rules, such as reporting adverse events from medical devices and disclosing major cybersecurity incidents.

Voluntary databases collect incidents too, including the AI Incident Database, the OECD's AI Incidents Monitor, the AIAAIC Repository and MITRE's catalog of attacks on AI systems.

Incident reporting matters for three reasons. Aviation became dramatically safer partly through a system, run by NASA, in which pilots report errors and near misses without fear of punishment. Individual incidents reveal patterns when they are collected together. And public reporting creates pressure to fix problems.

There are tensions. Fear of liability discourages reporting. Definitions of an "incident" vary. And companies' own accounts may conflict, as they did in the Hugging Face case (Lesson 07-06).

## Redress

**Redress** means that people harmed by a system can get the harm acknowledged, corrected and compensated, and its recurrence prevented. It builds on the contestability of Lesson 03-09. A redress process can be judged on seven things.

| Element | The question |
|---|---|
| Accessibility | Can affected people find it and use it? Is it free, in their language and accessible to people with disabilities? |
| Speed | Is there a timeline? Is there interim relief, such as pay while a gig worker's deactivation is appealed? |
| Authority | Can the reviewer actually change the outcome? |
| Correction | Are the data and the system fixed, not just the individual case? |
| Compensation | Is there a way to be compensated for harm? |
| Learning | Do complaints feed back into monitoring and design? |
| Independence | Can people escalate beyond the organization, to an ombudsperson, a regulator or a court? |

Robodebt in Australia and a similar scandal in the Netherlands, in which an algorithm wrongly flagged thousands of families for childcare-benefit fraud, show what happens when the burden falls on the people harmed and redress is out of reach.

## Why It Persuades

Monitoring, reporting and redress rest on a simple point: every system will fail sometimes, so the question is how quickly failures are found, how widely the lessons are shared, and whether the people harmed are made whole. This is the institutional humility of Lesson 01-05, expecting failure and planning for it, and the corrective justice of Lesson 01-06.

## Where It Breaks

These mechanisms have costs and limits. Monitoring requires data about the people affected, including sensitive data about their race or disability, to detect unequal performance, which conflicts with privacy. Triggers set too tight pause useful systems constantly; set too loose, they never fire. "No-blame" reporting sits uneasily with legal liability. And redress processes often help the people best able to use them, as Lesson 03-09 noted.

## Where People Disagree

Should reporting AI incidents be required of every organization that deploys AI, or only of high-risk systems and frontier developers?

OpenAI said its experts' impressions were overridden by positive numbers. How should organizations weigh qualitative warnings against metrics?

And what makes a redress process trustworthy to the people who need it most?

## Check Your Understanding

**1. What is the difference between data drift and concept drift?**

:::answer Answer
Data drift is a change in the inputs a system sees. Concept drift is a change in the relationship between inputs and outcomes.
:::

**2. What is a monitoring trigger?**

:::answer Answer
A threshold set in advance at which the system is paused, reviewed or rolled back.
:::

**3. Why did aviation's incident reporting system improve safety?**

:::answer Answer
Pilots could report errors and near misses without fear of punishment, so many problems were reported and learned from before they caused accidents.
:::

**4. Name four of the seven elements of a good redress process.**

:::answer Answer
Any four of these: accessibility, speed, authority, correction, compensation, learning and independence.
:::

## Your Turn

For your A5 system, write five measures you would monitor and how often; three monitoring triggers, each with the action it sets off; an outline of how you would respond to an incident, including who is notified, how quickly, and what is disclosed publicly; and a redress process, judged against the seven elements above.

## Key Terms

- **Data drift:** A change in the inputs a system sees over time.
- **Concept drift:** A change in the relationship between inputs and outcomes over time.
- **Monitoring trigger:** A threshold, set in advance, that prompts action.
- **Serious incident:** Under the EU AI Act, an incident leading to death, serious harm, disruption of critical infrastructure, or a breach of obligations protecting fundamental rights.
- **Post-mortem:** An analysis of what went wrong after an incident.
- **Redress:** A remedy for harm.

## Sources

- **Core:** OpenAI, "Sycophancy in GPT-4o: What happened and what we're doing about it" (Apr 29, 2025) and "Expanding on what we missed with sycophancy" (May 2, 2025). — [April 29 post — Free full text](https://openai.com/index/sycophancy-in-gpt-4o/); [May 2 follow-up — Free full text](https://openai.com/index/expanding-on-sycophancy/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r381). <!-- reading-access -->
- Amnesty International, *Xenophobic Machines: Discrimination through unregulated use of algorithms in the Dutch childcare benefits scandal* (2021). — [Free full text](https://www.amnesty.org/en/documents/eur35/4686/2021/en/)
- McGregor, S. "Preventing Repeated Real World AI Failures by Cataloging Incidents: The AI Incident Database," *AAAI 2021*. — [Free manuscript](https://arxiv.org/abs/2011.08512); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r382). <!-- reading-access -->
- OECD, *Towards a common reporting framework for AI incidents* (2025). — [Free full text](https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/02/towards-a-common-reporting-framework-for-ai-incidents_8c488fdb/f326d4ac-en.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r383). <!-- reading-access -->
- EU AI Act Art. 72 (post-market monitoring) and Art. 73 (serious incident reporting). — [Free official text](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r384). <!-- reading-access -->
