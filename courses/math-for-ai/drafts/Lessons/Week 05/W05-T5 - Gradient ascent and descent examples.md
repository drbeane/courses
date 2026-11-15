# Week 5: Gradient ascent and descent examples

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will demonstrate several examples of gradient ascent and gradient descent. The examples considered in this lesson are demonstrated in the following Colab notebook: [Gradient Ascent and Descent](https://colab.research.google.com/drive/1jBskju7P6DK4MKkJ6QDN3CI1VEirxwMW?usp=sharing).

## Gradient optimization function

For convenience, a Python function named `gradient_optimization()` has been provided for you in this course. This function can be used to perform either gradient ascent or gradient descent. We will demonstrate the usage of the function in this lesson and will discuss the details of how the function is implemented in the next lesson.

The `gradient_optimization()` function has several parameters. These are described below.

- `sym_fn` - This is expected to be a SymPy expression representing the function to be optimized.
- `vars` - This should be a list of SymPy symbols representing the variables in `sym_fn`.
- `init_vals` - This is a list of values that the variables of the function should be initialized to.
- `alpha` - This represents the learning rate $\alpha$.
- `max_iter` - This is the maximum number of iterations that should be performed for the algorithm.
- `threshold` - This is used to indicate a stopping condition. If the change in $f\left(x\right)$ is less than this value in two successive iterations and every component of the gradient is also less than this value, the algorithm will stop.
- `mode` - This should be a string equal to either `'min'` or `'max'`. This indicates whether gradient ascent or descent should be performed.
- `verbosity` - This controls how frequently updates are provided while the algorithm is running.

## Example 1: Single variable gradient ascent and descent

For our first example, we will apply gradient ascent and gradient descent to find local extrema for the following function:

$$f(x)=-0.02x^4+1.2x^3-23x^2+160x+200$$

In the code block below, we will define the function, create a SymPy variable, and create a SymPy expression to represent the function. We will also create a list to store our variables.

```
f = lambda x : -0.02*x**4 + 1.2*x**3 - 23*x**2 + 160*x + 200
x = sym.Symbol('x')
f_sym = f(x)
vars = [x]
```

## Example 1.1

We will start by finding a local maximum using gradient ascent. For our first attempt, we will initialize our input variable to $x = 0$ and will use a learning rate of $\alpha=0.01$. We will also set the maximum number of iterations to 100 and will use a threshold of 0.0001. The code for this is demonstrated below.

```
params, param_list = gradient_optimization(
    sym_fn = f_sym,
    vars = vars,
    init_vals = [0],
    alpha = 0.01,
    max_iter = 100,
    threshold = 0.0001,
    mode = 'max',
    verbosity = 5
)
one_var_grad_plot(f, vars, param_list, xlim=[-5,35], ylim=[-200, 1000])
```

The output of the `gradient_optimization()` function is shown below.

```
Algorithm converged in 94 steps.
Final parameter estimates: [5.6960]
Optimal value: 565.8497
```

The function returns two values. The first is a list containing the optimal parameter values. We store this in the variable `params`. The second is a list of parameter estimates found during each step of the algorithm. In the code above, we store this list in a variable named `param_list`.

The last line of the code block above uses a function named `one_var_grad_plot()` to display a plot of the gradient ascent process. This function will also be provided to you. The output of the function is shown below.

<img src="/images/image-6ef6b113-84ce-47ab-897d-2b77945799d8-1.png" alt="Gradient ascent in one dimension: the path of steps climbs from x = 0 to the first peak of the curve near x = 6." width="400">

:::image Image description: Gradient ascent in one dimension, example 1
A curve over x from −5 to 35 (y from −200 to 1000) rises from below 0 to a local maximum of about 565 near x = 6, dips to a local minimum of about 455 near x = 14, rises to the global maximum of about 765 near x = 26, then falls steeply. Orange dots show the steps of gradient ascent starting at x = 0 (y = 200). The steps get smaller as they approach the local maximum near x = 6, where the final point is circled.
:::

## Example 1.2

Changing algorithm parameters such as the initial guess or the learning rate will impact how the algorithm behaves. This could change the local extremum that the algorithm converges to, and can even impact whether or not the algorithm converges. If we alter the code above to change the learning rate to $\alpha=0.1$, we get the following results:

```
Algorithm converged in 99 steps.
Final parameter estimates: [25.5745]
Optimal value: 765.4507
```

In this case, the algorithm converged to the other local maximum. This can be seen in the following plot.

<img src="/images/image-0762a521-a698-4873-b98f-e5e6468fd29c-1.png" alt="Gradient ascent in one dimension with a larger learning rate: the steps jump from x = 0 past the first peak and climb to the highest peak near x = 26." width="400">

:::image Image description: Gradient ascent in one dimension, example 2
The same curve as the previous example (local maximum near x = 6, local minimum near x = 14, global maximum of about 765 near x = 26). The orange path starts at x = 0 and its first step jumps to about x = 16, past the first peak. Later steps climb the second hill and stop at the global maximum near x = 26, which is circled.
:::

## Example 1.3

Next, we will use gradient descent to find a local minimum. This is accomplished by setting the `mode` parameter to `'min'`. We will initialize our input variable to $x = 22$ and will use a learning rate of $\alpha=0.05$. This produces the following results:

```
Algorithm converged in 30 steps.
Final parameter estimates: [13.7295]
Optimal value: 456.1996
```

The plot generated by `one_var_grad_plot()` is shown below.

<img src="/images/image-dffc22a2-0a41-420f-ae65-f1180019aa79-1.png" alt="Gradient descent in one dimension: the steps move downhill from about x = 22 to the local minimum near x = 14." width="400">

:::image Image description: Gradient descent in one dimension
The same curve as the previous examples. The orange path starts at about x = 22 (y about 680) and steps downhill to the left, with shrinking steps, until it stops at the local minimum near x = 14 (y about 455), which is circled.
:::

It is worth noting that if our initial point was outside of the interval between the two local maxima for this function, then gradient descent would not have found the local minimum. The algorithm would have moved down the outer slopes of the graph of the function forever (or until the maximum number of iterations was reached).

## Example 2: Gradient ascent and descent example with two variables

We will now demonstrate gradient ascent and descent with a function of two variables. In these examples, we will be working with the following (rather complicated) function.

$$g(x,y) = 15 (1-x)^2 e^{-x^2 - (y+1)^2} + 10(5x^3 + 5y^5 - x) e^{-x^2 - y^2} + 2 e^{-(x+1)^2 - y^2}$$

In the code block below, we will define the function, create SymPy variables, and create a SymPy expression to represent the function. We will also create a list to store our variables.

```
from math import e                 # The constant e

def g(x,y):
    t1 = 15*(1-x)**2*e**(-x**2 - (y+1)**2)
    t2 = 10*(5*x**3 + 5*y**5 - x)*e**(-x**2 - y**2)
    t3 = 2*e**(-(x+1)**2 - y**2)
    return (t1 + t2 + t3)

x, y = sym.symbols('x, y')
g_sym = g(x,y)
vars = [x,y]
```

## Example 2.1

We will start by finding a local maximum using gradient ascent. For our first attempt, we will initialize our input variable to the point $(2,2)$ and will use a learning rate of $\alpha=0.01$. We will also set the maximum number of iterations to 100 and will use a threshold of 0.0001. The code for this is demonstrated below.

```
params, param_list = gradient_optimization(
    sym_fn = g_sym,
    vars = vars,
    init_vals = [2, 2],
    alpha = 0.01,
    max_iter = 100,
    threshold = 0.0001,
    mode = 'max',
    verbosity = 5
)
two_var_grad_plot(g, vars, param_list, xlim=[-3.5, 3.5], ylim=[-3.5, 3.5])
```

The output of the `gradient_optimization()` function is shown below.

```
Algorithm converged in 36 steps.
Final parameter estimates: [-0.0122, 1.5791]
Optimal value: 40.6445
```

The last line of the code block above uses a function named `two_var_grad_plot()` to display a plot of the gradient ascent process. This function will also be provided to you. The output of the function is shown below. The function is displayed using a contour plot. The dark blue regions indicate sets of inputs that produce large values for the function, while the dark red regions correspond to sets of inputs where the value of the function is a large negative number.

<img src="/images/image-1.png" alt="Two-variable gradient ascent starting at (2, 2): the path climbs to the highest peak near (0, 1.6)." width="640">

:::image Image description: Two-variable gradient ascent, example 1
The left panel is a contour plot of a function of two variables over x and y from about −3 to 3. Blue regions are high values and red regions are low values: the highest peak is near (0, 1.6), smaller peaks are near (1.3, 0) and (−0.5, −0.6), the lowest valley is near (0.3, −1.7), and a smaller valley is near (−1.5, 0.2). The right panel zooms in on the path.

The path of points starts at (2, 2) and moves left and down, taking smaller steps as it nears the top, and ends at the highest peak near (0, 1.6).
:::

## Example 2.2

In the next example, we will change our starting point to $(2,-2)$ and change the learning rate to $\alpha=0.02$. We will also raise the maximum number of iterations to 200, since the algorithm does not converge within 100 iterations in this case. That produces the following results.

```
Algorithm converged in 154 steps.
Final parameter estimates: [1.2845, -0.0048]
Optimal value: 17.9822
```

<img src="/images/image-bb042a40-20d1-4f20-b19d-47e3a805aa3d-1.png" alt="Two-variable gradient ascent starting at (2, &minus;2): the path curves up to the smaller peak near (1.3, 0)." width="640">

:::image Image description: Two-variable gradient ascent, example 2
The left panel is a contour plot of a function of two variables over x and y from about −3 to 3. Blue regions are high values and red regions are low values: the highest peak is near (0, 1.6), smaller peaks are near (1.3, 0) and (−0.5, −0.6), the lowest valley is near (0.3, −1.7), and a smaller valley is near (−1.5, 0.2). The right panel zooms in on the path.

The path starts at (2, −2), moves right and curves upward along the edge of the low region, then heads up and left, ending at the smaller peak near (1.3, 0) instead of the highest peak.
:::

## Example 2.3

Setting the learning rate correctly for a problem takes some practice, and often involves some trial-and-error. If the learning rate is set to a number that is very small, then it might take a long time for the algorithm to converge. But if the learning rate is set too high, then the parameter updates might become chaotic, and the algorithm will again not be able to converge. If we set the initial point to $(2,2)$ as in Example 2.1, but change the learning rate to $\alpha=0.05$, the algorithm will not converge. This case is illustrated in the figure below.

<img src="/images/image-690dc3bb-7c8e-44fa-b27c-feed7d16bd16-1.png" alt="Two-variable gradient ascent with a large learning rate: the path starting at (2, 2) overshoots back and forth around the highest peak and ends far away near (2, 0)." width="640">

:::image Image description: Two-variable gradient ascent, example 3
The left panel is a contour plot of a function of two variables over x and y from about −3 to 3. Blue regions are high values and red regions are low values: the highest peak is near (0, 1.6), smaller peaks are near (1.3, 0) and (−0.5, −0.6), the lowest valley is near (0.3, −1.7), and a smaller valley is near (−1.5, 0.2). The right panel zooms in on the path.

The path starts at (2, 2) and approaches the highest peak, but the steps are too large: it jumps back and forth across the peak several times (reaching points as far as (−0.6, 3.0)), then jumps down to near (1, 0.5), and ends with many small steps along y = 0 near x = 2, close to the smaller peak.
:::

## Example 2.4

Next, we will demonstrate another example of gradient descent. As in Example 1.3, we set the `mode` parameter to `'min'`. We will set our starting point to $(-0.15, 1.3)$ and will set the learning rate to $\alpha=0.01$. That will produce the results shown below.

```
Algorithm converged in 36 steps.
Final parameter estimates: [0.3153, 0.3283]
Optimal value: 0.2749
```

<img src="/images/image-0fbc67ca-c80e-436d-ad2a-f176a9aa2742-1.png" alt="Two-variable gradient descent starting near (&minus;0.15, 1.3): the path moves down to a shallow local minimum near (0.3, 0.35)." width="640">

:::image Image description: Two-variable gradient descent, example 1
The left panel is a contour plot of a function of two variables over x and y from about −3 to 3. Blue regions are high values and red regions are low values: the highest peak is near (0, 1.6), smaller peaks are near (1.3, 0) and (−0.5, −0.6), the lowest valley is near (0.3, −1.7), and a smaller valley is near (−1.5, 0.2). The right panel zooms in on the path.

The path starts on the side of the highest peak near (−0.15, 1.3), drops steeply to about (−0.3, 0.5), then moves right along y ≈ 0.45 and ends at a shallow local minimum near (0.3, 0.35), between the peaks.
:::

## Example 2.5

In our final example, we will use the same setup as in Example 2.4, but will double the learning rate. Notice that this causes the algorithm to converge to a different local minimum.

```
Algorithm converged in 18 steps.
Final parameter estimates: [-1.3757, 0.2280]
Optimal value: -12.1776
```

<img src="/images/image-b03f327c-27b3-4f2a-87cd-ba7a8ad9d1b0-1.png" alt="Two-variable gradient descent from the same start: the path moves left and ends in the valley near (&minus;1.4, 0.2)." width="640">

:::image Image description: Two-variable gradient descent, example 2
The left panel is a contour plot of a function of two variables over x and y from about −3 to 3. Blue regions are high values and red regions are low values: the highest peak is near (0, 1.6), smaller peaks are near (1.3, 0) and (−0.5, −0.6), the lowest valley is near (0.3, −1.7), and a smaller valley is near (−1.5, 0.2). The right panel zooms in on the path.

The path starts near (−0.15, 1.3), drops to about (−0.3, 0.5), then moves left and ends at the low point of the valley near (−1.4, 0.2).
:::
