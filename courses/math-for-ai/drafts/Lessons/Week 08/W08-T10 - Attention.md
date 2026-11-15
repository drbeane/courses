# Week 8: Attention

**MATH 309/509 Math for AI** · Statistics and probability

In this final lesson, we will describe attention, the operation at the center of every large language model. Attention uses nothing beyond tools from this course: dot products, matrix multiplication, the softmax function, and weighted averages. We will then trace how the topics from each week fit together inside a language model.

## The problem attention solves

In the previous lesson, we saw that a bigram model fails because it looks at only one earlier token. To predict the next token well, a model needs to use everything that came before. Consider the sentence below.

*The trophy did not fit in the suitcase because it was too big.*

To continue this text sensibly, a model has to work out that "it" refers to the trophy. The word that settles the question, "trophy", is eight words back. A model therefore needs a way for each token to draw information from whichever earlier tokens are relevant to it, wherever they are. **Attention** is that mechanism. The neural network design built around it, called the **transformer**, is the basis of every current LLM.

## Attention as a weighted average

Recall that a language model begins by replacing each token with a vector called an embedding. Suppose that a text contains $n$ tokens, and that their embeddings are the rows of a matrix $X$.

Attention produces a new vector for each token. The new vector is a weighted average of the embeddings of all the tokens, with the largest weights given to the tokens that are most relevant. The calculation for a single token has three steps.

1. **Score.** Calculate the dot product of the token's embedding with the embedding of every token in the text. As we saw in Week 3, a dot product is large when two vectors point in similar directions. Each dot product is a score for how relevant one token is to another.
2. **Normalize.** Apply the softmax function to the scores. This turns them into positive weights that sum to 1.
3. **Average.** Multiply each embedding by its weight and add the results.

If we let $q$ be the embedding of the token we are working on, the three steps can be written as follows.

$$\textrm{scores} = X \cdot q$$

$$\textrm{weights} = \sigma \left( \textrm{scores} \right)$$

$$\textrm{output} = \textrm{weights} \cdot X$$

Here $\sigma$ refers to the softmax function.

## Example: Attention for one token

We will carry out these steps for a text of three tokens. The embeddings below were made up for the example and have three elements each. We calculate the attention output for the third token.

```
def softmax(z):
    exps = np.exp(z)
    return exps / exps.sum()

X = np.array(
    [[1.0, 0.0, 1.0],      # Embedding of token 1
     [0.0, 2.0, 0.0],      # Embedding of token 2
     [1.0, 1.0, 0.0]]      # Embedding of token 3
)
q = X[2]                                   # The token we are working on

scores = np.matmul(X, q)                   # Step 1: dot product with every token
weights = softmax(scores)                  # Step 2: turn scores into weights
output = np.matmul(weights, X)             # Step 3: weighted average of the embeddings

print(scores)                              # Prints [1. 2. 2.]
print(weights.round(4))                    # Prints [0.1554 0.4223 0.4223]
print(output.round(4))                     # Prints [0.5777 1.267  0.1554]
```

The scores show that the third token is more closely related to the second token and to itself than to the first token. The softmax function converts the scores into weights of about 16%, 42%, and 42%. The output is a blend of the three embeddings in those proportions. We say that the third token "attends" mostly to the second token and to itself.

The output is a new vector for the third token. It began as an embedding that described the token alone. It now also carries information from the other tokens, in proportion to their relevance.

## Attention for every token at once

A model performs this calculation for every token. Linear algebra lets us describe all of the calculations in two lines. The matrix product $X \cdot X^T$ contains the dot product of every pair of embeddings: the entry in row $i$ and column $j$ is the score between token $i$ and token $j$. Applying the softmax function to each row gives a matrix of weights $W$, and one more matrix product gives all of the outputs.

$$W = \sigma \left( X \cdot X^T \right)$$

$$\textrm{output} = W \cdot X$$

```
S = np.matmul(X, X.T)                                     # All pairs of scores
W = np.exp(S) / np.exp(S).sum(axis=1).reshape(-1, 1)      # Softmax of each row
output = np.matmul(W, X)                                  # One output row per token
print(W.round(4))
```

The weight matrix for our example is shown below. Each row sums to 1, and the third row matches the weights we calculated above.

```
[[0.6652 0.09   0.2447]
 [0.0159 0.8668 0.1173]
 [0.1554 0.4223 0.4223]]
```

This is the benefit we noted in Week 5 of describing a calculation with matrices. A text with thousands of tokens requires millions of dot products, and they are all contained in a single matrix product that a computer can calculate efficiently.

## What a real model adds

The calculation above is the core of attention, but an actual transformer differs from it in several ways. None of them require new mathematics.

- **Learned weight matrices.** Before the dot products are calculated, the embeddings are multiplied by weight matrices whose entries are parameters of the model. These matrices are what the model learns. They allow it to decide what "relevant" should mean, and they are trained by gradient descent like every other weight.
- **Only earlier tokens.** When predicting the next token, each token is allowed to attend only to itself and to the tokens before it. The scores for later tokens are replaced with large negative numbers, which the softmax function turns into weights of nearly 0.
- **Scaling.** The scores are divided by a constant before the softmax function is applied, which keeps them from growing too large. This is the same idea as the temperature discussed earlier.
- **Position.** A dot product does not depend on where a token is in the text, so information about each token's position is added to its embedding.
- **Many heads and many layers.** A model runs several attention calculations side by side, each with its own weight matrices, and then repeats the whole process in dozens of layers. Each layer also passes its outputs through a small densely connected neural network like the ones described in Week 5.

## How a language model uses the math in this course

We can now follow a piece of text through a large language model from beginning to end. Every step uses a topic from this course.

1. **Tokens and embeddings.** The text is split into tokens, and each token is replaced with an embedding by selecting a row of a matrix (Week 2: arrays and one-hot encoding; Week 3: vectors and matrix multiplication).
2. **Attention.** Each token's vector is updated with a weighted average of the other tokens' vectors (Week 3: dot products and matrix multiplication; Week 5: the softmax function).
3. **Neural network layers.** The vectors pass through layers of artificial neurons, each calculating weighted sums and applying an activation function (Week 5: artificial neurons and neural networks). Steps 2 and 3 are repeated many times.
4. **A probability for every token.** The final vector is multiplied by one more matrix to give a score for every token in the vocabulary, and the softmax function converts the scores into probabilities (Week 5: softmax; Week 7: probability distributions).
5. **Sampling.** The next token is drawn at random from that distribution, added to the text, and the process repeats (Week 7: random sampling).

Training uses the rest of the course.

6. **Loss.** The model is scored by the cross-entropy between its predictions and the tokens that actually came next in its training text (Week 8: negative log-likelihood).
7. **Gradients.** The gradient of the loss with respect to every parameter is calculated by backpropagation, which is the chain rule applied many times (Week 4: derivatives; Week 5: gradients and backpropagation).
8. **Optimization.** The parameters are updated by mini-batch gradient descent (Week 5: gradient descent; Week 7: random sampling).

A current LLM has billions of parameters and is trained on an enormous amount of text. But there is no step in the list above that goes beyond the mathematics you have studied in this course. The scale is new. The ideas are vectors, matrices, derivatives, and probabilities.
