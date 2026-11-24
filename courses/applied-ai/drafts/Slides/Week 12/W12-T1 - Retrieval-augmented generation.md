---
marp: true
title: "Week 12: Retrieval-Augmented Generation"
paginate: true
---

# Retrieval-Augmented Generation
### Week 12
COSC-300/500 Applied AI Essentials

---

## Retrieval-Augmented Generation (RAG)

Week 4's projects and notebooks, from the inside:

1. **Chunk** the documents
2. **Search** for chunks that match the question
3. Put the best chunks in the **context**
4. The model answers **and cites** them

---

## Two Phases

| Phase | When | What happens |
|---|---|---|
| **Indexing** | Once | Chunk, embed, store |
| **Answering** | Every question | Embed the question, find the closest chunks, generate |

Indexing is done ahead of time, so answering is fast. When the documents change, the affected chunks have to be indexed again, or answers come from the old version.

---

## One Question, Start to Finish

"Can I get a refund if I withdraw in the third week?"

1. Embed the question
2. Closest chunks: sections 6.1, 6.3, 4.2
3. Prompt: "Answer using **only** these passages. Cite the section. Say so if they don't contain the answer."
4. "Yes: 50% (6.1), within 30 days (6.3)."

The model never saw the rest of the handbook.

<!-- Open the Retrieval and Evaluation Explorer demo here if there's time. -->

---

## Chunking

- Documents are usually too long to send whole, and most of each one is irrelevant to any one question.
- So they're split into passages, such as paragraphs or sections, before they're stored.
- Chunks that are too small lose meaning: a sentence without its heading may not say what it's about.
- Chunks that are too large waste context, and blur which part was actually relevant.

---

## Search

| Keyword search | Embedding search |
|---|---|
| Matches words | Matches **meaning** |
| "car" ≠ "automobile" | "car" ≈ "automobile" |
| Simple, predictable | Better for paraphrased questions |

Many systems use both: keywords for exact names and codes, embeddings for everything else.

---

## Why Retrieval Fails

- The right chunk wasn't retrieved, because the question was worded differently.
- The chunk was cut in the wrong place, separating a rule from its exception.
- Too many irrelevant chunks were retrieved, and they crowded out the right one.
- The answer needs facts from several places, and only one of them was retrieved.

A grounded answer can still be **wrong**.

---

## Two Places to Fail

| | Retrieval failure | Generation failure |
|---|---|---|
| What happened | The passage never reached the model | It was there, and the answer was still wrong |
| Fix | Chunking, search | The prompt, the model |

**Print the retrieved chunks.** Otherwise you can't tell which half failed.

---

## Do You Need RAG?

| Situation | Approach |
|---|---|
| A few documents that fit | Put them all in the prompt |
| Hundreds, or changing often | RAG |
| Questions about the whole collection | Summarize in stages |
| Must be current | A tool |

**Agentic search**: an agent with a search tool, searching more than once.
