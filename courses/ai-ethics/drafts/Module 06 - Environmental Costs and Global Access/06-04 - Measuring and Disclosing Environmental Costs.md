# 06-04 — Measuring and Disclosing Environmental Costs

**Module:** 6 — Environmental Costs and Global Access
**Estimated time:** 35 minutes

**In this lesson:** The same company's emissions can be reported as two very different numbers, both following the accepted rules. This lesson explains the rules for counting emissions, what companies' disclosures usually leave out, what the law now requires, and the questions to ask of any environmental claim about AI.

## Two Numbers for the Same Emissions

A technology company's sustainability report can show two very different figures for the emissions from the electricity it uses.

A **location-based** figure uses the average carbon intensity of the grids its data centers actually draw power from. If a data center runs on a grid powered largely by coal and gas, its location-based emissions are high.

A **market-based** figure subtracts the clean energy the company has bought through contracts, such as **renewable energy certificates**, which certify that a unit of renewable power was generated somewhere, and **power purchase agreements**, long-term contracts to buy power from particular wind or solar farms. That clean energy may have been generated in a different place or at a different time from when the data center used power.

In 2024 the *Guardian* analyzed the reports of Google, Microsoft, Meta and Apple and estimated that emissions from their own data centers between 2020 and 2022 were about 662 percent higher, roughly 7.6 times, on a location basis than the market-based figures the companies emphasized. Both kinds of figure comply with the Greenhouse Gas Protocol, the standard most companies follow. Which one tells the truth?

## Three Scopes

The Greenhouse Gas Protocol sorts a company's emissions into three "scopes."

| Scope | What it covers | Example for an AI company |
|---|---|---|
| **Scope 1** | Direct emissions from sources the company owns | Gas turbines on site; diesel backup generators |
| **Scope 2** | Emissions from the electricity it buys | Grid power for its data centers |
| **Scope 3** | All other emissions in its value chain | Manufacturing chips; building data centers; customers' use |

For AI companies, Scope 3, which includes the embodied carbon in hardware and buildings, can be very large, and it is the hardest to measure.

## Which Method Is Right?

Each method has a case.

Location-based accounting reflects physical reality: it shows what the grids actually emitted to power the company's computing. Its weakness is that it gives no credit for a company's investments in clean energy, even investments that really did add new wind or solar farms to the grid.

Market-based accounting rewards those investments, which have helped finance a great deal of renewable energy. Its weakness is that some purchases, especially certificates bought separately from any power, may not add any new clean energy at all, and that clean power generated at noon in one state does not actually run a data center at midnight in another.

A more demanding approach has emerged. Google and Microsoft have set goals of matching their electricity use with **carbon-free energy every hour, on the same grid**, often called 24/7 carbon-free energy. That is much harder than matching a year's total. Google reported reaching about 66 percent hourly carbon-free energy globally in 2024, with wide variation between regions.

## Why Disclosure Matters

Measurement can sound like a technical side issue. It is closer to the center of the ethics.

People cannot judge what is not disclosed. Lesson 01-07's principle of explicability, that systems should be understandable and someone should answer for them, applies to environmental impact as much as to decisions about people. Communities near a planned data center need facility-level data to take part meaningfully in a decision, as Lesson 06-03 showed. Investors, customers and regulators need comparable figures to tell responsible companies from irresponsible ones. And honest disclosure is what makes the benefits of AI, which Lesson 06-05 describes, credible: claims of benefit are worth little if the costs are hidden.

## What Disclosures Usually Leave Out

Company reports commonly omit several things: energy use by AI separated from other cloud computing; the footprint of training and running particular models, which some developers disclose for training but very few for inference; water use for each facility; Scope 3 emissions from hardware; the total number of queries, without which per-query figures cannot be scaled up, as Lesson 06-02 explained; and independent verification.

## What Is Required

As of October 2026, requirements are beginning to appear.

In the European Union, a 2023 directive on energy efficiency requires data centers of 500 kilowatts or more to report their energy use, water use, share of renewable energy and **power usage effectiveness**, the ratio of a facility's total energy to the energy its computing equipment uses, to an EU database each year. The EU AI Act requires providers of general-purpose AI models to document the energy used to train them.

In the United States, California's 2023 climate disclosure law requires large companies doing business in the state to report Scope 1 and 2 emissions from 2026 and Scope 3 emissions from 2027, though it faces legal challenges. A federal climate disclosure rule adopted by the Securities and Exchange Commission in 2024 was put on hold by the courts, and the Commission voted in 2025 to stop defending it.

There are also voluntary efforts: Hugging Face's AI Energy Score, tools that estimate the carbon of a training run, and a 2025 analysis by the French AI company Mistral of the full lifecycle footprint of one of its models, one of the first such disclosures by a model developer.

*Legal status is as of October 2026 and should be checked before teaching.*

## Questions to Ask of Any Disclosure

Eight questions help evaluate an environmental claim about AI.

1. Is it location-based, market-based, or both?
2. Does it include Scope 3?
3. Is AI separated from other computing?
4. Is water reported for each facility and its watershed?
5. Is the figure a median, an average or a total?
6. Has anyone independent verified it?
7. Is the method published and comparable with others'?
8. What is the trend in absolute terms, not just per unit of work?

## Where People Disagree

Should companies be required to report location-based emissions prominently? Supporters say it shows what actually happened. Opponents say it would discourage the clean-energy purchases that market-based reporting rewards.

Should AI models come with standardized energy labels, like the ratings on home appliances? Labels would let users and buyers compare. Critics say energy use depends so much on how a model is used that a single label would mislead.

And who should verify companies' environmental claims: regulators, auditors, or independent researchers?

## Check Your Understanding

**1. What is the difference between location-based and market-based emissions accounting?**

:::answer Answer
Location-based uses the average emissions of the grids actually supplying power. Market-based subtracts clean energy the company has bought by contract, which may be generated elsewhere or at other times.
:::

**2. What does Scope 3 cover, and why is it important for AI companies?**

:::answer Answer
All emissions in the value chain beyond direct sources and purchased electricity, such as manufacturing chips and constructing buildings. For AI companies it can be very large and is the hardest to measure.
:::

**3. What is 24/7 carbon-free energy?**

:::answer Answer
Matching electricity use with carbon-free energy every hour, on the same grid, which is much stricter than matching a year's total.
:::

**4. Name three things company disclosures commonly leave out.**

:::answer Answer
Any three of these: AI-specific energy; per-model inference footprints; facility-level water use; Scope 3 hardware emissions; total query volumes; independent verification.
:::

## Your Turn

Choose the most recent sustainability report from a major AI or cloud company. Answer the eight questions above about it, and give its transparency about AI a grade from A to F. Justify the grade in three sentences.

## Key Terms

- **Scope 1, 2 and 3:** Direct emissions, emissions from purchased electricity, and all other value-chain emissions.
- **Location-based accounting:** Counting emissions using the average carbon intensity of the grid actually used.
- **Market-based accounting:** Counting emissions after crediting clean energy bought by contract.
- **Renewable energy certificate:** A certificate representing a unit of renewable power generated somewhere.
- **Power purchase agreement:** A long-term contract to buy power from a particular generator.
- **24/7 carbon-free energy:** Matching electricity use with carbon-free energy every hour on the same grid.
- **Power usage effectiveness:** A data center's total energy divided by the energy its computing equipment uses.

## Sources

- **Core:** Luccioni, S. et al. "Light bulbs have energy ratings — so why can't AI chatbots?" *Nature* 632 (2024). — [Paid / library](https://www.nature.com/articles/d41586-024-02680-3); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r266). <!-- reading-access -->
- *The Guardian*, "Data center emissions probably 662% higher than big tech claims," Sept 2024. — [Free full text](https://www.theguardian.com/technology/2024/sep/15/data-center-gas-emissions-tech); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r263). <!-- reading-access -->
- Greenhouse Gas Protocol, *Scope 2 Guidance* (2015; revision under consultation 2025–2026 ⚠). — [Free full text](https://ghgprotocol.org/sites/default/files/GHG%20Protocol%20Scope%202%20Guidance.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r262). <!-- reading-access -->
- Google, *2025 Environmental Report* (24/7 CFE data). — [Free full text](https://www.sustainability.google/google-2025-environmental-report/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r264). <!-- reading-access -->
- Mistral AI, "Our contribution to a global environmental standard for AI" (July 2025). — [Free full text](https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r265). <!-- reading-access -->
- EU Delegated Regulation 2024/1364 on data center reporting. — [Free official text](https://eur-lex.europa.eu/eli/reg_del/2024/1364/oj/eng); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r267). <!-- reading-access -->
