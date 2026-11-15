# Week 6: Evaluating models

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will discuss how to measure the quality of a trained model honestly. We will introduce test sets and overfitting, and will then present several descriptive statistics used to score classification models.

## Training sets and test sets

Every score we have calculated for a model so far was calculated on the same observations that were used to train it. That is a problem. A model is useful only if it performs well on observations it has not seen, and its performance on the training set can be a poor guide to that.

The standard remedy is to split the available observations into two groups before training.

- The **training set** is used to find the model parameters.
- The **test set** is set aside during training. After training, the model is scored on the test set. Since the model never saw these observations, the score estimates how the model will perform on new data.

It is common to place 70% to 80% of the observations in the training set and the rest in the test set. The split should be made at random, so that both sets are representative samples of the same population. When several candidate models are being compared, a third group called a **validation set** is often split off as well. The validation set is used to choose among the candidates, and the test set is used only once, to score the final choice.

## Overfitting

A model is said to **overfit** when it learns details of the training set that do not hold for the population the training set was drawn from. Every sample contains random variation. A flexible model with many parameters can fit that variation closely, which lowers its loss on the training set while making its predictions on new observations worse.

The clearest sign of overfitting is a gap between the two scores: a low loss on the training set together with a noticeably higher loss on the test set.

## Example: Overfitting with polynomials

We will demonstrate overfitting with a small experiment. The code below creates 30 observations that follow the line $y = 2 + 0.5x$, plus random noise drawn from a normal distribution. It then splits the observations at random into 20 for training and 10 for testing. The function `np.random.permutation()` returns the integers from 0 to 29 in a random order, which we use to select the two groups.

```
np.random.seed(3)
x = np.linspace(0, 10, 30)                                  # 30 evenly spaced x values
y = 2 + 0.5 * x + np.random.normal(loc=0, scale=1, size=30)

idx = np.random.permutation(30)                             # Shuffle the indices
train = idx[:20]                                            # First 20 for training
test = idx[20:]                                             # Last 10 for testing
```

Next, we fit three models to the training set: polynomials of degree 1, 3, and 9. A polynomial of degree 1 is a line with 2 parameters. A polynomial of degree 9 has 10 parameters and can bend much more freely. The function `np.polyfit()` finds the polynomial of a given degree with the smallest sum of squared errors, and `np.polyval()` evaluates it. For each model, we calculate the mean of the squared errors on each set. We use the mean, and not the sum, so that sets of different sizes can be compared.

```
for degree in [1, 3, 9]:
    coef = np.polyfit(x[train], y[train], degree)
    train_error = np.mean((y[train] - np.polyval(coef, x[train]))**2)
    test_error = np.mean((y[test] - np.polyval(coef, x[test]))**2)
    print(degree, train_error.round(3), test_error.round(3))
```

The results are shown in the table below.

| Degree | Mean squared error, training set | Mean squared error, test set |
|---|---|---|
| 1 | 0.914 | 0.647 |
| 3 | 0.888 | 0.623 |
| 9 | 0.548 | 0.805 |

The polynomial of degree 9 has by far the lowest error on the training set. Judged on the training set alone, it looks like the best model. On the test set it is the worst of the three. Its extra flexibility was spent fitting the noise in the 20 training observations, and that noise is different in the 10 test observations. The data really does follow a line, and the two simpler models, which cannot bend to follow the noise, predict new observations better.

Overfitting is a central concern in machine learning. Large neural networks have far more parameters than a polynomial of degree 9, and a great deal of the craft of training them consists of techniques that limit overfitting. Using more training data is the most reliable one.

## Scoring a classification model

For a regression model, the sum or mean of squared errors is a natural score. A classification model predicts categories, so its errors are counted instead of measured. The simplest score is **accuracy**, the proportion of observations that the model classifies correctly. As we saw in Week 2, it can be calculated by taking the mean of a Boolean array.

```
y_true = np.array([1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0])    # Actual classes
y_pred = np.array([1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0])    # Predicted classes
accuracy = np.mean(y_pred == y_true)
print(accuracy)                                             # Prints 0.75
```

Accuracy can be misleading when one class is much more common than the other. Suppose that 1% of financial transactions are fraudulent. A model that labels every transaction as legitimate is 99% accurate and completely useless. To see what a classifier is doing, we need to count its right and wrong answers separately for each class.

## The confusion matrix

For a binary classification problem, every prediction falls into one of four groups, according to the predicted class and the actual class.

- A **true positive** is an observation in class 1 that the model predicted as class 1.
- A **false positive** is an observation in class 0 that the model predicted as class 1.
- A **false negative** is an observation in class 1 that the model predicted as class 0.
- A **true negative** is an observation in class 0 that the model predicted as class 0.

A table of these four counts is called a **confusion matrix**. The counts can be found by combining array comparisons with the `&` operation.

```
TP = np.sum((y_pred == 1) & (y_true == 1))     # True positives:  3
FP = np.sum((y_pred == 1) & (y_true == 0))     # False positives: 1
FN = np.sum((y_pred == 0) & (y_true == 1))     # False negatives: 2
TN = np.sum((y_pred == 0) & (y_true == 0))     # True negatives:  6
```

| | Predicted class 1 | Predicted class 0 |
|---|---|---|
| Actual class 1 | 3 | 2 |
| Actual class 0 | 1 | 6 |

## Precision and recall

Two further scores are calculated from the confusion matrix. Each answers a different question about the positive class.

**Precision** is the proportion of the model's positive predictions that are correct. It answers the question: when the model says an observation is in class 1, how often is it right?

$$\textrm{precision} = \frac{TP}{TP + FP}$$

**Recall** is the proportion of the actual positive observations that the model finds. It answers the question: of all the observations in class 1, how many did the model catch?

$$\textrm{recall} = \frac{TP}{TP + FN}$$

```
precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(precision)                               # Prints 0.75
print(recall)                                  # Prints 0.6
```

For the example above, the precision is 0.75 and the recall is 0.6. The model is right three times out of four when it predicts class 1, but it finds only three of the five observations that are in class 1.

Which score matters more depends on the cost of each kind of mistake. A spam filter should have high precision, because marking a real message as spam is costly. A medical screening test should have high recall, because missing a case of a disease is costly. There is usually a trade-off between the two: a model can raise its recall by predicting class 1 more freely, which tends to lower its precision.
