# 03-02 — Measuring Fairness: Metrics and Trade-offs

**Module:** 3 — Algorithmic Bias in Consequential Decisions
**Estimated time:** 45 minutes

**In this lesson:** "Is this algorithm fair?" sounds like one question. This lesson shows that it is several, that the main ways of measuring fairness can contradict each other, and that choosing among them is an ethical decision no formula can make for you.

## Two Analysts, One Tool, Opposite Conclusions

In 2016 the news organization ProPublica analyzed COMPAS, a tool that courts in Broward County, Florida, used to estimate how likely a defendant was to be arrested again. ProPublica reported that the tool was biased against Black defendants. Among defendants who were *not* re-arrested over the next two years, Black defendants had been labeled high risk almost twice as often as white defendants. Among defendants who *were* re-arrested, white defendants had more often been labeled low risk.

The company that made COMPAS replied that the tool was fair. At each risk score, it said, Black and white defendants were re-arrested at about the same rate. A score of 7 meant the same thing whoever received it.

Both claims were correct. They used different definitions of fairness. And as researchers showed soon afterward, when two groups are re-arrested at different overall rates, those definitions cannot all be satisfied at once. The argument was not a misunderstanding that better analysis could clear up. It was a real conflict about which mistakes matter most, and to whom.

## Four Boxes

To see why, you need one simple tool. Any yes-or-no prediction, such as "high risk" or "low risk," "interview" or "reject," can be right or wrong in two ways each, which gives four boxes.

| | Actually positive | Actually negative |
|---|---|---|
| **Predicted positive** | True positive | False positive |
| **Predicted negative** | False negative | True negative |

This table is called a **confusion matrix**. From its four counts you can compute four rates for any group.

The **selection rate** is the share of the group predicted positive: true positives plus false positives, divided by everyone.

The **true positive rate** is the share of people who really are positive whom the system catches: true positives divided by true positives plus false negatives.

The **false positive rate** is the share of people who really are negative whom the system wrongly flags: false positives divided by false positives plus true negatives.

The **positive predictive value** is the share of people flagged who really are positive: true positives divided by true positives plus false positives.

Each rate answers a different question, and each matches a different idea of fairness.

## Five Definitions of Fair

| Definition | What must be equal across groups | The idea | The usual objection |
|---|---|---|---|
| **Demographic parity** | Selection rate | Each group gets good outcomes at the same rate | Ignores real differences between groups |
| **Equal opportunity** | True positive rate | Qualified people are selected at the same rate | Ignores false positives |
| **Equalized odds** | True and false positive rates | Errors are balanced in both directions | Can require different cut-offs for different groups |
| **Predictive parity** | Positive predictive value | A positive prediction means the same for everyone | Allows unequal error rates |
| **Calibration** | The outcome rate at each score | A given score means the same risk for everyone | Allows unequal error rates |

ProPublica's complaint was about equalized odds: Black defendants faced a higher false positive rate. The company's defense was about calibration.

U.S. employment law contains a simple screen related to demographic parity. Under the **four-fifths rule**, from federal guidelines adopted in 1978, a selection process is flagged for possible adverse impact if any group's selection rate is less than 80 percent of the rate of the group selected most often. It is a warning sign, not a legal safe harbor, and passing it does not prove a process lawful.

## Why You Cannot Have Them All

In 2016 and 2017, two research teams, Jon Kleinberg, Sendhil Mullainathan and Manish Raghavan, and separately Alexandra Chouldechova, proved what the COMPAS dispute had shown in practice. When the true rate of the outcome differs between groups, and the prediction is less than perfect, no tool can be calibrated *and* have equal false positive rates *and* have equal false negative rates across those groups.

This is one of the **impossibility results** in fairness. It does not say fairness is impossible. It says that "fair" names several different goals, and that when groups differ in their underlying rates, you must choose which goal to give up.

The choice also depends on why the underlying rates differ. If one group is re-arrested more often partly because its neighborhoods are policed more heavily, as Lesson 03-07 describes, then calibrating to re-arrest builds that policing pattern into the tool. The difference in base rates is not simply a fact about the people. It may be a product of injustice.

## How to Choose

Since choosing a metric is an ethical decision, it helps to have questions that guide it.

What harm does each kind of error do, and who suffers it? In pretrial detention, a false positive means an innocent person sits in jail. In cancer screening, a false negative means a sick person goes untreated. The worse error deserves the stronger protection.

Is the decision punitive or helpful? For decisions that punish, such as detention, many ethicists give priority to equal false positive rates, so that innocent people in every group face the same risk of wrongful punishment. For decisions that help, such as outreach to people who might need support, equal opportunity often matters most, so that everyone who needs help has the same chance of getting it.

Are the differences in base rates themselves a result of past injustice? If so, matching them exactly may not be fair at all.

And what does the law allow? Some anti-discrimination law limits setting different cut-offs for different groups, even when the purpose is to equalize error rates.

## Beyond Group Averages

Group metrics are not the only way to think about fairness, and they have blind spots.

**Individual fairness** asks that similar individuals be treated similarly. That sounds simple, but it requires deciding what makes two people "similar," which is itself contested.

**Counterfactual fairness** asks whether a decision would change if a person's protected attribute had been different, with everything that follows from that attribute changed accordingly.

Intersectional groups can disappear. A system can look fair for women and fair for Black people, measured separately, and still treat Black women badly. The Gender Shades study in Lesson 02-03 showed exactly this.

And small groups give noisy numbers. A rate computed from twenty people can swing widely by chance, so a careful audit reports how uncertain each figure is.

## A More Hopeful Result

The impossibility results can sound discouraging. A newer line of research offers some hope.

For most real prediction problems, there is not one best model. There are many different models that are almost equally accurate, sometimes called the Rashomon set, after the film in which witnesses give different accounts of the same event. Those models can differ a great deal in how their outcomes fall across groups. So an organization can often search among nearly equally accurate models for one with smaller disparities, giving up little or no accuracy.

U.S. anti-discrimination law has a concept that fits this. Under disparate-impact law, a practice that disadvantages a protected group can be unlawful even if it serves a legitimate purpose, if a **less discriminatory alternative** exists that serves the purpose about as well. Researchers have argued that because searching for such alternatives is now practical, organizations have a duty to search. Lesson 03-05 returns to this in lending.

## Check Your Understanding

**1. What were ProPublica and the company that made COMPAS each measuring?**

:::answer Answer
ProPublica measured error rates, finding a higher false positive rate for Black defendants. The company measured calibration, finding that each score corresponded to about the same re-arrest rate for both groups.
:::

**2. What does the four-fifths rule check?**

:::answer Answer
Whether any group's selection rate is less than 80 percent of the highest group's selection rate. Falling below that flags possible adverse impact.
:::

**3. What do the impossibility results show?**

:::answer Answer
When the outcome's base rate differs between groups and prediction is imperfect, a tool cannot be calibrated and also have equal false positive and equal false negative rates. Some definitions of fairness must be given up.
:::

**4. For a decision that punishes, such as pretrial detention, which error rate do many ethicists prioritize equalizing, and why?**

:::answer Answer
The false positive rate, so that innocent people in every group face the same risk of being wrongly punished.
:::

## Your Turn

A hiring screen reviews 200 applicants from Group A and 100 from Group B. "Positive" means advanced to an interview, and "actually positive" means found qualified by a later structured assessment.

| | Group A | Group B |
|---|---|---|
| True positives | 60 | 20 |
| False positives | 20 | 5 |
| False negatives | 20 | 20 |
| True negatives | 100 | 55 |

Compute the selection rate, true positive rate, false positive rate and positive predictive value for each group. Does the screen pass the four-fifths rule? Which definitions of fairness does it meet, and which does it violate? Which would you prioritize for hiring, and why?

:::answer Check your arithmetic
Group A: selection rate 0.40, true positive rate 0.75, false positive rate about 0.17, positive predictive value 0.75. Group B: selection rate 0.25, true positive rate 0.50, false positive rate about 0.08, positive predictive value 0.80. The ratio of selection rates is 0.625, below 0.8, so it fails the four-fifths rule. Equal opportunity is clearly violated; predictive values are roughly similar.
:::

## Key Terms

- **Confusion matrix:** The four-way table of true positives, false positives, false negatives and true negatives.
- **True positive rate:** The share of actual positives the system correctly identifies.
- **False positive rate:** The share of actual negatives the system wrongly flags.
- **Positive predictive value:** The share of flagged cases that are actually positive.
- **Demographic parity:** Equal selection rates across groups.
- **Equal opportunity:** Equal true positive rates across groups.
- **Equalized odds:** Equal true positive and false positive rates across groups.
- **Calibration:** Each score corresponds to the same outcome rate in every group.
- **Four-fifths rule:** A U.S. employment screen that flags possible adverse impact when one group's selection rate is below 80 percent of the highest group's.
- **Impossibility results:** Proofs that several fairness definitions cannot all hold when base rates differ.
- **Less discriminatory alternative:** A comparably effective practice with less disparate impact.

## Sources

- **Core:** Barocas, S., Hardt, M. & Narayanan, A. *Fairness and Machine Learning* (fairmlbook.org), Chapter 3. — [Free full text](https://fairmlbook.org/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r102). <!-- reading-access -->
- Angwin, J. et al. "Machine Bias," *ProPublica*, May 23, 2016; Dieterich, W. et al., Northpointe response (2016). — [ProPublica Machine Bias — Free full text](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing); [Northpointe response archived by law review — Retrieval blocked](https://perma.cc/N5RL-M9RN); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r099). <!-- reading-access -->
- Kleinberg, J., Mullainathan, S. & Raghavan, M. "Inherent Trade-Offs in the Fair Determination of Risk Scores," *ITCS 2017*. — [Free manuscript](https://arxiv.org/abs/1609.05807); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r100). <!-- reading-access -->
- Chouldechova, A. "Fair prediction with disparate impact," *Big Data* 5(2), 2017. — [Free manuscript](https://arxiv.org/abs/1610.07524); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r101). <!-- reading-access -->
- Black, E., Koepke, J., Kim, P., Barocas, S. & Hsu, M. "Less Discriminatory Algorithms," *Georgetown Law Journal* 113 (2024). — [Free full text](https://www.law.georgetown.edu/georgetown-law-journal/wp-content/uploads/sites/26/2024/11/Black-et-al._LessDiscriminatory.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r103). <!-- reading-access -->
