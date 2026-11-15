# Week 4: Calculating derivatives with SymPy

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will see how to use Python and the SymPy package to calculate derivatives. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Calculating Derivatives with SymPy](https://colab.research.google.com/drive/1vbDXMA-5Ch8XRCoMHot61IYBX1UnZXTy?usp=sharing).

## Calculating derivatives in SymPy

SymPy expressions are equipped with a `diff()` method that can be used to calculate derivatives of the expression. For example, suppose that we wish to differentiate the following function: $f(x) = 2x^3 + 4x^2 - 3x + 5$. To do so in SymPy, we would first create an expression to represent the function, then call the `diff()` method of that expression. This is demonstrated in the code cell below.

```
f = lambda x: 2*x**3 + 4 * x**2 - 3*x + 5    # Define the function
x = sym.Symbol('x')                          # Define the variable x
f_sym = f(x)                                 # Create SymPy expression
df = f_sym.diff()                            # Calculate the derivative
display(df)                                  # Display the derivative
```

Running the code above confirms that the derivative of the function $f(x)$ is given by $f'(x)= 6x^2+8x - 3$.

We can substitute values into derivative expressions just as we can with any other SymPy expressions. In the cell below, we calculate and print the values of $f'(-1)$, $f'(1)$, and $f'(2.5)$.

```
print(df.subs({x:-1}))              # Prints -5
print(df.subs({x:1}))               # Prints 11
print(df.subs({x:2.5}))             # Prints 54.5
```

When using the `diff()` method to calculate derivatives, we can also specify the variable that we are differentiating with respect to. For example, to indicate that we wanted to differentiate with respect to the variable `x`, we could use the following code: `df = f_sym.diff(x)`. However, this is optional when working with functions of a single variable. In a later lesson, we will discuss how to differentiate functions of multiple variables. In that setting, it will be necessary to indicate which variable we are differentiating with respect to.
