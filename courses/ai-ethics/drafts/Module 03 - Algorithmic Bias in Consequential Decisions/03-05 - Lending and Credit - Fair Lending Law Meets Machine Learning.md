# 03-05 — Lending and Credit: Fair Lending Law Meets Machine Learning

**Module:** 3 — Algorithmic Bias in Consequential Decisions
**Estimated time:** 40 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain U.S. fair lending law (ECOA, Regulation B, the Fair Housing Act) as it applies to ML credit models.
2. Evaluate the promise and risks of alternative data for credit inclusion.
3. Explain adverse action notice requirements and the challenge of explaining complex models.

## Opening case: the Apple Card complaint (2019)

In November 2019, entrepreneur David Heinemeier Hansson tweeted that the Apple Card, issued by Goldman Sachs, had given him a credit limit 20 times higher than his wife's, though they filed joint taxes and she had a better credit score. Apple co-founder Steve Wozniak reported a similar experience. The New York Department of Financial Services (NYDFS) investigated.

In March 2021, NYDFS reported that it found **no unlawful discrimination**. Goldman did not use gender, and differences were explained by factors like individual credit histories and income. The regulator criticized the lack of transparency and customer service, noting that Goldman couldn't easily explain individual decisions.

The case shows both sides: an apparent disparity that, on investigation, had legally permissible explanations, *and* a system no one could explain to the people affected.

## Core ideas

### The legal framework (U.S., as of October 2026 ⚠)

- **Equal Credit Opportunity Act (ECOA) and Regulation B:** These prohibit credit discrimination on the basis of race, color, religion, national origin, sex (including sexual orientation and gender identity, per CFPB interpretation), marital status, age, receipt of public assistance and good-faith exercise of consumer-credit rights.
- **Fair Housing Act:** Prohibits discrimination in mortgage lending and housing-related transactions.
- **Disparate impact** has long applied in fair lending. Its future scope is contested: federal agencies moved in 2025 to drop disparate-impact theory from their own enforcement and regulations, while state attorneys general and private litigants continue to use it.
- **Adverse action notices:** When credit is denied or terms are worsened, lenders must give the **specific principal reasons**. The CFPB said in Circulars 2022-03 and 2023-03 that complex or "black-box" models don't excuse this, and that vague reasons like "insufficient projected income" or reasons not actually used don't comply ⚠ (check whether these circulars remain in effect).

### Alternative data: inclusion or new exclusion?

About 26 million American adults are "credit invisible," with no credit file, and millions more are "unscorable" (CFPB, 2015 estimate; ⚠ updated estimates vary). They are disproportionately Black, Hispanic, young and low-income. ML models using **alternative data** promise to expand access.

| Data type | Potential inclusion benefit | Risk |
|---|---|---|
| Rent and utility payments | Credits responsible payers without loans | Generally viewed favorably |
| Bank cash-flow data | Shows actual income and spending | Privacy; requires account access |
| Education and employment | Predicts future income | Proxy for class, race and age |
| Device type, email domain, typing behavior | Fraud and risk signals | Weak relevance; proxy discrimination |
| Social network data | — | Highly invasive; strong proxy for race and class |

**Upstart and the CFPB (2017–2020):** The CFPB issued Upstart a "no-action letter" for its ML underwriting. Upstart reported approving more applicants at lower rates than traditional models. A 2020–2021 independent monitorship (Relman Colfax) found disparities related to educational variables and the use of college attributes, and recommended changes. Upstart later ended the no-action letter arrangement in 2022.

### Explaining ML credit decisions

Post-hoc explanation methods like SHAP and LIME estimate which features drove a prediction. Concerns:

- Explanations can be **unstable**: similar applicants get different "reasons."
- They can be **unfaithful** to how the model actually works.
- They may name a feature without telling the applicant **what to do** about it.
- **Counterfactual explanations** ("you would have been approved if your debt-to-income ratio were 5 points lower") are more actionable, but may suggest impossible changes.

### Searching for less discriminatory alternatives

Because many different models achieve similar accuracy (03-02), lenders can search for one with lower disparity. Fintech lenders and fair-lending advocates have argued regulators should **require** LDA searches. Some lenders now use automated searches for "fairer" model variants. The CFPB and several state regulators had signaled interest in requiring this before the 2025 enforcement shift ⚠.

### Enforcement posture, 2025–2026 ⚠

Bloomberg Law reported in 2026 that federal fair-lending enforcement had sharply declined even as AI underwriting grew, following CFPB staff and budget cuts and changes in agency priorities. Commentators highlight:

- state regulators (e.g., the Massachusetts AG's 2025 settlement with a student lender over AI underwriting that allegedly disadvantaged Black, Hispanic and non-citizen applicants ⚠),
- private litigation, and
- bank regulators' model-risk management guidance (SR 11-7).

Verify all of these before teaching.

## Applying the frameworks

- **Justice:** Alternative data could expand credit to excluded groups, or create new digital redlining.
- **Explicability:** The adverse-action requirement is a legal codification of the explicability principle.
- **Autonomy:** Actionable explanations let applicants improve their position. Opaque ones don't.
- **Consequences:** Both over-lending (predatory debt) and under-lending (exclusion) cause harm.

## Discussion questions

1. Should lenders be allowed to use education data (school attended, major) in credit models? Argue both sides.
2. Is it acceptable for a model to be accurate on average but unable to explain individual decisions, if it approves more applicants from underserved groups?
3. Should regulators require lenders to search for less discriminatory alternative models? Who should define "comparably accurate"?
4. If federal enforcement declines, who should fill the gap: states, private litigation, industry self-regulation?

## Activity: write an adverse action notice (15 minutes)

An ML model denies an applicant. Its top SHAP features are:

1. high revolving utilization (82%),
2. short credit history (14 months),
3. three recent inquiries, and
4. "device and browser risk score."

Write the adverse action reasons you would give. Which feature, if any, is ethically problematic to use? Why?

## Key terms

- **ECOA / Regulation B:** Federal credit anti-discrimination law and its implementing rule.
- **Adverse action notice:** The required statement of specific reasons for denial.
- **Credit invisible:** Having no credit file.
- **Alternative data:** Non-traditional data used in credit decisions.
- **SHAP / LIME / counterfactual explanation:** Methods for explaining model predictions.
- **Digital redlining:** Technology-enabled exclusion along historically discriminatory lines.

## Connections

- Metrics and LDAs → 03-02 · Insurance and housing → 03-06 · Explanations → 03-09 · U.S. enforcement shifts → 08-02
- A2 scenario 3 (credit union)

## Sources and further reading

- NYDFS, *Report on Apple Card Investigation* (March 2021). — [Free full text](https://www.dfs.ny.gov/system/files/documents/2021/03/rpt_202103_apple_card_investigation.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r115). <!-- reading-access -->
- CFPB Circulars 2022-03 and 2023-03 (adverse action and complex algorithms). ⚠ Status. — [Circular 2022-03 — Free archived full text](https://www.govinfo.gov/content/pkg/FR-2022-06-14/pdf/2022-12729.pdf); [Circular 2023-03 — Free archived full text](https://www.govinfo.gov/content/pkg/FR-2024-04-17/pdf/2024-08003.pdf); [Withdrawal notice — Free full text](https://www.consumerfinance.gov/compliance/guidance/withdrawn-guidance/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r116). <!-- reading-access -->
- Relman Colfax, Upstart Fair Lending Monitorship reports (2020–2021). — [Free full text](https://www.relmanlaw.com/cases-upstart-network-fair-lending-counseling); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r117). <!-- reading-access -->
- Bloomberg Law, "CFPB Risks Defanging Fair Lending Enforcement as AI Use Grows" (2026). ⚠ — [Paid / library](https://news.bloomberglaw.com/business-and-practice/cfpb-risks-defanging-fair-lending-enforcement-as-ai-use-grows); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r118). <!-- reading-access -->
- Gillis, T. "The Input Fallacy," *Minnesota Law Review* 106 (2022). — [Free full text](https://scholarship.law.umn.edu/minnlrev/vol106/iss3/2/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r119). <!-- reading-access -->
- Black, E. et al. "Less Discriminatory Algorithms," *Georgetown Law Journal* 113 (2024). — [Free full text](https://www.law.georgetown.edu/georgetown-law-journal/wp-content/uploads/sites/26/2024/11/Black-et-al._LessDiscriminatory.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r120). <!-- reading-access -->
