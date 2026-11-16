# Week 2: Managing Usage Limits

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Open your own usage page in Claude (Settings, then Usage) to show it. Check the current limits on the Claude Help Center the week you teach ("What is the Pro plan?" and the usage-limit articles). Limits and their names change often, and vendors sometimes adjust them for a period without much notice. Don't quote message counts: Anthropic doesn't publish them, and they depend on what each message contains. Timing: 10 min.

## What You Will Be Able to Do

- Explain how a subscription's usage limits work, and why they are counted in tokens rather than messages.
- Name what uses up a limit fastest.
- Find how much of your limit you have used.
- Make a limit go further without getting worse results.

## Why There Are Limits

Every message you send costs the vendor computing time, and the cost grows with how much the model has to read and write. A subscription such as Claude Pro charges a flat monthly price, so the vendor caps how much work each account can do in a period. That cap is a **usage limit**.

The limit is not a fixed number of messages. It is closer to a budget of tokens. A short question in a new chat uses very little of it. A question at the end of a long chat with three PDFs attached uses much more, because the model rereads all of it.

## How Claude's Limits Work

At the time of writing, Claude's paid plans have two limits that run at the same time:

| Limit | How it works |
|---|---|
| **Session limit** | A window of about five hours that starts with your first message. When you reach the limit, you wait until the window resets. |
| **Weekly limit** | A cap on the total for the week, across all models, that resets at a fixed time each week. |

A few other things are worth knowing:

- **Plans differ.** The free plan's limits are much lower. Higher-priced plans raise both limits.
- **Products share one allowance.** Chatting on the website, in the desktop app, and on your phone all draw from the same limits. So do Claude's agent tools, such as Claude Code and Cowork, which you will use from Week 6. An afternoon of agent work can use a large share of the week.
- **You get warnings.** The product tells you when you're getting close to a limit and when it resets.

Other vendors work in similar ways, with their own names for the limits. ChatGPT, Gemini, and Copilot all cap use on their paid plans and give free users less.

> **Instructor note.** Recheck this table against the Help Center. If Anthropic has changed the windows or added a limit, update it before class.

## Checking Your Usage

:::steps Checking Usage in Claude
1. Open your account menu and select **Settings**.
2. Select **Usage**.
3. Read the bars for the current session and the current week, and when each one resets.
:::

Look at this page now and again for the first few weeks, until you have a feel for which kinds of work use the most. Most students find that ordinary chat rarely reaches the limit, and that long research sessions, large files, and agent tasks do.

## What Uses It Up

The things that cost the most are the same things that fill the context window:

- **Long chats.** Every message carries the whole conversation before it, so late messages in a long chat cost far more than early ones.
- **Large files.** A 50-page PDF is read again on every turn of the chat it's attached to.
- **Research and web search.** A research task can read dozens of pages, and all of that text is counted, even though you never see most of it.
- **Bigger models and more thinking.** The most capable models and higher effort settings use more of the limit for the same question. Week 1 covered how to choose.
- **Agent work.** An agent that reads a folder and takes many steps sends its growing context again at every step.
- **Rework.** A vague request that takes three tries costs three times as much as a clear one.

## Making It Go Further

None of these habits makes your results worse. Most make them better.

- **Start new chats.** When a chat has done its job, or the subject changes, start fresh. Bring a handoff file if the work continues (the last topic).
- **Attach only what the task needs.** Paste the two relevant pages, not the whole report.
- **Match the model to the task.** Use a fast model for quick questions and save the most capable one for hard problems.
- **Edit instead of arguing.** If a reply goes wrong early, edit your message and resend it. That replaces the bad reply instead of adding a correction on top of it.
- **Ask for several things at once.** One message that asks for an outline, a title, and three discussion questions costs less than three separate messages, because the context is read once.
- **Write a clear first prompt.** The first topic this week is the best way to save usage: a good prompt gets a usable answer in one try.
- **Turn off tools you don't need.** Web search and research are worth their cost when you need sources, and wasteful when you don't.

Try deciding which choice uses less below.

{{widget usage-saver}}

## When You Hit the Limit

It will happen, usually at an inconvenient time. You have a few options:

- **Wait for the reset.** The product tells you when it is.
- **Switch tools for a while.** Your Maryville Copilot Chat account and the free plans of other vendors are good for lighter work.
- **Plan around it.** Before a big deadline, don't spend the morning's session on something that could wait.

Don't share an account or a password with a classmate to get more usage. It is against the vendors' terms, and it puts everything in your account, including your memory and your chats, in someone else's hands.

## Key Terms

- **Usage limit**: a cap on how much work a subscription allows in a period, measured by how much the model reads and writes rather than by the number of messages.
- **Session limit**: a usage limit over a short window, about five hours for Claude's paid plans.
- **Weekly limit**: a usage limit on the total for a week, which resets at a fixed time.
