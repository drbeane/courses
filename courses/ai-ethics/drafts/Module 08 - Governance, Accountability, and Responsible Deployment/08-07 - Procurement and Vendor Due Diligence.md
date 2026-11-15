# 08-07 — Procurement and Vendor Due Diligence

**Module:** 8 — Governance, Accountability, and Responsible Deployment
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain why most organizations' AI ethics decisions happen at procurement.
2. Develop a vendor due-diligence questionnaire for an AI system.
3. Identify contract terms that allocate responsibility and enable oversight.

## Opening case: buying what you can't inspect

Most organizations don't build AI; they **buy** it. A city buys facial recognition (02-04). An employer licenses a résumé screener (03-03, 03-10). A hospital subscribes to an AI scribe. A university deploys an AI assistant (07-10).

The Fargo Police Department reportedly had no facial recognition policy when it relied on results. Northfield Health Partners (03-10) adopted a screening tool that had been validated only against *being hired*. The **procurement decision** is where an organization can demand evidence, set conditions and allocate responsibility, and often it doesn't.

## Core ideas

### Why procurement matters ethically

- **Leverage:** Buyers can require testing, documentation and audit rights *before* signing. After deployment, leverage diminishes.
- **Information asymmetry:** Vendors know far more than buyers. Due diligence narrows the gap.
- **Public accountability:** Government procurement of AI uses public money and affects citizens' rights.
- **Liability allocation:** Contracts decide who pays when things go wrong (08-05).

### Policy anchors

- **U.S. federal:** OMB Memo M-24-10 (2024) required risk management for "rights-impacting" and "safety-impacting" AI. It was replaced in 2025 by **M-25-21** (use) and **M-25-22** (acquisition), which retain minimum practices for "high-impact AI" while emphasizing innovation and American-made AI ⚠.
- **Cities:** Amsterdam and Helsinki AI registers; New York City's AI governance policies; Community Control Over Police Surveillance (CCOPS) ordinances requiring council approval (03-08).
- **Model clauses:** The EU's model contractual clauses for public procurement of AI (2023, updated 2025); the UK's *Guidelines for AI procurement* (2020); the World Economic Forum's AI procurement guidelines.

### A due-diligence questionnaire

| Area | Questions |
|---|---|
| **Purpose and fit** | What problem does it solve? What's the non-AI baseline? Has it been used in contexts like ours? |
| **Performance evidence** | What metrics, on what data, by whom? Is there independent validation? Is performance **disaggregated by group**? On data like *ours*? |
| **Training data** | Sources? Consent and licensing? Known gaps? Personal data? Copyrighted data? |
| **Fairness** | Disparate-impact testing? Which metrics? Less discriminatory alternatives considered (03-02)? |
| **Explainability** | Can individual outputs be explained to affected people? Adverse-action support (03-05)? |
| **Security** | Prompt-injection defenses (07-06)? Data isolation? Penetration testing? Incident history? |
| **Privacy** | Data retention? Use of our data for training? Subprocessors? Data location? |
| **Human oversight** | Designed for human review? Override logging? |
| **Documentation** | Model card, system card, datasheet (08-06)? |
| **Compliance** | Which laws and standards (EU AI Act, NIST RMF, ISO 42001)? Certifications? |
| **Updates** | How are model changes communicated? Can we test before updates go live? |
| **Exit** | Data return and deletion? Portability? |
| **Labor and environment** | Data-labeling practices (05-07)? Energy and water disclosures (06-04)? |

### Contract terms that matter

- **Audit rights:** The buyer, or an independent auditor, can test the system, including for bias.
- **Data rights:** No training on the buyer's data without consent; deletion on termination.
- **Change notification:** Advance notice and testing windows before model updates.
- **Performance warranties and remedies:** Service levels, including accuracy thresholds.
- **Indemnification:** For IP infringement (many AI vendors now offer IP indemnity) and for regulatory violations.
- **Incident reporting:** Timely notice of security incidents, failures and serious harms.
- **Cooperation with affected individuals:** Support for explanations, appeals and data-subject requests.
- **Termination for cause:** If the system fails ethical or legal requirements.

### Red flags

- "Proprietary" as the answer to every evaluation question.
- Validation only on the vendor's own data, or only against proxies (e.g., "being hired").
- No disaggregated performance data.
- Claims of "bias-free" or "100% accurate."
- Unwillingness to permit independent testing.
- Terms that disclaim all responsibility for outputs.
- Default use of customer data for training.

## Applying the frameworks

- **Accountability:** Procurement is where responsibility is allocated (08-05).
- **Justice:** Public buyers have special duties to the citizens affected.
- **Virtue:** Institutional prudence. Don't buy what you can't evaluate.

## Discussion questions

1. Should public agencies be prohibited from buying AI systems vendors refuse to let them independently test?
2. If a vendor's model is proprietary, how can a buyer meaningfully evaluate it?
3. Should IP indemnity offered by AI vendors change a buyer's ethical analysis of copyright risk (04-09)?
4. Who inside an organization should have authority to approve AI purchases?

## Activity: vendor questionnaire (20 minutes)

For your A5 system, or the Northfield scenario (03-10), write the **ten most important questions** you'd send a vendor, and for each, what answer would be a **deal-breaker**.

## Key terms

- **Due diligence:** Systematic investigation before a commitment.
- **Audit rights:** Contractual rights to inspect or test.
- **Indemnification:** A contractual promise to cover another party's losses.
- **Rights-impacting / high-impact AI:** U.S. federal terms for AI affecting rights or safety.

## Connections

- Lab → 03-10 · Agent deployment → 07-10 · Documentation → 08-06 · Accountability → 08-05
- **A2 recommendation; A5 vendor context**

## Sources and further reading

- OMB Memoranda M-25-21 and M-25-22 (April 2025). ⚠ — [M-25-21 — Free official text](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf); [M-25-22 — Free official text](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r376). <!-- reading-access -->
- European Commission, *EU model contractual AI clauses* (updated 2025). — [Free full text](https://public-buyers-community.ec.europa.eu/communities/procurement-ai/resources/eu-model-contractual-ai-clauses-pilot-procurements-ai); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r377). <!-- reading-access -->
- World Economic Forum, *AI Procurement in a Box* (2020). — [Free full text](https://www.weforum.org/publications/ai-procurement-in-a-box/project-overview/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r378). <!-- reading-access -->
- AI Now Institute, *Algorithmic Accountability: Moving Beyond Audits* (2023). — [Free full text](https://ainowinstitute.org/publications/algorithmic-accountability); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r379). <!-- reading-access -->
- Coglianese, C. & Lampmann, E. "Contracting for Algorithmic Accountability," *Administrative Law Review Accord* 6 (2021). — [Free full text](https://administrativelawreview.org/wp-content/uploads/sites/2/2021/10/Coglianese-Lampmann_For-ACCORD-1.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r380). <!-- reading-access -->
