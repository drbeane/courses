# Week 2: Array comparisons

**MATH 309/509 Math for AI** · Python

In this lesson, we will discuss using arrays to perform elementwise comparisons. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Array Comparisons](https://colab.research.google.com/drive/1OOiAb4Rmd3WnQn0tsMyjhktiJG_ir-Ht?usp=sharing).

## Array comparisons

We can use comparison operations such as `<` and `==` to perform elementwise comparisons on NumPy arrays. When we apply such a comparison to an array, the expression will be evaluated as an array of **Boolean** (True/False) values with the same length as the original array. We demonstrate this in the code block below using the `<` comparison.

```
p = np.array([0.3, 0.7, 0.2, 0.6, 0.5])       # Create an array p
print(p < 0.5)                                # Prints [ True False  True False False]
```

We can use the `==` operator to check for equality between the elements in an array and some other value. We provide an example of this below.

```
group = np.array(['B', 'B', 'A', 'A', 'B'])   # Create an array
print(group == 'A')                           # Prints [False False  True  True False]
```

We can use array comparisons to determine the number or proportion of elements in an array that satisfy certain criteria. To do so, we need to understand how Boolean values are treated arithmetically.

## Arithmetic of Boolean values

Python (and most other programming languages) can perform arithmetic with Boolean values. When encountering a Boolean value in an arithmetic expression, Python treats `True` values as being equal to 1 and `False` values as being equal to 0. For example, the expression `True + 6` would evaluate to 7, and the expression `6 * False` would evaluate to 0.

This association between Boolean values and the integers 0 and 1 might seem arbitrary, but it enables a lot of useful calculations. We will discuss some examples of this below.

## Counting true values

If we sum a Boolean array, we will obtain a count of the number of `True` values in the array. This follows immediately from the fact that `True` values are numerically interpreted as 1 and `False` values are numerically interpreted as 0. One immediate application of this fact is that we can place an array comparison inside the `np.sum()` function to determine the number of elements of the array that satisfy the comparison. An example of this is provided below.

```
count = np.sum(p < 0.5)     # Determine the number of elements less than 0.5
print(count)                # Prints 2
```

## Proportion of true values

If you think about the fact that a mean (or average) is a sum divided by the number of elements, then it follows that the mean of a Boolean array will be equal to the proportion of elements in that array that are equal to `True`. This means that we can place an array comparison inside the `np.mean()` function to determine the proportion of elements of the array that satisfy the comparison. An example of this is provided below.

```
prop = np.mean(p < 0.5)     # Determine the proportion of elements less than 0.5
print(prop)                 # Prints 0.4
```

This type of calculation is useful for determining the accuracy of a classification model in machine learning. You will explore this idea in a problem in Lab 2.

## Boolean operations

Python provides special logical operations that can be applied to pairs of Boolean values. The two most common such operations are the "`and`" and "`or`" operations. When performed on two Boolean values, the "`and`" operation evaluates to `True` if both of the original values are `True`, and evaluates to `False` otherwise. In contrast, the "`or`" operation evaluates to `True` if at least one of the original values is `True`, and evaluates to `False` otherwise. This is demonstrated in the code block below.

```
print(True and True)        # True
print(True and False)       # False
print(False and True)       # False
print(False and False)      # False

print(True or True)         # True
print(True or False)        # True
print(False or True)        # True
print(False or False)       # False
```

NumPy provides elementwise versions of these operations that can be applied to Boolean arrays. The elementwise "and" operation is performed using the `&` character, and the elementwise "or" operation is performed using the `|` character. When applying these operations to Boolean arrays produced by array comparisons, you should place each array comparison in a set of parentheses. An example of the elementwise and operation is provided below.

```
middle = (p > 0.25) & (p < 0.75)     # Determine which values are in (0.25, 0.75)
mid_prop = np.mean(middle)           # Calculate the proportion
print(mid_prop)                      # Prints 0.8
```

The code block below provides an example of elementwise or.

```
extreme = (p < 0.25) | (p > 0.75)    # Determine which values are not in [0.25, 0.75]
ext_prop = np.mean(extreme)          # Calculate the proportion
print(ext_prop)                      # Prints 0.2
```
