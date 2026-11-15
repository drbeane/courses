# 03-03 — Hiring Algorithms: From Résumé Screens to *Mobley v. Workday*

**Module:** 3 — Algorithmic Bias in Consequential Decisions
**Estimated time:** 40 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Describe how AI is used across the hiring funnel and where discrimination can enter.
2. Explain the legal theories in *Mobley v. Workday*, including disparate impact and vendor-as-agent liability.
3. Evaluate disclosure-and-audit regulation, using NYC Local Law 144 as a case.

## Opening case: *Mobley v. Workday* (N.D. Cal., filed 2023)

Derek Mobley, a Black man over 40 with anxiety and depression, holds a degree in finance and applied for more than 100 jobs at companies that used Workday's applicant-screening platform. He alleges he was rejected every time, sometimes within an hour, at night, suggesting automation rather than human review.

Instead of suing the employers, Mobley sued **Workday**, the software vendor. Key developments:

- **July 2024:** The court allowed claims to proceed on the theory that Workday may act as an **agent** of employers, delegated a hiring function and therefore potentially liable under federal anti-discrimination law. It rejected the theory that Workday is an "employment agency."
- **May 2025:** The court conditionally certified a nationwide **collective action** for age-discrimination claims (ADEA) on behalf of applicants aged 40 and over who were rejected through Workday's AI recommendation features.
- **2026:** Litigation continues, including disputes over which employers used the AI features. A class-certification hearing on broader claims is reported for March 2027 ⚠.

Workday denies wrongdoing. It says its tools don't make hiring decisions, that customers control their processes, and that its tools assess job-related qualifications, not protected traits. Reuters reports Workday is used by about two-thirds of Fortune 500 companies.

*The allegations have not been proven. The case is significant for its legal theory: AI vendors may be directly liable for discriminatory outcomes.*

## Core ideas

### AI across the hiring funnel

| Stage | AI use | Risk |
|---|---|---|
| Sourcing | Targeted job ads; candidate search | Ads shown unequally by gender or age (Facebook settlements, 2019 and 2022) |
| Screening | Résumé parsing, ranking, knockout questions | Proxy discrimination; disability screening-out |
| Assessment | Games, personality tests, video and voice analysis | Weak validity; disability (03-04) |
| Interview | AI interviewers; transcription and scoring | Accent, speech and neurodivergence bias |
| Selection | Ranking final candidates | Automation bias |
| Post-hire | Performance prediction; attrition risk | Workplace surveillance (05-04) |

### The Amazon lesson (2018)

Reuters reported that Amazon built an experimental résumé-ranking model trained on 10 years of résumés, mostly from men. The model learned to downgrade résumés containing "women's" (as in "women's chess club captain") and graduates of two all-women's colleges. Engineers edited out those terms but couldn't guarantee the model wouldn't find other proxies. Amazon abandoned the tool.

**Lesson:** Historical hiring data encodes historical hiring bias (03-01).

### LLM-based screening (2024–2026)

As employers use LLMs to rank résumés, new studies show name-based disparities:

- Bloomberg (2024) found GPT-3.5 ranked otherwise-identical résumés differently by name-associated race and gender.
- Wilson & Caliskan (University of Washington, 2024) found three LLMs favored white-associated names in 85% of comparisons and never favored Black male-associated names over white male-associated names.

Results vary by model and prompt, which is exactly why **local testing** of the deployed configuration matters.

### Legal framework (U.S., as of October 2026 ⚠)

- **Title VII, ADEA, ADA:** These prohibit disparate treatment and disparate impact. They apply whether a human or an algorithm screens, and the employer remains liable.
- **Disparate impact:** A neutral practice with an adverse effect on a protected group is unlawful unless it is job-related and consistent with business necessity, *and* no less discriminatory alternative exists.
- **Federal enforcement posture:** The EEOC's 2023 technical guidance on AI and Title VII was removed from its website in early 2025, and a 2025 executive order directed agencies to deprioritize disparate-impact enforcement. **The statutes and private rights of action remain.**
- **State and local laws:**
  - **NYC Local Law 144** (enforced from July 2023): Employers using automated employment decision tools (AEDTs) must commission an annual independent **bias audit** (selection rates and impact ratios by sex and race/ethnicity), publish a summary and notify candidates.
  - **Illinois:** The AI Video Interview Act (2020). HB 3773 (effective Jan 1, 2026) amends the Human Rights Act to prohibit AI use that results in discrimination and to require notice.
  - **Colorado:** Its 2024 AI Act was repealed before taking effect. The replacement (SB 26-189, effective Jan 1, 2027) requires employers using automated decision-making technology in hiring and other employment decisions to give notice, explain adverse decisions within 30 days, and offer human review where commercially reasonable (see 08-02).
  - **California:** Civil Rights Council regulations on automated decision systems in employment took effect Oct 1, 2025.

### Does disclosure-and-audit work? The LL144 record

A December 2025 audit by the New York State Comptroller found:

- Over two years, the city's Department of Consumer and Worker Protection (DCWP) received only **two** complaints about AEDTs.
- DCWP reviewed 32 companies and found one issue. State auditors reviewing the same companies found at least **17** potential instances of non-compliance.
- DCWP lacked technical expertise and didn't consult the city's technology office.
- Enforcement relied almost entirely on complaints, which candidates can't file if they don't know an AEDT was used.

Earlier research (Wright et al., 2024) found few employers posted audits. The law also lets employers decide whether their tool "substantially assists" decisions, so many concluded it didn't apply to them.

**Lesson:** Transparency rules without enforcement capacity, technical expertise or an obvious way for affected people to know they were harmed have limited effect.

## Applying the frameworks

- **Justice (procedural):** Applicants rejected by AI rarely know why or how to contest it.
- **Accountability (08-05):** *Mobley*'s agent theory spreads responsibility to vendors, who design the systems used by thousands of employers.
- **Consequences:** Efficient screening of huge applicant pools is a real benefit, but errors replicate at scale across many employers at once ("algorithmic monoculture").
- **Decency:** Mass rejection without explanation, sometimes within minutes, treats applicants as inputs rather than people.

## Discussion questions

1. Should AI vendors be liable for discrimination by their tools, or only the employers who use them? Consider both fairness and incentives.
2. If many employers use the same vendor, one applicant may be rejected everywhere by the same model. What are the ethical implications of this "monoculture"?
3. NYC LL144 requires audits but doesn't require passing them. Is that a design flaw or a reasonable first step?
4. Prepare for the Week 3 debate: *Employers should be prohibited from using AI to screen out job applicants without human review of every rejection.* What are the strongest arguments on each side?

## Activity: read a bias audit (15 minutes)

Find one publicly posted NYC LL144 bias audit summary (search "AEDT bias audit summary" plus an employer name), or use the fictional teaching sample in `_Instructor/03 - Sample Bias Audit Summary (Fictional).md`. Record:

1. the impact ratios reported,
2. whether any fall below 0.8,
3. what the audit does **not** tell you (intersectional groups, disability, age), and
4. whether a rejected applicant could use this information.

## Key terms

- **AEDT:** Automated employment decision tool (NYC term).
- **Disparate treatment / disparate impact:** Intentional differential treatment / a neutral practice with discriminatory effect.
- **Agent liability:** Holding a vendor liable as the employer's delegated agent.
- **Collective action:** A group lawsuit (here under the ADEA) where members opt in.
- **Algorithmic monoculture:** Many decision-makers relying on the same model, so its errors are correlated.

## Connections

- Bias sources → 03-01 · Metrics → 03-02 · Disability → 03-04 · Lab → 03-10 · Accountability → 08-05 · Procurement → 08-07
- A1 Week 3 debate; A2 scenario 2

## Sources and further reading

- *Mobley v. Workday, Inc.*, No. 3:23-cv-00770 (N.D. Cal.): order on motion to dismiss (July 12, 2024); order on collective certification (May 16, 2025). — [Free full text](https://clearinghouse.net/case/44074/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r104). <!-- reading-access -->
- TheGrio, "Black workers challenge AI hiring platform…," Sep 24, 2026. ⚠ — [Free full text](https://thegrio.com/2026/09/24/workday-ai-hiring-discrimination-lawsuit/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r105). <!-- reading-access -->
- Dastin, J. "Amazon scraps secret AI recruiting tool that showed bias against women," Reuters, Oct 10, 2018. — [Free full text](https://www.investing.com/news/stock-market-news/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-1637988); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r106). <!-- reading-access -->
- NYS Office of the State Comptroller, *Enforcement of Local Law 144 — Automated Employment Decision Tools*, Report 2024-N-6 (Dec 2, 2025). — [Free full text](https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r107). <!-- reading-access -->
- Wilson, K. & Caliskan, A. "Gender, Race, and Intersectional Bias in Resume Screening via Language Model Retrieval," *AIES 2024*. — [Free manuscript](https://arxiv.org/abs/2407.20371); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r108). <!-- reading-access -->
- Raghavan, M. et al. "Mitigating Bias in Algorithmic Hiring," *FAT\* 2020*. — [Free manuscript](https://arxiv.org/abs/1906.09208); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r109). <!-- reading-access -->
