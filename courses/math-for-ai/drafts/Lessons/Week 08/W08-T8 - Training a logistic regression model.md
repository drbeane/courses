# Week 8: Training a logistic regression model

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will introduce a loss function used to score classification models and will discuss how to train a logistic regression model. You will explore the topics discussed in this lesson in this week's lab assignment.

## Negative log likelihood loss

We will now discuss how to train a logistic regression model. In order to do so, we must first introduce a loss function. We will develop this loss function step-by-step. We will start by defining some relevant matrices. Suppose that the data for our training set is stored in matrices $X$ and $y$. The matrix $X$ is an $N\times K$ matrix that contains feature values, and $y$ is an $N\times 1$ column vector containing the label or target values for the training observations. We will extend the feature matrix into a matrix $X_E$ by adding a column of ones. Suppose that we also have a $\left(K + 1\right) \times 1$ parameter vector named $\hat \beta$. These objects are all defined below.

$$X = \begin{bmatrix} x_1^{(1)} & x_1^{(2)} & \cdots & x_1^{(K)} \\ x_2^{(1)} & x_2^{(2)} & \cdots & x_2^{(K)} \\ \vdots & \vdots & \ddots & \vdots \\ x_N^{(1)} & x_N^{(2)} & \cdots & x_N^{(K)} \\ \end{bmatrix}$$

$$X_{E} = \begin{bmatrix} 1 & x_1^{(1)} & x_1^{(2)} & \cdots & x_1^{(K)} \\ 1 & x_2^{(1)} & x_2^{(2)} & \cdots & x_2^{(K)} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_N^{(1)} & x_N^{(2)} & \cdots & x_N^{(K)} \\ \end{bmatrix}$$

$$y = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_N \\ \end{bmatrix}$$

$$\hat \beta = \begin{bmatrix} \hat \beta_0 \\ \hat \beta_1 \\ \vdots \\ \hat \beta_K \\ \end{bmatrix}$$

We will generate a column vector $\hat{p}$ containing class probability estimates by using the formula shown below. Note that $\sigma$ refers to the sigmoid function.

$$\hat{p} = \sigma \left( X_E \cdot \hat \beta \right)$$

The vector $\hat{p}$ consists of one probability estimate for each observation. This value is an estimate of the probability that the corresponding observation belongs to class 1. We will create a new vector $\pi$ that will contain the model's estimates of the probability of the observation belonging to the class that it actually does belong to, as indicated by the corresponding entry in $y$. The entries of $\pi$ are calculated as follows:

$$\pi_i = \left\{ \begin{array}{ll} \hat p_i & \text{if }~ y_i = 1 \\ 1 - \hat p_i & \text{if } ~y_i = 0 \end{array} \right.$$

We prefer models that produce larger $\pi_i$ values since these models have a higher degree of confidence in the correct answers for the training observations. We will define the **likelihood score** $L$ for the model by multiplying the $\pi_i$ values.

$$L\left(\hat\beta\right) = \pi_1 \cdot \pi_2 \cdot ... \cdot \pi_N = \prod_{i=1}^{N} \pi_i$$

We have written the likelihood as a function of $\hat \beta$ to emphasize its dependence on the parameter values. Our goal during training would be to find the values of $\hat \beta$ that maximize the likelihood score. In theory, we could train our model by maximizing likelihood, but there are two problems with this. First, probabilities such as $\pi_i$ are at most one, and multiplying hundreds or thousands of probabilities together will result in a very, very small number. It is not unlikely that the number will be so small that the computer performing the training will simply round it to 0 in all cases, making it useless for scoring models. The second, less serious, issue is that it is conventional to work with loss functions that we wish to minimize (not maximize) in machine learning.

We can address the first issue mentioned above by taking a natural logarithm of the likelihood score. This results in the **log-likelihood score** $LL$ shown below.

$$LL\left( \hat\beta \right) = \ln(L) = \ln(\pi_1) + \ln(\pi_2) + ... + \ln(\pi_N) = \sum_{i=1}^N \ln(\pi_i)$$

Maximizing $L$ is equivalent to maximizing $LL$, but the log-likelihood score is better behaved than the likelihood score and does not suffer from the same rounding issues. In order to create a loss function, we simply negate the log-likelihood to produce the **negative log-likelihood** score, or $NLL$. This metric, shown below, provides the loss function that we will use to score logistic regression models.

$$NLL\left( \hat\beta \right) = - \sum_{i=1}^N \ln(\pi_i)$$

## Using NumPy to calculate NLL

The code sample below demonstrates how to use NumPy to calculate negative log-likelihood. This sample assumes that we have access to an array `y` that contains the true training labels and that we have previously calculated an array `p_hat` of class probability estimates (as discussed in the previous lesson).

```
pi = np.where(y == 1, p_hat, 1 - p_hat)    # Calculate pi values
NLL = -np.log(pi).sum()                    # Calculate NLL
```

## Cross-entropy and perplexity

The negative log-likelihood loss is known by another name that you will encounter constantly in machine learning: the **cross-entropy loss**. It is usually reported as an average over the observations, so that the value does not depend on the size of the dataset.

$$\textrm{cross-entropy} = - \frac{1}{N} \sum_{i=1}^N \ln(\pi_i)$$

As a small example, suppose that a model produces the probability estimates below for four observations.

```
y = np.array([1, 0, 1, 1])                      # True classes
p_hat = np.array([0.9, 0.2, 0.6, 0.3])          # Estimated probability of class 1
pi = np.where(y == 1, p_hat, 1 - p_hat)         # Probability given to the true class
print(pi)                                       # Prints [0.9 0.8 0.6 0.3]
print(-np.log(pi).round(4))                     # Prints [0.1054 0.2231 0.5108 1.204 ]
print(-np.log(pi).mean().round(4))              # Prints 0.5108
```

Each observation contributes $-\ln(\pi_i)$ to the loss. The first observation, where the model gave a probability of 0.9 to the correct class, contributes only 0.1054. The last observation, where the model gave the correct class a probability of just 0.3, contributes 1.204. Cross-entropy rewards a model for being confident and correct, and it penalizes a model heavily for being confident and wrong. The loss would be 0 only if the model gave a probability of 1 to the correct class of every observation.

Cross-entropy is the loss function used to train neural network classifiers. It is also the loss function used to train every large language model. In that setting, each "observation" is a position in a piece of text, the classes are the possible next tokens, and $\pi_i$ is the probability the model gave to the token that actually came next.

Language models are often scored with a related value called **perplexity**, which is the exponential of the cross-entropy. For the example above, the perplexity is $e^{0.5108} = 1.667$. We will see how to interpret this value in a later lesson.

The reason we work with logarithms can be demonstrated directly. A product of many probabilities quickly becomes too small for a computer to represent, while the sum of their logarithms does not.

```
p = np.full(2000, 0.5)                # An array containing 2000 copies of 0.5
print(np.prod(p))                     # Prints 0.0
print(np.log(p).sum())                # Prints -1386.29...
```

The true value of the product is not 0. It is a number with about 600 zeros after the decimal point, which is smaller than the smallest positive number a computer can store.

## Training a logistic regression model

We have presented two ways of training linear regression models in this course. In Week 3, we presented a matrix formula for algebraically calculating the optimal coefficients of a linear regression model. In Week 5, we discussed how to estimate the optimal coefficients using an iterative calculus-based optimization algorithm known as gradient descent.

Our options for training a logistic regression model are more limited. There is no matrix formula that can be applied to algebraically solve for the optimal coefficients for a logistic regression model. As a result, we must resort to an iterative approximation technique such as gradient descent when training a logistic regression model.

We could use a tool such as SymPy to calculate gradients symbolically, but as it turns out, the gradient $\nabla NLL\left( \hat\beta \right)$ for negative log-likelihood can be expressed using a simple matrix formula, which removes the need for symbolic differentiation. This formula is provided below.

$$\nabla NLL\left( \hat\beta \right) = - X_E^T \cdot \left(y - \hat p \right)$$

Since $y$ and $\hat p$ are both column vectors, $y - \hat p$ is also a column vector, with $N$ entries. Multiplying it by the $\left(K + 1\right) \times N$ matrix $X_E^T$ gives a column vector with one entry for each parameter, which matches the shape of $\hat \beta$. After calculating the gradient of the loss, we can perform a parameter update using the standard gradient descent update formula shown below.

$$\hat \beta \leftarrow \hat \beta - \alpha \cdot \nabla NLL \left( \hat\beta \right)$$

## Using NumPy to perform a parameter update

The code block below demonstrates how to use NumPy to perform a single parameter update for a logistic regression model. This code assumes that we have access to an array `y` containing training target values, an "extended" training feature array `XE`, a learning rate `alpha`, and an array of current parameter estimates `betas`. It also assumes that we have created an array of class probability estimates `p_hat` as discussed in the previous lesson.

```
grad = - np.matmul(XE.T, y - p_hat)   # Calculate gradient
betas = betas - alpha * grad          # Perform parameter update
```
