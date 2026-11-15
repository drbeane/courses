# Week 7: Random variables

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will introduce random variables, which are the primary objects of study in probability theory.

## Random variables

A **random variable** is a numerical quantity whose value depends on the outcome of an experiment. A random variable can be thought of as a mapping between the possible outcomes of an experiment and real numbers. In other words, a random variable is a way of assigning numerical values to the outcomes of an experiment. The following are all examples of random variables:

- The number of heads obtained when flipping a coin 10 times.
- The sum of two dice.
- The price of a share of a stock one year from now.
- The number of orders on an e-commerce site during a one-hour period.
- The amount of time required for a ride-share driver to arrive at a pick-up location.
- The weight of a yellow-bellied marmot captured on a certain mountain.
- The amount of time required for a self-driving car to come to a full stop when braking.

## Random variable notation

We will typically denote a random variable with a capital letter. For example, we might use random variables such as $L$ and $W$ to refer to the length and weight of a randomly selected marmot. When referring to generic random variables, we will often, but not always, use letters such as $X$, $Y$, and $Z$.

We will typically use lower-case letters to indicate specific values that can be assumed by a random variable. For example, suppose that $W$ refers to the weight in pounds of a randomly selected marmot. If we select a specific marmot and its weight is 3 lbs, we set $w=3$ for that marmot. When considering multiple observations of a single random variable, we typically use subscripts to distinguish them. For example, the weights of three marmots might be $w_1=3$, $w_2=2.5$, and $w_3=3.7$.

We will often denote events related to random variables with comparison expressions involving that variable. For example, $X=7$, $X\le4$, and $X>2$ are events that we could check for a random variable $X$. The probabilities of these events occurring would be denoted by $P\left[X=7\right]$, $P\left[X\le4\right]$, and $P\left[X>2\right]$, respectively.

We can combine events into more complex compound events using the logical operations “and” and “or”. For example, the probability that a random variable $X$ falls between 4 and 9 inclusive would be denoted as $P[X\geq4 \textrm{ and } X\le9]$. The probability that $X$ is either 3 or 7 would be denoted as $P[X=3 \textrm{ or } X=7]$.

## Discrete and continuous random variables

The **support** of a random variable is the set of all values that the random variable can assume. We can classify a random variable as either discrete or continuous based on the nature of its support.

- A random variable is said to be **discrete** if it can assume only finitely many values, or countably many values. Intuitively, a random variable is discrete if its support contains no intervals.
- A random variable is said to be **continuous** if its support is equal to, or contains, a continuous interval.

The distinction between discrete and continuous random variables is an important one. The tools and methods we use when working with a random variable will typically depend on the type of the random variable. We will discuss discrete random variables in the next lesson.
