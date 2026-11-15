# Week 2: The where function

**MATH 309/509 Math for AI** · Python

In this lesson, we will discuss the "where" function from NumPy. This is a useful function that can be used to create arrays from other arrays based on certain logical criteria. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [The Where Function](https://colab.research.google.com/drive/1oVRbngHcZ78a_vj6fjqBd7tVUn8sTSUK?usp=sharing).

## The where function

The function `np.where()` is used to build an array by selecting values according to some logical condition. When using `np.where()`, we must describe a comparison operation to be applied to some array. For the sake of discussion, we will refer to the array to which the comparison is being applied as `x`. The function `np.where()` will return an array with the same size as `x`. The values in the returned array will be determined based on the truth of the comparison operation that was applied to `x`.

There are multiple ways to use `np.where()`. The first method we will demonstrate results in an array whose elements are selected from two possible values. For the sake of discussion, we will call the possible values `A` and `B`. We can use `np.where()` to assign a value of `A` to any position where the comparison on `x` was `True`, and a value of `B` to any position where the comparison was `False`. A schematic for the syntax to accomplish this task is provided below.

```
np.where(condition_on_x, A, B)
```

We provide an actual example of this use case in the code block below.

```
p = np.array([0.3, 0.7, 0.2, 0.6, 0.5])       # Create an array
result = np.where(p < 0.5, 0, 1)              # Apply np.where
print(result)                                 # Prints [0 1 0 1 1]
```

Rather than providing individual values `A` and `B` to `np.where()`, we can supply arrays, as long as these arrays have the same size as the comparison array `x`. A schematic for this use case is provided below.

```
np.where(condition_on_x, array_A, array_B)
```

When we do so, any element corresponding to a position where the comparison on `x` was `True` will have its value selected from the corresponding position in `array_A`. Any element corresponding to a position where the comparison on `x` was `False` will have its value selected from the corresponding position in `array_B`. We provide an example of this use case in the code block below.

```
group = np.array(['A', 'B', 'B', 'A', 'B'])        # Create comparison array
arrayA = np.array([ 1,  2,  3,  4,  5])            # Array for "True" comparisons
arrayB = np.array([-1, -2, -3, -4, -5])            # Array for "False" comparisons
result = np.where(group == 'A', arrayA, arrayB)    # Apply np.where
print(result)                                      # Prints [ 1 -2 -3  4 -5]
```

## The ReLU function

We will close this lesson with an application of the where function. We will discuss how to apply `np.where()` to calculate the value of the **Rectified Linear Unit**, or **ReLU**, function, which is used extensively within neural networks. The definition of the ReLU function for a single input value $x$ is provided below.

$$\textrm{ReLU}(x) = \max(0, x)$$

If a positive number is plugged into $\textrm{ReLU}(x)$, then that same number is returned by the function. If a negative number is plugged into $\textrm{ReLU}(x)$, then a value of 0 is returned.

The code block below demonstrates how to define the ReLU function in Python.

```
def ReLU(x):
    return max(0, x)

print(ReLU(7))                # Prints 7
print(ReLU(-8))               # Prints 0
```

The version of the ReLU function provided accepts inputs that consist of a single number. When working with neural networks, it is usually necessary to calculate the value of the ReLU function for several inputs at once. A vectorized version of ReLU can be implemented using `np.where()`. This is demonstrated below.

```
def ReLU(x):
    return np.where(x < 0, 0, x)

x = np.array([7, -8, -2, 4, 0, 6])

print(ReLU(x))
```

Executing the code above will result in the following output:

`[7 0 0 4 0 6]`

We will revisit the ReLU function in Week 5 when we discuss neural networks.
