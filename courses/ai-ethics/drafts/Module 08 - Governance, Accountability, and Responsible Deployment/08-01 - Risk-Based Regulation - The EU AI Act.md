# 08-01 — Risk-Based Regulation: The EU AI Act

**Module:** 8 — Governance, Accountability, and Responsible Deployment
**Estimated time:** 40 minutes

**In this lesson:** The European Union's AI Act is the world's most comprehensive AI law. This lesson explains how it sorts AI systems by risk, what it requires of each tier and of general-purpose models, how its deadlines moved in 2026, and what its supporters and critics say about regulating AI by risk.

## The Deadline That Moved

The EU AI Act, formally Regulation (EU) 2024/1689, entered into force on August 1, 2024, with its obligations phased in over several years. The most demanding ones, for "high-risk" systems such as AI used in hiring and credit scoring, were due to apply from August 2, 2026.

In November 2025 the European Commission proposed a package to simplify EU digital rules, called the Digital Omnibus, which included delaying the high-risk obligations. Supporters said the technical standards and guidance businesses needed were not ready. Critics said the delay weakened protections under pressure from industry.

The Parliament and Council reached political agreement on May 6, 2026. The AI part of the package entered into force on July 27, 2026. Its main changes moved the high-risk obligations for uses listed in the Act's Annex III, including recruitment, credit scoring, education and essential services, from August 2026 to December 2, 2027; moved the obligations for AI built into regulated products, such as medical devices and machinery, to August 2, 2028; kept the transparency obligations on schedule for August 2, 2026, with a grace period for marking content from existing systems until December 2, 2026; and added a new prohibition on AI systems that generate non-consensual intimate imagery or child sexual abuse material, which Lesson 04-04 described.

*These dates come from law firms' summaries of the adopted text and are as of October 2026. Check the Official Journal for the authoritative wording.*

## The Idea: Rules in Proportion to Risk

The Act is built on one idea: the stricter the risk a system poses to people's health, safety and fundamental rights, the stricter the rules. It sorts AI into four tiers.

| Tier | Examples | What is required |
|---|---|---|
| **Prohibited** | Social scoring; manipulative or exploitative AI that causes significant harm; untargeted copying of facial images from the web (Lesson 02-06); emotion recognition at work and school (Lesson 05-05); inferring sensitive traits from biometrics; real-time remote biometric identification by police, with narrow exceptions (Lesson 02-05); predicting an individual's crimes from profiling alone; and, since 2026, generating non-consensual intimate imagery or child abuse material | Banned, mostly since February 2, 2025 |
| **High-risk** | Biometrics; critical infrastructure; education; employment; access to essential services, including credit and insurance; law enforcement; migration; justice and democratic processes; safety components of regulated products | Risk management, data governance, documentation, logging, information for deployers, human oversight, accuracy and security, conformity assessment, registration and monitoring after release; some deployers must assess the impact on fundamental rights (Lesson 08-06) |
| **Transparency** | Chatbots; deepfakes; AI-generated text on matters of public interest | Telling people they are dealing with AI; marking synthetic content (Lesson 04-06) |
| **Minimal risk** | Spam filters; video games | No new obligations |

A **high-risk AI system** under the Act is one used in the areas listed in its Annex III, or as a safety component of a product already regulated in the EU. Before such a system can be sold, it must pass a **conformity assessment**, a check that it meets the Act's requirements, which for most systems the provider carries out itself.

## General-Purpose Models

Models such as large language models, which can be used for many tasks, are regulated separately. Since August 2, 2025, providers of **general-purpose AI models** have had to keep technical documentation, give information to the companies that build on their models, have a policy for complying with copyright law, including respecting creators' opt-outs from text and data mining, and publish a summary of their training data.

Models judged to pose **systemic risk**, presumed for models trained with more than 10²⁵ operations of computing or designated by the Commission, must also assess and reduce those risks, test their models adversarially, report serious incidents and maintain cybersecurity. A voluntary Code of Practice, published in July 2025, offers providers a way to show they comply. Most major U.S. labs signed it.

Open-source general-purpose models are exempt from some documentation duties, but not if they pose systemic risk, as Lesson 07-03 noted.

## Enforcement

Fines can reach €35 million or 7 percent of a company's global turnover for prohibited practices, and €15 million or 3 percent for other violations. A new AI Office in the European Commission supervises general-purpose models, and since 2026 also supervises AI systems built on a provider's own general-purpose model and AI in very large online platforms. National authorities enforce the rest.

The 2026 amendments also softened the duty to ensure staff understand AI, allowed sensitive data to be used for detecting bias in more situations, under safeguards, extended some relief for small businesses to "small mid-cap" companies, expanded testing of AI in real-world conditions, and gave member states another year to set up regulatory "sandboxes" for supervised experimentation.

## Why Risk-Based Regulation Persuades

Supporters see four strengths. It is proportionate: a spam filter is not regulated like a hiring tool. It draws clear lines around uses society has judged unacceptable. Its approach, borrowed from product-safety law, is familiar to industry. And because global companies often adopt the strictest rules everywhere instead of maintaining separate versions, EU rules may become global norms, the "Brussels effect" from Lesson 01-09.

## Where It Breaks

Critics raise six problems.

Its categories are static, while risk depends on context. A general-purpose system does not fit neatly into any tier.

Most high-risk systems are assessed by their own providers, so the check is only as good as the provider's honesty and competence.

It is complex and costly, a burden that falls hardest on smaller firms, which was a main reason for the 2026 delays.

Delays mean the people the high-risk rules protect, such as job applicants and borrowers, wait longer.

It has gaps: harms outside the listed categories get little attention, and AI for national security and the military is exempt.

And whether national authorities have the capacity to enforce it remains uncertain.

## Where People Disagree

Was delaying the high-risk obligations to December 2027 the right call? It gave businesses time to prepare and standards time to mature. It also left applicants and borrowers without protection for more than a year.

Should the United States adopt a similar risk-based law? Lesson 08-02 describes why it has not.

And is a fine of 7 percent of global turnover enough to deter the largest AI companies?

## Check Your Understanding

**1. What are the Act's four tiers?**

:::answer Answer
Prohibited, high-risk, transparency and minimal risk, with separate rules for general-purpose models.
:::

**2. How did the 2026 amendments change the high-risk deadline for uses such as hiring and credit?**

:::answer Answer
They moved it from August 2, 2026 to December 2, 2027.
:::

**3. What extra duties apply to general-purpose models with systemic risk?**

:::answer Answer
Assessing and reducing systemic risks, adversarial testing, reporting serious incidents and maintaining cybersecurity.
:::

**4. Name two criticisms of risk-based regulation.**

:::answer Answer
Any two of these: static categories; self-assessment by providers; complexity and cost; delays in protection; gaps such as military use; uncertain enforcement capacity.
:::

## Your Turn

Classify each system under the AI Act as prohibited, high-risk, transparency or general-purpose, and name its key obligation: an AI résumé screener; a chatbot on a bank's website; live facial recognition used by police to find a missing child; an employer's webcam tool that detects emotions; a general-purpose frontier language model; an image generator that can "undress" photos; and an AI credit-scoring model. Note which of these were affected by the 2026 delays.

## Key Terms

- **Risk-based regulation:** Rules whose strictness depends on the risk a system poses.
- **High-risk AI system:** Under the EU AI Act, a system used in the areas listed in Annex III or as a safety component of a regulated product.
- **Conformity assessment:** A check that a system meets legal requirements before it is sold.
- **General-purpose AI model:** A model trained on broad data that can perform many tasks.
- **Systemic risk:** The risk posed by the most capable general-purpose models, which triggers extra duties.
- **Digital Omnibus:** The 2025–2026 EU package simplifying digital rules, including the AI Act.

## Sources

- **Core:** Addleshaw Goddard, "EU AI Act: AI Omnibus formally adopted," July 1, 2026; Hunton Andrews Kurth, "EU Digital Omnibus on AI Enters into Force," July 2026. — [Addleshaw Goddard — Free full text](https://www.addleshawgoddard.com/en/insights/insights-briefings/2026/technology/eu-ai-act-ai-omnibus-formally-adopted/); [Hunton — Free full text](https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r343). <!-- reading-access -->
- Regulation (EU) 2024/1689 (AI Act), Official Journal, July 12, 2024. — [Free official text](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r340). <!-- reading-access -->
- Gibson Dunn, "EU AI Act Omnibus Agreement — Postponed High-Risk Deadlines and Other Key Changes," May 2026. — [Free full text](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r341). <!-- reading-access -->
- European Commission, *General-Purpose AI Code of Practice* (July 10, 2025). — [Free full text](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r344). <!-- reading-access -->
- Veale, M. & Zuiderveen Borgesius, F. "Demystifying the Draft EU Artificial Intelligence Act," *Computer Law Review International* 22(4), 2021. — [Free manuscript](https://arxiv.org/abs/2107.03721); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r345). <!-- reading-access -->
