# AI, Ethics, and Society — Course Overview (Draft v1)

**Status:** Working draft, October 2026. Not yet approved for any catalog number.
**Intended home:** Redevelopment of COSC-643 *Ethics of Artificial Intelligence* (MS in Artificial Intelligence), with an undergraduate adaptation possible for COSC-443.
**Format:** 8 modules, 76 lessons, designed for an 8-week online graduate term (about 9–10 lessons per week). Each lesson is one markdown file.

---

## 1. Course description (catalog draft)

This course examines how artificial intelligence reshapes individual rights, institutions, labor, the environment and public life, and how practitioners can make defensible decisions about building, buying and deploying AI systems. Students apply ethical theory to current cases in surveillance and facial recognition, deepfakes and non-consensual imagery, algorithmic bias in hiring, lending and criminal justice, worker monitoring and labor displacement, the environmental costs of large models, privacy with always-on assistants, and the trade-offs between closed-weight and open-weight models. Students investigate real failures, evaluate safeguards, distinguish law from ethics and policy, and produce an evidence-based deployment recommendation they defend before peers.

## 2. Why this course is being rebuilt

An October 2026 review of the COSC-643 Canvas master found that the course was built in late 2022 and early 2023 and has not been reconstructed since. Its philosophical foundations remain sound, but it lacks required treatment of generative and agentic AI, synthetic media, AI security, current governance practice and concrete societal-impact evidence. Its assessments mostly ask students to articulate ethical views rather than demonstrate that they can evaluate a system.

Since then, the field has produced a stream of cases that a 2022 course could not anticipate. Here are four from 2026 alone:

- **July 2026:** OpenAI disclosed that its own models broke out of a cyber-capability evaluation sandbox and breached Hugging Face's systems.
- **January 2026:** xAI's Grok produced sexualized images of real people, including minors, prompting regulators on several continents to investigate or block it.
- **September 2026:** A Tennessee woman sued Fargo, ND, after a facial recognition lead led to her arrest at gunpoint for crimes in a state she had never visited.
- **August 2026:** A Stanford Digital Economy Lab analysis found employment for 22–25-year-olds in AI-exposed jobs was about 19% below that of comparable workers in less exposed jobs.

This course keeps what worked (ethical reasoning, Todd May's decency lens, the five AI ethics principles, concern for non-humans and the world) and rebuilds the rest around current evidence and practice.

## 3. Audience and prerequisites

- **Primary:** Graduate students in the MS in AI. Most have programming and ML exposure, and some are working professionals.
- **Prerequisites:** None formally required. Students should be comfortable reading technical descriptions of ML systems; no coding is required for any graded deliverable.
- **Undergraduate adaptation:** Reduce the reading load, convert the final portfolio to a team deliverable, and use the "Core" readings only.

## 4. Course learning outcomes

By the end of the course, students will be able to:

1. **Reason ethically.** Compare consequentialist, deontological, virtue/care, decency and justice-based arguments in a consequential AI case, including genuine disagreement about values and trade-offs.
2. **Map stakeholders and power.** Identify affected stakeholders and explain how benefits, burdens and decision power differ across groups and institutions.
3. **Analyze rights.** Analyze privacy, surveillance, discrimination, accessibility, information-integrity and autonomy concerns using contextual evidence.
4. **Separate obligations.** Distinguish legal obligations, technical standards, organizational policies and ethical responsibilities for a specified use case and jurisdiction, with dates recorded.
5. **Evaluate claims.** Evaluate a system's claims and limitations using a documented, bounded protocol that includes failure cases and uncertainty.
6. **Design safeguards.** Recommend safeguards, accountability, human oversight, monitoring and remedies, and explain what each safeguard cannot accomplish.
7. **Assess societal effects.** Assess labor, economic, environmental and global effects while separating measured impacts from forecasts and conjecture.
8. **Decide and defend.** Defend a deploy, restrict or do-not-deploy decision and respond constructively to independent review.

## 5. Module map

| # | Module | Lessons | Requested topics covered |
|---|---|---:|---|
| 1 | Ethical Foundations and AI in Society | 9 | — (frameworks used all term) |
| 2 | Surveillance, Biometrics, and Privacy | 10 | Surveillance and facial recognition; data privacy with always-on assistants |
| 3 | Algorithmic Bias in Consequential Decisions | 10 | Algorithmic bias in hiring, lending and criminal justice |
| 4 | Synthetic Media, Information Integrity, and Human Agency | 10 | Deepfakes and non-consensual imagery |
| 5 | Work, Labor, and Economic Power | 9 | Labor displacement and AI worker monitoring |
| 6 | Environmental Costs and Global Access | 8 | Environmental costs of large models |
| 7 | Open Weights, Agents, and AI Security | 10 | Closed-weight vs. open-weight models; Hugging Face incident; AI-driven reverse engineering |
| 8 | Governance, Accountability, and Responsible Deployment | 10 | Integration and final portfolio |
| | **Total** | **76** | |

See `01 - Course Outline.md` for the full lesson list and `02 - Topics.md` for topic-to-lesson mapping.

## 6. Design principles

1. **Cases first, principles always.** Every module opens with a real, dated case. Theory is introduced when the case needs it, and the Module 1 frameworks are reused explicitly in later modules.
2. **Evidence over opinion.** Students are graded on the quality of their evidence and reasoning, not on whether they agree with the instructor or with any company.
3. **Both kinds of AI.** Every student analyzes at least one conventional decision system (scoring, ranking, classification) and at least one generative or agentic system.
4. **Law is dated.** AI law is changing monthly. Any legal claim in a lesson or student deliverable carries an "as of" date and a source.
5. **Stable core, rotating cases.** Principles and methods are stable. The case library (`_Research/`) has review dates so cases can be replaced each offering without rewriting lessons.
6. **No distressing performance.** Activities never require students to generate harmful content, disclose personal health or trauma information, or attack live systems.
7. **Workload discipline.** New tasks replace old ones; they are not stacked on top.
8. **Systems that work, too.** Every module includes at least one system that clearly helps, and every analysis asks "compared to what?" Declining to deploy is also a decision with people on the losing end.

## 7. Assessment summary

| Component | Weight |
|---|---:|
| Ethical case reasoning and structured discussion | 15% |
| Rights, data and governance case (Modules 2–3) | 20% |
| Societal-impact evidence brief (Modules 5–6) | 15% |
| Failure investigation and safeguard evaluation (Modules 4 and 7) | 20% |
| Final deployment decision portfolio and defense (Module 8) | 25% |
| Independent peer review | 5% |

Details are in `03 - Assessments.md`.

## 8. What carries over from COSC-643

| Retained element | Where it lives now |
|---|---|
| Ethical theories (utilitarianism, deontology, egoism/altruism, existentialism, legalism) | Module 1, Lessons 3–6 |
| Todd May's decency principle and the self/others/non-humans/world lenses | Module 1, Lesson 5; reused as a lens in every module |
| Five AI ethics principles (beneficence, non-maleficence, autonomy, justice, explicability) | Module 1, Lesson 7 |
| Asilomar, Montreal and Partnership on AI frameworks | Module 1, Lesson 7 (historical context) |
| "Your Ethical Framework" assignment | Revised as the Module 1 position statement |
| Non-human and environmental responsibility | Module 6 |
| Fair use and compensation discussion | Module 4, Lesson 9 |
| Final project presentation/critique format | Module 8 portfolio defense and peer review |

Removed or reduced: the long standalone thought experiments (Ship of Theseus, Ring of Gyges, Roko's Basilisk as the main frontier-risk assignment). These appear only as short teaching devices.

## 9. File organization

```
AI, Ethics, and Society - v1/
├── README.md
├── 00 - Course Overview.md          ← this file
├── 01 - Course Outline.md           ← module and lesson list
├── 02 - Topics.md                   ← topic index and coverage map
├── 03 - Assessments.md              ← assessment portfolio and rubrics
├── 04 - Lesson Template.md          ← structure every lesson follows
├── 05 - Design Notes and Review Log.md
├── 06 - Verification Checklist.md   ← all ⚠ items to re-check
├── _Research/                       ← news, cases, resources (dated)
└── Module 01 … Module 08/           ← one .md file per lesson
```
