# Week 5: Artificial neurons

**MATH 309/509 Math for AI** · Calculus and optimization

In the remaining lessons this week, we will provide an introduction to the field of deep learning. In this lesson, we will begin by introducing the building block of deep learning models: the artificial neuron.

## Introduction to neurons and neural networks

**Neurons** are nerve cells that serve as the primary component of the central nervous system. Neurons receive signals from sensory organs and other neurons, process that information, and then send a signal to other neurons to which they are connected. Thoughts, memories, and sensations are all represented in the brain as specific groups of neurons being activated.

A **neural network** is a class of machine learning models that is inspired by the biological networks of neurons that compose animal brains. In order to understand neural networks, we first need to understand their building blocks, which are **artificial neurons**.

<img src="/images/structure-of-a-neuron.png" alt="Labeled diagram of the structure of a biological neuron.">

Source: BYJU'S

:::image Image description: Structure of a neuron
A drawing of a neuron titled "Structure of Neuron." On the left, the cell body (soma) contains the nucleus and has branching dendrites around it. A long axon extends to the right, wrapped in segments of myelin sheath formed by Schwann cells, and ends in branching nerve endings.
:::

## Artificial neurons

An **artificial neuron** is a function that accepts some number of inputs and then produces an output by following the steps below:

1. A weighted sum of the inputs is calculated, and a fixed constant (known as the **bias term**) is added to that.
2. A single-variable function is applied to the results of step 1 to produce the output of the artificial neuron. This single-variable function is known as the **activation function**.

The activation function for an artificial neuron can be thought of as a function that looks at the aggregated inputs and then determines if the neuron should fire and, if so, how strong its signal should be. Activation functions are almost always chosen to be non-linear functions.

The diagram below illustrates the structure of an artificial neuron with three inputs, denoted as $x_0$, $x_1$, and $x_2$. The weights for the inputs are denoted as $w_0$, $w_1$, and $w_2$ and the bias term is denoted by $b$. We are denoting the weighted sum of the inputs as $z$, and the output of the activation function is denoted by $a(z)$.

<img src="/images/image-963b323b-37d7-4a7a-aee8-1e6de0f347d2.png" alt="Diagram of an artificial neuron: a bias input and three inputs, each with a weight, feed a node that sums them and applies an activation function." width="400">

:::image Image description: Artificial neuron
Four input nodes on the left are labeled +1, x<sub>0</sub>, x<sub>1</sub>, and x<sub>2</sub>. The connection from +1 is labeled b (the bias), and the connections from x<sub>0</sub>, x<sub>1</sub>, and x<sub>2</sub> are labeled with weights w<sub>0</sub>, w<sub>1</sub>, and w<sub>2</sub>. All four connections meet at a node marked Σ | a, which sums the weighted inputs and applies the activation function a. An arrow leads from that node to "output."

Two equations appear above the diagram: z = b + Σ(w<sub>i</sub> · x<sub>i</sub>), and output = a(z).
:::

## Linear algebra and artificial neurons

We can use linear algebra to concisely represent the output of an artificial neuron. To do so, we will collect all of the inputs of the neuron into a single vector $x$ and will collect the weights into a vector $w$. Then, the weighted sum of the inputs is simply the dot product of the vectors $x$ and $w$. We can then add the bias term $b$ and apply the activation function $a$. This process is summarized by the formula below.

$$\textrm{output} = a \left(w \cdot x + b \right)$$

## Activation functions

As mentioned above, activation functions are typically chosen to be non-linear functions. There is a wide range of specialized activation functions that are each used for specific applications. Two of the most important activation functions are the **sigmoid** activation function and the **ReLU** (or rectified linear unit) activation function. We will denote the sigmoid function as $\sigma(x)$ and will denote the ReLU function as $\textrm{ReLU}(x)$.

Formulas for these functions are provided below.

$$\sigma(x) = \frac{e^x}{1+e^x} = \frac{1}{1 + e^{-x}}$$

$$\textrm{ReLU}(x) = \max(0, x)$$

Recall that we discussed Python implementations of the ReLU function in a previous lesson. The figure below displays a graph of each of these activation functions.

<img src="/images/activation-function.png" alt="Two graphs: the sigmoid activation function, an S-shaped curve from 0 to 1, and the ReLU activation function, which is 0 for negative inputs and rises linearly for positive inputs.">

:::image Image description: Activation functions
- **Sigmoid Activation Function:** x from −10 to 10, y from 0 to 1. The curve stays near 0 for large negative x, rises steeply through 0.5 at x = 0, and levels off near 1 for large positive x. Dotted red lines mark y = 0 and y = 1.
- **ReLU Activation Function:** x from −10 to 10, y from 0 to 10. The line is flat at y = 0 for all negative x, then rises in a straight line from (0, 0) to (10, 10).
:::
