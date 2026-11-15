# Week 6: Measures of central tendency

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss the following measures of central tendency: the mean, the median, and the mode. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Measures of Central Tendency](https://colab.research.google.com/drive/1JRM9nnltfiLi-fd3k_rvhObW1O01tJv9?usp=sharing).

## Measures of central tendency

Recall that a **descriptive** **statistic** is a value that is intended to summarize or describe some characteristic of a set of observations for a random variable. A **measure of central tendency** is a descriptive statistic that is intended to, in some way, capture the location of the center of the observations. There are multiple ways of measuring the location of the center of a collection of values, each of which has its own advantages and applications. We will discuss three such measures in this lesson. These are the **mean**, **median**, and **mode**.

## The mean

Let $X$ be a random variable. Consider a sample of $n$ observations of $X$ denoted $x_1$, $x_2$, ..., $x_n$. The **mean** of this sample is denoted by $\bar x$ and is defined by the formula below.

$$\bar x = \frac{1}{n} \sum_{i=1}^n x_i$$

The NumPy function `np.mean()` can be used to calculate the mean of a sample of observations that is stored in either a Python list or NumPy array. This is demonstrated in the code cell below for a list or array named `x`.

```
mean_x = np.mean(x)
```

One interesting property of the mean is that it is the value that minimizes the sum of squared deviations between a fixed value and the observations in the sample. To explain this more formally, we define the function $ssd(m)$ as shown below.

$$ssd(m) = \sum_{i=1}^n(x_i - m)^2$$

The mean $\bar x$ is the unique value of $m$ for which $ssd(m)$ has a local minimum, and that value is, in fact, an absolute minimum for the function. The code block below uses SymPy to confirm that $\bar x$ is a critical point for $ssd(m)$.

```
m = sym.Symbol('m')
ssd = sum([(m - x_value)**2 for x_value in x])
display(ssd.simplify())
d_ssd = ssd.diff()
display(d_ssd)
min_m = sym.nroots(d_ssd)
print(min_m)
```

## The median

The **median** of a collection of observations is a number $M$ such that roughly 50% of observations in the sample are less than $M$ and roughly 50% of observations in the sample are greater than $M$. To be more precise, we will explain the process for calculating the median. The first step is to sort the observations into ascending (or descending) order. If there is an odd number of observations, then the median is equal to the observation directly in the middle of the sorted observations. If there is an even number of observations, the median is generally set to be equal to the average of the middle two observations.

We provide a few simple examples of calculating the median below.

- The median of the sample `[1, 3, 6, 8, 9]` is equal to 6.
- The median of the sample `[1, 3, 6, 8]` is equal to 4.5.
- The median of the sample `[1, 6, 6, 8]` is equal to 6.

The NumPy function `np.median()` can be used to calculate the median of a sample of observations that are stored in either a Python list or NumPy array. This is demonstrated in the code cell below for a list or array named `x`.

```
med_x = np.median(x)
```

There is no widely accepted standard notation for the median, but $M$ is a notation that is commonly used for this descriptive statistic. Two other commonly used notations are $p_{50}$ and $Q_2$. These alternate notations are related to concepts known as **percentiles** and **quartiles**, which we will discuss in a later lesson.

## Frequency distributions

Before introducing our final measure of central tendency, we will take a brief diversion to introduce the concept of a frequency distribution. A **frequency distribution** for a sample of observations is a table or chart that describes the unique values that appear in a sample, along with counts of the number of times each of these values appears in the sample. Frequency distributions are useful for summarizing samples of categorical random variables.

As an example, assume that a categorical random variable $Y$ can take on any of the following three values: A, B, or C. Suppose that a sample of 20 observations is drawn, and that the sample contains 9 A's, 4 B's, and 7 C's. Then, the frequency distribution for the sample can be represented by the table below.

| Values | Counts |
|---|---|
| A | 9 |
| B | 4 |
| C | 7 |

NumPy provides a function named `np.unique()` that can be used to generate frequency distributions for samples represented by lists or arrays. If such an object is passed to `np.unique()`, then an array containing the unique values will be returned. However, if the optional parameter `return_counts` is set to `True`, then two arrays are returned. The first array will contain the unique values, and the second array will contain the corresponding counts. This is demonstrated in the code block below.

```
values, counts = np.unique(y, return_counts=True)
print(values)
print(counts)
```

## The mode

The **mode** of a sample of observations of a random variable is equal to the most frequently occurring value in the sample. A sample might have more than one mode if there are multiple distinct values that occur equally often. The mode is most often used when working with categorical random variables which have no meaningful numerical interpretation.

NumPy does not provide a function for calculating the mode. However, the mode for a sample can be identified from a frequency distribution for the sample. This is demonstrated below.

```
values, counts = np.unique(y, return_counts=True)
mode_idx = np.argmax(counts)
mode = values[mode_idx]
print(mode)
```

The code sample above will find only a single mode for the sample. This code can be modified to find multiple modes, if they exist. This is demonstrated below.

```
values, counts = np.unique(y, return_counts=True)
max_count = np.max(counts)
modes = values[counts == max_count]
print(modes)
```
