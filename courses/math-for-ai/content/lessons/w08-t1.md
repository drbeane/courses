# Week 8: Continuous random variables

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss continuous random variables. We will introduce several tools for working with and describing random variables of this type.

## Probability density functions

A random variable is said to be **continuous** if its support contains a (possibly infinite) interval. In order to provide a more precise definition of a continuous random variable, we must introduce the concept of a **probability density function**, or **PDF**. We provide this definition in the callout below.

**Definition:** A real-valued function $f\left(x\right)$ is said to be a **probability density function (PDF)** for a random variable $X$ if it satisfies the following two properties:

1. $f\left(x\right)\ge0$ for all real numbers $x$.
2. The total area beneath the curve $y=f\left(x\right)$ is equal to 1.

The second criterion above can be stated as follows: $\int_{-\infty}^{\infty\:}f\left(x\right)dx=1$. This formula makes use of the concept of an integral from calculus. If you are not familiar with this concept, that is alright. Integrals are not covered in this course, and you are not required to use them. This alternate formulation is just provided for the benefit of those who have knowledge of integrals.

A probability density function is an essential tool for working with a continuous random variable. PDFs have many applications, but their primary purpose is to provide a mechanism for calculating probabilities relating to the corresponding random variable. This is explained in more detail below.

## Calculating probabilities

Suppose that $X$ is a continuous random variable with probability density function given by $f\left(x\right)$. If $a$ and $b$ are any two real numbers such that $a<b$, then $P\left[a\le X\le b\right]$ is equal to the area under the curve $y=f\left(x\right)$ between $x=a$ and $x=b$.

As an example, the plot of a PDF for a random variable with support $\left[ 0, \infty \right)$ is shown below. The PDF in question is given by the formula $f\left(x\right) = x e^{-x}$. The area of the shaded region represents the probability $P\left[2\le X\le 4\right]$.

<img src="/images/image-0d56112b-e906-4d08-9f69-3cb3a2d142af.png" alt="Graph of a probability density function y = f(x) with the area under the curve between x = 2 and x = 4 shaded." width="500">

:::image Image description: Calculating probabilities
The x-axis runs from 0 to 6 and the y-axis from 0 to 0.5. The curve starts at 0, rises to a peak of about 0.37 at x = 1, then decreases gradually toward 0 as x approaches 6. The region under the curve from x = 2 to x = 4 is shaded, representing the probability that x falls between 2 and 4.
:::

## Expected value and standard deviation

We previously defined the concepts of expected value and standard deviation for discrete random variables. Similar concepts exist for continuous random variables, but their calculation typically requires the use of integral calculus, which is not covered in this course. For those who are familiar with integral calculus, the formulas for these concepts are provided in the callout below.

**Expected value and variance.** Suppose that $X$ is a continuous random variable with probability density function given by $f\left(x\right)$. The expected value $E[X]$ and variance $\textrm{Var}[X]$ of $X$ can be calculated using the formulas below.

$$\mu = \large E[X] = \int_{-\infty}^{\infty} x \cdot f(x) dx$$

$$E\left[X^2 \right] = \int_{-\infty}^{\infty} x^2 \cdot f(x) dx$$

$$\sigma^2 = \textrm{Var}[X] = E\left[ X^2 \right] - \mu^2$$

You will not be required to use the formulas above in this course. But you should nevertheless have an intuitive understanding of what these concepts represent. In particular, the **expected value (or mean)** of a random variable represents the average value that we might expect a random variable to take on. The **variance** measures the spread, variability, or dispersion of the random variable. Intuitively, if a random variable has a large variance then we would expect observations of the random variable to vary significantly from the mean (on average). As with discrete random variables, we will often work with the **standard deviation** of a continuous random variable, which is calculated by taking the square root of the variance.

## Simulation and continuous random variables

In some cases, we can calculate the probabilities and descriptive statistics using basic geometric or algebraic techniques. In most cases, however, calculus techniques are required in order to calculate true values for these quantities. In this class, we will make use of technology in order to perform calculations related to continuous random variables. In particular, we will use simulation tools provided by NumPy to generate samples of continuous random variables and then use these samples to estimate probabilities and descriptive statistics, exactly as was done in Week 7.
