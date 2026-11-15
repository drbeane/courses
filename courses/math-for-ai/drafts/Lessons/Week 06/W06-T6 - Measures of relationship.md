# Week 6: Measures of relationship

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss the multivariate measures of relationship known as covariance and correlation. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Measures of Relationship](https://colab.research.google.com/drive/1IrS0XZaFrGJyxnFzYI5fcl_f1cMrOAym?usp=sharing).

## Measures of relationship

The descriptive statistics that we have introduced so far this week have all been **univariate** measures. This means that they are used to describe some aspect of a single isolated variable. We will now consider **multivariate** measures which are calculated from random samples drawn from two or more random variables. In particular, we will introduce **measures of relationship**, which are used to describe how closely the values of two random variables are tied to one another. The two measures of relationship that we will discuss, **covariance** and **correlation**, are very closely related and are, in fact, two ways of expressing the same concept.

## Linear relationships

Both of the measures of relationship that we will discuss in this lesson are measures of **linear relationship** that measure the degree to which two variables move linearly with respect to each other. To understand the concept of linearly related variables, it can be helpful to create a scatter plot from observations sampled from the two variables. If the points in the scatter plot are tightly clustered around a line with a significantly positive or negative slope, then the scatter plot suggests that the variables have a **strong linear relationship**. If the slope is positive, then we can further describe the relationship as being **positive**. Similarly, if the slope of the line is negative, then we can describe the relationship as **negative**. If the points are loosely scattered around the line, then the scatter plot provides evidence of a **weak linear relationship**. If the points do not seem to be clustered along a line at all, then we might say that there is no evidence of a linear relationship.

<img src="/images/image-c6235c07-d6c6-42b1-83f5-5c27fea9e2e6.png" alt="Three scatter plots with fitted lines: strong positive, weak, and strong negative linear relationships." width="1049">

:::image Image description: Types of linear relationships
- **Strong Positive Linear Relationship:** points rise from lower left to upper right, tightly clustered around an upward-sloping line (y from about 12 to 22 as x goes from 7 to 13).
- **Weak Linear Relationship:** points are scattered widely with no clear trend, and the fitted line is nearly flat at about y = −4.
- **Strong Negative Linear Relationship:** points fall from upper left to lower right, tightly clustered around a downward-sloping line (y from about −16 to −28).
:::

## Covariance

**Covariance** is a measure of the extent to which two variables are linearly related. Let $X$ and $Y$ be random variables. Consider a sample of $n$ paired observations of $X$ and $Y$ of the following form: $\left( x_1, y_1 \right)$, $\left( x_2, y_2 \right)$, ..., $\left( x_n, y_n \right)$. The covariance of the sample, which we will denote by $s_{xy}$, is defined as shown below. The values $\bar x$ and $\bar y$ in the formula refer to the sample mean for $X$ and $Y$ respectively.

$$s_{xy} = \frac{1}{n-1} \sum_{i=1}^{n} \left(x_i - \bar x \right)\left(y_i - \bar y \right)$$

The covariance measures the linear relationship between the two variables. If the paired observations display a strong positive linear relationship, then the covariance will be a relatively large positive number. If the paired observations display a strong negative linear relationship, then the covariance will be a relatively large negative number. If the paired observations display a weak linear relationship or no linear relationship, then the covariance will be relatively close to zero.

## Covariance matrix

Covariance is a **bivariate** statistic, meaning that it is calculated for exactly two variables at a time. When working with a problem that involves many variables, as is common in data science and machine learning, we will often wish to calculate the covariances between all pairs of variables in the problem. This collection of **pairwise covariances** is typically represented in the form of a matrix known as a **covariance matrix**. The covariance matrix for a collection of variables is often denoted by the letter $C$. The details of how a covariance matrix is constructed are provided below.

- A covariance matrix $C$ is always a square matrix.
- The number of rows and columns in $C$ are each equal to the number of variables being considered.
- Each variable is associated with a row and a column.
- A row and column with the same index will be associated with the same variable.
- The entry in the row $i$ and column $j$ will be equal to the covariance of the two variables associated with that row and column.
- The values along the diagonal from the upper left to the lower right will each provide the covariance of a single variable with itself. As it turns out, this is always equal to the variance of that variable.

For example, suppose that we are working with three variables, $X_1$, $X_2$, and $X_3$. Suppose that we have collected $n$ observations and have measured each random variable for each observation. We will denote the variances of the observations for each random variable using $s_1^2$, $s_2^2$, and $s_3^2$. Denote the covariances between pairs of distinct variables as $s_{1,2}$, $s_{1,3}$, and $s_{2,3}$. The structure of the covariance matrix will be as shown below.

$$C = \begin{bmatrix} s_1^2 & s_{1,2} & s_{1,3}\\ s_{1,2} & s_2^2 & s_{2,3} \\ s_{1,3} & s_{2,3} & s_3^2 \\ \end{bmatrix}$$

Note that covariance is symmetric in the sense that the covariance between two variables does not depend on the order in which the variables are stated. As a result, the covariance for each pair of distinct variables shows up in the covariance matrix twice. For example, the covariance of $X_1$ and $X_3$ appears in the 1st row and 3rd column of the matrix, as well as in the 3rd row and the 1st column.

## Using NumPy to find covariance matrices

The NumPy function `np.cov()` can be used to calculate covariance matrices. The input to the function must be a two-dimensional structure containing the information for the observations in our sample. Each row in the structure is expected to represent a single variable, and each column is expected to represent a single observation. **Note that this interpretation of rows and columns is the opposite of how we usually think about tabular data.** When working with tabular data, we generally use columns to represent variables and rows to represent observations. The `np.cov()` function expects to receive the transpose of that.

If the observations for your variables are stored in lists or 1D arrays, then you can store them in a list and pass this directly to `np.cov()`. An example of this is shown below. In this example, we have 10 observations for each of 3 variables.

```
# Define feature lists
x1 = [77, 18, 31, 80, 57, 77, 95, 75, 45, 53]
x2 = [610, 581, 952, 421, 233, 951, 107, 901, 922, 519]
x3 = [90, 4, 47, 91, 3, 78, 84, 97, 61, 7]

C = np.cov([x1, x2, x3])     # Find Covariance Matrix
print(C.round(2))
```

The output of the cell above is shown below.

```
[[  589.96 -2545.84   679.71]
 [-2545.84 94923.34  2571.62]
 [  679.71  2571.62  1483.29]]
```

The covariance for each pair of samples can be accessed in this matrix by using the appropriate indices. For example, the covariance between samples `x1` and `x2` can be accessed using either `C[0,1]` or `C[1,0]`. The covariance between samples `x1` and `x3` can be accessed using either `C[0,2]` or `C[2,0]`. The variances of each sample are also provided in the entries along the diagonal. The covariance between each pair of samples is listed below:

- The covariance of `x1` and `x2` is `-2545.84`.
- The covariance of `x1` and `x3` is `679.71`.
- The covariance of `x2` and `x3` is `2571.62`.

When working on a machine learning problem, it is typical to have feature observations stored in a 2D array, with each column representing a variable and each row representing an observation. We can pass such a structure to `np.cov()`, but as mentioned above, it will be necessary to take its transpose. This is demonstrated in the code block below, which produces exactly the same output as the one above.

```
# Define feature array
X = np.array(
    [[ 77, 610,  90],
     [ 18, 581,   4],
     [ 31, 952,  47],
     [ 80, 421,  91],
     [ 57, 233,   3],
     [ 77, 951,  78],
     [ 95, 107,  84],
     [ 75, 901,  97],
     [ 45, 922,  61],
     [ 53, 519,   7]]
)

C = np.cov(X.T)     # Find Covariance Matrix
print(C.round(2))
```

## Interpreting covariance

We have mentioned that a large positive covariance indicates a strong positive linear relationship, and a large negative covariance indicates a strong negative linear relationship. But aside from that, it can be difficult to interpret the meaning of covariance values. This is because covariance is not a unitless quantity, and is measured in units that are equal to the product of the units of the two variables being considered. As a result, covariance is affected by the units in which the variables are measured and the scale of the variables being considered. Simply changing the units used for one or both of the variables can have a huge impact on the covariance, even if the underlying relationship between the variables is unchanged. We will now consider an alternate measure of relationship that does not suffer from this issue.

## Correlation

**Correlation** is a unitless measure of relationship. The correlation between two variables $X$ and $Y$ in a paired sample is denoted by $r_{xy}$ and is calculated using the formula below. Note that $s_{xy}$ represents the covariance between the variables and $s_{x}$ and $s_{y}$ denote the standard deviations.

$$r_{xy} = \frac{s_{xy}}{s_x \cdot s_y}$$

The correlation is easier to interpret than covariance. Correlation is a unitless quantity that is always between -1 and 1.

- If $r_{xy}$ is close to 1, then the sample suggests that $X$ and $Y$ have a strong positive linear relationship.
- If $r_{xy}$ is close to -1, then the sample suggests that $X$ and $Y$ have a strong negative linear relationship.
- If $r_{xy}$ is close to 0, then the sample suggests that $X$ and $Y$ have a weak linear relationship, or a nonlinear relationship.

When working with multiple variables, we can construct a correlation matrix $R$ to store all of the correlations. The structure of the correlation matrix is identical to that of the covariance matrix, but it contains correlations instead of covariances.

## Using NumPy to find correlation matrices

The NumPy function `np.corrcoef()` can be used to calculate correlation matrices. The function is applied in the same way as `np.cov()`, with the input expected to be a 2D structure in which rows represent variables. The code block below provides an example of this using the lists `x1`, `x2`, and `x3` defined above.

```
R = np.corrcoef([x1, x2, x3])  # Find correlations
print(R.round(4))
```

The output of the cell above is as follows:

```
[[ 1.     -0.3402  0.7266]
 [-0.3402  1.      0.2167]
 [ 0.7266  0.2167  1.    ]]
```

We can see from this output that:

- The correlation between `x1` and `x2` is `-0.3402`.
- The correlation between `x1` and `x3` is `0.7266`.
- The correlation between `x2` and `x3` is `0.2167`.

Notice that the pair of variables with the largest absolute covariance was `x2` and `x3`, but this is also the pair with a correlation closest to 0. The covariances that involved `x2` were large because the values of the variables in that list were larger than the others. On a similar note, `x1` and `x3` had the smallest absolute covariance, but the correlations tell us that these are actually the two most closely related variables. This hopefully provides some insight as to why we prefer to use correlation over covariance when interpreting linear relationships.

We will conclude this lesson with an example showing how to use `np.corrcoef()` when the variables are stored in a 2D array in which columns represent variables.

```
R = np.corrcoef(X.T)  # Find correlations
print(R.round(4))
```

## Example: Screening features by correlation

Correlation gives a quick first look at which features are likely to be useful for predicting a target. Suppose that the three variables from the example above are features, and that we also have the target values below for the same 10 observations.

```
y = np.array([212, 61, 118, 219, 109, 208, 239, 221, 143, 96])
M = np.vstack([y, X.T])               # Place y above the three feature rows
R = np.corrcoef(M)                    # Correlations between all four variables
print(R[0, 1:].round(4))              # Prints [ 0.912  -0.0494  0.9402]
```

The function `np.vstack()` stacks arrays on top of one another, which gives a 2D structure with four rows: the target, followed by the three features. The first row of the correlation matrix then holds the correlation of the target with each variable, and `R[0, 1:]` skips its correlation with itself.

The first and third features are strongly correlated with the target, and the second is almost uncorrelated with it. If we wanted a simpler model, the second feature would be the first candidate to drop. This is a simple form of feature selection.

Two cautions apply. Correlation measures only linear relationships, so a feature with a correlation near 0 can still be useful to a model that is not linear. And two features that are both strongly correlated with the target may carry the same information, in which case keeping both adds little.
