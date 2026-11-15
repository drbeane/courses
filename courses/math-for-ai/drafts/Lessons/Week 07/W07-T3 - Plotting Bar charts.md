# Week 7: Plotting: Bar charts

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will demonstrate how to use Matplotlib to create bar charts. The concepts introduced in this lesson are demonstrated in the following Colab notebook: [Bar Charts](https://colab.research.google.com/drive/1bCZOg0hUFzuwQWJ60bJaCPFD1V0HgDor?usp=sharing).

## Bar charts

A **bar chart** is a data visualization tool that consists of some number of vertical bars of varying heights. Bar charts have many uses, but they are particularly useful for conveying information relating to counts. Suppose that we have several items that can be grouped into various categories, and we are interested in visually conveying the number of items in each category. This task is well-suited for a bar chart. In this case, we would have one bar or column for each category, and the heights of the bars would indicate the count of the items in each category.

Bar charts can be created using the `plt.bar()` function from Matplotlib. This function has two required inputs. The first item passed to the function should be a list or array indicating the labels for the bars, and the second item should be a list or array indicating the heights of the bars. The two lists/arrays should have the same number of elements.

An example of the usage of `plt.bar()` is demonstrated below. We have included several visual elements that, while optional, will likely enhance the presentation of the bar chart. These are summarized below.

- Three optional parameters are provided to `plt.bar()` in the example below. The `color` parameter sets the fill color to be used for the bars. The `edgecolor` parameter is used to add a border to the bars. The `zorder` parameter is required when adding a grid to the figure. This must be set to 2 or higher in order for the bars to appear in front of the grid.
- We have used `plt.title()` to add a title to the figure. We have also used `plt.xlabel()` and `plt.ylabel()` to add labels for the two axes.
- The function `plt.grid()` can be used to add a grid to the figure.

```
labels = ['A', 'B', 'C', 'D']                             # Define labels
heights = [20, 5, 17, 28]                                 # Set bar heights

plt.figure(figsize=[4,3])                                 # Set the figure size
plt.bar(                                                  # Create bar chart
    labels, heights,                                      # Provide labels and heights
    color='steelblue', edgecolor='black', zorder=2        # Set optional parameters
)
plt.title('Bar Chart Example')                            # Add a title
plt.xlabel('Categories')                                  # Add label for x-axis
plt.ylabel('Counts')                                      # Add label for y-axis
plt.grid()                                                # Add a grid
plt.show()                                                # Display figure
```

The code in the block above will create the bar chart shown below.

<img src="/images/image-4.png" alt="Bar chart example: counts of 20 for A, 5 for B, 17 for C, and 28 for D.">

:::image Image description: Bar chart example
A bar chart titled "Bar Chart Example" with Categories on the x-axis and Counts on the y-axis. The bar heights are A = 20, B = 5, C = 17, and D = 28.
:::

## Frequency distributions

A table or chart that describes counting information for objects that have been grouped into categories is known as a **frequency distribution**. As mentioned above, a bar chart is a common tool used for visualizing frequency distributions. When using a bar chart, we must supply the heights to `plt.bar()`. When creating a frequency distribution, it would be nice if we were able to generate the counts/heights automatically rather than determining them by manually counting.

Fortunately, this is possible using the `np.unique()` function from NumPy. When a list or array is provided to this function, the function will return an array containing one copy of each unique value contained in the original list. If we set the optional `return_counts` parameter to `True`, then `np.unique()` will also return an array indicating the number of times each unique item appeared. The usage of this function is demonstrated in the code block below.

```
my_list = ['A', 'C', 'B', 'A', 'A', 'C']
unique_items, item_counts = np.unique(my_list, return_counts=True)
print(unique_items)
print(item_counts)
```

If you were to run the code in the block above, the following arrays would be displayed:

```
['A' 'B' 'C']
[3 1 2]
```

The code block below demonstrates how to use NumPy to determine a frequency distribution and then use Matplotlib to visualize that distribution as a bar chart. For this example, we are using `np.random.choice()` to create a sample of 1000 letters selected from A, B, C, and D with replacement. The sampling is performed in a non-uniform manner, with each pick having a 20% chance of resulting in A, a 30% chance of resulting in B, a 10% chance of resulting in C, and a 40% chance of resulting in D.

```
items = np.random.choice(
    ['A', 'B', 'C', 'D'],
    p = [0.2, 0.3, 0.1, 0.4],
    size = 1000
)

groups, counts = np.unique(items, return_counts=True)
print(groups)
print(counts)

plt.figure(figsize=[4,3])
plt.bar(groups, counts, color='lightcoral', edgecolor='black', zorder=2)
plt.title('Frequency Distribution')
plt.xlabel('Groups')
plt.ylabel('Counts')
plt.grid()
plt.show()
```

Since no seed was set, the results of the code above will vary with each execution. However, the counts displayed should almost always be relatively close to 200, 300, 100, and 400, and the bar chart should look similar to the one displayed below.

<img src="/images/image-5.png" alt="Bar chart of a frequency distribution: counts of about 200 for A, 295 for B, 110 for C, and 395 for D." width="385">

:::image Image description: Frequency distribution
A bar chart titled "Frequency Distribution" with Groups on the x-axis and Counts on the y-axis. Approximate counts: A = 200, B = 295, C = 110, D = 395.
:::

## Numerical labels

On occasion, we will represent our groups using integers. When doing so, it is a good idea to convert the values in the label array to strings before using them in `plt.bar()`. If we do not do so, then the bars will be positioned along a number line with the positions based on the label values. This can produce correct results on occasion, but often, the bars will not be spaced correctly.

To convert the label values to strings, you can use `values.astype(str)` in place of `values`. We will see this in the next example.

## Example: Simulating die rolls

As a simple example of these concepts, we will use the code block below to simulate 100 individual die rolls and will use a bar chart to indicate the number of times each of the six possible results came up.

```
rolls = np.random.choice(range(1,7), size=100)
values, counts = np.unique(rolls, return_counts=True)

plt.figure(figsize=[6,3])
plt.bar(values.astype(str), counts, color='thistle', edgecolor='black', zorder=2)
plt.title('Frequency Distribution')
plt.xlabel('Result of the Die Roll')
plt.ylabel('Counts')
plt.grid()
plt.show()
```

One possible bar chart that could be generated by this code is shown below. Notice that even though each outcome is equally likely, the bars are not all the same height. Although we would expect the bars to be similar in height (on average), there is no such guarantee since the results are subject to random variation. If we increase the size of the sample from 100 to 1000 or 10,000, it is much more likely that the resulting bars will be similar in height. You are encouraged to experiment with this in the Colab notebook provided for this lesson.

<img src="/images/image-80096b76-cd9e-4286-8014-6b851f9fd5f7.png" alt="Bar chart of 100 simulated die rolls: counts of 20, 14, 14, 15, 16, and 21 for faces 1 to 6." width="531">

:::image Image description: Simulated die rolls (counts)
A bar chart titled "Distribution of Die Rolls" with Die Roll on the x-axis and Counts on the y-axis. Counts: 1 = 20, 2 = 14, 3 = 14, 4 = 15, 5 = 16, 6 = 21.
:::

## Proportional bar charts

It is often the case when building a bar chart that we wish the heights of the bars to represent proportions rather than counts. The `plt.bar()` function allows for floating point (decimal) values to be provided for the bar heights, so we only need to calculate the desired proportions in order to use them in a bar chart. We demonstrate this in the next code block. We also increase the number of observations from 100 to 10,000.

```
rolls = np.random.choice(range(1,7), size=10000)
values, counts = np.unique(rolls, return_counts=True)
props = counts / counts.sum()

plt.figure(figsize=[6,3])
plt.bar(values.astype(str), props, color='cadetblue', edgecolor='black', zorder=2)
plt.title('Distribution of Die Rolls')
plt.xlabel('Die Roll')
plt.ylabel('Proportions')
plt.grid()
plt.show()
```

The output of this code is shown below. Notice that the vertical axis now represents proportions instead of counts. Also, take note of the effect increasing the sample size had on the uniformity of the bar heights.

<img src="/images/image-3f3ee6f3-7a25-46e5-ac50-6e59ac576194.png" alt="Bar chart of the proportion of each die roll: all six faces are close to 0.167.">

:::image Image description: Simulated die rolls (proportions)
A bar chart titled "Distribution of Die Rolls" with Die Roll on the x-axis and Proportions on the y-axis. Approximate proportions: 1 = 0.158, 2 = 0.166, 3 = 0.169, 4 = 0.170, 5 = 0.170, 6 = 0.167. The bars are nearly equal, as expected for a fair die.
:::
