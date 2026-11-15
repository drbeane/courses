# 07-01 — What "Open" Means: Weights, Code, Data, and Licenses

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Distinguish open-source software, open-weight models and fully open models.
2. Compare common AI model licenses and their restrictions.
3. Place a given model on a "gradient of openness."

## Opening case: the leak that started a movement

In February 2023, Meta released LLaMA, a family of large language models, to approved researchers under a non-commercial license. Within about a week, the **weights** (the trained parameters that make the model work) were leaked on 4chan and spread across the internet. Anyone could now download and run a model competitive with the best publicly available systems of the time.

Meta then embraced openness. Llama 2 (July 2023) and later versions were released publicly under a custom license allowing commercial use, with restrictions. By 2026, open-weight models from many developers, including Meta, Mistral, Google (Gemma), OpenAI (gpt-oss, August 2025), DeepSeek, Alibaba (Qwen), Moonshot (Kimi) and Zhipu (GLM), had become central to research, startups and national AI strategies.

The term "open-source AI" became contested almost immediately.

## Core ideas

### What can be "open"?

An AI system has several components, each of which may or may not be released:

| Component | What it is | Why it matters |
|---|---|---|
| **Weights** | Trained parameters | Lets you run, fine-tune and study the model |
| **Inference code** | Code to run the model | Needed to use the weights |
| **Training code** | Code used to train | Lets you reproduce or modify training |
| **Training data** | The datasets used | Lets you audit for bias, copyright and contamination, and reproduce the model |
| **Documentation** | Model cards, papers, evaluations | Understanding capabilities and limits |
| **License** | Legal terms of use | Determines what you may do |

### The gradient of openness

Irene Solaiman (2023) described release as a **gradient**, not a binary:

1. **Fully closed:** Internal use only.
2. **Gradual or staged release:** Limited access first, wider access later.
3. **Hosted access:** Use through an interface (e.g., a chat app).
4. **API access:** Programmatic use, with the provider controlling the weights.
5. **Downloadable weights** with a restrictive license.
6. **Downloadable weights** with a permissive license (e.g., Apache 2.0, MIT).
7. **Fully open:** Weights, code, data and documentation all released (e.g., AI2's OLMo, EleutherAI's Pythia).

Most "open" models are at levels 5–6. They release **weights**, but not training data.

### The Open Source AI Definition (OSAID)

The Open Source Initiative released the **Open Source AI Definition 1.0** in October 2024. It requires freedom to use, study, modify and share, including:

- weights and parameters,
- complete training and inference code, and
- "sufficiently detailed information about the data" to enable a skilled person to build a substantially equivalent system. It does not require the data itself.

Under OSAID, many popular "open" models, including Llama with its custom license, **don't qualify** as open source. Critics on one side say OSAID is too weak because it doesn't require the data. Critics on the other side say it's too demanding for commercial developers.

### License comparison (illustrative, as of 2026 ⚠)

| License type | Example | Key terms |
|---|---|---|
| Permissive open source | Apache 2.0 (Mistral 7B, some Qwen models), MIT (DeepSeek-R1) | Use, modify, redistribute freely |
| Custom "community" license | Llama community licenses | Commercial use allowed. Restrictions on very large companies (over 700M monthly users) and on certain uses (acceptable-use policy). Naming requirements. |
| Responsible AI licenses (RAIL) | BLOOM (BigScience RAIL) | Use restrictions on harmful applications, carried downstream |
| Non-commercial | Some research releases | No commercial use |

**Use-based restrictions** in licenses (no weapons, no surveillance, etc.) raise questions:

- Are they enforceable?
- Do they make a license "not open source"? OSI says yes.
- Are they ethically valuable even if hard to enforce?

### Why openness matters ethically

Openness affects:

- **who can use AI**, and who controls it (concentration, 05-03, 06-06),
- **who can study it**, which enables safety research, bias audits and transparency,
- **who can modify it**, including removing safety features (07-03), and
- **whether release is reversible**. Once weights are public, they can't be recalled.

These trade-offs are the subject of the next three lessons.

## Applying the frameworks

- **Explicability:** Open weights and data enable independent scrutiny.
- **Justice:** Openness distributes capability more widely.
- **Non-maleficence:** Openness also distributes the ability to misuse.
- **Autonomy:** Users of open models aren't dependent on providers' policies.

## Discussion questions

1. Should a model whose training data isn't released be called "open source"? Does the label matter?
2. Are use-based license restrictions a meaningful ethical safeguard or merely symbolic?
3. Meta's license restricts companies with more than 700 million monthly users. Is that a reasonable condition or a competitive tactic?
4. What would you need, at a minimum, to audit a model for bias: weights, data or both?

## Activity: openness inventory (15 minutes)

Choose three models: one closed (e.g., a frontier API model), one open-weight with a custom license, and one fully open. For each, record which components are available (weights, inference code, training code, data, documentation) and the license. Place each on Solaiman's gradient.

## Key terms

- **Weights:** A model's learned parameters.
- **Open-weight model:** A model whose weights are publicly downloadable.
- **Open-source AI (OSAID):** OSI's definition requiring freedoms to use, study, modify and share, including code and data information.
- **Gradient of release:** A spectrum of access levels.
- **RAIL:** Responsible AI License, with use-based restrictions.

## Connections

- Case for open → 07-02 · Case for closed → 07-03 · Policy → 07-04 · Concentration → 06-06

## Sources and further reading

- Solaiman, I. "The Gradient of Generative AI Release: Methods and Considerations," *FAccT 2023*. — [Free manuscript](https://arxiv.org/abs/2302.04844); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r285). <!-- reading-access -->
- Open Source Initiative, *The Open Source AI Definition 1.0* (Oct 28, 2024). — [Free full text](https://opensource.org/ai); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r286). <!-- reading-access -->
- Liesenfeld, A. & Dingemanse, M. "Rethinking open source generative AI: open-washing and the EU AI Act," *FAccT 2024*. — [Free full text](https://facctconference.org/static/papers24/facct24-120.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r287). <!-- reading-access -->
- Vincent, J. "Meta's powerful AI language model has leaked online," *The Verge*, Mar 8, 2023. — [Free full text](https://www.theverge.com/2023/3/8/23629362/meta-ai-language-model-llama-leak-online-misuse); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r288). <!-- reading-access -->
- Widder, D., West, S. & Whittaker, M. "Open (For Business): Big Tech, Concentrated Power, and the Political Economy of Open AI," SSRN (2023). — [Free manuscript](https://davidwidder.me/open.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r289). <!-- reading-access -->
