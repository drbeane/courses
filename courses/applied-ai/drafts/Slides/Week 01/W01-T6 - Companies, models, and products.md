---
marp: true
title: "Week 1: Companies, Models, and Products"
paginate: true
---

# Companies, Models, and Products
### Week 1
COSC-300/500 Applied AI Essentials

---

## Company, Model, Product

| | What it is | Examples |
|---|---|---|
| **Company** | Builds and sells the technology | Anthropic, OpenAI, Google, xAI |
| **Model** | A large language model (LLM): reads your request, writes the reply | Claude Sonnet, GPT Sol, Gemini, Grok |
| **Product** | The software you open | Claude app, ChatGPT, Copilot, Cursor |

Some companies build models, some build products, and many build both.

"I asked ChatGPT" names a product. The answer came from whichever model that product was using at the time.

<!-- Ask: when someone says "I asked ChatGPT", which of the three do they mean? -->

---

## The Model and the Product

- The **product** is everything around the model: the window, menus, file upload, web search, memory, and connections to other apps.
- The **model** reads the request, decides what to do, and writes the reply.
- They work together. In a web search, the model decides to search and what to search for; the product actually runs the search.
- Some companies make both. Others build products on another company's models.

<!-- A product is one specific tool on a surface: ChatGPT is a chat app, Cursor is a coding assistant. -->

---

## Not One to One

- **One product, several models**: Claude app (Haiku to Fable), ChatGPT (depends on plan)
- **One model, several products**: Claude in the Claude app, Claude Code, Copilot
- **A product, other companies' models**: Copilot (OpenAI, Anthropic); Cursor (Anthropic, Google, SpaceX, its own Composer)

Poor answer? Ask about the **model**. Missing feature? That's the **product**.

<!-- Cursor lost OpenAI's models after SpaceX bought it in 2026: model lineups change for business reasons. Checked 2026-11-16. -->

---

## Open and Closed Weights

- **Weights**: the numbers a model learned in training
- **Closed**: stay with the vendor (Claude, GPT, Gemini, Grok, Muse)
- **Open**: download and run them yourself
- Why it matters: your data stays in-house, and there's no per-message cost
- Open weights ≠ open source: you get the finished numbers, usually not the training data or code

<!-- Google's Gemma and OpenAI's gpt-oss are smaller open models from closed-weight vendors. -->

---

## Who Makes the Models and Products

| Company | Models | Products |
|---|---|---|
| Anthropic | Claude (Haiku, Sonnet, Opus, Fable) | Claude app (including Cowork), Claude Code |
| OpenAI | GPT (Luna, Terra, Sol, Astra), gpt-oss | ChatGPT, Codex |
| Google | Gemini (Flash, Pro), Gemma | Gemini app, Gemini Notebook, Antigravity |
| Microsoft | MAI (MAI Code, MAI Image) | Copilot |
| Meta | Muse (Muse Spark), Llama | Muse personal agent |
| SpaceX | Grok, Composer | Grok app, Cursor |

As of November 2026. Copilot also runs on OpenAI and Anthropic models.

<!-- Verify the current Copilot model mix before class. Our Maryville account showed only GPT 5.6 Sol on 2026-10-03. -->

---

## Open-Weight Providers

| Company | Models | Products |
|---|---|---|
| DeepSeek | DeepSeek | DeepSeek app |
| Alibaba | Qwen | Qwen app |
| Moonshot AI | Kimi | Kimi app |
| Z.ai | GLM | Z.ai chat |
| Mistral | Mistral | Vibe (formerly Le Chat) |

DeepSeek, Alibaba, Moonshot AI, and Z.ai are based in China. Mistral is based in France.

---

## Model Tiers

Most vendors offer a family:

| Tier | Trade-off | Claude | GPT (OpenAI) |
|---|---|---|---|
| Top | Most capable, slowest, most costly | Fable | Astra |
| Large | Close to the top, lower cost | Opus | Sol |
| Middle | Balanced | Sonnet | Terra |
| Small | Fast and cheap | Haiku | Luna |

Bigger isn't always better: pick for the task.

<!-- Matched by position in each family, not by test results. Names checked 2026-11-13; recheck before class. -->
