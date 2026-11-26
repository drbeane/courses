# Week 1: Vendors, Models, and Effort

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

> **Instructor note: preparation.** Recheck the model pickers in Claude, Copilot Chat, and one free tool this week; they change often. The Claude menu steps and model names below were checked against Anthropic's help center on 2026-11-13, and the OpenAI model names against OpenAI's developer models page the same day. Recheck the tiers table before class. On 2026-10-03 the Maryville Copilot account showed only GPT 5.6 Sol with Quick response, Think deeper, and Auto; a student account may differ. The vendor, Cursor, and open-weight details were checked on 2026-11-16: xAI is part of SpaceX (its AI division has been called SpaceXAI and now SpaceXSI), SpaceX bought Cursor in August 2026, OpenAI announced the same month that it would stop supplying its models to Cursor, and Meta's Muse models are closed-weight. Have the privacy settings pages for Claude and Copilot ready to show. Timing: 15 min vendors and models, 40 min lab, 10 min privacy, 10 min share-out.

## What You Will Be Able to Do

- Tell apart the company, the model, and the product when someone names an AI tool.
- Identify the major AI vendors and the tiers of models they offer.
- Explain the difference between open-weight and closed-weight models.
- Describe how a reasoning model works through a problem, and why a higher effort setting changes the result.
- Choose a model and an effort level for a task, and say what the choice costs.
- Find out which model a tool is using, and find a model's system card.
- Read a model's price and benchmark scores with a critical eye.

## Company, Model, and Product

Names like ChatGPT and Claude can mean a company, a model, or an app, depending on who is talking. Keeping the three apart helps you compare tools and understand what you are actually choosing.

| | What it is | Examples |
|---|---|---|
| **Company** | The business that builds and sells the technology | Anthropic, OpenAI, Google, Microsoft, Meta, xAI (now part of SpaceX) |
| **Model** | A large language model (LLM), the trained system that reads your request and writes the reply | Claude Opus, Claude Sonnet, GPT Sol, GPT Terra, Gemini, Grok |
| **Product** | The software you open, which you use to send prompts to a model | The Claude app, Claude Code, ChatGPT, Codex, Gemini, NotebookLM, Copilot, Cursor, Grok |

You will also see these companies called vendors, and the ones that train leading models are often called AI labs.

### The Model and the Product Do Different Jobs

The **product** is everything around the model: the window you type in, the buttons and menus, file upload, web search, memory, and any connections to your files or other apps. The **model**, which in this course means a large language model (LLM), reads your request, decides what to do, and writes the reply.

The two work together. When you ask a question that needs current information, the model might decide a web search would help and choose what to search for. The product runs the search and hands the results back, and the model reads them and writes the answer.

Companies split this work in different ways. Some, such as Anthropic, OpenAI, and Google, build both models and products. Others build products on models made by someone else. Cursor started that way, as a coding tool built on Anthropic's and OpenAI's models. It later began training its own model, Composer, and in 2026 SpaceX, which makes Grok, bought it. Cursor now belongs to a company that builds both models and products, and Cursor and SpaceX have developed Grok models together. And some models, especially open-weight ones, end up inside products their makers had nothing to do with.

A product is also not quite the same as a surface. A surface is a kind of environment where you interact with an AI, while a product is a particular piece of software that provides one or more of them. For example, ChatGPT provides a chat assistant, and the Claude app provides both a chat assistant and Cowork, a local agent.

### Models and Products Don't Line Up One to One

- **One product can use several models.** Many products let you choose. The Claude app offers Claude models at each size, from Haiku to Fable. ChatGPT offers several of OpenAI's GPT models, and which ones you see depends on your plan. Both of these offer only their own company's models. Other products, described below, offer models from several companies.
- **One model can sit inside several products.** The same Claude model answers you in the Claude app, in Claude Code, and inside other companies' tools, such as Microsoft's Copilot.
- **A product can use another company's models.** Microsoft's Copilot runs on models from OpenAI and, in some configurations, Anthropic. Cursor, a coding assistant, offers models from Anthropic, Google, and SpaceX, along with its own Composer model. After SpaceX bought Cursor, OpenAI announced that it would stop supplying its models to it. The models a product offers can change for business reasons that have nothing to do with how good the models are.

So when an answer is poor, ask which **model** produced it. When a feature is missing, such as file upload or web search, that is usually the **product**. The AI Surfaces lesson was about products and the kinds of tools they are. This lesson is about the models inside them.

## Who Makes the Models

A handful of companies build most of the AI models you will meet:

- **Anthropic** makes the Claude models, the Claude app, and Claude Code. Claude is the main tool in this course.
- **OpenAI** makes the GPT models, ChatGPT, and the Codex coding agent.
- **Google** makes the Gemini models, the Gemini app, and NotebookLM.
- **Microsoft** makes Copilot, which runs on models from OpenAI and, in some configurations, Anthropic.
- **Meta** makes the Muse personal agent and the Llama family of models.
- **SpaceX** makes the Grok models and the Grok app. Its AI division began as xAI, a separate company, and became part of SpaceX in 2026. It also owns Cursor.

This matters because the same task can go very differently on different vendors' tools, and because the tool your employer gives you may not be the one you'd choose. Company lines also move: in one year, xAI was bought by SpaceX, SpaceX bought Cursor, and Meta moved its newest models from open to closed weights.

## Open and Closed Weights

A model's **weights** are the billions of numbers it learned in training. They are what makes it that model. Vendors handle them in one of two ways:

- **Closed-weight models** stay on the vendor's computers. You use them through the vendor's products, or a developer pays to send requests to them. Claude, GPT, Gemini, Grok, and Meta's Muse models are closed.
- **Open-weight models** are released for anyone to download, run on their own hardware, and adapt.

Companies known for open-weight models include:

- **DeepSeek**, in China, which makes the DeepSeek models.
- **Alibaba**, in China, which makes the Qwen models.
- **Moonshot AI**, in China, which makes the Kimi models.
- **Z.ai**, in China, which makes the GLM models.
- **Mistral**, in France, which makes the Mistral models.
- **Meta**, in the United States, which makes the Llama models.

Some closed-weight vendors also release smaller open models, such as Google's Gemma and OpenAI's gpt-oss.

Open weights matter most for privacy and control. An organization can run an open model on its own computers, so its data never leaves the building, and it doesn't pay per message. The trade-offs are that the largest open models need expensive hardware to run well, and the strongest closed models are usually somewhat ahead. Open weights are also not the same as open source: you get the trained model, but usually not the data or code used to train it, and the license may limit how you can use it.

## Model Tiers

Most vendors offer a family of models at different sizes. Anthropic's and OpenAI's families each have four:

| Tier | Trade-off | Claude (Anthropic) | GPT (OpenAI) |
|---|---|---|---|
| Top | Most capable; slowest and most expensive | Fable | Astra |
| Large | Close to the top tier at a lower cost | Opus | Sol |
| Middle | A balance of capability, speed, and cost | Sonnet | Terra |
| Small | Fast and cheap | Haiku | Luna |

The two columns are matched by where each model sits in its own family. A model is not equal to the one beside it, and on a given task either vendor's model may do better. Each name also carries a version number, such as Sonnet 5.5 or GPT-6.1 Sol, which rises with each release. Google and SpaceX also sell their models at more than one size.

Families change. Vendors release new versions several times a year, and they add and rename tiers. These names were current in November 2026 and will be different by the time you graduate. The pattern of a few sizes, from most capable to fastest, has held for years.

Bigger is not always better. For a quick rewrite or a simple classification, a small model is faster and uses less of your allowance. For a hard analytical problem or a long chain of reasoning, the larger model may get it right where the small one doesn't. Choosing a model is a judgment about the task.

## Effort and "Thinking"

Many current models can **reason** before answering: they work through the problem, sometimes at length, before writing the response. Tools expose this as an effort setting or a "think deeper" option. Claude has effort levels from Low to Max. Copilot Chat offers Quick response and Think deeper.

### How Reasoning Works

A model writes one token at a time, and every token it writes becomes part of what it reads next. You saw this in the large language models lesson. Without reasoning, the first words of the reply are the start of the answer, so the model commits to an answer before it has worked anything out.

A reasoning model writes a stretch of thinking first. It restates the problem, makes a plan, tries a step, checks it, and sometimes notices a mistake and goes back. All of it is ordinary text, produced the same way as any other reply, and the model reads it as it goes. Writing down an intermediate result gives the model something to check, and a mistake caught in the thinking never reaches the answer.

Nothing separate is bolted onto the model to make it think. Vendors train reasoning models on large numbers of problems with checkable answers, such as math and code, and reward the attempts that end in a correct answer. Over many rounds, the model picks up habits that tend to get there: breaking a problem into steps, checking its work, and trying another route when one fails.

The effort setting controls how much thinking the model may do. More effort allows a longer stretch of thinking, which means more chances to catch an error, and also more time and more of your usage.

Two cautions. Some tools show a summary of the thinking rather than all of it. And the thinking is not a guaranteed record of how the model reached its answer: models sometimes write reasons that don't match what actually drove the result. Read it as a working draft, not a proof.

Step through one problem below, first without thinking and then with it.

{{widget reasoning-trace}}

More thinking helps most on problems with several steps where an early mistake ruins the result: math, logic, planning, careful analysis. On simple tasks it's usually wasted.

## What a Bigger Model or More Effort Costs

On a subscription you don't pay per message, so the cost is easy to miss. There are two:

- **Time.** A large model at high effort can take a minute or more on a question a small model answers in seconds.
- **Allowance.** Claude Pro has a usage limit that resets every five hours and a second limit for the week, and both are shared across all models. Larger models and higher effort use them up faster. When you reach a limit, you wait or pay extra.

You can see where you stand in Claude under **Settings**, then **Usage**. If you run out during this week's lab, that is useful information about your choices.

## Choosing a Model and Effort Level

A default that works for most tasks:

1. **Start in the middle.** Use the middle model at its default effort.
2. **Move up when the answer is wrong, not when it is merely plain.** If a multi-step problem comes back with a mistake in the reasoning, try more effort or the large model.
3. **Move down for quick or repeated work.** Short rewrites, simple questions, and anything you'll run many times.
4. **Check your prompt before you move up.** A vague request gets a vague answer from any model. Describing the task better often helps more than a bigger model, and it costs nothing. That is next week's topic.

Three tasks show how this plays out:

| Task | Reasonable choice | Why |
|---|---|---|
| Make an email sound friendlier | Small or middle model, low effort | One step, easy to judge, nothing to reason through |
| Turn a 30-page reading into a study guide | Middle model, default effort | Long input, but the job is summarizing |
| Find the flaw in a budget where the totals don't add up | Large model or higher effort | Several steps, and one early mistake ruins the answer |

Try the three tasks below with different models and effort levels. For each one, look for the smallest choice that still gets the task right.

{{widget model-picker}}

Choosing a model and an effort level is a skill you'll use all term.

## Which Model Am I Using?

Look before you compare two answers. If you don't know which model wrote each one, you can't tell what caused the difference.

:::steps Find and Change the Model in Claude
1. Look next to the send button. The menu there shows the current model and effort level.
2. Select the model name, then choose a model. **More models** shows the rest.
3. To change effort, select the model name, select **Effort**, and choose a level. The recommended level for each model is marked **Default**.

A change applies from Claude's next response, so you can switch partway through a chat. These steps are from Anthropic's page [Change the model, effort, and thinking settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings).
:::

In other tools, look for a menu near the message box or at the top of the chat. If there isn't one, the tool has chosen for you.

Don't rely on asking the AI which model it is. Models often get their own name or version wrong.

### What You Can Choose Depends on the Tool

| Tool | Models | Effort control |
|---|---|---|
| Claude Pro | Several, from a menu | Yes, from Low to Max |
| Copilot Chat (Maryville) | One model on the account we tested | Quick response, Think deeper, or Auto |
| Free tiers | Usually smaller models | Limited |

> **Instructor note.** Say plainly that the Copilot row reflects one faculty account on one date. The point to land is not "Copilot is bad" but that a tool that hides model choice also hides a variable you need to understand.

## Model Cards and System Cards

When a vendor releases a model, it usually publishes a document describing what the model can do, how it was tested, and where it falls short. The usual names are **model card** and **system card**.

A card is the vendor's own account of its model. It is the best single source for a model's knowledge cutoff, its test results, and the risks the vendor checked for. It is also written by the company selling the model, so read it as you would any manufacturer's description.

Cards can run to a hundred pages or more. Read the summary, then go to the section you need.

- Anthropic lists its cards at [anthropic.com/system-cards](https://www.anthropic.com/system-cards).
- For another vendor, search for the model's name with "model card" or "system card".

## Comparing Models: Price and Benchmarks

Two more numbers come up whenever people compare models: what a model costs and how it scores on tests.

### Price

Companies and developers who build on a model pay for each **token** it reads and writes. Prices are quoted per million tokens, with one price for **input**, what you send, and a higher one for **output**, what the model writes. A model's thinking counts as output. Each vendor lists its prices on its website.

Within one family, the top tier can cost several times as much as the small tier. You don't see these prices on a subscription, but they explain your usage limits: a model that costs the vendor more per token uses up your allowance faster.

### Benchmarks

A **benchmark** is a fixed set of test problems used to score models, such as graduate-level science questions or real coding tasks. Vendors report scores in their announcements and system cards, and independent sites collect scores from many models into leaderboards.

Scores are useful for a rough comparison. Read them with a few cautions:

- **A benchmark measures one kind of task.** A high score on competition math says little about how well a model drafts a cover letter.
- **Vendors choose what to report.** A company tends to show the tests its model does well on, and it may run them under its own conditions. Compare scores from the same independent source when you can.
- **Models may have seen the test.** Questions from popular benchmarks can end up in training data, which inflates the score.
- **Small gaps rarely matter.** At the top, models are often a few points apart, which won't show up in everyday work.

The most useful benchmark is your own work. Give two models the same real task and compare the results, as you will in this week's lab.

## Key Terms

- **Company**: a business that builds and sells AI models or products, also called a vendor.
- **Model**: the trained system that reads your request and writes the reply.
- **Product**: the software you open, which you use to send prompts to a model.
- **Weights**: the numbers a model learned in training, which make it that model.
- **Open-weight model**: a model whose weights are released for anyone to download and run.
- **Closed-weight model**: a model whose weights stay with the vendor, used only through its products or paid access.
- **Model tier**: a size class within a model family.
- **Reasoning model**: a model that works through a problem in writing before answering.
- **Effort setting**: a control over how much a model reasons.
- **Usage limit**: the amount of work a subscription allows in a period of time.
- **Model card / system card**: a vendor's published description of a model's capabilities, testing, and limits.
- **Benchmark**: a fixed set of test problems used to score and compare models.
