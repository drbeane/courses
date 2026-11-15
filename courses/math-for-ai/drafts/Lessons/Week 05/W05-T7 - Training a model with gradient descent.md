# Week 5: Training a model with gradient descent

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will use gradient descent to train a linear regression model, and will compare the result with the matrix formula from Week 3. We will also see what the learning rate does to training, and will introduce the version of gradient descent that is used to train large models.

## Gradient descent for linear regression

In Week 3, we found the parameters of a linear regression model with a matrix formula. We noted there that the formula becomes too slow for large datasets, and that iterative methods are used instead. We now have the tools to apply one.

Recall that the loss for linear regression is the sum of squared errors, and that the predictions are given by $\hat y = X_E \cdot \hat \beta$, where $X_E$ is the feature matrix with a column of ones added.

$$SSE \left( \hat \beta \right) = \sum_{i=1}^N \left(y_i - \hat{y}_i \right)^2$$

The loss is a function of the parameters, so it has a gradient with respect to them. Applying the differentiation rules from Week 4 to each parameter gives the formula below. We will not derive it here.

$$\nabla SSE \left( \hat \beta \right) = -2 \cdot X_E^T \cdot \left( y - X_E \cdot \hat \beta \right)$$

Notice what this formula says. The vector $y - X_E \cdot \hat \beta$ holds the current errors. The gradient is found by multiplying the errors by the feature values and adding the results. A parameter is changed the most when large errors occur together with large values of its feature.

## Training the model

We will train a model with one feature on the eight observations below. The data was created to lie close to the line $y = 1 + 2x$.

```
x = np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0])
y = np.array([3.1, 4.9, 7.2, 8.8, 11.1, 12.9, 15.2, 16.8])

ones = np.ones(shape=(8, 1))                      # Column of ones
XE = np.hstack([ones, x.reshape(-1, 1)])          # Extended feature matrix
```

The training loop follows the gradient descent steps exactly. We start both parameters at 0. In each pass we calculate the errors, calculate the gradient, and move the parameters a small step in the direction opposite the gradient.

```
betas = np.array([0.0, 0.0])                      # Initial parameter values
alpha = 0.002                                     # Learning rate

for i in range(2000):
    errors = y - np.matmul(XE, betas)             # Current errors
    grad = -2 * np.matmul(XE.T, errors)           # Gradient of SSE
    betas = betas - alpha * grad                  # Parameter update

print(betas.round(4))                             # Prints [1.0643 1.9857]
```

The table below shows the parameters and the loss at several points during training. Before training, with both parameters equal to 0, the loss is 965.8.

| Steps taken | Intercept | Slope | SSE |
|---|---|---|---|
| 1 | 0.3200 | 1.7736 | 25.1685 |
| 10 | 0.4178 | 2.1007 | 0.8800 |
| 100 | 0.7011 | 2.0503 | 0.4087 |
| 1000 | 1.0631 | 1.9859 | 0.1914 |
| 2000 | 1.0643 | 1.9857 | 0.1914 |

The loss drops quickly at first and then slowly. The slope is nearly right after 10 steps, while the intercept takes hundreds of steps to settle. This is typical: gradient descent makes fast progress in the directions where the loss is steep and slow progress where it is nearly flat.

We can check the answer against the matrix formula from Week 3.

```
XTX_inv = np.linalg.inv(np.matmul(XE.T, XE))
beta_exact = np.matmul(XTX_inv, np.matmul(XE.T, y))
print(beta_exact.round(4))                        # Prints [1.0643 1.9857]
```

The two methods agree to four decimal places. Gradient descent found the same model without calculating an inverse matrix.

## The effect of the learning rate

The learning rate has a large effect on training. The results below come from running the same loop with three other learning rates.

- With $\alpha = 0.001$, half the rate used above, the parameters are still slightly off after 1000 steps and the loop needs about 5000 steps to reach the same answer. A small learning rate is safe but slow.
- With $\alpha = 0.004$, the first three steps give losses of 451.3, 211.2, and 99.1. Each step jumps past the minimum and lands on the other side of the valley, so the slope swings between values that are too large and too small. The swings shrink, and the loop still reaches the correct answer.
- With $\alpha = 0.006$, the first three steps give losses of 2244.3, 5217.0, and 12128.9. Each jump lands farther from the minimum than the one before. The loss grows without bound, and the algorithm **diverges**.

For this problem, any learning rate above roughly 0.0048 causes divergence. That cutoff depends on the data, so it has to be found for each problem, usually by experiment. A plot of the loss against the number of steps, called a **loss curve**, is the standard tool for this. A curve that falls steadily indicates a workable learning rate. A curve that bounces indicates a rate near the limit, and a curve that rises indicates a rate that is too high.

## Stochastic and mini-batch gradient descent

The loop above uses every observation in the training set to calculate each gradient. That is practical for eight observations. It is not practical for a training set with billions of them, because a single parameter update would require a pass through all of the data.

The solution is to estimate the gradient from a small random sample of the training set. The sample is called a **mini-batch**, and the method is called **mini-batch gradient descent** or **stochastic gradient descent** (often shortened to **SGD**). The word stochastic means random. Each update uses a different random mini-batch, so each gradient is only an estimate of the true gradient. The estimates are noisy, but they are correct on average, and each one is far cheaper to calculate.

The code below changes two lines of the training loop. In each pass, it selects 2 of the 8 observations at random and uses only those to calculate the gradient.

```
np.random.seed(1)
betas = np.array([0.0, 0.0])
alpha = 0.002

for i in range(5000):
    idx = np.random.choice(range(8), size=2, replace=False)    # Choose a mini-batch
    errors = y[idx] - np.matmul(XE[idx], betas)                # Errors for the mini-batch
    grad = -2 * np.matmul(XE[idx].T, errors)                   # Gradient estimate
    betas = betas - alpha * grad                               # Parameter update

print(betas.round(4))                             # Prints [1.0764 1.9724]
```

The result is close to the exact answer of `[1.0643 1.9857]` but not equal to it. The loss for these parameters is 0.2171, compared with the minimum of 0.1914. Because each gradient is a noisy estimate, the parameters keep jittering around the minimum instead of settling onto it. In practice this small loss of precision is a good trade for the large savings in computation.

Every large neural network, including every large language model, is trained with a form of mini-batch gradient descent. The optimizers used in practice add refinements to the basic update rule. **Momentum** carries some of the previous step into the next one, which smooths out the noise and speeds up progress along the floor of a narrow valley. **Adam**, the most widely used optimizer, also adjusts the size of the step separately for each parameter. Both are still gradient descent: they calculate a gradient from a mini-batch and step against it.
