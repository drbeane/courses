# 08-01 — Risk-Based Regulation: The EU AI Act

**Module:** 8 — Governance, Accountability, and Responsible Deployment
**Estimated time:** 40 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain the EU AI Act's risk-based structure: prohibited, high-risk, transparency and minimal-risk tiers, plus general-purpose AI rules.
2. Summarize the implementation timeline, including the 2026 Digital Omnibus changes.
3. Evaluate the strengths and criticisms of risk-based AI regulation.

## Opening case: the deadline that moved

The EU AI Act (Regulation (EU) 2024/1689) entered into force on **August 1, 2024**, with obligations phased in. The most demanding obligations, for "high-risk" systems such as AI used in hiring and credit scoring, were due to apply from **August 2, 2026**.

In November 2025, the European Commission proposed a "Digital Omnibus" to simplify EU digital rules, including delays to high-risk obligations. Supporters said standards and guidance weren't ready and businesses needed certainty. Critics said it weakened protections under industry pressure.

On **May 6, 2026**, the Parliament and Council reached a political agreement. The **AI Omnibus** was formally adopted in July and **entered into force on July 27, 2026** as Regulation (EU) 2026/1744. Its main changes:

- **Annex III high-risk obligations** (e.g., recruitment, credit scoring, education, essential services) moved from **Aug 2, 2026 to Dec 2, 2027**.
- **Annex I high-risk obligations** (AI in regulated products, like medical devices and machinery) moved to **Aug 2, 2028**.
- **Article 50 transparency obligations** stayed on schedule for **Aug 2, 2026**, with a grace period for watermarking by existing systems until **Dec 2, 2026**.
- A **new prohibition** on AI systems generating non-consensual intimate imagery or CSAM was added (04-05).

*Deadlines above are from law-firm summaries of the adopted text (July 2026). Check the Official Journal for authoritative wording.*

## Core ideas

### The risk pyramid

| Tier | Examples | Obligations |
|---|---|---|
| **Prohibited (Art. 5)** | Social scoring; manipulative or exploitative AI causing significant harm; untargeted facial-image scraping (02-06); emotion recognition at work and school (05-05); biometric categorization to infer sensitive traits; real-time remote biometric identification for policing, with narrow exceptions (02-05); individual predictive policing based solely on profiling; **(new) NCII/CSAM generation** | Banned (from Feb 2, 2025; the new NCII ban has a transition to Dec 2, 2026) |
| **High-risk (Art. 6, Annexes I & III)** | Biometrics; critical infrastructure; education; **employment**; essential services, including **credit and insurance**; law enforcement; migration; justice and democratic processes; safety components of regulated products | Risk management; data governance; documentation; logging; transparency to deployers; human oversight; accuracy, robustness and cybersecurity; conformity assessment; registration; post-market monitoring. Deployers have duties including human oversight and, for some, a **fundamental rights impact assessment** (08-06). |
| **Transparency (Art. 50)** | Chatbots; deepfakes; AI-generated text on public-interest matters; emotion recognition and biometric categorization where permitted | Disclosure to users; machine-readable marking of synthetic content (04-07) |
| **Minimal risk** | Spam filters; video games | No new obligations (voluntary codes) |

### General-purpose AI (GPAI) models

From **Aug 2, 2025**, GPAI providers must:

- maintain technical documentation,
- provide information to downstream providers,
- have a copyright-compliance policy (including respecting text-and-data-mining opt-outs), and
- publish a training-data summary using the Commission's template.

**GPAI with systemic risk** (presumed above 10²⁵ FLOPs of training compute, or designated) must also:

- evaluate and mitigate systemic risks,
- conduct adversarial testing,
- report serious incidents, and
- ensure cybersecurity.

The **GPAI Code of Practice** (July 2025) offers a way to demonstrate compliance. Most major U.S. labs signed it. Meta declined, and xAI signed only the safety chapter ⚠.

**Open-source exemption:** Free and open-source GPAI models are exempt from some documentation duties, but **not** if they have systemic risk (07-04).

### Enforcement

- **Fines:** up to €35M or 7% of global turnover for prohibited practices, and up to €15M or 3% for other violations.
- **The AI Office** (in the Commission) supervises GPAI. The 2026 Omnibus also gives it exclusive supervision of AI systems built on GPAI from the same provider, and of AI in very large online platforms.
- **National market-surveillance authorities** enforce the rest.

### Other Omnibus changes (as adopted, July 2026)

- The **AI literacy** duty (Art. 4) was softened: organizations must "support" staff literacy rather than ensure it.
- Processing special-category data for **bias detection** was extended beyond high-risk providers, but only exceptionally and with safeguards.
- The Commission's proposed exemption from **EU database registration** for some low-risk systems was dropped. Registration remains, with reduced content.
- Some SME relief was extended to **small mid-cap** companies.
- The "safety component" definition was narrowed.
- Real-world testing was expanded.
- Member states got one more year (to Aug 2027) to set up regulatory sandboxes.

### Assessing risk-based regulation

**Strengths:**

- proportionality: obligations scale with risk,
- clear prohibitions for practices deemed unacceptable,
- product-safety logic that is familiar to industry, and
- the "Brussels effect": global firms may adopt EU standards everywhere (01-09).

**Criticisms:**

- **Static categories:** Risks depend on context, and general-purpose systems don't fit neatly into tiers.
- **Self-assessment:** Most high-risk conformity assessments are done by providers themselves.
- **Complexity and cost** burden smaller firms, a key Omnibus rationale.
- **Delays** mean affected people wait longer for protection.
- **Gaps:** Narrow coverage of harms outside the listed categories. Exemptions for national security and military AI.
- **Enforcement capacity** is uncertain.

## Applying the frameworks

- **Rights-based design:** The Act is grounded in the EU Charter of Fundamental Rights (dignity, privacy, non-discrimination).
- **Consequences:** Do delays reduce harm to innovation more than they increase harm to people?
- **Justice:** Do prohibitions protect the most vulnerable (workers, migrants, defendants)?

## Discussion questions

1. Was delaying high-risk obligations to December 2027 the right call? Who benefits and who bears the cost?
2. Which EU prohibition do you think is most justified? Which is most debatable?
3. Should the U.S. adopt a risk-based framework like the EU's? What would need to change for the U.S. context?
4. Is a fine of 7% of global turnover a sufficient deterrent for the largest AI companies?

## Activity: classify under the AI Act (15 minutes)

Classify each system (prohibited / high-risk / transparency / minimal / GPAI) and name the key obligation:

1. an AI résumé screener (03-03),
2. a chatbot on a bank's website,
3. live facial recognition by police to find a missing child,
4. an employer's webcam emotion-detection tool,
5. a general-purpose frontier LLM,
6. an image generator that can "undress" photos (04-04), and
7. an AI credit-scoring model.

Note which classifications changed or were delayed under the 2026 Omnibus.

## Key terms

- **Risk-based regulation:** Obligations proportional to assessed risk.
- **High-risk AI system:** Systems listed in Annex III or used as safety components of regulated products (Annex I).
- **GPAI / systemic risk:** General-purpose AI / GPAI with high-impact capabilities.
- **Conformity assessment:** Verification that a system meets requirements.
- **Digital Omnibus:** The 2025–2026 EU legislative package simplifying digital rules.

## Connections

- Prohibited practices → 02-05, 02-06, 05-05, 04-05 · FRIA → 08-06 · Global comparison → 08-03

## Sources and further reading

- Regulation (EU) 2024/1689 (AI Act), Official Journal, July 12, 2024. — [Free official text](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r340). <!-- reading-access -->
- Gibson Dunn, "EU AI Act Omnibus Agreement — Postponed High-Risk Deadlines and Other Key Changes," May 2026. — [Free full text](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r341). <!-- reading-access -->
- Sidley Austin, "EU Lawmakers Reach Provisional Agreement to Delay Key EU AI Act Obligations," Jun 22, 2026. — [Free full text](https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r342). <!-- reading-access -->
- Addleshaw Goddard, "EU AI Act: AI Omnibus formally adopted," July 1, 2026; Hunton Andrews Kurth, "EU Digital Omnibus on AI Enters into Force," July 2026. — [Addleshaw Goddard — Free full text](https://www.addleshawgoddard.com/en/insights/insights-briefings/2026/technology/eu-ai-act-ai-omnibus-formally-adopted/); [Hunton — Free full text](https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r343). <!-- reading-access -->
- European Commission, *General-Purpose AI Code of Practice* (July 10, 2025). — [Free full text](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r344). <!-- reading-access -->
- Veale, M. & Zuiderveen Borgesius, F. "Demystifying the Draft EU Artificial Intelligence Act," *Computer Law Review International* 22(4), 2021. — [Free manuscript](https://arxiv.org/abs/2107.03721); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r345). <!-- reading-access -->
