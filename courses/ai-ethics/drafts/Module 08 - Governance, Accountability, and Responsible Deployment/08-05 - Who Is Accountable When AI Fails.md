# 08-05 — Who Is Accountable When AI Fails?

**Module:** 8 — Governance, Accountability, and Responsible Deployment
**Estimated time:** 40 minutes

**In this lesson:** When an AI system causes harm, responsibility is usually spread across many people, none of whom caused the harm alone. This lesson explains why that makes accountability so hard, separates the different things "responsible" can mean, and sets out the ways to close the gaps.

## Five Failures, Many Hands

Look back at five cases from this course.

| Case | Who was harmed | Who was involved |
|---|---|---|
| The Lipps wrongful arrest (Lesson 02-04) | Angela Lipps | The software vendor, an analyst, a state intelligence center, a detective, a police department, a prosecutor, a judge, a jail |
| *Mobley v. Workday* (Lesson 03-03) | Rejected applicants, allegedly | The software company, employers, model developers, HR staff |
| Grok (Lesson 04-04) | Women and girls depicted | Users, xAI, X, app stores, regulators |
| The Hugging Face breach (Lesson 07-06) | Hugging Face and possibly its partners | OpenAI's test team and leadership, the vendor of a flawed component, "the model" |
| Robodebt (Lesson 03-09) | About 470,000 welfare recipients | Ministers, agency officials, system designers, the lawyers who advised them |

In each, the harm came from many people's decisions. None of them alone caused it, and some were following rules or instructions. So who is accountable?

## The Idea: The Problem of Many Hands

In 1980 the political theorist Dennis Thompson described what he called the **problem of many hands**: when many people contribute to an outcome, it becomes hard to hold anyone responsible for it. In 1996 the philosopher Helen Nissenbaum applied the idea to computing and identified four barriers to accountability. Many hands spread contributions thin. Software always has bugs, which becomes an excuse. The computer becomes a scapegoat: "the system did it." And vendors own their products while disclaiming responsibility for them in their licenses.

AI adds three more barriers. Its behavior can be opaque even to its makers. Agents take actions no person specifically chose, as Lessons 07-04 and 07-06 showed. And systems can change after they are deployed.

The philosopher Andreas Matthias called the result a **responsibility gap**. Traditionally, we hold people responsible when they knew what would happen and could control it. If nobody could foresee or control what a learning system did, those conditions seem to fail, and nobody seems responsible.

## Four Meanings of "Responsible"

Part of the confusion comes from using one word for several ideas.

| Concept | The question | Example |
|---|---|---|
| **Moral responsibility** | Who deserves blame or praise? | Was the detective blameworthy? |
| **Legal liability** | Who must pay or face sanctions? | Is the city liable for damages? |
| **Accountability** | Who must explain and answer for the outcome, and to whom? | Must the police chief explain to the city council? |
| **Remedial responsibility** | Who must put things right, whatever their fault? | Who should compensate Lipps and change the policy? |

These can come apart. A company can be legally liable when no one in it is morally to blame, and a person can be morally to blame without any legal consequence.

## Why the Gap Is Often Manufactured

Many critics argue that the responsibility gap is less real than it looks. Someone chose to deploy a system whose behavior they could not fully predict, and that choice carries responsibility. The gap appears only if we look for responsibility at the moment of harm, instead of at the decisions that made the harm possible.

Several approaches close the gap.

| Approach | How it works | Example |
|---|---|---|
| Duties by role | Assign obligations to developers, deployers and users | The EU AI Act's duties for providers and deployers (Lesson 08-01) |
| Agency | Treat vendors as agents of the organizations that use them | *Mobley v. Workday* |
| Deployer liability | The organization that uses AI answers for what it does | *Moffatt v. Air Canada* (Lesson 04-01) |
| Product liability | Defective products create liability without proof of negligence | Lawsuits treating chatbots as products; the EU's revised product liability law of 2024 covers software and AI |
| **Strict liability** | Liability without fault for inherently dangerous activities | Proposed for the most advanced AI |
| Professional responsibility | Professionals answer for the tools they use | Lesson 05-08 |
| Institutional accountability | Leaders answer for systems and culture | The Robodebt Royal Commission's referrals |
| Insurance and compensation funds | Make sure victims are compensated | Proposed for AI harms |
| Whistleblower protection | Let insiders raise concerns safely | California's 2025 frontier AI law |

## A Way to Analyze Any Case

For any AI harm, six questions help assess each party. What did they do or fail to do? What did they know, or what should they have known? What could they have done differently? What duties came with their role? Did they benefit from the system? And can they compensate, fix the problem or prevent it happening again?

One point matters most. Responsibility is not a fixed amount to be divided up. Many parties can each be fully responsible for their own failures. The detective's failure does not reduce the department's, and the department's does not reduce the vendor's.

## Where It Breaks

The many-hands framing has its own risks. Spreading responsibility widely can make it feel weightless, so that everyone shares a little and no one acts. Stretching legal liability too far can deter useful innovation, or simply push it to places with weaker rules. And treating the model itself as the responsible party, which some have proposed, can let the humans who built and deployed it off the hook.

## Where People Disagree

Can an AI system itself be morally responsible? Most philosophers say no, since it lacks the understanding and intentions that responsibility requires. Some say the question matters less than making sure some person or organization answers.

In the Hugging Face case, should OpenAI be liable to Hugging Face even if no one at OpenAI was negligent?

And should developers of general-purpose AI be strictly liable for harms their models cause? It would give them strong reasons to be careful. It would also make them answerable for uses they could not foresee or control.

## Check Your Understanding

**1. What is the problem of many hands?**

:::answer Answer
When many people contribute to an outcome, it becomes hard to hold any one of them responsible.
:::

**2. What is the difference between legal liability and remedial responsibility?**

:::answer Answer
Legal liability is who must pay or face sanctions under the law. Remedial responsibility is who must put things right, whatever their fault.
:::

**3. Why do critics say the responsibility gap is often manufactured?**

:::answer Answer
Someone chose to deploy a system whose behavior they could not fully predict, and that choice carries responsibility. The gap appears only if we look solely at the moment of harm.
:::

**4. Why is responsibility not a fixed amount to be divided?**

:::answer Answer
Many parties can each be fully responsible for their own failures; one party's failure does not reduce another's.
:::

## Your Turn

Choose one case from the table. For each party, answer the six questions. Then answer three more: Who should compensate the people harmed? Who should change their practices, and how? And which party has been held least accountable compared with what it contributed?

## Key Terms

- **Problem of many hands:** The difficulty of assigning responsibility when many people contribute to an outcome.
- **Responsibility gap:** The apparent absence of anyone responsible for an autonomous system's actions.
- **Accountability:** The obligation to explain and answer for an outcome.
- **Strict liability:** Liability without proof of fault.
- **Remedial responsibility:** The duty to put things right, whatever one's fault.

## Sources

- **Core:** Nissenbaum, H. "Accountability in a Computerized Society," *Science and Engineering Ethics* 2(1), 1996. — [Free manuscript](https://nissenbaum.tech.cornell.edu/papers/accountability.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r364). <!-- reading-access -->
- Thompson, D. "Moral Responsibility of Public Officials: The Problem of Many Hands," *American Political Science Review* 74(4), 1980. — [Abstract / record](https://dft.scholars.harvard.edu/publications/moral-responsibility-public-officials-problem-many-hands); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r365). <!-- reading-access -->
- Matthias, A. "The responsibility gap," *Ethics and Information Technology* 6 (2004). — [Free full text](https://eclass.uoa.gr/modules/document/file.php/PHILOSOPHY875/%CE%9C%CE%A0%CE%9F%CE%A5%CE%A4%CE%9B%CE%91%CE%A3%20%CE%9F%CE%A0%CE%9B%CE%91%20%CE%9C%CE%91%CE%96%CE%99%CE%9A%CE%97%CE%A3%20%CE%9A%CE%91%CE%A4%CE%91%CE%A3%CE%A4%CE%A1%CE%9F%CE%A6%CE%97%CE%A3%20DRONES/The%20responsibility%20gap%20Ascribing%20responsibility%20for%20the%20actions%20of%20learning%20matthias2004.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r366). <!-- reading-access -->
- Santoni de Sio, F. & Mecacci, G. "Four Responsibility Gaps with Artificial Intelligence," *Philosophy & Technology* 34 (2021). — [Free manuscript](https://pure.tudelft.nl/ws/portalfiles/portal/105353731/SantoniDeSio_Mecacci2021_Article_FourResponsibilityGapsWithArti.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r367). <!-- reading-access -->
- Directive (EU) 2024/2853 on liability for defective products. — [Free official text](https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r368). <!-- reading-access -->
- *Garcia v. Character Technologies*, M.D. Fla., order on motion to dismiss (May 2025). ⚠ — [Free full text](https://storage.courtlistener.com/recap/gov.uscourts.flmd.433581/gov.uscourts.flmd.433581.115.0.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r369). <!-- reading-access -->
