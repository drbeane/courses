# Week 1: Companies, Models, and Products

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

## What You Will Be Able to Do

- Tell apart the company, the model, and the product when someone names an AI tool.
- Identify the major AI companies and the tiers of models they offer.
- Explain the difference between open-weight and closed-weight models.

## Company, Model, and Product

Names like ChatGPT and Claude can mean a company, a model, or an app, depending on who is talking. Keeping the three apart helps you compare tools and understand what you are actually choosing.

| | What it is | Examples |
|---|---|---|
| **Company** | The business that builds and sells the technology | Anthropic, OpenAI, Google, Microsoft, Meta, xAI (now part of SpaceX) |
| **Model** | A large language model (LLM), the trained system that reads your request and writes the reply | Claude Opus, Claude Sonnet, GPT Sol, GPT Terra, Gemini, Grok |
| **Product** | The software you open, which you use to send prompts to a model | The Claude app, Claude Code, ChatGPT, Codex, Gemini, Gemini Notebook, Copilot, Cursor, Grok |

You will also see these companies called vendors, and the ones that train leading models are often called frontier labs.

Some companies build models, some build products, and many build both. The same name can refer to more than one of these: Claude is a family of models, and it is also the name of an app.

### The Model and the Product Do Different Jobs

The **product** is everything around the model: the window you type in, the buttons and menus, file upload, web search, memory, and any connections to your files or other apps. The **model**, which in this course means a large language model (LLM), reads your request, decides what to do, and writes the reply.

The two work together. When you ask a question that needs current information, the model might decide a web search would help and choose what to search for. The product runs the search and hands the results back, and the model reads them and writes the answer.

Companies split this work in different ways. Anthropic, OpenAI, and Google, for example, build both. Cursor, by contrast, started as a coding tool built on Anthropic's and OpenAI's models. It later began training its own model, Composer, and in 2026 SpaceX, which makes Grok, bought it. Cursor now belongs to a company that builds both models and products, and Cursor and SpaceX have developed Grok models together. And some models, especially open-weight ones, end up inside products their makers had nothing to do with.

A product is also not quite the same as a surface. A surface is a kind of environment where you interact with an AI, while a product is a particular piece of software that provides one or more of them. For example, ChatGPT provides a chat assistant, and the Claude app provides both a chat assistant and Cowork, a local agent.

### Models and Products Don't Line Up One to One

- **One product can use several models.** Many products let you choose. The Claude app offers Claude models at each size, from Haiku to Fable. ChatGPT offers several of OpenAI's GPT models, and which ones you see depends on your plan. Both of these offer only their own company's models. Other products, described below, offer models from several companies.
- **One model can sit inside several products.** The same Claude model answers you in the Claude app, in Claude Code, and inside other companies' tools, such as Microsoft's Copilot.
- **A product can use another company's models.** Microsoft's Copilot runs on models from OpenAI and, in some configurations, Anthropic. Cursor, a coding assistant, offers models from Anthropic, Google, and SpaceX, along with its own Composer model. After SpaceX bought Cursor, OpenAI announced that it would stop supplying its models to it. The models a product offers can change for business reasons that have nothing to do with how good the models are.

So when an answer is poor, ask which **model** produced it. When a feature is missing, such as file upload or web search, that is usually the **product**. The AI Surfaces lesson was about products and the kinds of tools they are. This lesson is about the models inside them.

## Open and Closed Weights

A model's **weights** are the billions of numbers it learned in training. They are what makes it that model. Vendors handle them in one of two ways:

- **Closed-weight models** stay on the vendor's computers. You use them through the vendor's products, or a developer pays to send requests to them. Claude, GPT, Gemini, Grok, and Meta's Muse models are closed.
- **Open-weight models** are released for anyone to download, run on their own hardware, and adapt.

Companies known for open-weight models include DeepSeek, Alibaba, Moonshot AI, Z.ai, Mistral, and Meta. They appear in the table in the next section.

Some closed-weight vendors also release smaller open models, such as Google's Gemma and OpenAI's gpt-oss.

Open weights matter most for privacy and control. An organization can run an open model on its own computers, so its data never leaves the building, and it doesn't pay per message. The trade-offs are that the largest open models need expensive hardware to run well, and the strongest closed models are usually somewhat ahead. Open weights are also not the same as open source: you get the trained model, but usually not the data or code used to train it, and the license may limit how you can use it.

## Who Makes the Models and Products

A handful of companies build most of the AI models and products you will meet. The table below lists several of the major ones as of November 2026. It begins with Anthropic, whose Claude is the main tool in this course, and ends with companies known mainly for open-weight models.

| Company | Models | Products |
|---|---|---|
| Anthropic | Claude (Haiku, Sonnet, Opus, Fable) | Claude app (including Cowork), Claude Code |
| OpenAI | GPT (Luna, Terra, Sol, Astra), gpt-oss | ChatGPT, Codex |
| Google | Gemini (Flash, Pro), Gemma | Gemini app, Gemini Notebook (formerly NotebookLM), Antigravity |
| Microsoft | MAI (MAI Code, MAI Image) | Copilot |
| Meta | Muse (Muse Spark), Llama | Muse personal agent |
| SpaceX | Grok, Composer | Grok app, Cursor |
| DeepSeek | DeepSeek | DeepSeek app |
| Alibaba | Qwen | Qwen app |
| Moonshot AI | Kimi | Kimi app |
| Z.ai | GLM | Z.ai chat |
| Mistral | Mistral | Vibe (formerly Le Chat) |

DeepSeek, Alibaba, Moonshot AI, and Z.ai are based in China, and Mistral is based in France. The companies behind these tools change hands and change course, and the tool your employer gives you may not be the one you'd choose, so it helps to know who makes what.

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

## Key Terms

- **Company**: a business that builds and sells AI models or products, also called a vendor.
- **Model**: the trained system that reads your request and writes the reply.
- **Product**: the software you open, which you use to send prompts to a model.
- **Weights**: the numbers a model learned in training, which make it that model.
- **Open-weight model**: a model whose weights are released for anyone to download and run.
- **Closed-weight model**: a model whose weights stay with the vendor, used only through its products or paid access.
- **Model tier**: a size class within a model family.
