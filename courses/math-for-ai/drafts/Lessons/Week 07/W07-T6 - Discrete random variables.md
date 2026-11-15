# Week 7: Discrete random variables

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss discrete random variables. We will introduce several tools for working with and describing discrete random variables. The concepts discussed in this lesson are demonstrated in the following Google Colab notebook: [Discrete Random Variables](https://colab.research.google.com/drive/1Gkev4Oy9nW6-dc-Lo1IXYIs8ic4-UH7l?usp=sharing).

## Probability mass functions

Recall from the previous lesson that a **random variable** is a numerical quantity whose value depends on the outcome of an experiment, and that a random variable is said to be **discrete** if it can assume only finitely many values, or countably many values. In order to perform calculations relating to discrete random variables, we will typically need to have access to a function that maps values to probabilities. Such a function is known as a probability mass function. We will now provide a formal definition of this concept.

Let $X$ be a discrete random variable. A **probability mass function** (**PMF**) or **probability distribution** for $X$ is a function $p(x)$ that assigns a probability to each value in the support of $X$. For a function $p(x)$ to be a valid PMF for $X$, it must satisfy the following criteria:

- $p\left(x\right)\geq0$ for all $x$
- $\sum p\left(x\right)=1$

The PMF for a discrete random variable is often represented as a table if the support of the random variable is relatively small. If the support is large, we typically prefer to represent the PMF as a mathematical formula, if possible.

Given a PMF for a random variable, we can calculate the probability of events related to that random variable by summing the probabilities of the outcomes that satisfy the event. To state this more formally, let $X$ be a discrete random variable with probability mass function $p(x)$. Let $E$ be an event and let $x_1, x_2, …, x_k$ denote the outcomes that satisfy the event $E$. Then $P\left[E\right]=\sum_{i=1}^{k}{p(x_i)}$.

## Using NumPy to calculate probabilities

We will now demonstrate how to use NumPy to represent and work with probability mass functions. To do so, we will consider an example.

Suppose that a game of chance pays a player one of the following amounts during each attempt at the game: 0, 1, 5, 10, 50, 100. Let $X$ be a random variable representing the amount paid by the game during a single attempt. The distribution for $X$ is provided in the table below.

| $x$ | 0 | 1 | 5 | 10 | 50 | 100 |
|---|---|---|---|---|---|---|
| $p(x)$ | 0.40 | 0.25 | 0.20 | 0.10 | 0.04 | 0.01 |

We will now see how to use NumPy to perform probability calculations relating to $X$. We will store the possible values of the random variable in one array (which we will call `x`), and we will store the corresponding probabilities in another array (that we will call `p`). We will then use array comparisons and Boolean masking to select the probabilities associated with the values of $X$ we are interested in, and we will then sum those probabilities. This is demonstrated in the code block below.

```
x = np.array([0, 1, 5, 10, 50, 100])
p = np.array([0.40, 0.25, 0.20, 0.10, 0.04, 0.01])

P1 = p[x == 5].sum()      # Calculate P[X = 5] (result is 0.20)
P2 = p[x < 5].sum()       # Calculate P[X < 5] (result is 0.65)
P3 = p[x >= 5].sum()      # Calculate P[X >= 5] (result is 0.35)
```

The code above confirms the following results:

$P[X=5] = 0.20$, $P[X < 5] = 0.65$, $P[X \geq 5] = 0.35$

These results could have been quickly calculated from the table without the use of NumPy, but if the arrays were significantly larger, then it would be tedious to perform the calculations by hand.
