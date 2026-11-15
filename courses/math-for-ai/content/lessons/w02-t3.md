# Week 2: NumPy arrays

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce the popular NumPy package, as well as its most prominent feature, the NumPy array. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [NumPy Arrays](https://colab.research.google.com/drive/1FSz6z0z4QUXtJXgTwqAlhdaIQzY5D1as?usp=sharing).

## Introduction to NumPy

NumPy (which is short for “Numerical Python”) is a package for performing scientific computing in Python. It provides tools for performing numerical calculations involving collections of values, such as the vector and matrix objects encountered in mathematics. NumPy is an essential tool for analyzing and manipulating data in Python, and nearly every prominent Python package used for data science, machine learning, and artificial intelligence is either built on top of NumPy or intended to work with it.

NumPy is not part of the Python standard library, but it is pre-installed on the virtual machines that run Google Colab notebooks. By convention, NumPy is typically imported under the alias `np`, as demonstrated below.

```
import numpy as np
```

## NumPy arrays

The primary tool provided by NumPy is the array data type. An **array** is essentially a collection of values arranged in some structured, grid-like manner. Every NumPy array has a **dimension** associated with it, and that describes the general "shape" of the array. The dimension for a NumPy array can be any positive integer.

- **One-dimensional arrays** are similar to Python lists and are often used to store sequences of values or to represent vectors.
- **Two-dimensional arrays** are used to represent tabular data structures with rows and columns, such as a matrix.
- **Three-dimensional arrays** are used to represent "cubes" of values. One common application of three-dimensional arrays is storing pixel values for images. The pixels in an image are arranged in a two-dimensional grid, but each pixel has three values associated with it, which correspond to the red, green, and blue color channels.

Applications involving four, five, or higher-dimensional arrays are also not uncommon in machine learning and artificial intelligence. We will discuss one and two-dimensional arrays in this course, and will start with one-dimensional arrays.

## One-dimensional arrays

In many ways, a one-dimensional NumPy array is similar to a standard Python list. Both are linearly ordered collections of values. In fact, we will often create NumPy arrays from Python lists using the `np.array()` function. This is demonstrated in the code block below, in which we create an array containing five integers.

```
my_array = np.array([4, 1, 7, 3, 5])   # Create an array
print(type(my_array))                  # Prints <class   'numpy.ndarray'>
print(my_array)                        # Print the array
```

Values stored in an array can be accessed using **indexing** in exactly the same way as you would access an element of a list. This is demonstrated below.

```
print(my_array[2])                     # Prints 7
```

Arrays have a `shape` attribute that can be used to determine the size and number of dimensions of the array. We will use the array created above to demonstrate the use of this attribute.

```
print(my_array.shape)                  # Prints (5,)
```

The output of the previous cell would be `(5,)`. The shape of a one-dimensional array will always be in the form `(n,)`, with `n` being equal to the number of elements in the array.

## Vectorized operations

Although lists and arrays share some similarities, there are many important differences between the two data types. The most important difference between arrays and lists is that certain types of operations can be performed more easily on arrays than on lists. NumPy arrays are designed to easily support **vectorized** or **elementwise** operations.

As an example, consider the problem of multiplying each element of a list by 5 to create a new list. Perhaps the most obvious way to perform this operation would be to use a loop, as shown in the next cell.

```
my_list = [4, 1, 7, 3, 5]              # Create a list
new_list = []                          # Create an empty list
for item in my_list:                   # Loop over all items in the list
    new_list.append(5 * item)          # Multiply item by 5 and append to new list
print(new_list)                        # Print the new list
```

This task can be accomplished more easily, and without the use of a loop, when using arrays. You could simply multiply the array by 5 using the standard multiplication operator `*`. The product will be calculated in a vectorized or elementwise manner, meaning that the operation is performed separately for each element of the array. This is demonstrated in the code block below. We will use the array `my_array = np.array([4, 1, 7, 3, 5])` that we created previously.

```
scaled_array = 5 * my_array            # Multiply array by 5
print(scaled_array)                    # Prints [20  5 35 15 25]
```

Multiplication is not the only operation we can vectorize using NumPy arrays. All of the standard arithmetic operations can be vectorized. In the code block below, we demonstrate shifting the values stored in an array by adding 20 to each element.

```
shifted_array = my_array + 20          # Add 20 to the array
print(shifted_array)                   # Prints [24 21 27 23 25]
```

In the next cell, we demonstrate squaring all items stored within an array.

```
squared_array = my_array ** 2          # Square elements of the array
print(squared_array)                   # Prints [16  1 49  9 25]
```

## Operations between two arrays

The examples above involve performing operations between single values and arrays. We can also add, subtract, multiply, and divide NumPy arrays, as long as they are of the same length. We demonstrate this below.

```
x1 = np.array([1,4,3])            # Create array x1
x2 = np.array([5,8,2])            # Create array x2

print('Sum:        ', x1 + x2)    # Prints [ 6 12  5]
print('Difference: ', x1 - x2)    # Prints [-4 -4  1]
print('Product:    ', x1 * x2)    # Prints [ 5 32  6]
print('Ratio:      ', x1 / x2)    # Prints [0.2 0.5 1.5]
```

If we attempt to perform an arithmetic operation on two arrays of different sizes, this will produce an error (except in certain, very specific cases that we are not yet ready to discuss).

```
y1 = np.array([2, 1, 4])          # Create array y1
y2 = np.array([3, 9, 2, 7])       # Create array y2
print(y1 + y2)                    # This results in an error
```

The code block above will result in the following error, which communicates that the two arrays we are trying to add have incompatible shapes.

```
ValueError: operands could not be broadcast together with shapes (3,) (4,)
```

## Vectorized functions

NumPy provides several functions that can be applied to arrays in an elementwise fashion. We provide three examples of such functions below.

- `np.exp()` - This function raises the mathematical constant $e$ to each element of the array.
- `np.log()` - This function applies the natural logarithm to each element of the array.
- `np.round()` - This function rounds each element of the array to a specified number of decimal places.

Note that the functions `np.exp()` and `np.log()` refer to the natural exponential and natural logarithm functions. You are likely more familiar with seeing the natural logarithm denoted by $\ln\left(\right)$ in previous math courses, and are probably used to seeing $\log\left(\right)$ used to denote the common (or base 10) logarithm. The meaning of $\log\left(\right)$ varies across fields, and in data science and artificial intelligence, it is typically used to denote the natural logarithm.

We demonstrate the use of each of these functions in the code block below.

```
float_array = [3.45143, 1.23498, 6.57618, 2.47508, 7.50698]

print('Example of np.exp:  ', np.exp(float_array))
print('Example of np.log:  ', np.log(float_array))
print('Example of np.round:', np.round(float_array, 2))
print('Example of np.round:', np.round(float_array, 0))
```

The output of the previous code block is shown below.

```
Example of np.exp:   [  31.54547009    3.43830975  717.79211952   11.88265769 1820.70669744]
Example of np.log:   [1.23878864 0.21105478 1.88345403 0.90627272 2.01583325]
Example of np.round: [3.45 1.23 6.58 2.48 7.51]
Example of np.round: [3. 1. 7. 2. 8.]
```
