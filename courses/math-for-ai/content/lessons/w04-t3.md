# Week 4: Differentiation formulas

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will introduce some commonly used differentiation formulas.

## Differentiation formulas

There are several differentiation formulas that can be used to calculate the derivative of a function. The exact nature of the function being differentiated determines which formula or formulas should be applied. We will present some of the most common such formulas in this lesson. Note that these formulas are provided mostly for context. You will not need to calculate any derivatives by hand in this course and will instead use a Python library called SymPy for calculating derivatives.

Being able to apply differentiation formulas to calculate derivatives is certainly a worthwhile skill for a data scientist to have, but it isn't strictly necessary. The most common use case for a derivative in machine learning and artificial intelligence is to perform optimization when training a model. The Python tools that are most commonly used for this sort of task will typically calculate derivatives for us behind the scenes.

## The constant rule

The most basic differentiation formula is the **constant rule**. This formula states that the derivative of a constant is always zero.

**The Constant Rule.** Let $c$ be any constant. Then $\frac{d}{dx} \left( c \right) = 0$.

## The power rule

The **power rule** is used to differentiate variables raised to a constant power. The rule is formally stated in the callout below.

**The Power Rule.** Let $a$ and $n$ be any numbers such that $n\neq 0$. Then $\frac{d}{dx} \left( a \cdot x^n \right) = a\cdot n \cdot x^{n-1}$.

We will provide a few examples of applications of the power rule below.

$$\frac{d}{dx} \left( 3 x^7 \right) = 21 x^6$$

$$\frac{d}{dx} \left( \frac{1}{x^2} \right) = \frac{d}{dx} \left( x^{-2} \right) = -2 x^{-3} = \frac{-2}{x^3}$$

$$\frac{d}{dx} \left( \sqrt{x} \right) = \frac{d}{dx} \left( x^{1/2} \right) = \frac{1}{2} x^{-1/2} = \frac{1}{2 \sqrt{x}}$$

## Exponentials and logarithms

Exponential functions and their counterparts, logarithmic functions, are frequently encountered in data science. The callout below provides differentiation formulas for the natural exponential function and the natural logarithmic function.

**Derivatives of Natural Exponential and Natural Logarithmic Functions.** The derivatives of the functions $\textrm{exp}(x) = e^x$ and $\textrm{ln}(x)$ are as follows: $\frac{d}{dx} \left( e^x \right) = e^x$ and $\frac{d}{dx} \left[ \textrm{ln}(x) \right] = \frac{1}{x}$.

## The sum rule

As the name implies, the **sum rule** is a differentiation formula that can be used to calculate the derivative of a sum of two functions. Informally, the sum rule states that the derivative of a sum of functions is the sum of the derivatives. This rule is stated formally below.

**The Sum Rule.** If $f(x)$ and $g(x)$ are differentiable functions, then $\frac{d}{dx}\left[ f(x) + g(x) \right] = f'(x) + g'(x)$.

The sum rule can be used in conjunction with the power rule to differentiate any polynomial function. This is demonstrated in the example below.

$$\frac{d}{dx} \left( 2 x^ 3 + 5 x^2 - 3 x + 9 \right) = 6 x^2 + 10 x - 3$$

## The product rule

The **product rule** is used to calculate the derivative of products of functions. Unfortunately, this rule is not as intuitive as the sum rule.

**The Product Rule.** If $f(x)$ and $g(x)$ are differentiable functions, then $\frac{d}{dx}\left[ f(x) \cdot g(x) \right] = f'(x) \cdot g(x) + f(x)\cdot g'(x)$.

An example of an application of the product rule is provided below.

$$\frac{d}{dx} \left[ x^ 3 \cdot \mathrm{ln}(x) \right] = 3 x ^2 \cdot \textrm{ln}(x) + x^3 \cdot \frac{1}{x} = 3 x ^2 \cdot \textrm{ln}(x) + x^2$$

## The chain rule

The **chain rule** is used to differentiate composite (or nested) functions. This rule is used extensively in the development of weight update formulas used to train neural networks.

**The Chain Rule.** If $f(x)$ and $g(x)$ are differentiable functions, then $\frac{d}{dx}\left[ f(g(x)) \right] = f'(g(x))\cdot g'(x)$.

Two examples of the chain rule are provided below.

$$\frac{d}{dx} \left[ \left(2x + 7 \right)^5 \right] = 5\cdot \left( 2x + 7 \right)^4 \cdot 2 = 10 \cdot \left( 2x + 7 \right)^4$$

$$\frac{d}{dx} \left[ \textrm{ln}\left(x^2 + 1 \right) \right] = \frac{1 }{x^2 + 1} \cdot 2 x = \frac{2x }{x^2 + 1}$$

## Example: The derivative of the sigmoid function

The **sigmoid function**, defined below, is one of the most important functions in machine learning. We will use it in Week 5 as part of a neural network and in Week 8 to build a classification model.

$$\sigma(x) = \frac{1}{1 + e^{-x}}$$

To differentiate it, we write the function as $\left(1 + e^{-x} \right)^{-1}$ and apply the chain rule twice: once for the power of $-1$ and once for the exponent $-x$.

$$\sigma'(x) = -1 \cdot \left(1 + e^{-x} \right)^{-2} \cdot \left( -e^{-x} \right) = \frac{e^{-x}}{\left(1 + e^{-x} \right)^2}$$

With a little algebra, this result can be written in terms of the sigmoid function itself.

$$\sigma'(x) = \sigma(x) \cdot \left(1 - \sigma(x) \right)$$

This compact formula is one reason the sigmoid function was adopted so widely: once the value of the function is known, its derivative requires almost no extra work.

The formula also reveals a weakness. The value of $\sigma(x)$ is always between 0 and 1, so the derivative is never larger than $0.25$, which is its value at $x = 0$. For inputs far from 0, the derivative is close to 0. For example, $\sigma'(5) \approx 0.0066$ and $\sigma'(10) \approx 0.000045$. As we will see in Week 5, a neural network learns by using derivatives to decide how to change its parameters. Where the derivative is nearly 0, learning nearly stops. This is known as the **vanishing gradient problem**, and it is one reason most modern networks use the ReLU function in place of the sigmoid function.

## Additional resources

The following video from 3Blue1Brown derives differentiation formulas for a few simple functions.

<div class="video"><iframe src="https://www.youtube.com/embed/S0_qX4VJhMQ" title="Derivative formulas through geometry | Chapter 3, Essence of calculus" loading="lazy" allowfullscreen></iframe></div>

3Blue1Brown (2017). *Derivative formulas through geometry | Chapter 3, Essence of calculus* \[Video File\]. Retrieved from YouTube.

The next video from 3Blue1Brown discusses the sum, product, and chain rules.

<div class="video"><iframe src="https://www.youtube.com/embed/YG15m2VwSjA" title="Visualizing the chain rule and product rule | Chapter 4, Essence of calculus" loading="lazy" allowfullscreen></iframe></div>

3Blue1Brown (2017). *Visualizing the chain rule and product rule | Chapter 4, Essence of calculus* \[Video File\]. Retrieved from YouTube.
