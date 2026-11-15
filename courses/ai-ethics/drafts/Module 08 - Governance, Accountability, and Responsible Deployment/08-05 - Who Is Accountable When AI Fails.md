# 08-05 — Who Is Accountable When AI Fails?

**Module:** 8 — Governance, Accountability, and Responsible Deployment
**Estimated time:** 40 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain the "problem of many hands" and responsibility gaps in AI systems.
2. Distinguish moral responsibility, legal liability and accountability.
3. Apply a structured responsibility analysis to course cases.

## Opening case: five failures, many hands

Recall five cases from this course:

| Case | Who was harmed | Parties involved |
|---|---|---|
| Lipps wrongful arrest (02-04) | Angela Lipps | FR vendor, analyst, state intel center, detective, department, prosecutor, judge, jail |
| *Mobley v. Workday* (03-03) | Rejected applicants (alleged) | Workday, employers, model developers, HR staff |
| Grok NCII (04-04) | Women and girls depicted | Users, xAI, X, app stores, regulators |
| Hugging Face breach (07-07) | Hugging Face and possibly its partners | OpenAI evaluators and leadership, the proxy vendor, "the model" |
| Robodebt (03-09) | About 470,000 welfare recipients | Ministers, agency officials, system designers, lawyers who advised |

In each, harm emerged from **many people's decisions**, none of whom alone caused it, and some of whom were following rules or instructions. Who is accountable?

## Core ideas

### The problem of many hands

Dennis Thompson (1980) described the "problem of many hands": when many people contribute to an outcome, it becomes hard to hold anyone responsible. Helen Nissenbaum (1996) applied it to computing, identifying four barriers to accountability:

1. **Many hands:** Diffuse contributions.
2. **Bugs:** "Software always has bugs" becomes an excuse.
3. **The computer as scapegoat:** "The system did it."
4. **Ownership without liability:** Vendors disclaim responsibility in licenses.

AI adds:

5. **Opacity:** No one can fully explain the model's behavior.
6. **Autonomy:** Agents take actions no human specifically chose (07-05, 07-07).
7. **Learning:** Behavior changes after deployment.

Andreas Matthias (2004) called this the **"responsibility gap"**: if no human could foresee or control the machine's action, traditional responsibility conditions (knowledge, control) seem unmet.

### Responsibility, liability, accountability

| Concept | Question | Example |
|---|---|---|
| **Moral responsibility** | Who deserves blame or praise? | Was the detective blameworthy? |
| **Legal liability** | Who must pay or face sanctions? | Is the city liable for damages? |
| **Accountability** | Who must **explain and answer** for the outcome, and to whom? | Must the police chief explain to the city council? |
| **Remedial responsibility** | Who must **fix** it, regardless of fault? | Who should compensate Lipps and change policy? |

These can come apart. A company may be legally liable without anyone being morally blameworthy, or the reverse.

### Closing responsibility gaps

Critics argue the gap is often **manufactured**. Someone chose to deploy an unpredictable system, and that choice carries responsibility. Approaches:

| Approach | Mechanism | Example |
|---|---|---|
| **Role-based duties** | Assign obligations by role (developer, deployer, user) | EU AI Act provider and deployer duties (08-01) |
| **Agency theories** | Treat vendors as agents of those who delegate to them | *Mobley v. Workday* (03-03) |
| **Deployer liability** | The organization using AI answers for its outputs | *Moffatt v. Air Canada*: the airline is responsible for its chatbot (04-01) |
| **Product liability** | Defective products create liability regardless of negligence | AI-as-product claims (e.g., Character.AI litigation, where a court in 2025 declined to dismiss product-liability claims ⚠) |
| **Strict liability for high-risk activities** | Liability without fault for inherently dangerous uses | Proposed for frontier AI; the EU's revised Product Liability Directive (2024) covers software and AI |
| **Professional responsibility** | Professionals remain accountable for tools they use | ABA Op. 512; medical duty (05-08) |
| **Institutional accountability** | Leaders answer for systems and culture | Robodebt Royal Commission referrals (2023) |
| **Insurance and compensation funds** | Ensure victims are compensated | Proposed for AI harms |
| **Whistleblower protections** | Enable insiders to raise concerns | California SB 53 (2025) |

### A structured responsibility analysis

For any AI harm, ask of each party:

1. **Causal contribution:** What did they do or fail to do?
2. **Knowledge:** What did they know, or should they have known?
3. **Control:** What could they have done differently?
4. **Role obligations:** What duties did their role carry?
5. **Benefit:** Did they profit from the system?
6. **Capacity to remedy:** Can they compensate, fix or prevent recurrence?

Responsibility is **not a fixed quantity to divide**. Many parties can each be fully responsible for their own failures.

## Applying the frameworks

- **Virtue:** Owning one's role rather than hiding behind the system.
- **Justice (corrective):** Victims deserve remedy, whoever is "to blame."
- **Structural injustice (Young):** Responsibility for structures is shared and forward-looking.

## Discussion questions

1. Can an AI system itself be morally responsible? Does it matter for accountability?
2. In the Hugging Face case, should OpenAI be liable to Hugging Face even if no one at OpenAI was negligent?
3. Should AI developers be strictly liable for harms from their general-purpose models? How would that change incentives?
4. Which of Nissenbaum's barriers appears most often in the course's cases?

## Activity: responsibility matrix (20 minutes)

Choose one case from the table above. For each party, complete the six-question analysis. Then answer:

1. Who should compensate the victim?
2. Who should change practices, and how?
3. Which party has been held least accountable relative to its contribution?

## Key terms

- **Problem of many hands:** Difficulty assigning responsibility when many contribute.
- **Responsibility gap:** Apparent absence of a responsible party for autonomous system actions.
- **Strict liability:** Liability without proof of fault.
- **Remedial responsibility:** Duty to remedy, regardless of blame.

## Connections

- Stakeholder chains → 01-08 · Cases in Modules 2–7 · Procurement contracts → 08-07 · Redress → 08-08
- **A5 dossier:** "safeguards tied to risks, with owners."

## Sources and further reading

- Nissenbaum, H. "Accountability in a Computerized Society," *Science and Engineering Ethics* 2(1), 1996. — [Free manuscript](https://nissenbaum.tech.cornell.edu/papers/accountability.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r364). <!-- reading-access -->
- Thompson, D. "Moral Responsibility of Public Officials: The Problem of Many Hands," *American Political Science Review* 74(4), 1980. — [Abstract / record](https://dft.scholars.harvard.edu/publications/moral-responsibility-public-officials-problem-many-hands); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r365). <!-- reading-access -->
- Matthias, A. "The responsibility gap," *Ethics and Information Technology* 6 (2004). — [Free full text](https://eclass.uoa.gr/modules/document/file.php/PHILOSOPHY875/%CE%9C%CE%A0%CE%9F%CE%A5%CE%A4%CE%9B%CE%91%CE%A3%20%CE%9F%CE%A0%CE%9B%CE%91%20%CE%9C%CE%91%CE%96%CE%99%CE%9A%CE%97%CE%A3%20%CE%9A%CE%91%CE%A4%CE%91%CE%A3%CE%A4%CE%A1%CE%9F%CE%A6%CE%97%CE%A3%20DRONES/The%20responsibility%20gap%20Ascribing%20responsibility%20for%20the%20actions%20of%20learning%20matthias2004.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r366). <!-- reading-access -->
- Santoni de Sio, F. & Mecacci, G. "Four Responsibility Gaps with Artificial Intelligence," *Philosophy & Technology* 34 (2021). — [Free manuscript](https://pure.tudelft.nl/ws/portalfiles/portal/105353731/SantoniDeSio_Mecacci2021_Article_FourResponsibilityGapsWithArti.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r367). <!-- reading-access -->
- Directive (EU) 2024/2853 on liability for defective products. — [Free official text](https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r368). <!-- reading-access -->
- *Garcia v. Character Technologies*, M.D. Fla., order on motion to dismiss (May 2025). ⚠ — [Free full text](https://storage.courtlistener.com/recap/gov.uscourts.flmd.433581/gov.uscourts.flmd.433581.115.0.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r369). <!-- reading-access -->
