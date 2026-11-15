# Week 2: The math package

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce the `math` package, which is used to extend the library of mathematical functions in Python. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [The Math Package](https://colab.research.google.com/drive/1Ke8jJ8WWsh70WkAaYinzbtTm3rId6tQB?usp=sharing).

## The math package

Base Python provides several tools for performing mathematical calculations. These include arithmetic operations as well as a few mathematical functions, such as `abs()`, which can be used to calculate the absolute value of a number. Several more advanced mathematical functions are included in the `math` package. This package can be imported using the code shown below.

```
import math
```

We will now briefly discuss a few of the tools found in the `math` package. A more comprehensive list of tools can be found in the Python documentation: [The Math Package](https://docs.python.org/3/library/math.html).

## Constants

The `math` package contains a few variables intended to represent important mathematical constants. These include the constants $\pi$ and $e$. We demonstrate how to access each of these variables below.

```
print(math.pi)              # Prints 3.141592653589793
print(math.e)               # Prints 2.718281828459045
```

## Exponentials and logarithms

The `math` package also contains functions for calculating the natural exponential and natural logarithm functions. These are named `math.exp()` and `math.log()`. These functions are demonstrated below.

```
print(math.exp(2))          # Prints 7.38905609893065
print(math.log(10))         # Prints 2.302585092994046
```

Note that the functions `math.exp()` and `math.log()` refer to the natural exponential and natural logarithm functions. You are likely more familiar with seeing the natural logarithm denoted by $\ln\left(\right)$ in previous math courses, and are probably used to seeing $\log\left(\right)$ used to denote the common (or base 10) logarithm. The meaning of $\log\left(\right)$ varies across fields, and in data science and artificial intelligence, it is typically used to denote the natural logarithm. Python adopts this convention.

## Floor and ceiling

Base Python comes with a `round()` function that can be used to round floating point values to the nearest integer. However, there are occasions when we wish to round a number to the largest integer that is less than or equal to it or to the smallest integer that is greater than or equal to it, regardless of how near it is to either integer. These operations are referred to as the **floor** and **ceiling** operations, respectively. The `math` package provides functions to represent these operations.

```
print(math.floor(7.4))      # Prints 7
print(math.ceil(7.4))       # Prints 8
```

## Factorials

The `math` package also provides a function named `math.factorial()` for calculating factorials. We demonstrate this function below.

```
print(math.factorial(4))    # Prints 24
print(math.factorial(10))   # Prints 3628800
```
