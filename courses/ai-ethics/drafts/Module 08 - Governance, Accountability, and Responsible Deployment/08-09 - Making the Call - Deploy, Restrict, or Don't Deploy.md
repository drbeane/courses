# 08-09 — Making the Call: Deploy, Restrict, or Don't Deploy

**Module:** 8 — Governance, Accountability, and Responsible Deployment
**Estimated time:** 50 minutes (includes an A5 work session)

**In this lesson:** Everything in this course comes down to a decision: should this system be used, and if so, how? This lesson sets out the range of possible answers, a structure for reaching one, the cost of saying no as well as the cost of saying yes, and the errors that most often lead decisions astray. It is also a working session for your A5 dossier.

## Three Real Decisions

In 2020, Amazon, IBM and Microsoft paused or ended sales of facial recognition to U.S. police. IBM left the general-purpose facial recognition business altogether. Microsoft said it would not sell to police until a federal law governed the technology. That was a **restricted deployment**: the technology continued to be sold for other uses.

In 2018, Amazon abandoned its experimental recruiting model after finding that it penalized women (Lesson 03-03). That was a decision **not to deploy**.

In 2020, the UK used an algorithm to award A-level grades when exams were cancelled. After public outcry over downgrades for students at schools that had historically done less well, the government went back to teachers' assessed grades within days. That was a deployment, quickly reversed.

Each was a judgment made under uncertainty, weighing evidence, values and alternatives.

## The Idea: The Answer Is Rarely Yes or No

A deployment decision has at least four possible answers.

| Answer | When it fits | Example |
|---|---|---|
| **Deploy** | The benefits clearly exceed the risks, the safeguards are adequate, accountable owners accept the remaining risk, and affected people have recourse | A spam filter; well-validated decision support with strong oversight |
| **Restricted deploy** | The benefits are real, but the risks are concentrated in particular uses, users or settings | Limit it to some uses; require human review; pilot it with monitoring; exclude vulnerable groups; set a time limit |
| **Do not deploy** | The risks cannot be adequately reduced, the evidence is insufficient, a less harmful alternative exists, or the use is prohibited or violates rights | An emotion-recognition hiring tool; an unvalidated risk score |
| **Defer** | Key information is missing and can be obtained | Wait for an independent audit, consultation or legal clarity |

## The Cost of Saying No

A decision not to deploy can feel like the safe choice. It is not free.

Every system in this course was proposed because it promised to help someone: patients whose cancers could be found earlier (Lesson 03-08), blind users who could read a sign (Lesson 02-08), workers who could learn their jobs faster (Lesson 05-03), communities that could get earlier warning of a flood (Lesson 06-05), maintainers who could find flaws before attackers do (Lesson 07-09). When a system that would have helped is not used, the people who would have been helped bear a cost, even though nobody sees it and no one is blamed for it.

So a good decision states the cost of not deploying as clearly as the risks of deploying. It compares the system with the realistic alternative, not with an ideal one. And it asks who loses under each choice. A well-reasoned decision not to deploy can still be right. It just has to account honestly for what it gives up.

## A Structure for the Decision

Your A5 dossier follows seven steps, set out on the Assessments page.

1. **Purpose and alternatives.** What problem does the system address? What is the alternative without AI, or with less automation? Is AI needed at all? (Lesson 01-08 called the assumption that it always is the solutionism trap.)
2. **Context.** The system, the data, the vendor, the people affected and a stakeholder map. State honestly what you do not know.
3. **Harms and benefits.** Ranked, each with how it would come about, who it affects, a label for the evidence and how uncertain it is.
4. **Evaluation.** How you tested it and what you found, including at least one failure and what changed because of it (A4).
5. **Safeguards.** Each tied to a specific risk, with an **owner**, its remaining limits, and monitoring triggers (Lesson 08-08).
6. **Rights and obligations.** How data is handled; a dated legal analysis (Lessons 08-01 and 08-02); and a path to human review and redress.
7. **Recommendation.** Deploy, restrict, do not deploy or defer, with your assumptions, the cost of not deploying, and the conditions under which you would reconsider.

## Using the Frameworks

Use the frameworks from Module 1 to test your recommendation, not to calculate it. Have you counted harms that are hard to measure, and who bears them (Lesson 01-03)? Does the system violate anyone's rights, even if the total benefit is positive (Lesson 01-04)? Have you given reasonable weight to the people with least power, and looked through all four lenses (Lesson 01-05)? Would you accept it from behind the veil of ignorance, and was the process fair (Lesson 01-06)? Does it honor the five principles (Lesson 01-07)?

If the frameworks point in different directions, say so, and explain how you resolved the conflict.

## Common Errors

Seven errors recur. Sunk cost: "We've already paid for it." Inevitability: "If we don't, a competitor will." Shifting the burden: "Users can opt out." Trusting safeguards that will not work in practice, such as human review nobody has time for (Lesson 03-09). Letting an impressive demonstration stand in for evidence. Ignoring the option of doing nothing, and its costs. And treating "legal" as "acceptable" (Lesson 01-09).

## Conditions for Reconsideration

A good recommendation says what would change it. For example: "Reconsider if an independent audit finds impact ratios below 0.8." "Reconsider deployment if the vendor provides validation results broken down by group for our population." "Reconsider after the EU's high-risk obligations take effect and technical standards are published." **Conditions for reconsideration** make a decision testable and revisable.

## A Note on Grading

A well-reasoned recommendation not to deploy can earn full marks. A technically impressive deployment supported by unsupported safety claims cannot. The course rewards judgment and evidence, not enthusiasm or technical sophistication.

## Where People Disagree

Is "restricted deployment" sometimes a way to avoid saying a hard no? How can you tell a real restriction from a cosmetic one?

Should communities have a veto over deployments that mainly affect them?

And Microsoft made its sale of facial recognition to police depend on a federal law. Is it legitimate for a company to make its ethics depend on what the law requires?

## Check Your Understanding

**1. What are the four possible answers to a deployment decision?**

:::answer Answer
Deploy, restricted deploy, do not deploy, and defer.
:::

**2. Why is not deploying never free?**

:::answer Answer
If the system would have helped people, those people bear the cost of the decision, even though the cost is unseen and no one is blamed for it.
:::

**3. What should each safeguard in the A5 dossier include?**

:::answer Answer
The specific risk it addresses, an owner, its remaining limits, and monitoring triggers.
:::

**4. What are conditions for reconsideration, and why include them?**

:::answer Answer
Statements of what evidence would change the decision. They make it testable and revisable.
:::

## Your Turn: A5 Work Session (30 minutes)

Draft your recommendation in one paragraph, including the cost of not deploying, and three conditions for reconsideration. Check your dossier against the seven steps and mark any that are thin. List the two weakest claims in your evidence; your peer reviewer will look for them in A6. And outline your ten-minute defense: purpose, key evidence, top risks, safeguards, recommendation, and what would change your mind.

## Key Terms

- **Restricted deployment:** Use of a system limited by conditions, such as particular uses, review requirements or time limits.
- **Residual risk:** The risk that remains after safeguards.
- **Cost of not deploying:** The harm borne by people a system would have helped when it is not used.
- **Conditions for reconsideration:** Evidence that would change a decision.

## Sources

- **Core:** Barocas, S. et al. "When Not to Design, Build, or Deploy," *FAT\* 2020* tutorial; Baumer, E. & Silberman, M.S. "When the Implication Is Not to Design (Technology)," *CHI 2011*. — [Barocas et al. session — Free full text](https://when-not-to-build.github.io/); [Baumer and Silberman paper — Free manuscript](https://ics.uci.edu/~djp3/classes/2011_01_INF134/papers/impl9-rev.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r389). <!-- reading-access -->
- Microsoft, "Facial recognition: It's time for action" (Brad Smith, 2018) and the June 2020 policing statement; IBM CEO letter to Congress (June 8, 2020). — [Microsoft 2018 statement — Free full text](https://blogs.microsoft.com/on-the-issues/2018/12/06/facial-recognition-its-time-for-action/); [IBM letter in government filing — Free archived full text](https://downloads.regulations.gov/BIS-2020-0021-0005/attachment_1.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r386). <!-- reading-access -->
- Ofqual, *Awarding GCSE, AS, A level, advanced extension awards and extended project qualifications in summer 2020: interim report* (Aug 2020). — [Free full text](https://www.gov.uk/government/publications/awarding-gcse-as-a-levels-in-summer-2020-interim-report); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r387). <!-- reading-access -->
- Raji, I.D. et al. "The Fallacy of AI Functionality," *FAccT 2022*. — [Free manuscript](https://arxiv.org/abs/2206.09511); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r388). <!-- reading-access -->
