# 01-09 — Law, Policy, Standards, and Ethics: Building a Defensible Argument

**Module:** 1 — Ethical Foundations and AI in Society
**Estimated time:** 45 minutes (includes A1 launch)

## Learning objectives

By the end of this lesson, you will be able to:

1. Distinguish legal obligations, regulatory guidance, technical standards, organizational policy and ethical responsibility.
2. Explain why "it's legal" and "it's ethical" come apart, in both directions.
3. Construct a defensible ethical argument with premises, evidence, counterargument and response.

## Opening case: the law moved twice in one year

Consider what a U.S. employer using an AI hiring tool in Colorado was required to do in 2026:

- **May 2024:** Colorado enacted SB 24-205, the first comprehensive U.S. state law on "high-risk" AI, requiring risk-management programs and impact assessments. It was set to take effect in February 2026.
- **August 2025:** The legislature delayed the effective date to June 30, 2026.
- **December 2025:** A presidential executive order directed the Justice Department to challenge state AI laws considered burdensome.
- **April 2026:** A federal court stayed enforcement in a challenge that the Justice Department and xAI had joined.
- **May 14, 2026:** Colorado repealed and replaced the law with a narrower one, SB 26-189, effective **January 1, 2027**. It drops impact assessments and risk-management programs. Instead it requires deployers of automated decision-making technology to give notice, explain adverse decisions within 30 days, allow data correction, and offer human review where commercially reasonable.

Meanwhile, federal anti-discrimination law (Title VII, the ADEA, the ADA) applied the whole time, and *Mobley v. Workday* continued in federal court.

An organization that waited to be told what was legal would have been confused all year. An organization that asked **what is right, and what can we defend** would have had a stable answer.

*(Dates as of October 2026. ⚠ Verify the current status before teaching.)*

## Core ideas

### Five kinds of "ought"

| Source | Binding? | Who enforces | Example |
|---|---|---|---|
| **Law** (statutes, regulations, case law) | Yes | Courts, agencies | EU AI Act; Illinois BIPA; TAKE IT DOWN Act |
| **Regulatory guidance** | Persuasive; signals enforcement | Agencies | FTC business guidance; EEOC technical assistance (some withdrawn in 2025) |
| **Technical standards** | Voluntary unless incorporated by law or contract | Certifiers, customers | ISO/IEC 42001; NIST AI RMF |
| **Organizational policy** | Binding on employees | Management | A company's acceptable-use policy; a police department's facial recognition policy |
| **Ethics** | Morally binding | Conscience, peers, the public | "Don't arrest on a match alone"; "don't build nudify tools" |

### Law and ethics diverge in both directions

- **Legal but unethical:** Scraping public photos to build a face database was legal in many U.S. states (outside Illinois, Texas and Washington) when Clearview AI did it.
- **Unethical becomes illegal over time:** Non-consensual deepfake imagery was largely legal in the U.S. until state laws and the 2025 TAKE IT DOWN Act.
- **Illegal but arguably ethical:** Security researchers testing AI systems without authorization may break terms of service or computer misuse law to reveal real dangers. (The U.S. DOJ's 2022 policy declined to prosecute good-faith security research under the CFAA.)
- **Law lags, varies and changes.** The same act may be legal in Texas, restricted in Illinois and prohibited in the EU.

### Rules for legal claims in this course

1. **Date it:** "As of October 2026, …"
2. **Locate it:** Name the jurisdiction (federal, state, EU, UK).
3. **Source it:** Cite the statute, regulation, case or official guidance, not just a blog.
4. **Scope it:** Who does the law apply to (developer, deployer, platform)? At what threshold?
5. **Separate it:** Don't treat a voluntary standard as a legal requirement, or a proposal as enacted law.

You are not expected to give legal advice. You are expected not to misstate the law.

### Building a defensible ethical argument

A strong argument has six parts:

1. **Claim:** What you think should be done.
2. **Premises:** The reasons, both factual and normative.
3. **Evidence:** Support for the factual premises, with quality noted.
4. **Framework:** Which ethical theories support the normative premises.
5. **Strongest counterargument:** Stated as its proponents would state it (a "steelman").
6. **Response:** Why your claim survives, or how you would revise it.

**Common weaknesses:**

- confusing "can" with "should,"
- relying on a single framework,
- attacking a weak version of the opposing view (a straw man),
- treating allegations as established facts,
- appealing to inevitability ("it's going to happen anyway"), and
- appealing to novelty ("AI is different, so old ethics doesn't apply") or, conversely, to sameness ("this is just like X").

## Applying the frameworks

A sample skeleton, using the Colorado case:

- **Claim:** An employer using AI résumé screening should conduct and publish a disparate-impact analysis whether or not the law currently requires one.
- **Premises:**
  1. Screening tools can reproduce historical bias (*evidence:* Amazon 2018; *Mobley* allegations).
  2. Applicants can't detect this bias themselves.
  3. Employers have a duty not to discriminate (*law:* Title VII; *ethics:* justice and decency).
  4. Publishing creates accountability.
- **Counterargument:** Publishing results invites litigation and reveals proprietary methods. Smaller employers can't afford audits.
- **Response:** Summary statistics reveal little intellectual property. An audit is cheaper than a lawsuit. A cost-scaled requirement (as in NYC Local Law 144's bias-audit summaries) is feasible.

## Discussion questions

1. Should companies comply with the strictest jurisdiction they operate in everywhere (the "Brussels effect") or tailor practices by location? What would decency recommend?
2. Can you think of a law governing technology that you believe is unethical? What should a professional do when law and ethics conflict?
3. Is a voluntary standard like the NIST AI RMF meaningful if no one is required to follow it?

## Activity and assessment launch: A1 position statement

**Due:** End of Week 1. **Length:** 800–1,000 words. **Weight:** 5% (part of A1).

Choose one case from Lesson 01-01. Write a position statement that:

1. states a clear claim about what should have been done or should now be done,
2. applies at least two frameworks from this module,
3. distinguishes legal facts (dated and sourced) from ethical claims,
4. presents the strongest counterargument fairly, and
5. responds to it or revises your position.

Use the six-part argument structure above. See the rubric in `03 - Assessments.md`.

## Key terms

- **Statute / regulation / guidance / standard / policy:** See table.
- **Steelman:** The strongest version of an opposing argument.
- **Brussels effect:** EU rules becoming global norms because companies standardize on them.
- **Preemption:** Federal law displacing state law (Lesson 08-02).

## Connections

- Governance in depth → Module 8 · Colorado and preemption → 08-02
- A1 (this lesson); the authority memo in A2

## Sources and further reading

- Illinois Lawyer Now, "The Colorado AI Act everyone was preparing for no longer exists," Jun 2026. ⚠ — [Free full text](https://www.businessattorneychicago.com/the-colorado-ai-act-everyone-was-preparing-for-no-longer-exists-here-is-what-actually-takes-effect-and-why-illinois-businesses-should-still-pay-attention/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r035). <!-- reading-access -->
- Ropes & Gray, "Colorado scales back AI law," May 2026. ⚠ — [Free full text](https://www.ropesgray.com/en/insights/alerts/2026/05/colorado-scales-back-ai-law-with-targeted-implications-for-health-care); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r036). <!-- reading-access -->
- Paul Hastings, "President Trump signs executive order challenging state AI laws," Dec 2025. — [Free full text](https://www.paulhastings.com/insights/client-alerts/president-trump-signs-executive-order-challenging-state-ai-laws); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r037). <!-- reading-access -->
- Bradford, A. *The Brussels Effect* (Oxford, 2020), Chapter 1. — [Paid / library](https://academic.oup.com/book/36491); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r038). <!-- reading-access -->
- Weston, A. *A Rulebook for Arguments* (5th ed., 2017). — [Paid / library](https://hackettpublishing.com/philosophy/critical-thinking-spotlight/a-rulebook-for-arguments-group); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r039). <!-- reading-access -->
