# Week 6: Measures of variability

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss the following measures of variability: range, variance, and standard deviation. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Measures of Variability](https://colab.research.google.com/drive/1ZWx5RCAF_Lk8aOvjrTj31qhgcrtewT6T?usp=sharing).

## Measures of variability

A **measure of variability** is a descriptive statistic that is intended to describe how dispersed or spread out the values in a sample are. If the values in the sample are observations of a single random variable, then a measure of variability can, in a sense, be thought of as a measure of how much fluctuation, variability, or randomness there is in the random variable. We will discuss three measures of variability in this lesson. These are the **range**, the **variance**, and the **standard deviation**.

## The range

Let $X$ be a random variable. Consider a sample of $n$ observations of $X$ denoted $x_1$, $x_2$, ..., $x_n$. The **range** of this sample is equal to the distance between the smallest and largest values in the sample. Stated another way, the range of a sample is equal to the difference between the maximum and minimum of the sample. This is stated in the formula below.

$$\textrm{range} = \textrm{max}_i(x_i) - \textrm{min}_i(x_i)$$

NumPy does not have a built-in function for the range, but this value can be easily calculated using the functions `np.max()` and `np.min()`. This is demonstrated in the code cell below for a list or array named `x`.

```
range_x = np.max(x) - np.min(x)
```

The range of a sample is a natural way to measure the variability or spread in a sample. It also has the benefit of being very easy to understand. It is not, however, always the most useful or informative measure of variability. The range of a sample is defined by just two values in the sample: the minimum and the maximum. The range tells you how far apart those values are, but tells you nothing about how the other values are distributed. The range is also highly affected by outlier observations, or observations that are either much smaller or much larger than typical observations. That is not always a desirable characteristic of a descriptive statistic.

We will now consider two much more commonly used measures of variability.

## Variance

Let $X$ be a random variable. Consider a sample of $n$ observations of $X$ denoted $x_1$, $x_2$, ..., $x_n$. The **variance** of this sample, which is often denoted by $s^2$, is (approximately) the average of the squared deviation of each observation from the mean of the sample. The formula for sample variance is provided below.

$$s^2 = \frac{1}{n-1} \sum_{i=1}^n \left(x_i - \bar x \right)^2$$

We will break down the formula for the variance by describing the steps required to calculate it.

1. Calculate the sample mean, $\bar x$.
2. For each observation, calculate the squared deviation from the mean: $\left(x_i - \bar x \right)^2$
3. Sum the squares of the deviations: $\sum_{i=1}^n \left(x_i - \bar x \right)^2$
4. Divide by sample size minus 1 to get the variance: $s^2 = \frac{1}{n-1} \sum_{i=1}^n \left(x_i - \bar x \right)^2$

If we had divided by the sample size $n$ in the last step, we would truly be calculating the average of the squared deviations from the mean. You might be wondering why we divide by $n-1$ instead. As we have mentioned before, descriptive statistics are often calculated from samples and used to approximate similar quantities for the entire population. If we did have access to the entire population, then we would, in fact, divide by $n$ when calculating the variance of the population. But it can be shown that if we divide by $n$ when estimating the variance from a sample, then the estimates are **biased** with a tendency to be underestimates of the population variance.<br>
NumPy provides a `np.var()` function that can be used to calculate variance. If calculating the variance of the sample, then you must set `ddof=1` when calling the function. The optional `ddof` parameter (short for "delta degrees of freedom") sets the number that should be subtracted from the sample size when performing the division described in step 4 of the process above. For the purposes of calculating sample variance, the degrees of freedom should always be set to 1, but there are some situations when other values might be desired.

The code cell below demonstrates how to use NumPy to calculate the variance of a sample stored in a list or array named `x`.

```
var_x = np.var(x, ddof=1)
```

## Standard deviation

Let $X$ be a random variable. Consider a sample of $n$ observations of $X$ denoted $x_1$, $x_2$, ..., $x_n$. The **standard deviation** of this sample, denoted by $s$, is simply the square root of the variance.

The variance of a sample will have to be measured in units that are the square of the unit that the original population was measured in. As a result, the standard deviation will be measured in the same units as the sample. This also means that the standard deviation and the mean of a sample will be in the same units. For this reason, we tend to prefer to use the standard deviation over the variance. However, the theoretical properties of standard deviation and variance are stated more nicely in terms of the variance than the standard deviation, so while the standard deviation has more value when it comes to application, the variance is typically preferred for theoretical work.

NumPy provides a `np.std()` function that can be used to calculate standard deviation. As was the case with `np.var()`, we must set `ddof=1` when calculating the standard deviation of a sample. The code cell below demonstrates how to calculate the standard deviation of a sample stored in a list or array named `x`.

```
std_x = np.std(x, ddof=1)
```
