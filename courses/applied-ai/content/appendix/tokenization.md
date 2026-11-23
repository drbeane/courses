# How Tokenization Works

Language models don't read letters or words. They read **tokens**, and everything a model does, from the length of your prompt to the price of a response, is counted in them. This page explains what tokens are, how text is split into them, and why different models split the same text differently. It is background reading and is not assigned.

## Tokens Are Not Words

A **token** is a small piece of text that the model treats as one unit. It is often a whole word, but it can also be part of a word, a single character, a space attached to a word, or a piece of punctuation. A common word such as "the" is usually one token. A rare or long word is split into several. A number may be split into groups of digits.

For the purposes of this course, it is fine to think of tokens as words and pieces of punctuation. That picture is close enough to estimate length and to follow how a model works. The difference matters mainly when you count tokens, or when a model does something odd with spelling or arithmetic.

As a rule of thumb, one token in English is about three-quarters of a word, so 1,000 words is roughly 1,300 tokens. Code, tables, and languages other than English usually take more tokens per word.

## How Text Is Split

The program that turns text into tokens is called a **tokenizer**. It works from a fixed list of pieces, called its **vocabulary**, which is built before the model is trained and does not change afterward. Each piece in the vocabulary has a number, its **token ID**, and the model works with those numbers rather than with the text.

Most tokenizers build their vocabulary with a method called **byte-pair encoding**:

1. Start with the smallest units, such as single characters or bytes.
2. Look through a very large sample of text for the pair of neighboring units that occurs most often.
3. Merge that pair into one new unit and add it to the vocabulary.
4. Repeat until the vocabulary reaches the size the designers chose, usually somewhere between tens of thousands and several hundred thousand pieces.

Frequent words and word endings such as "ing" and "tion" are merged early, so they end up as single tokens. Rare words never get merged, so they stay in pieces. Any text can still be tokenized, because the smallest units are always in the vocabulary.

To tokenize new text, the tokenizer applies its merges to find the longest pieces from the vocabulary that fit. Spaces are part of the pieces. In most tokenizers " the", with a leading space, is a different token from "the" at the start of a line, and "The" with a capital letter is different again.

## Different Models Tokenize Differently

Each model family has its own tokenizer, with its own vocabulary, built from its own training text. The same sentence can therefore come out as a different number of tokens in different models:

- **Vocabulary size.** A larger vocabulary has more whole words and longer pieces, so the same text takes fewer tokens.
- **Training text.** A tokenizer built mostly from English splits English into few tokens and other languages into many. One built from more varied text treats more languages evenly.
- **Details of the method.** Tokenizers differ in how they treat spaces, capital letters, digits, and unusual characters, and in how they handle code.
- **Versions.** A vendor may change its tokenizer between model versions, so a newer model can count the same text differently from an older one.

Because of this, token counts are not directly comparable between vendors. A price of so many dollars per million tokens means different things for two models, and a prompt that fits in one model's context window may or may not fit in another's. To count tokens accurately, use the vendor's own token counter, which most vendors provide in their documentation or API. The estimates in this course are rough.

## Why It Matters

- **Cost and limits.** Usage limits, API prices, and context windows are all measured in tokens, so your text costs more when it takes more tokens.
- **Language.** Text in languages that are less common in a tokenizer's training data takes more tokens, so it costs more and fills the context window faster.
- **Spelling and counting.** The model sees tokens, not letters. A question such as how many times a letter appears in a word asks about something the model never directly sees, which is one reason models can get it wrong.
- **Numbers.** Long numbers are split into pieces, which makes digit-by-digit arithmetic harder for a model than it looks.
- **Odd strings.** Unusual names, codes, and typos break into many small tokens, which makes them harder for a model to handle.

## Try It

The [Tokenizer Explorer](/demos/tokenizer/) demo splits any text you type using three small, made-up tokenizers, and steps through how one of them chooses its pieces. The tokenizers in the demo are simplified teaching models and do not match any real vendor's. Try the same sentence in each, then try a rare word, a number, and a sentence in another language.

## Further Reading

- OpenAI's Tokenizer tool, on the OpenAI platform site, shows how text is split by several of OpenAI's models.
- Your vendor's documentation for token counting. Anthropic, OpenAI, and Google each describe how to count tokens for their models.
- Sennrich, Haddow, and Birch, "Neural Machine Translation of Rare Words with Subword Units" (2016). The paper that brought byte-pair encoding to neural network models.
