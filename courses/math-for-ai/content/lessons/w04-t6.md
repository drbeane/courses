# Week 4: Finding roots of expressions

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will explain how to use derivatives to numerically approximate the roots of an expression or to find the solution to an equation. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Finding Roots with SymPy](https://colab.research.google.com/drive/1d_zBhEhUFUJX1Aqh1bZZYlzTnKX4PO4p?usp=sharing).

## Roots and solutions

The **solution** to a single-variable equation is simply a value that satisfies the equation when it is substituted in for the variable. For example, $x=3$ is a solution to the equation $2x=6$. As another example, $x=-2$ and $x=2$ are both solutions to the equation $x^2 = 4$.

A **root** of a single-variable expression is a value at which the expression is equal to 0. For example, $x=3$ is a root of the expression $2x - 6$.

Hopefully, it is clear that these concepts are related. We can always rephrase a problem about finding the *solution to an equation* as a problem about finding the *root of an expression*. This is done by moving all of the terms in the equation to one side of the equation, and then finding the roots of the resulting expression. For example, the following two problems are identical:

- Find the solution to the equation $2x=6$.
- Find the roots of the expression $2x - 6$.

## Newton-Raphson method for finding roots

One application of derivatives is their use in approximating roots. The Newton-Raphson method (sometimes called the Newton method) is a technique that utilizes derivatives to approximate roots of expressions (or solutions to equations). The technique uses an iterative process that produces a sequence of approximations, with each approximation hopefully being an improvement over the previous one (although this improvement is not guaranteed). Each new approximation in the sequence is generated from the previous approximation, and the derivative is used in the update formula. The process is outlined below.

1. Generate an initial estimate for the root of the given expression. This initial approximation could be randomly generated or could be selected based on some available information, such as a graph of the function. Let's denote the approximation as $\hat x$.
2. The approximation is updated using the following update formula: $\hat x \leftarrow \hat x - \frac{f \left( \hat x \right )}{f' \left( \hat x \right )}$
3. Step 2 is repeated until some stopping condition is met. One simple stopping condition is to simply run the algorithm for a set number of iterations. Another common stopping condition is to stop updating the estimate when the absolute difference between two consecutive estimates is below some threshold.

## Using SymPy to apply the Newton-Raphson method

We will now demonstrate how to implement the Newton-Raphson method using Python and SymPy. In this example, we will search for a root of the following function:

$$f(x) = x^2 - 2x$$

This function can be factored as $f(x) = x \cdot \left(x - 2\right)$, which shows that it has roots at $x=0$ and $x=2$. The code to find one of the roots of this function is shown in the code block below. This code is demonstrated in the following Colab notebook: [Newton-Raphson Demonstration](https://colab.research.google.com/drive/1Q4LJ7PMs005IVt0MuQ58OwNtAhV9IkA8?usp=sharing).

### Implementation of the Newton-Raphson method

```
import sympy as sym                # Import SymPy

f = lambda x : x**2 - 2*x          # Define the function

x = sym.Symbol('x')                # Define the variable x
f_sym = f(x)                       # Create expression
df = f_sym.diff()                  # Calculate the derivative

x_root = 5                         # Create initial guess for the root

for i in range(10):                # Perform 10 iterations of Newton-Raphson
    fx = f_sym.subs({x:x_root})    # Evaluate function at x_root
    dfx = df.subs({x:x_root})      # Evaluate derivative at x_root
    x_root = x_root - fx / dfx     # Apply the update formula
    x_root = round(x_root, 4)      # Round estimate to 4 decimal places

    print(f'The approximate root after {i+1} steps is: {x_root}')
```

You are encouraged to experiment with the code in the demonstration notebook. Some things you can adjust are mentioned in the list below.

- You can change the initial guess for the root. If a function has more than one root, this initial guess can affect which root the algorithm converges to.
- You can change the number of iterations to use for Newton-Raphson. The above example actually converges to within 4 decimal places of a root in 5 iterations. Can you find an initial guess that would require more than 10 iterations to find a good estimate for the root?
- You can adjust the function.

## Using nroots() to find roots

The Newton-Raphson method provides an interesting application of calculus for addressing a problem in algebra. However, we do not need to resort to implementing the Newton-Raphson method, as shown above, whenever we wish to find the roots of a SymPy expression. SymPy provides an `nroots()` function that can be used to accomplish this task. The `nroots()` function uses numerical techniques to find the roots of a polynomial expression. It is easier to use than our implementation and will find all of the roots of the polynomial at the same time. Note that `nroots()` only works with polynomials. For other types of expressions, SymPy provides the `nsolve()` function. The usage of `nroots()` is demonstrated below.

```
f = lambda x : x**2 - 2*x        # Define the function
x = sym.Symbol('x')              # Define the variable x
f_sym = f(x)                     # Create an expression
roots = sym.nroots(f_sym)        # Find all roots
print(roots)                     # Prints [0, 2.00000000000000]
```

## Using nroots() to solve equations

As mentioned at the start of this lesson, we can find the solutions to an equation by moving all of the terms to the same side of the equation and then finding the roots of the resulting expression. We will demonstrate this by solving the following equation for $x$.

$$f(x) = x^2 - 2x = 20$$

```
f = lambda x : x**2 - 2*x        # Define the function
x = sym.Symbol('x')              # Define the variable x
f_sym = f(x)                     # Create an expression
solns = sym.nroots(f_sym - 20)   # Find all solutions
print(solns)                     # Prints [-3.58257569495584, 5.58257569495584]
```

## Additional resources

The following video from the YouTube channel "StudySession" provides an example of applying the Newton-Raphson method.

<div class="video"><iframe src="https://www.youtube.com/embed/X6WNe9EtlUo" title="Newton's Method Example | Numerical Methods" loading="lazy" allowfullscreen></iframe></div>

StudySession. *Newton's Method Example | Numerical Methods* \[Video File\]. Retrieved from YouTube.
