# Glossary: detailed entries

Detailed entries for the Glossary page. Each `##` heading must match a term in some lesson's Key
Terms section exactly (capitals don't matter). The short definition still comes from the lesson. On
the Glossary page, selecting a term opens a pop-up with the text under its heading, links to the
lessons that use the term (added automatically), and the links under its `### Resources` heading.
A term without an entry here shows only its short definition.

## Artificial intelligence (AI)

A subfield of computer science that is interested in building computer systems that handle tasks we would call intelligent if a person did them, such as understanding language, recognizing images, predicting, and planning.

The boundary keeps moving. Once a task becomes routine for computers, people tend to stop calling it AI: chess programs, spam filters, and route planners have all made that trip. Today the word covers everything from simple learned filters to the large language models behind chat assistants, so on a product label it says little about what the product actually does.

### Resources

- [Elements of AI](https://www.elementsofai.com/) (University of Helsinki), a free introductory course
- [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence) (Wikipedia)

## Rule-based system

A system whose behavior comes from rules that people wrote, such as "if the purchase is over $5,000 and made abroad, block it."

Rule-based systems are predictable and easy to audit: you can read the rules and see why a decision was made. They are also brittle. Anything the rules didn't anticipate can break them, and writing and maintaining the rules takes a lot of expert time. Tax software and the expert systems of the 1980s are examples. Many modern products combine rules with learned models.

### Resources

- [Expert system](https://en.wikipedia.org/wiki/Expert_system) (Wikipedia)

## Machine learning

The part of AI in which a system learns its behavior from examples instead of following hand-written rules.

Shown thousands of emails labeled spam or not spam, a machine learning system finds the patterns that separate them, including patterns no one would have thought to write down. The quality of what it learns depends on the quality of its examples, which is also how it can absorb their biases. Most AI in use today, including speech recognition, recommendations, and language models, is machine learning.

### Resources

- [Elements of AI](https://www.elementsofai.com/) (University of Helsinki)
- [Machine learning](https://en.wikipedia.org/wiki/Machine_learning) (Wikipedia)

## Neural network

A machine learning model made of many simple, connected calculations arranged in layers.

Each connection has a strength, called a weight. Training adjusts those weights, a little at a time, until the network's outputs match its examples. The design is loosely inspired by neurons in the brain, but a neural network is ordinary arithmetic on a very large scale. Large language models are neural networks with billions of weights.

### Resources

- [Neural networks series](https://www.3blue1brown.com/topics/neural-networks) (3Blue1Brown), a visual explanation
- [Neural network (machine learning)](https://en.wikipedia.org/wiki/Neural_network_(machine_learning)) (Wikipedia)

## Deep learning

Machine learning with neural networks that have many layers.

Neural networks were invented decades ago, but deep learning took over the field after 2012, once there was enough data and enough computing power (mostly graphics processors) to train large networks. Image recognition, speech recognition, translation, and today's language models are all deep learning. The History of AI page in the Appendix tells the story.

### Resources

- [Neural networks series](https://www.3blue1brown.com/topics/neural-networks) (3Blue1Brown)
- [Deep learning](https://en.wikipedia.org/wiki/Deep_learning) (Wikipedia)

## Generative AI

AI that produces new content, such as text, images, audio, video, or code, rather than only classifying or scoring what already exists.

A spam filter decides whether a message is spam. A chat assistant writes a reply that didn't exist before. Generative AI is powerful because the same system can produce many kinds of output, and risky for the same reason: what it produces is plausible, not guaranteed to be true or original.

### Resources

- [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) (Wikipedia)

## Token

The unit a language model reads and writes: a whole short word, a piece of a longer word, a punctuation mark, or a space.

In English a token averages about three-quarters of a word, so 1,000 words is roughly 1,300 tokens. Code, tables, and other languages often use more tokens per word. Context windows, usage limits, and API prices are all counted in tokens, which is why the length of what you send and receive matters.

### Resources

- [Large Language Models explained briefly](https://3blue1brown.substack.com/p/large-language-models-explained-briefly) (3Blue1Brown)

## Large language model (LLM)

A generative AI system: a neural network trained on a huge amount of text to predict and produce language, one token at a time.

"Large" refers to the number of parameters, which runs to billions. An LLM is trained in two stages: pretraining on text, then tuning to follow instructions and act as an assistant. LLMs are the models inside chat assistants such as Claude, ChatGPT, and Gemini, and inside most of the other AI tools in this course.

### Resources

- [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) (Andrej Karpathy, video)
- [Large Language Models explained briefly](https://3blue1brown.substack.com/p/large-language-models-explained-briefly) (3Blue1Brown)

## Knowledge cutoff

The date after which a model's training data stops.

A model knows nothing about events after its cutoff unless a tool, such as web search, adds current information to the conversation. Models are often unsure of their own cutoff, and their knowledge of the months just before it is thin. When a question depends on recent facts, prices, or product details, check them yourself or turn on search.

### Resources

- [Anthropic system cards](https://www.anthropic.com/system-cards), which state each Claude model's training data cutoff

## Sampling

How a model chooses each next token.

Instead of always taking the single most likely token, the model picks from the likely options at random, weighted by their probabilities. Sampling is why the same prompt can give different answers on different runs, and why a model's wording varies even when its facts don't. Settings such as temperature (Week 11) control how much randomness there is.

### Resources

- [Large Language Models explained briefly](https://3blue1brown.substack.com/p/large-language-models-explained-briefly) (3Blue1Brown)

## Parameters

The numbers inside a model that training adjusts, also called weights.

A large language model has billions of them. What the model "knows" is spread across these numbers as patterns; it doesn't keep a copy of its training text that it can look things up in. That's why a model can't tell you exactly where it learned something, and why it can produce a confident answer that no source ever contained.

### Resources

- [Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI) (Andrej Karpathy, video)

## Pretraining

The first and largest stage of training a language model, in which it learns to predict the next token across an enormous amount of text.

Pretraining gives the model its knowledge of language and the world, and it is where the knowledge cutoff comes from. A pretrained model only continues text. A second stage, often using human feedback, tunes it to follow instructions, decline harmful requests, and behave as a helpful assistant.

### Resources

- [Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI) (Andrej Karpathy, video)

## Surface

The environment where you interact with an AI system, which largely determines what it can see and change.

This course maps eight surfaces: chat assistants, embedded copilots, coding assistants, local agents, cloud and background agents, browser and computer-use agents, always-on agents, and APIs. The same model can sit behind several surfaces and be able to do very different things in each, from answering in a chat window to editing files on your computer.

### Resources

- [Claude documentation](https://docs.claude.com/), which covers Claude's apps, Claude Code, and the API

## Interface

The part of a tool you look at and operate: the message box, buttons, menus, a microphone.

Two products can use the same model and still feel very different because their interfaces differ. A good interface makes it clear what the tool is about to do and gives you a way to stop it. When you learn a new AI tool, find the controls for the model, the settings, and the history first.

## 4D framework

A framework for working with AI from Anthropic's AI Fluency course, created by Rick Dakan and Joseph Feller.

Its four skills are Delegation (what to hand to AI), Description (how to communicate the task), Discernment (judging what comes back), and Diligence (taking responsibility for the result). The skills work as a cycle rather than a checklist, and each week of this course emphasizes one of them.

### Resources

- [The AI Fluency Framework](https://aifluencyframework.org/) (Dakan and Feller)
- [AI Fluency: Framework & Foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) (Claude Academy)

## Delegation

The first of the four Ds: deciding whether to hand a task to an AI at all, which parts to hand over, and how much of the work it should do on its own.

Good delegation weighs what the AI does well, what a mistake would cost, and what you need to learn by doing the work yourself. It also covers choosing the tool: a chat assistant, a research agent, or an agent that can act on your files.

### Resources

- [The AI Fluency Framework](https://aifluencyframework.org/)
- [AI Fluency: Framework & Foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) (Claude Academy)

## Description

The second D: communicating a task clearly enough that the AI can do it well.

That means stating the goal, the context the AI can't know, the constraints, the audience, and the form you want the result in. Prompts, custom instructions, project instructions, task briefs for agents, and skills are all forms of Description, and much of this course is about writing them well.

### Resources

- [Prompt engineering overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) (Anthropic docs)
- [The AI Fluency Framework](https://aifluencyframework.org/)

## Discernment

The third D: judging what comes back.

Discernment means checking facts and sources, noticing what is missing, spotting when the AI has misunderstood the task, and deciding whether the output is fit for its purpose. It applies to the process as well as the product: whether an agent took sensible steps, not just whether its result looks right. Week 3 is about this skill.

### Resources

- [The AI Fluency Framework](https://aifluencyframework.org/)
- [AI Incident Database](https://incidentdatabase.ai/), real cases where AI output went wrong

## Diligence

The fourth D: taking responsibility for the result and for how AI was used to produce it.

Diligence covers disclosure, privacy, security, and fairness, and the plain fact that you, not the tool, answer for what you submit or send. It includes choosing tools whose data practices you can accept and being honest with others about AI's part in your work.

### Resources

- [The AI Fluency Framework](https://aifluencyframework.org/)

## AI fluency

The ability to work with AI systems effectively, efficiently, ethically, and safely.

It is broader than knowing how to write prompts. It includes deciding when to use AI at all, checking its work, understanding roughly how it works and where it fails, and using it responsibly. The 4D framework breaks it into four skills.

### Resources

- [AI Fluency: Framework & Foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) (Claude Academy)
- [AI Fluency for Students](https://academy.claude.com/courses/ai-fluency-for-students) (Claude Academy)

## Vendor

A company that builds or sells AI models or products, such as Anthropic, OpenAI, Google, Microsoft, or Meta.

Vendors differ in their models, their products, their prices, and their policies on privacy and training, so the choice of vendor matters as well as the choice of model. Some vendors build their own models; others, such as many app makers, build products on another company's models.

## Model

The trained system that reads your text and writes the reply, such as a particular version of Claude or GPT.

A model is separate from the product you use to reach it. When an answer is poor, the model is often the cause; when a feature is missing, such as file upload or web search, the product usually is. Vendors release new model versions often, and a product may let you choose among several.

### Resources

- [Change the model, effort, and thinking settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings) (Claude support)

## Product

The software you open, such as the Claude app or ChatGPT, which sends your words to a model and shows you the reply.

The product adds features around the model: file upload, web search, memory, projects, voice, connectors, and its own system prompt. That's why the same model can behave differently in two products, and why comparing tools means comparing products, not only models.

## Model tier

A size class within a model family, such as a small, fast, inexpensive model and a large, more capable, slower one.

Larger tiers handle harder problems better and use more of your usage limit or cost more through the API. Smaller tiers are often good enough for routine work and respond faster. Choosing the right tier for the task is one of the easiest ways to save usage.

### Resources

- [Change the model, effort, and thinking settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings) (Claude support)

## Reasoning model

A model that works through a problem step by step before giving its answer, often called "thinking."

Reasoning helps with math, planning, analysis, and multi-step problems, and takes longer and uses more tokens. Many current models can reason more or less depending on an effort setting. Reasoning makes errors less likely on hard problems but doesn't remove them.

### Resources

- [Change the model, effort, and thinking settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings) (Claude support)

## Effort setting

A control over how much a model reasons before answering.

Higher effort tends to give better answers on hard problems and costs more time and usage. For a simple question, low effort is usually enough and faster. If an answer to a hard question looks shallow, raising the effort is often a better fix than rewording the prompt.

### Resources

- [Change the model, effort, and thinking settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings) (Claude support)

## Usage limit

A cap on how much work a subscription allows in a period.

It is measured by how much the model reads and writes, not by the number of messages, so one message late in a long chat with large files can use as much as dozens of short ones. Claude's paid plans have a session limit and a weekly limit. Starting new chats, attaching only what's needed, and matching the model to the task all make a limit go further.

### Resources

- [What is the Pro plan?](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan) (Claude support)

## Model card / system card

A document a vendor publishes about a model: what it can do, how it was tested, what safety evaluations it went through, and its known limits.

Model cards are a useful source when you need more than marketing claims, for example when comparing models for a task or checking a model's training data cutoff. They are written by the vendor, so read them as one source among several.

### Resources

- [Anthropic system cards](https://www.anthropic.com/system-cards)

## Model training

Using stored conversations, or other data, to improve a later version of a model.

Many consumer products can use your chats for training unless you opt out, so a privacy setting decides whether what you type helps train future models. Business and education accounts usually exclude training by default. Training doesn't mean the model memorizes your chat word for word, but it is a reason not to paste private information.

### Resources

- [How do I change my model improvement privacy settings?](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings) (Claude privacy center)
- [Data controls in ChatGPT](https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt) (OpenAI)

## Opt out

To turn off a setting that is on by default.

For AI tools, it usually means turning off training on your conversations. Opting out typically affects future chats only, and some features, such as voice or feedback you submit, can have separate controls. Check the settings again after major product updates.

### Resources

- [How do I change my model improvement privacy settings?](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings) (Claude privacy center)
- [Data controls in ChatGPT](https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt) (OpenAI)

## Incognito chat / temporary chat

A conversation that isn't saved to your chat history, isn't used for training, and doesn't draw on or add to memory.

It is useful for one-off questions you don't want remembered or influenced by earlier chats. Products differ in how long they still keep a temporary chat for safety review, so a temporary chat is more private, not completely private.

## Prompt

The text you give a model to tell it what you want.

A strong prompt states the goal, gives the context the model can't know, sets constraints, names the audience, and says what form the answer should take. A useful test: would a capable coworker who knows nothing about your situation be able to do the task from it? Everything else in the context, such as files and earlier messages, works alongside the prompt.

### Resources

- [Prompt engineering overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) (Anthropic docs)
- [Prompt engineering interactive tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) (Anthropic, GitHub)

## In-context learning

A model picking up a pattern from examples in the prompt, with no retraining.

Show two examples of the summary style you want, and the model follows the pattern for the third. The learning lasts only as long as the examples are in the context; a new chat starts without it. It's the reason examples are one of the most effective things you can add to a prompt.

### Resources

- [Prompt engineering overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) (Anthropic docs)

## Few-shot prompting

Including a few examples of the desired output in a prompt so that the model follows their pattern.

It is one of the most reliable prompting techniques, especially for format and tone. Vary the examples so the model copies the pattern rather than the specific content. One example is "one-shot," and none is "zero-shot."

### Resources

- [Prompt engineering interactive tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) (Anthropic, GitHub)
- [Google Prompting Essentials](https://www.coursera.org/specializations/prompting-essentials-google) (Coursera)

## Context window

The total amount of text, in tokens, that a model can consider at once.

It holds the system prompt, instructions, memory, the conversation so far, files, tool results, and the reply being written. Current windows hold hundreds of thousands of tokens or more, but long contexts still cost more, and details in a very long context are more likely to be overlooked. Keeping the context focused usually gives better answers.

### Resources

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (Anthropic Engineering)

## System prompt

Instructions placed in the context before the conversation begins.

In a chat product the vendor writes it: it can give the date, list the tools the model can use, and set how it should behave. You usually can't see it, and it is one reason the same model behaves differently in different products. When you build with the API (Week 11), you write the system prompt yourself.

### Resources

- [Prompt engineering overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) (Anthropic docs)

## Conversation history

The earlier messages and replies in a chat.

A model keeps no memory between messages, so the product sends the whole history again with each new message. That is how the model seems to remember, and why long chats become slower, more expensive, and less reliable. Editing an earlier message replaces what follows it, which keeps a bad reply out of the history.

## Markdown

A way to mark a document's structure with ordinary characters: `#` for headings, `-` for bullets, `**` for bold, and so on.

A Markdown file is plain text with the extension `.md`. Chat tools write their replies in Markdown, it converts easily to Word or PDF, and agents use Markdown files for their instructions, skills, and notes. A dozen symbols cover almost everything you'll need.

### Resources

- [Markdown Guide](https://www.markdownguide.org/)

## Plain text

A file that holds only characters, with no hidden formatting, formulas, or tracked changes, so any text editor can open it and show everything in it.

Markdown, CSV, and JSON files are plain text. Plain text is easy to check, because what you see is all there is, and it moves cleanly between tools, which is why AI tools and agents work so well with it.

### Resources

- [Plain text](https://en.wikipedia.org/wiki/Plain_text) (Wikipedia)

## Handoff file

A short Markdown document that records where a piece of work stands: the goal, the decisions made, the current draft, open questions, and next steps.

You ask the model to write it at the end of a session, correct it, save it, and start a new chat with it. It keeps the useful context and drops the dead ends, and every message in the new chat costs less than it would have at the end of the old one. The same file works for a classmate, another tool, or an agent.

### Resources

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (Anthropic Engineering)

## Pandoc

A free, open-source program that converts documents between dozens of formats, including Markdown, Word, PDF, HTML, and slide decks.

It runs from the command line: `pandoc notes.md -o notes.docx` turns a Markdown file into a Word document. It's the standard tool for this job if you convert files often. An AI coding assistant can install and run it for you.

### Resources

- [Pandoc](https://pandoc.org/)

## Session limit

A usage limit over a short window.

On Claude's paid plans, the window is about five hours from your first message. When you reach it, you wait for the window to reset. It runs alongside a weekly limit, and the product shows how much of each you've used under Settings, then Usage.

### Resources

- [What is the Pro plan?](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan) (Claude support)

## Weekly limit

A usage limit on the total amount of work in a week, across all models and products on the account.

It resets at a fixed time each week. Agent work, long research sessions, and the largest models are the usual ways to reach it. Chat, the desktop and phone apps, and Claude's agent tools all draw from the same allowance.

### Resources

- [What is the Pro plan?](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan) (Claude support)

## Custom instructions

Standing instructions you write about yourself and how you want answers, which the product adds to every new chat.

Some products call them preferences. Good custom instructions are short and cover who you are and the formats and behaviors you want almost every time. Rules for one kind of task belong in a prompt or a project instead, because every line of custom instructions is read in every chat.

## Memory

Information a product saves about you and brings into later conversations.

It takes two main forms: a list of saved facts you can read and edit, and searching or summarizing your past chats. Either way, memory works by adding text to the context; it doesn't retrain the model. It saves reintroducing yourself, but it can carry stale facts, wrong guesses, or private details into unrelated chats, so review what's stored about you from time to time.

## Temporary chat

A conversation that doesn't use memory, isn't saved to it, and isn't kept in your history; also called incognito.

Use one when you don't want a conversation to influence later ones or to be remembered, or when you want an answer free of what the tool already knows about you.

## Standing context

Context that is added to every conversation without your typing it, such as custom instructions, memory, and project instructions.

It saves repeating yourself, but it enters quietly, so it can shape answers in ways you don't notice. When an answer seems oddly tailored, standing context is a likely reason.

## Voice mode

A spoken conversation with an AI tool: you talk, and the reply is read aloud, with a transcript saved afterward.

It suits thinking out loud, practicing an explanation or interview, being quizzed, and moments when your hands are busy. It is weaker for precise instructions, exact numbers and names, and results you need to copy or cite. Check the transcript before relying on anything that was said.

### Resources

- [Use voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode) (Claude support)

## Dictation

Turning speech into typed text, also called speech-to-text.

You read and fix the text before sending it, so you get the speed of talking with the precision of writing. Most people speak three or four times faster than they type, which makes it easy to give the detailed context good prompts need. Dictation is built into AI apps, into Windows, macOS, and phones, and into dedicated dictation services.

### Resources

- [Speech recognition](https://en.wikipedia.org/wiki/Speech_recognition) (Wikipedia)

## Voice typing

Windows' name for its built-in dictation.

Press Windows key + H in any text box to start it. It types what you say more or less word for word, and you often need to say punctuation aloud and clean up the result. On a Mac, the equivalent is Dictation, started by pressing the Fn key twice.

## Dictation service

An app, such as Wispr Flow, that uses AI to turn speech into polished text in whatever app you are using.

These services remove filler words, add punctuation, handle self-corrections, and learn names you use often. Most process your audio on their own servers, so everything you say passes through another company. Check their privacy settings and pricing before relying on one.

### Resources

- [Wispr Flow](https://wisprflow.ai/)

## Test set

A fixed set of inputs used to compare versions of a prompt or system.

Running every version against the same inputs shows whether a change helped, instead of relying on a single good-looking result. A good test set mixes ordinary cases with edge cases, and stays the same while you revise so that the comparison is fair.

### Resources

- [LLM Evals: Everything You Need to Know](https://hamel.dev/blog/posts/evals-faq/) (Hamel Husain and Shreya Shankar)

## Edge case

An unusual input that is likely to expose a weakness.

Examples: an empty document, a very long one, a request in another language, a question with no good answer, or data in an unexpected format. Including a few in a test set catches problems that ordinary inputs miss. In software (Week 10), edge cases are where tests earn their keep.

### Resources

- [Edge case](https://en.wikipedia.org/wiki/Edge_case) (Wikipedia)

## Evaluation

Measuring how well a prompt or system performs against stated criteria, using a test set and a way to score the results.

Evaluation turns "it seems better" into evidence. In Week 2 it means checking a prompt's outputs against a short list of criteria; in Week 12 it becomes a systematic test of an AI application, graded by code, by a model, or by people.

### Resources

- [LLM Evals: Everything You Need to Know](https://hamel.dev/blog/posts/evals-faq/) (Hamel Husain and Shreya Shankar)

## Hallucination

Output that sounds plausible but is invented: a citation to a paper that doesn't exist, a quote no one said, a statistic with no source.

Hallucinations happen because a model produces likely-sounding text, and a likely-sounding answer isn't always a true one. They are most common for specific details: names, dates, numbers, quotes, and references. A confident tone is no evidence either way, so verify any detail that matters against a source.

### Resources

- [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) (OpenAI)
- [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) (Wikipedia)

## Sycophancy

A model agreeing with the user instead of with the evidence.

Models are tuned partly on what people rate highly, and people tend to rate agreement highly. The result is a pull toward telling you your idea is good, changing a correct answer when you push back, or adopting the slant of a leading question. Ask neutral questions, and ask for the strongest case against your view.

### Resources

- [AI Fluency: Framework & Foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) (Claude Academy)

## Leading question

A question worded so that it suggests the answer the asker wants.

"Why is remote work better for productivity?" assumes the conclusion; "What does the research say about remote work and productivity?" doesn't. Because models lean toward agreeing, a leading question can get you a confident, one-sided answer. Ask the neutral version, or ask for both sides.

## Verification

Confirming a claim against something independent of the model that made it.

The model's own reassurance isn't verification. A primary source, a calculation you redo, a test you run, or a separate authority is. How much to verify depends on what a mistake would cost: a dinner idea needs none, a citation in a paper needs checking every time.

### Resources

- [AI search engines fail to produce accurate citations in over 60% of tests](https://www.niemanlab.org/2025/03/ai-search-engines-fail-to-produce-accurate-citations-in-over-60-of-tests-according-to-new-tow-center-study/) (Nieman Lab)

## Cross-check

Comparing answers from separate chats, models, or sources.

If two independent sources agree, you can be more confident; if they disagree, you've found something to look into. Two chats with the same model aren't fully independent, because they share the same training and the same blind spots, so cross-checking against a different model or a real source is stronger.

## Self-critique

Asking a model to review its own output.

It catches some problems, such as a missed requirement, a weak argument, or an inconsistency, especially when you give it specific criteria to check against. It can't reliably catch invented facts, because the model checking is the same one that invented them. Use it as a first pass, not as verification.

## Primary source

The original document, data, or record that a claim comes from: the study rather than an article about it, the law rather than a summary of it, the company's filing rather than a news report.

AI tools, and the secondary sources they draw on, often misstate details. When a claim matters, trace it back to the primary source and check that it really says what was claimed.

### Resources

- [Primary source](https://en.wikipedia.org/wiki/Primary_source) (Wikipedia)

## Effort

How much working-out a model does before answering; also called thinking or reasoning.

More effort helps on problems with several steps, such as math, planning, and analysis, and costs more time and usage. Some products set it automatically; others let you choose. When a model gets a hard problem wrong, raising the effort is a good first fix.

### Resources

- [Change the model, effort, and thinking settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings) (Claude support)

## Description–Discernment loop

Describing a task, checking the result, and using what you found to improve the description.

Most good results come from a few turns of this loop rather than from a perfect first prompt. Each problem you notice in the output tells you something the description left out, which you can add to the prompt, or to standing instructions so it doesn't happen again.

### Resources

- [The AI Fluency Framework](https://aifluencyframework.org/)

## Grounding

Giving a model a source to draw its answer from, such as uploaded documents, search results, or a database.

A grounded answer can be checked against its source, and it is less likely to be invented, though models can still misread or misquote a source. Projects, research agents, grounded notebooks, and retrieval-augmented generation are all ways of grounding.

## Thought partner

Using AI to test and extend your own thinking instead of to produce the finished work.

Examples: asking it to argue against your thesis, to find gaps in an outline, to quiz you, or to suggest questions you haven't asked. This use keeps the thinking, and the learning, with you, which matters most when the point of the work is what you learn by doing it.

## Disclosure

A statement of how AI was used in a piece of work.

A good disclosure says which tool, what it did, and what you did: "I used Claude to suggest an outline and to check grammar; the argument and wording are mine." Course policies, publishers, and employers increasingly require one. Being specific is more useful, and more honest, than a blanket statement.

### Resources

- [AI Fluency: Framework & Foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) (Claude Academy), which covers Diligence

## Authorship

Responsibility for the ideas and words in a piece of work.

Using AI doesn't remove authorship; it raises the question of which parts are yours. You remain responsible for everything you submit, including any errors the tool introduced. Many policies distinguish using AI for feedback or editing from having it write the work.

## Voice

The recognizable style of a particular writer: word choice, sentence rhythm, the way they make a point.

AI drafts tend toward a smooth, generic voice. If you use AI as a writing partner, keep your own voice by drafting first and asking for feedback rather than rewrites, or by giving the model samples of your writing to match.

## Project

A persistent workspace in a chat product, holding instructions, files, and sometimes memory, that every chat in it shares.

Projects save re-uploading the same files and re-explaining the same context for related work, such as a course, a research topic, or a job search. Their files and instructions are standing context, so keep them focused on that one area.

### Resources

- [Claude support center](https://support.claude.com/), see the articles on projects

## Project instructions

Standing directions that apply to every chat in one project.

They work like custom instructions with a narrower scope: who the work is for, the style and format to use, and rules that apply to that project only. Because they're read in every chat, keep them short, and test them on a few typical requests.

### Resources

- [Claude support center](https://support.claude.com/), see the articles on projects

## Knowledge base

The reference files attached to a project.

The model can draw on them in any chat in the project, and answers based on them can be checked against them. A knowledge base works best when it holds the documents you'll really use, such as a syllabus, readings, or style guide, rather than everything you have.

## Project memory

Memory scoped to one project, so that what the tool learns in that project stays there.

It keeps unrelated work from leaking into the project, and the project's details from turning up elsewhere. As with all memory, review what's stored now and then.

## Research agent

A tool that plans and runs many searches over several steps, reads the results, and returns a report with citations.

It can cover in minutes what would take hours of searching, and it can still cite sources that don't support its claims, miss key sources behind paywalls, or over-weight whatever was easiest to find. Treat its report as a lead to check, not a finished answer.

### Resources

- [Claude support center](https://support.claude.com/), see the articles on research

## Agent

A model that works through a multi-step task by choosing its own next actions, such as searching, reading files, running code, or using connectors, until the task is done.

What makes something an agent is that the model decides the steps, rather than a person or a fixed program. That makes agents flexible, and it means their mistakes can build on each other, so supervision matters more as autonomy grows.

### Resources

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering)
- [Hugging Face Agents Course](https://huggingface.co/learn/agents-course)

## Citation audit

Checking each citation in a report against the claim it is attached to.

For each one: does the source exist, can you open it, and does it actually say what the report claims? AI tools often attach real sources to claims those sources don't make, so an audit catches problems a quick look at the reference list won't.

### Resources

- [AI search engines fail to produce accurate citations in over 60% of tests](https://www.niemanlab.org/2025/03/ai-search-engines-fail-to-produce-accurate-citations-in-over-60-of-tests-according-to-new-tow-center-study/) (Nieman Lab)
- [Tow Center for Digital Journalism](https://www.cjr.org/tow_center/) (Columbia Journalism Review)

## Paywall

A barrier that limits a source to paying readers.

Research tools often can't read paywalled sources, so their reports lean on whatever is freely available, and may miss the most authoritative work. Your library can usually get you through the paywall when a source matters.

### Resources

- [Paywall](https://en.wikipedia.org/wiki/Paywall) (Wikipedia)

## Grounded notebook

A tool, such as NotebookLM, that answers only from sources you supply and links each answer to the passage it came from.

Because answers point back to your sources, they are easy to check, and the tool is less likely to invent outside facts. It can still misread a passage or miss relevant material, and it can't tell you what your sources leave out.

### Resources

- [NotebookLM help](https://support.google.com/notebooklm/)

## Retrieval

Finding the passages most relevant to a question in a larger collection of documents.

Retrieval is how grounded notebooks, projects with large files, and RAG applications decide what the model gets to read. If retrieval misses the right passage, the answer will be wrong or incomplete even if the model is excellent.

### Resources

- [Retrieval-augmented generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) (Wikipedia)

## Chunk

A passage of a source document used in retrieval.

Long documents are split into chunks, often a few hundred words each, so the system can find and pass on only the relevant parts. Chunk size is a trade-off: small chunks are precise but lose context, large chunks keep context but bring in noise.

### Resources

- [Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) (Anthropic, GitHub), which include retrieval examples

## Embedding

A list of numbers representing the meaning of a piece of text, so that passages with similar meanings have similar numbers.

Retrieval systems compute an embedding for each chunk and for the question, then pick the chunks whose embeddings are closest. Embeddings match meaning rather than exact words, so "car" can find a passage about "vehicles," though they can also miss exact names and codes.

### Resources

- [Word embedding](https://en.wikipedia.org/wiki/Word_embedding) (Wikipedia)

## CSV

Comma-separated values: a plain-text format for tables, with one row per line and commas between the values.

The first line usually holds the column names. Every spreadsheet and data tool reads CSV, which makes it the safest way to move a table between tools. Watch for values that contain commas, inconsistent dates, and numbers stored as text.

### Resources

- [RFC 4180: the CSV format](https://www.rfc-editor.org/rfc/rfc4180)
- [Comma-separated values](https://en.wikipedia.org/wiki/Comma-separated_values) (Wikipedia)

## JSON

A plain-text format for structured records, written with curly braces, square brackets, and `"name": value` pairs.

JSON can hold nested data, such as a person with a list of addresses, which a CSV table can't. Programs and APIs exchange data as JSON, and in Week 11 you'll ask models to answer in it so a program can read the result.

### Resources

- [JSON](https://www.json.org/)

## Mermaid

A plain-text format for diagrams: flowcharts, timelines, sequence diagrams, and more, written as short lines of text.

AI tools write Mermaid well, and because it's text, a diagram is easy to edit, check, and keep in a Markdown file. Many tools, including GitHub and this site, draw Mermaid diagrams automatically.

### Resources

- [Mermaid documentation](https://mermaid.js.org/)

## Code execution

A model writing and running a program to answer a question, such as analyzing a spreadsheet or making a chart.

The code runs in a sandbox and the model reads the result. Calculations done in code are far more reliable than a model doing arithmetic in its head, and you can read the code to check what was done. Errors still happen, usually in how the data was read or filtered.

### Resources

- [Claude support center](https://support.claude.com/), see the articles on analysis and file creation

## Data cleaning

Fixing or removing errors, duplicates, and inconsistencies in a dataset before analysis.

Typical problems: duplicate rows, a category spelled two ways, mixed units, blank values, and dates in several formats. An AI tool can clean data quickly, but ask it to report every change it made, and spot-check them, because a silent cleaning decision can change the result.

### Resources

- [Data cleansing](https://en.wikipedia.org/wiki/Data_cleansing) (Wikipedia)

## Aggregation

Combining many rows into one number, such as a total, an average, or a count.

Aggregates hide errors: a few duplicate rows or one value in the wrong units can change a total without anything looking wrong. Check an aggregate against a quick count or a subset you calculate yourself.

## Verification log

A record of what you checked and what you found.

For each claim or number: what you checked it against, whether it held up, and what you changed. A log makes your checking visible to others and to your future self, and it's a habit carried through the rest of the course.

## FERPA

The Family Educational Rights and Privacy Act, the U.S. law that protects the privacy of student education records.

It limits who can see records such as grades and transcripts without the student's consent. In practice: don't paste other students' records into an AI tool, and use only institution-approved tools for anything that involves them.

### Resources

- [Student Privacy Policy Office](https://studentprivacy.ed.gov/) (U.S. Department of Education)

## Artifact

A document, web page, diagram, or other piece of work that a chat tool builds and shows beside the conversation, where you can view, edit, download, or share it.

Artifacts keep a piece of work separate from the chat around it, so you can revise it over several messages. An interactive artifact, such as a small app, runs in your browser.

### Resources

- [Claude support center](https://support.claude.com/), see the articles on artifacts

## Multimodal

Able to take more than one kind of input, such as text and images, or text and audio.

A multimodal model can read a photo of a whiteboard, a chart, a scanned form, or a screenshot. It reads images less reliably than text, especially small print, handwriting, and exact numbers in charts, so check anything you'll rely on.

### Resources

- [Multimodal learning](https://en.wikipedia.org/wiki/Multimodal_learning) (Wikipedia)

## Generative media

Images, audio, or video produced by AI.

Quality has risen fast, and so have the risks: misleading images, imitations of real people, and questions about the training data and the rights to the output. Label AI-generated media when you share it, and check a tool's terms before using its output commercially.

## Raster image

An image made of a grid of pixels, such as a photo or a PNG.

AI image generators produce raster images. They can't be edited like a diagram: text in them is often garbled, and enlarging them loses sharpness. For charts and diagrams you'll edit, ask for a vector format or code (such as Mermaid) instead.

### Resources

- [Raster graphics](https://en.wikipedia.org/wiki/Raster_graphics) (Wikipedia)

## Provenance

Where a piece of content came from and how it was made.

For media, provenance can be recorded in the file itself: the Content Credentials standard (C2PA) attaches a signed record of what tool made or edited an image. It helps show that something is AI-generated, but the record can be stripped, so its absence proves nothing.

### Resources

- [C2PA and Content Credentials](https://c2pa.org/)

## Deepfake

Realistic fake media of a real person: video, audio, or images showing them saying or doing something they didn't.

Deepfakes are used for fraud, harassment, and misinformation. Be suspicious of surprising media of real people, check where it came from, and never make realistic fake media of real people without their consent.

### Resources

- [Deepfake](https://en.wikipedia.org/wiki/Deepfake) (Wikipedia)

## Embedded copilot

AI built into an existing application, such as Microsoft 365 Copilot in Word and Excel, working on what is open in it.

It saves moving content between apps, and in an organization it often has access to your files and email, which makes it useful and makes permissions matter. It usually runs on the same kinds of models as chat assistants, with the application's features around it.

### Resources

- [Explore Microsoft 365 Copilot Chat](https://learn.microsoft.com/en-us/training/paths/explore-microsoft-365-copilot-business-chat) (Microsoft Learn)

## License

The agreement that sets which features an organization's users get, and under what terms.

Two people using "Copilot" can have very different tools depending on their licenses. Licenses also set data terms, such as whether prompts are used for training, which is why work and school accounts are often safer for sensitive material than personal ones.

## Harness

The program that runs the model in an agent: it sends the model the context, runs the tools the model asks for, returns the results, and enforces permissions.

The same model behaves very differently in different harnesses, because the harness decides what the model can see and do. Claude Code and Cowork are harnesses. When you set an agent's permissions, you're configuring the harness, not the model.

### Resources

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering)

## Tool-use loop

The cycle at the heart of every agent: the model asks for a tool, the harness runs it, the result goes back to the model, and the model decides what to do next.

The loop repeats until the model decides the task is done. Each turn adds to the context, which is why long agent tasks use a lot of usage, and why an early mistake can carry through many later steps.

### Resources

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering)

## Task brief

A description of a job for an agent: the goal, the inputs, the constraints, and the acceptance criteria.

A good brief is what you'd hand a capable new colleague. It says where the files are, what done looks like, and what not to touch. A clear brief is also the cheapest way to save usage, because the agent doesn't have to explore to guess what you meant.

## Acceptance criteria

The checks that decide whether a task was done correctly.

Written before the work starts, they turn "looks fine" into something you can verify: "every invoice in the folder appears in the spreadsheet, and the totals match." Giving them to the agent lets it check its own work, and gives you a checklist for reviewing it.

## Constraint

A limit on how a task may be done: files not to change, a format to follow, a deadline, a budget, or a source to avoid.

Agents follow stated constraints well and guess at unstated ones. If something must not happen, say so, and for anything serious, back it with a permission setting rather than relying on the instruction alone.

## Plan mode

A setting in which an agent proposes a plan and makes no changes until you approve it.

It lets you catch a misunderstanding before any files change, which is much cheaper than undoing work. Use it for larger or riskier tasks, and read the plan for what it will touch, not just what it will produce.

### Resources

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code/overview)

## Approval

Your permission for a specific action, such as editing a file, running a command, or sending a message.

Approvals keep you in control, but too many prompts lead to approval fatigue, where people click yes without reading. Set an agent's permissions so that routine, reversible actions run freely and only consequential ones ask.

## Irreversible action

An action that can't easily be undone: deleting files, sending email, posting, paying, or overwriting a document with no backup.

Irreversible actions deserve the most caution with agents. Require approval for them, work on a copy, or use version control so that a mistake can be rolled back.

## Usage allowance

How much work your plan allows in a period, the same idea as a usage limit.

Agent tasks use far more of it than chat, because the agent reads files and takes many steps, sending its growing context each time. Check what a task cost after it runs to build a sense of which tasks are expensive.

### Resources

- [What is the Pro plan?](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan) (Claude support)

## Standing instructions

Instructions that apply across many tasks, rather than to one.

They range from global instructions for everything you do, through instruction files for one folder or project, to the instructions inside a skill. Writing a correction into standing instructions means you only have to make it once.

## Instruction file

A Markdown file of standing instructions stored in a folder, which an agent reads whenever it works there.

Common names are `AGENTS.md`, read by many tools, and `CLAUDE.md`, read by Claude Code. A good one describes the project, its conventions, the commands to run, and what not to touch. Keep it short and current: an outdated instruction is followed as faithfully as a correct one.

### Resources

- [AGENTS.md](https://agents.md/)
- [Claude Code best practices](https://www.anthropic.com/engineering/claude-code-best-practices) (Anthropic Engineering)

## Global instructions

Standing instructions that apply to all of your work in a product, regardless of folder or project.

They suit preferences that truly apply everywhere, such as how you like answers formatted or the language you write in. Anything specific to one project belongs in that project's instruction file instead.

## Skill

A reusable procedure an agent can load when it's relevant: a folder with a `SKILL.md` file of instructions, plus any templates, examples, or scripts it needs.

Skills let you teach an agent a task once, such as formatting a lab report or preparing a weekly summary, and reuse it. Only the skill's short description sits in the context until it's needed, so you can have many skills without crowding the context.

### Resources

- [Agent Skills documentation](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) (Anthropic docs)
- [anthropics/skills](https://github.com/anthropics/skills) (GitHub), example skills

## Description (of a skill)

The short text at the top of a skill that an agent reads to decide when to load it.

It's the most important line in a skill: if it doesn't clearly say what the skill does and when to use it, the agent won't load it at the right time. Name the situations and phrases that should trigger it.

### Resources

- [Agent Skills documentation](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) (Anthropic docs)

## Supporting file

A template, example, reference document, or script stored in a skill's folder.

The skill's instructions point to these files, and the agent reads or runs them only when needed. Putting detail in supporting files keeps `SKILL.md` short, and a script gives the same result every time where instructions might be followed differently.

### Resources

- [anthropics/skills](https://github.com/anthropics/skills) (GitHub)

## Trigger

What causes an agent to load a skill or start a task: a request that matches a skill's description, a scheduled time, or an event such as a new email.

Testing triggers matters as much as testing the skill itself. Try requests that should load it and some that shouldn't. For always-on agents, a trigger can start work while you're away, so choose triggers carefully.

## Plugin

A package that bundles skills, connectors, commands, and other components so they can be shared and installed together.

Plugins are how a team or organization distributes a working setup. Installing one gives an agent new abilities and, often, new access, so review what a plugin includes before you install it.

## Marketplace

A catalog from which plugins and skills can be installed.

Marketplaces can be public or run by an organization for its own people. As with app stores, a listing isn't a guarantee of quality or safety. Prefer sources you trust and read what a plugin can access.

## Working folder

The folder an agent has been given to read and change.

Limiting an agent to one folder limits the damage a mistake can do. Give it a folder with only what the task needs, and keep a copy or use version control for anything you can't afford to lose.

## Connector

A link that lets an agent or chat assistant reach an outside service, such as your calendar, email, task list, or a company database.

Connectors make AI far more useful and widen what can go wrong: a connected agent can read, and sometimes change, everything the connection allows. Grant the narrowest access that works, and remember that content it reads could contain hidden instructions.

### Resources

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Claude support center](https://support.claude.com/), see the articles on connectors

## MCP (Model Context Protocol)

An open standard for connecting AI applications to tools and data.

Before MCP, each AI product needed its own integration for each service. With MCP, a service is wrapped once as an MCP server, and any application that supports MCP can use it. It was introduced by Anthropic in 2024 and is now supported by many vendors.

### Resources

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [MCP: Build Rich-Context AI Apps with Anthropic](https://learn.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic) (DeepLearning.AI)

## MCP server

The program that offers a service's tools and resources through MCP.

A server for a task app might offer tools such as "add task" and "list tasks due this week." Servers can run on your computer or on the internet. A server can be written by the service itself or by anyone else, so check who made one before connecting it.

### Resources

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Hugging Face MCP Course](https://huggingface.co/learn/mcp-course/unit0/introduction)

## Tool

An action a connector or harness lets a model take, such as searching, reading a file, sending a message, or creating a calendar event.

Each tool has a name, a description, and inputs, and the model decides when to call it. Read-only tools are low risk; tools that change, send, or delete things deserve approval settings.

### Resources

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering)

## Resource

Data a connector lets an agent read, such as a file, a document, or a record, as distinct from a tool, which takes an action.

In MCP, resources are offered by a server alongside its tools. Anything an agent reads becomes part of its context, so a resource from an untrusted source can carry prompt injection.

### Resources

- [Model Context Protocol](https://modelcontextprotocol.io/)

## Permission screen

The page where a service lists what a connector is asking to do, such as "read your email" or "manage your calendar," before you approve it.

It's your best chance to limit access. Read it, prefer narrower scopes when offered, and remember that you can revoke access later from the service's settings.

## Browser agent

An agent that operates a web browser: opening pages, reading them, clicking, typing, and filling in forms.

It can work with sites that have no connector, which makes it flexible. It is also exposed to everything on the pages it reads, including hidden instructions, so give it narrow tasks, watch consequential steps, and keep it away from accounts you can't afford to have misused.

### Resources

- [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) (Simon Willison)

## Computer-use agent

An agent that operates a computer's screen, keyboard, and pointer, working in desktop apps the way a person would.

It can reach almost anything on your computer, which is its strength and its risk. It's slower and less reliable than a connector or a script, so use it when nothing more direct exists, and supervise it.

## Hand-off

Starting a task that continues without you, such as a cloud agent that keeps working after you close your laptop.

Hand-offs let agents do long tasks, and mean you aren't there to catch a wrong turn. Give a handed-off task a clear brief, narrow permissions, and a way to report back, and check its result before relying on it.

## Scheduled task

An agent task set to run at set times, such as a summary of your inbox every morning.

Scheduled tasks run without you watching, so silent failures can go unnoticed for a while. Have the task report what it did, and check the first few runs closely.

## Silent failure

A run that went wrong without reporting an error: an empty summary, a skipped step, a report built on stale data.

Agents tend to report success. Guard against silent failures by having tasks state what they checked, by spot-checking results, and by watching for output that looks unusually thin or unchanged.

## Prompt injection

Instructions hidden in content an agent reads, such as a web page, email, or document, which the agent may follow as if they came from you.

It's the central security problem for agents, because a model can't reliably tell your instructions from text it reads. It's most dangerous when an agent can read untrusted content, see private data, and send information out, all at once. Defenses include least privilege, approvals for consequential actions, and keeping untrusted content away from sensitive tools.

### Resources

- [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) (Simon Willison)
- [OWASP Top 10 for Agentic Applications (2026)](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026)

## Least privilege

Granting only the access a task needs, and no more.

For agents: read access instead of write, one folder instead of your whole drive, one calendar instead of all your accounts. If something goes wrong, through a mistake or prompt injection, least privilege limits the damage.

### Resources

- [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) (Wikipedia)

## Untrusted input

Content you didn't write and can't vouch for: web pages, incoming email, shared documents, files from strangers, tool results from unknown servers.

Treat any untrusted input an agent reads as potentially containing instructions. An agent that reads untrusted input should not also have unsupervised access to private data and a way to send it out.

### Resources

- [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) (Simon Willison)

## Jailbreaking

A user's attempt to get a model to break its own rules, usually through role-play, hypotheticals, or other tricks.

It differs from prompt injection: in jailbreaking, the person typing is the attacker; in prompt injection, the attacker is whoever wrote the content the agent reads, and the user is the victim.

### Resources

- [OWASP 2026 Top 10 for LLM Applications announcement](https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/)

## Exfiltration

Sending private data out to someone who shouldn't have it.

With agents, exfiltration can be as subtle as a link with your data in its address, an email, or a request to a web page. It's the step that turns prompt injection into a real leak, so limiting what an agent can send matters as much as limiting what it can read.

### Resources

- [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) (Simon Willison)

## Source code

The text files of instructions, written in a programming language, that make up a program.

AI coding assistants read and write source code, and you don't need to write it yourself to work with them. You do need to know enough to run it, test it, and see what changed.

## Repository

A project's files plus their full history, tracked by Git.

Often called a repo. A repository lets you see every change ever made and return to any earlier version, which makes it the main safety net when an AI assistant edits code. A copy can live on your computer and online, on a site such as GitHub.

### Resources

- [Pro Git](https://git-scm.com/book), the free official Git book

## Terminal

A text interface for running commands, also called the command line.

You type a command, such as `git status` or `npm test`, and read the text it prints. Coding assistants run commands in a terminal on your behalf, so knowing what common commands do helps you judge what they're about to run.

### Resources

- [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/2026) (MIT)

## Dependency

Code from someone else that a project relies on, such as a library for reading spreadsheets.

Dependencies save writing everything from scratch and bring risk: they can have bugs, go unmaintained, or be malicious. AI assistants sometimes suggest packages that don't exist or are poorly maintained, so check before installing.

## Coding assistant

An agent that works in a software project, with access to its files, the terminal, and the tests.

Examples include Claude Code, GitHub Copilot's agent mode, and Cursor. It can read the whole project, make changes across many files, run the program, and fix what fails. Version control and tests are what make that safe.

### Resources

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code/overview)
- [Claude Code: A Highly Agentic Coding Assistant](https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant) (DeepLearning.AI)

## Vibe coding

Building software by describing what you want and accepting the result without reviewing the code.

It's fine for a throwaway prototype and risky for anything that handles real data, money, or other people's information. The difference between vibe coding and responsible AI-assisted coding is the checking: specs, tests, and review.

### Resources

- [Vibe coding](https://en.wikipedia.org/wiki/Vibe_coding) (Wikipedia)

## Editor

A program for viewing and changing a project's files, such as VS Code.

Editors for code show files side by side, highlight the language's syntax, and often include a terminal and an AI assistant. You'll use one to read what an assistant changed.

### Resources

- [VS Code getting started](https://code.visualstudio.com/docs)

## Git

A program that records the history of a project as a series of commits.

It lets you see what changed, when, and why, and return to any earlier state. When an AI assistant makes a mess, Git is how you undo it, so commit before asking for a big change.

### Resources

- [Pro Git](https://git-scm.com/book)
- [GitHub Skills](https://skills.github.com/)

## GitHub

A website that stores Git repositories online and adds tools for sharing and reviewing code.

It's where most open-source software lives, where teams review each other's changes, and a common way to publish a project. Many coding assistants can work with GitHub directly.

### Resources

- [GitHub Skills](https://skills.github.com/)

## Commit

A saved snapshot of changes in Git, with a message saying what changed and why.

Small, frequent commits make it easy to find when something broke and to undo just that change. A good habit with AI assistants: commit working code before each new request.

### Resources

- [Pro Git](https://git-scm.com/book)

## Diff

A line-by-line view of what changed between two versions of a file, with added lines and removed lines marked.

Reading the diff is how you review what an AI assistant actually did, as opposed to what it says it did. Look for changes you didn't ask for.

### Resources

- [Diff](https://en.wikipedia.org/wiki/Diff) (Wikipedia)

## Revert

To undo a change by returning to an earlier state.

With Git, you can revert a single commit or go back to any earlier version of the project. It's what makes trying an AI's change low-risk: if it doesn't work, revert it.

### Resources

- [Pro Git](https://git-scm.com/book)

## Push

To send commits from your computer to an online repository, such as one on GitHub.

Pushing backs up your work and shares it. On many projects, pushing also triggers automatic tests or publishes a website, so check that the code works before you push.

### Resources

- [Pro Git](https://git-scm.com/book)

## Autocomplete

A coding assistant that suggests the next lines as you type, which you accept or ignore.

It's the lightest-touch form of AI coding: you stay in control of every line, and suggestions are small enough to check at a glance. It speeds up routine code and can still suggest plausible-looking mistakes.

## Agent mode

A coding assistant that plans and carries out a multi-step task in a project: reading files, editing several of them, running commands and tests, and fixing what fails.

It can accomplish far more per request than autocomplete, and it needs more supervision: a clear spec, plan mode for larger changes, and review of the diff.

### Resources

- [Claude Code best practices](https://www.anthropic.com/engineering/claude-code-best-practices) (Anthropic Engineering)

## Acceptance test

A check that decides whether a piece of software does what was asked, from the user's point of view.

For example: "upload a CSV with 100 rows, and the summary shows 100 records." Writing acceptance tests before asking an AI to build something gives both of you a clear finish line.

### Resources

- [Acceptance testing](https://en.wikipedia.org/wiki/Acceptance_testing) (Wikipedia)

## Allowance

How much use a plan permits in a period; the same idea as a usage limit or usage allowance.

Coding agents can use a lot of it quickly, because they read many files and run many steps. Plans differ in how much they allow, and some tools show the cost of each task.

## Specification

A precise description of what software must do: its inputs, outputs, behavior, and limits.

A spec is the coding version of a task brief. Writing one before asking an AI to build something forces you to decide what you want, and gives the AI and the tests something concrete to aim at.

### Resources

- [Claude Code best practices](https://www.anthropic.com/engineering/claude-code-best-practices) (Anthropic Engineering)

## Requirement

One statement of something the software must do, such as "rejects dates in the future."

Good requirements are specific and testable: you can write a test that passes or fails. A spec is largely a list of requirements.

### Resources

- [Software requirements specification](https://en.wikipedia.org/wiki/Software_requirements_specification) (Wikipedia)

## Test

A small program that checks one promise about the software, such as "the total of an empty list is zero."

Tests run automatically and pass or fail. With AI-written code they are essential: they tell you whether the code works without your reading every line, and they catch it when a later change breaks something.

### Resources

- [Unit testing](https://en.wikipedia.org/wiki/Unit_testing) (Wikipedia)

## Test suite

The full set of tests for a project.

Running the whole suite after every change shows whether anything broke. Ask an AI assistant to run it after each change, and be wary of an assistant that "fixes" a failing test by weakening the test.

## Regression

A bug in something that used to work, caused by a later change.

AI assistants can cause regressions when they change more than you asked. A good test suite catches them, which is why tests should cover existing behavior, not only new features.

### Resources

- [Software regression](https://en.wikipedia.org/wiki/Software_regression) (Wikipedia)

## Code review

Examining a change before accepting it: reading the diff, asking whether it does what was asked, and looking for problems.

Review AI-written code at least as carefully as a colleague's: check for changes you didn't ask for, hard-coded values, missing error handling, secrets, and tests that were weakened.

### Resources

- [Code review](https://en.wikipedia.org/wiki/Code_review) (Wikipedia)

## Hard-coded value

A specific value written into code where a general rule was needed, such as code that returns the expected answer for the test case instead of computing it.

It's a common shortcut in AI-written code under pressure to pass tests. Watch for it in review: the tests pass, but the program only works for the cases it was shown.

### Resources

- [Hard coding](https://en.wikipedia.org/wiki/Hard_coding) (Wikipedia)

## Secret

A password, API key, or access token that grants access to an account or service.

Secrets must never be written into code, committed to a repository, or pasted into a chat. Keep them in environment variables or a secrets manager. If one is exposed, revoke it and make a new one.

## Review log

A record of the changes you inspected and what you decided about each.

It documents your Discernment: what the AI changed, what you checked, what you accepted or rejected, and why. It's the coding version of the verification log.

## Debugging

Finding and fixing the cause of a failure.

The reliable method: reproduce the failure, narrow down where it happens, find the root cause, fix it, and add a test so it doesn't come back. AI assistants are good at debugging when you give them the exact error and the steps to reproduce it.

### Resources

- [Debugging](https://en.wikipedia.org/wiki/Debugging) (Wikipedia)

## Reproduce

To make a failure happen again on demand.

A failure you can reproduce, you can fix and test; one you can't is guesswork. When you report a bug to an AI assistant, include the exact steps and input that cause it.

## Root cause

The underlying reason for a failure, as distinct from its visible symptom.

AI assistants sometimes patch the symptom, for example by catching an error and hiding it. Ask what caused the failure, and whether the fix addresses that cause.

### Resources

- [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis) (Wikipedia)

## Sub-agent

A helper agent started by another agent to handle part of a task, such as searching a large codebase, with its own fresh context.

Sub-agents keep the main agent's context clean and can work in parallel. They also multiply usage and add more steps you didn't watch, so check the combined result.

### Resources

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code/overview)

## Supply-chain risk

Risk from the third-party code your project depends on: a dependency with a bug, an abandoned package, or one deliberately made malicious.

AI assistants add to it by suggesting packages that don't exist (which attackers can then create) or that are poorly maintained. Check a package's name, popularity, and maintainer before installing it.

### Resources

- [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack) (Wikipedia)

## API

Short for application programming interface: a defined way for programs to talk to a service.

An AI vendor's API lets your own program send a prompt to a model and get the reply back, without a chat window. That's how AI is built into apps and workflows. You pay per token, and you control the system prompt, the model, and the settings.

### Resources

- [Claude documentation](https://docs.claude.com/)
- [Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) (Anthropic, GitHub)

## Temperature

A setting that controls how much randomness goes into sampling.

Low temperature makes the model pick the most likely tokens, giving more consistent answers; high temperature spreads its choices, giving more varied ones. Use a low setting for extraction and classification, and a higher one for brainstorming. It doesn't make a model more or less accurate.

### Resources

- [Claude documentation](https://docs.claude.com/)

## API key

A secret string that identifies your account to an API, so the vendor knows whom to bill.

Anyone who has your key can spend your money. Keep it in an environment variable, never in code or a repository, and revoke it at once if it leaks.

### Resources

- [Claude documentation](https://docs.claude.com/)

## Input and output tokens

The tokens sent to the model (your prompt, system prompt, history, and files) and the tokens it produces in reply.

Both are billed, usually at different rates, with output tokens costing more. Long contexts make input the larger cost; long answers make output the larger cost. Counting both is how you estimate what a program will cost to run.

### Resources

- [Claude documentation](https://docs.claude.com/)

## Structured output

A response in a machine-readable format, such as JSON with named fields, rather than free text.

It lets a program use the model's answer directly, for example to fill a spreadsheet or decide what to do next. Many APIs can require output to match a given format. Still validate it before relying on it.

### Resources

- [Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) (Anthropic, GitHub)

## Validation

Checking that data has the expected shape and values before using it: the right fields, the right types, values in a sensible range.

Model output can be malformed or incomplete even when you asked for a format, so a program should validate it and handle failures, for example by retrying, rather than crashing or passing bad data on.

## Environment variable

A setting stored on the computer, outside the project's files, that a program can read when it runs.

It's the standard place to keep secrets such as API keys, because it keeps them out of your code and out of your repository. Files such as `.env` hold them locally, and must themselves be kept out of version control.

### Resources

- [Environment variable](https://en.wikipedia.org/wiki/Environment_variable) (Wikipedia)

## Tool use (function calling)

A model requesting that a program run a defined function, such as looking up a price or creating an event, and then using the result.

The model doesn't run anything itself. It outputs a request with the tool's name and inputs; your program decides whether to run it and sends back the result. This is the mechanism underneath every agent and connector.

### Resources

- [Claude documentation](https://docs.claude.com/), see tool use
- [Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) (Anthropic, GitHub)

## Tool definition

A tool's name, description, and input format, which a program gives the model so it knows the tool exists and how to call it.

The description matters most: the model decides when to use a tool based on it, just as an agent decides when to load a skill from the skill's description.

### Resources

- [Claude documentation](https://docs.claude.com/), see tool use

## Input schema

The list of inputs a tool takes and the type of each, usually written in JSON Schema.

A clear schema, with descriptions for each input and required fields marked, helps the model call the tool correctly, and lets your program check the request before running it.

### Resources

- [JSON](https://www.json.org/)

## Tool result

What the program sends back to the model after running a tool: the data it found, a confirmation, or an error.

The result becomes part of the context. Return what the model needs, not everything, and make errors clear enough that the model can recover from them.

## Workflow

A fixed sequence of model calls defined in code, where the program, not the model, decides the steps.

Workflows are more predictable, cheaper, and easier to test than agents. Use a workflow when you know the steps in advance, and an agent when the steps depend on what's found along the way.

### Resources

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering)

## Chaining

Passing one model call's output to the next call as input, such as outline, then draft, then edit.

Breaking a task into steps makes each step simpler and lets you check the result between them. An error early in a chain carries through, so validate at each link.

### Resources

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering)

## Routing

Using one model call to classify an input and choose a path for it, such as sending billing questions to one prompt and technical questions to another.

Routing lets each path have a focused prompt, and lets easy cases go to a cheaper model. Test the classifier on its own, because a misrouted input gets the wrong treatment from then on.

### Resources

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering)

## Parallelization

Running several model calls at once and combining their results, such as reviewing a document for several kinds of problems at the same time, or asking the same question several times and comparing.

It's faster than doing the calls one after another, and comparing several answers can improve reliability.

### Resources

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering)

## RAG (retrieval-augmented generation)

Answering from retrieved passages of your documents: the system finds the most relevant chunks, adds them to the prompt, and the model answers from them.

RAG lets a model use material it was never trained on, such as a company's policies, and lets answers cite their sources. Its weak point is retrieval: if the right passage isn't found, the answer suffers.

### Resources

- [Retrieval-augmented generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) (Wikipedia)
- [Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) (Anthropic, GitHub)

## Indexing

Preparing documents for retrieval, ahead of time, by splitting them into chunks and computing an embedding for each.

The index is what's searched when a question comes in. When the documents change, the index must be updated, or answers will draw on stale text.

## Overlap

Repeating the end of one chunk at the start of the next.

Overlap keeps a sentence or idea that falls on a chunk boundary from being cut in half and lost to retrieval. It adds a little storage and some duplicate text in exchange.

## Agentic search

Retrieval in which an agent chooses and repeats its own searches, refining them based on what it finds, rather than running one fixed search.

It finds things a single search would miss, the way a person rephrases a search that didn't work. It's slower and uses more tokens than a single retrieval step.

### Resources

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (Anthropic Engineering)

## Evaluation (eval)

Systematically testing an AI system on a fixed set of cases, with a defined way to grade each result.

Evals tell you whether a change to a prompt, model, or retrieval setup made things better or worse, and they catch regressions. Start small, with cases drawn from real failures, and grow the set over time.

### Resources

- [LLM Evals: Everything You Need to Know](https://hamel.dev/blog/posts/evals-faq/) (Hamel Husain and Shreya Shankar)
- [Evaluating AI Agents](https://community.deeplearning.ai/t/new-course-enroll-in-evaluating-ai-agents/773080) (DeepLearning.AI with Arize)

## Code-based grading

Checking outputs with exact rules in a program: is it valid JSON, does it contain the right number, is it under 100 words?

It's fast, cheap, and perfectly consistent, so use it wherever the criterion can be checked mechanically. It can't judge qualities such as tone or helpfulness.

### Resources

- [LLM Evals: Everything You Need to Know](https://hamel.dev/blog/posts/evals-faq/) (Hamel Husain and Shreya Shankar)

## Model-based grading

Using a model to judge outputs against a rubric, sometimes called "LLM as a judge."

It can grade qualities code can't, such as clarity or whether an answer is supported by its source. Model graders have their own biases and errors, so check their agreement with human grading on a sample before trusting them.

### Resources

- [LLM Evals: Everything You Need to Know](https://hamel.dev/blog/posts/evals-faq/) (Hamel Husain and Shreya Shankar)

## Rubric

The criteria a grader applies, ideally specific enough that two graders would reach the same verdict.

"Is it good?" is a poor rubric; "Does every claim cite a passage from the source? Yes or no" is a good one. Pass-or-fail criteria are usually more reliable than numeric scales.

## Agreement

How often two graders, such as a model and a person, give the same verdict on the same output.

Measuring agreement on a sample tells you whether an automatic grader can be trusted. Where they disagree, look at the cases: the rubric may be unclear, or the grader may be wrong.

## Inspector

A tool for testing an MCP server by hand: listing its tools and resources, calling them with chosen inputs, and seeing the raw results.

It lets you check that a server works before connecting it to an AI application, and see exactly what the model would see.

### Resources

- [Model Context Protocol](https://modelcontextprotocol.io/)

## Host

The application that connects to MCP servers on the user's behalf, such as Claude's desktop app or a coding assistant.

The host decides which servers are connected, shows approval prompts, and passes tools and results between the model and the servers. Its permission settings are your main control over what connected servers can do.

### Resources

- [Model Context Protocol](https://modelcontextprotocol.io/)

## Local server

An MCP server that runs on your own computer, often to give access to local files or programs.

It can reach whatever your user account can, so install local servers only from sources you trust, and review what they do.

### Resources

- [Model Context Protocol](https://modelcontextprotocol.io/)

## Remote server

An MCP server reached over the internet, usually run by the service it connects to.

Remote servers usually use a sign-in and permission screen, like other connected apps. Your data passes through the server's operator, so check who runs it.

### Resources

- [Model Context Protocol](https://modelcontextprotocol.io/)

## Always-on agent

An agent that runs continuously in the cloud, acts across your accounts, and checks in when it needs you.

It can handle ongoing work, such as watching your email and scheduling, without being asked each time. It holds broad access for long periods and acts while you aren't watching, which raises the stakes for permissions, monitoring, and prompt injection.

### Resources

- [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) (Simon Willison)
- [Meta debuts Muse](https://axios.com/2026/09/08/meta-debuts-muse-personal-ai-agent) (Axios)

## Check-in

A message from an agent reporting progress, asking a question, or requesting approval for an action.

Check-ins are where your oversight happens with an always-on agent. Too many and you stop reading them; too few and mistakes run on. Decide which actions must always check in.

## Throwaway account

An account created only for an experiment, holding nothing real, and deleted afterward.

It's the safe way to test an agent that wants broad access: if the agent misbehaves or is tricked, there is nothing of value to lose.

## Permission record

A list of the permissions you granted an agent and the ones you refused, with your reason for each.

It makes your decisions reviewable and tells you what to revoke when you're done.

## Revoke

To withdraw access that was previously granted, such as disconnecting a connector or deleting an API key.

Do it when an experiment ends, when you stop using a tool, or as soon as you suspect a problem. Most services list connected apps in their security settings.

## Compounding error

A mistake that later steps build on, so that it grows over time.

An agent that misfiles one email may learn the wrong rule and misfile hundreds. The longer an agent runs unsupervised, the more a small early error can cost, which is why early, frequent checks matter.

## Audit

Reviewing a record of what an agent did: the actions it took, the data it accessed, and the messages it sent.

Regular audits catch problems that didn't announce themselves. Choose tools that keep a readable activity log.

### Resources

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)

## Monitoring plan

What you'll check about an agent, how often, and what would make you shut it off.

Writing it down before the agent starts keeps oversight from fading once things seem to be working. Include a clear stop rule.

## Benchmark

A standardized test used to compare models, such as a set of exam questions or coding tasks.

Benchmarks give a rough comparison but can mislead: models may be tuned for them, and a high score on someone else's test doesn't guarantee good performance on your task. A pilot on your own work tells you more.

### Resources

- [Stanford AI Index](https://hai.stanford.edu/ai-index), which tracks benchmark results over time

## Pilot

A small, time-limited trial of a tool on real work, with defined measures of success, before an organization commits to it.

A good pilot compares results with and without the tool, includes the people who'll actually use it, and decides in advance what would count as success.

## Lock-in

The difficulty of switching away from a tool once an organization depends on it: data in its formats, workflows built around it, people trained on it.

Plan for it at the start by preferring open formats, keeping your own copies of data and instructions, and knowing what leaving would involve.

### Resources

- [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) (Wikipedia)

## Seat

One user's license for a product, the usual unit of pricing for business AI tools.

The cost of seats multiplied across an organization is often the deciding factor in which tool it adopts, and whether everyone gets access or only some roles.

## Data governance

The rules for how an organization's data is collected, used, shared, and protected, and who is responsible for them.

For AI, it decides which data may go into which tools, under what agreements, and who approves new uses.

### Resources

- [Data governance](https://en.wikipedia.org/wiki/Data_governance) (Wikipedia)

## Open-weight model

A model whose weights are released so anyone can download and run it, on their own computer or servers.

It keeps data in-house and avoids per-token fees, at the cost of running and maintaining it yourself. Open-weight models are usually less capable than the largest proprietary models. Tools such as Ollama and LM Studio run them locally.

### Resources

- [Ollama](https://ollama.com/)
- [LM Studio](https://lmstudio.ai/)

## Retention

How long a vendor keeps the data you send, such as prompts, files, and replies.

Retention periods differ between consumer and business accounts, and between features. Shorter retention reduces risk if the vendor is breached or receives a legal request.

## Data residency

The country or region where data is stored and processed.

Some laws and contracts require data to stay in a particular country. Business AI plans often let an organization choose a region.

### Resources

- [Data sovereignty](https://en.wikipedia.org/wiki/Data_sovereignty) (Wikipedia)

## Shadow AI

Use of AI tools at work without the organization's knowledge or approval, such as a personal chat account with work pasted into it.

It's common and usually well meant: people have work to finish, and the approved tool is missing or weaker. The fix is usually a good approved tool and a clear policy, not just a ban.

### Resources

- [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT) (Wikipedia)

## HIPAA

The Health Insurance Portability and Accountability Act, the U.S. law that protects health information held by health care providers, insurers, and their business partners.

Patient information may go only into tools covered by an appropriate agreement with the vendor. Consumer AI accounts generally don't qualify.

### Resources

- [HIPAA](https://www.hhs.gov/hipaa/index.html) (U.S. Department of Health and Human Services)

## Bias

Systematically different or worse results for some groups of people.

AI systems can absorb bias from their training data or from how they're used, for example by scoring résumés differently by name. Test a system on cases from different groups before relying on it for decisions about people.

### Resources

- [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias) (Wikipedia)
- [Ethics of AI](https://ethics-of-ai.mooc.fi/) (University of Helsinki)

## Reliability

Consistent performance across the cases a system will meet, including unusual ones.

A demo shows that a system can work; reliability is whether it works every time. Measure it with a test set drawn from real use.

## Accountability

Who answers for a result, and for fixing it when it's wrong.

Using AI doesn't move accountability to the tool. An organization should name who is responsible for each AI-supported decision.

### Resources

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)

## Human oversight

Human review placed at the points in a workflow where it can catch consequential errors.

Good oversight is targeted: reviewing everything leads to rubber-stamping, while reviewing the right steps catches the mistakes that matter.

### Resources

- [NIST AI 600-1: Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)

## Human in the loop

A design in which a person approves each output before it takes effect.

It's the strongest form of oversight, and only works if the person has the time, information, and authority to say no. Otherwise it becomes approval by habit.

### Resources

- [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) (Wikipedia)

## Automation bias

The tendency to accept a system's output because a system produced it, even when your own judgment or other evidence says otherwise.

It grows when a system is usually right. Counter it by checking outputs against criteria rather than impressions, and by noticing when you've stopped looking.

### Resources

- [Automation bias](https://en.wikipedia.org/wiki/Automation_bias) (Wikipedia)

## AI-use policy

An organization's rules for how its people may use AI tools: which tools are approved, what data may go into them, what must be disclosed, and who to ask.

A good policy is short, specific, and kept current, and gives people a workable approved option rather than only prohibitions.

### Resources

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [MIT AI Risk Repository](https://airisk.mit.edu/)

## Policy owner

The person responsible for keeping a policy current.

AI tools change monthly, so a policy without an owner goes stale quickly. The owner reviews it on a schedule and answers questions about it.

## Task

One activity within a job, as distinct from the job as a whole.

AI usually changes jobs task by task: it may draft reports but not run meetings. Looking at tasks gives a clearer picture of AI's effect on work than asking whether a whole job will be automated.

### Resources

- [Anthropic Economic Index](https://www.anthropic.com/economic-index)

## Autonomy

How much a tool does without asking: from answering a question, through acting with approval, to working unattended for hours or days.

This course is ordered by autonomy. The more autonomy you grant, the more the brief, the permissions, and the monitoring matter.

### Resources

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering)

## Oversight

The checking a person does of a tool's work: reviewing outputs, approving actions, and auditing what happened.

Oversight should grow with autonomy. Match it to what a mistake would cost, not to how confident the tool seems.
