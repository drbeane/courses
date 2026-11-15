# Week 7: Expected value and variance

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss a few descriptive measures for discrete random variables. The concepts discussed in this lesson are demonstrated in the following Google Colab notebook: [Discrete Random Variables](https://colab.research.google.com/drive/1Gkev4Oy9nW6-dc-Lo1IXYIs8ic4-UH7l?usp=sharing).

## Descriptive statistics for random variables

We will now introduce some descriptive statistics that can be calculated for random variables and that are intended to describe certain characteristics of the random variable. These descriptive statistics are the expected value (or mean), the variance, and the standard deviation. We encountered each of these terms last week when discussing descriptive statistics for samples. The concepts that we introduce this week are, as the names imply, closely related to the ones we introduced last week, but there are important differences to be aware of.

A descriptive statistic calculated from a sample is called a **sample statistic**, and one calculated from a random variable is called a **population statistic** (the term **population parameter** is also common). A population statistic is a property of the random variable itself and is not calculated from a sample of observations. A sample statistic, on the other hand, is a property of the sample rather than the random variable that the sample was drawn from. Sample statistics can (and usually do) vary from one sample to the next, even if the samples are drawn from the same random variable. We often use sample statistics as approximations for corresponding population statistics when the true distribution of a random variable is unknown.

## Expected value

Let $X$ be a discrete random variable with probability mass function $p(x)$. The **expected value** (or **mean**) of $X$ is denoted by $\mu_X$ or $E\left[X\right]$, and is defined as follows:

$$\mu_X=E\left[X\right]=\sum{x\cdot p\left(x\right)}$$

Note that the expected value of a random variable $X$ is also referred to as the "mean" of the random variable. The concept of the mean $\mu_X$ of a random variable is closely related to the concept of the mean $\bar x$ of a sample, which we introduced last week. Suppose that we collected a sample of several observations of a random variable $X$ and calculated the mean $\bar x$ of the sample. We would expect this to be approximately equal to the mean $\mu_X$ of the random variable. We should not expect that the two means will be exactly equal, though, due to the randomness involved in the sampling. In fact, two different samples are likely to produce two different sample means, but both means should, in theory, be relatively near to $\mu_X$. We often use the mean of a sample to approximate the mean of a random variable whose mean is unknown. The quality of such an approximation increases with the size of the sample drawn.

## Calculating expected value with NumPy

It is simple to calculate the mean of a random variable whose values and probabilities are stored in arrays. Inspecting the formula for $E\left[X\right]$ reveals that it is simply the dot product of the value array and the probability array. This is demonstrated below for the "game of chance" example from the previous lesson.

```
EX = np.dot(x, p)         # Calculate E[X] (result is 5.25)
```

The fact that $E\left[X\right] = 5.25$ for the game of chance means that if a player were to play the game many times, they should expect to win an average of 5.25 per play. The actual winnings for each game will obviously vary, and the final average might not be exactly equal to 5.25, but the more the player plays, the more likely it is that their average winnings will approach 5.25.

## Expected value of a function

Suppose that $g\left(x\right)$ is a function that can be applied to the values of a random variable $X$. We can define a new random variable $Y = g(X)$ by applying the function to each value of $X$. The expected value of the new random variable can be calculated using the formula below.

$$E\left[Y\right] =\ E \left[ g(X) \right] =\sum{g(x)\cdot p\left(x\right)}$$

As an example, consider the game of chance that was introduced in the previous lesson. Suppose that the player of that game must pay 7 each time they play the game. Then, we can define a variable $W$ to represent the net winnings of the player. Then, $W = X - 7$. The table below provides the values of $X$, the associated values of $W$, and the corresponding probabilities.

| $x$ | 0 | 1 | 5 | 10 | 50 | 100 |
|---|---|---|---|---|---|---|
| $w$ | -7 | -6 | -2 | 3 | 43 | 93 |
| $p(x)$ | 0.40 | 0.25 | 0.20 | 0.10 | 0.04 | 0.01 |

We can calculate the expected net winnings $E[W]$ by calculating the dot product of an array containing the $W$ values with an array containing the probabilities. This is demonstrated below.

```
w = x - 7                 # Calculate values for W
EW = np.dot(w, p)         # Calculate E[W] (result is -1.75)
```

As you might have expected, $E[W] = E[X] - 7 = -1.75$. In this case, we can obtain the value of $E[W]$ by applying the function $g\left(x\right) = x - 7$ to $E\left[X\right] = 5.25$. That is not usually the case, however. In most cases $g \left(E\left[X\right] \right)$ will NOT be equal to $E\left[g \left( X \right)\right]$.

## Variance and standard deviation

The **variance** of a discrete random variable $X$ is a measure of the variability of the random variable. It is denoted by $\sigma_X^2$ or $\textrm{Var}\left[X\right]$ and is defined by the formula below.

$$\sigma_X^2 ~=~ \textrm{Var}\left[X\right] ~=~ E \left[\left(X-\mu_X\right)^2 \right] ~=~ \sum{\left(x-\mu_X\right)^2\cdot p\left(x\right)}$$

The formula above explains that $\textrm{Var}\left[X\right] = E \left[\left(X-\mu_X\right)^2 \right]$, or that the variance is equal to the expected value of the squared difference between values of $X$ and the mean $\mu_X$. This definition is important for understanding the meaning and intuition behind variance, but it can sometimes be inconvenient to apply. In practice, variance is more commonly calculated using the alternate formula provided below.

$$\sigma_X^2 ~=~ \textrm{Var}\left[X\right] ~=~ E \left[X ^2 \right] - \mu_X^2$$

The **standard** **deviation** of a random variable $X$ is denoted by $\sigma_X$ or $\textrm{SD}\left[X\right]$ and is equal to the square root of the variance.

$$\sigma_X ~=~ \sqrt {\textrm{Var}\left[X\right] }$$

## Using NumPy to calculate variance and standard deviation

We will now demonstrate how to use NumPy to calculate variance and standard deviation. We will calculate these values for the random variable $X$ that represents the amount paid out in the game of chance that we have been considering.

```
x_squared = x**2               # Calculate values for X^2
EX2 = np.dot(x_squared, p)     # Calculate E[X^2]
VarX = EX2 - EX**2             # Calculate Var[X] (result is 187.6875)
SDX = VarX ** 0.5              # Calculate SD[X] (result is approx 13.7)
```
