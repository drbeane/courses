# Week 6: Coefficient of determination

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss the coefficient of determination score that is often used to evaluate regression models. The concepts discussed in this lesson will be explored in Lab 6.

## Linear regression

In this lesson, we will discuss a tool that is often used to evaluate linear regression models. First, we will briefly review some of what we have previously discussed relating to linear regression.

Recall that a **linear regression** model is a regression model that generates its predictions for the target value by calculating a linear function of the feature values. Suppose that a regression problem includes $K$ features $X^{(1)}, X^{(2)}, ..., X^{(K)}$ and the model parameters are denoted by $\hat \beta_0$, $\hat \beta_1$, ..., $\hat \beta_K$. Then, a linear regression model for this problem can be represented using the following formula:

$$\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x^{(1)} + \hat{\beta}_2 x^{(2)} + ... + \hat{\beta}_K x^{(K)}$$

The optimal model parameters are found by training the model on some training set. This can be accomplished by using gradient descent to minimize the sum of squared error loss, shown below.

$$SSE \left( \hat \beta \right) = \sum_{i=1}^N \hat{e}_i^2$$

Alternatively, one can find the optimal coefficients using the matrix formulas shown below. Note that the matrix $X$ in these formulas is a feature matrix that has been modified to contain an initial column of 1's. In Week 3, we called this matrix $X_E$.

$$X = \begin{bmatrix} 1 & x_1^{(1)} & x_1^{(2)} & \cdots & x_1^{(K)} \\ 1 & x_2^{(1)} & x_2^{(2)} & \cdots & x_2^{(K)} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_N^{(1)} & x_N^{(2)} & \cdots & x_N^{(K)} \\ \end{bmatrix}$$

$$\hat \beta = \begin{bmatrix} \hat \beta_0 \\ \hat \beta_1 \\ \vdots \\ \hat \beta_K \\ \end{bmatrix} = \left(X^T \cdot X \right ) ^{-1} \cdot X^T \cdot y$$

After finding the optimal parameter values, we can generate predictions for a dataset using the formula shown below. Note that the $X$ matrix mentioned is again the modified feature matrix containing the column of 1's.

$$\hat y = X \cdot \hat \beta$$

The matrix formulas provided here are useful for small datasets, but for larger datasets, we prefer to use gradient descent.

## Coefficient of determination

The **coefficient of determination**, also known as an **r-squared** **value**, is a number that is used to evaluate or score linear regression models. For an optimal model scored on its own training set, the value is always between 0 and 1. When a model is scored on other data, the value can be negative. It is denoted as $r^2$. This value can be interpreted as measuring the proportion of the variation in the target variable $Y$ that has been explained by the model. As such, models with r-squared values near 1 are generally preferred. To calculate $r^2$, we must calculate two intermediate values known as the total sum of squares ($SST$) and the sum of squared errors ($SSE$). Formulas for these quantities are provided below.

$$SST = \sum_{i=1}^N \left ( y_i - \bar y \right)^2$$

$$SSE = \sum_{i=1}^N \hat{e}_i^2 = \sum_{i=1}^N \left(y_i - \hat{y}_i \right)^2$$

Note that the formula for $SST$ is similar to the formula for the variance of $Y$. In fact, we can calculate $SST$ as follows: $SST = (N - 1) \cdot s_Y^2$.

The coefficient of determination can be calculated from $SST$ and $SSE$ using the formula shown below.

$$r^2 = 1 - \frac{SSE}{SST}$$

This formula for the coefficient of determination can be used for any linear regression model, regardless of the number of features. We calculate $SST$ using the true target values. We then use the model to generate predicted target values, and use the true values and the predictions to find $SSE$. We can then find $r^2$.

## R-squared and correlation

As it turns out, we can calculate the coefficient of determination for an optimal linear regression model without generating predictions, and without even finding the model parameters that define the optimal model. This is not always more convenient, but it does make use of connections between the coefficient of determination and other concepts that we have covered, and is worth being familiar with.

We will start with the special case in which there is only one feature. When there is a single feature $X$, the r-squared value is simply equal to the square of the correlation between the feature $X$ and the target $Y$. This is stated as a formula below.

$$r^2 = r_{xy}^2$$

This formula does provide some potential benefits. The correlation between two variables is relatively easy to calculate. It can be useful to be able to use the correlation to score a regression model prior to taking the time to construct the model.

Next, we will consider the case in which we have two or more features. Denote the features by $X^{(1)}, X^{(2)}, ..., X^{(K)}$. We will need to define two intermediate matrices, which we will denote as $R_Y$ and $R_X$.

- The matrix $R_Y$ is a $1\times K$ row matrix. Each entry in the matrix is equal to a correlation between the target variable $Y$ and one of the features $X^{(i)}$.
- The matrix $R_X$ is the correlation matrix for the features.

After finding $R_Y$ and $R_X$, we can calculate the coefficient of determination using the formula below.

$$r^2 = R_Y \cdot R_X^{-1} \cdot R_Y^T$$

The matrices $R_Y$ and $R_X$ mentioned above can be quickly calculated using the code shown below.

```
M = np.vstack([y, X.T])
R = np.corrcoef(M)
RY = R[1:, 0]
RX = R[1:,1:]
```

The first line of code combines the feature and target arrays. It finds the transpose of the feature array (as required by the `np.corrcoef()` function) and then appends `y` to the transposed matrix as a new first row. The second line of code calculates all of the relevant correlations. The last two lines of code separate the correlations out into the needed sub-matrices. The matrix $R_Y$ is stored in the first column of `R`, but we need to skip the first element of the array, which would contain the correlation of $Y$ with itself. The matrix $R_X$ is found by ignoring the first row and first column of `R`.
