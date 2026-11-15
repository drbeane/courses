# 06-01 — The Physical Footprint of AI

**Module:** 6 — Environmental Costs and Global Access
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Describe the material supply chain of AI: minerals, chips, data centers, energy and e-waste.
2. Summarize current estimates of data-center resource use and their uncertainties.
3. Explain why "the cloud" is a misleading metaphor.

## Opening case: a country-sized footprint

In June 2026, the United Nations University Institute for Water, Environment and Health (UNU-INWEH) released estimates of the global footprint of data centers, summarized by Reuters:

| | 2025 (estimate) | 2030 (projection) |
|---|---|---|
| Electricity | 448 TWh (more than Saudi Arabia); AI about one fifth | 945 TWh (about Japan); AI about 40% |
| Water | 4.5 trillion liters | 9.3 trillion liters |
| CO₂ emissions | 189 million tonnes | 399 million tonnes |
| Land | 6,900 km² | more than 14,500 km² |

Lead author Kaveh Madani stressed that the world won't "run out" of water or power because of AI. The concern is **local**: poorly planned growth in specific places can collide with existing resource limits.

The International Energy Agency's *Energy and AI* report (April 2025) gave a similar picture: data centers used about **415 TWh in 2024** (about 1.5% of global electricity), projected to roughly double to about **945 TWh by 2030**, with AI the main driver.

*Status: these are estimates and projections. The methods and assumptions matter (Lesson 06-04).*

## Core ideas

### "The cloud" is made of things

AI depends on a physical chain:

1. **Minerals:** Copper, lithium, cobalt, gallium, germanium, rare earths and high-purity quartz. Mining has environmental and labor impacts, including in the Democratic Republic of Congo (cobalt) and China (rare-earth refining).
2. **Chip fabrication:** Advanced fabs, concentrated in Taiwan (TSMC), use large amounts of ultrapure water, energy and specialty chemicals, including PFAS ("forever chemicals"). Manufacturing emissions ("embodied carbon") can be a significant share of a chip's lifetime footprint.
3. **Data centers:** Buildings with servers, networking, cooling and power infrastructure. AI-focused "hyperscale" campuses range from 100 MW to more than 1 GW.
4. **Energy supply:** Grid power, onsite gas turbines (06-03), and contracted renewables and nuclear (e.g., restart deals for shuttered nuclear plants, 2024–2025).
5. **Water:** For cooling (evaporative cooling uses water directly) and indirectly for power generation.
6. **E-waste:** Rapid hardware turnover. Accelerators are often replaced on 3–5 year cycles. One 2024 study (Wang et al., *Nature Computational Science*) projected generative AI could add 1.2–5 million tonnes of e-waste by 2030.

### Why AI is different from earlier computing growth

From 2010 to 2018, global data-center workloads grew enormously while energy use rose only modestly, thanks to efficiency gains (Masanet et al., *Science* 2020). AI broke this pattern:

- **Accelerated computing:** GPUs and TPUs draw far more power per rack (40–130+ kW vs. 5–15 kW for traditional racks).
- **Scale of investment:** Hyperscalers' capital spending on AI infrastructure exceeded $300–400 billion per year by 2025–2026 ⚠ (verify current figures).
- **Inference at scale:** Billions of daily queries (06-02).
- **Firm power needs:** AI data centers prefer constant, reliable power, which can mean fossil generation.

### Company emissions trends

Several major tech companies reported **rising** emissions despite net-zero pledges:

- **Google** (2024 report): emissions up 48% since 2019, attributed largely to data-center energy.
- **Microsoft** (2024): emissions up about 29% since 2020.

Companies cite record clean-energy purchases and argue that AI will help decarbonization (06-05). Critics note reliance on market-based accounting (06-04).

### Uncertainty

Estimates vary widely because:

- companies disclose limited data (total energy, but rarely AI-specific use),
- the shares of training vs. inference and of AI vs. other workloads are estimated,
- projections depend on chip supply, power availability, efficiency and demand, all highly uncertain, and
- some projected data centers may never be built. Sightline Climate estimated in 2026 that 30–50% of capacity expected online in 2026 could be delayed.

## Applying the frameworks

- **Decency, world and non-human lenses:** Effects reach ecosystems and future generations.
- **Justice:** Burdens (mining, fabs, data-center siting, e-waste) often fall far from the beneficiaries.
- **Consequences:** Benefits of AI must be weighed against material costs, which requires honest accounting.
- **Structural injustice:** Every user participates in this supply chain.

## Discussion questions

1. Should AI companies be required to disclose AI-specific energy and water use? Why might they resist?
2. Is the environmental cost of AI different in kind from that of streaming video, cryptocurrency or air travel?
3. Rising emissions despite net-zero pledges: hypocrisy, honest difficulty, or a reasonable bet on future benefits?
4. Which link in the physical supply chain had you thought about least before this lesson?

## Activity: supply chain sketch (15 minutes)

Draw the physical chain behind a single chatbot query, from mine to data center to e-waste. Label each stage with:

1. one environmental impact,
2. where it likely occurs geographically, and
3. who bears it.

## Key terms

- **Hyperscale data center:** A very large facility operated by major cloud providers.
- **Embodied carbon:** Emissions from manufacturing hardware.
- **Rack power density:** Power draw per server rack.
- **E-waste:** Discarded electronic equipment.

## Connections

- Energy → 06-02 · Water and communities → 06-03 · Measurement → 06-04 · Hidden labor → 05-07

## Sources and further reading

- Reuters (via Insurance Journal), "AI to Double Data Center Power, Water Use by 2030, UN Researchers Say," Jun 22, 2026 (UNU-INWEH report). — [Free full text](https://insurancejournal.com/magazines/mag-features/2026/06/22/874414.htm); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r244). <!-- reading-access -->
- International Energy Agency, *Energy and AI* (April 2025). — [Free full text](https://www.iea.org/reports/energy-and-ai); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r245). <!-- reading-access -->
- Masanet, E. et al. "Recalibrating global data center energy-use estimates," *Science* 367 (2020). — [Abstract / record](https://eta-publications.lbl.gov/publications/recalibrating-global-data-center); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r246). <!-- reading-access -->
- Wang, P. et al. "E-waste challenges of generative artificial intelligence," *Nature Computational Science* 4 (2024). — [Free manuscript](https://english.iue.cas.cn/ns/sp/202410/P020241029589872289812.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r247). <!-- reading-access -->
- Crawford, K. *Atlas of AI* (2021), Chapter 1 ("Earth"). — [Paid / library](https://yalebooks.yale.edu/book/9780300252392/atlas-of-ai/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r248). <!-- reading-access -->
- Google 2024 Environmental Report; Microsoft 2024 Environmental Sustainability Report. — [Google 2024 report launch — Free full text](https://blog.google/company-news/outreach-and-initiatives/sustainability/2024-environmental-report/); [Microsoft 2024 report launch — Free full text](https://blogs.microsoft.com/on-the-issues/2024/05/15/microsoft-environmental-sustainability-report-2024/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r249). <!-- reading-access -->
