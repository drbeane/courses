# 03-05 — Credit, Insurance, and Housing

**Module:** 3 — Algorithmic Bias in Consequential Decisions
**Estimated time:** 40 minutes

**In this lesson:** Algorithms now help decide who gets a loan, what insurance costs and who gets an apartment. This lesson looks at the promise that new data could bring excluded people in, the ways scoring can shut them out instead, and the old argument about whether charging people by their risk is fair.

## The Score That Ignored the Voucher

In 2021 Mary Louis, a Black woman in Massachusetts, applied for an apartment. She had a housing voucher that would pay most of the rent directly to the landlord, and a 16-year record of paying her rent on time. She was turned down. The decision rested on a "SafeRent Score" produced by a screening company's algorithm. The score weighed her credit history and non-rental debts heavily and gave no weight to the voucher's guaranteed payments.

She and other tenants sued under the Fair Housing Act, arguing that the scores disproportionately disadvantaged Black and Hispanic applicants who used vouchers. The U.S. Justice Department and the Department of Housing and Urban Development filed a statement supporting the idea that screening companies can be held responsible. In November 2024 the company agreed to a $2.3 million settlement and to stop using its score for voucher holders in Massachusetts unless fair-housing experts validated it. It did not admit wrongdoing.

Two years earlier, a different case had shown the opposite problem. In 2019 the entrepreneur David Heinemeier Hansson posted that the new Apple Card, issued by Goldman Sachs, had given him a credit limit 20 times higher than his wife's, even though they filed joint taxes and she had the better credit score. Others reported similar experiences. New York's financial regulator investigated, and in 2021 it found no unlawful discrimination: the bank did not use sex, and the differences came from factors such as each person's own credit history and income. But the regulator criticized the bank because nobody could easily explain individual decisions to the customers who received them.

One case is an apparent bias with a lawful explanation that nobody could give. The other is a score that missed the most important fact about the applicant. Both appear throughout this lesson.

## The Promise: Bringing People In

The strongest argument for algorithmic scoring in finance is about inclusion.

Traditional credit scores depend on a history of borrowing. People who have never borrowed have no score, and without a score it is hard to borrow, so the problem feeds itself. The U.S. Consumer Financial Protection Bureau estimated in 2015 that about 26 million American adults were "credit invisible," with no credit file at all, and millions more had files too thin to score. They are disproportionately Black, Hispanic, young and poor.

**Alternative data** could change this. A person who has paid rent and utility bills on time for years has shown exactly the reliability a lender wants to see, even without a loan. Records of income and spending from a bank account can show that someone can afford a loan that a thin credit file would never support. Lenders using machine learning have reported approving more applicants, at lower rates, than traditional models would.

The same is true elsewhere. Insurers using data on how people actually drive can charge careful drivers less, instead of charging every young driver the same high price. Tenant screening, done well, can let landlords consider applicants they would otherwise have turned away for lack of references.

So the comparison, as in Lesson 03-08, is with what happens without these tools. For millions of people, that is not a careful human loan officer. It is no loan at all, or a loan from a payday lender at a very high price.

## The Risk: Shutting People Out

Alternative data cuts both ways, and the table shows how.

| Kind of data | How it could help | How it could hurt |
|---|---|---|
| Rent and utility payments | Credits people who pay reliably without borrowing | Generally viewed favorably |
| Bank account income and spending | Shows real ability to pay | Privacy; requires access to the account |
| Education and employment | Predicts future income | Proxy for class, race and age |
| Device type, email domain, typing behavior | Fraud and risk signals | Weak relevance; proxy discrimination |
| Social media connections | — | Highly invasive; strong proxy for race and class |

One early example shows the tension. In 2017 the lender Upstart received a "no-action letter" from the Consumer Financial Protection Bureau, a statement that the agency did not intend to take action over its machine-learning lending model. Upstart reported approving more applicants at lower rates. An independent monitor reviewing the model between 2020 and 2021 found disparities connected to variables about education, including the colleges applicants had attended, and recommended changes.

Tenant screening has its own documented problems. Many reports list eviction *filings*, including cases that were dismissed or that the tenant won, and filings fall disproportionately on Black women. Name-matching errors attach other people's criminal or eviction records to applicants, more often for common surnames, which are more frequent among Black and Hispanic Americans; in 2023 one large screening company paid $15 million to settle federal charges over its practices. And applicants are often told only "denied," with no score and no reasons, even though federal law gives them the right to dispute errors.

## Explaining a Denial

U.S. law requires lenders to explain themselves. Under the Equal Credit Opportunity Act, when a lender denies credit or offers worse terms, it must give the applicant an **adverse action notice** stating the specific main reasons. The Consumer Financial Protection Bureau said in 2022 and 2023 that using a complex model does not excuse this duty, and that vague or inaccurate reasons do not comply. The status of that guidance should be checked, because the agency withdrew some guidance in 2025.

Explaining a complex model is harder than it sounds. Tools that estimate which features drove a prediction can give different reasons for nearly identical applicants, and may not reflect how the model really works. A reason such as "insufficient credit history" names a problem without saying what to do about it. **Counterfactual explanations**, such as "you would have been approved if your debt were $2,000 lower," are more useful, but they can suggest changes a person cannot make. Lesson 03-09 takes up explanation in general.

## Is It Fair to Charge People by Their Risk?

Insurance raises a question that goes beyond accuracy.

Insurance prices risk. More detailed data lets an insurer price more precisely, and precision sounds fair: each person pays for the risk they bring. This is **actuarial fairness**.

But insurance also exists to pool risk, so that people share the cost of misfortunes no one can fully control. On this view, which emphasizes **solidarity**, charging people more for risks they cannot help, especially risks that reflect past injustice, defeats the purpose. If cars are stolen more often in a neighborhood that was redlined and then starved of investment, charging its residents more is accurate. It also makes them pay a second time for the discrimination that shaped their neighborhood.

Some features show how hard these lines are. Credit-based insurance scores do predict car insurance claims, but they penalize people with low incomes and correlate with race; California, Hawaii, Massachusetts and Michigan ban or restrict them for car insurance. Data on how people drive rewards careful drivers, but it also requires being monitored, and it can penalize night-shift workers for driving at night. "Price optimization," which charges customers based on how likely they are to shop around instead of how risky they are, is banned in many states as unfair discrimination.

Societies have made these choices before. The U.S. Affordable Care Act of 2010 prohibits pricing health insurance by pre-existing conditions. A 2008 U.S. law bans genetic discrimination in health insurance and employment. The European Union bans pricing insurance by sex. AI makes such choices more pressing, because a model can find many proxies for whatever society has decided to protect. Colorado passed a law in 2021 that requires insurers to test their models and data for unfair discrimination, one of very few laws that require testing.

## The Law and Its Enforcement

As of October 2026, the main U.S. rules are the Equal Credit Opportunity Act, which forbids credit discrimination on grounds including race, sex, age, marital status and receipt of public assistance; the Fair Housing Act, which covers housing and mortgage lending; and the Fair Credit Reporting Act, which gives people rights over reports about them, including tenant-screening reports.

Disparate impact has long applied in fair lending, but its future is contested. In 2025 federal agencies moved to drop it from their own enforcement, while state attorneys general and private plaintiffs continue to use it. Federal fair-lending enforcement declined sharply in 2025 and 2026 even as lenders' use of AI grew. State regulators have filled some of the gap: in 2025 the Massachusetts attorney general settled with a student lender over an AI underwriting model alleged to disadvantage Black, Hispanic and non-citizen applicants.

Because many nearly equally accurate models can differ in their disparities, as Lesson 03-02 explained, some lenders now search automatically for less discriminatory versions of their models. Advocates have argued regulators should require it.

*Legal and enforcement status is as of October 2026 and should be checked before teaching.*

## Where People Disagree

One disagreement is about what data lenders and insurers should be allowed to use. Supporters of broad data argue that more information means more accurate prices and more people approved, and that excluding data leaves the excluded where they were. Critics argue that much of the new data is a proxy for race and class, and that accuracy is not the same as fairness.

A second is about explanation. Is it acceptable for a model to approve more applicants from underserved groups if nobody can explain any individual decision? Some say the outcome matters most. Others say a person refused credit is owed a reason they can act on.

A third is the one in the insurance section: whether people should pay according to their risk, or whether some risks should be shared.

## Check Your Understanding

**1. Why was the SafeRent score challenged?**

:::answer Answer
It weighed credit history and non-rental debt heavily and ignored the voucher's guaranteed rent payments, which allegedly disadvantaged Black and Hispanic voucher holders.
:::

**2. How could alternative data help people who are "credit invisible"?**

:::answer Answer
Records such as rent and utility payments or bank account income can show reliability and ability to pay for people who have never borrowed and so have no credit score.
:::

**3. What must an adverse action notice contain?**

:::answer Answer
The specific main reasons the lender denied credit or offered worse terms. Using a complex model does not excuse this.
:::

**4. What is the difference between actuarial fairness and solidarity in insurance?**

:::answer Answer
Actuarial fairness charges each person according to their expected cost. Solidarity holds that insurance should pool risk, so people should not pay more for risks they cannot control, especially risks that reflect past injustice.
:::

## Your Turn

A machine-learning model denies a loan applicant. The four features that most influenced the decision were high use of available credit (82 percent), a short credit history (14 months), three recent credit applications, and a "device and browser risk score." Write the reasons you would give in the adverse action notice. Then say which of the four features, if any, is ethically troubling to use, and why.

The credit union scenario in A2 builds on this lesson.

## Key Terms

- **Credit invisible:** Having no credit file at all.
- **Alternative data:** Information not traditionally used in credit decisions, such as rent payments or bank account records.
- **Adverse action notice:** The statement of specific reasons a lender must give when it denies credit or offers worse terms.
- **Counterfactual explanation:** A statement of what would have had to be different for the decision to change.
- **Tenant screening:** Automated background and risk assessment of rental applicants.
- **Actuarial fairness:** Pricing according to each person's expected cost.
- **Solidarity:** The principle that insurance pools risk across a group.
- **Digital redlining:** Exclusion through technology along historically discriminatory lines.

## Sources

- **Core:** Black, E. et al. "Less Discriminatory Algorithms," *Georgetown Law Journal* 113 (2024), Parts I–II. — [Free full text](https://www.law.georgetown.edu/georgetown-law-journal/wp-content/uploads/sites/26/2024/11/Black-et-al._LessDiscriminatory.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r120). <!-- reading-access -->
- *Louis v. SafeRent Solutions, LLC* (D. Mass.), settlement (Nov 2024); DOJ/HUD statement of interest (Jan 2023). — [DOJ/HUD statement — Free full text](https://www.justice.gov/crt/case/louis-et-al-v-saferent-et-al-d-mass); [SafeRent settlement documents — Free full text](https://www.matenantscreeningsettlement.com/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r121). <!-- reading-access -->
- NYDFS, *Report on Apple Card Investigation* (March 2021). — [Free full text](https://www.dfs.ny.gov/system/files/documents/2021/03/rpt_202103_apple_card_investigation.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r115). <!-- reading-access -->
- CFPB Circulars 2022-03 and 2023-03 (adverse action and complex algorithms). ⚠ Status. — [Circular 2022-03 — Free archived full text](https://www.govinfo.gov/content/pkg/FR-2022-06-14/pdf/2022-12729.pdf); [Circular 2023-03 — Free archived full text](https://www.govinfo.gov/content/pkg/FR-2024-04-17/pdf/2024-08003.pdf); [Withdrawal notice — Free full text](https://www.consumerfinance.gov/compliance/guidance/withdrawn-guidance/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r116). <!-- reading-access -->
- Relman Colfax, Upstart Fair Lending Monitorship reports (2020–2021). — [Free full text](https://www.relmanlaw.com/cases-upstart-network-fair-lending-counseling); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r117). <!-- reading-access -->
- FTC & CFPB, *U.S. v. TransUnion Rental Screening Solutions* (Oct 2023). — [Free full text](https://www.consumerfinance.gov/enforcement/actions/transunion-rental-screening-solutions-inc-and-trans-union-llc/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r122). <!-- reading-access -->
- Bloomberg Law, "CFPB Risks Defanging Fair Lending Enforcement as AI Use Grows" (2026). ⚠ — [Paid / library](https://news.bloomberglaw.com/business-and-practice/cfpb-risks-defanging-fair-lending-enforcement-as-ai-use-grows); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r118). <!-- reading-access -->
- Prince, A. & Schwarcz, D. "Proxy Discrimination in the Age of Artificial Intelligence and Big Data," *Iowa Law Review* 105 (2020). — [Free manuscript](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3347959); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r125). <!-- reading-access -->
- Colorado SB 21-169 and Division of Insurance regulations (3 CCR 702-10). ⚠ Status by line of business. — [SB21-169 official bill and act — Free official text](https://www.leg.colorado.gov/bills/sb21-169); [3 CCR 702-10, historical life-insurer rule — Free official text](https://www.sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+702-10&ruleVersionId=11153); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r124). <!-- reading-access -->
