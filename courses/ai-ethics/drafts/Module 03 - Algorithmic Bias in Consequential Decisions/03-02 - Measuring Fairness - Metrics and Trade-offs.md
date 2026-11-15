# 03-02 — Measuring Fairness: Metrics and Trade-offs

**Module:** 3 — Algorithmic Bias in Consequential Decisions
**Estimated time:** 45 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Compute and interpret demographic parity, equal opportunity, equalized odds, predictive parity and calibration from a confusion matrix.
2. Explain the impossibility results and why they make fairness an ethical choice.
3. Choose and justify a fairness metric for a specific decision context.

## Opening case: two analysts, one tool, opposite conclusions

In 2016, ProPublica analyzed COMPAS, a risk-assessment tool used in Broward County, Florida, and reported that it was biased against Black defendants:

- Black defendants who did **not** re-offend were almost twice as likely as white defendants to be labeled high risk (a higher **false positive rate**).
- White defendants who **did** re-offend were more often labeled low risk (a higher **false negative rate**).

Northpointe, COMPAS's maker, responded that the tool was fair: **at each risk score, Black and white defendants re-offended at about the same rate** (it was **calibrated**).

Both were mathematically correct. They were using different definitions of fairness, and when base rates differ between groups, those definitions **cannot all hold at once**.

## Core ideas

### The confusion matrix

For a binary prediction (e.g., "high risk" vs. "low risk"):

| | Actually positive | Actually negative |
|---|---|---|
| **Predicted positive** | True positive (TP) | False positive (FP) |
| **Predicted negative** | False negative (FN) | True negative (TN) |

From this, for each group:

- **Selection rate** = (TP + FP) / total
- **True positive rate (TPR, recall)** = TP / (TP + FN)
- **False positive rate (FPR)** = FP / (FP + TN)
- **Positive predictive value (PPV, precision)** = TP / (TP + FP)

### Common fairness definitions

| Metric | Requires equal across groups | Intuition | Typical concern |
|---|---|---|---|
| **Demographic parity** | Selection rate | Groups get positive outcomes at the same rate | Ignores real differences in base rates |
| **Equal opportunity** | TPR | Qualified people are selected at the same rate | Ignores false positives |
| **Equalized odds** | TPR **and** FPR | Errors are balanced in both directions | Can require group-specific thresholds |
| **Predictive parity** | PPV | A positive prediction means the same thing for everyone | Allows unequal error rates |
| **Calibration** | P(outcome \| score) | A score of 7 means the same risk for everyone | Allows unequal error rates |

**Legal connection:** U.S. employment law's "four-fifths rule" (EEOC Uniform Guidelines, 1978) flags possible adverse impact when one group's selection rate is below 80% of the highest group's. This is a demographic-parity-style screen, not a legal safe harbor.

### The impossibility results

Kleinberg, Mullainathan & Raghavan (2016) and Chouldechova (2017) proved that when base rates differ between groups and prediction is imperfect, a classifier **cannot simultaneously** satisfy:

- calibration (or predictive parity), and
- equal false positive rates, and
- equal false negative rates.

So the COMPAS dispute was not a misunderstanding. It was a genuine **value conflict** about which errors matter most and to whom.

### Choosing a metric is an ethical decision

Ask:

1. **What is the harm of each error type, and who bears it?** A false positive in pretrial detention means an innocent person is jailed. A false negative in disease screening means a sick person goes untreated.
2. **Are base-rate differences themselves the product of injustice?** If arrest rates differ because of policing patterns (03-08), calibration to arrest rates bakes in that injustice.
3. **What does the law require?** Some anti-discrimination laws restrict using group membership to set different thresholds.
4. **Is the decision punitive or assistive?** For punitive decisions (detention), many ethicists prioritize equal false positive rates. For assistive ones (outreach), equal opportunity may matter most.

### Beyond group metrics

- **Individual fairness:** Similar individuals should be treated similarly (Dwork et al., 2012). This requires defining "similar," which is itself contested.
- **Counterfactual fairness:** Would the decision change if the person's protected attribute had been different, holding everything else causally downstream constant?
- **Intersectionality:** Metrics computed for "women" and "Black people" separately can miss harms to Black women (Gender Shades, 02-03).
- **Small groups:** Metrics are noisy for small samples, so report confidence intervals.

### Less discriminatory alternatives

In U.S. disparate-impact law, even a business-justified practice can be unlawful if a **less discriminatory alternative** (LDA) exists that serves the same purpose. ML makes searching for LDAs feasible: many models with similar accuracy (the "Rashomon set") differ in disparity. Black et al. (2024) argue that firms have a duty to search for them (see 03-05).

## Applying the frameworks

- **Justice (Rawls):** Which metric would you choose behind the veil of ignorance, not knowing your group?
- **Deontology:** Equal false positive rates protect the innocent from unequal punishment.
- **Consequentialism:** Calibration maximizes predictive usefulness. Is usefulness the goal?

## Discussion questions

1. Which metric would you require for (a) pretrial detention, (b) cancer screening, (c) college admissions, (d) targeted job ads? Why?
2. If equalizing error rates requires different thresholds for different groups, is that discrimination or its remedy?
3. Is the four-fifths rule a good standard for AI hiring tools? What does it miss?
4. Northpointe said calibration is what judges need. ProPublica said error rates are what defendants experience. Who is right?

## Activity: compute the metrics (25 minutes)

A hiring screen evaluates 200 applicants from Group A and 100 from Group B. "Positive" = advanced to interview, and "Actually positive" = qualified (by a later structured assessment).

| | Group A | Group B |
|---|---|---|
| TP | 60 | 20 |
| FP | 20 | 5 |
| FN | 20 | 20 |
| TN | 100 | 55 |

Compute for each group: selection rate, TPR, FPR and PPV.

1. Does the screen pass the four-fifths rule?
2. Which fairness definitions are satisfied? Which violated?
3. Which would you prioritize for hiring, and why?

*(Answer key: A has a selection rate of 0.40, TPR 0.75, FPR about 0.167 and PPV 0.75. B has a selection rate of 0.25, TPR 0.50, FPR about 0.083 and PPV 0.80. The ratio of selection rates is 0.625, below 0.8, so it fails the four-fifths rule. Equal opportunity is violated, while PPV is roughly similar.)*

## Key terms

- **TPR / FPR / PPV:** True positive rate / false positive rate / positive predictive value.
- **Demographic parity / equal opportunity / equalized odds / predictive parity / calibration:** See the table.
- **Four-fifths rule:** EEOC heuristic for adverse impact.
- **Impossibility theorem (fairness):** Several fairness criteria are incompatible when base rates differ.
- **Less discriminatory alternative:** A comparably effective practice with less disparate impact.

## Connections

- COMPAS in depth → 03-07 · Lab application → 03-10 · Lending LDAs → 03-05
- A2 fairness critique (requires at least one metric and its limits)

## Sources and further reading

- Angwin, J. et al. "Machine Bias," *ProPublica*, May 23, 2016; Dieterich, W. et al., Northpointe response (2016). — [ProPublica Machine Bias — Free full text](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing); [Northpointe response archived by law review — Retrieval blocked](https://perma.cc/N5RL-M9RN); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r099). <!-- reading-access -->
- Kleinberg, J., Mullainathan, S. & Raghavan, M. "Inherent Trade-Offs in the Fair Determination of Risk Scores," *ITCS 2017*. — [Free manuscript](https://arxiv.org/abs/1609.05807); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r100). <!-- reading-access -->
- Chouldechova, A. "Fair prediction with disparate impact," *Big Data* 5(2), 2017. — [Free manuscript](https://arxiv.org/abs/1610.07524); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r101). <!-- reading-access -->
- Barocas, S., Hardt, M. & Narayanan, A. *Fairness and Machine Learning* (fairmlbook.org), Chapter 3. — [Free full text](https://fairmlbook.org/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r102). <!-- reading-access -->
- Black, E., Koepke, J., Kim, P., Barocas, S. & Hsu, M. "Less Discriminatory Algorithms," *Georgetown Law Journal* 113 (2024). — [Free full text](https://www.law.georgetown.edu/georgetown-law-journal/wp-content/uploads/sites/26/2024/11/Black-et-al._LessDiscriminatory.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r103). <!-- reading-access -->
