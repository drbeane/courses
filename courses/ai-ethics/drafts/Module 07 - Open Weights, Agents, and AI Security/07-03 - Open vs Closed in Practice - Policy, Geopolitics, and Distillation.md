# 07-03 — Open vs. Closed in Practice: Policy, Geopolitics, and Distillation

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 40 minutes (includes debate preparation)

**In this lesson:** In the summer of 2026 the argument over open and closed models became a public fight involving governments, companies and thousands of researchers. This lesson follows those events, explains distillation, the practice that blurs the line between open and closed, and sets out the policies governments have adopted. It prepares you for the Week 7 debate.

## A Summer of Letters

The timeline below is drawn mainly from a Cloud Security Alliance research note published in August 2026, with other reporting. Several items are allegations or company accounts, and each should be checked against primary sources.

| Date (2026) | Event |
|---|---|
| June | U.S. Department of Commerce export controls led Anthropic to suspend access to two models it had released on June 9. The controls were lifted on June 30, and access was restored on July 1. |
| June 10 | Anthropic wrote to two U.S. senators alleging a large campaign, using about 25,000 fraudulent accounts and 28.8 million exchanges with its Claude models, to train Alibaba's Qwen models by distillation. Alibaba disputes this, and the claim has not been verified. |
| July 24 | More than 270 organizations and individuals signed the letter "Open Weights and American AI Leadership." |
| July 27 | Anthropic's chief executive published a response: no ban on open models is sought, but releasing frontier weights poses irreversible national-security risks. |
| July 27 | The Chinese company Moonshot AI released the weights of its Kimi K3 model, reported to be competitive with leading closed American models. |
| July 28–29 | More than 1,100 employees of Anthropic, OpenAI, Meta and Google DeepMind signed a letter, "Pacing the Frontier," asking the U.S. government to help build ways to slow automated AI research if it outpaces human oversight. |

## Distillation

**Distillation** means training one model, the "student," to imitate the outputs of another, the "teacher." It is a standard, legitimate technique when a company uses it with its own models, for example to make a smaller, cheaper version of a large one.

It becomes contested in three situations: when the teacher is someone else's closed model, reached through its API; when the provider's **terms of service**, the contract users agree to, prohibit using its outputs to train a competing model, as most major providers' terms do; and when access was obtained through fraudulent accounts. OpenAI made a similar allegation about the Chinese lab DeepSeek in January 2025.

Distillation matters for the open-and-closed debate because it shows that keeping weights closed does not fully contain a model's abilities. Its behavior can be partly copied through its answers. An open model built by distilling a closed one blurs the line between the two. And enforcement relies on terms of service, account monitoring and laws on trade secrets and computer fraud, none of which has been tested at this scale.

It also raises an uncomfortable ethical question. AI companies trained their models on other people's writing, art and code, often without permission, as Lesson 04-09 described. Are they in a strong position to object when others train on their outputs? Some say the cases differ, since distillation involves breaking a contract and sometimes fraud. Others see a double standard.

## Geopolitics

The open-and-closed debate is tangled up with competition between the United States and China.

Since 2025, Chinese labs, including DeepSeek, Alibaba, Moonshot and Zhipu, have released many of the most capable open-weight models in the world. That raises a question for American policy: would restricting American open releases simply hand the open ecosystem to Chinese models?

The United States restricts exports of advanced chips, and in 2026 briefly restricted access to certain models, to limit competitors' capabilities. These controls are contested on whether they work, what they cost the economy, and whether they are fair to the rest of the world, as Lesson 06-06 discussed.

Some governments restricted DeepSeek's apps on official devices in 2025, citing data flows to China and the model's content controls, including Italy, South Korea, Australia and several U.S. agencies.

## What Governments Have Done

Policies differ, and have changed quickly. As of October 2026, the U.S. government's 2025 AI Action Plan encouraged open models as a matter of American leadership and values. A 2024 report by the U.S. National Telecommunications and Information Administration had recommended monitoring the risks of open weights instead of restricting them, at that time. The EU AI Act exempts many open-source general-purpose models from some of its obligations, but not models judged to pose **systemic risk**, which face extra duties whether open or closed.

*Policy status is as of October 2026 and should be checked before teaching.*

## Why Rules Here Are Hard

Several features make this one of the hardest areas of AI policy.

Release is irreversible, so rules must act before the event. The evidence about how much harm frontier models could enable is thin, so rules must be written under uncertainty. The technology crosses borders instantly, so one country's rules can be undone by another's releases. Every major voice has a commercial or strategic stake, as Lesson 07-02 noted. And the line between a "frontier" model and an ordinary one moves every few months.

## Where People Disagree

Should U.S. policy restrict open-weight releases to avoid helping strategic rivals, or encourage them to keep the open ecosystem American-led? Each choice has a cost.

Is distilling a closed model's outputs ethically different from training on copyrighted books?

And the employee letter asked for ways to slow AI research if it outpaces human oversight. Is that feasible? Who would decide when to slow down, and who would enforce it?

## Check Your Understanding

**1. What is distillation, and when does it become contested?**

:::answer Answer
Training a student model to imitate a teacher model's outputs. It becomes contested when the teacher is someone else's closed model, the provider's terms forbid it, or access was obtained fraudulently.
:::

**2. Why does distillation matter for the open-and-closed debate?**

:::answer Answer
It shows that keeping weights closed does not fully contain a model's abilities, since behavior can be partly copied through its outputs.
:::

**3. How does the EU AI Act treat open-source general-purpose models?**

:::answer Answer
It exempts many of them from some obligations, but not those judged to pose systemic risk.
:::

**4. Give two reasons rules on releasing weights are hard to write.**

:::answer Answer
Any two of these: release is irreversible; evidence about harm is thin; the technology crosses borders; every voice has a stake; the definition of "frontier" keeps moving.
:::

## Your Turn: Week 7 Debate Preparation

The resolution for the Week 7 debate in A1 is: *Frontier-capable model weights should not be publicly released.* Your side is assigned on the course site.

Prepare an opening post of up to 300 words with at least two primary sources, in which you define "frontier-capable"; a short statement of the strongest argument the other side will make, drawing on Lesson 07-02; and a "what would change my mind" statement of up to 100 words.

## Key Terms

- **Distillation:** Training a model to imitate another model's outputs.
- **Terms of service:** The contractual rules users agree to when using a service.
- **Export controls:** Government restrictions on exporting technology.
- **Systemic risk:** Under the EU AI Act, the risk posed by the most capable general-purpose models, which triggers extra obligations.

## Sources

- **Core:** Cloud Security Alliance, "The Open-Weight Rift: Concentration Risk vs. National Security," Aug 2026. ⚠ Secondary; trace each item. — [Free full text](https://labs.cloudsecurityalliance.org/research/csa-research-note-open-weight-concentration-risk-rift-202608/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r302). <!-- reading-access -->
- The White House, *America's AI Action Plan* (July 2025), section on open models. — [Free manuscript](https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r307). <!-- reading-access -->
- Anthropic, "Restoring access to Claude Fable 5 and Mythos 5," July 2026. — [Free full text](https://www.anthropic.com/news/redeploying-fable-5); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r303). <!-- reading-access -->
- KrASIA, "Why open-weight AI is the new frontier in the US-China tech race," 2026. — [Free full text](https://www.kr-asia.com/why-open-weight-ai-is-the-new-frontier-in-the-us-china-tech-race); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r304). <!-- reading-access -->
- Hinton, G., Vinyals, O. & Dean, J. "Distilling the Knowledge in a Neural Network," arXiv:1503.02531 (2015). — [Free manuscript](https://arxiv.org/abs/1503.02531); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r306). <!-- reading-access -->
