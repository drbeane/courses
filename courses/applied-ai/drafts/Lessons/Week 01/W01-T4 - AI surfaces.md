# Week 1: AI Surfaces

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

## What You Will Be Able to Do

- Explain what a surface is and how it differs from an interface.
- Name the main surfaces through which AI is delivered and give an example of each.

## What a Surface Is

The same model can behave very differently depending on how you reach it. A **surface** is the environment where you interact with an AI, such as a chat app, a terminal, or a browser extension. It largely determines what the AI can see and what it can change. By default, a model in a chat window sees only what you type or attach. The same model working as an agent on your computer can read every file in a folder, run code, and save its work. In terms of capabilities, the surface often matters more than which model is underneath. Even a very strong model in a basic chat window can't edit the files on your computer, while a more modest model working as an agent can.

Broadly speaking, a surface can be described by three things:

- **How you reach the AI**: You might type into a chat window, use a panel inside another application, work in a terminal, or set a schedule that starts the AI without you.
- **What it can see**: Some surfaces give the AI only your message, while others also let it read your files, your email, a web page, or a whole codebase.
- **What it can change**: Some surfaces let the AI change nothing outside the conversation, while others let it change files, a calendar, a website, or a running program.

## Surfaces in This Course

This course focuses primarily on five surfaces. They are listed below, roughly in the order in which they are covered.

1. **Chat assistants** are where most people start. You hold a conversation in a browser or app, and by default the AI sees only what you give it.
2. **Local agents** work directly on the files and folders on your computer, so they can read, change, and create things on their own.
3. **Coding assistants** work inside a development environment, where they can write code, run it, and test it. They can often help you deploy it as well, so that other people can use what you built.
4. **The API** lets you build your own programs on top of a model, deciding what it sees and what it can do.
5. **Always-on agents** run on their own cloud computer, keep working while you are away, and check in with you when they need your input or have something to report.

Other surfaces come up along the way, such as AI built into apps you already use and agents that operate a web browser. The table below shows the surfaces touched upon in this course and the weeks in which they appear. It is not a complete list, and new surfaces continue to appear.

| Surface | What it is | Example | Weeks |
|---|---|---|---|
| Chat assistant | A conversation in a browser or app | Claude, ChatGPT, Gemini, Copilot Chat | 1–5 |
| Embedded copilot | AI inside an application you already use | Copilot in Outlook, Gemini in Gmail and Docs | 5 |
| Local agent | AI that works directly on the files and folders on your computer | Claude Cowork, ChatGPT Work | 6–8 |
| Browser or computer-use agent | AI that operates a browser: clicks, types, reads pages | Claude in Chrome, ChatGPT Atlas, Perplexity Comet | 8 |
| Cloud or background agent | Work you hand off or schedule; it runs while you're away | Scheduled tasks, Codex cloud tasks, Claude Code on the web | 8 |
| Coding assistant | AI inside a development environment, with access to code, terminal, and tests | Claude Code, Codex, Cursor, Google Antigravity | 9–10 |
| API and agent platforms | Building your own programs on top of a model | The Claude, OpenAI, and Gemini APIs | 11–12 |
| Always-on agent | An agent with its own cloud computer that keeps working and checks in | Meta Muse, OpenAI dots, Claude Duet | 13 |

The tool below gives the same request to four different surfaces. Try each one, and notice what you have to do yourself and when your file actually changes.

{{widget one-request}}

> **Instructor note.** Keep the tour to about two minutes per surface: the goal is a mental map, not instruction. If a surface isn't available to demo, describe it and say which week it arrives. Students often haven't seen a local agent at all; a 30-second glimpse of an agent saving files into a folder makes the rest of the term concrete.

## Surface Versus Interface

It's tempting to treat "surface" as another word for "interface." They overlap, but they are not the same.

An **interface** is the part you look at and operate: the message box, the buttons, the microphone. A surface includes the interface, and it also includes everything the AI is connected to behind it.

Two cases show the difference:

- **Similar interface, different surfaces.** In the Claude desktop app, a chat and a task in Cowork, its local agent, both begin with a box you type into. In the chat, the model sees only what you paste or attach. In Cowork, it can read and write the files in a folder you chose. The screens look alike. What the AI can reach is very different.
- **Different interfaces, same surface.** You can use a chat app by typing to it or by talking to it. The interface changes. What the model can see and change stays about the same.

The interface tells you how to talk to the AI. The surface tells you what it can do once you have. That second question is the one that decides how much you can delegate and how closely you need to supervise.

## Key Terms

- **Surface**: the environment where you interact with an AI, which largely determines what it can see and change.
- **Interface**: the part of a tool you look at and operate, such as a message box, buttons, or a microphone.
