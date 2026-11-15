# 03-04 — AI Interviews, Personality Inference, and Disability

**Module:** 3 — Algorithmic Bias in Consequential Decisions
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Evaluate the scientific validity of AI assessment of video, voice and game-based behavior.
2. Explain how AI hiring tools can "screen out" people with disabilities, and what reasonable accommodation requires.
3. Apply dignity-based critiques to AI interview practices.

## Opening case: the interviewer that read your face

From the mid-2010s, HireVue, among the largest providers of video interview platforms, offered AI that analyzed candidates' facial expressions, word choice and vocal features to predict job performance. In 2019, the Electronic Privacy Information Center (EPIC) filed an FTC complaint calling the facial analysis unfair and deceptive and unsupported by science. In January 2021, HireVue announced it had stopped using facial analysis, citing an independent audit and public concern. It continued to analyze speech and language.

By 2026, a new generation of **AI interviewers**, conversational agents that conduct entire first-round interviews by voice or video, had become common in high-volume hiring. Some vendors advertise that they assess "soft skills," "culture fit" or "communication."

## Core ideas

### Validity: does it measure what it claims?

In industrial-organizational psychology, a selection tool should show:

- **Construct validity:** It measures a real, job-relevant trait.
- **Criterion validity:** Its scores predict actual job performance.
- **Fairness across groups:** It predicts equally well for different groups.

Problems with many AI assessments:

- **Emotion and personality from faces:** The scientific basis is weak (Barrett et al., 2019; 02-09).
- **Opaque features:** A model may score lighting, background, accent or camera quality.
  - In a 2021 investigation, Bayerischer Rundfunk journalists found that one video-assessment tool's personality scores changed when the same actor wore glasses or a headscarf, or when a bookshelf appeared in the background.
- **Gamified assessments:** These claim to measure cognitive and emotional traits, but validation studies are often vendor-run and unpublished.
- **Proxy for "people like our current employees":** Training on incumbents' traits reproduces the existing workforce.

### Disability and "screening out"

The ADA prohibits selection criteria that **screen out** individuals with disabilities unless the criteria are job-related and consistent with business necessity. It requires **reasonable accommodation** in the application process.

How AI tools screen out disabled applicants:

| Feature | Affected group |
|---|---|
| Eye contact or facial expression analysis | Autistic people; blind people; people with facial differences or paralysis |
| Speech pace, fluency, tone | People who stutter; Deaf speakers; people with speech disabilities; non-native speakers |
| Timed games or reaction tests | People with motor, visual or processing disabilities |
| Gap-in-employment penalties | People who took medical leave |
| Personality "fit" | Neurodivergent people; people with psychiatric disabilities |

The problem is often invisible: rejected applicants don't know which feature caused it, and disability status is rarely recorded, so audits like NYC LL144's (sex and race only) don't detect it.

**Guidance:** The EEOC's May 2022 technical assistance, *The ADA and the Use of Software, Algorithms, and AI to Assess Job Applicants and Employees*, advised employers to tell applicants about AI assessments, offer accommodations and alternatives, and avoid tools that measure traits rather than job skills. ⚠ Check the current status, since some EEOC AI guidance was withdrawn in 2025. The underlying ADA obligations are statutory.

### Dignity and the "performing for the machine" problem

Even a valid tool raises dignity questions (01-04):

- Applicants coach themselves to perform for algorithms (smile more, use keywords, look at the camera) rather than communicate authentically.
- Interviews by AI remove the reciprocal human exchange, so candidates can't read or question the interviewer.
- People report feeling judged by an opaque system they can't reason with.

Some argue AI interviews are **more** fair than human interviewers, who are known to be biased by appearance, accent and similarity. Structured human interviews have strong validity evidence. The question is whether AI interviews replicate structure or introduce new biases.

### Regulation

- **EU AI Act:** Emotion recognition in the workplace, including hiring, is prohibited (Art. 5(1)(f)). AI for recruitment and selection is **high-risk** (Annex III), with obligations delayed to Dec 2027 under the 2026 Omnibus ⚠.
- **Illinois AI Video Interview Act (2020):** Requires notice, an explanation of how the AI works, consent and deletion on request. Applies if video interviews are analyzed by AI.
- **Maryland HB 1202 (2020):** Requires consent before using facial recognition in interviews.

## Applying the frameworks

- **Justice:** Disability is often missing from fairness audits, so it remains invisible in the data.
- **Autonomy and dignity:** Being assessed on involuntary features (micro-expressions, voice) rather than chosen communication.
- **Consequences:** Scale. A single invalid tool rejects thousands.
- **Decency:** Offering accommodations and human alternatives is a low-cost way to give "reasonable weight" to others.

## Discussion questions

1. Is an AI interviewer more or less fair than an unstructured human interview? What evidence would settle the question?
2. Should employers be required to offer a non-AI alternative to any applicant who asks?
3. If a tool measures "enthusiasm" and enthusiasm genuinely predicts sales performance, is it acceptable even if it disadvantages some autistic applicants? What would the ADA say? What would you say?
4. How should audits detect disability discrimination when disability data isn't collected?

## Activity: accommodation design (15 minutes)

An employer uses an AI voice interviewer for customer-service roles. Draft:

1. the notice applicants receive (three to four sentences, plain language),
2. the accommodation request process, and
3. two alternatives for applicants who request one.

Then identify one remaining risk your design doesn't address.

## Key terms

- **Construct / criterion validity:** Measuring a real trait / predicting real outcomes.
- **Screen out (ADA):** Excluding an individual with a disability through a selection criterion.
- **Reasonable accommodation:** Adjustments enabling equal opportunity, including in hiring.
- **Structured interview:** Standardized questions and scoring, which are better validated than unstructured interviews.

## Connections

- Emotion inference → 02-09 · Hiring law → 03-03 · EU prohibitions → 08-01

## Sources and further reading

- EPIC, complaint to FTC regarding HireVue (Nov 2019); HireVue announcement (Jan 2021). — [EPIC complaint — Free full text](https://epic.org/documents/in-re-hirevue/); [HireVue January 2021 announcement — Free full text](https://www.hirevue.com/blog/hiring/industry-leadership-new-audit-results-and-decision-on-visual-analysis); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r110). <!-- reading-access -->
- Bayerischer Rundfunk, "Objective or Biased: On the questionable use of AI for job applications" (Feb 2021). — [Free full text](https://interaktiv.br.de/ki-bewerbung/en/index.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r111). <!-- reading-access -->
- U.S. EEOC, *The ADA and the Use of Software, Algorithms, and AI to Assess Job Applicants and Employees* (May 2022). ⚠ Status. — [Free archived full text](https://data.aclum.org/storage/2025/01/EOCC_www_eeoc_gov_laws_guidance_americans-disabilities-act-and-use-software-algorithms-and-artificial-intelligence.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r112). <!-- reading-access -->
- Whittaker, M. et al. *Disability, Bias, and AI* (AI Now Institute, 2019). — [Free full text](https://ainowinstitute.org/wp-content/uploads/2023/04/disabilitybiasai-2019.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r113). <!-- reading-access -->
- Raji, I.D. et al. "The Fallacy of AI Functionality," *FAccT 2022*. — [Free manuscript](https://arxiv.org/abs/2206.09511); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r114). <!-- reading-access -->
