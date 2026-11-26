---
marp: true
title: "Week 1: Vendors, Models, and Effort"
paginate: true
---

# Vendors, Models, and Effort
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

## Who Makes the Models and Products

| Company | Models | Products |
|---|---|---|
| Anthropic | Claude | Claude app (including Cowork), Claude Code |
| OpenAI | GPT, gpt-oss | ChatGPT, Codex |
| Google | Gemini, Gemma | Gemini app, Gemini Notebook (formerly NotebookLM), Antigravity |
| Microsoft | MAI | Copilot |
| Meta | Muse, Llama | Muse personal agent |
| SpaceX | Grok, Composer | Grok app, Cursor |

As of November 2026. Copilot also runs on OpenAI and Anthropic models.

<!-- Verify the current Copilot model mix before class. Our Maryville account showed only GPT 5.6 Sol on 2026-10-03. -->

---

## Open and Closed Weights

- **Weights**: the numbers a model learned in training
- **Closed**: stay with the vendor (Claude, GPT, Gemini, Grok, Muse)
- **Open**: download and run them yourself
  - DeepSeek · Alibaba (Qwen) · Moonshot (Kimi) · Z.ai (GLM) · Mistral · Meta (Llama)
- Why it matters: your data stays in-house, and there's no per-message cost
- Open weights ≠ open source: you get the finished numbers, usually not the training data or code

<!-- Google's Gemma and OpenAI's gpt-oss are smaller open models from closed-weight vendors. -->

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

---

## Effort and "Thinking"

- **Reasoning models** can think before answering, writing out their work before the reply.
- More thinking usually helps on hard, multi-step problems such as math, logic, and planning.
- It costs you in slower answers and more of your usage allowance.
- On simple tasks, like rewording an email, extra thinking is often wasted.

**Choosing a model and an effort level** is a skill you'll use all term.

---

## How Reasoning Works

- The thinking is ordinary text, written one token at a time
- Everything written becomes input for the next step
- A written-down guess can be **checked**, and a caught mistake never reaches the answer
- Trained on checkable problems; attempts that end correctly are rewarded
- More effort = room to plan, check, and fix

The thinking is a working draft, not a proof.

<!-- Demo the "Watch a Model Think" widget from the lesson: run the same problem with no thinking, a small budget, and a large budget. -->

---

{{widget reasoning-trace}}

---

## What It Costs

- **Time**: a large model at high effort can take a minute or more to answer.
- **Allowance**: Claude Pro has a five-hour limit and a weekly limit, shared across all models.
- Larger models and higher effort use the allowance faster, so a session of hard questions can run out sooner.

Check yours: **Settings**, then **Usage**. It shows how much of each limit you've used and when it resets.

---

## Choosing: A Default

1. **Start in the middle**: use a middle model at default effort for most work.
2. **Move up** when the answer is wrong or misses the point, not merely when it's plain.
3. **Move down** for quick or repeated work, where speed matters more than depth.
4. **Check your prompt** before you move up. A vague request gets a vague answer from every model.

---

## Three Tasks

| Task | Reasonable choice |
|---|---|
| Make an email sound friendlier | Small or middle, low effort |
| Turn a 30-page reading into a study guide | Middle, default effort |
| Find the flaw in a budget that doesn't add up | Large, or higher effort |

The first is quick and easy to check. The last needs careful, multi-step reasoning, and a missed error is costly.

<!-- Ask the class to place two tasks of their own before showing the lab. -->

---

{{widget model-picker}}

---

## Which Model Am I Using?

- In Claude, the menu **next to the send button** shows the current model and effort.
- Select the model name to change it. **Effort** is in the same menu.
- If a tool has no menu, it chose a model for you, and it may change that choice without telling you.
- Don't ask the AI which model it is. It often gets this wrong, because it learned about itself from text written before it existed.

<!-- Show the menu live. Steps checked 2026-11-13 against support.claude.com. -->

---

## What You Can Choose, by Tool

| Tool | Models | Effort control |
|---|---|---|
| Claude Pro | Several, from a menu | Yes, Low to Max |
| Copilot Chat (Maryville) | One model on our test account | Quick / Think deeper / Auto |
| Free tiers | Smaller models | Limited |

Free and institutional tools often make the choice for you. When results disappoint, that's worth knowing before you blame the prompt.

<!-- Re-check each picker the week of class; these change often. -->

---

## Model Cards and System Cards

- A model card is the vendor's own description of a model: what it can do, how it was tested, and where it falls short.
- It's the best single source for a model's knowledge cutoff and its test results.
- It's written by the company selling the model, so read it the way you'd read any seller's claims.
- Anthropic publishes its cards at anthropic.com/system-cards. This week's 500 extension uses one.

---

## Price and Benchmarks

- **Price**: per million tokens; output (including thinking) costs more than input
- Higher tiers cost more, which is why they use your allowance faster
- **Benchmarks**: fixed test sets used to score models
  - Each measures one kind of task
  - Vendors choose what to report
  - Models may have seen the test
  - Small gaps rarely matter
- The best test is your own task, on two models
