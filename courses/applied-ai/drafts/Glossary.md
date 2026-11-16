# Glossary: full descriptions

Longer descriptions for the Glossary page. Each `##` heading must match a term in some lesson's Key
Terms section exactly (capitals don't matter). The short definition still comes from the lesson; the
text under the heading is shown below it. A term without a heading here shows only its short
definition.

## Artificial intelligence (AI)

The field of building computer systems that handle tasks we would call intelligent if a person did them, such as understanding language, recognizing images, predicting, and planning. The boundary moves: once a task becomes routine for computers, people tend to stop calling it AI. Today the word covers everything from simple learned filters to the large language models behind chat assistants, so it says little on its own about what a product does.

## Rule-based system

A system whose behavior comes from rules that people wrote, such as "if the purchase is over $5,000 and made abroad, block it." Rule-based systems are predictable and easy to audit, but brittle: anything the rules didn't anticipate can break them, and writing the rules takes expert time. Tax software and the expert systems of the 1980s are examples.

## Machine learning

The part of AI in which a system learns its behavior from examples instead of following hand-written rules. Shown thousands of emails labeled spam or not spam, a machine learning system finds the patterns that separate them. Most AI in use today, including speech recognition, recommendations, and language models, is machine learning.

## Neural network

A machine learning model made of many simple, connected calculations arranged in layers. Each connection has a strength, and training adjusts those strengths until the network's outputs match its examples. The idea is loosely inspired by neurons in the brain, but a neural network is ordinary arithmetic on a very large scale.

## Deep learning

Machine learning with neural networks that have many layers. Deep learning took over the field after 2012, once there was enough data and enough computing power (mostly graphics processors) to train large networks. Image recognition, speech recognition, translation, and today's language models are all deep learning.

## Generative AI

AI that produces new content, such as text, images, audio, video, or code, rather than only classifying or scoring what already exists. A spam filter decides whether a message is spam; a chat assistant writes a reply that didn't exist before. Large language models and image generators are the best-known kinds.

## Token

The unit a language model reads and writes: a whole short word, a piece of a longer word, a punctuation mark, or a space. In English a token averages about three-quarters of a word. Context windows, usage limits, and API prices are all counted in tokens, so the length of what you send and receive matters.

## LLM

Short for large language model: a neural network trained on a huge amount of text to predict the next token. "Large" refers to the number of parameters, which runs to billions. LLMs are the models inside chat assistants such as Claude, ChatGPT, and Gemini, and inside most of the other AI tools in this course.

## Knowledge cutoff

The date after which a model's training data stops. A model knows nothing about events after its cutoff unless a tool, such as web search, adds current information to the conversation. Because a model may not know its own cutoff precisely, check dates and recent facts yourself.

## Sampling

How a model chooses each next token. Instead of always taking the single most likely token, the model picks from the likely options at random, weighted by their probabilities. Sampling is why the same prompt can give different answers on different runs, and why a model's wording varies even when its facts don't.

## Parameters

The numbers inside a model that training adjusts, also called weights. A large language model has billions of them. What the model "knows" is spread across these numbers as patterns; it doesn't keep a copy of its training text that it can look up.

## Pretraining

The first and largest stage of training a language model, in which it learns to predict the next token across an enormous amount of text. Pretraining gives the model its knowledge of language and the world. A second stage then tunes it to follow instructions and behave as a helpful assistant.

## Surface

The way you reach an AI system, which also sets what it can see and change: a chat window, a copilot inside another app, a coding assistant, an agent on your computer, a cloud agent, a browser agent, an always-on agent, or the API. The same model can sit behind several surfaces and be able to do very different things in each.

## Interface

The part of a tool you look at and operate: the message box, buttons, menus, a microphone. The interface is separate from the surface. Voice mode, for example, is a different interface to the same chat assistant, not a new surface.

## 4D framework

A framework for working with AI from Anthropic's AI Fluency course, created by Rick Dakan and Joseph Feller. Its four skills are Delegation (what to hand to AI), Description (how to communicate the task), Discernment (judging what comes back), and Diligence (taking responsibility for the result). Each week of this course emphasizes one of them.

## Delegation

The first of the four Ds: deciding whether to hand a task to an AI at all, which parts to hand over, and how much of the work it should do on its own. Good delegation weighs what the AI does well, what a mistake would cost, and what you need to learn by doing the work yourself.

## Description

The second D: communicating a task clearly enough that the AI can do it well. That means stating the goal, the context, the constraints, the audience, and the form you want the result in. Prompts, project instructions, and agent briefs are all Description.

## Discernment

The third D: judging what comes back. Discernment means checking facts and sources, noticing what is missing, and deciding whether the output is fit for its purpose. Week 3 is about this skill.

## Diligence

The fourth D: taking responsibility for the result and for how AI was used to produce it. Diligence covers disclosure, privacy, security, and fairness, and the plain fact that you, not the tool, answer for what you submit or send.

## AI fluency

The ability to work with AI systems effectively, efficiently, ethically, and safely. It is broader than knowing how to write prompts: it includes deciding when to use AI, checking its work, and using it responsibly.

## Vendor

A company that builds or sells AI models or products, such as Anthropic, OpenAI, Google, Microsoft, or Meta. Vendors differ in their models, their products, their prices, and their policies on privacy and training, so the choice of vendor matters as well as the choice of model.

## Model

The trained system that reads your text and writes the reply, such as a particular version of Claude or GPT. A model is separate from the product you use to reach it. When an answer is poor, the model is often the cause; when a feature is missing, the product usually is.

## Product

The software you open, such as the Claude app or ChatGPT, which sends your words to a model and shows you the reply. The product adds features around the model: file upload, web search, memory, projects, voice, and its own system prompt.

## Model tier

A size class within a model family, such as a small, fast, inexpensive model and a large, more capable, slower one. Larger tiers handle harder problems better and use more of your usage limit or cost more through the API.

## Reasoning model

A model that works through a problem step by step before giving its answer, often called "thinking." Reasoning helps with math, planning, and multi-step problems, and takes longer and uses more tokens. Many current models can reason or not, depending on an effort setting.

## Effort setting

A control over how much a model reasons before answering. Higher effort tends to give better answers on hard problems and costs more time and usage. For a simple question, low effort is usually enough.

## Usage limit

A cap on how much work a subscription allows in a period. It is measured by how much the model reads and writes, not by the number of messages, so one message late in a long chat with large files can use as much as dozens of short ones. Claude's paid plans have a session limit and a weekly limit.

## Model card / system card

A document a vendor publishes about a model: what it can do, how it was tested, what safety evaluations it went through, and its known limits. Model cards are a useful source when you need to know more than the marketing says.

## Model training

Using stored conversations, or other data, to improve a later version of a model. Many consumer products can use your chats for training unless you opt out, so a privacy setting decides whether what you type helps train future models.

## Opt out

To turn off a setting that is on by default. For AI tools, it usually means turning off training on your conversations. Opting out typically affects future chats only, and some features have separate controls.

## Incognito chat / temporary chat

A conversation that isn't saved to your chat history, isn't used for training, and doesn't draw on or add to memory. It is useful for one-off questions you don't want remembered. Products differ in how long they still keep a temporary chat for safety review.

## Prompt

The text you give a model to tell it what you want. A strong prompt states the goal, gives the context the model can't know, sets constraints, names the audience, and says what form the answer should take. Everything else in the context, such as files and earlier messages, works alongside it.

## In-context learning

A model picking up a pattern from examples in the prompt, with no retraining. Show two examples of the summary style you want, and the model follows the pattern for the third. The learning lasts only as long as the examples are in the context.

## Few-shot prompting

Including a few examples of the desired output in a prompt so that the model follows their pattern. It is one of the most reliable prompting techniques, especially for format and tone. One example is "one-shot," and none is "zero-shot."

## Context window

The total amount of text, in tokens, that a model can consider at once: the system prompt, instructions, memory, the conversation so far, files, tool results, and the reply being written. Current windows hold hundreds of thousands of tokens or more, but long contexts still cost more and can make answers worse.

## System prompt

Instructions the product's vendor writes and places in the context before your first message. A system prompt can give the date, list the tools the model can use, and set how it should behave. You usually can't see it, and it is one reason the same model behaves differently in different products.

## Conversation history

The earlier messages and replies in a chat. A model keeps no memory between messages, so the product sends the whole history again with each new message. That is how the model seems to remember, and why long chats become slower, more expensive, and less reliable.

## Markdown

A way to mark a document's structure with ordinary characters: `#` for headings, `-` for bullets, `**` for bold, and so on. A Markdown file is plain text with the extension `.md`. Chat tools write their replies in Markdown, it converts easily to Word or PDF, and agents use Markdown files for their instructions and notes.

## Plain text

A file that holds only characters, with no hidden formatting, formulas, or tracked changes, so any text editor can open it and show everything in it. Markdown, CSV, and JSON files are plain text. Plain text is easy to check and moves cleanly between tools.

## Handoff file

A short Markdown document that records where a piece of work stands: the goal, the decisions made, the current draft, open questions, and next steps. You ask the model to write it at the end of a session, correct it, save it, and start a new chat with it. It keeps the useful context and drops the dead ends.

## Pandoc

A free, open-source program that converts documents between dozens of formats, including Markdown, Word, PDF, HTML, and slide decks. It runs from the command line and is the standard tool for turning Markdown into Word documents.

## Session limit

A usage limit over a short window. On Claude's paid plans, the window is about five hours from your first message. When you reach it, you wait for the window to reset. It runs alongside a weekly limit.

## Weekly limit

A usage limit on the total amount of work in a week, across all models and products on the account. It resets at a fixed time each week. Agent work and long research sessions are the usual ways to reach it.

## Custom instructions

Standing instructions you write about yourself and how you want answers, which the product adds to every new chat. Some products call them preferences. Good custom instructions are short and cover who you are and the formats and behaviors you want almost every time.

## Memory

Information a product saves about you and brings into later conversations, either as a list of saved facts you can read and edit or by searching your past chats. Memory works by adding text to the context; it doesn't retrain the model. Review what's stored about you from time to time.

## Temporary chat

A conversation that doesn't use memory, isn't saved to it, and isn't kept in your history; also called incognito. Use one when you don't want a conversation to influence later ones or to be remembered.

## Standing context

Context that is added to every conversation without your typing it, such as custom instructions, memory, and project instructions. It saves repeating yourself, but it enters quietly, so it can shape answers in ways you don't notice.

## Voice mode

A spoken conversation with an AI tool: you talk, and the reply is read aloud, with a transcript saved afterward. It suits thinking out loud, practice, and hands-busy moments. It is an interface to the chat assistant you already use, not a separate surface.

## Dictation

Turning speech into typed text, also called speech-to-text. You read and fix the text before sending it, so you get the speed of talking and the precision of writing. Dictation is built into AI apps, into Windows, macOS, and phones, and into dedicated dictation services.

## Voice typing

Windows' name for its built-in dictation. Press Windows key + H in any text box to start it. It types what you say more or less word for word, so you usually need to clean up the result.

## Dictation service

An app, such as Wispr Flow, that uses AI to turn speech into polished text in whatever app you are using. These services remove filler words, add punctuation, and handle self-corrections. Most process your audio on their own servers, so check their privacy settings.

## Test set

A fixed set of inputs used to compare versions of a prompt or system. Running every version against the same inputs shows whether a change helped, instead of relying on a single good-looking result. A good test set includes ordinary cases and edge cases.

## Edge case

An unusual input that is likely to expose a weakness: an empty document, a very long one, a request in another language, a question with no good answer. Including a few in a test set catches problems that ordinary inputs miss.

## Evaluation

Measuring how well a prompt or system performs against stated criteria, using a test set and a way to score the results. Evaluation turns "it seems better" into evidence. Week 12 returns to it for AI applications.
