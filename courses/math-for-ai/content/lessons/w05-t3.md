# Week 5: Introduction to optimization

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will provide an introduction to the mathematical field of optimization theory.

## Optimization theory

**Optimization theory** is a field of mathematics that deals with the study of finding sets of inputs that either maximize or minimize the output of a function. In some cases, the inputs are restricted to certain ranges by conditions known as **constraints**. The practice of maximizing or minimizing a function subject to some set of constraints is known as **constrained optimization**. The process of maximizing or minimizing a function when there are no constraints on the inputs is known as **unconstrained optimization**. We will focus our attention on unconstrained optimization in this course.

## Objective functions

The function being maximized or minimized in an optimization problem is known as the **objective function**. There are many other terms that are commonly used to refer to objective functions that also convey whether the goal is to minimize or maximize the value of the objective function. Some of these are provided in the bullet points below.

- An objective function that is to be minimized is often referred to as a **loss function** or a **cost function**.
- An objective function that is to be maximized is often referred to as a **reward function**, a **profit function**, a **utility function**, or a **fitness function**.

Many of these terms are used in different areas of artificial intelligence and machine learning. When training a machine learning model, the standard practice is to define a loss function that measures the performance of the model. Within reinforcement learning, agents are trained to maximize the value of a reward. When working with genetic or evolutionary algorithms, candidate solutions are selected from the population based on the value of a fitness score.

When solving an optimization problem, it is important to understand whether your goal is to minimize or maximize the objective, and it is important to know which type of task will be performed by the programming tools and algorithms you are applying. It is easy to convert between minimization and maximization problems, however. Suppose that $f\left(x\right)$ is an objective function and let $g(x)=-f(x)$. Maximizing the function $f\left(x\right)$ is equivalent to minimizing $g(x)$, and vice versa. This observation allows you to use a tool or technique designed for maximization to calculate the minimum of a loss function, for example. You would simply maximize the negative of the loss.

## Local extrema vs global extrema

Consider a function $f(x)$, where $x$ refers to either a single numerical input or a vector of multiple inputs. A **global maximum** for $f$ is an input $x_{\textrm{MAX}}$ such that $f(x_{\textrm{MAX}})$ is greater than or equal to $f(x)$ for all other valid inputs $x$. A **global minimum** for $f$ is an input $x_{\textrm{MIN}}$ such that $f(x_{\textrm{MIN}})$ is less than or equal to $f(x)$ for all other valid inputs $x$. The collection of global maxima and global minima for a function are referred to as the **global extrema** of the function. It is possible for a function to have multiple global maxima and/or multiple global minima if the extrema of the same type produce the same value for the function.

There is another type of extremum that is important to consider. A **local maximum** for $f$ is an input $x_{\textrm{MAX}}$ such that $f(x_{\textrm{MAX}})$ is greater than or equal to $f(x)$ for all other valid inputs $x$ that are near $x_{\textrm{MAX}}$. Formally, we would say that $x_{\textrm{MAX}}$ is a local maximum for $f$ if there is a region containing $x_{\textrm{MAX}}$ for which $f(x_{\textrm{MAX}})$ maximizes the function for points within the region. Similarly, we define a **local minimum** of $f$ to be an input $x_{\textrm{MIN}}$ such that $f(x_{\textrm{MIN}})$ is less than or equal to $f(x)$ for all other valid inputs $x$ that are near $x_{\textrm{MIN}}$.

All else being equal, we generally prefer global maxima and global minima over their local counterparts. The existence of local extrema for an objective function can sometimes confound the process of finding global extrema. Many commonly used iterative optimization algorithms have a tendency to find a local extremum and then get stuck there. In some cases, this can be a serious problem since the quality of a local extremum can be much worse than that of a global extremum.

The loss functions that are typically used for training neural networks are known to have multiple local minima, and the standard optimization algorithms used to train neural networks cannot be guaranteed to find a global minimum. However, researchers have demonstrated that most local minima for these loss functions produce results that are sufficiently close to those of the global minimum.

Some algorithms are able to make use of loss functions that do not suffer from concerns relating to local minima. For example, the sum of squared errors loss function used for training linear regression models is known to have only a single local minimum, which is also the global minimum.

## Optimization techniques

Optimization theory is a very broad area of mathematics with its own subfields. Many different optimization techniques have been developed. Each of these techniques has its own advantages and disadvantages, and the types of problems to which an algorithm can be applied vary from one algorithm to another. Different techniques are often used for constrained and unconstrained optimization problems. Properties of the function, such as whether or not it is linear or if it is convex, can dictate the types of algorithms that can be applied to the problem. The potential for encountering local extrema, and the severity of the problems they introduce, might influence the techniques applied. In some cases, algebraic or calculus-based techniques might theoretically be able to be applied to a problem to find exact solutions, but these techniques might be costly from a computation perspective. In these cases, we will often need to defer to iterative approximation techniques.

Let's provide an example of this last point. In the lab from Week 3 of this course, you were asked to use techniques from linear algebra to find the parameters that minimize the loss for a linear regression model. That technique always works in theory, but is often computationally infeasible. The matrix operations involved in that calculation scale poorly with the number of inputs, can run very slowly, and have large memory requirements when applied to a problem with very many features. For this reason, it is more common to apply an iterative approach known as **gradient descent** to find the optimal parameters of a linear regression model. We will discuss gradient descent in the next lesson.
