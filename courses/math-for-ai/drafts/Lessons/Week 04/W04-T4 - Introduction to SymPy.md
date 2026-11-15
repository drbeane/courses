# Week 4: Introduction to SymPy

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will introduce the SymPy package, which is used for performing symbolic manipulation of mathematical expressions in Python. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Intro to SymPy](https://colab.research.google.com/drive/17_DqssWH1FOXM7jA09GTT5h4h5b9ityf?usp=sharing).

## The SymPy package

**SymPy** is a Python library for symbolic computation. The tools provided by SymPy allow us to work with mathematical expressions symbolically rather than numerically. That is to say that we can use SymPy to perform symbolic manipulation on expressions themselves rather than working with numbers that come from evaluating those expressions. This library can be used to perform operations such as adding, subtracting, multiplying, and dividing pairs of mathematical expressions, factoring expressions, or performing calculus-related tasks such as calculating derivatives. Our interest in the package will be specifically related to the calculation of derivatives.

The SymPy library can be imported using the command below. Note that this imports the package under the alias `sym`.

```
import sympy as sym
```

## Variables and expressions in SymPy

When using SymPy, we will create **symbolic expressions**, which are created using one or more **symbolic variables**. We will discuss symbolic variables first. Variables in SymPy are created using the `sym.Symbol()` function. This function expects to be provided a string that indicates the name of the variable being created. For example, `sym.Symbol('x')` would create a symbolic variable named `'x'`. To use this symbolic variable in expressions, we need to store it in a Python variable. We demonstrate this in the code cell below.

```
x = sym.Symbol('x')
```

Note that the word "variable" is used in two slightly different contexts here. The symbol `x` to the left of the equal sign represents a *Python* variable. This Python variable stores a *SymPy symbolic* *variable*. This is a subtle distinction, but worth keeping in mind. When working with SymPy, we will often use the term "variable" to simultaneously refer to a symbolic variable as well as the Python variable in which it is stored.

We can use symbolic variables to define symbolic expressions of varying complexity. These expressions can then be displayed on the screen using the `display()` function. In the cell below, we create two symbolic variables and then use these variables to define two symbolic expressions, which we then display.

```
x = sym.Symbol('x')                # Define variable x
y = sym.Symbol('y')                # Define variable y

expr1 =  x / (1 + x**2)            # Define an expression involving x
expr2 =  x * y**2 + x**3           # Define an expression involving x and y

display(expr1)                     # Display the first expression
display(expr2)                     # Display the second expression
```

The code above will display the two expressions shown below.

$$\frac{x}{1+x^2}$$

$$x^3 + x y^2$$

## Combining expressions

We can also combine symbolic expressions using arithmetic operations in Python.

```
x = sym.Symbol('x')                # Define variable x
y = sym.Symbol('y')                # Define variable y

expr1 = x**2 + x + 5*y             # Define an expression
expr2 = 3*y - x                    # Define an expression

display(x * expr1)                 # Display x times first expression
display(expr1 * expr2)             # Display product of expressions
display(expr1 + expr2)             # Display sum of expressions
```

The code above will display the three expressions shown below.

$$x \left(x^2 + x + 5y \right)$$

$$\left(-x + 3y \right) \left(x^2 + x + 5y \right)$$

$$x^2 + 8y$$

SymPy provides a `sym.expand()` function that can be used to expand expressions such as the first and second expressions above. Its usage is demonstrated below.

```
expr3 = sym.expand(x * expr1)        # Expand x times an expression
expr4 = sym.expand(expr1 * expr2)    # Expand a product of expressions

display(expr3)                       # Display expanded expression
display(expr4)                       # Display expanded expression
```

The code above will display the expressions shown below.

$$x^3 + x^2 + 5xy$$

$$-x ^3 + 3x^2 y - x^2 - 2xy + 15y^2$$

## Evaluating expressions

Symbolic expressions can be evaluated for specific values of the variables by using the `subs()` method. When using this method, we must supply a **Python dictionary** that explains what values are to be substituted in for which variables. An example of such a dictionary would be `{x:7}`. This dictionary can be used to tell SymPy that the value 7 is to be substituted in for the symbolic variable `x`. When working with an expression involving multiple variables, we can use a dictionary such as `{x:7, y:3}`.

The code block below demonstrates how to use the `subs()` method and dictionaries to evaluate expressions.

```
x = sym.Symbol('x')              # Create variable x
y = sym.Symbol('y')              # Create variable y

expr1 = x / (1 + x**2)           # Create an expression involving x
expr2 = x * y**2 + x**3          # Create an expression involving x and y

val1 = expr1.subs({x:3})         # Substitute x=3 into expression 1
val2 = expr2.subs({x:4, y:3})    # Substitute x=4, y=3 into expression 2

print(val1)                      # Prints "3/10"
print(val2)                      # Prints "100"
```

## Creating expressions from functions

We can pass SymPy symbolic variables to standard Python functions to create SymPy expressions that represent the function in question. This can be useful in situations where we would like to work with the function in multiple contexts. For example, we might want to have access to the Python function for the sake of performing basic calculations, but also have a SymPy expression for the sake of evaluating derivatives (which we will discuss in the next lesson).

We will demonstrate this idea by creating a Python function for the mathematical function $f(x,y)$ shown below, and then using that function to create a SymPy expression.

$$f(x,y) = 3x^2 + 5 x y$$

```
f = lambda x,y: 3*x**2 + 5*x*y   # Define a function

x = sym.Symbol('x')              # Create variable x
y = sym.Symbol('y')              # Create variable y

f_sym = f(x,y)                   # Create SymPy expression
display(f_sym)                   # Display the expression
```

## Creating multiple variables at once

In each of the previous examples, we created each variable separately. However, SymPy provides a `symbols()` function that can be used to create several symbolic variables at once. The code block below demonstrates how to use this function to create three variables: `x`, `y`, and `z`.

```
x, y, z = sym.symbols('x, y, z')
```
