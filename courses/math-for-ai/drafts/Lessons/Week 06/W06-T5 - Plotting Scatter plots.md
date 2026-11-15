# Week 6: Plotting: Scatter plots

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will demonstrate how to use Matplotlib to create scatter plots. The concepts introduced in this lesson are demonstrated in the following Colab notebook: [Scatter Plots](https://colab.research.google.com/drive/1rK2ONv_uHUv_ZZUhVv-7EgE1nuCMiQHE?usp=sharing).

## Paired samples

In data science and machine learning, it is often the case that there are several variables of interest that can be measured for observations in our population, and we are interested in understanding how these variables are related to each other. Suppose that we have two such variables, which we will refer to as $X$ and $Y$. To gain insight into the relationship of $X$ and $Y$, we should collect a sample of observations and measure both variables for each observation. A **paired sample** is a sample consisting of observations of the form $\left( x_i, y_i \right)$ where $x_i$ is an observation of the variable $X$ and $y_i$ is an observation of the variable $Y$.

## Matplotlib and pyplot

In this lesson, we will introduce a type of plot that is commonly used to visually represent paired samples. We will use the popular Matplotlib package to generate our plots. Matplotlib is a Python package used for plotting and generating data visualizations. This package provides two common interfaces, but we will focus on the pyplot interface as it tends to be easier to use.

In the code block below, we import pyplot using the alias `plt`. All of the data visualization tools we use in this course will be accessible through the `plt` entry point.

```
import matplotlib.pyplot as plt
```

## Scatter plots

A **scatter plot** is a type of plot that is commonly used to represent paired observations of numerical variables. When creating a scatter plot, one of the two variables in a paired sample is associated with the horizontal axis, and the other variable is associated with the vertical axis. Then, each observation $\left( x_i, y_i \right)$ in the sample is represented as a point with coordinates given by the values of the variables.

Scatter plots can be created with pyplot using the `plt.scatter()` function. This function requires two inputs, both of which are expected to be 1D structures such as lists or 1D arrays. These inputs represent the observations of each of the two variables. In the code block below, we create two lists to represent samples of variables $X$ and $Y$ and then create a simple scatter plot.

```
x = [132, 87, 89, 78, 117, 53, 134, 84, 106, 95, 129, 58, 93, 92, 122, 78, 96, 82, 100, 111]
y = [111, 98, 97, 84, 119, 52, 122, 74, 99, 98, 113, 59, 84, 82, 107, 79, 82, 84, 113, 113]

plt.figure(figsize=[6,3])    # Set the figure size
plt.scatter(x, y)            # Create the scatter plot
plt.show()                   # Display the figure
```

The output of this code is shown below.

<img src="/images/image-ea49657d-cbc8-4d34-a40f-32456e3be45b.png" alt="Basic scatter plot of about 20 points showing a positive relationship: x from about 53 to 134 and y from about 52 to 122." width="521">

:::image Image description: Basic scatter plot
A scatter plot with no title or axis labels. Points rise from lower left to upper right: two points near (55, 55), a cluster between x = 78 and 96 with y from about 74 to 98, and points between x = 100 and 134 with y from about 99 to 122.
:::

The call to `plt.figure()` in the example above is used to set the size of the figure. This is optional, but is useful for setting the size and aspect ratio of your figures. The function `plt.show()` issues a command to display the figure. In some programming environments, this is absolutely necessary to display the figure. In Google Colab and Jupyter Notebook, the figure will (usually) be displayed even without making an explicit call to `plt.show()`, but if you don't include `plt.show()`, then you will likely get additional, undesired, and unsightly output. You should ALWAYS use `plt.show()` to display your figure.

## Optional visual elements

Pyplot offers several functions and optional parameters that can be used to adjust the way in which your figure is displayed. We will demonstrate the usage of several of these features in the code block below. In particular, we will explore the following tools:

- The `color` parameter for `plt.scatter()` can be used to set the fill color for the points. A list of colors recognized by pyplot can be found here: [Named Colors](https://matplotlib.org/stable/gallery/color/named_colors.html).
- The `edgecolor` parameter for `plt.scatter()` can be used to add a border to the points.
- The `zorder` parameter for `plt.scatter()` is used to order how plot elements are stacked. If using a grid (see below), this must be set to 2 or higher for the points to appear above the grid.
- The `s` parameter for `plt.scatter()` can be used to set the size of the points.
- The `alpha` parameter for `plt.scatter()` can be used to set the level of opacity for the points. This can be useful when your scatter plot contains many overlapping points.
- The `plt.grid()` function is used to add a grid to the figure.
- The `plt.xlabel()` and `plt.ylabel()` functions are used to add labels to the axes.
- The `plt.title()` function is used to add a title to the figure.
- The `plt.xlim()` and `plt.ylim()` functions are used to set the limits for the axes.

```
plt.figure(figsize=[6,3])            # Set the figure size
plt.scatter(
    x, y,                            # Provide the samples
    color = 'orchid',                # Set fill color for points
    edgecolor = 'black',             # Add black border
    zorder = 2,                      # Place points above grid
    s = 60,                          # Set point size
    alpha = 0.8                      # Set opacity level
)
plt.grid()                           # Display a grid
plt.xlabel('X Variable')             # Label the x-axis
plt.ylabel('Y Variable')             # Label the y-axis
plt.title('Scatter Plot Example')    # Add a title
plt.xlim([0,175])                    # Set limits for x-axis
plt.ylim([0,150])                    # Set limits for y-axis
plt.show()                           # Display the figure
```

The output of this code is shown below.

<img src="/images/image-d933851b-3817-43cb-a6ff-19d0ef9cd573.png" alt="The same scatter plot with a title, axis labels, grid lines, and axes starting at 0." width="540">

:::image Image description: Scatter plot with optional visual elements
The same data as the basic scatter plot, now titled "Scatter Plot Example," with X Variable on the x-axis (0 to 170) and Y Variable on the y-axis (0 to 140). The points are pink circles with black outlines, and grid lines are added.
:::
