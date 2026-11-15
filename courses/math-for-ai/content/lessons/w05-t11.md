# Week 5: Backpropagation

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will discuss how a neural network is trained using an algorithm known as backpropagation.

## Gradient descent and neural networks

The gradient descent algorithm is frequently used to train supervised learning models and is the standard method of training neural networks. Conceptually, the process of applying gradient descent to train a neural network model is relatively simple to understand. We will walk through that process now.

Suppose that $\theta$ is a vector that contains all of the parameters of a neural network model. The elements of this vector would include all of the weight and bias terms for every layer in the neural network. The goal during training is to find the specific set of parameter values that will minimize some loss function calculated on the training set. The loss is calculated by comparing the output of the model with the correct target values for the training observations. Since the training set is fixed and the model output depends on the parameters of the model, we can think of the loss as a function of the parameters $\theta$. The loss function for a machine learning model is often denoted by $J(\theta)$.

Since $J(\theta)$ is a function of $\theta$, we can (at least in theory) calculate its gradient with respect to the parameters in $\theta$. We will denote this gradient by $\nabla_{\theta}J(\theta)$. If we can calculate the gradient $\nabla_{\theta}J(\theta)$ for the current parameter values, then we can use gradient descent to train a neural network model. The process is summarized as follows:

1. Initialize the starting parameters $\theta = \theta_0$ in some way. This initialization is usually random, but other initialization strategies can also be used.
2. Repeat the steps below until some stopping criterion has been met. This stopping criterion could be based on a fixed number of iterations, or perhaps on some performance measure.

   1. Calculate the gradient of the loss $\nabla_{\theta}J(\theta)$ using the current parameter values and the training observations.
   2. Perform a weight update using the following update rule: $\theta \leftarrow \theta - \alpha \cdot \nabla_{\theta}J(\theta)$

The constant $\alpha$ appearing in the update rule above is the learning rate.

## Calculating the gradient

To perform gradient descent, we must obviously be able to calculate the gradient. In the examples we provided of gradient ascent and gradient descent this week, we used SymPy to symbolically calculate the gradient and then simply plugged in the new parameter values at each new step of the algorithm. Note that this did not require us to evaluate the function itself at each step of the algorithm. We were able to obtain a formula for the gradient, and were able to plug parameter values directly into that formula.

However, the parameter vector $\theta$ for a neural network might contain thousands or even millions of parameters, and the loss function $J(\theta)$ will likely be quite complicated. Because of this, it is rarely feasible to write out the loss function, much less to calculate its gradient symbolically, even when using a tool such as SymPy.

Fortunately, there is a technique known as **automatic differentiation** or **auto-differentiation** that allows for the differentiation of complex functions. We will not go into the details of auto-differentiation as it is fairly complicated. But the technique essentially works by collecting information about the derivatives of the individual components involved in a calculation, and then using tools such as the chain rule, sum rule, and product rule for differentiation to combine these small pieces of derivative information to construct the values for all partial derivatives of the function. In short, auto-differentiation tracks information collected while the function is being evaluated and uses that information to calculate the partial derivatives. Automatic differentiation saves us from needing to be able to symbolically represent or differentiate the loss function for a neural network, and is able to calculate exact values for gradients (as opposed to approximations). Auto-differentiation is a general technique for calculating derivatives, but calculating gradients for the purposes of training a neural network model is one of its most important applications. The implementation of auto-differentiation for neural network models is known as **backpropagation**.

If using auto-differentiation to calculate gradients of the loss for a neural network, we would need to start each weight update by calculating the actual loss $J(\theta)$, keeping track of the needed derivative information. This is referred to as the **forward pass** in the training step. After the forward pass is complete, we can calculate the gradient $\nabla_{\theta}J(\theta)$ and then apply the update rule $\theta \leftarrow \theta - \alpha \cdot \nabla_{\theta}J(\theta)$.

Every major library used for training neural networks (such as PyTorch, TensorFlow, and Keras) has tools for automatic differentiation built into it. As a result, it is not likely a process that you would ever need to implement yourself, but it is important to have an understanding of how these tools work under the hood when you work with them.

## A worked example

To make the ideas above concrete, we will calculate the gradient by hand for the smallest possible network: one input, one hidden node, and one output node, with no bias terms. The hidden node uses the sigmoid activation function, and the output node uses no activation function. The network has two parameters, $w_1$ and $w_2$, and calculates its output in three steps.

$$z = w_1 x \qquad a = \sigma(z) \qquad \hat y = w_2 a$$

For a single training observation $(x, y)$, we will use the squared error as the loss.

$$J = \left( \hat y - y \right)^2$$

Suppose that the observation is $x = 2$, $y = 1$, and that the current parameter values are $w_1 = 0.5$ and $w_2 = 1.5$.

**The forward pass.** We calculate each quantity in order, keeping every intermediate value.

$$z = 0.5 \cdot 2 = 1 \qquad a = \sigma(1) = 0.7311 \qquad \hat y = 1.5 \cdot 0.7311 = 1.0966 \qquad J = \left(1.0966 - 1 \right)^2 = 0.0093$$

**The backward pass.** We now work backward from the loss, applying the chain rule at each step. Each line uses the result of the line before it.

- The loss depends on the prediction: $\frac{\partial J}{\partial \hat y} = 2 \left( \hat y - y \right) = 0.1932$
- The prediction depends on $w_2$: $\frac{\partial J}{\partial w_2} = \frac{\partial J}{\partial \hat y} \cdot a = 0.1932 \cdot 0.7311 = 0.1412$
- The prediction depends on $a$: $\frac{\partial J}{\partial a} = \frac{\partial J}{\partial \hat y} \cdot w_2 = 0.1932 \cdot 1.5 = 0.2898$
- The value $a$ depends on $z$ through the sigmoid function, whose derivative is $\sigma(z) \left(1 - \sigma(z)\right)$: $\frac{\partial a}{\partial z} = 0.7311 \cdot 0.2689 = 0.1966$
- The value $z$ depends on $w_1$: $\frac{\partial J}{\partial w_1} = \frac{\partial J}{\partial a} \cdot \frac{\partial a}{\partial z} \cdot x = 0.2898 \cdot 0.1966 \cdot 2 = 0.1139$

The gradient is $\nabla J = \left[0.1139, ~0.1412 \right]$. Notice that the value $\frac{\partial J}{\partial \hat y}$ was calculated once and then reused for both parameters, and that the values $a$ and $z$ saved during the forward pass were needed during the backward pass. Reusing work in this way is what makes backpropagation efficient. The gradient for a network with billions of parameters costs only about as much to calculate as a few forward passes.

**The update.** With a learning rate of $\alpha = 0.5$, the gradient descent update gives the new parameter values below.

$$w_1 \leftarrow 0.5 - 0.5 \cdot 0.1139 = 0.4430 \qquad w_2 \leftarrow 1.5 - 0.5 \cdot 0.1412 = 1.4294$$

With the new parameters, the prediction for this observation becomes $1.0121$ and the loss falls from $0.0093$ to $0.0001$. One step of gradient descent has moved the prediction closer to the target value of 1.

## Additional resources

The following video from 3Blue1Brown provides a good introduction to neural networks and how they are trained.

<div class="video"><iframe src="https://www.youtube.com/embed/IHZwWFHWa-w" title="Gradient Descent, How Neural Networks Learn | 3Blue1Brown" loading="lazy" allowfullscreen></iframe></div>

3Blue1Brown (2017). *Gradient Descent, How Neural Networks Learn* \[Video File\]. Retrieved from YouTube.

The next video is a sequel to the previous one and delves more deeply into the details of backpropagation.

<div class="video"><iframe src="https://www.youtube.com/embed/Ilg3gGewQ5U" title="What is Backpropagation Really Doing? | 3Blue1Brown" loading="lazy" allowfullscreen></iframe></div>

3Blue1Brown (2017). *What is Backpropagation Really Doing?* \[Video File\]. Retrieved from YouTube.

Lastly, the video below from Ari Seff provides a clear explanation of automatic differentiation.

<div class="video"><iframe src="https://www.youtube.com/embed/wG_nF1awSSY" title="What is Automatic Differentiation? | Ari Seff" loading="lazy" allowfullscreen></iframe></div>

Ari Seff (2020). *What is Automatic Differentiation* \[Video File\]. Retrieved from YouTube.
