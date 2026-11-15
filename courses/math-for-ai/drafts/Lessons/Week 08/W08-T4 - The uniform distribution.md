# Week 8: The uniform distribution

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss a specific type of distribution for a continuous random variable known as the uniform distribution. The concepts discussed in this lesson are demonstrated in the following Google Colab notebook: [The Uniform Distribution](https://colab.research.google.com/drive/1vHCQJ6YvEFQYlTGWJLRxfQPGBgVI4poL?usp=sharing).

## The uniform distribution

A continuous random variable is said to follow a **uniform distribution** if its support is an interval with finite length and the probability of getting a result within a sub-interval contained in the support is proportional to the length of the sub-interval itself, and is not dependent on the location of the sub-interval within the support. The probability is uniformly spread across the entire support, and results are just as likely to appear in one part of the support as in any other. This definition is stated formally in the callout below.

**Definition:** Let $a$ and $b$ be real numbers such that $a<b$. A continuous random variable $X$ is said to follow a **uniform distribution** on the interval $\left[a, b \right]$ if its support is equal to $\left[a, b \right]$ and its PDF is given as follows:

$$f(x) = \frac{1}{b ~-~ a}$$

We will use the notation $X \sim UNIF(a, b)$ to indicate that $X$ follows a uniform distribution on $\left[a, b \right]$.

Note that the PDF of a uniform distribution is constant, and does not depend on the value of $x$. As an example, a uniform distribution on the interval $\left[100, 150 \right]$ will have a PDF given by $f(x) = \frac{1}{50} = 0.02$ on its support.

In the callout below, we will provide formulas for the expected value and variance of a uniformly distributed continuous random variable.

**Theorem:** Let $X \sim UNIF(a, b)$. Then, the expected value and variance of $X$ are given as follows:

$$E[X] = \frac{a~+~b}{2}$$

$$\textrm{Var}[X] = \frac{\left(b ~-~ a\right)^2}{12}$$

## Sampling from a uniform distribution with NumPy

NumPy provides a function `np.random.uniform()` that can be used to draw a sample from a uniform distribution. The function has three parameters, which we will discuss below.

- The `low` parameter is used to specify the lower endpoint of its support, which we have denoted as $a$.
- The `high` parameter is used to specify the upper endpoint of its support, which we have denoted as $b$.
- The `size` parameter is used to specify the size of the sample. If this is set to a positive integer, then the sample will be a 1D array with the indicated number of values. Alternately, a tuple of positive integers can be provided to generate an array with the indicated shape.

In the example below, we generate a sample of a uniformly distributed random variable $X \sim UNIF(0, 200)$ and then calculate some statistics for the sample.

```
np.random.seed(1)
x = np.random.uniform(low=0, high=200, size=100_000)
print(f'Size of Sample:     {x.shape}')
print(f'Min of Sample:      {x.min()}')
print(f'Max of Sample:      {x.max()}')
print(f'Mean of Sample:     {x.mean()}')
print(f'Std Dev of Sample:  {x.std(ddof=1)}')
```

The output of the code above is as follows:

```
Size of Sample:     (100000,)
Min of Sample:      0.002073876435226829
Max of Sample:      199.9980568914269
Mean of Sample:     99.84382268031716
Std Dev of Sample:  57.8726405500625
```

The formulas for the expected value and variance of a uniform random variable tell us that $E[X] = \frac{0~+~200}{2} = 100$ and $\textrm{Var}[X] = \frac{\left(200 ~-~ 0\right)^2}{12} = 3333.33$. The standard deviation would then be equal to $\textrm{SD}[X] = \sqrt{3333.33} = 57.735$. Note that the approximations calculated from the sample are quite near to the true values of these statistics.

A histogram for the sample is shown below.

<img src="/images/image-696ff955-1ea3-486a-8ec7-961e3be93ea8.png" alt="Histogram of a sample from a uniform distribution: all bars from 0 to 200 have nearly the same height, about 5,000." width="500">

:::image Image description: Uniform distribution sample
A histogram titled "Distribution of Sample from Uniform Distribution" with X Values from 0 to 200 and Counts on the y-axis. All 20 bars are nearly equal, between about 4,850 and 5,150.
:::

## Percentiles for uniform distribution

In the code sample below, we use the sample generated to estimate the 10th, 20th, 30th, 40th, 50th, 60th, 70th, 80th, and 90th percentiles of the uniformly distributed random variable $X \sim UNIF(0, 200)$.

```
percentiles = []
for q in [10, 20, 30, 40, 50, 60, 70, 80, 90]:
    perc = np.percentile(x, q=q)
    perc = round(perc, 2)
    percentiles.append(perc)

print(percentiles)
```

The output of the code block above is as follows:

```
[19.69, 39.75, 59.36, 79.6, 99.97, 119.86, 139.89, 159.98, 180.13]
```

Note that each percentile approximation is roughly 20 units higher than the previous one, and also that 20 is exactly 10% of the length of the support of $X \sim UNIF(0, 200)$. This provides evidence that an interval of length 20 contains 10% of the overall probability, as would be expected for a uniform distribution.
