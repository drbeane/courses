# 03-10 — Lab: Consequential Decision Review

**Module:** 3 — Algorithmic Bias in Consequential Decisions
**Estimated time:** 90 minutes

**In this lesson:** You will review a real-world-style hiring tool the way an auditor would: measure its outcomes by group, investigate what it predicts and why, and recommend whether the employer should keep using it. This lab is the template for the résumé-screening scenario in A2.

## Scenario

Northfield Health Partners is a regional health system. It is fictional, but its situation is typical. It hires about 120 patient-access representatives a year, the staff who register patients, check insurance and schedule appointments, and it receives about 4,000 applications a year for those jobs.

Last year Northfield began using ScreenRight, a vendor's tool that gives each résumé a score from 0 to 100. Applicants scoring 60 or more are automatically advanced to a phone screen. Everyone else is rejected without a person reading their application.

The vendor's documentation says four things. The tool was trained on six years of Northfield's past hiring decisions, meaning who was hired, plus an industry dataset. Its inputs include years of experience, job titles, education, keywords, gaps in employment, the distance from the applicant's ZIP code to the facility, and "career stability," which is average time spent in each job. The vendor's validation shows that the score is correlated with being hired, with a correlation of 0.31. And applicants are not told that an AI tool screens them.

Before Northfield renews the contract, its Chief People Officer has asked you to review the tool. Before ScreenRight, two recruiters screened all applications by hand and said they could give each résumé only a minute or two.

## Data

Outcomes for last year's 4,000 applicants. Demographic information was voluntary, and 3,400 applicants provided it.

| Group | Applicants | Advanced (score of 60 or more) |
|---|---:|---:|
| Women | 2,300 | 920 |
| Men | 1,100 | 506 |
| White | 1,700 | 765 |
| Black | 900 | 270 |
| Hispanic or Latino | 550 | 220 |
| Asian | 250 | 110 |
| Age 40 and over | 1,000 | 250 |
| Under 40 | 2,400 | 1,080 |

The vendor also provided a summary of the model's features. The largest negative weights are on a gap in employment longer than six months, living more than 15 miles from the facility, and average time in a job of less than 18 months. The largest positive weights are on a previous job title of "Patient Access" or "Registration," a bachelor's degree, and the keyword "Epic," the name of a widely used hospital records system.

## Part 1: Outcome Analysis (25 minutes)

Compute the **selection rate** for each group: the number advanced divided by the number of applicants. Then compute each group's **impact ratio**: its selection rate divided by the highest selection rate in its category (sex, race and ethnicity, or age). Which groups fall below the four-fifths threshold of 0.8 from Lesson 03-02?

Then list what this analysis does not tell you. Consider whether the groups differ in qualifications, intersectional groups such as older Black women, disability, the 600 applicants who gave no demographic information, and whether the differences could be due to chance.

## Part 2: What the Tool Predicts, and Why (25 minutes)

Start with the label. The tool predicts past hiring decisions. What does Northfield actually care about? How might the label differ from that, as Lesson 03-01 described?

Then take each heavily weighted feature in turn. For each, say how plausibly it relates to doing the job well, which protected groups it might act as a proxy for, and whether a less discriminatory alternative exists.

Next, consider the data. What would you need to know about the six years of past hiring decisions before trusting a model trained on them?

Finally, consider the evidence. Is a correlation of 0.31 with *being hired* evidence that the tool predicts *job performance*?

## Part 3: Recommendation (25 minutes)

Write a one-page memo to the Chief People Officer. It should summarize your findings in plain language, and recommend one of three options: renew, renew with conditions, or do not renew.

Your memo must say what would replace the tool if your recommendation changes how screening is done, and what that alternative would cost applicants. Remember the baseline: two recruiters with a minute or two per résumé. Lesson 03-08 explains why this comparison matters.

List the changes you require, with at least one on each of these: the features (remove, modify or test them); the threshold or human review; notice to applicants; accommodation for applicants with disabilities; and appeal or reconsideration.

Say what monitoring Northfield should do from now on. And identify the legal considerations that apply, with the jurisdiction and an "as of" date for each. You are not giving legal advice, but you must not misstate the law.

## Part 4: Reflection (15 minutes)

In about 150 words: which ethical framework from Module 1 most shaped your recommendation, and what would someone relying on a different framework recommend instead?

## Check Your Understanding

**1. What is an impact ratio?**

:::answer Answer
A group's selection rate divided by the highest selection rate among groups in the same category.
:::

**2. Why is correlation with past hiring decisions weak evidence that a tool predicts job performance?**

:::answer Answer
Past hiring decisions reflect recruiters' preferences, including any bias, not how well people actually performed. A tool can match past hiring closely and still predict performance poorly.
:::

**3. Why might "distance from the facility" be a problem as a feature?**

:::answer Answer
In segregated regions, where people live is correlated with race and income, so distance can act as a proxy for protected traits, and its connection to doing the job well is weak.
:::

## Answer Key (Instructor)

| Group | Selection rate | Impact ratio |
|---|---|---|
| Women | 0.400 | 0.870 (compared with men at 0.460) |
| Men | 0.460 | 1.000 |
| White | 0.450 | 1.000 |
| Black | 0.300 | 0.667 (below 0.8) |
| Hispanic or Latino | 0.400 | 0.889 |
| Asian | 0.440 | 0.978 |
| Age 40 and over | 0.250 | 0.556 (below 0.8) |
| Under 40 | 0.450 | 1.000 |

Likely findings. Career stability and employment gaps plausibly act as proxies for age, because longer careers include more job changes and caregiving gaps, and for disability, through medical leave. Distance from the facility may act as a proxy for race and income, given residential segregation and access to transit. A degree requirement may not be job-related for this role. And the label, past hiring, carries past recruiters' preferences.

A strong answer is "renew only with conditions": remove the distance and gap features; test for a less discriminatory alternative; send borderline scores, for example 45 to 59, to human review; notify applicants and offer accommodation and reconsideration; monitor quarterly, including by age and by intersectional groups; and require the vendor's cooperation and audit rights in the contract (Lesson 08-07). "Do not renew" is also defensible if the memo deals honestly with the cost of returning to rushed manual screening.

## Key Terms

- **Selection rate:** The share of a group advanced or approved.
- **Impact ratio:** A group's selection rate divided by the highest group's rate.

## Sources

- EEOC Uniform Guidelines on Employee Selection Procedures, 29 C.F.R. § 1607.4(D) (the four-fifths rule).
- NYC Department of Consumer and Worker Protection, Local Law 144 rules on bias audit calculations (2023).
- The scenario and data are fictional, constructed for teaching.
