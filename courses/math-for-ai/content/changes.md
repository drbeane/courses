## New lessons

Five lessons were added. They connect the math in the course to how current AI systems work.

| Week | Lesson | What it covers |
|---|---|---|
| 3 | [Vector length and similarity](/lessons/w03-t4/) | Norm, distance, cosine similarity, embeddings, a similarity search |
| 5 | [Training a model with gradient descent](/lessons/w05-t7/) | Fits the Week 3 regression by gradient descent, learning rates that are too high and too low, mini-batch SGD, momentum and Adam |
| 6 | [Evaluating models](/lessons/w06-t9/) | Training and test sets, overfitting, accuracy, the confusion matrix, precision and recall |
| 8 | [Language models](/lessons/w08-t9/) | Tokens, the chain rule of probability, a bigram model, sampling, temperature, cross-entropy, perplexity |
| 8 | [Attention](/lessons/w08-t10/) | Attention as dot products, softmax and a weighted average, then how a large language model uses each week of the course |

These lessons have no Colab notebook. Their code examples can be copied into a new notebook.

## Updated lessons

Twenty-one lessons gained new sections or examples.

| Week | Lesson | Added |
|---|---|---|
| 1 | [Introduction to artificial intelligence](/lessons/w01-t1/) | Generative AI and large language models |
| 1 | [Introduction to machine learning](/lessons/w01-t2/) | Self-supervised learning, and newer applications in the list |
| 1 | [Defining functions](/lessons/w01-t13/) | Example: accuracy of a classifier |
| 2 | [Array aggregations](/lessons/w02-t4/) | Example: choosing a predicted class with argmax |
| 2 | [Two-dimensional arrays](/lessons/w02-t7/) | Examples: a grayscale image, standardizing features. Arrays with more than two dimensions |
| 2 | [One-hot encoding](/lessons/w02-t8/) | Example: counting words (bag of words) |
| 3 | [Matrices and matrix operations](/lessons/w03-t3/) | Example: one-hot vectors and embedding lookup |
| 3 | [Eigenvalues and eigenvectors](/lessons/w03-t8/) | Examples: rotating points, ranking web pages (PageRank) |
| 4 | [Differentiation formulas](/lessons/w04-t3/) | Example: derivative of the sigmoid, vanishing gradients |
| 4 | [Local extrema](/lessons/w04-t8/) | Example: fitting a one-parameter model |
| 5 | [Neural networks](/lessons/w05-t9/) | How large are real networks? |
| 5 | [Calculating the output of a neural network](/lessons/w05-t10/) | Softmax with a temperature. Example: a network that computes XOR. Shapes with batches and sequences |
| 5 | [Backpropagation](/lessons/w05-t11/) | A worked example by hand |
| 6 | [Measures of relationship](/lessons/w06-t6/) | Example: screening features by correlation |
| 6 | [Principal component analysis](/lessons/w06-t7/) | Where PCA is used in AI. Low-rank approximation (SVD) |
| 7 | [Random number generation in NumPy](/lessons/w07-t2/) | The newer generator interface. Examples: sampling the next word, shuffling, initializing weights, dropout |
| 7 | [Monte Carlo sampling](/lessons/w07-t8/) | Example: expected reward of a strategy |
| 8 | [The normal distribution](/lessons/w08-t3/) | Normal distributions in AI |
| 8 | [Naive Bayes classification](/lessons/w08-t6/) | Bayes' theorem |
| 8 | [Logistic regression](/lessons/w08-t7/) | Logistic regression as a single neuron |
| 8 | [Training a logistic regression model](/lessons/w08-t8/) | Cross-entropy and perplexity |

## New demos

Four demos were added, which brings the total to 11.

- [Vector similarity explorer](/demos/vector-similarity/) (Week 3)
- [Softmax and temperature](/demos/softmax-temperature/) (Weeks 5 and 8)
- [Bigram text generator](/demos/bigram-generator/) (Week 8)
- [Attention explorer](/demos/attention-explorer/) (Week 8)

## Corrections

Errors and typos found in a review of every lesson were fixed. These lessons are not marked Updated unless they also gained new material. The corrections that change a result:

- [The derivative](/lessons/w04-t2/) (Week 4): the time in the falling-ball example is now 6.25 seconds, which matches the stated velocity of −72.
- [Gradient ascent and descent examples](/lessons/w05-t5/) (Week 5): the printed outputs were re-run. Example 2.2 now states that it uses a maximum of 200 iterations.
- [Training a logistic regression model](/lessons/w08-t8/) (Week 8): the gradient is written so that its shape matches the coefficient vector, and the code matches the formula.

## Not changed

- The eight labs are the same, apart from one typo.
- The Colab notebooks were not edited. Where a lesson's text or code changed, the linked notebook still shows the original.
