# Week 5: Calculating the output of a neural network

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will take a closer look at the activation functions used for a neural network and will also explain how tools from linear algebra can be used to calculate the output of a neural network.

## Activation functions

We will now take a closer look at the activation functions used for the nodes in a neural network. The activation function to use for nodes in the output layer is often determined by the specific application we are developing the neural network for. We will consider one specific use case, and the corresponding activation function, momentarily.

The designer of a neural network has a lot more flexibility when it comes to selecting the activation functions for the nodes in the hidden layers. It is possible to get very creative in mixing and matching activation functions to engineer something very specific for the problem at hand. That said, the most common approach, and the one that we will use, is to simply use the ReLU activation function for each node in a hidden layer.

## Classification problems

We will now consider a common application for neural networks. A **classification** **problem** in machine learning is a problem in which observations are grouped into different groups, which are typically referred to as **classes**, or **labels**. The goal of a classification problem is to create a model that can make predictions about the class an observation falls into based on measurements for other aspects of the observation.

When using a neural network to perform classification, the output layer should contain a number of nodes equal to the number of classes in the classification problem. Each node should be associated with a specific class. The outputs of the network should generate a **probability distribution** over the available classes. That is to say that each output value should be viewed as the network's estimate of the probability that the observation belongs to the associated class.

As an example, assume that there are four classes in a classification problem, which we will refer to as Class 0, Class 1, Class 2, and Class 3. Suppose that a neural network has been trained for this problem and that the network produces the following output vector for a given observation:

`[0.23, 0.07, 0.42, 0.28]`

The network estimates that there is a 23% chance that the observation belongs to Class 0, a 7% chance it belongs to Class 1, a 42% chance it belongs to Class 2, and a 28% chance that it belongs to Class 3. If we had to use this information to select a class to serve as a prediction for the class of the observation, we would select Class 2 since it has the highest probability.

## The softmax activation

Now that we understand what the output should look like for a neural network designed for a classification problem, we need to select an activation function for the final layer that will result in outputs that can be interpreted as probabilities. This will be provided by the softmax activation function.

The **softmax activation function** is a function $\sigma(z)$ that accepts a vector as an input and provides a vector of the same length as its output. (The symbol $\sigma$ was used for the sigmoid function in an earlier lesson. It is conventional to use it for both functions, which are closely related.) Assume that the input vector $z$ contains $K$ values, which we will denote by $z_0, z_1, ..., z_{K-1}$. The output of the softmax function is calculated as follows:

$$\sigma(z) = \frac{1}{\sum_{i=0}^{K-1} e^{z_i}} \left[ e^{z_0}, ~e^{z_1}, ..., ~e^{z_{K-1}} \right]$$

Careful inspection of the formula above will reveal that each value in the vector output by $\sigma(z)$ will be between 0 and 1, and that the sum of the $K$ values will be equal to 1. As such, we can view the elements of $\sigma(z)$ as probabilities.

When using a softmax function with a neural network classifier, the $z$ array is obtained by calculating the weighted sums (plus bias terms) for each node in the final layer. These values are combined into a vector and then supplied to softmax to produce our desired probability distribution over the $K$ classes. We will often denote the individual elements in the output vector of the softmax function as follows:

$$\sigma(z) = \left[p_0, ~p_1, ..., ~p_{K-1} \right]$$

Any given $p_i$ represents the estimated probability of the observation being in class $i$, and is given by the formula below.

$$p_i = \frac{e^{z_i}}{\sum_{j=0}^{K-1} e^{z_j}}$$

## NumPy implementation of softmax activation

We can use NumPy to define a simple function for calculating the softmax activation function for an input vector $z$. This is demonstrated in the code block below.

```
def softmax(z):
    exps = np.exp(z)          # Exponentiate each value in z
    p = exps / exps.sum()     # Divide the exponentiated values by the sum
    return p                  # return the probabilities
```

## Softmax with a temperature

The softmax function has a commonly used variation in which every score is divided by a positive constant $T$, called the **temperature**, before the function is applied.

$$p_i = \frac{e^{z_i / T}}{\sum_{j=0}^{K-1} e^{z_j / T}}$$

The temperature controls how strongly the output favors the largest score. The code block below applies the `softmax()` function defined above to the scores $z = \left[2.0, 1.0, 0.1\right]$ with several temperatures.

```
z = np.array([2.0, 1.0, 0.1])
print(softmax(z).round(4))            # T = 1:    [0.659  0.2424 0.0986]
print(softmax(z / 0.5).round(4))      # T = 0.5:  [0.8638 0.1169 0.0193]
print(softmax(z / 2).round(4))        # T = 2:    [0.5017 0.3043 0.194 ]
print(softmax(z / 10).round(4))       # T = 10:   [0.3661 0.3312 0.3027]
```

With $T = 1$, we obtain the ordinary softmax function. A temperature below 1 moves probability toward the class with the largest score, and as $T$ approaches 0 the output approaches a 1 for that class and a 0 for every other class. A temperature above 1 flattens the probabilities, and for very large $T$ every class becomes almost equally likely. The order of the probabilities never changes. Only the gaps between them do.

Temperature matters most for models that generate text. A large language model produces a score for every piece of text that could come next, converts the scores to probabilities with softmax, and then selects the next piece at random according to those probabilities. A low temperature makes the model choose the most likely continuation almost every time, so its output is predictable and repetitive. A high temperature gives unlikely continuations a real chance, so the output is more varied and more prone to mistakes. We will return to this idea in Week 8.

One practical note: the exponential function grows so quickly that $e^{z}$ exceeds the largest number a computer can store when $z$ is more than a few hundred. Software libraries avoid this by subtracting the largest score from every score before applying the exponential function. This does not change the output, because the same factor is removed from the numerator and the denominator.

## Using linear algebra to calculate the output of a neural network

We will now discuss how tools from linear algebra can be used to calculate the output of a neural network classifier. For the sake of an example, we will refer back to the network we introduced in the previous lesson. The diagram for that network is shown below.

<img src="/images/image-275628ef-2419-449d-bc92-3e64368a550d.png" alt="Diagram of a neural network with an input layer of 3 nodes, two hidden layers of 5 and 4 nodes, and an output layer of 3 nodes, with every node connected to every node in the next layer.">

:::image Image description: Simple neural network
From left to right: the Input Layer has three nodes labeled x<sub>0</sub>, x<sub>1</sub>, and x<sub>2</sub>; Hidden Layer 1 has five nodes; Hidden Layer 2 has four nodes; and the Output Layer has three nodes with arrows labeled Output 0, Output 1, and Output 2. Lines connect every node in each layer to every node in the next layer.
:::

Recall that in the previous lesson, we introduced the following weight matrices and bias vectors to describe the parameters of our network:

- The first hidden layer has a 3x5 weight matrix $W_1$ and a 5-element bias vector $b_1$.
- The second hidden layer has a 5x4 weight matrix $W_2$ and a 4-element bias vector $b_2$.
- The output layer has a 4x3 weight matrix $W_3$ and a 3-element bias vector $b_3$.

Assume that the inputs of the network are stored in a 3-element vector named $x$. The weighted sums for the first hidden layer can be calculated using matrix multiplication, and will be equal to $x \cdot W_1$. That might not be immediately obvious, but if you think about the operations involved in matrix multiplication and the structure of the weight matrix $W_1$, you will hopefully be able to convince yourself that this is true. The result of the product $x \cdot W_1$ will be a vector with 5 elements (one for each node in the hidden layer). We can add the bias vector $b_1$ to this and then apply the ReLU activation function to the result to obtain the output of the first hidden layer, which we will denote as $a_1$. By combining the operations described above, we see that $a_1 = \textrm{ReLU} \left( x \cdot W_1 + b_1 \right)$. The output $a_1$ will be a vector with 5 elements, which we can use as an input for the second hidden layer. We can then continue this process until we reach the output layer, at which point the ReLU activation is swapped out for the softmax activation. This process is summarized in the bullet points below.

- Calculate the output of the first hidden layer: $a_1 = \textrm{ReLU} \left( x \cdot W_1 + b_1 \right)$
- Calculate the output of the second hidden layer: $a_2 = \textrm{ReLU} \left( a_1 \cdot W_2 + b_2 \right)$
- Calculate the output of the output layer: $p = \sigma \left( a_2 \cdot W_3 + b_3 \right)$

If the network contained additional hidden layers, then we would add additional steps as needed.

## Applying the network to multiple observations

Using linear algebra to describe the process applied by a neural network has many advantages.

First, it provides us with a way of succinctly summarizing a process that consists of very many small, but similar, calculations. The network that we are working with is relatively small, but notice that if we had more nodes in any or all of the layers, nothing would change about the formulas we have presented above. The only thing that would change is the size of the weight matrices and the bias vectors.

The second advantage is that it enables us to use tools like NumPy arrays to calculate the output of a neural network without having to manually describe all of the little calculations involved. We can potentially describe hundreds or thousands of little calculations with a single matrix product.

The third advantage is that we can apply the neural network to multiple input vectors at once with very little change to our workflow. We will explore this idea now. Suppose that we have $N$ observations, each with $M$ values, and we would like to plug all $N$ observations into a neural network. We can collect those observations into an $N\times M$ matrix with each row of the matrix representing a single observation. At this point, we can simply replace the observation vector $x$ in the formulas above with our new observation matrix $X$ and perform the calculations as described. The final output of the process will be an $N\times K$ matrix, where $K$ is equal to the number of classes.

Although the calculation will be performed seamlessly when replacing $x$ with $X$, there are a few details that we should draw attention to. We will illustrate these items by returning to our example from above. When working with a single observation, $x \cdot W_1$ produced a 5-element vector, to which we could add the 5-element bias vector $b_1$ using vector addition. But if $X$ is an $N\times 3$ matrix, then the product $X \cdot W_1$ will result in an $N\times 5$ matrix. Technically speaking, linear algebra does not allow for a vector like $b_1$ to be added to a matrix. However, we can perform this operation in NumPy, which will result in the vector $b_1$ being broadcast over the rows of the matrix $X \cdot W_1$. As it turns out, that is exactly the result that we want! We can then continue with the process, and the final output $p$ will be an $N\times 3$ matrix containing the probability estimates for all $N$ observations.

## Example: A network that computes XOR

To see a complete calculation, we will apply these formulas to a very small network with hand-picked weights. The network has 2 inputs, one hidden layer with 2 nodes, and 1 output node. Its purpose is to calculate the **exclusive or** (**XOR**) of two inputs that are each 0 or 1: the output should be 1 if exactly one of the inputs is 1, and 0 otherwise.

This function is a famous example in the history of neural networks, because no single artificial neuron can calculate it. A hidden layer is required. For this example, we will not apply an activation function to the output node.

```
def ReLU(x):
    return np.where(x < 0, 0, x)

X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])    # All four possible inputs, one per row

W1 = np.array([[1, 1], [1, 1]])                   # Weights for the hidden layer
b1 = np.array([0, -1])                            # Biases for the hidden layer
W2 = np.array([[1], [-2]])                        # Weights for the output layer
b2 = np.array([0])                                # Bias for the output layer

a1 = ReLU(np.matmul(X, W1) + b1)                  # Output of the hidden layer
out = np.matmul(a1, W2) + b2                      # Output of the network
print(a1)
print(out.T)                                      # Prints [[0 1 1 0]]
```

The first hidden node calculates the sum of the two inputs. The second calculates the sum minus 1, which the ReLU function sets to 0 unless both inputs are 1. The values of the hidden layer for the four inputs are shown below.

```
[[0 0]
 [1 0]
 [1 0]
 [2 1]]
```

The output node subtracts twice the second hidden value from the first. For the input $(1, 1)$, that is $2 - 2 \cdot 1 = 0$. For the inputs with exactly one 1, it is $1 - 0 = 1$. The network outputs 0, 1, 1, 0 for the four inputs, which is the XOR function.

In this example, we chose the weights ourselves. In practice, weights are never chosen by hand. They are found by training, which we will discuss in the last lesson of this week.

## Shapes with batches and sequences

In the multiple-observation calculation above, the input was a two-dimensional array with shape $N \times M$: one row for each observation and one column for each feature. Models that work with text add one more dimension. Each observation is a sequence of tokens, and each token is represented by a vector. The input to a large language model is therefore a three-dimensional array whose shape is (number of sequences) × (number of tokens in each sequence) × (number of values in each token's vector).

The calculations do not change. Matrix multiplication is applied to the last dimension, and the other dimensions are carried along, in the same way that the bias vector is broadcast over the rows of a matrix.
