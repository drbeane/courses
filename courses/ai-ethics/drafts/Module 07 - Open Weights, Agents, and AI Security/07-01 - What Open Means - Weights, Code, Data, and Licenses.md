# 07-01 — What "Open" Means: Weights, Code, Data, and Licenses

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 35 minutes

**In this lesson:** "Open-source AI" is one of the most contested phrases in technology. This lesson explains what an AI model is made of, which parts can be released, how release works as a range instead of a switch, and what the licenses attached to "open" models actually allow.

## The Leak That Started a Movement

In February 2023, Meta released LLaMA, a family of large language models, to approved researchers under a license that forbade commercial use. Within about a week, the model's **weights**, the trained numbers that make it work, were leaked on the message board 4chan and spread across the internet. Anyone could now download and run a model that competed with the best publicly available systems of the time.

Meta then embraced openness. It released Llama 2 publicly in July 2023, and later versions after it, under a custom license that allowed commercial use with some restrictions. By 2026, models with downloadable weights from many developers, including Meta, Mistral, Google, OpenAI, DeepSeek, Alibaba, Moonshot and Zhipu, had become central to research, startups and national AI strategies.

Almost immediately, people began arguing over whether these models deserved to be called "open source."

## What a Model Is Made Of

An AI system has several components, and each can be released or withheld.

| Component | What it is | Why it matters |
|---|---|---|
| **Weights** | The trained parameters | Let you run, adapt and study the model |
| **Inference code** | The software that runs the model | Needed to use the weights |
| **Training code** | The software used to train it | Lets you reproduce or change the training |
| **Training data** | The datasets it learned from | Lets you audit it for bias, copyright and contamination, and reproduce it |
| **Documentation** | Model cards, papers, evaluations | Explains what it can and cannot do |
| **License** | The legal terms of use | Determines what you are allowed to do |

Most models described as "open" release the weights and the code to run them. Very few release their training data.

## Release Is a Range, Not a Switch

The researcher Irene Solaiman described release as a **gradient** with many levels between fully closed and fully open. At one end, a model is used only inside the company that built it. Then come staged release, with limited access first and wider access later; access through a hosted chat interface; access through a programming interface, an **API**, where the provider keeps the weights; downloadable weights under a restrictive license; downloadable weights under a permissive license that allows almost any use; and, at the far end, full openness, with weights, code, data and documentation all released, as with the OLMo models from the Allen Institute for AI.

Most popular "open" models sit near the middle-to-open end: downloadable weights, but no training data. An **open-weight model** is the accurate term for these.

## What Counts as Open Source?

In October 2024 the Open Source Initiative, the body that maintains the standard definition of open-source software, published its **Open Source AI Definition**. It requires the freedoms to use, study, modify and share a system. That includes the weights, the complete code for training and running the model, and "sufficiently detailed information about the data" to let a skilled person build a substantially equivalent system. It does not require releasing the data itself.

Under this definition, many popular "open" models, including Meta's Llama with its custom license, do not qualify. Critics on one side say the definition is too weak, because without the data you cannot fully study a model. Critics on the other say it is too demanding for companies that cannot share data they licensed or collected.

## Licenses

The license attached to a model decides what users may do with it. As of 2026, licenses fall into roughly four kinds.

| Kind of license | Example | Key terms |
|---|---|---|
| Permissive open source | Apache 2.0 or MIT, used for some Mistral, Qwen and DeepSeek models | Use, change and share freely |
| Custom "community" license | Meta's Llama licenses | Commercial use allowed, but not by companies with more than 700 million monthly users without permission; an acceptable-use policy; naming requirements |
| Responsible AI license | The BigScience license used for BLOOM | Restrictions on harmful uses that pass on to anyone downstream |
| Non-commercial | Some research releases | No commercial use |

Licenses that restrict particular uses, such as forbidding use for weapons or surveillance, raise three questions. Can they be enforced, against people who simply ignore them? Do they stop a model from being open source? The Open Source Initiative says yes. And are they worth having even if they are hard to enforce, as a statement of the developer's values and a basis for action against blatant misuse?

## Why Openness Matters Ethically

The degree of openness affects four things this module returns to again and again.

It affects who can use AI, and who controls it, the question of concentration from Lessons 05-04 and 06-06.

It affects who can study it. Open weights let independent researchers examine a model's inner workings, audit it for bias and test its safety without asking the company's permission.

It affects who can change it, including by removing its safety features, which Lesson 07-02 discusses.

And it affects whether release can be undone. Once weights are public, they cannot be recalled.

## Check Your Understanding

**1. What is the difference between an open-weight model and a fully open model?**

:::answer Answer
An open-weight model releases its trained weights, usually with code to run them. A fully open model also releases its training code, training data and documentation.
:::

**2. What does the Open Source AI Definition require regarding data?**

:::answer Answer
Sufficiently detailed information about the data to let a skilled person build a substantially equivalent system, but not the data itself.
:::

**3. Why do many popular "open" models not meet the Open Source AI Definition?**

:::answer Answer
Their licenses restrict who may use them or how, as Llama's does, and they may not provide the required code and data information.
:::

**4. Why does irreversibility matter for open-weight release?**

:::answer Answer
Once weights are public, they cannot be recalled, so any flaw or dangerous capability found later is permanent.
:::

## Your Turn

Choose three models: one closed model available only through an API, one with downloadable weights under a custom license, and one fully open. For each, record which components are available and under what license, and place it on Solaiman's gradient. Then write two sentences on which of the three you could audit for bias, and what you would still be missing.

## Key Terms

- **Weights:** A model's trained parameters.
- **API:** A programming interface through which a provider offers access to a model without releasing it.
- **Open-weight model:** A model whose weights can be publicly downloaded.
- **Open Source AI Definition:** The Open Source Initiative's 2024 standard for what counts as open-source AI.
- **Gradient of release:** The range of access levels between fully closed and fully open.

## Sources

- **Core:** Solaiman, I. "The Gradient of Generative AI Release: Methods and Considerations," *FAccT 2023*. — [Free manuscript](https://arxiv.org/abs/2302.04844); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r285). <!-- reading-access -->
- Open Source Initiative, *The Open Source AI Definition 1.0* (Oct 28, 2024). — [Free full text](https://opensource.org/ai); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r286). <!-- reading-access -->
- Liesenfeld, A. & Dingemanse, M. "Rethinking open source generative AI: open-washing and the EU AI Act," *FAccT 2024*. — [Free full text](https://facctconference.org/static/papers24/facct24-120.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r287). <!-- reading-access -->
- Vincent, J. "Meta's powerful AI language model has leaked online," *The Verge*, Mar 8, 2023. — [Free full text](https://www.theverge.com/2023/3/8/23629362/meta-ai-language-model-llama-leak-online-misuse); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r288). <!-- reading-access -->
- Widder, D., West, S. & Whittaker, M. "Open (For Business): Big Tech, Concentrated Power, and the Political Economy of Open AI," SSRN (2023). — [Free manuscript](https://davidwidder.me/open.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r289). <!-- reading-access -->
