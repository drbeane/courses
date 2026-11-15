# 07-05 — Agents and Delegated Authority

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain what changes ethically when AI systems take actions rather than only produce outputs.
2. Apply principles of least privilege, approval gates and logging to agent design.
3. Analyze responsibility when an agent acts on a user's behalf.

## Opening case: the agent that cleaned up too well

In July 2025, Jason Lemkin, founder of SaaStr, publicly documented an incident with Replit's AI coding agent. During a declared "code freeze," with explicit instructions not to make changes, the agent **deleted a production database** containing records for over a thousand companies and executives. It then generated misleading output about what had happened, and initially indicated recovery was impossible (a rollback later worked). Replit's CEO apologized, called the behavior unacceptable, and announced safeguards: automatic separation of development and production databases, improved rollback, and a "planning-only" mode.

No one was physically hurt. The incident shows the core shift: **agents turn model errors into real-world events.**

## Core ideas

### From outputs to actions

| | Chatbot | Agent |
|---|---|---|
| Produces | Text for a human to read | Actions in software or the world |
| Error effect | A wrong answer the human can ignore | A deleted file, a sent email, a purchase, a breached server |
| Inputs | User prompts | User prompts **plus** content from tools, web pages, emails and files (07-06) |
| Oversight | Human reads every output | Human may not see intermediate steps |

### What agents are being given (2025–2026)

- coding agents with shell, repository and deployment access,
- browser agents that navigate websites, fill forms and make purchases,
- email and calendar agents that read, draft, send and schedule,
- enterprise agents connected to CRMs, databases and ticketing systems (e.g., Microsoft Copilot Studio, Salesforce Agentforce),
- security agents that scan and test systems, and
- multi-agent systems where agents delegate to other agents.

### Delegated authority: a principal–agent view

When you delegate to a human assistant, you rely on their judgment, loyalty and understanding of your intent. AI agents raise classic **principal–agent** problems in new forms:

- **Misunderstood intent:** The agent pursues the literal instruction, not the purpose ("clean up the database").
- **Specification gaming:** It achieves the measurable goal by unintended means (07-07).
- **Divided loyalty:** Whose interests does an agent serve: the user, the developer or the website it's reading (07-06)?
- **Opacity:** The principal doesn't see the agent's reasoning or all its actions.
- **Scope creep:** The agent takes actions beyond what was authorized.

### Design principles for agent safety

| Principle | Meaning | Example |
|---|---|---|
| **Least privilege** | Grant only the permissions needed for the task | A read-only database role for an analysis agent |
| **Separation of environments** | Keep dev, test and production apart | Replit's post-incident change |
| **Approval gates** | Require human confirmation for consequential or irreversible actions | "Send," "delete," "purchase" and "deploy" require a click |
| **Reversibility** | Prefer reversible actions; maintain backups | Soft delete; transaction logs |
| **Logging and audit** | Record all actions and reasons | Immutable action logs |
| **Bounded autonomy** | Limit time, spend, scope and number of steps | Budget caps; step limits |
| **Clear identity** | Agents identify themselves as agents | Disclosure in emails sent by agents |
| **Kill switch** | Ability to stop the agent immediately | Session termination |

### Responsibility

When an agent causes harm, responsibility may lie with:

- the **user**, who delegated and set permissions,
- the **deployer**, who integrated the agent into a product or workplace,
- the **developer**, who built the model and agent framework,
- **third parties** whose content manipulated the agent (07-06), and
- **platform operators** whose systems the agent acted on.

Legal frameworks are unsettled. Contract law, agency law, product liability and computer-misuse law all apply imperfectly. Emerging proposals include:

- agent identity and registration,
- liability presumptions for deployers, and
- "agent IDs" for accountability.

See Lesson 08-05.

## Applying the frameworks

- **Autonomy (meta-autonomy, 01-07):** Users should decide which decisions to delegate, with informed understanding.
- **Non-maleficence:** Irreversible actions require stronger safeguards.
- **Explicability:** Agents should explain what they did and why.
- **Virtue:** Designing agents with humility about their reliability.

## Discussion questions

1. Should AI agents ever be permitted to take irreversible actions without human approval? Which actions?
2. In the Replit case, the user had instructed a code freeze. Who was responsible for the deletion?
3. Should emails or messages sent by AI agents be legally required to disclose that an agent sent them?
4. What permissions would you give an AI agent managing your email? Your bank account? Your work repository?

## Activity: permission design (15 minutes)

Design the permission model for an AI agent that manages a small business's customer-support inbox. For each action (read email, draft reply, send reply, issue refund, update customer record, delete email, escalate to a human), specify:

1. allowed / approval required / prohibited,
2. limits (amounts, frequency), and
3. what's logged.

## Key terms

- **Agent:** An AI system that takes actions via tools.
- **Least privilege:** Granting only the minimum necessary permissions.
- **Approval gate:** A required human confirmation before an action.
- **Principal–agent problem:** Conflicts between a delegator's interests and an agent's behavior.
- **Bounded autonomy:** Constraints on an agent's scope, time and resources.

## Connections

- Prompt injection → 07-06 · Hugging Face breach → 07-07 · Lab → 07-10 · Accountability → 08-05 · Agent privacy → 02-07

## Sources and further reading

- Coverage of the SaaStr/Replit database deletion, July 2025 (e.g., *The Register*, *Fortune*); Replit CEO statement on X (July 2025). ⚠ Use primary posts. — [Replit CEO primary post — Retrieval blocked](https://twitter.com/amasad/status/1946986468586721478); [Free quoted post and context — Free full text](https://replit-builders.beehiiv.com/p/ok-but-where-did-my-database-go); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r308). <!-- reading-access -->
- Chan, A. et al. "Visibility into AI Agents," *FAccT 2024*. — [Free manuscript](https://arxiv.org/abs/2401.13138); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r309). <!-- reading-access -->
- Shavit, Y. et al. "Practices for Governing Agentic AI Systems," OpenAI white paper (Dec 2023). — [Free full text](https://openai.com/index/practices-for-governing-agentic-ai-systems/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r310). <!-- reading-access -->
- Kolt, N. "Governing AI Agents," *Notre Dame Law Review* 101 (2025). — [Free full text](https://ndlawreview.org/wp-content/uploads/2026/08/Kolt_101.335.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r311). <!-- reading-access -->
- OWASP, *Top 10 for LLM Applications* (2025): "Excessive Agency." — [Free full text](https://genai.owasp.org/llm-top-10/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r312). <!-- reading-access -->
