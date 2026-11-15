# Week 8: The exponential distribution

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss a specific type of distribution for a continuous random variable known as the exponential distribution. The concepts discussed in this lesson are demonstrated in the following Google Colab notebook: [The Exponential Distribution](https://colab.research.google.com/drive/1zFFaLgxUVcUQN96_ES04YFS3IWoGru12?usp=sharing).

## The exponential distribution

An **exponential distribution** is a distribution for a continuous random variable in which the support consists of all non-negative numbers, and the PDF strictly decreases on its support. Exponentially distributed random variables can theoretically assume any non-negative real number, but the probability of getting a result near a certain number decreases as the number increases. Exponential distributions are often used for continuous random variables that are intended to represent the time until some event (such as the failure of a device) occurs. The formal definition of an exponentially distributed random variable is provided in the callout below.

**Definition:** Let $\lambda > 0$. A continuous random variable $X$ is said to follow an **exponential distribution** with a rate parameter $\lambda$ if its support is equal to $\left[0, \infty \right)$ and its PDF is given as follows:

$$f(x) = \lambda e ^{-\lambda x}$$

We will use the notation $X \sim EXP(\lambda)$ to indicate that $X$ follows an exponential distribution with rate $\lambda$.

In the callout below, we will provide formulas for the expected value and variance of an exponentially distributed continuous random variable in terms of the rate parameter $\lambda$.

**Theorem:** Let $X \sim EXP(\lambda)$. Then, the expected value and variance of $X$ are given as follows:

$$E[X] = \frac{1}{\lambda}$$

$$\textrm{Var}[X] = \frac{1}{\lambda^2}$$

## Sampling from an exponential distribution with NumPy

NumPy provides a function `np.random.exponential()` that can be used to draw a sample from an exponential distribution. The function has two parameters, which we will discuss below.

- The `scale` parameter is equal to the expected value of the random variable, or $1 / \lambda$.
- The `size` parameter is used to specify the size of the sample. If this is set to a positive integer, then the sample will be a 1D array with the indicated number of values. Alternately, a tuple of positive integers can be provided to generate an array with the indicated shape.

In the example below, we generate a sample of an exponentially distributed random variable $X \sim EXP(1/20)$ and then calculate some statistics for the sample.

```
np.random.seed(1)
x = np.random.exponential(scale=20, size=100_000)
print(f'Size of Sample:     {x.shape}')
print(f'Min of Sample:      {x.min()}')
print(f'Max of Sample:      {x.max()}')
print(f'Mean of Sample:     {x.mean()}')
print(f'Std Dev of Sample:  {x.std(ddof=1)}')
```

The output of the code above is as follows:

```
Size of Sample:     (100000,)
Min of Sample:      0.00020738871877098316
Max of Sample:      230.83567195172535
Mean of Sample:     19.973262457578382
Std Dev of Sample:  19.971724193409703
```

The formulas for the expected value and variance of an exponential random variable tell us that the mean and standard deviation of $X \sim EXP(1/20)$ are both equal to 20. Note that the approximations calculated from the sample are quite near to the true values of these statistics.

A histogram for the sample is shown below.

<img src="/images/image-ae9e7dc1-b241-4fa4-9a01-c9f0b90139e6.png" alt="Histogram of a sample from an exponential distribution: counts are highest near 0 and drop off quickly as X increases." width="500">

:::image Image description: Exponential distribution sample
A histogram titled "Distribution of Sample from Exponential Distribution" with X Values from 0 to about 145 and Counts on the y-axis. The first bar (near 0) has about 22,000 values, and each later bar is lower: about 17,000, 13,000, 10,500, and 8,000, falling below 2,000 by about X = 60 and close to 0 beyond X = 100.
:::

## Estimating probabilities

In the code sample below, we use the sample generated to estimate the probability of an observation of the random variable $X \sim EXP(1/20)$ being less than 20, 40, 60, 80, and 100.

```
p20 = np.mean(x < 20)      # Results in 0.6325
p40 = np.mean(x < 40)      # Results in 0.8639
p60 = np.mean(x < 60)      # Results in 0.9504
p80 = np.mean(x < 80)      # Results in 0.9819
p100 = np.mean(x < 100)    # Results in 0.9935
```

Notice that 63.25% of observations in our sample were less than 20, and that 99.35% were less than 100. This demonstrates that even though $X \sim EXP(1/20)$ can assume any non-negative value, smaller values are much more likely to be observed than larger values.

## The memoryless property

Exponentially distributed random variables have an interesting characteristic known as the **memoryless** property. This property is stated formally below.

**Theorem:** Let $X \sim EXP(\lambda)$ and let $x>0$ and $k > 0$. Then $P\left[X > k \right] = P\left[X > x + k ~|~ X > x \right]$.

If a random variable $X \sim EXP(\lambda)$ is used to represent the amount of time until an event occurs, then the memoryless property effectively states that the probability that the event will occur within the next $k$ units of time will be the exact same no matter how much time has passed. As an example, suppose that the lifetime of a light bulb is assumed to follow an exponential distribution. Then, the probability that the light bulb will fail within the next 24 hours will be the same no matter how long it has lasted up until this point. Obviously, the memoryless property is not always realistic, and as such, the exponential distribution won't perfectly model events that don't display the memoryless property. However, the exponential distribution often provides a useful, if not perfect, approximation. For example, if a device does not substantially degrade over time, but could still fail at any time, then the memoryless property might be at least approximately true.
