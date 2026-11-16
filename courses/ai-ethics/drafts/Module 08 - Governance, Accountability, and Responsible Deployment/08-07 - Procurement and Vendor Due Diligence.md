# 08-07 — Procurement and Vendor Due Diligence

**Module:** 8 — Governance, Accountability, and Responsible Deployment
**Estimated time:** 35 minutes

**In this lesson:** Most organizations do not build AI; they buy it. This lesson argues that the moment of purchase is where an organization has the most power to demand evidence and set conditions, and shows what to ask vendors, what to put in contracts, and which answers should end the conversation.

## Buying What You Cannot Inspect

A city buys facial recognition software (Lesson 02-04). An employer licenses a résumé screener (Lessons 03-03 and 03-10). A hospital subscribes to an AI tool that writes clinical notes. A university gives its staff an AI assistant (Lesson 07-10).

In each case the organization is putting into use a system it did not build and usually cannot see inside. The Fargo police reportedly had no policy for facial recognition when they relied on its results. The fictional Northfield Health Partners in Lesson 03-10 adopted a screening tool validated only against who had been hired in the past. In both cases the decision to buy was the point where the organization could have demanded evidence and set conditions, and did not.

## The Idea: Procurement Is Where Ethics Gets Teeth

**Due diligence** means investigating systematically before making a commitment. For AI purchases it matters for four reasons.

The buyer has leverage before it signs. It can require testing, documentation and rights to audit. Once the system is installed and staff depend on it, that leverage shrinks.

Vendors know far more about their systems than buyers do, and due diligence narrows the gap.

When a government buys AI, it spends public money on systems that affect citizens' rights, which carries a special duty of care.

And contracts decide who pays when things go wrong, the allocation of responsibility Lesson 08-05 discussed.

## Policy Anchors

Public buyers have guidance to draw on. U.S. federal agencies operated under a 2024 policy requiring risk management for AI that affects people's rights or safety; it was replaced in 2025 by two memos, one on using AI and one on buying it, which keep minimum practices for "high-impact" AI while emphasizing innovation and American-made AI. Some cities, including Amsterdam and Helsinki, publish registers of the AI systems they use, and some U.S. cities require council approval before police acquire surveillance technology. The European Commission publishes model contract clauses for public purchases of AI, and the UK and the World Economic Forum have published procurement guidelines.

*Policy status is as of October 2026 and should be checked before teaching.*

## What to Ask

A due-diligence questionnaire covers many areas.

| Area | Questions |
|---|---|
| Purpose and fit | What problem does it solve? What is the alternative without AI? Has it been used in settings like ours? |
| Evidence of performance | Which measures, on what data, checked by whom? Is there independent validation? Are results broken down by group? On people like ours? |
| Training data | Where did it come from? Was it licensed and consented to? What gaps are known? Does it include personal or copyrighted data? |
| Fairness | Has it been tested for disparate impact? With which measures? Were less discriminatory alternatives considered (Lesson 03-02)? |
| Explanation | Can individual results be explained to the people affected? Does it support adverse action notices (Lesson 03-05)? |
| Security | What defenses against prompt injection (Lesson 07-05)? Is our data kept separate? Has it been tested by attackers? What incidents has it had? |
| Privacy | How long is data kept? Will our data be used for training? Who else processes it, and where? |
| Human oversight | Is it designed for human review? Are overrides logged? |
| Documentation | Is there a model card, system card or datasheet (Lesson 08-06)? |
| Compliance | Which laws and standards does it meet? What certifications? |
| Updates | How are changes to the model announced? Can we test before an update goes live? |
| Exit | Will our data be returned and deleted? Can we move to another vendor? |
| Labor and environment | How was data labeling done (Lesson 05-07)? What are the energy and water figures (Lesson 06-04)? |

## What to Put in the Contract

Several contract terms matter most. **Audit rights** let the buyer, or an independent auditor, test the system, including for bias. Data terms forbid training on the buyer's data without consent and require deletion when the contract ends. Change notification gives advance notice and time to test before the model is updated. Performance warranties set standards for accuracy, with remedies if they are not met. **Indemnification**, a promise to cover the buyer's losses, can cover intellectual property claims, which many AI vendors now offer, and regulatory violations. Incident reporting requires prompt notice of security incidents, failures and serious harms. Cooperation clauses require the vendor to help with explanations, appeals and people's requests for their data. And termination clauses let the buyer end the contract if the system fails legal or ethical requirements.

## Red Flags

Some answers should make a buyer stop. "Proprietary" given as the answer to every question about evaluation. Validation only on the vendor's own data, or only against a stand-in such as "who was hired." No results broken down by group. Claims that the system is "bias-free" or "100 percent accurate." Refusal to allow independent testing. Terms that disclaim all responsibility for the system's outputs. And using customers' data for training by default.

## Where It Breaks

Due diligence has limits. Small organizations rarely have the expertise to evaluate answers, and vendors know it. Large vendors with many customers may refuse to negotiate terms at all. Questionnaires can become rituals, filled in and filed without anyone reading the answers. And the most important questions, such as how the system will behave on your population next year, may have no answer until it is deployed.

## Where People Disagree

Should public agencies be forbidden to buy AI that vendors will not let them test independently? It would protect citizens. It might also leave agencies unable to buy anything from the largest vendors.

If a vendor's model is proprietary, can a buyer evaluate it meaningfully at all?

And does a vendor's offer to cover intellectual property claims change the ethical question about copyright in Lesson 04-09, or only the financial one?

## Check Your Understanding

**1. Why is procurement such an important moment for AI ethics?**

:::answer Answer
The buyer has the most leverage before signing to demand evidence, testing and audit rights; information gaps can be narrowed; public purchases affect citizens; and contracts allocate responsibility.
:::

**2. What are audit rights?**

:::answer Answer
Contractual rights for the buyer, or an independent auditor, to inspect and test the system, including for bias.
:::

**3. Name three red flags in a vendor's answers.**

:::answer Answer
Any three of these: "proprietary" for every evaluation question; validation only on the vendor's data or against stand-ins; no results by group; claims of being bias-free or perfectly accurate; refusing independent testing; disclaiming all responsibility; using customer data for training by default.
:::

**4. What is one limit of due diligence?**

:::answer Answer
Any of these: small buyers lack expertise; large vendors may refuse to negotiate; questionnaires can become rituals; some answers only appear after deployment.
:::

## Your Turn

For your A5 system, or for the Northfield scenario in Lesson 03-10, write the ten questions you would most want to send a vendor. For each, say what answer would end the deal.

## Key Terms

- **Due diligence:** Systematic investigation before a commitment.
- **Audit rights:** Contractual rights to inspect or test a system.
- **Indemnification:** A contractual promise to cover another party's losses.
- **High-impact AI:** The U.S. federal term for AI that significantly affects people's rights or safety.

## Sources

- **Core:** World Economic Forum, *AI Procurement in a Box* (2020). — [Free full text](https://www.weforum.org/publications/ai-procurement-in-a-box/project-overview/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r378). <!-- reading-access -->
- OMB Memoranda M-25-21 and M-25-22 (April 2025). ⚠ — [M-25-21 — Free official text](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf); [M-25-22 — Free official text](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r376). <!-- reading-access -->
- European Commission, *EU model contractual AI clauses* (updated 2025). — [Free full text](https://public-buyers-community.ec.europa.eu/communities/procurement-ai/resources/eu-model-contractual-ai-clauses-pilot-procurements-ai); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r377). <!-- reading-access -->
- AI Now Institute, *Algorithmic Accountability: Moving Beyond Audits* (2023). — [Free full text](https://ainowinstitute.org/publications/algorithmic-accountability); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r379). <!-- reading-access -->
- Coglianese, C. & Lampmann, E. "Contracting for Algorithmic Accountability," *Administrative Law Review Accord* 6 (2021). — [Free full text](https://administrativelawreview.org/wp-content/uploads/sites/2/2021/10/Coglianese-Lampmann_For-ACCORD-1.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r380). <!-- reading-access -->
