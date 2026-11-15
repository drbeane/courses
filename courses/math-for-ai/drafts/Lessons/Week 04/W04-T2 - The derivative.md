# Week 4: The derivative

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will introduce the concept of the derivative. The tools from calculus in which we are the most interested are all related to this concept.

## The derivative

The **derivative** is a fundamental concept in calculus. It is a tool for measuring the rate of change of a function at a particular point. In simple terms, it tells us how the output of a function changes as the input of the function changes, specifically when the input changes very slightly.

Before discussing the meaning of the derivative further, let's establish some notation. Consider a function $f(x)$ with a single input, $x$. The derivative of $f(x)$ is another function of $x$ and is denoted by $f'(x)$. There are other ways of denoting a derivative, each of which has its own advantages and disadvantages. One other commonly used notation for the derivative is $\frac{d}{dx} f(x)$. This notation is often used to indicate that the **differentiation operation** $\frac{d}{dx}$ is being applied to a function.

## Derivatives and rates of change

One application of derivatives is describing rates of change. Suppose that $f(x)$ tells you the value or amount of something for a certain value of the input $x$. Then the derivative $f'(x)$ tells you the rate at which $f(x)$ changes in response to the input $x$. Since $f'(x)$ is itself a function of $x$, it can be used in the calculation of the rate of change for any possible value of $x$.

Let's consider an example. Suppose that a ball is launched upward with a velocity of 128 feet per second. Results from physics allow us to develop the following formula for the height of the ball above ground (measured in feet) $t$ seconds after being launched.

$$h\left(t\right)= 128t-16t^2$$

Differentiation rules that we will discuss later lead us to the following formula for the derivative.

$$h'\left(t\right)= 128 - 32 t$$

The derivative $h'\left(t\right)$ tells us the speed or velocity of the ball, in feet per second, after $t$ seconds. For example, when the ball is launched, its initial velocity is $h'\left( 0\right)= 128$. At 1 second after the ball is launched, its velocity is given by $h'\left( 1\right)= 96$. And 6.25 seconds after being launched, the ball will have a velocity of $h'\left( 6.25\right)= -72$. The negative sign in the last velocity we calculated indicates that the ball is now moving downward.

## Derivatives and slope

The derivative can also have a geometric interpretation. In particular, it gives the slope of the line tangent to the curve at a particular point. To explain this more carefully, suppose that $y=f(x)$ is the graph of a function and assume that $(x_0, y_0)$ is a point along the curve. This is equivalent to stating that $y_0 = f(x_0)$. If the curve is smooth and continuous at the point $(x_0, y_0)$, then it has a **tangent line** at that point. In other words, there is a line that passes through the point $(x_0, y_0)$ and that has the same slope as the curve at that point.

The slope of the tangent line can be found by plugging the x-coordinate of the point into the derivative. That is to say that the slope $m$ of the tangent line is given by $m = f'(x_0)$.

The sign of the derivative provides us with important information about the behavior of the function at specific values of the input. If $f'(x_0)$ is positive, then $f(x)$ is increasing at $x =x_0$. If $f'(x_0)$ is negative, then $f(x)$ is decreasing at $x =x_0$. If $f'(x_0) = 0$, then the tangent line is horizontal at that point, indicating that $x_0$ is a candidate for a local minimum or maximum of the function. We will discuss minima and maxima, as well as their relationship with the derivative, in a later lesson.

<img src="/images/image-1.png" alt="A curve with its tangent line touching it at the point (2, 1.5)." width="320">

:::image Image description: Tangent line
A red curve rises, turns down, reaches a low point, then rises steeply again. A straight blue line touches the curve at the highlighted point (2, 1.5), near the curve’s low point, showing the tangent line there. The slope of that line is the derivative of the function at x = 2.
:::

## Additional resources

If you are interested in learning more about the derivative, you can watch the following video from 3Blue1Brown.

<div class="video"><iframe src="https://www.youtube.com/embed/9vKqVkMQHKk" title="The paradox of the derivative | Chapter 2, Essence of calculus" loading="lazy" allowfullscreen></iframe></div>

3Blue1Brown (2017). *The paradox of the derivative | Chapter 2, Essence of calculus* \[Video File\]. Retrieved from YouTube.
