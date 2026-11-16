# 07-02 — The Cases for Open and Closed Weights

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 40 minutes

**In this lesson:** Should the most capable AI models be released for anyone to download? This lesson sets out the strongest case on each side, the evidence each relies on, and the middle paths between them. It prepares you for the Week 7 debate.

## The Idea: Which Risk Is Worse?

The debate over releasing model weights comes down to a single question, which a 2026 analysis by the Cloud Security Alliance put plainly: which is more dangerous, concentration of AI among a few companies that keep their models closed, or the irreversible spread of the most powerful capabilities to anyone who wants them?

Both risks are real. Neither side has a settled answer about how large each is. This lesson presents the best version of each case, so that you can judge for yourself.

## The Case for Open Weights

**Innovation and competition.** Open weights lower the barriers for startups, researchers and smaller companies. They let people adapt models for medicine, law or languages that large companies neglect. And they prevent a few firms from controlling a technology that may become as basic as electricity, the concern Lesson 05-04 raised. Supporters often point to open-source software, such as Linux and the many open programs that run most of the internet, which is widely credited with increasing both innovation and security.

**Transparency and safety research.** Researchers can study a model's internals, audit it for bias and test its robustness without needing the company's permission. Much important safety research, including research on how models represent concepts internally, has been done on open models.

**Privacy and control.** Organizations can run open models on their own computers, so sensitive data never leaves. Hospitals, law firms, governments and security teams value this. Users are not subject to a provider's changing policies, prices or outages.

**Sovereignty and global access.** Countries without leading AI labs can build on open models for their own languages and needs, as Lesson 06-06 described, without depending on American or Chinese providers.

**Defense.** In July 2026, when Hugging Face investigated an intrusion into its systems, which Lesson 07-06 examines, its security team needed to analyze the attackers' code. According to the company's account, a hosted commercial model refused to help, apparently because its safety filters flagged the material as offensive. The team used an open-weight model running on its own servers instead, which also kept sensitive data in-house.

**Concentration as a risk in itself.** In July 2026 more than 270 organizations and individuals, including Microsoft, Google, Amazon, Meta, OpenAI and NVIDIA, signed a letter titled "Open Weights and American AI Leadership." It argued that concentration among a few closed providers creates systemic risk, through single points of failure and the potential for abuse of power, that open weights let defenders match attackers, and that responses to misuse should be narrowly targeted instead of broad restrictions on release.

## Marginal Risk

Supporters of openness offer a way to judge particular releases. Sayash Kapoor, Rishi Bommasani and colleagues proposed in 2024 that the right question is a model's **marginal risk**: how much does releasing *this* model add to the risk that already exists from other open models, closed models, search engines and ordinary tools? For many kinds of misuse, such as spam and basic disinformation, they found the marginal risk in 2024 was low, since equivalent tools were already available. The framework demands evidence of **uplift**, meaning a real increase in someone's ability to cause harm, not speculation. And it asks about marginal benefit to defenders too.

## The Case for Closed Weights

**Safety training is thin.** Between 2023 and 2025, researchers repeatedly showed that the safety training of open-weight models could be removed cheaply. Adapting a version of Llama 2 with a small number of harmful examples, at a cost of about $200 in computing, largely undid its refusals. Other techniques locate and remove the internal feature associated with refusing, without any retraining. Within days of major open releases, "uncensored" versions usually appear online.

**Irreversibility.** Weights, once published, cannot be recalled. A company running a closed model can monitor how it is used, update its safeguards, suspend accounts and fix problems as they are found. A developer who releases weights can do none of these things. This asymmetry matters more as capabilities grow.

**Particular dangers.** Closed-model advocates focus on a few areas: help toward biological or chemical weapons, capabilities for cyberattack, and generating sexual imagery of real people or children. Many of the "nudify" tools in Module 4 are built on open image models.

**National security.** At the frontier, capabilities may help sophisticated attackers, including governments, and the militaries and intelligence services of rival states can use open models without restriction. In July 2026, Anthropic's chief executive, Dario Amodei, responded to the open-weights letter. He said Anthropic did not seek a ban on open models and that open models without dangerous capabilities are a public good, but argued that releasing frontier-level weights carries irreversible risks to national security, especially from authoritarian governments using them for military advantage or repression.

**Evaluation-based release.** Several labs have adopted **frontier safety frameworks**, policies that tie decisions about deployment, including whether to release weights, to tests of dangerous capabilities. The idea is to release weights only when tests show a model's capabilities fall below defined risk thresholds.

## Interests on Both Sides

Before weighing these cases, notice that nearly every voice in this debate has a stake. Companies that sell access to closed models benefit commercially when open competitors are restricted. Large companies that release open models can benefit by making their competitors' paid products less valuable. Chip makers benefit from wide deployment. Governments have strategic interests. Anthropic, which makes the Claude models, is one of the parties. None of this makes an argument wrong, but it is a reason to trace claims to primary sources and look for independent evidence, as Lesson 04-02 described.

## Middle Paths

The choice is not only between releasing weights and keeping them secret. **Structured access**, a term introduced by Toby Shevlane, means providing a model's capabilities through controlled channels instead of releasing the weights. It includes access through an API with usage policies and monitoring; programs that give vetted researchers access to weights or internals for safety research; "trusted access" programs for security defenders; staged release, closed at first and opened later after observation; and releasing smaller, less capable versions openly while keeping the most capable ones closed.

There are points of partial agreement, too. Most people on both sides agree that most current open models do more good than harm, that the real dispute is about the frontier and about specific dangerous capabilities, that better evaluations are needed to decide where thresholds lie, and that responses should be targeted where possible.

## Where Each Case Is Weak

Each side has weaknesses that the other presses.

Against openness: the marginal-risk calculation may change as capabilities grow; safety training can be stripped away; and "open" releases by large companies can serve competitive strategy, sometimes called **open-washing**.

Against closure: closed models are also misused, through tricks that get around their safeguards and through abuse of their APIs; closed weights can be stolen or leaked, as LLaMA's were; their behavior can be partly copied through their outputs, which Lesson 07-03 discusses; restriction concentrates power; evidence of real uplift for most harms has been limited; and the thresholds in frontier safety frameworks are set by the companies themselves. The Grok case in Lesson 04-04 involved a closed model.

## Check Your Understanding

**1. What is marginal risk?**

:::answer Answer
The additional risk a particular release creates compared with what is already possible through other models, search engines and tools.
:::

**2. Why does irreversibility favor caution about releasing weights?**

:::answer Answer
Once weights are public they cannot be recalled, while a closed model's provider can monitor use, update safeguards and fix problems.
:::

**3. What is structured access?**

:::answer Answer
Providing a model's capabilities through controlled channels, such as monitored APIs, vetted researcher programs or staged release, instead of releasing the weights.
:::

**4. Name one weakness in the case for closed weights.**

:::answer Answer
Any of these: closed models are also misused; closed weights can be stolen or leaked; behavior can be copied through outputs; restriction concentrates power; evidence of uplift has been limited; thresholds are self-set by companies.
:::

## Your Turn

Write the strongest 250-word case for the side of the Week 7 debate you find less convincing. The resolution, which Lesson 07-03 returns to, is: *Frontier-capable model weights should not be publicly released.* Then write one sentence saying what evidence would move you toward that side.

## Key Terms

- **Marginal risk:** The additional risk from a release compared with the existing baseline.
- **Uplift:** The degree to which a tool increases someone's ability to cause harm, or to defend.
- **Irreversibility:** The impossibility of recalling weights once they are released.
- **Frontier safety framework:** A lab's policy tying deployment decisions to tests of dangerous capabilities.
- **Structured access:** Controlled access to a model's capabilities without releasing its weights.
- **Open-washing:** Claiming openness while withholding key components or imposing restrictions.

## Sources

- **Core:** Kapoor, S., Bommasani, R. et al. "On the Societal Impact of Open Foundation Models," *ICML 2024*. — [Free manuscript](https://arxiv.org/abs/2403.07918); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r290). <!-- reading-access -->
- Seger, E. et al. "Open-Sourcing Highly Capable Foundation Models," Centre for the Governance of AI (2023). — [Free manuscript](https://arxiv.org/abs/2311.09227); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r299). <!-- reading-access -->
- Lermen, S., Rogers-Smith, C. & Ladish, J. "LoRA Fine-tuning Efficiently Undoes Safety Training in Llama 2-Chat 70B," arXiv:2310.20624 (2023). — [Free manuscript](https://arxiv.org/abs/2310.20624); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r296). <!-- reading-access -->
- Arditi, A. et al. "Refusal in Language Models Is Mediated by a Single Direction," *NeurIPS 2024*. — [Free manuscript](https://arxiv.org/abs/2406.11717); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r297). <!-- reading-access -->
- Shevlane, T. "Structured access: an emerging paradigm for safe AI deployment," arXiv:2201.05159 (2022). — [Free manuscript](https://arxiv.org/abs/2201.05159); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r298). <!-- reading-access -->
- Cloud Security Alliance, "The Open-Weight Rift: Concentration Risk vs. National Security," research note, Aug 4, 2026. ⚠ — [Free full text](https://labs.cloudsecurityalliance.org/research/csa-research-note-open-weight-concentration-risk-rift-202608/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r291). <!-- reading-access -->
- Amodei, D., response to the open-weight coalition letter (July 27, 2026). ⚠ Read the primary statement. — [Free full text](https://www.anthropic.com/news/position-open-weights-models); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r300). <!-- reading-access -->
- NTIA, *Dual-Use Foundation Models with Widely Available Model Weights* (July 2024). — [Free full text](https://www.ntia.gov/programs-and-initiatives/artificial-intelligence/open-model-weights-report); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r295). <!-- reading-access -->
