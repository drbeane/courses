# Week 1: Reasoning and Choosing a Model

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

> **Instructor note: preparation.** Recheck the model pickers in Claude, Copilot Chat, and one free tool this week; they change often. The Claude menu steps and model names below were checked against Anthropic's help center on 2026-11-13, and the OpenAI model names against OpenAI's developer models page the same day. Recheck the tiers table before class. On 2026-10-03 the Maryville Copilot account showed only GPT 5.6 Sol with Quick response, Think deeper, and Auto; a student account may differ. The vendor, Cursor, and open-weight details were checked on 2026-11-16: xAI is part of SpaceX (its AI division has been called SpaceXAI and now SpaceXSI), SpaceX bought Cursor in August 2026, OpenAI announced the same month that it would stop supplying its models to Cursor, and Meta's Muse models are closed-weight. Have the privacy settings pages for Claude and Copilot ready to show. Timing: 15 min vendors and models, 40 min lab, 10 min privacy, 10 min share-out.

## What You Will Be Able to Do

- Describe how a reasoning model works through a problem, and why a higher effort setting changes the result.
- Choose a model and an effort level for a task, and say what the choice costs.
- Find out which model a tool is using, and find a model's system card.
- Read a model's price and benchmark scores with a critical eye.

The previous lesson covered who makes the models and the sizes in which they come. This lesson covers how a model can reason before it answers, and how to choose a model and an effort level for a task.

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

- **Reasoning model**: a model that works through a problem in writing before answering.
- **Effort setting**: a control over how much a model reasons.
- **Usage limit**: the amount of work a subscription allows in a period of time.
- **Model card / system card**: a vendor's published description of a model's capabilities, testing, and limits.
- **Benchmark**: a fixed set of test problems used to score and compare models.
