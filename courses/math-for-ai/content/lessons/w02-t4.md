# Week 2: Array aggregations

**MATH 309/509 Math for AI** · Python

In this lesson, we will discuss aggregation functions that are used to reduce the values in an array down to a single summary value. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Array Aggregations](https://colab.research.google.com/drive/1Emwr-9WvhSudXXFnrAHhBpnNMmFkNkrS?usp=sharing).

## Aggregation functions

In the previous lesson, we discussed elementwise functions that can be applied to NumPy arrays to generate new arrays with the same shape. NumPy also provides several **aggregation functions** that each reduce NumPy arrays down to a single value that is meant to summarize or describe some characteristic of the array. We will discuss several of these aggregation functions in this lesson. For the examples that follow, we will use the array defined below.

```
my_array = np.array(
    [3.2, 4.8, 8.7, 8.7, 6.4, 5.3,
     1.8, 4.8, 1.8, 5.6, 3.1, 3.2]
)
```

## Sums and products

NumPy provides `np.sum()` and `np.prod()` functions that can be used to calculate the sum and product (respectively) of an array. These functions are demonstrated below.

```
array_sum = np.sum(my_array)       # Sum the array elements
array_prod = np.prod(my_array)     # Multiply the array elements
print(array_sum)                   # Prints 57.4
print(array_prod)                  # Prints 34069951.18055698
```

We could have used the `sum()` function from base Python to sum the elements of the array. However, the `np.sum()` function is optimized for use with arrays and will typically result in quicker performance than `sum()` when applied to an array.

## Minimum and maximum

NumPy provides `np.min()` and `np.max()` functions that can be used to determine the smallest and largest elements in an array. These functions are demonstrated below.

```
array_min = np.min(my_array)       # Determine the minimum
array_max = np.max(my_array)       # Determine the maximum
print(array_min)                   # Prints 1.8
print(array_max)                   # Prints 8.7
```

As was the case with `sum()`, Python provides `min()` and `max()` functions that can be applied to either lists or arrays. However, the `np.min()` and `np.max()` functions are optimized for use with NumPy arrays.

## ArgMin and ArgMax

The `np.min()` and `np.max()` functions return the smallest and largest values stored in an array. NumPy also provides `np.argmin()` and `np.argmax()` functions to return the index at which the minimum and the maximum occur. We will demonstrate these functions now.

```
min_idx = np.argmin(my_array)      # Find the index of the min
max_idx = np.argmax(my_array)      # Find the index of the max
print(min_idx)                     # Prints 6
print(max_idx)                     # Prints 2
```

Note that our array contains multiple instances of the minimum value 1.8 and multiple instances of the maximum value 8.7. When this occurs, the `np.argmin()` and `np.argmax()` functions will return the index of the earliest occurrence of the minimum or maximum values.

## Example: Choosing a predicted class

The `np.argmax()` function has an important use in machine learning. A classification model usually does not output a class directly. It outputs one probability for each possible class, and the predicted class is the one with the largest probability. Finding it is exactly the task `np.argmax()` performs.

Suppose that a model that sorts images into three classes (class 0, class 1, and class 2) produces the probabilities below for one image.

```
probs = np.array([0.1, 0.7, 0.2])     # Probabilities for classes 0, 1, and 2
print(np.argmax(probs))               # Prints 1
```

The largest probability is at index 1, so the model predicts class 1. A large language model makes its predictions in the same way, except that it has one probability for each of roughly 100,000 possible pieces of text.

## Mean and standard deviation

NumPy also provides us with several functions for calculating summary statistics from arrays. The two most important of these are `np.mean()` and `np.std()`. The `np.mean()` function is used to calculate the mean, or average, value of the elements in an array. The `np.std()` function is used to calculate the standard deviation of the elements in an array. The standard deviation of a collection of values is a measure of how spread out or dispersed the values are. If you are unfamiliar with the concept, don't worry. We will discuss it in more detail in Week 6.

```
array_mean = np.mean(my_array)     # Find the mean
array_stdev = np.std(my_array)     # Find the standard deviation
print(array_mean)                  # Prints 4.783333333333333
print(array_stdev)                 # Prints 2.233768614297869
```
