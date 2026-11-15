# Week 5: The gradient

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will introduce the gradient, which is a vector constructed from the partial derivatives of a function. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [The Gradient](https://colab.research.google.com/drive/1_lWWw_TkI21K2KpNzbWfpx964rZkBP8u?usp=sharing).

## The gradient

The **gradient** of a function $f$ is a vector whose elements are the partial derivatives of $f$ with respect to each of its variables. The gradient of a function $f$ is denoted by $\nabla f$. Suppose that $f$ is a function of three variables, $x$, $y$, and $z$. Then, the gradient is constructed as follows:

$$\nabla f(x, y, z) = [f_x(x,y,z),~ f_y(x,y,z),~ f_z(x,y,z)]$$

This is often written in a more concise form in which we omit explicit references to the input variables. This is shown below.

$$\nabla f = [f_x,~ f_y,~ f_z]$$

Each of the partial derivatives of a function $f$ is also a function with the same variables as $f$. As a result, the gradient $\nabla f$ is a function that accepts the same variables as $f$ and returns a vector.

## Interpreting the gradient

The vector provided by the gradient $\nabla f$ has an important geometric significance. It points in the direction of the steepest ascent for the value of the function, and opposes the direction of steepest descent. Let's state this in another way. When we evaluate the gradient at a particular point in the input space, the vector we obtain indicates the direction in which we would need to adjust the inputs in order to increase the value of the function most rapidly.

Given a specific set of input values, if we take a small step in the direction of the gradient, this should result in an increase in the value of the function. If we take a small step in the direction opposite of the gradient, this should result in a decrease in the value of the function. Let's explore this with an example.

Consider a function of two variables $f(x, y)$. Suppose that the value of the function at the point $(2,5)$ is given by $f(2, 5)=17$. Suppose further that the gradient of the function at the same point is given by $\nabla f(2, 5)= [-7, 4]$. If we adjust the inputs by a scalar multiple of $\nabla f(x, y)$, this should slightly increase or decrease the value of our function, depending on if the scalar is positive or negative.

Suppose we adjust the inputs by $0.001 \nabla f(2, 5)= [-0.007,~ 0.004]$. That would take us from the point $(2,5)$ to the point $(1.993,~ 5.004)$. If our constant multiple was selected to be small enough, then $f(1.993,~ 5.004)$ should be slightly larger than 17.

Suppose instead that we adjust the inputs by $-0.001 \nabla f(2, 5)= [0.007,~ -0.004]$. That would take us from the point $(2,5)$ to the point $(2.007,~ 4.996)$. If our constant multiple was selected to be small enough, then $f(2.007,~ 4.996)$ should be slightly smaller than 17.

Like all derivatives, gradients contain **local information**, meaning that they describe some aspect of how the function behaves when making **small** changes to the inputs. If we were to take a large step in the direction of the gradient, there is no guarantee that the value of the function would increase as a result of that change in the inputs.

Gradients are used frequently in various areas of optimization theory, and are heavily employed in machine learning, deep learning, and artificial intelligence. We will discuss this application of gradients in more detail in later lessons this week.

## Calculating gradients with SymPy

Gradients can be calculated using the `derive_by_array()` function from SymPy. This function requires two arguments. The first argument should be a SymPy expression representing the function to be differentiated. The second argument should be a list of the variables included in that expression. For example, suppose that we wanted to find the gradient of a function $f$ with three variables, $x$, $y$, and $z$. If `f_sym` is an expression that represents the function $f$, then we could use SymPy to calculate the gradient of the function by executing the code below:

`gradient = sym.derive_by_array(f_sym, [x,y,z])`

As is the case with other SymPy expressions, we can use the `subs()` method to plug values into the gradient. This is shown below.

`gradient.subs({x:-3, y:6, z:4})`

We will now provide a few examples of calculating gradients in SymPy.

## Example 1

Consider the function shown below.

$$f(x,y) = 5 x^3 + 3y^2 - 9$$

The gradient of this function is provided below.

$$\nabla f(x,y) = [15 x^2,~ 6 y]$$

The code block below demonstrates how to use SymPy to calculate this gradient.

```
# Define function, variables, and expression
f = lambda x,y : 5 * x**3 + 3 * y ** 2 - 9
x, y = sym.symbols('x, y')
f_sym = f(x,y)

gradient = sym.derive_by_array(f_sym, [x,y])    # Calculate gradient
display(gradient)                               # Display the gradient
```

In the code block below, we calculate $\nabla f(2,3)$ and $\nabla f(1,-4)$.

```
grad1 = gradient.subs({x:2, y:3})          # Calculate the gradient at x=2, y=3
print(grad1)                               # Prints [60, 18]

grad2 = gradient.subs({x:1, y:-4})         # Calculate the gradient at x=1, y=-4
print(grad2)                               # Prints [15, -24]
```

## Example 2

Consider the function shown below.

$$f(x,y) = 2 x^3 y + 7 x^2 y^2 + 6 y$$

The gradient of this function is provided below.

$$\nabla f(x,y) = \left[6 x^2 y + 14 x y^2,~ 2x^3 + 14x^2 y + 6 \right]$$

The code block below demonstrates how to use SymPy to calculate this gradient.

```
# Define function, variables, and expression
f = lambda x,y : 2 * x**3 * y + 7 * x**2 * y**2 + 6*y
x, y = sym.symbols('x, y')
f_sym = f(x,y)

gradient = sym.derive_by_array(f_sym, [x,y])    # Calculate gradient
display(gradient)                               # Display the gradient
```

In the code block below, we calculate $\nabla f(1, -1)$.

```
grad = gradient.subs({x:1, y:-1})           # Calculate the gradient at x=1, y=-1
print(grad)                                 # Prints [8, -6]
```

## Example 3

Consider the function shown below.

$$f(x,y,z) = 5 x^2 + 3 y z^3$$

The gradient of this function is provided below.

$$\nabla f(x,y,z) = \left[10x,~ 3z^3,~ 9 y z^2\right]$$

The code block below demonstrates how to use SymPy to calculate this gradient.

```
# Define function, variables, and expression
f = lambda x,y,z : 5 * x**2 + 3 * y * z**3
x, y, z = sym.symbols('x, y, z')
f_sym = f(x, y, z)

gradient = sym.derive_by_array(f_sym, [x, y, z])   # Calculate gradient
display(gradient)                                  # Display the gradient
```

In the code block below, we calculate $\nabla f(7, 4, 2)$.

```
grad = gradient.subs({x:7, y:4, z:2})          # Calculate the gradient at x=7, y=4, z=2
print(grad)                                    # Prints [70, 24, 144]
```

## Additional resources

The following video from Khan Academy explains the gradient.

<div class="video"><iframe src="https://www.youtube.com/embed/tIpKfDc295M" title="Gradient | Khan Academy" loading="lazy" allowfullscreen></iframe></div>

Khan Academy (2016). *Gradient* \[Video File\]. Retrieved from YouTube.
