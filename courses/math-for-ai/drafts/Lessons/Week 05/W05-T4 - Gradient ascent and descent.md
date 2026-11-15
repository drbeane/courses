# Week 5: Gradient ascent and descent

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will discuss a pair of calculus-based optimization techniques known as gradient ascent and gradient descent.

## Gradient ascent

Let $f\left(x\right)$ be a function of one or more variables. In the case that $f$ is a multi-variable function, we will assume that the input $x$ represents a vector of input values as a notational convenience. Recall that the gradient of $f\left(x\right)$, denoted by $\nabla f\left(x\right)$, is a vector that points in the direction of the steepest increase in the value of the function $f$ from the set of input values represented by the vector $x$. This observation provides the motivation for an optimization algorithm known as gradient ascent. The **gradient ascent** algorithm attempts to find a local maximum of a function by taking multiple small steps in the direction of the gradient. After each step, the gradient is recalculated, and another step is taken in the direction of the new gradient.

Like all derivatives, gradients contain **local information**, meaning that they describe some aspect of how the function behaves when making **small** changes to the inputs. If we were to take a large step in the direction of the gradient, there is no guarantee that the value of the function would increase as a result of that change in the inputs. When applying gradient ascent, we want to control the size of the step taken with each iteration. The most common way of doing this is through the use of a learning rate. A **learning rate** is a small constant that we use to scale the gradient vector $\nabla f\left(x\right)$ when making an update to our input vector. Learning rates are often denoted by the Greek letter $\alpha$. We will adopt that convention in this course.

The steps in the gradient ascent algorithm can be described as follows:

1. Initialize the estimate $x$ with some values. These can be manually, randomly, or arbitrarily selected.
2. Calculate the gradient $\nabla f\left(x\right)$ for the current value of $x$.
3. Update the estimate using the following update rule: $x \leftarrow x + \alpha \cdot \nabla f(x)$
4. Repeat steps 2 and 3 for a fixed number of iterations or until some stopping criterion is met.

One common stopping condition is to end the gradient ascent loop when:

1. the difference in the value of $f\left(x\right)$ in two successive iterations falls below some threshold, and
2. the absolute value of every term in the current gradient is also below some threshold.

## Gradient descent

Although gradient ascent is used specifically for maximization, there is an analogue that can be used for minimization. The **gradient descent** algorithm is a minimization algorithm that attempts to find a local minimum of a function by taking multiple small steps in the direction opposite of the gradient. The process for applying gradient descent is identical to that of gradient ascent, except that the gradient is negated when making a parameter update. The update rule for gradient descent is shown below.

$$x \leftarrow x - \alpha \cdot \nabla f(x)$$

## Gradient descent and machine learning

The gradient descent algorithm is frequently used when training machine learning models. Recall that the goal of a supervised learning problem is to find the model parameters that minimize the value of the loss function for the training set. In some cases, as we have already seen, these optimal parameter values can be calculated algebraically, perhaps by using tools from linear algebra. However, this is not always possible, and even when it is possible, these algebraic approaches are often computationally infeasible. The gradient descent algorithm (or at least algorithms based upon gradient descent) tends to perform well on these types of problems. Gradient descent is the standard algorithm for training neural networks, which we will discuss briefly at the end of this week.

## Gradient optimization function

For convenience, a Python function named `gradient_optimization()` has been provided for you in this course. This function can be used to perform either gradient ascent or gradient descent. We will demonstrate the usage of the function in the next lesson.

## Additional resources

The following video provides a description of gradient descent with a lot of great visualizations.

<div class="video"><iframe src="https://www.youtube.com/embed/fXQXE96r4AY" title="Introduction to Gradient Descent | Dr. Trefor Bazett" loading="lazy" allowfullscreen></iframe></div>

Dr. Trefor Bazett (2023). *Introduction to Gradient Descent* \[Video File\]. Retrieved from YouTube.
