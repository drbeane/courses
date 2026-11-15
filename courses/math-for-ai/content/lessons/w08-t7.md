# Week 8: Logistic regression

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will introduce a fundamental machine learning model known as logistic regression. You will explore the topics discussed in this lesson in this week's lab assignment.

## Introduction to logistic regression

**Logistic regression** is a probabilistic linear classification method that can be used to estimate the probability that an observation belongs to a particular class based on the feature values of the observation. Logistic regression can be adapted for use in multiclass classification problems, but we will limit our discussion to the basic version of the algorithm, which is a binary classifier.

We will begin our discussion by establishing some notation. Suppose that we are presented with a binary classification problem with $K$ features. We will denote the features as $X^{(1)}, X^{(2)}, ..., X^{(K)}$. For conciseness, we will occasionally use the symbol $X^{(*)}$ to refer to a vector of features, $X^{(*)} = \left[ X^{(1)}, X^{(2)}, ..., X^{(K)} \right]$. As usual, we will denote the target variable by $Y$. Since we are working with a binary classification problem, $Y$ is a categorical variable with two possible classes or categories. We will assume that the categories have been integer encoded as 0 and 1. We will (often arbitrarily) refer to class 0 as the **negative class** and to class 1 as the **positive class**.

A logistic regression model is a probabilistic classifier, which means that it will generate estimates for the probability that an observation will belong in each class. We will typically then classify an observation as belonging to the class with the greatest probability estimate. When working with a binary classification problem, it is sufficient to generate a probability estimate for a single class, from which we can then infer the probability of belonging to the other class. For example, if a model estimates that an observation has a 0.7 probability of belonging to the positive class (class 1), then it must also estimate that the observation has a 0.3 probability of belonging to the negative class (class 0). With this in mind, our logistic models will be designed to estimate the probability of belonging to the positive class. Given a vector $x$ of observed feature values, the goal of our model will be to estimate the following quantity:

$$p = P \left[Y = 1 ~|~ X^{(*)} = x \right]$$

## Logistic regression model

Logistic regression models produce probability estimates through the use of the sigmoid function $\sigma(z)$. Recall from a previous lesson that the sigmoid function is defined as follows:

$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

An important property of the sigmoid function is that it accepts any real number as an input and always outputs a number between 0 and 1. As such, the output of the sigmoid function can be interpreted as a probability.

A logistic regression model produces an estimate $\hat p$ of $p = P \left[Y = 1 ~|~ X^{(*)} = x \right]$ by first calculating a linear function of the feature values and then plugging the result into the sigmoid function. This is stated in the formulas below.

$$z = \hat{\beta}_0 + \hat{\beta}_1 x^{(1)} + \hat{\beta}_2 x^{(2)} + ... + \hat{\beta}_K x^{(K)}$$

$$\hat p = \sigma(z)$$

As with linear regression, the values $\hat \beta_0$, $\hat \beta_1$, ..., $\hat \beta_K$ are **model parameters**. The goal of the training process is to learn the optimal values of these parameters based on some metric calculated using a training set. The value $z$ presented above is simply an intermediate variable introduced to help break the calculation into smaller steps. The two steps can be combined to produce the formula for a logistic regression model shown below.

$$\hat p = \sigma \left( \hat{\beta}_0 + \hat{\beta}_1 x^{(1)} + \hat{\beta}_2 x^{(2)} + ... + \hat{\beta}_K x^{(K)} \right)$$

## Logistic regression example

Let's consider an example of how these calculations work. Suppose that we have trained a logistic regression model for a classification problem with four features and have obtained the model shown below as a result.

$$\hat p = \sigma \left( 5.2 + 1.2 x^{(1)} -2.4 x^{(2)} + 2.5 x^{(3)} + 0.8 x^{(4)} \right)$$

Now, suppose that we wish to classify an observation with feature values given as follows: $x^{(1)} = 3$, $x^{(2)} = 9$, $x^{(3)} = 4$, $x^{(4)} = 3$. Calculating the value inside of the sigmoid (which we previously referred to as $z$) yields $z = -0.4$. Plugging this value into the sigmoid function produces the probability estimate $\hat p = 0.4013$. However, this is an estimate of the probability of the observation belonging to class 1. We can then infer that the probability of the observation belonging to class 0 is $\hat q = 0.5987$. The probability estimate for class 0 is larger, so we would classify the observation as belonging to class 0.

## Matrix formulation

The formula for logistic regression can also be expressed in terms of matrices. This can be especially useful when applying the model to several observations at once, as would be the case during training. Before presenting the formulas, we need to define the matrix objects that will appear in the formula. Suppose that we have a training set whose feature values are stored in the matrix $X$ shown below.

$$X = \begin{bmatrix} x_1^{(1)} & x_1^{(2)} & \cdots & x_1^{(K)} \\ x_2^{(1)} & x_2^{(2)} & \cdots & x_2^{(K)} \\ \vdots & \vdots & \ddots & \vdots \\ x_N^{(1)} & x_N^{(2)} & \cdots & x_N^{(K)} \\ \end{bmatrix}$$

$$X_{E} = \begin{bmatrix} 1 & x_1^{(1)} & x_1^{(2)} & \cdots & x_1^{(K)} \\ 1 & x_2^{(1)} & x_2^{(2)} & \cdots & x_2^{(K)} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_N^{(1)} & x_N^{(2)} & \cdots & x_N^{(K)} \\ \end{bmatrix}$$

$$\hat \beta = \begin{bmatrix} \hat \beta_0 \\ \hat \beta_1 \\ \vdots \\ \hat \beta_K \\ \end{bmatrix}$$

The matrix $X$ is an $N\times K$ **feature matrix**. Each row in this matrix represents a single observation, and each column represents a single feature. The matrix $X_E$ is an $N\times \left(K + 1\right)$ version of the feature matrix that has been "extended" by adding a column of ones as the first column. The column matrix $\hat \beta$ is the $\left(K + 1\right) \times 1$ **parameter vector**. With these definitions in place, we can provide the matrix formulation of logistic regression. This is shown below.

$$\hat{p} = \sigma \left( X_E \cdot \hat \beta \right)$$

Note that $z = X_E \cdot \hat \beta$ will be an $N \times 1$ column vector. When we apply the sigmoid function to this, we assume that the function will be "vectorized," so we apply the function to each element separately.

## Using NumPy to apply logistic regression model

The code block below demonstrates how to use NumPy to apply a logistic regression model. This code assumes that we have access to a feature array named `X` and a parameter array named `betas`. The last line of code uses `np.where()` to determine the predicted classes.

```
N = len(X)                             # Determine number of observations
ones = np.ones(shape=(N,1))            # Create column of ones
XE = np.hstack([ones, X])              # Build XE
z = np.dot(XE, betas)                  # Perform matrix multiplication
p_hat = 1 / (1 + np.exp(-z))           # Apply the sigmoid function
y_hat = np.where(p_hat < 0.5, 0, 1)    # Determine predicted classes
```

## Logistic regression as a single neuron

Compare the formula for logistic regression with the formula for an artificial neuron from Week 5.

$$\hat p = \sigma \left( \hat{\beta}_0 + \hat{\beta}_1 x^{(1)} + ... + \hat{\beta}_K x^{(K)} \right) \qquad\qquad \textrm{output} = a \left(w \cdot x + b \right)$$

They are the same formula. A logistic regression model is a single artificial neuron that uses the sigmoid function as its activation function. The intercept $\hat \beta_0$ is the bias term, and the remaining parameters $\hat \beta_1, ..., \hat \beta_K$ are the weights.

This connection runs in both directions. A neural network that performs binary classification ends with a single sigmoid node, so its final layer is a logistic regression model whose inputs are the outputs of the last hidden layer. A network that chooses among many classes ends with a softmax layer, which is the multiclass version of the same model. Understanding logistic regression is therefore a direct step toward understanding how a neural network, including a large language model, produces its final probabilities.
