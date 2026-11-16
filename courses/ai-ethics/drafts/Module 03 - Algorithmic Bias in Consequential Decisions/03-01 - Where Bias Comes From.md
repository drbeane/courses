# 03-01 — Where Bias Comes From

**Module:** 3 — Algorithmic Bias in Consequential Decisions
**Estimated time:** 35 minutes

**In this lesson:** An algorithm can discriminate without ever being told anyone's race or sex. This lesson traces where bias enters a machine learning system, from the world it learns from to the way it is used, and shows why the same tracing is also how bias gets found and fixed.

## Cost Is Not Need

In 2019 Ziad Obermeyer and colleagues published a study in *Science* of a commercial algorithm that U.S. health systems used to decide which patients should get extra support from care-management programs. These programs assign nurses and coordinators to patients with complex illnesses, and they can keep people out of hospital. The algorithm was applied to millions of patients a year.

It did not use race. It predicted each patient's future health-care costs and used that as a stand-in for how sick they were. The reasoning seemed sensible: sicker patients cost more.

But less money had historically been spent on Black patients than on white patients who were equally ill, for reasons that include unequal access to care, distrust of the medical system and discrimination. So the algorithm learned that Black patients were "cheaper," and treated cheaper as healthier. At any given risk score, Black patients were considerably sicker than white patients with the same score. The authors estimated that fixing the problem would raise the share of Black patients flagged for extra help from about 18 percent to about 47 percent.

Nothing in the code mentioned race. The bias came from one decision: what the model was asked to predict.

The ending of the story matters too. The researchers worked with the developer, the problem was confirmed, and the developer began work to reduce the bias. When the label was changed to measure health directly, the algorithm became both fairer and better at its real job. Bias that is found can often be fixed. The hard part is finding it.

## Seven Places Bias Gets In

Harini Suresh and John Guttag described how bias can enter at each stage of building and using a model. Their framework is the most useful map for this module.

| Stage | Kind of bias | What happens | Example |
|---|---|---|---|
| The world | **Historical bias** | The world itself reflects past injustice | Hiring records from a company that rarely hired women as engineers |
| Collecting data | **Representation bias** | Some groups are under-represented in the data | Face datasets dominated by lighter-skinned men |
| Defining variables | **Measurement bias** | A feature or label is a poor or uneven stand-in for what matters | Cost as a stand-in for need; arrests as a stand-in for crime |
| Building the model | **Aggregation bias** | One model is used for groups whose patterns differ | A diabetes model that ignores group differences in a key blood test |
| Building the model | **Learning bias** | Training choices widen gaps | Maximizing overall accuracy at the expense of small groups |
| Testing | **Evaluation bias** | The test data do not look like the people the system will be used on | Testing on studio photos, using on security footage |
| Use | **Deployment bias** | The system is used for something other than what it was built for | A tool built to guide treatment used to set sentences |

Two things stand out. Only a few of the seven are about the data in the narrow sense. And several are decisions people make, such as what to predict, how to test and where to deploy, which means people can make them differently.

## Removing Race Does Not Remove Race

The most common first response to algorithmic bias is to delete the sensitive variables. If the model never sees race, sex or age, how can it discriminate? This approach is called fairness through unawareness, and it rarely works.

The reason is that other variables carry the same information. ZIP code tracks race closely in segregated cities. A first name suggests ethnicity and gender. Graduation year reveals age. A gap in employment can signal caregiving, disability or a prison sentence. Membership in a "women's chess club" reveals sex, as Amazon found when a recruiting model it was building learned to penalize résumés containing the word "women's." Lesson 03-03 tells that story.

With enough of these variables, a model can effectively reconstruct the attribute that was removed. This is called **redundant encoding**, and the resulting harm is **proxy discrimination**: discrimination carried out through variables that stand in for a protected trait.

Removing the attribute also has a hidden cost. If race is not in the data, nobody can check whether outcomes differ by race. Many fairness audits need exactly the information that unawareness throws away.

## Labels Are Choices

The Obermeyer case points to the deepest source of bias. What a model predicts is a human decision, and the thing that can be measured is often not the thing that matters.

| What people care about | What systems often predict | Why they differ |
|---|---|---|
| Health need | Future cost | Unequal access to care |
| Criminal behavior | Re-arrest | Unequal policing |
| Job performance | Who was hired before, or manager ratings | Past discrimination; biased ratings |
| Ability to repay | Repayment among a lender's past customers | Who was approved before |
| Child maltreatment | Referral to child services | Unequal reporting |

Abigail Jacobs and Hanna Wallach describe this as the gap between a **construct**, the thing you actually care about, and its **operationalization**, the thing you can measure. Every predictive system sits on some such gap. The question is how wide it is and whom it hurts.

## When Predictions Make Their Own Data

Some systems shape the data they will later learn from, and then bias can grow on its own. This is a **feedback loop**.

If police patrol where a model predicts crime, they record more crime there, which the model then takes as confirmation; Lesson 03-07 works through the arithmetic. If a lender never lends to a group, it never learns how that group repays, so the model stays uncertain about them and keeps declining them. If a job site shows engineering ads mostly to men, more men apply, and the system learns that engineering jobs are for men.

In each case nobody intends the outcome, and the system appears to be confirmed by the evidence it has helped create.

## Not Only in the Data

Some bias lives outside the model altogether.

It can be in the problem. "Predict who will default" is one way to frame a lending decision. "Find loan terms this person can repay" is another, and it leads to a different system.

It can be in the deployment. Who reviews the output, and do they override it more often for some groups than others?

And it can be in power. Who decided to automate this decision, and can the people affected contest it?

## Why the Map Matters

It would be easy to read this lesson as a list of reasons not to use algorithms. That is not its point.

People make biased decisions too, and their bias is usually harder to find. A hiring manager's preferences are not written down anywhere, and you cannot run them on a thousand test cases. A model's are, and you can. The economist Sendhil Mullainathan, who worked on both the health study and earlier research showing that human recruiters discriminate by name, has argued that biased algorithms are easier to fix than biased people for exactly this reason. Lesson 03-08 takes up that comparison.

The map in this lesson is what makes fixing possible. If you know where bias can enter, you know where to look: at the label, at who is missing from the data, at what the test set looks like, at how the system is actually used. The health algorithm was fixed because researchers looked at the label.

There is also a limit to fixing. Some bias comes from the world itself, as historical bias. A model trained on an unjust past will reproduce that past unless someone decides it should not. Whether a model should reflect the world as it is or as it ought to be is not a technical question. It is the question of justice from Lesson 01-06, and someone has to answer it on purpose.

## Check Your Understanding

**1. Why did the health algorithm underestimate how sick Black patients were?**

:::answer Answer
It predicted future health-care costs as a stand-in for health need. Less had historically been spent on Black patients with the same level of illness, so the model treated them as healthier than they were.
:::

**2. Why does removing race from a model's inputs usually fail to prevent racial bias?**

:::answer Answer
Other variables, such as ZIP code, name or employment history, carry the same information, so the model can effectively reconstruct race. Removing it also makes it harder to audit outcomes by race.
:::

**3. What is the difference between a construct and its operationalization?**

:::answer Answer
The construct is what you actually care about, such as job performance. The operationalization is what you can measure and predict, such as past hiring decisions. Bias often lives in the gap between them.
:::

**4. Why might biased algorithms be easier to fix than biased people?**

:::answer Answer
A model's behavior can be tested systematically on many cases and its inputs inspected and changed. A person's biases are hidden and inconsistent.
:::

## Your Turn

For each case, name the stage or stages from the table where bias entered, and suggest one change that would help.

1. In 2020 the UK used an algorithm to award school grades when exams were cancelled. It adjusted teachers' predicted grades using each school's past results, which pulled down high achievers at schools that had historically done less well.
2. A 2020 study found that leading speech-recognition systems made nearly twice as many errors for Black speakers as for white speakers.
3. A tenant-screening model counts eviction *filings* against applicants, even when the case was dismissed.

## Key Terms

- **Historical bias:** Bias that comes from past injustice reflected in the world and therefore in data.
- **Representation bias:** Bias from some groups being under-represented in the data.
- **Measurement bias:** Bias from a feature or label being a poor or uneven stand-in for what matters.
- **Proxy discrimination:** Discrimination through variables correlated with a protected attribute.
- **Redundant encoding:** The recoverability of a protected attribute from other features.
- **Construct:** The quality a system is really meant to capture.
- **Operationalization:** The measurable quantity used in place of a construct.
- **Feedback loop:** A cycle in which a system's predictions shape the data it later learns from.

## Sources

- **Core:** Obermeyer, Z. et al. "Dissecting racial bias in an algorithm used to manage the health of populations," *Science* 366 (2019). — [Free manuscript](https://escholarship.org/uc/item/6h92v832); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r094). <!-- reading-access -->
- Suresh, H. & Guttag, J. "A Framework for Understanding Sources of Harm throughout the Machine Learning Life Cycle," *EAAMO 2021*. — [Free manuscript](https://arxiv.org/abs/1901.10002); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r095). <!-- reading-access -->
- Jacobs, A. & Wallach, H. "Measurement and Fairness," *FAccT 2021*. — [Free manuscript](https://arxiv.org/abs/1912.05511); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r096). <!-- reading-access -->
- Koenecke, A. et al. "Racial disparities in automated speech recognition," *PNAS* 117 (2020). — [Free full text](https://doi.org/10.1073%2Fpnas.1915768117); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r097). <!-- reading-access -->
- Barocas, S. & Selbst, A. "Big Data's Disparate Impact," *California Law Review* 104 (2016). — [Free manuscript](https://doi.org/10.2139/ssrn.2477899); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r098). <!-- reading-access -->
- Mullainathan, S. "Biased Algorithms Are Easier to Fix Than Biased People," *New York Times*, Dec 6, 2019. ⚠ — [Paid / library](https://www.nytimes.com/2019/12/06/business/algorithm-bias-fix.html)
