# 02-06 — Scraped Faces: Clearview AI and Biometric Privacy Law

**Module:** 2 — Surveillance, Biometrics, and Privacy
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Summarize the Clearview AI case and the international regulatory response.
2. Explain the structure and impact of the Illinois Biometric Information Privacy Act (BIPA) and similar laws.
3. Evaluate the argument that collecting public images is protected speech or legitimate research.

## Opening case: the company that "searched the internet for your face"

Clearview AI, founded in 2017, built a face search engine by scraping billions of images from social media, news sites and other public web pages. A user uploads a photo, and Clearview returns other photos of that face with links to where they appear. This often reveals a name, workplace, friends and more.

- **Exposure:** The *New York Times* revealed Clearview in January 2020 (Kashmir Hill). Thousands of police agencies had used it, many through free trials and often without supervisors' knowledge.
- **2022 ACLU settlement (Illinois):** Clearview agreed not to sell its database to most private companies in the U.S. nationwide, and not to Illinois state or local agencies for five years.
- **Regulators abroad:** The UK ICO, France's CNIL, Italy's Garante, Greece's DPA and the Dutch Autoriteit Persoonsgegevens (a €30.5M fine in 2024) found GDPR violations and ordered deletion of residents' data. Clearview contested several decisions and has largely not paid.
- **UK:** In 2023 the First-tier Tribunal overturned the ICO's £7.5M fine on jurisdictional grounds. In **October 2025**, the Upper Tribunal reversed that ruling, holding that UK data-protection law does reach Clearview's scraping of UK residents' images, and sent the case back to decide the merits. Clearview was granted permission to appeal to the Court of Appeal in December 2025 ⚠.
- **2025 class settlement:** A U.S. multidistrict class settlement gave affected people a percentage stake in the company in place of cash, a novel remedy criticized for tying victims' compensation to the company's commercial success ⚠.

## Core ideas

### Why biometrics are special

Biometric identifiers (face geometry, fingerprints, iris and voiceprints) are special because:

- **They are permanent.** You can change a password, not your face.
- **They are hard to hide.** Your face is exposed every time you go outside.
- **They are linkable.** A face links online and offline identities.
- **They can be collected covertly** at a distance.
- **They are sensitive.** Faces can reveal or be used to infer other traits.

### Illinois BIPA (2008)

BIPA requires private entities to:

1. inform people in writing that biometric data is being collected, why, and for how long,
2. obtain **written release** (consent),
3. publish a retention and destruction policy,
4. not sell or profit from biometric data, and
5. protect the data with reasonable care.

Critically, BIPA gives individuals a **private right of action**, with $1,000 in damages per negligent violation and $5,000 per intentional or reckless violation.

**Impact:**

- **Facebook (2021):** a $650M settlement over face-tagging suggestions.
- **Google, TikTok, Snapchat:** settlements in the tens to hundreds of millions.
- **Clearview (2022):** the ACLU settlement above.
- ***Cothron v. White Castle* (Ill. 2023):** The court held that each scan was a separate violation, implying potentially enormous liability. The legislature amended BIPA in 2024 to limit damages to one recovery per person per collection method.

**Other U.S. laws:**

- **Texas CUBI:** No private right of action, but Texas AG settlements include Meta for $1.4B (2024) and Google for $1.375B (2025, privacy claims including biometrics).
- **Washington:** a biometric law, plus the My Health My Data Act.
- **Comprehensive state privacy laws:** Many treat biometric data as "sensitive data" requiring opt-in consent.

### GDPR approach

Under GDPR, biometric data processed to uniquely identify a person is **special category data** (Art. 9). Processing it is prohibited unless an exception applies, such as explicit consent or substantial public interest under law. Scraping public photos to build a face search engine meets no exception, which is why EU regulators ordered deletion. The EU AI Act separately **prohibits** untargeted scraping of facial images from the internet or CCTV to create or expand facial recognition databases (Art. 5(1)(e), in force since Feb 2025).

### Clearview's defenses

1. **First Amendment:** Collecting and analyzing public information is speech. (Clearview hired Floyd Abrams to make this argument. An Illinois court rejected its dismissal motion in 2021.)
2. **Public safety:** It helps solve crimes, including child-exploitation cases, and identified suspects in the January 6 Capitol riot.
3. **Search-engine analogy:** "We're Google for faces."
4. **No new harm:** The images were already public.

### Counterarguments

- Converting images to faceprints is a new act, not mere viewing (contextual integrity, 02-01).
- Search engines index pages people publish. They don't make bodies searchable.
- Public-safety benefits don't require private, unregulated databases.
- The harm is the capability itself: anyone with access can identify strangers on the street, including stalkers and abusers.

### The capability has spread

Other face search engines (PimEyes, FaceCheck.ID) are available to the public for a fee. In 2024, two Harvard students demonstrated Meta Ray-Ban glasses streaming to a face search engine, identifying strangers in real time (Lesson 02-08). The question is no longer whether this can be built, but who may use it and how.

## Applying the frameworks

- **Deontology:** Converting someone's face into a searchable identifier without consent treats them merely as a means.
- **Consequences:** Investigative benefits vs. stalking, harassment and the loss of anonymity.
- **Justice:** Remedies (equity in the company, unpaid fines) may not match the harm.
- **Law ≠ ethics:** Legal in much of the U.S.; illegal in the EU and Illinois.

## Discussion questions

1. Should collecting publicly posted images to build a face search engine be legal? Should using one be?
2. BIPA's private right of action has produced large settlements. Is litigation a good way to regulate technology?
3. Should journalists and researchers have exemptions for face search? Under what conditions?
4. Would you use PimEyes on yourself to see where your face appears? On someone else? What's the difference?

## Activity: comparative law table (15 minutes)

Complete the table for a company wanting to offer face search to retail stores:

| Jurisdiction | Allowed? | Conditions | Penalty risk |
|---|---|---|---|
| Illinois | | | |
| Texas | | | |
| EU | | | |
| A state with no biometric law | | | |

Include an "as of" date and one source for each row.

## Key terms

- **Biometric identifier:** A biological or behavioral characteristic used to identify someone.
- **Faceprint:** A facial template.
- **Private right of action:** The ability of individuals to sue directly for violations.
- **Special category data (GDPR):** Sensitive data, including biometrics used for identification.

## Connections

- Contextual integrity → 02-01 · Smart glasses → 02-08 · EU AI Act prohibitions → 08-01
- A2 authority memo

## Sources and further reading

- Hill, K. *Your Face Belongs to Us: A Secretive Startup's Quest to End Privacy as We Know It* (2023). — [Paid / library](https://www.penguinrandomhouse.com/books/691288/your-face-belongs-to-us-by-kashmir-hill/9780593448571/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r066). <!-- reading-access -->
- ACLU v. Clearview AI settlement (May 2022). — [Free full text](https://www.aclu.org/cases/aclu-v-clearview-ai); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r067). <!-- reading-access -->
- Dutch DPA (Autoriteit Persoonsgegevens), Clearview decision (Sept 2024). — [Free full text](https://autoriteitpersoonsgegevens.nl/en/current/dutch-dpa-imposes-a-fine-on-clearview-because-of-illegal-data-collection-for-facial-recognition); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r068). <!-- reading-access -->
- Illinois BIPA, 740 ILCS 14; SB 2979 amendment (2024). — [Free official text](https://www.ilga.gov/Legislation/publicacts/view/103-0769); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r069). <!-- reading-access -->
- EU AI Act Art. 5(1)(e); GDPR Art. 9. — [AI Act — Free official text](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng); [GDPR — Free official text](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r070). <!-- reading-access -->
- UK ICO, "UK Upper Tribunal hands down judgment on Clearview AI Inc," Oct 8, 2025 (updated Dec 19, 2025). — [Free full text](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/10/uk-upper-tribunal-hands-down-judgment-on-clearview-ai-inc/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r071). <!-- reading-access -->
- ⚠ Status of the 2025 Clearview class settlement and the UK Court of Appeal: verify before teaching. — [US settlement administrator — Free full text](https://www.clearviewclassaction.com/Home/FAQ); [2026 US appellate opinion — Free full text](https://law.justia.com/cases/federal/appellate-courts/ca7/25-1673/25-1673-2026-07-13.html); [UK appeal hearing listing — Free full text](https://www.judiciary.uk/the-court-of-appeal-civil-division-live-streaming-of-court-hearings/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r072). <!-- reading-access -->
