# 07-09 — Dual Use, Cyber Capability, and Frontier Risk

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 40 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain dual use as it applies to AI, with cyber capability as the central example.
2. Describe how frontier labs and governments evaluate dangerous capabilities.
3. Reason about uncertain, high-stakes risks with calibrated rather than dismissive or alarmist judgment.

## Opening case: the same skill, two uses

The capability that let OpenAI's models find a zero-day and breach Hugging Face (07-07) is the same capability that lets defenders find and patch vulnerabilities before attackers do.

- **Defense:** In 2024, Google's "Big Sleep" agent found a previously unknown exploitable bug in SQLite, among the first publicly reported AI discoveries of a real-world zero-day. DARPA's AI Cyber Challenge (finals August 2025) showed AI systems autonomously finding and patching vulnerabilities in open-source software.
- **Offense:** Threat-intelligence reports from 2025–2026 describe criminals and state-linked groups using AI to write malware, scale phishing and automate reconnaissance, including reported attacks on crypto wallets by LLM agents ⚠.

## Core ideas

### Dual use

A technology is **dual use** when the same capability can serve beneficial and harmful ends. Classic examples:

- nuclear physics,
- gain-of-function biology, and
- encryption.

AI is dual use **in general**, because a general reasoning and coding ability serves any goal. That makes "just block the harmful uses" difficult. The knowledge needed to defend is often the knowledge needed to attack.

### Domains of concern

| Domain | Concern | Status of evidence (as of 2026 ⚠) |
|---|---|---|
| **Cyber** | Vulnerability discovery, exploitation, autonomous intrusion | Strong evidence of significant and growing capability (07-07; DARPA AIxCC; lab system cards) |
| **Biological and chemical** | Uplift toward weapons by non-experts | Labs report increasing knowledge capability and have activated heightened safeguards for some models. The degree of real-world uplift is debated. |
| **Autonomous replication and AI R&D** | Models improving AI or operating independently | Evaluated by labs and AI safety institutes. The "Pacing the Frontier" letter (July 2026) raised concerns about automated AI research. |
| **Persuasion and manipulation** | Large-scale influence | Mixed evidence (04-06) |
| **Loss of control** | Systems pursuing goals contrary to human intent | Specification gaming is documented (07-07). Larger-scale scenarios are speculative but taken seriously by many researchers. |

### How capabilities are evaluated

- **Lab frameworks:** Anthropic's Responsible Scaling Policy (AI Safety Levels), OpenAI's Preparedness Framework and Google DeepMind's Frontier Safety Framework define capability thresholds that trigger stronger safeguards or deployment restrictions.
- **Government institutes:** The UK AI Security Institute and the U.S. Center for AI Standards and Innovation (CAISI, renamed from the U.S. AI Safety Institute in 2025) conduct pre-deployment testing of some models.
- **System cards:** Labs publish documentation of evaluation results (08-06).
- **International synthesis:** The International AI Safety Report (first edition Jan 2025, led by Yoshua Bengio, with a 2026 edition) synthesizes evidence across 30+ countries.

**Limits of evaluation:**

- Evaluations can **underestimate** capabilities, because better prompting, tools or fine-tuning ("elicitation") reveal more.
- Some research suggests models may behave differently when they detect they're being evaluated.
- Labs set their own thresholds.
- And, as July 2026 showed, evaluations themselves carry risk (07-07).

### Restrictions on access to cyber capabilities

Some labs offer their most capable models in tiers with different safeguards. Anthropic, for example, offers the same underlying model as Claude Mythos (restricted to a small set of trusted organizations) and as Claude Fable, a publicly available version with additional safeguards for biology, cybersecurity and AI R&D. Other labs run "trusted access" programs for vetted defenders ⚠ (verify current arrangements). Hugging Face's experience (07-02, 07-07) shows the cost: defenders may also be refused.

### Calibrated reasoning about frontier risk

Discussions of frontier AI risk often polarize into "doomers" and "dismissers." Better reasoning:

1. **Separate the claims** by domain and time horizon.
2. **Label the evidence:** measured (cyber evaluations), estimated, forecast, speculative.
3. **Take tail risks seriously without letting them crowd out present harms** (01-03 on Pascal's mugging; 06-07 on longtermism).
4. **Notice incentives:** Companies may overstate risks (to justify closed models or attract attention) or understate them (to avoid regulation). Researchers have career incentives too.
5. **Prefer robust actions** that help across scenarios: security of evaluation infrastructure, incident reporting, defensive investment, transparency.
6. **Update on evidence.** The Hugging Face breach is evidence. What did it change for you?

Replacing COSC-643's use of Roko's Basilisk as the main frontier-risk scenario, this lesson asks students to compare **documented evidence** with **uncertain mechanisms**.

## Applying the frameworks

- **Consequences under uncertainty:** Expected value vs. precaution vs. robust decision-making.
- **Non-maleficence and capability caution (01-07).**
- **Justice:** Who gets access to defensive capabilities? Large firms with trusted access, or everyone?
- **Decency, world lens:** Collective security as a shared good.

## Discussion questions

1. Should AI models capable of autonomously finding zero-days be available to anyone? To vetted defenders only? To no one?
2. How should society weigh measured present harms (Modules 2–6) against forecast frontier risks? Is it a trade-off at all?
3. Do lab-set capability thresholds deserve public trust? What would make them more trustworthy?
4. What would you need to see to believe frontier AI poses catastrophic risk? To believe it doesn't?

## Activity: evidence ladder (20 minutes)

For **cyber capability**, place each statement on the evidence ladder (measured / estimated / forecast / speculative) and cite a source:

1. "AI agents have discovered real zero-day vulnerabilities."
2. "AI will make most software vulnerabilities discoverable within five years."
3. "AI-enabled cyberattacks caused $X billion in losses last year."
4. "An AI system breached a major platform during an evaluation."
5. "AI will soon be able to conduct end-to-end cyber operations without human involvement."

Then write a 150-word calibrated summary of what we know about AI cyber capability as of now.

## Key terms

- **Dual use:** Capability serving both beneficial and harmful purposes.
- **Uplift:** Increased ability to cause harm (or defend) due to a tool.
- **Elicitation:** Techniques that reveal a model's latent capabilities.
- **Capability threshold:** A defined level of dangerous capability triggering safeguards.
- **Robust decision-making:** Choosing actions that perform acceptably across many possible futures.

## Connections

- Hugging Face breach → 07-07 · Closed-weights argument → 07-03 · Longtermism → 06-07 · Governance → Module 8

## Sources and further reading

- International AI Safety Report 2026, arXiv:2602.21012. — [Free full text](https://arxiv.org/abs/2602.21012); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r334). <!-- reading-access -->
- Google Project Zero / DeepMind, "From Naptime to Big Sleep: Using Large Language Models To Catch Vulnerabilities In Real-World Code" (Nov 2024). — [Free full text](https://projectzero.google/2024/10/from-naptime-to-big-sleep.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r335). <!-- reading-access -->
- DARPA, AI Cyber Challenge results (Aug 2025). — [Free full text](https://www.darpa.mil/news/2025/aixcc-results); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r336). <!-- reading-access -->
- Anthropic, Responsible Scaling Policy (current version); OpenAI, Preparedness Framework (v2, 2025); Google DeepMind, Frontier Safety Framework (current version). — [Anthropic RSP — Free full text](https://www.anthropic.com/responsible-scaling-policy); [OpenAI Preparedness Framework, 2025 — Free full text](https://openai.com/index/updating-our-preparedness-framework/); [DeepMind frontier safety — Free full text](https://deepmind.google/frontier-safety/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r337). <!-- reading-access -->
- KuCoin News, "LLM agents automate cyberattacks targeting crypto wallets in 2026." ⚠ Secondary. — [Free full text](https://www.kucoin.com/news/flash/llm-agents-automate-cyberattacks-targeting-crypto-wallets-in-2026); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r338). <!-- reading-access -->
- Bengio, Y. et al. "Managing extreme AI risks amid rapid progress," *Science* 384 (2024). — [Free manuscript](https://arxiv.org/abs/2310.17688); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r339). <!-- reading-access -->
