# 01-08 — Stakeholders and Sociotechnical Systems

**Module:** 1 — Ethical Foundations and AI in Society
**Estimated time:** 35 minutes

**In this lesson:** What an AI system does to people depends on far more than the model. This lesson shows how to see the whole system around it and how to map everyone it affects, including the people who are easiest to leave out.

## What Failed in Fargo?

Who was responsible for the arrest of Angela Lipps? Go through the account in her lawsuit, remembering that these are allegations, and count the hands it passed through.

A vendor's facial recognition software produced a candidate match. An analyst with the West Fargo police and a state intelligence center ran the search and passed the lead along, although West Fargo's own policy forbids an arrest on a match alone. The photo that was searched reportedly came from a fake ID, not from footage of the crime. A Fargo detective allegedly set aside the evidence that pointed away from her. His department had no policy, training or supervision for facial recognition. Prosecutors and a judge approved the charges and her extradition. The jail allegedly withheld her medication. And the city had adopted the tool without any rules for its use.

It is tempting to call this an AI failure. But the software did roughly what it was built to do. The harm came from a chain of technical, human and institutional decisions, and it could have been stopped at almost any link. To analyze a case like this you need a way of seeing the whole chain.

## The System Is More Than the Model

Researchers use the term **sociotechnical system** for the combination that actually produces outcomes. It has five parts. There is the technology: the model, its data, the hardware and the interface. There are the people: developers, operators, decision-makers and those the decisions are about. There are the organizations, with their incentives, policies, training and culture. There are the rules: laws, contracts, standards and unwritten norms. And there is the environment: the physical setting and the other systems this one connects to.

The Fargo case involved all five. So does every success. A medical imaging tool that catches cancers earlier does so only where radiologists are trained to use it, the hospital acts on the result, and patients can get the follow-up care. The same model in a clinic without those things helps no one. That is the practical reason to think in systems. It tells you where a failure can be prevented, and what a benefit depends on.

## Five Ways to Miss the Context

Andrew Selbst and colleagues described five mistakes that technical teams make when they treat the social setting as someone else's problem. They called them traps.

The **framing trap** is analyzing only the algorithm and not the system it sits in. A team tests the accuracy of a face-matching model and never asks what a detective will do with a match.

The **portability trap** is assuming that something built for one setting will work in another. A risk score developed with data from one city is sold to a different city with a different population and different policing.

The **formalism trap** is assuming that a mathematical definition captures a social idea. A team picks one statistical measure of fairness, meets it, and declares the system fair.

The **ripple effect trap** is ignoring how the technology changes the behavior of the people and institutions around it. Once a match is available, detectives may do less of the investigating they used to do.

The **solutionism trap** is assuming that technology is the answer. **Solutionism** is the belief that social problems have technical fixes. Sometimes the best option is a different policy, more staff, or not building the thing at all.

These traps do not show that technology cannot help. A team that avoids them builds something more likely to work where it is actually used.

## Everyone With a Stake

A **stakeholder** is anyone who affects a system or is affected by it. The list is always longer than it first appears, and it helps to work through the kinds.

| Kind of stakeholder | Examples |
|---|---|
| Direct users | A police analyst; a recruiter; someone using a chatbot |
| Decision subjects | A suspect; a job applicant; a borrower |
| People affected indirectly | Bystanders on camera; the family of someone arrested; people depicted in fake images |
| Builders | Model developers; data labelers; the vendor |
| Deployers and owners | A city government; an employer; a bank |
| Overseers | Regulators; courts; auditors; journalists |
| Society and the future | Public trust; the quality of public information; later generations |
| Non-humans | Ecosystems affected by data centers |

The most important distinction in the table is between the user and the **decision subject**, the person the system makes or informs a decision about. They are rarely the same person. The recruiter chose the hiring tool, was trained on it and can complain to the vendor. The applicant did none of those things and may not know the tool exists. Much of the ethics of predictive systems comes down to that gap. Remember, too, that many stakeholders gain from a system: the applicant who gets a faster answer, the victim whose case is solved. A complete map shows who benefits as well as who is at risk.

## Impact, Power and Voice

Listing stakeholders is the first step. The second is to ask three things about each. How much does the system affect them? That is impact. How much can they influence it, through designing it, buying it, refusing it, appealing a decision or going to court? That is power. And were they consulted? That is voice.

Set impact against power and four groups appear. Some people have high impact and high power, such as the agency that buys the system. Some have low impact and high power, such as a vendor's executives. Some have little of either. The fourth group is the one that matters most ethically: **high impact and low power**. These are the applicants who cannot see why they were rejected, the residents next to a data center, the people depicted in non-consensual images, the workers managed by an algorithm. They bear the consequences and have the least ability to change them. Lesson 01-06 asked who decides, and a stakeholder map is how you find out.

## The People Who Get Left Out

Some stakeholders are overlooked so regularly that it is worth memorizing the list.

There are the people whose data trained the model, who usually never knew. There are the data workers who labeled that data and screened out the worst of it. There are the people excluded from the system altogether, because they lack a device, a connection or a document that it requires. There are bystanders picked up by cameras and microphones. There are future users, who will live with decisions being locked in now. And when a model is released openly for anyone to build on, there are the downstream organizations that inherit its risks along with its abilities.

A map that names only the buyer, the user and the decision subject has left out most of the people involved.

## Asking People, and Meaning It

The usual response to a high-impact, low-power group is to consult them. It matters how. Sherry Arnstein's "ladder of citizen participation," published in 1969, ranks the forms that participation takes, from manipulation and tokenism at the bottom to partnership and real control at the top. A public comment period held after the contract is signed sits near the bottom.

Participation that deserves the name has four features. It happens early, before the decision to build or buy. The people consulted have some power to change the project or to stop it. They are paid for their time and knowledge. And they are told afterward what was done with what they said.

## Where It Breaks

Stakeholder analysis has costs and limits, and you should weigh them.

It does not tell you what to do when stakeholders disagree, which they will. A map shows that the residents and the shareholders want opposite things. It does not say who should prevail. For that you need the frameworks from the earlier lessons.

Real participation is slow and expensive, and it can give a determined minority a veto over something that would benefit most people. Critics also warn that consultation can become a ritual that lends legitimacy to a decision already made, while putting extra work on the communities being consulted.

And spreading attention across the whole chain can blur responsibility. If everyone in Fargo contributed, it is easy to conclude that no one is to blame. Seeing the system should make it clearer who could have prevented the harm. It does not excuse any of them. Module 8 returns to this problem of many hands.

## Back to Fargo

Put the Fargo case on a map. Lipps is the decision subject: highest impact, almost no power, never consulted. The detective and his department have high power over her and little at stake themselves. The vendor has power over the design and none over the use. The public, who never voted on whether their police should have this tool, have low voice. Many U.S. cities adopt facial recognition with no public process at all.

Now ask the justice questions from Lesson 01-06. On procedure, did anyone outside the department have a say? On correction, which of these stakeholders owes her a remedy? And ask the question from Lesson 01-05: which of them failed to give reasonable weight to her interests?

One useful exercise is to find the single link that, if changed, would most likely have prevented the arrest. Then ask whether that link is also the one most to blame. The two are not always the same, and telling them apart is much of what this course teaches.

## Check Your Understanding

**1. What are the five parts of a sociotechnical system?**

:::answer Answer
Technology, people, organizations, rules and environment.
:::

**2. What is the difference between a direct user and a decision subject?**

:::answer Answer
The direct user operates the system. The decision subject is the person the system makes or informs a decision about, who usually did not choose it and may not know it is being used.
:::

**3. Which group on a stakeholder map deserves the most ethical attention, and why?**

:::answer Answer
High impact, low power. They bear the consequences of the system and have the least ability to influence or challenge it.
:::

**4. What is the solutionism trap?**

:::answer Answer
Assuming that technology is the answer to a problem, when a non-technical response, or not building the system, might be better.
:::

## Your Turn

Choose one of the three A2 scenarios: a city considering facial recognition for its police, an employer considering an AI résumé screener, or a credit union considering a machine-learning model for loan decisions. Build a table with these columns: stakeholder, impact (high, medium or low), power (high, medium or low), whether they were consulted, and their main interest in the system, whether that is a benefit or a risk.

Include at least eight stakeholders, at least two of them from the list of people who usually get left out. This table becomes the first section of A2.

## Key Terms

- **Sociotechnical system:** Technology together with the people, organizations, rules and environment that jointly produce its outcomes.
- **Stakeholder:** Anyone who affects or is affected by a system.
- **Decision subject:** The person about whom a system makes or informs a decision.
- **Solutionism:** The belief that technology is the answer to social problems.
- **Ladder of participation:** Arnstein's scale of public involvement, from manipulation to citizen control.

## Sources

- **Core:** Selbst, A. et al. "Fairness and Abstraction in Sociotechnical Systems," *FAT\* 2019*. — [Free manuscript](https://andrewselbst.com/wp-content/uploads/2019/10/selbst-et-al-fairness-and-abstraction-in-sociotechnical-systems.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r031). <!-- reading-access -->
- Arnstein, S. "A Ladder of Citizen Participation," *Journal of the American Institute of Planners* 35(4), 1969. — [Free full text](https://geog.sdsu.edu/People/Pages/jankowski/public_html/web780/Arnstein_ladder_1969.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r032). <!-- reading-access -->
- Sloane, M. et al. "Participation is not a Design Fix for Machine Learning," *EAAMO 2022*. — [Free manuscript](https://arxiv.org/abs/2007.02423); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r033). <!-- reading-access -->
- Live 5 News, *Lipps v. City of Fargo*, Sep 17, 2026 (allegations). — [Free full text](https://www.live5news.com/2026/09/17/woman-sues-city-detective-10-million-over-wrongful-arrest-tied-facial-recognition-error/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r034). <!-- reading-access -->
