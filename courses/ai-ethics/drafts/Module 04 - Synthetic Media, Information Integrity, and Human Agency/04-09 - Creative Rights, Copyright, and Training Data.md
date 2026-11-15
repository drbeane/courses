# 04-09 — Creative Rights, Copyright, and Training Data

**Module:** 4 — Synthetic Media, Information Integrity, and Human Agency
**Estimated time:** 40 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain the main copyright questions raised by generative AI: training, outputs and authorship.
2. Summarize key rulings and settlements through 2026, including *Bartz v. Anthropic*.
3. Evaluate ethical arguments about consent, compensation and credit for creators beyond what copyright law requires.

## Opening case: $1.5 billion for pirated books

Authors Andrea Bartz, Charles Graeber and Kirk Wallace Johnson sued Anthropic in 2024, alleging it trained Claude on their books without permission.

**June 2025:** Judge William Alsup issued a split ruling.

- Training an AI model on lawfully acquired books was **fair use**. He called it "quintessentially transformative," like a reader learning to write.
- But Anthropic's downloading of **millions of pirated books** from shadow libraries (LibGen, Pirate Library Mirror) to build a permanent central library was **not** fair use and could go to trial.

**September 2025:** Facing potentially enormous statutory damages, Anthropic agreed to a **$1.5 billion** class settlement, about $3,000 per work for roughly 500,000 books, and agreed to destroy the pirated copies. Reporting describes final approval in July 2026. It's the largest copyright recovery in U.S. history.

A few days after Alsup's ruling, Judge Vince Chhabria, in *Kadrey v. Meta*, also ruled for the AI company on fair use. He emphasized that the plaintiffs had failed to show market harm, and suggested that in many cases, training on copyrighted works without permission could be unlawful if market dilution were proven.

## Core ideas

### Three legal questions

1. **Training:** Is copying works to train a model infringement, or fair use (U.S.) or covered by an exception (EU/UK text-and-data mining)?
2. **Outputs:** When a model produces content similar to a training work, or reproduces it verbatim, is that infringement? Who is liable: user or developer?
3. **Authorship:** Can AI-generated works be copyrighted? The U.S. Copyright Office (2023–2025 guidance; *Thaler v. Perlmutter*, D.C. Cir. 2025) says copyright requires human authorship. AI-assisted works can be protected to the extent of human creative contribution.

### U.S. fair use factors

1. purpose and character of the use (transformative? commercial?),
2. nature of the work,
3. amount used, and
4. effect on the market for the original.

Courts have so far been receptive to the transformative-training argument but are attentive to **how data was acquired** (piracy) and **market harm**, including "market dilution" from flooding markets with substitutes.

### Other major cases (as of October 2026 ⚠)

| Case | Issue | Status |
|---|---|---|
| *NYT v. Microsoft & OpenAI* | News articles; verbatim regurgitation | Ongoing |
| *Thomson Reuters v. Ross* (D. Del. 2025) | Legal headnotes for a competing AI search tool | Not fair use (on appeal ⚠) |
| *Getty Images v. Stability AI* (UK, Nov 2025) | Image training; model as "infringing copy" | Getty largely lost; limited trademark findings |
| *Disney & Universal v. Midjourney* (2025) | Character outputs | Ongoing |
| Music publishers v. Anthropic; UMG v. Suno/Udio | Lyrics; music generation | Some settled or licensing deals (2025) ⚠ |

### Beyond law: the ethical questions

Even if training is legal, creators raise ethical concerns:

- **Consent:** Artists never agreed to have their work train systems that compete with them.
- **Compensation:** Value created from their labor flows to AI companies.
- **Credit:** Outputs "in the style of" named artists trade on their reputation.
- **Market substitution:** Illustrators, voice actors, translators and stock photographers report lost work (Module 5).
- **Cultural extraction:** Training on indigenous or community cultural works without consent.

**Arguments on the other side:**

- Humans learn from others' works without paying. Style isn't copyrightable.
- Requiring licenses for all training data would entrench the largest companies, who can afford them, and block open research.
- Broad access to knowledge has social value.
- AI tools also empower many creators.

### Emerging responses

- **Licensing deals:** Publishers, image libraries and news organizations license content (e.g., AP, Axel Springer, the *Financial Times* and Reddit with OpenAI and others).
- **Opt-out mechanisms:** robots.txt; the EU AI Act's TDM opt-out (Art. 53 requires GPAI providers to respect it and publish training-data summaries).
- **Technical tools:** Glaze and Nightshade (University of Chicago) for artists to disrupt style mimicry.
- **Collective bargaining:** Union contracts on AI in writing and performance (05-09).
- **Right of publicity laws for voice and likeness:** Tennessee ELVIS Act (2024); proposed federal NO FAKES Act ⚠.

## Applying the frameworks

- **Deontology:** Using creators' work without consent to build competing products treats them as means. Or is learning from public work no different from what humans do?
- **Consequences:** Broad access spurs innovation, but if creative livelihoods collapse, the supply of new human work may shrink.
- **Justice:** Who captures the value of collective human culture?
- **Decency:** Even where not legally required, would a decent company seek consent, compensate or credit creators?

## Discussion questions

1. Judge Alsup compared AI training to a person reading books and learning to write. Is the analogy sound? Where does it break down?
2. Should there be a legal right to opt out of AI training? An opt-in requirement? Compulsory licensing with royalties?
3. Is "in the style of [living artist]" prompting ethical? Should generators block it?
4. COSC-643 previously asked whether creators deserve compensation. Has your view changed after this lesson?

## Activity: policy position (15 minutes)

Draft a 200-word policy for **Maryville University** on faculty and student use of generative AI tools trained on copyrighted works. Address:

1. permitted uses,
2. disclosure,
3. respect for creators, and
4. what the university should ask of vendors.

## Key terms

- **Fair use:** U.S. doctrine permitting some unlicensed uses of copyrighted works.
- **Transformative use:** Use with a new purpose or character.
- **Text and data mining (TDM) exception:** EU and UK copyright exceptions for computational analysis.
- **Market dilution:** Harm from AI-generated substitutes flooding a market.
- **Right of publicity:** Control over commercial use of one's identity.

## Connections

- Data brokers and consent → 02-02 · Labor effects → 05-03 · Open weights and data transparency → 07-01

## Sources and further reading

- *Bartz v. Anthropic PBC*, No. 3:24-cv-05417 (N.D. Cal.), Order on Fair Use (June 23, 2025); settlement approval (JURIST, July 2026). — [June 23, 2025 fair-use order — Free full text](https://docs.justia.com/cases/federal/district-courts/california/candce/3%3A2024cv05417/434709/231); [July 2026 JURIST report — Free full text](https://www.jurist.org/news/2026/07/judge-approves-record-1-5-billion-settlement-involving-anthropic/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r188). <!-- reading-access -->
- *Kadrey v. Meta Platforms*, No. 3:23-cv-03417 (N.D. Cal.), Order (June 25, 2025). — [Free full text](https://law.justia.com/cases/federal/district-courts/california/candce/3%3A2023cv03417/415175/598/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r189). <!-- reading-access -->
- U.S. Copyright Office, *Copyright and Artificial Intelligence*, Part 2 (Copyrightability, Jan 2025) and Part 3 (Generative AI Training, pre-publication, May 2025). — [Free full text](https://copyright.gov/ai/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r190). <!-- reading-access -->
- *Thaler v. Perlmutter*, No. 23-5233 (D.C. Cir. Mar. 18, 2025). — [Free full text](https://law.justia.com/cases/federal/appellate-courts/cadc/23-5233/23-5233-2025-03-18.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r191). <!-- reading-access -->
- Akin Gump AI Law & Regulation Tracker. ⚠ Update case statuses. — [Free online tool](https://www.akingump.com/en/insights/ai-law-and-regulation-tracker); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r192). <!-- reading-access -->
- Shan, S. et al. "Glaze: Protecting Artists from Style Mimicry," *USENIX Security 2023*. — [Free full text](https://www.usenix.org/conference/usenixsecurity23/presentation/shan); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r193). <!-- reading-access -->
