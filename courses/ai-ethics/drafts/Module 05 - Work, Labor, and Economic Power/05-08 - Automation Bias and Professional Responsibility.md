# 05-08 — Automation Bias and Professional Responsibility

**Module:** 5 — Work, Labor, and Economic Power
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain automation bias and complacency and how they arise.
2. Analyze cases from medicine, aviation and law where over-reliance on automation caused harm.
3. Describe professional duties when using AI tools, and how organizations can design against automation bias.

## Opening case: the mammography study

In a 2023 study published in *Radiology* (Dratsch et al.), radiologists read mammograms with the help of a purported AI system. When the AI suggested an **incorrect** category, radiologists' accuracy dropped sharply, and the decline was larger for less experienced radiologists. Even experienced readers were swayed.

The study illustrates **automation bias**: people tend to defer to automated suggestions, even against their own judgment and training.

## Core ideas

### Automation bias and complacency

- **Automation bias:** The tendency to favor automated suggestions and to discount contradictory information (Parasuraman & Manzey, 2010). It produces:
  - **errors of commission:** following incorrect advice, and
  - **errors of omission:** failing to notice problems the system didn't flag.
- **Automation complacency:** Reduced vigilance when monitoring a reliable automated system. The more reliable the system, the less closely people watch it, until it fails.

**Contributing factors:**

- high workload and time pressure,
- system reliability (paradoxically, more reliable systems increase complacency),
- perceived authority of "AI,"
- lack of training on failure modes, and
- organizational incentives (following the system is safe, while overriding requires justification).

### Cases across professions

| Domain | Example |
|---|---|
| **Aviation** | Air France 447 (2009): Pilots, unpracticed in manual flying, mishandled an autopilot disconnect. Boeing 737 MAX (2018–2019): MCAS automation and inadequate pilot training contributed to two crashes. |
| **Medicine** | Radiology AI studies (above); sepsis-prediction tools generating alert fatigue (Epic Sepsis Model validation, Wong et al., *JAMA IM* 2021) |
| **Law** | Fabricated citations (04-01); judges and risk scores (03-06) |
| **Policing** | Facial recognition matches treated as proof (02-04) |
| **Software** | Developers accepting AI-generated code with security vulnerabilities. Studies found users with AI assistants wrote less secure code while believing it was more secure (Perry et al., 2023). |
| **Navigation** | Drivers following GPS into lakes or closed roads ("death by GPS") |

### Deskilling

Long-term reliance can erode skills:

- Pilots lose manual flying skill.
- A 2025 study in *The Lancet Gastroenterology & Hepatology* reported that endoscopists' adenoma detection rate in non-AI-assisted colonoscopies **fell** after routine exposure to AI assistance (Budzyń et al.).
- Concerns that students and juniors who rely on AI won't develop foundational skills (05-02).

Deskilling is an ethical issue because it makes professionals less able to catch AI errors exactly when it matters, and it shifts power to tool providers.

### Professional duties

Professional codes are adapting:

- **Medicine:** AMA principles on "augmented intelligence" (2023–2024) emphasize physician responsibility, transparency and oversight.
- **Law:** ABA Formal Opinion 512 (2024) covers competence, confidentiality, communication, candor and reasonable fees when using generative AI.
- **Engineering and computing:** The ACM Code of Ethics (2018) requires professionals to "give comprehensive and thorough evaluations of computer systems and their impacts, including analysis of possible risks" and to "avoid harm."
- **Nursing:** National nursing organizations have stated that nurses remain accountable for clinical judgments and must be able to override AI.

The common thread: **AI doesn't transfer professional responsibility.** The professional who relies on AI remains accountable.

### Designing against automation bias

| Design choice | Effect |
|---|---|
| Show confidence or uncertainty | Helps calibrate trust (if the uncertainty is itself accurate) |
| Require independent judgment *before* showing the AI suggestion | Reduces anchoring |
| Explain the basis for suggestions | Enables critical evaluation (03-09) |
| Train on failure modes | Builds appropriate skepticism |
| Track overrides and outcomes | Reveals both over- and under-reliance |
| Preserve manual practice | Prevents deskilling |
| Align incentives | Don't penalize justified overrides |

## Applying the frameworks

- **Virtue ethics:** Practical wisdom includes knowing when to trust tools. Humility and diligence are professional virtues.
- **Deontology:** Duties to patients, clients and the public can't be delegated to software.
- **Consequences:** AI can reduce errors overall while introducing new error types. Both must be measured.
- **Decency, self lens:** Your own skills and judgment are worth protecting.

## Discussion questions

1. If an AI system is more accurate than the average doctor, is it ethical for a doctor to override it? Is it ethical *not* to?
2. Who is responsible when a professional follows an AI recommendation that turns out wrong: the professional, the institution or the vendor?
3. How should your own field preserve foundational skills as AI handles more routine work?
4. Should professionals be required to disclose AI use to clients and patients?

## Activity: workflow redesign (15 minutes)

Choose a professional workflow with AI support (radiology reads, code review, loan underwriting, legal research). Redesign it with three changes that reduce automation bias. For each, predict one cost (time, money or user frustration).

## Key terms

- **Automation bias:** Over-reliance on automated suggestions.
- **Automation complacency:** Reduced monitoring of reliable automation.
- **Deskilling:** Loss of skills through reliance on automation.
- **Anchoring:** Over-weighting initial information (e.g., an AI suggestion).
- **Appropriate reliance:** Trusting AI when it's right and not when it's wrong.

## Connections

- Wrongful arrests → 02-04 · Risk scores → 03-06 · Hallucination → 04-01 · Entry-level skills → 05-02 · Human oversight → 03-09

## Sources and further reading

- Dratsch, T. et al. "Automation Bias in Mammography: The Impact of Artificial Intelligence BI-RADS Suggestions on Reader Performance," *Radiology* 307(4), 2023. — [Paid / library](https://pubs.rsna.org/doi/10.1148/radiol.222176); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r233). <!-- reading-access -->
- Parasuraman, R. & Manzey, D. "Complacency and Bias in Human Use of Automation," *Human Factors* 52(3), 2010. — [Publisher record — Paid / library](https://doi.org/10.1177/0018720810376055); [Indexed CiteSeerX copy — Retrieval blocked](https://citeseerx.ist.psu.edu/document?doi=a3fe4014e70573df0d2302a23ee31d1c069d76c9&repid=rep1&type=pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r234). <!-- reading-access -->
- Budzyń, K. et al. "Endoscopist deskilling risk after exposure to artificial intelligence in colonoscopy," *Lancet Gastroenterology & Hepatology* (2025). — [Abstract / record](https://pubmed.ncbi.nlm.nih.gov/40816301/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r235). <!-- reading-access -->
- Perry, N. et al. "Do Users Write More Insecure Code with AI Assistants?" *ACM CCS 2023*. — [Free manuscript](https://arxiv.org/abs/2211.03622); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r236). <!-- reading-access -->
- ACM Code of Ethics and Professional Conduct (2018), Principles 1.2 and 2.5. — [Free full text](https://www.acm.org/binaries/content/assets/about/acm-code-of-ethics-booklet.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r237). <!-- reading-access -->
- ABA Formal Opinion 512 (2024). — [Free full text](https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r238). <!-- reading-access -->
