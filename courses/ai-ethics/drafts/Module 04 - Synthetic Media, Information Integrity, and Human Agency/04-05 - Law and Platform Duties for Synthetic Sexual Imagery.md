# 04-05 — Law and Platform Duties for Synthetic Sexual Imagery

**Module:** 4 — Synthetic Media, Information Integrity, and Human Agency
**Estimated time:** 35 minutes
**Content note:** Discusses laws on sexual image abuse.

## Learning objectives

By the end of this lesson, you will be able to:

1. Summarize the U.S. TAKE IT DOWN Act's criminal and platform provisions and their critiques.
2. Compare U.S., EU and UK approaches to synthetic NCII.
3. Evaluate notice-and-removal systems for effectiveness and abuse risk.

## Opening case: one year to comply

On **May 19, 2025**, the TAKE IT DOWN Act ("Tools to Address Known Exploitation by Immobilizing Technological Deepfakes on Websites and Networks") was signed into law with broad bipartisan support. It passed the House 409–2.

- **Criminal provisions** took effect immediately.
- **Platforms** had one year to build a notice-and-removal process.
- **May 19, 2026:** FTC enforcement of the platform provisions began. FTC Chairman Andrew Ferguson and Commissioner Mark Meador publicly committed to enforcement, and the agency sent warning letters to at least 15 companies.

## Core ideas

### The TAKE IT DOWN Act (U.S. federal, as of October 2026 ⚠)

**Criminal provisions:**

- It's a federal crime to knowingly publish NCII of an identifiable adult without consent, where the publication is intended to cause harm or does cause harm. This covers both authentic images and "digital forgeries."
- Stricter provisions apply to depictions of minors.
- Threats to publish such content are also criminalized.

**Platform provisions (enforced by the FTC):**

- "Covered platforms" (public websites and apps that primarily host user-generated content) must provide a clear process for victims to request removal.
- Platforms must **remove** the content, and make reasonable efforts to remove identical copies, **within 48 hours** of a valid request.
- Failure to comply is treated as an unfair or deceptive practice under the FTC Act.

**Critiques** (from EFF, CDT, the Cyber Civil Rights Initiative and others):

- **Over-removal and abuse:** There's no requirement to verify that a request is legitimate, no counter-notice process, and no penalty for false requests. The process could be used to remove lawful content, such as journalism, LGBTQ content or political speech.
- **Encryption:** The obligations could pressure end-to-end encrypted services.
- **Scope ambiguity:** Which services are "covered platforms"?
- **Enforcement discretion:** An agency led by political appointees decides whom to pursue.
- **Gaps:** Victims can't sue platforms under the Act (no private right of action). Separately, the **DEFIANCE Act**, which would create a federal civil remedy, passed the Senate but had not been enacted as of mid-2026 ⚠.

### U.S. states

By 2026, nearly all U.S. states had laws addressing sexual deepfakes, including criminal penalties, civil causes of action, or both. Many also updated child sexual abuse material (CSAM) laws to cover AI-generated images (e.g., California AB 1831, 2024). Details vary widely ⚠.

### European Union

- **Digital Services Act (DSA):** Very large online platforms must assess and mitigate systemic risks, including gender-based violence. The Commission can fine up to 6% of global turnover.
- **EU AI Act, Article 50:** Deployers of systems that generate deepfakes must disclose that the content is artificially generated, from Aug 2, 2026. Providers must mark synthetic content in machine-readable form (with a grace period to Dec 2, 2026 for existing systems under the Omnibus).
- **Directive on combating violence against women (2024/1385):** Criminalizes non-consensual sharing of intimate images, including deepfakes. Member states must transpose it by June 2027.
- **New Article 5 prohibition (AI Omnibus, Regulation (EU) 2026/1744, in force July 27, 2026):** Bans AI systems that generate NCII or CSAM, including general-purpose systems where such output is reasonably foreseeable and reproducible without adequate technical safeguards. Providers of general-purpose image and video tools must assess misuse risks. Transition period until Dec 2, 2026.

### United Kingdom

- **Online Safety Act 2023:** Created an offense of sharing intimate images without consent, including deepfakes (in force from January 2024), and imposes illegal-content duties on platforms, enforced by Ofcom.
- **Creating sexually explicit deepfakes:** Criminalized by the Data (Use and Access) Act 2025 ⚠ (check commencement).
- **Ofcom's Grok investigation** (opened January 2026) tests these duties ⚠.

### Notice-and-removal vs. design duties

| Approach | Example | Strength | Weakness |
|---|---|---|---|
| **Criminal penalties for users** | TAKE IT DOWN; state laws; UK | Deterrence; moral clarity | Hard to identify anonymous users; harm already done |
| **Notice-and-removal** | TAKE IT DOWN platform duties | Fast relief for victims | Reactive; burden on victims to find content; abuse risk |
| **Platform risk duties** | DSA; UK Online Safety Act | Systemic; proactive | Enforcement-intensive; vague standards |
| **Product prohibitions** | EU AI Act Art. 5 (new) | Prevents creation | Line-drawing for general tools; extraterritorial reach |
| **Civil remedies** | State laws; proposed DEFIANCE Act | Victim compensation; private enforcement | Costly litigation; judgment-proof defendants |
| **Hash-matching** | StopNCII.org (adults); NCMEC's Take It Down (minors) | Victims can block uploads without sharing the image | Only works for known images; fails if images are altered |

## Applying the frameworks

- **Rights in tension:** victims' privacy and dignity vs. free expression and due process for posters.
- **Consequences:** Does fast removal reduce harm enough to justify over-removal risk?
- **Justice:** Victims bear the burden of finding and reporting content. Should platforms bear more?
- **Law ≠ ethics:** Platforms can do more than the law requires. What would a decent platform do?

## Discussion questions

1. Is a 48-hour removal deadline without verification a reasonable trade-off between victims' needs and free-speech risks?
2. Should the law target the **tool makers** (EU approach) or the **users and platforms** (U.S. approach)? Which is more effective? Which is more just?
3. Should victims be able to sue AI developers whose tools generated images of them?
4. Imagine a false TAKE IT DOWN request is used to remove a news article about a politician. What safeguards would you add to the law?

## Activity: comparative memo (15 minutes)

A U.S.-based startup with EU users plans an AI photo-editing app. In a half-page memo, summarize (with dates):

1. its obligations under U.S. federal law,
2. likely EU obligations, and
3. three product safeguards you would recommend regardless of legal requirements.

## Key terms

- **Covered platform:** A service subject to TAKE IT DOWN removal duties.
- **Notice-and-removal (notice-and-takedown):** Removing content upon a valid request.
- **Counter-notice:** A process allowing the poster to contest removal (absent in TAKE IT DOWN).
- **Hash-matching:** Identifying copies of known images by digital fingerprint.
- **Systemic risk (DSA):** Platform-wide risks that large platforms must assess and mitigate.

## Connections

- Grok case → 04-04 · Watermarking → 04-07 · EU AI Act → 08-01 · U.S. landscape → 08-02

## Sources and further reading

- TAKE IT DOWN Act, Pub. L. 119-12 (May 19, 2025). ⚠ Confirm the citation. — [Free full text](https://www.govinfo.gov/content/pkg/PLAW-119publ12/pdf/PLAW-119publ12.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r164). <!-- reading-access -->
- IAPP, "TAKE IT DOWN Act: How to comply as the FTC begins enforcement," 2026. — [Partial / preview](https://iapp.org/news/a/take-it-down-act-how-to-comply-as-the-ftc-begins-enforcement); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r165). <!-- reading-access -->
- U.S. Senate Commerce Committee, "Cruz, Klobuchar Mark One Year of TAKE IT DOWN Act as FTC Enforcement Begins," May 2026. — [Free full text](https://www.commerce.senate.gov/press/rep/release/cruz-klobuchar-mark-one-year-of-take-it-down-act-as-ftc-enforcement-begins/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r166). <!-- reading-access -->
- Electronic Frontier Foundation, critiques of TAKE IT DOWN (2025). — [Free full text](https://www.eff.org/files/2025/04/18/take_it_down_act_one_pager_final.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r167). <!-- reading-access -->
- Gibson Dunn, "EU AI Act Omnibus Agreement — Postponed High-Risk Deadlines and Other Key Changes," May 2026; Addleshaw Goddard, "EU AI Act: AI Omnibus formally adopted," July 2026; Hunton, "EU Digital Omnibus on AI Enters into Force," July 2026. — [Gibson Dunn — Free full text](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/); [Addleshaw Goddard — Free full text](https://www.addleshawgoddard.com/en/insights/insights-briefings/2026/technology/eu-ai-act-ai-omnibus-formally-adopted/); [Hunton — Free full text](https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r168). <!-- reading-access -->
- Directive (EU) 2024/1385 on combating violence against women. — [Free official text](https://eur-lex.europa.eu/eli/dir/2024/1385/oj/eng); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r169). <!-- reading-access -->
