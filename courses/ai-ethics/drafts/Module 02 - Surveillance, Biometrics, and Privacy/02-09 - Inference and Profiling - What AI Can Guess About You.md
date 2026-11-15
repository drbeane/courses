# 02-09 — Inference and Profiling: What AI Can Guess About You

**Module:** 2 — Surveillance, Biometrics, and Privacy
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain how machine learning infers sensitive attributes from non-sensitive data.
2. Explain why anonymization often fails, and what re-identification means.
3. Evaluate legal and ethical approaches to inferred data and "pseudoscientific" inference.

## Opening case: the model knew before her father did

A widely retold 2012 *New York Times* story described Target's statisticians building a "pregnancy prediction" score from purchases of products like unscented lotion, supplements and cotton balls. The story includes an anecdote about a father who complained that Target was mailing his teenage daughter baby-product coupons, only to learn she was pregnant.

The anecdote may be embellished. Data scientists have questioned its details. But the underlying capability is real and has only grown. You don't have to tell a company something sensitive for it to know.

## Core ideas

### Inference from proxies

ML models find correlations. Some correlations reveal attributes people never disclosed:

| From | Models have been shown to infer |
|---|---|
| Facebook "likes" | Sexual orientation, political views, religion, personality (Kosinski et al., 2013) |
| Typing and mouse patterns | Some neurological conditions (research settings) |
| Phone sensor and location data | Depression indicators; routines; home and work addresses |
| Voice | Age, sex, emotional state; claimed health conditions (variable validity) |
| Purchases | Pregnancy; financial stress |
| Writing style | Authorship (de-anonymization) |
| Chat histories | Almost anything a person discusses |

LLMs make this easier. A 2023 study (Staab et al., "Beyond Memorization") found frontier models could infer location, income, age and other attributes from ordinary Reddit comments with high accuracy, at a small fraction of the cost and time of human analysts.

### Re-identification

"Anonymized" or "de-identified" data often isn't:

- **Latanya Sweeney (1997–2000):** 87% of Americans could be uniquely identified by ZIP code, birth date and sex. She identified the Massachusetts governor's medical records from "anonymized" hospital data.
- **AOL search logs (2006):** Reporters identified "User 4417749" from her searches.
- **Netflix Prize (2008):** Narayanan and Shmatikov re-identified users by matching anonymous ratings with public IMDb reviews.
- **Location traces:** Four spatio-temporal points uniquely identify 95% of people in a mobile dataset (de Montjoye et al., 2013).

AI makes linking easier. Models can match writing style, faces, gait and behavior across datasets.

### Inferred data and the law

Is an *inference* personal data? Under GDPR, generally yes, if it relates to an identifiable person. The California Consumer Privacy Act (CCPA) expressly includes "inferences drawn" to create profiles. Rights to access and correct inferences remain weak in practice:

- Inferences are often not disclosed.
- Inferences are probabilistic ("72% likely"), which makes "correction" conceptually odd.
- Inferences may be trade secrets.

Wachter and Mittelstadt (2019) proposed a "right to reasonable inferences": that high-risk inferences be justified as relevant, reliable and acceptable.

### Pseudoscientific inference

Some claimed inferences have weak or no scientific basis:

- **Emotion recognition from faces:** A 2019 review (Barrett et al.) found facial expressions are not reliable indicators of internal emotional states across people and cultures. The EU AI Act **prohibits** emotion recognition in workplaces and schools, except for medical or safety reasons (Art. 5(1)(f)).
- **"Criminality" or sexual orientation from faces:** Published claims (Wu & Zhang, 2016; Wang & Kosinski, 2018) were heavily criticized for confounds such as photo source, grooming and expression, and for reviving physiognomy.
- **Personality from video interviews:** Weak validity (Lesson 03-04).

Two separate ethical problems:

1. **When inference works**, it violates privacy.
2. **When it doesn't work but is used anyway**, it harms people through false judgments.

Both problems can occur at once.

### Group privacy

Inferences harm groups, not just individuals. A model that predicts sexual orientation or immigration status can be used to target communities, even if no individual's data was "breached." In some countries, inferred sexual orientation or political views are dangerous to life and liberty.

## Applying the frameworks

- **Autonomy:** People lose control over self-presentation, over who knows what about them.
- **Justice:** Inferences can enable discrimination that would be illegal if done directly (03-05).
- **Non-maleficence:** Some inference capabilities may be too dangerous to develop or deploy.
- **Explicability:** Can a person learn what has been inferred about them?

## Discussion questions

1. Should companies be prohibited from inferring certain attributes (health, sexual orientation, religion) even if they never act on them?
2. Is research demonstrating that a sensitive inference is *possible* ethical? What responsibilities do such researchers have?
3. If an LLM can infer your location and income from your writing, what does that mean for "anonymous" online speech?
4. Should inferences be treated as the company's opinion (protected) or as personal data about you (yours to access and correct)?

## Activity: inference test (15 minutes)

Using only your own public writing (an anonymized discussion post or a public review you wrote), ask an AI assistant: "Based only on this text, what can you infer about the author's age, location, occupation and background?" Record:

1. what it inferred,
2. what was correct, and
3. how that makes you feel about "anonymous" posting.

**Use only your own text.** Don't do this with anyone else's writing.

## Key terms

- **Inference:** A derived conclusion about a person from data.
- **Proxy:** An observable variable correlated with an unobserved attribute.
- **Re-identification:** Linking "anonymous" data back to a specific person.
- **Group privacy:** Privacy interests of groups affected by collective inferences.
- **Physiognomy:** The discredited practice of judging character from appearance.

## Connections

- Proxies in discrimination → 03-01, 03-05 · Emotion recognition in hiring → 03-04 · EU prohibitions → 08-01

## Sources and further reading

- Duhigg, C. "How Companies Learn Your Secrets," *New York Times Magazine*, Feb 16, 2012 (treat the anecdote critically). — [Retrieval blocked](https://www.nytimes.com/2012/02/19/magazine/shopping-habits.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r083). <!-- reading-access -->
- Kosinski, M., Stillwell, D. & Graepel, T. "Private traits and attributes are predictable from digital records of human behavior," *PNAS* 110 (2013). — [Free full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC3625324/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r084). <!-- reading-access -->
- Staab, R. et al. "Beyond Memorization: Violating Privacy via Inference with Large Language Models," *ICLR 2024*. — [Free manuscript](https://arxiv.org/abs/2310.07298); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r085). <!-- reading-access -->
- Sweeney, L. "Simple Demographics Often Identify People Uniquely," Carnegie Mellon (2000). — [Free manuscript](https://kilthub.cmu.edu/articles/journal_contribution/Simple_Demographics_Often_Identify_People_Uniquely/6625769); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r086). <!-- reading-access -->
- Barrett, L.F. et al. "Emotional Expressions Reconsidered," *Psychological Science in the Public Interest* 20(1), 2019. — [Free full text](https://pmc.ncbi.nlm.nih.gov/articles/6640856/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r087). <!-- reading-access -->
- Wachter, S. & Mittelstadt, B. "A Right to Reasonable Inferences," *Columbia Business Law Review* (2019). — [Free full text](https://journals.library.columbia.edu/index.php/CBLR/article/download/3424/1370/5776); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r088). <!-- reading-access -->
