# Week 2: Voice Mode and Dictation

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Prepare a short voice-mode demo on your phone and a dictation demo on your laptop: one with the chat app's microphone button, and one with the operating system's dictation in some other app. If you use a dictation service such as Wispr Flow, show it too. Check the Claude Help Center article "Use voice mode" the week you teach: which apps have voice mode and which have only dictation changes often. Timing: 10 min.

## What You Will Be Able to Do

- Tell voice mode from dictation, and say when each is useful.
- Use dictation in an AI app, in your operating system, and through a dictation service.
- Judge when speaking is better than typing, and when it isn't.
- Check a transcript before you rely on it.

## Two Ways to Use Your Voice

Talking to an AI tool doesn't change what makes a good prompt. A spoken prompt needs a goal, context, and constraints just as a typed one does. Speech simply makes it easier to give a lot of context quickly. There are two ways to use it.

| | Voice mode | Dictation |
|---|---|---|
| **What it does** | A spoken conversation. You talk, and the reply is read aloud. | Turns your speech into typed text. You read the text and send it yourself. |
| **What you get back** | Speech, with a transcript you can read afterward | Ordinary text in the box where you were typing |
| **Best for** | Thinking out loud, practice, being quizzed, hands-busy moments | Long, detailed prompts that you want to check before sending |
| **Where it works** | Mainly the phone apps. Some desktop and web apps have it too. | Almost everywhere, inside the AI app or outside it |

## Voice Mode

**Voice mode** turns a chat into a spoken conversation. In Claude you start it from the voice button beside the message box, most reliably in the phone app. You talk, the model replies out loud, and the whole exchange is saved as a normal chat with a transcript.

Voice mode changes the conversation in a few ways:

- **Your prompts get longer and looser.** People give more context when they talk than when they type. That's usually good.
- **Replies get shorter and more conversational.** A table or a long list doesn't work when it's read aloud, so the model avoids them.
- **It is slower to review.** You can't skim a spoken answer the way you skim a written one.

| Voice mode works well for | Typing works better for |
|---|---|
| Thinking out loud about an idea that isn't formed yet | Precise instructions with several constraints |
| Practicing an explanation, a presentation, or an interview answer | Long prompts with pasted material |
| Being quizzed before an exam | Anything with code, numbers, or names that must be exact |
| Language practice | Results you need to copy, review, or cite |
| Times when your hands or eyes are busy | Private topics in a public place |

## Dictation

**Dictation**, also called speech-to-text, turns what you say into text and puts it where you were typing. You stay in a normal written chat. The difference is only that you spoke the prompt instead of typing it, and you can read it and fix it before sending.

For prompting, dictation is often more useful than voice mode. Most people speak three or four times faster than they type, so dictating makes it easy to give the rich context that good prompts need: the background, the audience, what you have tried. You still get a written reply you can skim, copy, and check.

There are three places to find it.

### In the AI App

Most chat apps have a **microphone button** in the message box. Claude has one in its phone and desktop apps, and also in its agent tools, which have dictation even where they don't have voice mode. Press it, speak, and your words appear in the box.

### In Your Operating System

Your computer and phone have dictation built in, and it works in almost any app: an email, a document, a search box, or a chat window.

| Device | How to start dictation |
|---|---|
| **Windows** | Press **Windows key + H** in any text box. Windows calls it voice typing. |
| **Mac** | Press the **Fn** key twice (or the microphone key on newer keyboards), or choose **Edit**, then **Start Dictation**. Turn it on first in **System Settings**, under **Keyboard**. |
| **iPhone and Android** | Tap the **microphone** on the keyboard. |

Built-in dictation types what you say more or less word for word. You often have to say punctuation out loud ("comma", "new paragraph"), and you will need to clean up the result.

### Dictation Services

A newer kind of tool uses AI to clean up dictation as it goes. **Wispr Flow** is a well-known example, and there are several others. You hold a key, talk, and polished text appears in whatever app you're using. These tools typically:

- remove filler words such as "um" and "like",
- add punctuation and paragraphs without being told,
- handle self-corrections ("meet on Tuesday, no, Wednesday" becomes "meet on Wednesday"),
- learn names and terms you use often, and
- work across apps on the computer and the phone.

They are popular with people who write a lot of prompts, because they make long, detailed dictated prompts nearly as clean as typed ones.

Two cautions. First, most of these services **send your audio to their own servers** to be processed, so everything you say passes through another company as well as the AI vendor. Read the privacy settings, and don't dictate anything you wouldn't type into a website. Second, many have a free tier with a weekly word limit and charge a subscription beyond it, so check the current pricing before you rely on one.

## Check the Transcript

Speech recognition makes mistakes, especially with names, technical terms, and numbers. "Sixty" can become "sixteen"; an unusual surname can become an ordinary word. AI cleanup makes the text look more finished, which can make a mistake easier to miss.

- **With dictation,** read the text before you send it.
- **With voice mode,** read the transcript afterward before you rely on anything that was said, and type anything that has to be exact.

## Talk First, Type Second

A useful pattern combines the two ways of working:

1. **Talk** for five minutes about a messy idea: what you're trying to do, what you know, what worries you. Use voice mode or dictation.
2. **Ask for a written summary** of what you said, organized under headings.
3. **Continue in text**, where you can be precise and check the results.

You get the context that talking produces and the precision that writing allows.

Test your judgment on a few situations below.

{{widget voice-or-type}}

> **Instructor note: demo.** Ask Claude by voice to quiz you on this week's terms. Keep it to two or three minutes. Then press Windows key + H (or the Mac equivalent) in a document and dictate a two-sentence prompt, and point out what needs fixing.

## Key Terms

- **Voice mode**: a spoken conversation with an AI tool, where you talk and the reply is read aloud.
- **Dictation**: turning speech into typed text, which you can read and edit before you send it; also called speech-to-text.
- **Voice typing**: Windows' name for its built-in dictation, started with Windows key + H.
- **Dictation service**: an app, such as Wispr Flow, that uses AI to turn speech into cleaned-up text in any app.
