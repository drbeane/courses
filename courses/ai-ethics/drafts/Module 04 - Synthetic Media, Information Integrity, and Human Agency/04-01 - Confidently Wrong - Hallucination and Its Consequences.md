# 04-01 — Confidently Wrong: Hallucination and Its Consequences

**Module:** 4 — Synthetic Media, Information Integrity, and Human Agency
**Estimated time:** 35 minutes

**In this lesson:** Language models sometimes state false things fluently and confidently. This lesson explains why that happens, follows the legal profession's long run of fabricated citations, and asks who is responsible when people rely on output that turns out to be invented.

## Six Cases That Did Not Exist

In 2023 two New York lawyers filed a brief in a personal-injury case, *Mata v. Avianca*. It cited six earlier court decisions to support their argument. None of them existed. ChatGPT had invented them, complete with plausible names, quotations and docket numbers. When the court asked for copies, one of the lawyers asked ChatGPT whether the cases were real, and it said they were. The judge fined the lawyers and their firm $5,000.

The case became a warning that circulated through every law school and firm in the country. It did not stop the problem. A public database maintained by the researcher Damien Charlotin, which records court decisions involving AI-fabricated citations or content, listed about 200 cases worldwide in mid-2025, 719 in January 2026 and 2,046 by September 21, 2026. The count includes only cases where a court noticed and wrote it down, so the real number is higher.

The consequences have grown with the numbers. In 2026 a federal appeals court ordered two attorneys in *Whiting v. City of Athens* to pay $15,000 each, plus fees and double costs. In *Withers v. City of Aberdeen*, a federal court in Mississippi found fabricated citations in filings from *both* sides; the judge cancelled the trial and barred two lead attorneys from practicing in that court for two years. Fabrications have also turned up in expert reports, in filings by people representing themselves and, in a few reported instances, in court orders.

*Counts and case details are as of September 2026 and should be updated before teaching.*

## Why People Use These Tools Anyway

Lawyers did not start using AI out of carelessness. They use it because it is useful, and the same is true in medicine, journalism, research and software.

A language model can draft a memo, summarize a long deposition or suggest arguments in minutes. Legal research tools built on these models can search vast collections of case law in plain language. For a lawyer in a small practice, that can mean taking cases that were not worth the hours before. For the many people who cannot afford a lawyer at all, a free assistant that explains a court form or drafts a letter to a landlord may be the only help available.

So the question is not whether to use these tools. People will, and many will benefit. The question is how to use something that is right most of the time, wrong some of the time, and sounds equally confident either way.

## Why Models Make Things Up

A large language model is trained to produce text that is likely to come next, given everything before it. It has no built-in connection to a database of facts that it checks before answering. Three things follow.

First, it produces what a correct answer would look like. A citation has a familiar shape: case name, volume, reporter, page, year. A model can produce that shape perfectly whether or not the case exists. Fluent, false output of this kind is called a **hallucination**, or sometimes a confabulation.

Second, its tone does not track its accuracy. A model is often just as confident when it is filling a gap as when it is repeating something well established.

Third, training can reward guessing. In 2025 researchers at OpenAI argued that the standard ways of testing models give credit for a correct answer and nothing for "I don't know," so models learn that guessing pays.

Connecting a model to documents helps. In **retrieval-augmented generation**, the system first finds relevant documents and then has the model answer from them. That reduces fabrication but does not end it, because models can misread, misquote or misattribute what they retrieve. A 2024 Stanford study of commercial legal research tools built this way still found hallucinated answers in an estimated 17 to 33 percent of queries.

The main lesson is that hallucination is a structural property of current generative models, not an occasional glitch that the next update will remove. Safety comes from the system around the model: checking, sourcing, workflows and incentives.

## Where False Output Does Harm

The harm depends on where the output goes.

| Area | Example |
|---|---|
| Law | Sanctions for lawyers; clients harmed; courts misled |
| Medicine | Wrong dosages, invented studies, unsafe advice |
| Journalism | Fabricated quotations and false reports |
| Customer service | Wrong information about a company's policies |
| Reputation | False, damaging statements about real people |
| Education and research | Fake references in student papers and published articles |
| Software | Code that calls software libraries that do not exist, which attackers then create and fill with malware |

The customer-service case set an important precedent. In 2022 Jake Moffatt asked Air Canada's website chatbot about discounted fares for travel after a death in the family. The chatbot told him he could apply for the discount after the trip. That was wrong. When the airline refused the refund, he took it to a tribunal in British Columbia, which in 2024 held the airline responsible. Air Canada had argued that the chatbot was responsible for its own statements. The tribunal rejected that: a company is responsible for all the information on its website, whoever or whatever wrote it.

## Who Is Responsible?

Responsibility is shared among several parties, and each has a different kind of duty.

The **developers** design models that sound authoritative and release them with disclaimers saying they may be wrong. Is a disclaimer enough, when the product's whole appeal is that it sounds like an expert?

The **deployers**, such as law firms, airlines and hospitals, choose to use the system for consequential tasks. *Moffatt* makes clear that a deployer cannot blame the tool.

The **users**, especially professionals, have their own duties. The American Bar Association's Formal Opinion 512, issued in July 2024, says lawyers using generative AI must understand its capabilities and limits and must check what it produces. The professional duties at stake are old ones: **competence**, meaning knowing the limits of your tools; diligence, meaning checking your work; **candor**, meaning not presenting unverified claims to a court as verified; and supervision of others' work. AI did not create these duties. It made them easy to skip, at scale.

And **institutions** set the rules. Many courts now require lawyers to certify whether they used AI or that they checked every citation.

## Where People Disagree

One disagreement is about disclaimers. Some argue that a clear warning, plus the fact that professionals are supposed to check their work, puts the responsibility where it belongs. Others argue that a product designed to sound authoritative cannot escape responsibility with small print, especially a product sold specifically for legal or medical research.

A second is about punishment. Should fabricated citations be punished more harshly than other careless errors, to deter a fast-growing problem, or the same, since the underlying failure is the familiar one of not checking?

A third concerns people without lawyers. A tenant facing eviction who uses a free chatbot to draft a defense and cites a case that does not exist has been failed, but by whom? Restricting these tools would protect such people from errors. It would also take away help they have no other way to get.

## Check Your Understanding

**1. Why do language models produce citations to cases that do not exist?**

:::answer Answer
They are trained to produce likely-looking text, not to check facts against a database. A citation has a predictable shape, which a model can generate whether or not the case is real.
:::

**2. Does retrieval-augmented generation solve hallucination?**

:::answer Answer
No. It reduces fabrication by grounding answers in retrieved documents, but models can still misread, misquote or misattribute them. A 2024 study of legal tools built this way still found hallucinations in an estimated 17 to 33 percent of queries.
:::

**3. What did the tribunal decide in *Moffatt v. Air Canada*?**

:::answer Answer
That Air Canada was responsible for its chatbot's wrong answer about bereavement fares, rejecting the airline's argument that the chatbot was responsible for its own statements.
:::

**4. Name two professional duties that fabricated citations violate.**

:::answer Answer
Any two of these: competence (knowing the tool's limits), diligence (checking work), candor (not presenting unverified claims as verified), and supervision of others' work.
:::

## Your Turn

Ask an AI assistant for three sources, with full citations, on a topic you know something about. For each citation, try to find the source. Mark it as real and accurate, real but misrepresented, or non-existent, and record how long it took to check. Then answer: given the time it took, who should bear the cost of verification, the user, the company that built the tool, or the organization that deployed it?

Lab 04-10 develops this into a full test, and A4 offers it as an option.

## Key Terms

- **Hallucination:** Fluent output that is not grounded in fact or in any source; also called confabulation.
- **Retrieval-augmented generation:** Supplying relevant documents to a model so that it answers from them.
- **Competence:** A professional's duty to understand the tools they use, including their limits.
- **Candor:** A professional's duty not to mislead a court or client, including by presenting unchecked claims as checked.

## Sources

- **Core:** Magesh, V. et al. "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools," Stanford RegLab/HAI (2024). — [Free manuscript](https://arxiv.org/abs/2405.20362); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r146). <!-- reading-access -->
- *Mata v. Avianca, Inc.*, No. 22-cv-1461 (S.D.N.Y. June 22, 2023) (sanctions order). — [Free full text](https://cases.justia.com/federal/district-courts/new-york/nysdce/1%3A2022cv01461/575368/54/0.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r143). <!-- reading-access -->
- Damien Charlotin, AI Hallucination Cases database (accessed Sep 2026). ⚠ Update the count. — [Free online tool](https://www.damiencharlotin.com/hallucinations/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r144). <!-- reading-access -->
- UNC Law Library, "Handling Hallucinations: A Reflection on the Last Three Years," Jun 2026. — [Free full text](https://library.law.unc.edu/2026/06/handling-hallucinations-a-reflection/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r145). <!-- reading-access -->
- ABA Standing Committee, Formal Opinion 512, "Generative Artificial Intelligence Tools" (July 29, 2024). — [Free full text](https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r147). <!-- reading-access -->
- *Moffatt v. Air Canada*, 2024 BCCRT 149. — [Free official text](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r148). <!-- reading-access -->
- Kalai, A. et al. "Why Language Models Hallucinate," OpenAI (Sept 2025). — [Free manuscript](https://openai.com/index/why-language-models-hallucinate/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r149). <!-- reading-access -->
