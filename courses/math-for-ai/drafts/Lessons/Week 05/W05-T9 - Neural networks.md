# Week 5: Neural networks

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will describe the basic structure of a neural network model.

## Artificial neural networks

An **artificial neural network**, or **ANN**, is a machine learning model that consists of several artificial neurons arranged into some number of layers. The layers of a neural network are processed sequentially, and the output of nodes in one layer will be the input for nodes in the next layer. The layers in the type of ANN that we will study are **densely connected**, meaning that every node in one layer is connected to every node in the following layer.

There are three types of layers in an ANN: The input layer, one or more hidden layers, and an output layer.

- The first layer, called the **input layer**, consists of the features being fed into the model. It contains one node for each feature being used, plus a single bias node.
- The output of each node in the input layer is sent to each (non-bias) node in the first **hidden layer**. Every connection between any pair of nodes in these two layers will have its own weight. Each node in the first hidden layer processes the inputs it receives from the input layer and sends its outputs downstream to the next hidden layer. The nodes in the later hidden layers also process their inputs and send their outputs to the next layer.
- The last hidden layer will send its output to an **output layer**. This output layer contains one or more neurons whose values provide the output of the network. The number of nodes in the output layer, and hence the number of outputs for the network, depends on the type of task that the network is being used for.

We can build a neural network with as many hidden layers as we wish, and each hidden layer can have as many nodes as we would like. As a general rule, the more neurons there are in a model, the more flexible that model is.

## Simple example

The diagram below illustrates a very small neural network. This network has three inputs, labeled $x_0$, $x_1$, and $x_2$. It contains two hidden layers, the first of which contains 5 nodes and the second of which contains 4 nodes. The output layer for this network contains 3 nodes.

Each non-input node in the network receives inputs from every node in the previous layer, and also has its own bias term. The bias terms are not shown in the diagram to reduce visual clutter. As described in the previous lesson, each node processes its inputs by calculating a weighted sum of the inputs, adding a bias term, and then applying an activation function.

<img src="/images/image-275628ef-2419-449d-bc92-3e64368a550d.png" alt="Diagram of a neural network with an input layer of 3 nodes, two hidden layers of 5 and 4 nodes, and an output layer of 3 nodes, with every node connected to every node in the next layer.">

:::image Image description: Simple neural network
From left to right: the Input Layer has three nodes labeled x<sub>0</sub>, x<sub>1</sub>, and x<sub>2</sub>; Hidden Layer 1 has five nodes; Hidden Layer 2 has four nodes; and the Output Layer has three nodes with arrows labeled Output 0, Output 1, and Output 2. Lines connect every node in each layer to every node in the next layer.
:::

## Model architecture and weights

A neural network is defined by two important characteristics: its architecture and its parameters.

- The **model architecture** specifies structural aspects of the network, such as how many layers there are, how many nodes there are in each layer, and the type of activation functions used for the nodes.
- The **model parameters** determine how nodes process their inputs. There are two types of parameters: the **weights** and the **biases**. The weights determine the strength of the connections between pairs of nodes, and thus determine how each node aggregates its inputs. Each node also has its own bias term that is added to the weighted sum of the inputs before the activation function is applied.

The architecture of a neural network is typically specified by the person or entity designing it, and the weights are then learned during training. We will discuss the training process for a neural network in a later lesson.

The weights of a neural network are associated with connections between nodes in adjacent layers. However, since these weights are used to calculate the output values for nodes in the latter of the two layers, we tend to think of weights as belonging to the layer that they are feeding into. To better understand the parameters of a neural network, let's determine the number of weights and biases in each of the non-input layers in the example above.

- **The first hidden layer contains 15 weights and 5 bias terms.** Each of the 3 nodes in the input layer is connected with each of the 5 nodes in the first hidden layer, resulting in a total of 15 connections or weights. Each of the 5 nodes in the first hidden layer also has its own bias term.
- **The second hidden layer contains 20 weights and 4 bias terms.** Each of the 5 nodes in the first hidden layer is connected with each of the 4 nodes in the second hidden layer, resulting in a total of 20 connections or weights. Each of the 4 nodes in the second hidden layer also has its own bias term.
- **The output layer contains 12 weights and 3 bias terms.** Each of the 4 nodes in the last hidden layer is connected with each of the 3 nodes in the output layer, resulting in a total of 12 connections or weights. Each of the 3 nodes in the output layer also has its own bias term.

This neural network model has a total of 59 parameters, consisting of 47 weights and 12 bias terms.

## How large are real networks?

The network in this example has 59 parameters. The networks used in practice are far larger. An image classification network commonly has tens of millions of parameters, and a current large language model has billions or even hundreds of billions.

The size is the only thing that changes. A network with a billion parameters is still made of layers, and each layer still has a weight matrix and a bias vector. Its output is calculated with the same formulas that we will present in the next lesson, and it is trained with the same algorithm that we will discuss at the end of this week. The matrices are simply much larger, and there are many more of them.

## Matrices and parameters

We can use matrices and vectors to concisely describe the parameters of a neural network. Each non-input layer will have a weight matrix and a bias vector associated with it. Suppose that a given layer contains $N$ nodes, and that the layer feeding into it contains $M$ nodes. The **weight matrix** for the given layer will have a shape of $M\times N$. The weights in a given column of a weight matrix will be used to calculate the value of a single node in the layer. The **bias vector** will be a vector with length $N$. It will contain one bias term for each of the $N$ nodes in the layer. Let's consider how this works for the example above, while also establishing some notation that we will refer back to in the next lesson.

- The first hidden layer has a 3x5 weight matrix $W_1$ and a 5-element bias vector $b_1$.
- The second hidden layer has a 5x4 weight matrix $W_2$ and a 4-element bias vector $b_2$.
- The output layer has a 4x3 weight matrix $W_3$ and a 3-element bias vector $b_3$.

> In the next lesson, we will take a closer look at the activation functions used for a neural network and will also explain how tools from linear algebra can be used to calculate the output of a neural network.
