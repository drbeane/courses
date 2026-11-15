# Week 2: Two-dimensional arrays

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce two-dimensional arrays. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Two-Dimensional Arrays](https://colab.research.google.com/drive/16pwPcbDxjivRFH_6gKg9HmKBka2SywUy?usp=sharing).

## Creating two-dimensional arrays

A **two-dimensional array** is a tabular data structure with a grid of values arranged into rows and columns. We can create a two-dimensional array with the function `np.array()` by passing it a **list of lists**, which is a list whose elements are themselves lists. The sublists will represent the rows of the array and must all contain the same number of elements. This is demonstrated below.

```
X = np.array(
    [[21, 42, 37, 49, 73],
     [57, 61, 18, 39, 41],
     [96, 17, 82, 23, 57]]
)
print(X)
```

The output of the code block above is as shown below.

```
[[21 42 37 49 73]
 [57 61 18 39 41]
 [96 17 82 23 57]]
```

We split the definition of the array `X` in the code block above across multiple lines to make it easier to distinguish between the different rows of the array. However, we could have written the definition on a single line as shown below.

```
X = np.array([[21, 42, 37, 49, 73], [57, 61, 18, 39, 41], [96, 17, 82, 23, 57]])
```

The `shape` attribute for a two-dimensional array will be a tuple with 2 elements. The first element will be equal to the number of rows in the array, and the second element will be equal to the number of columns.

```
print(X.shape)         # Prints (3, 5)
```

## Indexing and slicing

When selecting an element out of a two-dimensional array, we must provide two indices separated by a comma. The first index will refer to the row of the element that we wish to access, and the second index will refer to the column. As is typical for lists and arrays, the first row and first column of a two-dimensional array will each have an index of 0. We demonstrate how to use indexing to select elements from an array in the following example.

```
print(X[1, 2])         # Prints 18
print(X[2, 4])         # Prints 57
```

We can also use slicing on either index to select multiple rows or columns at once. If we select multiple rows and multiple columns, the result will be another two-dimensional array.

```
S = X[:2, :3]          # Select a sub-array
print(S.shape)         # Prints (2, 3)
print(S)               # Prints the upper-left 2x3 sub-array
```

## Selecting rows and columns

We can select individual rows and columns of a two-dimensional array by specifying the index of either the row or the column that we wish to select and use the slicing operator to slice out all elements in the selected row or column. In the example below, we select out the second row of our array `X` (which is the row at index 1).

```
row1 = X[1, :]         # Select row at index 1
print(row1)            # Prints [57 61 18 39 41]
print(row1.shape)      # Prints (5,)
```

We will now provide an example of selecting a column from an array. We will select the fourth column of `X` (which is at index 3).

```
col3 = X[:, 3]         # Select column at index 3
print(col3)            # Prints [49 39 23]
print(col3.shape)      # Prints (3,)
```

Notice that in both of the previous two examples, the selected row or column turns out to be a one-dimensional array. We can see this from the fact that the shape of each array is a tuple containing only one value. In some cases, it might be useful or even necessary to have a row or column represented by a two-dimensional array with one of its dimensions equal to 1. We can accomplish this by placing the index for the desired row or column in a set of square brackets, as is demonstrated below. This will not be required for the applications that we consider in this course, however.

```
row1_2d = X[[1], :]    # Select row at index 1
col3_2d = X[:, [3]]    # Select column at index 3
print(row1_2d.shape)   # Prints (1, 5)
print(col3_2d.shape)   # Prints (3, 1)
```

## Two-dimensional array operations

We can perform arithmetic operations on pairs of two-dimensional arrays just as we could for one-dimensional arrays. Performing such an operation on an array is allowed in cases where the two arrays are of the same size and in certain other specific situations. We will start by considering examples in which the arrays are of the same size. In this case, the operations will all be performed elementwise, and the resulting array will have the same dimensions as the two original arrays. We will use the two arrays below for our examples.

```
x1 = np.array([[5, 0, 8], [5, 6, 3]])
x2 = np.array([[2, 5, 4], [7, 8, 4]])

print('Shape of x1:', x1.shape)
print('Shape of x2:', x2.shape)
```

Both of these arrays have a shape of `(2, 3)`, so we can perform arithmetic operations on them. As mentioned above, the operations are performed elementwise, and our resulting arrays will also have shape `(2, 3)`. This is demonstrated below.

```
print(x1 + x2)         # Prints [[ 7  5 12] [12 14  7]]
print(x1 - x2)         # Prints [[ 3 -5  4] [-2 -2 -1]]
print(x1 * x2)         # Prints [[10  0 32] [35 48 12]]
```

As mentioned, there are some special cases where we are allowed to perform arithmetic operations on two arrays of different sizes. We will discuss one such example now. We can perform an arithmetic operation on a one-dimensional array and a two-dimensional array if the number of elements in the 1D array is equal to the number of columns in the 2D array. In this case, the operation will be performed between the 1D array and each row of the 2D array, and the result will have the same shape as the 2D array. The process of applying an arithmetic operation between a 1D and a 2D array (with appropriate sizes) is known as **broadcasting**.

We provide an example of broadcasting below. In this case, we are adding a one-dimensional array to each row of the array `x1`.

```
y1 = np.array([10, 20, 30])   # Define a (3,) array
print(x1 + y1)                # Prints [[15 20 38] [15 26 33]]
```

## Example: A grayscale image

A black-and-white photograph is stored on a computer as a two-dimensional array. Each entry of the array is one pixel, and its value gives the brightness of that pixel, from 0 (black) to 255 (white). This means that the array operations from this week can be used to edit images. The array below represents a tiny image with 3 rows and 4 columns of pixels.

```
img = np.array(
    [[10,  40, 200, 220],
     [20, 180, 240,  60],
     [30, 210,  90,  50]]
)
```

Adding a number to the array brightens every pixel. Since brightness cannot exceed 255, we use `np.where()` to replace any value above 255 with 255.

```
brighter = img + 30
brighter = np.where(brighter > 255, 255, brighter)
print(brighter)
```

The output is shown below. Only one pixel, the one with an original value of 240, reached the limit.

```
[[ 40  70 230 250]
 [ 50 210 255  90]
 [ 60 240 120  80]]
```

We can also convert the image to pure black and white by comparing each pixel with a cutoff. This operation is called **thresholding**, and it is a common first step when a program needs to find shapes or text in an image.

```
mask = np.where(img > 128, 1, 0)
print(mask)
print(np.mean(img > 128))             # Prints 0.4166..., the share of bright pixels
```

```
[[0 0 1 1]
 [0 1 1 0]
 [0 1 0 0]]
```

A color image works the same way, with three brightness values (red, green, and blue) for each pixel. An AI model that works with images receives them as arrays like these.

## Example: Standardizing features

In a machine learning problem, each column of a feature array holds one feature, and the features are often measured on very different scales. Many training methods work better when every feature is first rescaled to have a mean of 0 and a standard deviation of 1. This is called **standardizing** the features, and broadcasting lets us do it without a loop.

In the array below, each row is a person. The first column is height in centimeters and the second is years of experience.

```
X = np.array([[150.0, 3.0], [170.0, 5.0], [160.0, 4.0], [180.0, 8.0]])
means = X.mean(axis=0)                # Mean of each column: [165.   5.]
stds = X.std(axis=0, ddof=1)          # Standard deviation of each column: [12.9099  2.1602]
Z = (X - means) / stds
print(Z.round(4))
```

Setting `axis=0` asks NumPy to calculate one value for each column. The arrays `means` and `stds` each have 2 elements, and `X` has 2 columns, so the subtraction and the division are both broadcast across the rows of `X`. The output is shown below. We will discuss the standard deviation, and the meaning of `ddof=1`, in Week 6.

```
[[-1.1619 -0.9258]
 [ 0.3873  0.    ]
 [-0.3873 -0.4629]
 [ 1.1619  1.3887]]
```

## Arrays with more than two dimensions

NumPy arrays can have any number of dimensions. An array with three or more dimensions is often called a **tensor**, particularly in deep learning. The `shape` attribute works as before and lists the size of each dimension in order.

```
T = np.zeros(shape=(2, 3, 4))
print(T.shape)                        # Prints (2, 3, 4)
print(T.size)                         # Prints 24, the total number of entries
```

We will work only with one- and two-dimensional arrays in this course, but it is useful to be able to read a shape. The data that flows through a large language model is typically a three-dimensional array. Its shape lists the number of pieces of text being processed at once, the number of tokens in each one, and the number of values used to represent each token.
