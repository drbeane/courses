# Week 8: Plotting: Histograms

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will demonstrate how to use Matplotlib to create histograms. The concepts introduced in this lesson are demonstrated in the following Colab notebook: [Histograms](https://colab.research.google.com/drive/17zcy2zFwZIR2kYFMbpaLxL4wJqvPBGIV?usp=sharing).

## Histograms

A **histogram** is a data visualization tool for visualizing the distribution of observations contained in a sample drawn from a continuous random variable. In some ways, a histogram is similar to a bar chart. Both types of plots consist of vertical bars whose heights are often used to indicate counts or proportions. The primary difference between the two relates to the nature of the variables that they are meant to describe. A bar chart is typically used to convey information related to a discrete random variable, and each bar is associated with a single value for that random variable. A histogram, on the other hand, is used to convey information about a continuous random variable, and each bar is associated with a range or interval of values for that random variable. Also, to indicate the continuity of the underlying variable, histograms are typically drawn so that the bars are directly adjacent to each other, with no space separating them.

## Creating a histogram

Histograms can be created using the `plt.hist()` function from Matplotlib. This function has one required input, which is expected to be an array representing the sample used to generate the plot. It is also a good idea to set the `bins` parameter to indicate the number of bars to be used in the histogram. We will also often set the `color`, `edgecolor`, and `zorder` parameters. Each of these parameters performs the same function as in `plt.bar()`.

An example of the usage of `plt.hist()` is demonstrated below. For this example, we are using a sample drawn from a specific type of continuous random variable that follows a normal distribution. We will discuss normal distributions in the next lesson.

```
x = np.random.normal(loc=10, scale=3, size=1000)

plt.figure(figsize=[6,3])
plt.hist(x, bins=20, color='steelblue', edgecolor='black', zorder=2)
plt.title('Histogram Example')
plt.xlabel('X Values')
plt.ylabel('Counts')
plt.grid()
plt.show()
```

The code in the block above will create the histogram shown below.

<img src="/images/image-fbe70cd3-349b-4031-bc62-910168392f20.png" alt="Histogram example: a bell-shaped distribution of X values from about 1 to 21, peaking near 10." width="500">

:::image Image description: Histogram example 1
A histogram titled "Histogram Example" with X Values on the x-axis (0 to 20) and Counts on the y-axis. The bars are low at both ends, rise to a peak of about 135 at X ≈ 9.5 to 10, and fall off symmetrically, with only a few values below 3 or above 17.
:::

Rather than specifying the number of bins, we can provide the `bins` parameter with a list or array that contains the cutoffs we would like to use for the intervals that define the bars. For example, if we would like to use intervals or bins whose end points are integer values ranging from 0 to 21, then we could set `bins` equal to `np.arange(0,22,1)`. We could replace the 1 with 0.5 if we would like bars that are half as wide. This method of defining the bins is demonstrated below.

```
x = np.random.normal(loc=10, scale=3, size=1000)

my_bins = np.arange(0, 22, 1)
plt.figure(figsize=[6,3])
plt.hist(x, bins=my_bins, color='steelblue', edgecolor='black', zorder=2)
plt.title('Histogram Example')
plt.xlabel('X Values')
plt.ylabel('Counts')
plt.grid()
plt.show()
```

The code in the block above will create the histogram shown below.

<img src="/images/image-00e6621f-6718-4829-b55f-758a2424b4bb.png" alt="Histogram example with wider bins: a bell-shaped distribution of X values peaking at about 130 near X = 10." width="500">

:::image Image description: Histogram example 2
A histogram titled "Histogram Example" with X Values on the x-axis (0 to 21) and Counts on the y-axis. The same kind of data as the first histogram: counts rise from near 0 at X = 0 to a peak of about 130 at X ≈ 10, then fall back to near 0 at X = 21.
:::
