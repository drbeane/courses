# 02-02 — The Surveillance Economy and Data Brokers

**Module:** 2 — Surveillance, Biometrics, and Privacy
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Describe how data is collected, combined and sold across the commercial data ecosystem.
2. Explain why AI raises the value of personal data and changes its risks.
3. Evaluate notice-and-consent as a governance model.

## Opening case: where your location goes

In 2024, the U.S. Federal Trade Commission (FTC) took action against several data brokers, including X-Mode/Outlogic, InMarket, Kochava, Mobilewalla and Gravy Analytics. It alleged that they collected precise location data from phone apps and sold it in ways that could reveal visits to medical clinics, places of worship, domestic-violence shelters and military bases. Under the resulting orders, several firms are banned from selling sensitive location data.

None of the people tracked had a relationship with these brokers. Their data came from weather apps, games and prayer apps, often through software development kits (SDKs) embedded in the apps and through real-time advertising auctions.

## Core ideas

### The data supply chain

```
Apps / websites / devices / cars / stores
        ↓   (SDKs, cookies, pixels, sensors, purchases)
Ad-tech and data brokers   ← public records, scraped data
        ↓   (combine, match identities, infer segments)
Buyers: advertisers, insurers, landlords, employers, political campaigns, government agencies
        ↓
AI models trained on, or making decisions with, the data
```

Key mechanisms:

- **SDKs:** Code from third parties inside apps that can collect data independently of the app's own purpose.
- **Real-time bidding (RTB):** Every ad load can broadcast data about the user to many bidders, and losing bidders may retain it.
- **Identity resolution:** Matching data across devices and sources into a single profile.
- **Inferred segments:** "Expectant parent," "financially vulnerable," "likely diabetic."

### What AI changes

- **The value of data increases:** More data generally improves models, and companies treat user data as training fuel.
- **Inference gets cheaper:** Models can predict sensitive traits from proxies (Lesson 02-09).
- **Unstructured data becomes legible:** Voice, images, video and free text, once hard to analyze, are now searchable and summarizable.
- **Terms of service change retroactively:** In 2023–2025, many platforms updated their terms to permit AI training on user content, often with opt-outs that were hard to find.
- **Government use expands:** Agencies can buy data from brokers that would otherwise require a warrant, the so-called "data broker loophole."

### Shoshana Zuboff's "surveillance capitalism"

Zuboff (2019) argues that firms like Google and Facebook discovered that behavioral data, beyond what is needed to serve users, could predict and shape behavior. They then sold those predictions. Her key claims:

- Human experience becomes raw material for prediction products.
- The goal is not merely to know but to modify behavior.
- It is a new form of power, operating outside traditional consent or democratic oversight.

**Critiques:** Some economists argue Zuboff overstates how well targeted advertising works. Others say the problem is ordinary market power rather than a new economic logic. Both critiques still accept that the data practices are extensive.

### Notice and consent: why it struggles

U.S. privacy law has traditionally relied on telling people what happens and letting them choose. Problems:

- Reading every privacy policy you encounter would take an estimated 76 workdays a year (McDonald & Cranor, 2008, and the number has grown since).
- Choices are often all-or-nothing.
- "Dark patterns" steer people toward sharing.
- Data flows to parties users never heard of.
- Future AI uses can't be described in advance.

### Alternatives and reforms

| Approach | Example |
|---|---|
| **Data minimization** (collect only what's necessary) | GDPR Art. 5; Maryland Online Data Privacy Act (2024), among the strictest U.S. state laws |
| **Purpose limitation** | GDPR; no reuse for incompatible purposes |
| **Sensitive-data bans** | FTC orders on location data; state laws on health data (e.g., Washington My Health My Data Act, 2023) |
| **Broker registries and deletion** | California Delete Act: one-stop deletion request from all registered brokers (DROP platform, launched in 2026) ⚠ |
| **Restrictions on government purchase** | Proposed Fourth Amendment Is Not For Sale Act (passed the House in 2024; not enacted ⚠) |
| **Duty of loyalty** | Proposals that firms must not use data against users' interests |

## Applying the frameworks

- **Contextual integrity (02-01):** A prayer app's location data sold to a broker violates the norms of religious practice.
- **Justice:** Inferred "financially vulnerable" segments can be used to target predatory loans.
- **Autonomy:** Behavioral manipulation undermines self-determination.
- **Decency, others lens:** Selling shelter-visit data endangers people at their most vulnerable.

## Discussion questions

1. Should government agencies be allowed to buy data they would need a warrant to collect directly? Why or why not?
2. Is it ethical for a platform to change its terms to allow AI training on content uploaded years earlier? What would a decent company do?
3. Is targeted advertising itself unethical, or only some forms? Where is the line?
4. If you were designing a free app, how would you fund it without selling user data?

## Activity: trace an app (15 minutes)

Choose an app on your phone. Using its privacy policy and, if available, its App Store "privacy nutrition label" or Google Play "data safety" section:

1. List the data types collected.
2. List the third parties named or implied.
3. Find whether user content may be used for AI training.
4. Rate how well the policy would let an average user understand the actual flows (1–5).

## Key terms

- **Data broker:** A company that collects and sells personal data about people with whom it has no direct relationship.
- **SDK:** Software development kit; third-party code embedded in apps.
- **Real-time bidding:** The automated auction for ad placements that broadcasts user data.
- **Data minimization:** Collecting only data necessary for a stated purpose.
- **Dark pattern:** An interface designed to manipulate user choices.

## Connections

- Inference → 02-09 · Training data and consent → 04-09 · Governance design → 02-10
- A2 data-flow diagram

## Sources and further reading

- FTC, actions against X-Mode/Outlogic (Jan 2024), InMarket (Jan 2024), Kochava (ongoing), Mobilewalla and Gravy Analytics (Dec 2024). — [X-Mode / Outlogic — Free full text](https://www.ftc.gov/legal-library/browse/cases-proceedings/2123038-x-mode-social-inc); [InMarket — Free full text](https://www.ftc.gov/legal-library/browse/cases-proceedings/2023088-inmarket-media-llc); [Kochava — Free full text](https://www.ftc.gov/legal-library/browse/cases-proceedings/ftc-v-kochava-inc); [Mobilewalla order — Free full text](https://www.ftc.gov/system/files/ftc_gov/pdf/Mobilewalla-D%26O.pdf); [Gravy / Venntel case documents — Free full text](https://www.ftc.gov/system/files/ftc_gov/pdf/212_3035_-_gravy_analytics_final_consent_package_without_signatures.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r045). <!-- reading-access -->
- Zuboff, S. *The Age of Surveillance Capitalism* (2019), Introduction and Chapter 3. — [Paid / library](https://www.hachettebookgroup.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781610395700/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r046). <!-- reading-access -->
- McDonald, A. & Cranor, L. "The Cost of Reading Privacy Policies," *I/S* 4(3), 2008. — [Free manuscript](https://cyberlaw.stanford.edu/content/files/pubs/readingpolicycost-authordraft.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r047). <!-- reading-access -->
- California Privacy Protection Agency, Delete Act / DROP information. ⚠ Verify the launch status. — [Free online tool](https://consumer.drop.privacy.ca.gov/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r048). <!-- reading-access -->
- Hwang, T. *Subprime Attention Crisis* (2020), a counterpoint on ad effectiveness. — [Paid / library](https://us.macmillan.com/books/9780374538651/subprimeattentioncrisis); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r049). <!-- reading-access -->
