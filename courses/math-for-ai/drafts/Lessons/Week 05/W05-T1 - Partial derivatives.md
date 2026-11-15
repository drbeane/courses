# Week 5: Partial derivatives

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will introduce a type of derivative, known as a partial derivative, that can be calculated for functions of multiple variables. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Partial Derivatives](https://colab.research.google.com/drive/1eebXbsEL42RVQ5h5ewUNkORqJjLZJWv6?usp=sharing).

## Partial derivatives

During the previous week, we introduced the concept of a derivative for a single-variable function and discussed a few applications of this concept. This week, we turn our attention to functions of multiple variables. If a function has multiple variables, then we can calculate a derivative of the function with respect to any of its variables. A **partial derivative** of a function with respect to one of its variables is calculated by treating all other variables as if they were constant and then differentiating the function as usual.

There are multiple ways of denoting partial derivatives. One common way is to write the name of the function with a subscript indicating the variable with respect to which we are differentiating. For example, $f_x$ would represent the partial derivative of the function $f$ with respect to the variable $x$. This same derivative is also sometimes denoted as $\frac{\partial}{\partial x} f$.

As an example of the notation, suppose that a function $f$ has three inputs, $x$, $y$, and $z$. Then the three partial derivatives of this function would be denoted as $f_x$, $f_y$, and $f_z$, or as $\frac{\partial}{\partial x} f$, $\frac{\partial}{\partial y} f$, and $\frac{\partial}{\partial z} f$.

The `diff()` method for SymPy expressions can be used to calculate partial derivatives. This function accepts an optional parameter that can be used to indicate the variable to be differentiated with respect to. For example, if `f_sym` is a SymPy expression representing $f$, then `f_sym.diff(x)` could be used to calculate $f_x$.

We will now provide several examples of partial derivatives. In each example, we will demonstrate how to use SymPy to calculate the derivatives.

## Example 1

Consider the following function:

$$f(x,y) = 5 x^3 + 3y^2 - 9$$

This function contains two variables, $x$ and $y$. We can differentiate with respect to each variable to obtain partial derivatives $f_x$ and $f_y$.

- To calculate $f_x$, we would treat the variable $y$ as if it were a constant and then differentiate with respect to $x$.
- To calculate $f_y$, we would treat the variable $x$ as if it were a constant and then differentiate with respect to $y$.

Formulas for these two partial derivatives are provided below.

$$f_x(x,y) = 15 x^2$$

$$f_y(x,y) = 6 y$$

The code block below demonstrates how to use SymPy to calculate these partial derivatives.

```
# Define function, variables, and expression
f = lambda x,y : 5 * x**3 + 3 * y ** 2 - 9
x, y = sym.symbols('x, y')
f_sym = f(x,y)

fx = f_sym.diff(x)        # Calculate partial wrt x
fy = f_sym.diff(y)        # Calculate partial wrt y

display(fx)               # Display fx
display(fy)               # Display fy
```

## Example 2

Consider the following function:

$$f(x,y) = 2 x^3 y + 7 x^2 y^2 + 6 y$$

Like the function in Example 1, this function contains two variables, $x$ and $y$. Unlike in the previous example, this function contains two terms that include both of the two variables. The two partial derivatives of this function are provided below.

$$f_x(x,y) = 6 x^2 y + 14 x y^2$$

$$f_y(x,y) = 2x^3 + 14x^2 y + 6$$

The code block below demonstrates how to use SymPy to calculate these partial derivatives.

```
# Define function, variables, and expression
f = lambda x, y : 2 * x**3 * y + 7 * x**2 * y**2 + 6*y
x, y = sym.symbols('x, y')
f_sym = f(x,y)

fx = f_sym.diff(x)        # Calculate partial wrt x
fy = f_sym.diff(y)        # Calculate partial wrt y

display(fx)               # Display fx
display(fy)               # Display fy
```

We can use the `subs()` method of a SymPy expression to plug specific values into the expression. We use `subs()` in the code cell below to calculate $f_x(2, 3)$ and $f_y(2, 3)$.

```
fx_eval = fx.subs({x:2, y:3})     # Evaluate fx(2,3)
fy_eval = fy.subs({x:2, y:3})     # Evaluate fy(2,3)

print(fx_eval)                    # Prints 324
print(fy_eval)                    # Prints 190
```

## Example 3

Consider the following function:

$$f(x,y,z) = 5 x^2 + 3 y z^3$$

This function contains three variables, $x$, $y$, and $z$. As a result, this function will have three partial derivatives, $f_x$, $f_y$, and $f_z$. Each of the partial derivatives is provided below.

$$f_x(x,y,z) = 10x$$

$$f_y(x,y,z) = 3z^3$$

$$f_z(x,y,z) = 9 y z^2$$

The code block below demonstrates how to use SymPy to calculate these partial derivatives.

```
# Define function, variables, and expression
f = lambda x,y,z : 5*x**2 + 3*y*z**3
x, y, z = sym.symbols('x, y, z')
f_sym = f(x,y,z)

fx = f_sym.diff(x)       # Calculate partial wrt x
fy = f_sym.diff(y)       # Calculate partial wrt y
fz = f_sym.diff(z)       # Calculate partial wrt z

display(fx)              # Display fx
display(fy)              # Display fy
display(fz)              # Display fz
```

We use `subs()` in the code cell below to calculate $f_x(2, 4, 3)$, $f_y(2, 4, 3)$, and $f_z(2, 4, 3)$.

```
fx_eval = fx.subs({x:2, y:4, z:3})     # Evaluate fx(2,4,3)
fy_eval = fy.subs({x:2, y:4, z:3})     # Evaluate fy(2,4,3)
fz_eval = fz.subs({x:2, y:4, z:3})     # Evaluate fz(2,4,3)

print(fx_eval)                         # Prints 20
print(fy_eval)                         # Prints 81
print(fz_eval)                         # Prints 324
```

## Additional resources

The following video from Khan Academy explains partial derivatives.

<div class="video"><iframe src="https://www.youtube.com/embed/AXqhWeUEtQU" title="Partial derivatives, introduction | Khan Academy" loading="lazy" allowfullscreen></iframe></div>

Khan Academy (2016). *Partial derivatives, introduction* \[Video File\]. Retrieved from YouTube.
