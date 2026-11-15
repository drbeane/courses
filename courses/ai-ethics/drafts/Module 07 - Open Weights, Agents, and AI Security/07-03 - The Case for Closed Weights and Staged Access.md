# 07-03 — The Case for Closed Weights and Staged Access

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. State the strongest arguments for withholding model weights or releasing them in stages.
2. Explain why safety training can be removed from open-weight models, and why release is irreversible.
3. Evaluate "structured access" as a middle path.

## Opening case: safety training is thin

In 2023–2024, researchers repeatedly showed that the safety training of open-weight chat models could be removed cheaply:

- Fine-tuning Llama 2-Chat on a small number of harmful examples, for about $200 of compute, largely undid its refusal behavior (Lermen et al., 2023; Gade et al., 2023).
- "Abliteration" techniques identify and remove the internal direction associated with refusals, without retraining (Arditi et al., 2024).
- Within days of major open releases, "uncensored" variants typically appear on model-sharing sites.

A provider of a closed model can monitor usage, update safeguards, suspend accounts and patch problems. A developer of an open-weight model, once it's released, can do none of these things.

## Core ideas

### Argument 1: Irreversibility

- Weights, once published, can't be recalled. Any flaw or dangerous capability discovered later is permanent.
- Closed deployment allows **iterative** safety: monitor, learn and fix.
- This asymmetry matters more as capabilities grow.

### Argument 2: Misuse and removable safeguards

- Safety training can be stripped (opening case).
- Closed providers can enforce usage policies, detect misuse patterns and cooperate with law enforcement.
- **Areas of particular concern:** biological and chemical weapons uplift, cyberattack capability, and generation of CSAM and NCII (Module 4; nudify tools are typically built on open image models).

### Argument 3: Frontier capabilities and national security

- At the frontier, capabilities may provide meaningful uplift to sophisticated attackers, including state actors.
- Adversary militaries and intelligence services can use open models without restriction.

Anthropic's CEO Dario Amodei, responding in **July 2026** to the open-weight coalition letter (07-02), stated that Anthropic does not seek a ban on open models and that non-dangerous open models are a public good. He argued, however, that **frontier-level** open weights carry irreversible national-security risks, especially authoritarian misuse for military advantage or repression, and secondarily cyber and biological risks.

*Note: Anthropic, which develops the Claude models, has a commercial interest in this debate, as do the coalition signatories. Evaluate the arguments on their merits and check the primary statements.*

### Argument 4: Responsible scaling and evaluation

Several labs adopted **frontier safety frameworks** (Anthropic's Responsible Scaling Policy, OpenAI's Preparedness Framework, Google DeepMind's Frontier Safety Framework). They tie deployment decisions, including whether to release weights, to dangerous-capability evaluations. The idea: release weights only when evaluations show capabilities below defined risk thresholds.

### Structured access: a middle path

**Structured access** (Shevlane, 2022) means providing capabilities through controlled interfaces rather than releasing weights:

- API access with usage policies and monitoring,
- **researcher access programs** (vetted access to weights or internals for safety research),
- **trusted access** for defenders (e.g., the security-research access programs some labs offer; OpenAI added Hugging Face to its trusted-access program after the 2026 breach),
- staged release (closed first, open later after observation), and
- releasing smaller or less capable versions openly while keeping frontier models closed.

### Counterarguments (preview of 07-04)

- Closed models are also misused, through jailbreaks and API abuse (07-06).
- Closed weights can be stolen or leaked (LLaMA 2023), or distilled (07-04).
- Restricting open models concentrates power (07-02).
- Evidence of marginal uplift for most harms has been limited (Kapoor et al., 2024).
- Thresholds in safety frameworks are set by companies themselves.

## Applying the frameworks

- **Non-maleficence and capability caution (01-07):** Irreversible release of dangerous capabilities violates caution.
- **Consequences under uncertainty:** How should low-probability, high-severity risks be weighed (01-03)?
- **Justice and power:** Who gets to decide what is "too dangerous to release," and are they accountable?
- **Virtue:** What would prudence look like for a lab at the frontier?

## Discussion questions

1. Is irreversibility a decisive argument against open-weight release at the frontier? Does it apply to *any* technology?
2. Should the companies that profit from closed models be the ones setting thresholds for when weights are too dangerous to release?
3. Does "structured access" for researchers solve the transparency problem, or create a new gatekeeping problem?
4. The Grok NCII case (04-04) involved a *closed* model. What does that say about the closed-model safety argument?

## Activity: release decision (15 minutes)

You lead a lab that has trained a model with strong coding abilities. Your evaluations show it can find some software vulnerabilities autonomously. Decide whether to:

- (a) release the weights openly,
- (b) release via API only,
- (c) offer structured access to vetted security researchers, or
- (d) delay release for more evaluation.

Justify your choice in 200 words, addressing at least one argument from 07-02.

## Key terms

- **Safety fine-tuning removal:** Undoing refusal training by further training.
- **Abliteration:** Removing a refusal direction from model internals.
- **Structured access:** Controlled access to model capabilities without releasing weights.
- **Frontier safety framework:** A lab policy tying deployment to capability evaluations.
- **Irreversibility:** The inability to recall released weights.

## Connections

- Open case → 07-02 · Policy → 07-04 · Cyber capability → 07-09 · Hugging Face trusted access → 07-07
- A1 Week 7 debate

## Sources and further reading

- Lermen, S., Rogers-Smith, C. & Ladish, J. "LoRA Fine-tuning Efficiently Undoes Safety Training in Llama 2-Chat 70B," arXiv:2310.20624 (2023). — [Free manuscript](https://arxiv.org/abs/2310.20624); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r296). <!-- reading-access -->
- Arditi, A. et al. "Refusal in Language Models Is Mediated by a Single Direction," *NeurIPS 2024*. — [Free manuscript](https://arxiv.org/abs/2406.11717); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r297). <!-- reading-access -->
- Shevlane, T. "Structured access: an emerging paradigm for safe AI deployment," arXiv:2201.05159 (2022). — [Free manuscript](https://arxiv.org/abs/2201.05159); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r298). <!-- reading-access -->
- Seger, E. et al. "Open-Sourcing Highly Capable Foundation Models," Centre for the Governance of AI (2023). — [Free manuscript](https://arxiv.org/abs/2311.09227); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r299). <!-- reading-access -->
- Amodei, D., response to the open-weight coalition letter (July 27, 2026), as summarized by the Cloud Security Alliance (Aug 2026). ⚠ Read the primary statement. — [Free full text](https://www.anthropic.com/news/position-open-weights-models); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r300). <!-- reading-access -->
- International AI Safety Report 2026 (arXiv:2602.21012), sections on open-weight models. — [Free full text](https://arxiv.org/abs/2602.21012); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r301). <!-- reading-access -->
