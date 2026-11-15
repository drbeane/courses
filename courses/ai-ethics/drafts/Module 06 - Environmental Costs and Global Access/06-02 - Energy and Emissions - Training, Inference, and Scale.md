# 06-02 — Energy and Emissions: Training, Inference, and Scale

**Module:** 6 — Environmental Costs and Global Access
**Estimated time:** 40 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Distinguish the energy costs of training and inference, and explain why inference increasingly dominates.
2. Interpret per-query energy figures and avoid common errors when scaling them.
3. Compare the energy intensity of different AI tasks and model choices.

## Opening case: five drops of water

In August 2025, Google published a methodology and figures for the environmental footprint of its Gemini AI assistant. For the **median text prompt**, it reported:

- **0.24 watt-hours** of energy (about running a TV for nine seconds),
- **0.03 grams** of CO₂-equivalent, and
- **0.26 milliliters** of water (about five drops).

Google said energy per median prompt had fallen **33-fold** in 12 months.

Critics welcomed the disclosure but noted gaps:

- Only **text** prompts, and only the **median**, which omits heavy queries (long reasoning chains, images, video, agents).
- **Market-based** carbon accounting, which counts Google's clean-energy purchases.
- No disclosure of **total** query volumes, so per-prompt figures can't be scaled to an aggregate.
- No independent verification.

OpenAI's CEO had separately cited about 0.34 Wh per average ChatGPT query. The methods differ, so the numbers aren't directly comparable.

## Core ideas

### Training vs. inference

| | Training | Inference |
|---|---|---|
| What | Building the model from data | Using the model to respond to inputs |
| When | Once per model (plus fine-tuning) | Every query, for the model's lifetime |
| Energy | Large, concentrated | Small per query, enormous in aggregate |
| Example estimate | GPT-3 training about 1,287 MWh (Patterson et al., 2021); frontier models since likely much more | Billions of daily queries across providers |

Industry estimates suggest **inference accounts for the majority of AI energy use**. Google reported in 2022 that about 60% of its ML energy went to inference, and the share has likely grown with deployment ⚠.

### Not all queries are equal

Energy per task varies by orders of magnitude:

- **Task type:** Luccioni, Jernite & Strubell (2024) found image generation used far more energy than text classification. Generating 1,000 images used energy comparable to charging a smartphone hundreds of times, depending on the model.
- **Model size:** Larger models use more per token. Using a frontier model for a task a small model could do wastes energy.
- **Reasoning models:** "Thinking" models that generate long internal reasoning chains can use many times more tokens, and therefore energy, per answer.
- **Agents:** Agentic tasks may involve dozens or hundreds of model calls (Module 7).
- **Video generation:** Among the most energy-intensive consumer AI tasks.

### Scaling errors

Common mistakes with per-query figures:

1. **Multiplying a median by total queries** when the distribution is skewed. The mean may be much higher.
2. **Ignoring idle capacity and overhead** (cooling, networking, redundancy). Google's breakdown attributed about 10% to idle capacity and about 8% to data-center overhead.
3. **Ignoring embodied emissions** of hardware (06-01).
4. **Comparing across methodologies** (location- vs. market-based accounting, 06-04).
5. **Confusing energy with emissions.** The same kWh produces very different CO₂ depending on the grid mix and time of day.

### Individual vs. collective framing

- **Individual framing:** "One query is trivial, about the same as a few seconds of TV." This is true, and it can make individuals feel guilt is misplaced.
- **Collective framing:** Aggregate growth is driving new gas plants, delayed coal retirements and grid strain in some regions. This is also true.

Both are correct. Ethically:

- Individual users' choices matter little *per query*, but **design and deployment decisions** by companies (defaults, model selection, features that trigger AI on every search) matter enormously.
- "Jevons" effects (06-05) mean efficiency gains may increase total use.

### Greener choices

| Choice | Effect |
|---|---|
| Use smaller or distilled models when sufficient | Large per-query savings |
| Avoid default AI features no one asked for | Reduces unnecessary inference |
| Batch and cache | Efficiency |
| Locate and schedule compute where and when the grid is clean | Lower emissions per kWh |
| Measure and report (e.g., the Hugging Face "AI Energy Score," 2025) | Enables comparison |

## Applying the frameworks

- **Consequentialism:** Is the benefit of each AI feature worth its aggregate energy cost?
- **Justice:** Emissions harm everyone, but disproportionately the Global South and future generations.
- **Virtue, self lens:** Thoughtful use, not guilt, is the realistic virtue for individuals.
- **Decency, world lens:** Designers of default features make choices for billions of people.

## Discussion questions

1. Is it misleading for a company to report only the *median* text prompt? What would a fair disclosure include?
2. Should search engines and operating systems enable AI by default? Consider energy as one factor.
3. Who bears more responsibility for AI's energy footprint: individual users or the companies that design defaults?
4. If AI energy per query falls 33× but total queries rise 100×, is that progress?

## Activity: back-of-the-envelope estimate (20 minutes)

Using **clearly stated assumptions**, estimate the annual energy of a hypothetical AI feature that adds a model-generated summary to every search on a search engine with 5 billion searches a day.

1. Pick a per-summary energy figure, with a low, mid and high case (e.g., 0.1, 0.3, 1.0 Wh).
2. Compute daily and annual energy in GWh or TWh.
3. Compare it with a familiar benchmark, such as a U.S. household at about 10,500 kWh per year.
4. List three reasons your estimate may be wrong.

*(Mid case: 5B × 0.3 Wh = 1.5 GWh per day, or about 0.55 TWh per year, roughly the annual use of about 52,000 U.S. households.)*

## Key terms

- **Inference:** Running a trained model on new inputs.
- **Watt-hour (Wh) / TWh:** Units of energy (1 TWh = 10⁹ kWh).
- **Reasoning model:** A model that generates extended intermediate reasoning before answering.
- **Distillation:** Training a smaller model to mimic a larger one (also 07-04).
- **Carbon intensity:** CO₂ per unit of electricity.

## Connections

- Footprint → 06-01 · Measurement → 06-04 · Rebound → 06-05

## Sources and further reading

- Google, "Measuring the environmental impact of delivering AI at Google Scale" (technical paper and blog, Aug 2025). — [Free full text](https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r250). <!-- reading-access -->
- MIT Technology Review, "In a first, Google has released data on how much energy an AI prompt uses," Aug 21, 2025. — [Free full text](https://technologyreview.com/2025/08/21/1122288/google-gemini-ai-energy); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r251). <!-- reading-access -->
- Implicator.ai, "Google says a prompt uses 0.24 Wh. Researchers say the math is incomplete," 2025. — [Free full text](https://www.implicator.ai/google-says-a-prompt-uses-0-24-wh-researchers-say-the-math-is-incomplete/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r252). <!-- reading-access -->
- Luccioni, S., Jernite, Y. & Strubell, E. "Power Hungry Processing: Watts Driving the Cost of AI Deployment?" *FAccT 2024*. — [Free manuscript](https://arxiv.org/abs/2311.16863); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r253). <!-- reading-access -->
- Patterson, D. et al. "Carbon Emissions and Large Neural Network Training," arXiv:2104.10350 (2021). — [Free manuscript](https://arxiv.org/abs/2104.10350); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r254). <!-- reading-access -->
- Hugging Face, AI Energy Score (2025). — [Free online tool](https://huggingface.github.io/AIEnergyScore/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r255). <!-- reading-access -->
