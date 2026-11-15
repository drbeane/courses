# Week 6: Measures of position

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss the following measures of position: percentiles, quantiles, quartiles, and z-scores. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Measures of Position](https://colab.research.google.com/drive/11JTr-f08h8FB2U9TJ8obXD8wEYRuSxGC?usp=sharing).

## Measures of position

A **measure of position** is a value that describes the location of a value with respect to the overall dataset. We will consider four measures of position in this lesson. These will be **percentiles**, **quantiles**, **quartiles**, and **z-scores**. Although these, in a sense, represent four different measures, we will see that the first three measures we have listed are very closely related and are, in some cases, simply different names for the same concept.

## Percentiles

A **percentile** is a value that is defined based on the proportion of observations in the dataset that fall below that value. More specifically, if $k$ is a number between 0 and 100, then the ***k*th percentile** is a value $p_k$ such that (approximately) $k$% of the observations in the dataset fall below the given value. For example, roughly 10% of all observations in a dataset would fall below the 10th percentile $p_{10}$, and roughly 80% of all observations would fall below the 80th percentile $p_{80}$. The 50th percentile is identical to the median.

NumPy provides a `np.percentile()` function that can be used to calculate percentiles. When using the function, we must set the parameter `q` to indicate which percentile we would like to find. The code cell below demonstrates how to use NumPy to calculate percentiles for a sample stored in a list or array named `x`.

```
p05 = np.percentile(x, q=5)     # Calculate 5th percentile
p10 = np.percentile(x, q=10)    # Calculate 10th percentile
p70 = np.percentile(x, q=70)    # Calculate 70th percentile
p90 = np.percentile(x, q=90)    # Calculate 90th percentile
```

## Quantiles

A **quantile** is an alternate way of denoting and naming a percentile. Specifically, if $k$ is a number between 0 and 1, then the ***k*th quantile** of a dataset is equal to the $(k\cdot 100)$th percentile. As an example, the 0.37 quantile of a dataset is the same thing as the 37th percentile.

## Quartiles

A **quartile** is a specific type of percentile. The 25th, 50th, and 75th percentiles are respectively known as the 1st, 2nd, and 3rd quartiles, and are denoted by $Q_1$, $Q_2$, and $Q_3$. Notice again that the second quartile $Q_2$ is simply the median.

Quartiles can be calculated using the `np.percentile()` function with appropriate values set for the parameter `q`. The code block below demonstrates this.

```
q1 = np.percentile(x, q=25)     # Calculate 1st quartile
q2 = np.percentile(x, q=50)     # Calculate 2nd quartile
q3 = np.percentile(x, q=75)     # Calculate 3rd quartile
```

## z-scores

Let $X$ be a random variable. Consider a sample of $n$ observations of $X$ denoted $x_1$, $x_2$, ..., $x_n$. The **z-score** of an observation $x_i$ in the sample is the difference between the observation and the mean divided by the standard deviation. The formula for the z-score $z_i$ of an observation $x_i$ is given below.

$$z_i = \frac{x_i - \bar x}{s}$$

The z-score tells you how far the observation is from the mean in terms of the standard deviation of the sample. Note that calculating z-scores for a set is the same calculation as performing standard scaling on the dataset.

One application of z-scores is to detect outliers in a dataset. Outliers are occasionally defined to be values that are some number of standard deviations away from the mean, or in other words, values that have a z-score for which the absolute value is above a certain threshold. This threshold depends on the situation and on the application, but 3 is a common value to use.
