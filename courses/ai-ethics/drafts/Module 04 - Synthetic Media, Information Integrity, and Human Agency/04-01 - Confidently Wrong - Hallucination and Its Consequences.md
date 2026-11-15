# 04-01 — Confidently Wrong: Hallucination and Its Consequences

**Module:** 4 — Synthetic Media, Information Integrity, and Human Agency
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain why language models produce fluent, false output ("hallucinations"), and why this is a structural feature rather than a rare bug.
2. Analyze the legal profession's experience with fabricated citations as a case of professional responsibility.
3. Assign responsibility for harms from false AI output among developers, deployers and users.

## Opening case: two thousand courtrooms

In 2023, two New York lawyers in *Mata v. Avianca* submitted a brief citing six cases that didn't exist. ChatGPT had invented them, complete with plausible names, quotations and docket numbers. When the court asked for copies, the lawyers asked ChatGPT whether the cases were real, and it said yes. They were fined $5,000.

The case became a cautionary tale, and it kept recurring. By **September 21, 2026**, Damien Charlotin's public database of court decisions involving AI-fabricated citations or content listed **2,046** cases worldwide, up from about 200 in mid-2025 and 719 in January 2026. The count is a floor, since it includes only cases where a court noticed. Examples:

- ***Whiting v. City of Athens* (6th Cir., 2026):** Two attorneys were each ordered to pay $15,000, plus fees and double costs.
- ***Withers v. City of Aberdeen* (N.D. Miss., June 2026):** Filings on *both* sides contained fake citations. The judge canceled the trial and suspended two lead attorneys from practicing in the district for two years.
- **Beyond lawyers:** Experts, judges' clerks, self-represented litigants and, in at least a few reported instances, court orders themselves.

## Core ideas

### Why models hallucinate

A large language model is trained to predict plausible next tokens. It has no built-in check against a database of facts. As a result:

- It generates **what a correct answer would look like**: the format of a citation, the style of a quotation.
- It's often **most confident in tone** precisely when filling gaps.
- Training to be helpful can reward answering over abstaining. OpenAI researchers argued in 2025 that standard evaluation practices reward guessing and penalize "I don't know."
- Retrieval (RAG) and tool use reduce hallucination but don't eliminate it. Models can misread, mis-cite or misattribute retrieved sources. Even legal research tools with retrieval hallucinated in an estimated 17–33% of queries in a 2024 Stanford evaluation (Magesh et al.).

**Hallucination is a structural property of current generative models, not an occasional glitch.** Safety comes from the **system** around the model: verification, sourcing, workflows and incentives.

### Where false output causes harm

| Domain | Example harm |
|---|---|
| Law | Sanctions; clients harmed; courts misled |
| Medicine | Wrong dosages, invented studies, unsafe advice |
| Journalism | Fabricated quotes; false reports (several 2023–2025 incidents at news outlets) |
| Customer service | Wrong policy info. In *Moffatt v. Air Canada* (2024), the airline was held liable for its chatbot's incorrect bereavement-fare answer |
| Defamation | Models stating false, damaging claims about real people (e.g., *Walters v. OpenAI*; OpenAI won summary judgment in Georgia in 2025 ⚠) |
| Research and education | Fake references in student papers and published articles |
| Software | "Package hallucination": code suggesting non-existent libraries that attackers then register ("slopsquatting") |

### Who is responsible?

- **Developers** design models that sound authoritative and ship them with disclaimers. Is a disclaimer sufficient?
- **Deployers** (law firms, airlines, hospitals) choose to use the system for consequential tasks. *Air Canada* rejected the argument that the chatbot was "a separate legal entity responsible for its own actions."
- **Users,** especially professionals, have duties of competence and candor. The ABA's Formal Opinion 512 (July 2024) states that lawyers must understand the capabilities and limitations of generative AI and verify outputs.
- **Institutions** (courts, bar associations, universities) set rules. Many courts now require certification of AI use or of citation verification.

### Professional responsibility, not just tool quality

The legal cases reveal a **professional virtue failure** (01-05) as much as a technical one:

- **Competence:** knowing the tool's limits.
- **Diligence:** checking work.
- **Candor:** not presenting unverified claims as verified.
- **Supervision:** partners checking associates' and assistants' work.

These duties existed before AI. AI made it easy to skip them, at scale.

## Applying the frameworks

- **Non-maleficence:** Shipping a tool known to fabricate, to users who will rely on it, requires safeguards proportionate to foreseeable misuse.
- **Virtue:** Humility about one's tools is a professional virtue.
- **Justice:** Self-represented litigants, who can't afford lawyers, increasingly rely on AI and may be most harmed by its errors.
- **Explicability:** If a model can't tell you where an answer came from, should you use it for consequential decisions?

## Discussion questions

1. Is a disclaimer ("may produce inaccurate information") ethically sufficient for a general-purpose chatbot? For a legal research product?
2. Should sanctions for AI-fabricated citations be harsher, the same as, or more lenient than sanctions for other careless errors?
3. A self-represented tenant uses a free chatbot to draft a defense and cites a fake case. Who has failed them?
4. If hallucination can't be eliminated, which uses of generative AI should be off-limits?

## Activity: spot the fabrication (15 minutes)

Your instructor will provide three AI-generated paragraphs on a legal or scientific topic, each containing citations. For each citation:

1. try to locate the source,
2. mark it as **real and accurate / real but misrepresented / non-existent**, and
3. record how long verification took.

Discuss: what is the time cost of verification, and who should bear it?

## Key terms

- **Hallucination / confabulation:** Fluent output not grounded in fact or source.
- **RAG (retrieval-augmented generation):** Supplying documents to a model to ground its answers.
- **Slopsquatting:** Registering package names that AI tools hallucinate, to distribute malware.
- **Duty of competence / candor:** Professional obligations to understand tools and not mislead tribunals.

## Connections

- Verification methods → 04-02 · Lab → 04-10 · Automation bias → 05-08 · Accountability → 08-05
- A4 option: fabricated citation testing

## Sources and further reading

- *Mata v. Avianca, Inc.*, No. 22-cv-1461 (S.D.N.Y. June 22, 2023) (sanctions order). — [Free full text](https://cases.justia.com/federal/district-courts/new-york/nysdce/1%3A2022cv01461/575368/54/0.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r143). <!-- reading-access -->
- Damien Charlotin, AI Hallucination Cases database (accessed Sep 2026); HAQQ tracker summary (vendor), Sep 2026. ⚠ Update the count. — [Free online tool](https://www.damiencharlotin.com/hallucinations/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r144). <!-- reading-access -->
- UNC Law Library, "Handling Hallucinations: A Reflection on the Last Three Years," Jun 2026. — [Free full text](https://library.law.unc.edu/2026/06/handling-hallucinations-a-reflection/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r145). <!-- reading-access -->
- Magesh, V. et al. "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools," Stanford RegLab/HAI (2024). — [Free manuscript](https://arxiv.org/abs/2405.20362); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r146). <!-- reading-access -->
- ABA Standing Committee, Formal Opinion 512, "Generative Artificial Intelligence Tools" (July 29, 2024). — [Free full text](https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r147). <!-- reading-access -->
- *Moffatt v. Air Canada*, 2024 BCCRT 149. — [Free official text](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r148). <!-- reading-access -->
- Kalai, A. et al. "Why Language Models Hallucinate," OpenAI (Sept 2025). — [Free manuscript](https://openai.com/index/why-language-models-hallucinate/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r149). <!-- reading-access -->
