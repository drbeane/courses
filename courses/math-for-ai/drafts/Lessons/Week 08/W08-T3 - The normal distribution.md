# Week 8: The normal distribution

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss a specific type of distribution for a continuous random variable known as the normal distribution. The concepts discussed in this lesson are demonstrated in the following Google Colab notebook: [The Normal Distribution](https://colab.research.google.com/drive/16DpbMxy8QKeYsnie1OVLW-9jlwDiAC_E?usp=sharing).

## The normal distribution

We will now turn our attention to what is almost certainly the most important continuous distribution: the **normal distribution**. The normal distribution has applications in many fields, such as physics, biology, and economics, and it also has significant theoretical importance.

The support of a normally distributed random variable is the entire real line, and its PDF is determined by two parameters, $\mu$ and $\sigma$. The PDF of a normal random variable will be bell-shaped and symmetric about the vertical line $x=\mu$. The formula for such a PDF is provided below.

**Definition:** Let $\mu$ be any real number and let $\sigma > 0$. A continuous random variable $X$ is said to follow a **normal distribution** with parameters $\mu$ and $\sigma$ if and only if its support consists of all real numbers $-\infty < x < \infty$ and its PDF is given as follows:

$$f(x) = \frac{1}{\sqrt{2\pi} \sigma} e^{-\frac{ \left( x - \mu \right)^2 }{2 \sigma^2}}$$

We will use the notation $X \sim N(\mu, \sigma^2)$ to indicate that $X$ follows a normal distribution with parameters $\mu$ and $\sigma$.

As the notation suggests, the parameters $\mu$ and $\sigma$ for a normal random variable are, in fact, equal to the expected value and standard deviation of that random variable. This will be stated formally in the next theorem.

**Theorem:** Let $X \sim N(\mu, \sigma^2)$. Then, the expected value and variance of $X$ are given as follows:

$$E[X] = \mu$$

$$\textrm{Var}[X] = \sigma^2$$

Notice that when using the notation $X \sim N(\mu, \sigma^2)$ to indicate a normally distributed random variable, we actually report the variance $\sigma^2$ rather than the standard deviation $\sigma$. We could, of course, report either value when defining a normal random variable, but we will adopt the more common convention of stating the variance.

## Sampling from a normal distribution with NumPy

NumPy provides a function `np.random.normal()` that can be used to draw a sample from a normal distribution. The function has three parameters, which we will discuss below.

- The `loc` parameter is used to specify the mean of the distribution from which the sample is to be drawn.
- The `scale` parameter is used to specify the standard deviation of the distribution from which the sample is to be drawn.
- The `size` parameter is used to specify the size of the sample. If this is set to a positive integer, then the sample will be a 1D array with the indicated number of values. Alternately, a tuple of positive integers can be provided to generate an array with the indicated shape.

In the example below, we generate a sample of a normally distributed random variable $X\sim N(\mu=10,\sigma^2=9)$ and then calculate some statistics for the sample.

```
np.random.seed(1)
x = np.random.normal(loc=10, scale=3, size=100_000)
print(f'Size of Sample:     {x.shape}')
print(f'Min of Sample:      {x.min()}')
print(f'Max of Sample:      {x.max()}')
print(f'Mean of Sample:     {x.mean()}')
print(f'Std Dev of Sample:  {x.std(ddof=1)}')
```

The output of the code above is as follows:

```
Size of Sample:     (100000,)
Min of Sample:      -2.9806618410704964
Max of Sample:      22.504353033865282
Mean of Sample:     10.015759085469048
Std Dev of Sample:  2.995002795676625
```

Notice that the mean and standard deviation of the sample are very near to the parameters we specified when creating the sample. This approximation would likely be even better if we were to collect a larger sample.

A histogram for the sample is shown below.

<img src="/images/image-3a2a893f-60b2-4968-bec1-df73046cd698.png" alt="Histogram of a sample from a normal distribution: a symmetric bell shape centered at about 10." width="500">

:::image Image description: Normal distribution sample
A histogram titled "Distribution of Sample from Normal Distribution" with X Values from about −3 to 23 and Counts on the y-axis. The bars rise to a peak of about 13,000 near X = 10 and fall off symmetrically, with very few values below 0 or above 20.
:::

Notice that the histogram appears to have a mostly symmetric bell shape, and is centered at the mean of 10. This is typical of a normally distributed random variable.

## Normal distribution probabilities

There are certain probabilistic properties that every normal random variable, regardless of the parameters used to define it, will satisfy. For example, if $X$ is a normally distributed random variable, then there is a 0.6827 probability of a randomly selected observation being within one standard deviation of the mean, a 0.9545 probability of it being within 2 standard deviations of the mean, and a 0.9973 probability of it being within 3 standard deviations of the mean. These and other related properties are listed below.

**Theorem:** Let $X \sim N(\mu, \sigma^2)$. Then:

1. $P \left[X < \mu \right] = 0.5$
2. $P \left[X < \mu +\sigma \right] = 0.8413$
3. $P \left[X < \mu + 2 \sigma \right] = 0.9772$
4. $P \left[X < \mu + 3 \sigma \right] = 0.9987$
5. $P \left[\mu- \sigma < X < \mu +\sigma \right] = 0.6827$
6. $P \left[\mu - 2 \sigma < X < \mu + 2\sigma \right] = 0.9545$
7. $P \left[\mu - 3\sigma < X < \mu + 3\sigma \right] = 0.9973$

We will use our sample to provide empirical evidence in support of the last three statements in the callout above.

```
p1 = np.mean((x > 7) & (x < 13))     # Results in 0.68386
p2 = np.mean((x > 4) & (x < 16))     # Results in 0.95463
p3 = np.mean((x > 1) & (x < 19))     # Results in 0.99712
```

We can see that the probability approximations derived from the sample are quite close to the theoretically correct values.

## Normal distributions in AI

Samples from a normal distribution are used throughout machine learning and artificial intelligence. Two uses are worth knowing about.

**Initial weights.** Before a neural network is trained, its weights are set to random values. These are usually drawn from a normal distribution with a mean of 0 and a small standard deviation, using a function such as `np.random.normal()`. The standard deviation is chosen with care, because weights that start too large or too small make a network slow or impossible to train.

**Image generation.** Many AI systems that generate images are based on a method called diffusion. During training, normally distributed noise is added to images, and a neural network learns to remove it. To create a new image, the system begins with an array of pure noise, in which every value is drawn from a normal distribution, and removes the noise step by step until an image remains. Because the starting noise is random, every image is different. Setting a seed for the noise reproduces the same image.
