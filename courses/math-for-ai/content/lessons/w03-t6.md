# Week 3: Linear regression

**MATH 309/509 Math for AI** · Linear algebra

In this lesson, we will introduce a simple type of regression model known as linear regression.

## Linear regression

A **linear regression** model is a regression model that generates its predictions for the target value by calculating a linear function of the feature values. Suppose that a regression problem includes $K$ features $X^{(1)}, X^{(2)}, ..., X^{(K)}$. The estimate for the target value for a specific observation is given by the formula below.

$$\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x^{(1)} + \hat{\beta}_2 x^{(2)} + ... + \hat{\beta}_K x^{(K)}$$

The values $\hat \beta_0$, $\hat \beta_1$, ..., $\hat \beta_K$ are **model parameters**. These must be provided for a model, and collectively define the specific model that we are working with. Changing any of these parameters will result in a different model. The parameter $\hat \beta_0$ is referred to as the **intercept** term.

## Matrix formula for a single observation

We can use matrices to concisely restate the formula above. Let $x$ be a row vector of feature values for a single observation. We will define an "extended" feature vector $x_E$ by appending a "1" entry to the front of $x$. Next, let $\hat \beta$ be a column vector containing the parameter values. Definitions for these objects are provided below.

$$x = \begin{bmatrix} x^{(1)} & x^{(2)} & \cdots & x^{(K)} \\ \end{bmatrix}$$

$$x_E = \begin{bmatrix} 1 & x^{(1)} & x^{(2)} & \cdots & x^{(K)} \\ \end{bmatrix}$$

$$\hat \beta = \begin{bmatrix} \hat \beta_0 \\ \hat \beta_1 \\ \vdots \\ \hat \beta_K \\ \end{bmatrix}$$

The extended feature vector $x_E$ and the parameter vector $\hat \beta$ have the same number of elements and can thus be multiplied. With this in mind, we can restate the formula for a linear regression model as shown below.

$$\hat{y} = x_E \cdot \hat \beta$$

Note that we chose to represent the vectors $x_E$ and $\hat \beta$ as matrices with $x_E$ represented as a row vector and $\hat \beta$ represented as a column vector. We could alternatively represent these objects as ordinary vectors and perform their dot product. This would produce the same estimate $\hat{y}$. However, the approach used above will generalize better for other cases, as we shall now see.

## Matrix formula for multiple observations

In the formulas above, we assumed that we were applying the model to a single observation. We can use a similar approach to apply a linear regression model to multiple observations at once. First, we need to define a feature matrix $X$ which will be extended to a larger matrix $X_E$ through the addition of a column of ones. We also need to define a parameter vector $\hat \beta$. Definitions of these objects are provided below.

$$X = \begin{bmatrix} x_1^{(1)} & x_1^{(2)} & \cdots & x_1^{(K)} \\ x_2^{(1)} & x_2^{(2)} & \cdots & x_2^{(K)} \\ \vdots & \vdots & \ddots & \vdots \\ x_N^{(1)} & x_N^{(2)} & \cdots & x_N^{(K)} \\ \end{bmatrix}$$

$$X_{E} = \begin{bmatrix} 1 & x_1^{(1)} & x_1^{(2)} & \cdots & x_1^{(K)} \\ 1 & x_2^{(1)} & x_2^{(2)} & \cdots & x_2^{(K)} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_N^{(1)} & x_N^{(2)} & \cdots & x_N^{(K)} \\ \end{bmatrix}$$

$$\hat \beta = \begin{bmatrix} \hat \beta_0 \\ \hat \beta_1 \\ \vdots \\ \hat \beta_K \\ \end{bmatrix}$$

The feature matrix $X_E$ has shape $N\times \left(K + 1 \right)$ and the parameter vector $\hat \beta$ has shape $\left(K + 1\right) \times 1$. We can thus calculate the product $X_E \cdot \hat \beta$, which will produce the model estimates for each observation. This is stated in the formula below.

$$\hat{y} = X_E \cdot \hat \beta$$

Note that in the previous section, when we were working with a single observation, $\hat{y}$ represented a single number. Here, $\hat{y}$ will be an $N \times 1$ column vector with one entry for each observation that the model is being applied to.

Recall that if we were performing this calculation in NumPy, we could represent $\hat \beta$ as a one-dimensional array. In that case, NumPy will treat the one-dimensional array as a column vector and will perform the calculation as described above. The result of that calculation will be a one-dimensional array instead of a column vector. We will typically take this approach of working with one-dimensional arrays when implementing these ideas in NumPy, but it is important to understand that the way NumPy allows us to work with one-dimensional arrays is a convenience, and to be mathematically formal, we should think of $\hat \beta$ and $\hat{y}$ as column vectors.

## Sum of squared errors

The discussion above explains how we apply a linear regression model to a collection of observations. We now need to explore how we find a linear regression model for a given problem. Technically, any set of parameters $\hat \beta_0$, $\hat \beta_1$, ..., $\hat \beta_K$ will define a model, but if we just select the values arbitrarily or randomly, we will not likely end up with a good model. Our goal is to find a model that is, in some sense, optimal for a given training set. We will now discuss how we measure the quality of a given model.

Suppose that we have a training set that contains $N$ observations, and we have a model defined by parameters $\hat \beta_0$, $\hat \beta_1$, ..., $\hat \beta_K$. The first step in scoring this model is to generate a prediction vector $\hat{y}$. Since we know the true target values for the training set, we can compare the true target and the prediction for each observation to calculate the **error** (or **residual**) for each observation. This is shown below.

$$\hat{e}_i = y_i - \hat{y}_i$$

The loss function for linear regression is the **sum of squared errors (SSE)** loss function. As the name implies, it is calculated by squaring each error term and summing the results. This is shown in the formula below.

$$SSE \left( \hat \beta \right) = \sum_{i=1}^N \hat{e}_i^2$$

Note that we have represented the sum of squared errors as a function of the parameter vector $\hat \beta$. This is to emphasize that we are using it to score the model that is defined by its parameters. If we change the model by adjusting the parameters, that will change the predictions and will thus change the SSE. Our goal is to find the set of parameter values that result in the smallest possible value for the loss function.

## Finding optimal parameter values

As mentioned above, our goal when training a linear regression model is to find the parameter vector $\hat \beta$ that minimizes the loss. There are many ways that we could approach such an optimization problem, some of which make use of techniques from calculus and some that make use of tools from linear algebra. In this lesson, we will focus on using linear algebra to solve the problem. The solution for the optimal parameter vector $\hat \beta$ can be elegantly stated in the form of the matrix equation shown below. Note that this formula assumes that the label array $y$ is represented as a column vector.

$$\hat \beta = \begin{bmatrix} \hat \beta_0 \\ \hat \beta_1 \\ \vdots \\ \hat \beta_K \\ \end{bmatrix} = \left(X_E^T \cdot X_E \right ) ^{-1} \cdot X_E^T \cdot y$$

We won't derive this formula, but we will take a moment to explore the shapes of the objects involved. Since $X_E$ has shape $N\times \left(K + 1\right)$, the transpose $X_E^T$ will have shape $\left(K + 1\right)\times N$. The product $X_E^T \cdot X_E$ will then be a square $\left(K + 1\right)\times \left(K + 1\right)$ matrix. The inverse $\left( X_E^T \cdot X_E \right)^{-1}$ will also be $\left(K + 1\right)\times \left(K + 1\right)$. The product $\left( X_E^T \cdot X_E \right)^{-1} \cdot X_E^T$ will then be $\left(K + 1\right)\times N$. Since $y$ has shape $N\times 1$, the final shape of $\hat \beta$ will be $\left(K + 1\right)\times 1$, as expected.

We will again mention that if we are performing this calculation in NumPy, we could represent $y$ as a one-dimensional array, which will result in $\hat \beta$ also being a one-dimensional array. This will cause no issues, and will be our preferred approach.

This particular approach to finding the optimal parameter values is nice in that it provides us with a relatively simple formula to apply to find the exact solution. However, if our training set contains many features and/or many observations, then the feature array $X$ will be quite large. Unfortunately, matrix multiplication does not scale well. This approach works well for small datasets, but can become computationally infeasible when attempting to train a model on a large dataset. For that reason, it is more common to train linear regression models using iterative approximation techniques that utilize tools from calculus. Such methods tend to perform better on large datasets.

## Additional resources

The following video from Crash Course: Statistics provides a brief introduction to linear regression.

<div class="video"><iframe src="https://www.youtube.com/embed/WWqE7YHR4Jc" title="Regression | Crash Course Statistics" loading="lazy" allowfullscreen></iframe></div>

*Regression* (2018). *Crash Course Statistics* \[Video File\]. Retrieved from YouTube.
