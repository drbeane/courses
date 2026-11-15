# 07-04 — Open vs. Closed in Practice: Policy, Geopolitics, and Distillation

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 40 minutes (includes debate prep)

## Learning objectives

By the end of this lesson, you will be able to:

1. Summarize the major 2025–2026 policy events in the open vs. closed debate.
2. Explain distillation and why it blurs the line between open and closed.
3. Prepare arguments for the Week 7 debate.

## Opening case: a summer of letters (2026)

The open vs. closed question became a public fight in mid-2026. The timeline below is drawn from a Cloud Security Alliance research note (Aug 2026) and other reporting ⚠. Verify each item with primary sources.

| Date | Event |
|---|---|
| **June 2026** | U.S. Department of Commerce export controls led Anthropic to suspend access to its Claude Fable 5 and Mythos 5 models (released June 9). The controls were lifted June 30, and access was restored July 1. |
| **June 10** | Anthropic wrote to Senators Tim Scott and Elizabeth Warren alleging a large **distillation** campaign, about 25,000 fraudulent accounts and 28.8 million exchanges with Claude, used to train Alibaba's Qwen models. **Alibaba disputes this; the claim is unverified.** |
| **July 24** | Coalition letter "Open Weights and American AI Leadership" (Microsoft-hosted; 270+ signers including Google, Amazon, Meta, OpenAI, NVIDIA). |
| **July 27** | Dario Amodei's rebuttal: no ban sought, but frontier open weights pose irreversible national-security risks. |
| **July 27** | Moonshot AI released **Kimi K3** weights (reported as a 2.8-trillion-parameter mixture-of-experts model, with benchmarks competitive with leading closed U.S. models). |
| **July 28–29** | "Pacing the Frontier" letter from more than 1,100 employees of Anthropic, OpenAI, Meta AI and Google DeepMind, asking the U.S. government to help build mechanisms to slow automated AI research if it outpaces human oversight. |

## Core ideas

### Distillation

**Distillation** trains a smaller "student" model to imitate a larger "teacher" model's outputs. It's a standard, legitimate technique when done with one's own models. It becomes contested when:

- the teacher is someone else's closed model, accessed through an API,
- the provider's terms of service prohibit using outputs to train competing models (most major providers' terms do), and
- access was obtained through fraudulent accounts.

**Why distillation matters for the open/closed debate:**

- Closed weights don't fully contain capabilities. Behavior can be partially copied through outputs.
- Open models built by distilling closed ones blur the line between them.
- Enforcement relies on terms of service, account monitoring and possibly trade-secret or computer-fraud law. These are untested at scale.
- OpenAI made a similar allegation in January 2025 regarding DeepSeek ⚠.

**Ethical questions:**

- Is distilling a competitor's model theft, fair competition or something in between?
- AI companies trained on others' data, often without permission (04-09). Are they in a position to object when their outputs are used for training?
- Do national-security concerns change the analysis?

### Geopolitics

- **The U.S.–China competition:** Chinese labs (DeepSeek, Alibaba Qwen, Moonshot, Zhipu GLM) have released many of the most capable open-weight models since 2025. This raised questions about whether U.S. restrictions on open release would cede the open ecosystem to Chinese models.
- **Export controls:** The U.S. restricts advanced chip exports, and briefly (2026) model access, to manage the capabilities of competitors. These controls are contested on effectiveness, economic cost and fairness (06-06).
- **Security concerns about foreign models:** Some governments restricted DeepSeek on official devices in 2025, over data flows to China and content controls (e.g., Italy, South Korea, Australia and several U.S. agencies). Reports in 2025–2026 described criminals favoring DeepSeek models ⚠.
- **Policy positions:** The 2025 U.S. AI Action Plan encouraged open models. The EU AI Act exempts many open-source GPAI models from some obligations, but **not** those with systemic risk.

### Where the debate stands

The core disagreement, as the CSA note summarized it:

> Which risk is more dangerous: concentration among closed vendors, or irreversible diffusion of frontier capabilities?

Neither side has a settled empirical answer. Points of partial agreement:

- Most current open models are net beneficial.
- The question is about **the frontier** and **specific dangerous capabilities**.
- Better **evaluations** are needed to decide where thresholds lie (07-09).
- Responses should be **targeted** where possible.

### Evaluating claims in this debate

Every major party has interests:

- Closed-model companies benefit commercially from restrictions on open competitors.
- Large companies releasing open models may benefit from commoditizing competitors' products.
- Chip makers benefit from broad deployment.
- Governments have strategic interests.

**Apply 04-02:**

- Trace claims to primary sources.
- Label allegations as allegations.
- Check who funds research.
- Look for independent evaluations.

## Applying the frameworks

| Framework | Toward openness | Toward restriction |
|---|---|---|
| Consequences | Innovation, defense, access | Irreversible misuse at the frontier |
| Rights | Freedom to share knowledge and code (some courts treat code as speech) | Protection from serious harms |
| Justice | Breaks concentration; global access | Prevents authoritarian advantage |
| Virtue | Openness, generosity | Prudence, caution |

## Discussion questions

1. Is distilling a closed model's outputs to train an open model ethically different from training on copyrighted books?
2. Should U.S. policy restrict open-weight releases to avoid helping strategic rivals, or encourage them to keep the open ecosystem American-led?
3. The employee letter asked for mechanisms to slow AI research if it outpaces human oversight. Is that feasible? Who would decide?
4. How should you, as a student, evaluate claims in a debate where every major voice has a commercial or strategic stake?

## Activity: Week 7 debate preparation (20 minutes)

**Resolution:** *Frontier-capable model weights should not be publicly released.*

Prepare your assigned side:

1. your opening (300 words, two or more primary sources),
2. the opposing side's strongest point (use 07-02 or 07-03), and
3. "what would change my mind" (100 words).

You must define "frontier-capable" in your opening.

## Key terms

- **Distillation:** Training a model to imitate another model's outputs.
- **Terms of service (ToS):** Contractual rules for using a service.
- **Export controls:** Government restrictions on technology transfer.
- **Systemic-risk GPAI (EU):** General-purpose models above capability thresholds, subject to extra obligations.

## Connections

- Open → 07-02 · Closed → 07-03 · Frontier evaluations → 07-09 · Global divides → 06-06 · Copyright and training → 04-09
- A1 Week 7 debate

## Sources and further reading

- Cloud Security Alliance, "The Open-Weight Rift: Concentration Risk vs. National Security," Aug 2026. ⚠ Secondary; trace each item. — [Free full text](https://labs.cloudsecurityalliance.org/research/csa-research-note-open-weight-concentration-risk-rift-202608/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r302). <!-- reading-access -->
- Anthropic, "Restoring access to Claude Fable 5 and Mythos 5" (anthropic.com/news/fable-mythos-access), July 2026. — [Free full text](https://www.anthropic.com/news/redeploying-fable-5); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r303). <!-- reading-access -->
- KrASIA, "Why open-weight AI is the new frontier in the US-China tech race," 2026. — [Free full text](https://www.kr-asia.com/why-open-weight-ai-is-the-new-frontier-in-the-us-china-tech-race); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r304). <!-- reading-access -->
- Sovereign Magazine, "DeepSeek is becoming the AI of choice for cybercriminals," 2026. ⚠ — Citation needs clarification; [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r305). <!-- reading-access -->
- Hinton, G., Vinyals, O. & Dean, J. "Distilling the Knowledge in a Neural Network," arXiv:1503.02531 (2015). — [Free manuscript](https://arxiv.org/abs/1503.02531); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r306). <!-- reading-access -->
- The White House, *America's AI Action Plan* (July 2025), section on open models. — [Free manuscript](https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r307). <!-- reading-access -->
