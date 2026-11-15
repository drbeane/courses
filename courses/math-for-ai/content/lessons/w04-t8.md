# Week 4: Local extrema

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will discuss how to use derivatives to find local minima and maxima. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Local Extrema](https://colab.research.google.com/drive/1voxZTwyc8UA348UCXh-97uEzJcVMFjO1?usp=sharing).

## Local extrema

A number $c$ is said to be a **local minimum** of a function $f\left(x\right)$ if there is an interval around $c$ such that $f\left(c\right)$ is less than or equal to $f\left(x\right)$ for all other $x$ within the interval. Stated less formally, $c$ is a local minimum of $f\left(x\right)$ if there are no other points near $c$ for which $f\left(x\right)$ has a smaller value.

A number $c$ is said to be a **local maximum** of a function $f\left(x\right)$ if there is an interval around $c$ such that $f\left(c\right)$ is greater than or equal to $f\left(x\right)$ for all other $x$ within the interval. Stated less formally, $c$ is a local maximum of $f\left(x\right)$ if there are no other points near $c$ for which $f\left(x\right)$ has a larger value.

A function can have any number of local minima or local maxima. The local minima and local maxima of a function are collectively known as the **local extrema** of the function. Local extrema play an important role in machine learning. When training a machine learning model, we attempt to find values for the model parameters that correspond to a local minimum or local maximum for some performance measure.

## Derivatives and local extrema

In many cases, information from the first and second derivatives can be used to find and classify the local extrema of a function. We will demonstrate this by finding the local extrema of the polynomial function shown below.

$$f(x)=-0.02x^4+1.2x^3-23x^2+160x+200$$

We will start by finding the first and second derivatives of the function.

```
f = lambda x : -0.02*x**4 + 1.2*x**3 - 23*x**2 + 160*x + 200
x = sym.Symbol('x')
f_sym = f(x)

df1 = f_sym.diff()      # Calculate 1st derivative
df2 = df1.diff()        # Calculate 2nd derivative

display(df1)            # Display 1st derivative
display(df2)            # Display 2nd derivative
```

## Critical points

The **critical points** of a function $f\left(x\right)$ are the values of $x$ for which $f'\left(x\right) = 0$. For certain classes of "well-behaved" functions, the local extrema always occur at critical points. In the code cell below, we find the critical points of $f\left(x\right)$ by using `nroots()` to find the roots of the first derivative $f'\left(x\right)$.

```
crit_pts = sym.nroots(df1)   # Find critical points
print(crit_pts)              # Prints [5.696, 13.729, 25.575]
```

By executing the code above, we see that our function has three critical points. These are approximately:

$x_1 = 5.696$, $x_2 = 13.729$, $x_3 = 25.575$

The next step is to classify these critical points.

## The second derivative test

In many cases, the second derivative can be used to classify critical points as local minima or local maxima. The **second derivative test** for classifying critical points is stated as follows: Suppose that $c$ is a critical point for the function $f\left(x\right)$.

- If $f''\left(c\right) > 0$, then $f\left(x\right)$ has a local minimum at $c$.
- If $f''\left(c\right) < 0$, then $f\left(x\right)$ has a local maximum at $c$.
- If $f''\left(c\right) =0$, then the second derivative test is inconclusive.

When the second derivative test is inconclusive, additional tests need to be performed to classify the critical point. In this case, the critical point could be a local minimum, a local maximum, or it could be an **inflection point**, which is a point where the concavity of the graph changes. A critical point that is also an inflection point is neither a local minimum nor a local maximum. We will not be particularly concerned with inflection points in this course.

In the code block below, we calculate the values of $f\left(x\right)$ and $f''\left(x\right)$ for each of the three critical points. We are particularly interested in the values of the second derivative for the purposes of applying the second derivative test.

```
f_values = []                                # Create list for f values
df2_values = []                              # Create list for f'' values

for cp in crit_pts:                          # Loop over critical points
    f_values.append(f_sym.subs({x:cp}))      # Calculate f(c)
    df2_values.append(df2.subs({x:cp}))      # Calculate f''(c)

print(f_values)                              # Print f values
print(df2_values)                            # Print f'' values
```

The values of $f''\left(x\right)$ for each of the critical points are provided below.

$f''(x_1)=-12.7756$, $f''(x_2) = 7.6126$, $f''(x_3) = -18.8370$

Since $f''\left(x_1\right)$ and $f''\left(x_3\right)$ are both negative, the second derivative test tells us that $x_1$ and $x_3$ are local maxima. Since $f''\left(x_2\right)$ is positive, we see that $x_2$ is a local minimum.

A graph of the function $f\left(x\right)$ is shown below, with each of the three local extrema indicated by orange dots. The demonstration notebook contains the code used to generate this figure.

<img src="/images/image-a5665975-2fc1-4243-b0a3-ce54fb0fef17.png" alt="Graph of f(x) with three critical points marked: local maximum near x = 6, local minimum near x = 14, and maximum near x = 26." width="532">

:::image Image description: Critical points of f(x)
The curve over x from −5 to 35 (y from −200 to 1000) has three orange points where the slope is zero: a local maximum of about 565 near x = 6, a local minimum of about 455 near x = 14, and the highest point, about 765, near x = 26. The curve falls steeply on both ends.
:::

## Example: Fitting a one-parameter model

Finding a local minimum is exactly what it means to train a machine learning model: we look for the parameter values at which a loss function is as small as possible. We can now carry out that process from start to finish for a very simple model.

Suppose that we have four observations, with feature values $x = \left[1, 2, 3, 4\right]$ and target values $y = \left[2.1, 3.9, 6.2, 7.8\right]$. We will fit the model $\hat y = \beta x$, which has a single parameter $\beta$. The sum of squared errors for this model depends only on $\beta$.

$$SSE(\beta) = \sum_{i=1}^{4} \left( y_i - \beta x_i \right)^2$$

In the code below, we build this function with SymPy, differentiate it, and find its critical point.

```
x_values = [1, 2, 3, 4]
y_values = [2.1, 3.9, 6.2, 7.8]
b = sym.Symbol('b')
sse = sum([(y - b * x)**2 for x, y in zip(x_values, y_values)])
display(sym.expand(sse))              # Displays 30*b**2 - 119.4*b + 118.9
d_sse = sse.diff()
display(d_sse)                        # Displays 60*b - 119.4
print(sym.nroots(d_sse))              # Prints [1.99000000000000]
```

The Python function `zip()` pairs each x value with the matching y value. The loss works out to $SSE(\beta) = 30 \beta^2 - 119.4 \beta + 118.9$, and its derivative is $60 \beta - 119.4$. The derivative is equal to 0 at $\beta = 1.99$, so this is the only critical point. The second derivative is 60, which is positive, so the second derivative test confirms that the critical point is a local minimum. The best model of this form is $\hat y = 1.99 x$, and its loss is $SSE(1.99) = 0.097$.

This is the same answer the matrix formula from Week 3 would give. For a model with one parameter and no intercept, that formula reduces to $\beta = \frac{\sum x_i y_i}{\sum x_i^2} = \frac{59.7}{30} = 1.99$.

Real models have many parameters, so their loss functions have many variables. Next week, we will extend the derivative to functions of several variables and will study a method for finding their minima.
