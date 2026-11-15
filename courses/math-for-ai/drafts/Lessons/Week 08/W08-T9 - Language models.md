# Week 8: Language models

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will use the probability tools from this course to build a small language model. The model is far simpler than the large language models behind current AI assistants, but it is trained, used, and scored in the same way.

## What a language model does

A **language model** is a model that assigns probabilities to sequences of words. Almost every language model, including every large language model (**LLM**), does this by answering one question again and again: given the text so far, what is the probability of each possible next word?

In practice, a model does not work with whole words. Text is first split into pieces called **tokens**. A token is often a word, but it can also be part of a word, a punctuation mark, or a space. The set of all tokens a model knows is called its **vocabulary**. The vocabulary of a current LLM contains on the order of 100,000 tokens. In this lesson, we will treat each word and each period as one token.

A language model is a classification model. The classes are the tokens in the vocabulary, and the model outputs a probability distribution over them, exactly as the neural network classifier in Week 5 output a probability for each class.

## The chain rule of probability

Recall the formula for conditional probability from the lesson on naive Bayes classification.

$$P\left[ A ~|~ B\right] = \frac{P \left[A \textrm{ and } B \right]}{P\left[ B \right]}$$

Multiplying both sides by $P[B]$ gives a formula for the probability that two events both occur.

$$P \left[A \textrm{ and } B \right] = P\left[ B \right] \cdot P\left[ A ~|~ B\right]$$

This idea extends to any number of events, and the result is called the **chain rule of probability**. Applied to a sequence of tokens $w_1, w_2, ..., w_n$, it states that the probability of the whole sequence is a product of conditional probabilities, one for each token given all of the tokens before it.

$$P\left[ w_1, w_2, ..., w_n \right] = P\left[w_1\right] \cdot P\left[w_2 ~|~ w_1\right] \cdot P\left[w_3 ~|~ w_1, w_2\right] \cdot ... \cdot P\left[w_n ~|~ w_1, ..., w_{n-1}\right]$$

This formula is the reason a language model only needs to predict the next token. If a model can estimate each factor on the right, it can assign a probability to any text, and it can produce new text one token at a time.

## A bigram model

The factors in the chain rule are hard to estimate because each one depends on all of the earlier tokens. The simplest way to make progress is to assume that the next token depends only on the single token before it. A model built on this assumption is called a **bigram model**.

$$P\left[w_i ~|~ w_1, ..., w_{i-1}\right] \approx P\left[w_i ~|~ w_{i-1}\right]$$

This is a drastic simplification, much like the assumption that makes naive Bayes "naive". An LLM makes no such assumption: it uses thousands of earlier tokens to predict the next one. The benefit of the bigram assumption is that the probabilities can be estimated by counting.

We will train a bigram model on the short text below, which contains 26 tokens.

```
text = 'the cat sat on the mat . the dog sat on the rug . the cat saw the dog . the dog saw the cat .'
tokens = text.split(' ')                       # Split the text into tokens
vocab = sorted(set(tokens))                    # The distinct tokens, in sorted order
print(vocab)
```

The vocabulary contains 9 tokens: `['.', 'cat', 'dog', 'mat', 'on', 'rug', 'sat', 'saw', 'the']`.

To train the model, we count how many times each token is followed by each other token. We store the counts in a 9 by 9 array, with one row for each token and one column for each possible next token. A dictionary gives the row and column number for each token.

```
index = {word: i for i, word in enumerate(vocab)}      # Token --> row/column number
counts = np.zeros(shape=(9, 9))

for i in range(len(tokens) - 1):
    row = index[tokens[i]]                     # Current token
    col = index[tokens[i + 1]]                 # Token that follows it
    counts[row, col] += 1

probs = counts / counts.sum(axis=1).reshape(-1, 1)     # Divide each row by its total
```

The last line divides each row by its sum, which turns counts into proportions. Each row of `probs` is now a probability distribution: it estimates the probability of each next token, given the current token. This is the same idea we used in Week 7, where proportions from a sample were used to estimate probabilities.

Consider the row for the token `the`. In the training text, `the` appears 8 times. It is followed by `cat` 3 times, `dog` 3 times, `mat` once, and `rug` once. The model's estimates are therefore:

$$P\left[\textrm{cat} ~|~ \textrm{the}\right] = 0.375, \quad P\left[\textrm{dog} ~|~ \textrm{the}\right] = 0.375, \quad P\left[\textrm{mat} ~|~ \textrm{the}\right] = 0.125, \quad P\left[\textrm{rug} ~|~ \textrm{the}\right] = 0.125$$

Other rows are simpler. The token `sat` is always followed by `on`, so the model assigns that a probability of 1.

## Generating text

To generate text, we start with a token, sample the next token from the corresponding row of `probs`, and repeat. Each sample is drawn with `np.random.choice()`, using the row as the probabilities.

```
np.random.seed(5)
word = 'the'
output = [word]
for i in range(12):
    word = np.random.choice(vocab, p=probs[index[word]])   # Sample the next token
    output.append(str(word))
print(' '.join(output))
```

With a seed of 5, this code prints the following:

`the cat saw the rug . the mat . the cat . the`

The output shows both what the model has learned and what it has not. Every pair of neighboring words appeared somewhere in the training text, so the output looks locally sensible. But "the cat saw the rug" never appeared, and "the mat ." is not a sentence. The model looks back only one token, so it cannot keep track of what a sentence needs.

A different seed gives different text. An LLM produces its output through this same loop: calculate a probability for every token in the vocabulary, sample one, add it to the text, and repeat. That is why the same prompt can produce a different response each time.

## Temperature

The amount of randomness in the sampling step can be adjusted with a setting called the **temperature**. In an LLM, the temperature $T$ divides the scores that go into the softmax function, as described in Week 5. The same adjustment can be made to any set of probabilities by raising each one to the power $1/T$ and then dividing by the total so that they again sum to 1.

The table below shows the effect on the four nonzero probabilities in the row for `the`.

| Temperature | cat | dog | mat | rug |
|---|---|---|---|---|
| 0.5 | 0.450 | 0.450 | 0.050 | 0.050 |
| 1 | 0.375 | 0.375 | 0.125 | 0.125 |
| 2 | 0.317 | 0.317 | 0.183 | 0.183 |

A temperature below 1 moves probability toward the most likely tokens, which makes the output more predictable. A temperature above 1 flattens the distribution, which makes unlikely tokens more common and the output more varied. As the temperature approaches 0, the model always selects a most likely token.

## Scoring a language model

A language model is scored by how much probability it assigns to real text. Consider the sentence "the cat sat on the mat ." The model assigns the following probability to each token after the first, given the token before it:

`[0.375, 0.333, 1.0, 1.0, 0.125, 1.0]`

The negative log-likelihood loss from the previous lessons applies directly. For each token, we take the negative logarithm of the probability the model assigned to the token that actually came next, and we average the results. This average is the **cross-entropy** loss of the model on this text.

```
p = np.array([0.375, 1/3, 1.0, 1.0, 0.125, 1.0])
cross_entropy = -np.log(p).mean()
print(cross_entropy.round(4))                 # Prints 0.6931
print(np.exp(cross_entropy).round(4))         # Prints 2.0
```

The second value printed is the **perplexity**, which is the exponential of the cross-entropy. Perplexity has a useful interpretation: it is the number of equally likely choices the model is, on average, deciding between at each step. A perplexity of 2 means the model is about as uncertain as if it were choosing between two tokens with a fair coin flip each time. A perfect model would have a perplexity of 1. For comparison, the sentence "the dog saw the rug ." has a perplexity of about 2.3 under this model, because it is a less typical sentence for the training text.

Cross-entropy is the loss function used to train every LLM. The model's parameters are adjusted by mini-batch gradient descent to make the cross-entropy on its training text as small as possible. In other words, the model is trained to assign high probability to the token that actually comes next.

One limitation of the bigram model should be noted. It assigns a probability of 0 to any pair of tokens that never appeared in the training text. The logarithm of 0 is undefined, so the loss for any sentence that contains such a pair is infinite. An LLM avoids this problem because the softmax function never outputs exactly 0.

A related measure, the **Kullback–Leibler divergence**, compares two probability distributions and is 0 only when they are identical. Cross-entropy and Kullback–Leibler divergence differ by an amount that does not depend on the model, so minimizing one minimizes the other.

## From a bigram model to a large language model

The bigram model and an LLM share the same input, output, sampling loop, and loss function. They differ in how the probabilities for the next token are calculated.

| | Bigram model | Large language model |
|---|---|---|
| Uses to predict the next token | The 1 previous token | Thousands of previous tokens |
| How probabilities are calculated | A table of proportions from counts | A neural network ending in a softmax function |
| Parameters | 81 (a 9 by 9 table) | Billions of weights and biases |
| Training | Counting | Mini-batch gradient descent on cross-entropy loss |

A table of counts cannot be extended to long contexts. With a vocabulary of 100,000 tokens, a table for just the two previous tokens would need a row for each of 10 billion pairs, and most pairs would never appear in the training text. A neural network replaces the table with a function. It represents each token as an embedding, combines the embeddings of the earlier tokens, and calculates a score for every token in the vocabulary. The next lesson describes the operation that does the combining.
