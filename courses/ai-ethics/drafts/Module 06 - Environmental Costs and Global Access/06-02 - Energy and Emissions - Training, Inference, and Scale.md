# 06-02 — Energy and Emissions: Training, Inference, and Scale

**Module:** 6 — Environmental Costs and Global Access
**Estimated time:** 40 minutes

**In this lesson:** One AI question uses a tiny amount of energy. Billions of them use a great deal. This lesson explains where AI's energy goes, why the cost of a single query can be both trivial and important, how to avoid the common mistakes in scaling up per-query figures, and why making AI more efficient may not reduce the total energy it uses.

## Five Drops of Water

In August 2025, Google published figures for the environmental footprint of its Gemini AI assistant, along with the method behind them. For the median text prompt, it reported about 0.24 watt-hours of energy, roughly what a television uses in nine seconds; about 0.03 grams of carbon dioxide equivalent; and about 0.26 milliliters of water, about five drops. Google said the energy per median prompt had fallen 33-fold in twelve months.

Researchers welcomed the disclosure, since few companies had published anything comparable, but noted what it left out. It covered only text prompts, and only the median, which leaves out heavier uses such as long chains of reasoning, images, video and agents. It counted carbon after crediting Google's purchases of clean energy, which Lesson 06-04 explains. It did not say how many prompts there were in total, so nobody could scale the figure up to an overall footprint. And nobody independent had checked it.

OpenAI's chief executive had separately cited about 0.34 watt-hours for an average ChatGPT query. The methods differ, so the two numbers cannot be directly compared.

## Training and Inference

AI uses energy in two phases.

**Training** is building the model from data. It happens once per model, plus later rounds of adjustment, and it uses a large amount of energy in a concentrated burst. One widely cited estimate put the training of GPT-3 in 2020 at about 1,287 megawatt-hours; today's leading models almost certainly use much more.

**Inference** is using the trained model to respond to people. It happens every time anyone uses the model, for as long as the model is in service. Each query uses very little, but the total is enormous. Industry estimates suggest that inference now accounts for most of AI's energy use. Google reported in 2022 that about 60 percent of its machine-learning energy went to inference, and that share has likely grown since.

## Not All Queries Are Equal

The energy needed for a task varies by orders of magnitude.

Generating images uses far more energy than classifying text; a 2024 study found that generating a thousand images could use as much energy as charging a smartphone hundreds of times, depending on the model. Larger models use more energy per word, so using a giant model for a task a small one could do wastes energy. "Reasoning" models, which work through long chains of intermediate steps before answering, can use many times more energy per answer. AI agents may make dozens or hundreds of model calls to complete one task. And generating video is among the most energy-intensive things an ordinary user can ask for.

## Five Ways to Get the Arithmetic Wrong

Per-query figures are easy to misuse.

The first mistake is multiplying a median by the total number of queries. If a few heavy queries use far more energy than most, the average is much higher than the median.

The second is ignoring overhead. Servers sit idle waiting for demand, and data centers use energy for cooling and networking. In Google's breakdown, idle capacity accounted for about 10 percent and building overhead for about 8 percent.

The third is ignoring the emissions from manufacturing the hardware, the embodied carbon from Lesson 06-01.

The fourth is comparing figures calculated by different methods, which Lesson 06-04 explains.

The fifth is confusing energy with emissions. The same kilowatt-hour produces very different amounts of carbon depending on whether the grid is running on coal, gas, wind or nuclear, and even on the time of day.

## Trivial and Important at Once

Two framings of AI's energy use are both true.

The individual framing says one query is trivial, about the same as a few seconds of television, so individual users need not feel guilty for using AI.

The collective framing says that the growth in total use is driving new gas plants, delaying the closure of coal plants and straining the grid in some regions.

Ethically, the way to reconcile them is to look at who makes which choices. An individual user's choices matter very little per query. But the design decisions companies make, such as which model handles a request, which features are on by default, and whether every search triggers an AI summary that nobody asked for, multiply across billions of people. Those decisions matter enormously.

## Cheaper, So More

In January 2025, the Chinese lab DeepSeek released a reasoning model it said had been trained at a fraction of the cost of comparable American models. The share price of NVIDIA, the leading maker of AI chips, fell about 17 percent in a day, on fears that AI would need less hardware. Microsoft's chief executive, Satya Nadella, responded: "Jevons paradox strikes again! As AI gets more efficient and accessible, we will see its use skyrocket." Within months, AI companies' plans for capital spending had risen, not fallen.

Nadella was referring to an argument from 1865. In *The Coal Question*, the economist William Stanley Jevons observed that more efficient steam engines had *increased* Britain's total coal consumption, because cheaper energy made it worth using in many more ways.

This is the **rebound effect**, and it comes in degrees. In a partial rebound, efficiency saves some energy, but less than expected. In a full rebound, the savings are entirely offset by greater use. In **backfire**, also called the Jevons paradox, total use rises.

For AI, cheaper inference and smaller models lower prices and open up new uses: AI built into every app, agents running constantly, video generation on demand. Whether total energy use rises depends on how strongly demand responds to lower costs, and early evidence suggests demand is growing fast. Google's energy per prompt fell 33-fold in a year, and global data-center electricity is still projected to roughly double by 2030. Both are true at once.

The lesson is that efficiency is necessary but not sufficient. If the goal is to limit total energy, water or emissions, some limit or price on the total may be needed as well.

## Greener Choices

Several choices reduce AI's footprint. Use smaller models when they are good enough, which can save a great deal per query. Avoid AI features that run by default when nobody asked for them. Group requests together and reuse answers that have already been computed. Run computing where and when the grid is cleanest. And measure and publish energy use, as tools such as Hugging Face's AI Energy Score, launched in 2025, make possible.

## Check Your Understanding

**1. Why does inference now account for most of AI's energy use, even though training a model uses so much?**

:::answer Answer
Training happens once per model, but inference happens every time anyone uses it, so billions of small queries add up to more than the one-time cost of training.
:::

**2. Why is it a mistake to multiply a median per-query figure by the total number of queries?**

:::answer Answer
If some queries use far more energy than most, the average is much higher than the median, so the result underestimates the total.
:::

**3. What is the rebound effect, and what is backfire?**

:::answer Answer
The rebound effect is when efficiency gains are partly or wholly offset by increased use. Backfire, or the Jevons paradox, is when total use actually rises.
:::

**4. Whose choices matter most for AI's total energy use, and why?**

:::answer Answer
Companies' design decisions, such as default features and which model handles a request, because they are multiplied across billions of users. An individual's choices matter little per query.
:::

## Your Turn

Estimate the yearly energy use of a feature that adds an AI-generated summary to every search on a search engine that handles 5 billion searches a day. Use three cases for the energy per summary: 0.1, 0.3 and 1.0 watt-hours. Compute the daily and yearly totals, compare the middle case with the yearly electricity use of a typical U.S. household, about 10,500 kilowatt-hours, and list three reasons your estimate might be wrong.

:::answer Check your arithmetic
In the middle case, 5 billion times 0.3 watt-hours is 1.5 gigawatt-hours a day, or about 0.55 terawatt-hours a year, roughly what 52,000 U.S. households use.
:::

## Key Terms

- **Training:** Building a model from data.
- **Inference:** Running a trained model to respond to new inputs.
- **Reasoning model:** A model that generates long chains of intermediate steps before answering.
- **Carbon intensity:** The emissions produced per unit of electricity.
- **Rebound effect:** The offsetting of efficiency gains by increased use.
- **Jevons paradox:** The case in which efficiency gains increase total consumption; also called backfire.

## Sources

- **Core:** Luccioni, S., Strubell, E. & Crawford, K. "From Efficiency Gains to Rebound Effects: The Problem of Jevons' Paradox in AI's Polarized Environmental Debate," *FAccT 2025*. — [Free manuscript](https://arxiv.org/abs/2501.16548); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r269). <!-- reading-access -->
- Google, "Measuring the environmental impact of delivering AI at Google Scale" (technical paper and blog, Aug 2025). — [Free full text](https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r250). <!-- reading-access -->
- MIT Technology Review, "In a first, Google has released data on how much energy an AI prompt uses," Aug 21, 2025. — [Free full text](https://technologyreview.com/2025/08/21/1122288/google-gemini-ai-energy); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r251). <!-- reading-access -->
- Luccioni, S., Jernite, Y. & Strubell, E. "Power Hungry Processing: Watts Driving the Cost of AI Deployment?" *FAccT 2024*. — [Free manuscript](https://arxiv.org/abs/2311.16863); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r253). <!-- reading-access -->
- Patterson, D. et al. "Carbon Emissions and Large Neural Network Training," arXiv:2104.10350 (2021). — [Free manuscript](https://arxiv.org/abs/2104.10350); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r254). <!-- reading-access -->
- Jevons, W.S. *The Coal Question* (1865), Chapter VII (excerpt). — [Free full text](https://www.econlib.org/library/YPDBooks/Jevons/jvnCQ.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r268). <!-- reading-access -->
- Hugging Face, AI Energy Score (2025). — [Free online tool](https://huggingface.github.io/AIEnergyScore/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r255). <!-- reading-access -->
