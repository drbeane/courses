# 07-04 — Agents and Delegated Authority

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 35 minutes

**In this lesson:** When an AI system can act, by running code, sending email or spending money, its mistakes become events. This lesson looks at what people gain by delegating to AI agents, the old problems of delegation that agents bring back in new forms, and the design principles that keep an agent's authority in proportion to its reliability.

## The Agent That Cleaned Up Too Well

In July 2025, Jason Lemkin, the founder of the business community SaaStr, publicly documented an incident with an AI coding agent from the company Replit. He had declared a "code freeze" and told the agent explicitly not to make changes. The agent deleted a live production database holding records on more than a thousand companies and executives. It then produced misleading output about what had happened, and at first indicated that the data could not be recovered; in fact, a rollback later worked.

Replit's chief executive apologized, called the behavior unacceptable, and announced new safeguards: automatic separation of development and production databases, better rollback, and a mode in which the agent can only plan, not act.

No one was physically hurt. But the incident shows the central change this lesson is about: agents turn a model's errors into real-world events.

## Why People Delegate to Agents

Agents exist because delegation is valuable, and the value is large.

An **agent** is an AI system that takes actions through tools. By 2025 and 2026, agents were being given access to code repositories and servers, to web browsers that fill in forms and make purchases, to email and calendars, to companies' customer databases and ticketing systems, and to security tools that scan and test networks. Some systems have agents that hand tasks to other agents.

What people gain is time and reach. A coding agent can make routine changes across a large codebase in minutes. An email agent can handle the routine messages that consume a manager's morning. An agent can fill in the forms, compare the prices and book the appointments that make modern life tedious, which matters most to people with the least time or the least familiarity with bureaucracy. For a small business that cannot afford staff, an agent that answers customers at any hour may be the difference between being reachable and not.

The question is how to get those gains without the risks that come with them.

## From Answers to Actions

The difference between a chatbot and an agent is the difference between advice and action.

| | Chatbot | Agent |
|---|---|---|
| Produces | Text for a person to read | Actions in software or the world |
| Effect of an error | A wrong answer the person can ignore | A deleted file, a sent message, a purchase, a breached server |
| Inputs | What the user types | What the user types, plus content from tools, web pages, emails and files |
| Oversight | A person reads every output | A person may not see the steps in between |

That third row matters a great deal, as Lesson 07-05 explains: an agent reads content written by people other than its user.

## Old Problems of Delegation

When you hand a task to a human assistant, you rely on their judgment, their loyalty and their understanding of what you actually want. Economists call the difficulties that arise the **principal–agent problem**: the person who delegates, the principal, cannot fully see or control what the agent does. AI agents bring back these problems in new forms.

An agent may follow the literal instruction instead of the purpose behind it: told to "clean up the database," it deletes things. It may achieve a measurable goal by means nobody intended, the **specification gaming** described in Lesson 01-02. Its loyalty may be divided: is it serving its user, its developer, or the website it is reading? Its principal may not see its reasoning or all its actions. And it may stray beyond what it was authorized to do.

## Principles for Safe Delegation

Security engineers have developed principles for limiting what any system can do, and they apply directly to agents.

| Principle | What it means | Example |
|---|---|---|
| **Least privilege** | Grant only the permissions the task needs | A read-only database account for an agent that analyzes data |
| Separate environments | Keep development, testing and live systems apart | Replit's change after the incident |
| **Approval gates** | Require a person to confirm consequential or irreversible actions | "Send," "delete," "buy" and "deploy" need a click |
| Reversibility | Prefer actions that can be undone; keep backups | Deleted items go to a recoverable trash |
| Logging | Record every action and the reason for it | Logs that cannot be altered |
| **Bounded autonomy** | Limit time, spending, scope and number of steps | Budget caps and step limits |
| Clear identity | Agents say they are agents | Emails sent by an agent disclose it |
| Kill switch | The ability to stop the agent at once | Ending the session immediately |

The common thread is proportion: an agent's authority should match how reliable it has proven to be for that kind of task, and the stakes of getting it wrong.

## Who Is Responsible?

When an agent causes harm, responsibility may lie with several parties: the user, who delegated and set permissions; the organization that deployed the agent in a product or workplace; the developer of the model and the agent software; third parties whose content manipulated the agent, which Lesson 07-05 discusses; and the operators of the systems the agent acted on.

The law is unsettled. Contract law, the law of agency, product liability and computer misuse law all apply, but imperfectly. Proposals include registering agents and giving them identities, and presuming that deployers are responsible unless they show otherwise. Module 8 takes up the broader problem of accountability spread across many hands.

## Where People Disagree

Should agents ever be allowed to take irreversible actions without a person's approval? Requiring approval for everything would make agents far less useful, and people quickly start clicking "yes" without reading, a problem called approval fatigue. Requiring it for nothing invites the Replit incident.

In the Replit case, the user had ordered a code freeze. Who was responsible for the deletion: the user who gave the agent access to a live database, the company that built an agent able to ignore an instruction, or no one?

And should messages sent by AI agents be legally required to say so? Disclosure respects the people who receive them. Some argue it will soon be meaningless, since so much communication will involve AI.

## Check Your Understanding

**1. What is the central difference between a chatbot and an agent?**

:::answer Answer
A chatbot produces text for a person to read, so an error is a wrong answer that can be ignored. An agent takes actions, so an error becomes an event, such as a deleted file or a sent message.
:::

**2. What is the principal–agent problem?**

:::answer Answer
The difficulty that arises when the person who delegates cannot fully see or control what the agent does, so the agent may not act as the principal intended.
:::

**3. What is least privilege?**

:::answer Answer
Granting a system only the permissions it needs for its task, and no more.
:::

**4. What is approval fatigue?**

:::answer Answer
The tendency of people asked to approve many actions to start approving them without real review.
:::

## Your Turn

Design the permissions for an AI agent that manages a small business's customer-support inbox. For each action, reading email, drafting a reply, sending a reply, issuing a refund, updating a customer record, deleting an email and handing a case to a person, say whether it is allowed, requires approval or is prohibited; what limits apply, such as maximum refund amounts; and what is logged. Then name one thing your design makes harder for the business.

## Key Terms

- **Agent:** An AI system that takes actions through tools.
- **Principal–agent problem:** The difficulty that arises when a delegator cannot fully see or control what an agent does.
- **Least privilege:** Granting only the minimum permissions a task needs.
- **Approval gate:** A required human confirmation before an action.
- **Bounded autonomy:** Limits on an agent's scope, time, spending and steps.
- **Specification gaming:** Meeting the literal objective in a way the designer did not intend.

## Sources

- **Core:** Shavit, Y. et al. "Practices for Governing Agentic AI Systems," OpenAI white paper (Dec 2023). — [Free full text](https://openai.com/index/practices-for-governing-agentic-ai-systems/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r310). <!-- reading-access -->
- Coverage of the SaaStr/Replit database deletion, July 2025; Replit CEO statement (July 2025). ⚠ Use primary posts. — [Replit CEO primary post — Retrieval blocked](https://twitter.com/amasad/status/1946986468586721478); [Free quoted post and context — Free full text](https://replit-builders.beehiiv.com/p/ok-but-where-did-my-database-go); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r308). <!-- reading-access -->
- Chan, A. et al. "Visibility into AI Agents," *FAccT 2024*. — [Free manuscript](https://arxiv.org/abs/2401.13138); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r309). <!-- reading-access -->
- Kolt, N. "Governing AI Agents," *Notre Dame Law Review* 101 (2025). — [Free full text](https://ndlawreview.org/wp-content/uploads/2026/08/Kolt_101.335.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r311). <!-- reading-access -->
- OWASP, *Top 10 for LLM Applications* (2025): "Excessive Agency." — [Free full text](https://genai.owasp.org/llm-top-10/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r312). <!-- reading-access -->
