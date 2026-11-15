# Week 1: Supervised learning

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce terminology and discuss concepts relating to the branch of machine learning known as supervised learning.

## Supervised learning

**Supervised learning** is a branch of machine learning that is interested in training models that can be used to predict or estimate a value of interest based on some set of inputs. In this lesson, we will establish some terminology and notation commonly used when working with a supervised learning problem.

## Observations and variables

A single entity that a supervised learning problem might be applied to is called an **observation** or a **sample**. Depending on the nature of the problem at hand, an observation might represent an individual human, a house, a country, a financial transaction, an image, or any other type of entity that you might wish to make a prediction about. An observation is represented by a collection of **variables** that describe the characteristics of the observation. Variables can be classified in a number of ways. A variable is said to be **quantitative** or **numerical** if its values are naturally and non-arbitrarily represented as numbers. A variable is said to be **qualitative** or **categorical** if its values are used to indicate groupings or non-numerical characteristics of the observation. A categorical variable might be encoded numerically with integer values used to indicate specific categories, but when this occurs, the numerical encoding is typically arbitrary and has no mathematical significance.

The data for a supervised learning problem is often (but not always) represented in a tabular format such as a spreadsheet, table, or matrix. Each row of the data set represents a single observation. We sometimes refer to rows as **records** in the dataset. Each column represents a specific variable.

## Features and labels

The goal of a supervised learning problem is to create a **model** that can be used to predict the value of one or more variables based on the values of one or more other variables. The variable that is to be predicted is called the **label** or **target value**, and the inputs are typically referred to as **features** or **predictors**. A model, in this context, refers to a function that accepts feature values as inputs and that provides an estimate or prediction for the target value as its output.

## Training and loss functions

In order to create a supervised learning model, we must have access to a training set. A **training set** is a collection of observations for which the target values are known. The model is trained by providing the training set to a **training algorithm** that attempts to find a model with optimal or near-optimal performance on the training set.

The goal of the training algorithm is to find the best model, but in order for that goal to be meaningful, we need to have a way of quantitatively scoring and comparing two models. A **loss function** is a function that measures a model's performance on a given data set by assigning a numerical value to the model, with smaller loss values indicating better models. The goal of a training algorithm is to find the model that has the lowest possible loss score for all models within some specified class or family of models. The exact nature of the loss function used to train a supervised learning model depends on the characteristics of the specific problem. We will discuss loss functions more in later lessons.

## Notation for supervised learning

When discussing a supervised learning problem in this course, we will typically use $Y$ to represent the target variable and will use $\hat Y$ to denote a prediction for the target variable. We will denote the features as $X^{(1)}, X^{(2)}, ..., X^{(K)}$. We typically use lowercase letters to denote specific values of these variables, and will sometimes use subscripts to distinguish between the values for different observations. For example, we might denote the target value for a specific observation as $y_0$ and denote the features of the same observation as $x^{(1)}_0, x^{(2)}_0, ..., x^{(K)}_0$. If we use a model to generate a prediction for the label for this observation, we would denote that as $\hat y_0$.

Suppose that we have a supervised learning problem in which there are $K$ features, $X^{(1)}, X^{(2)}, ..., X^{(K)}$. Suppose that we have a training set that consists of $N$ observations. We will often collect the training labels into a vector named $y$ and will collect the training feature values into a matrix named $X$ with one row for each observation and one column for each feature. This is illustrated below.

$$y = \left[y_1, ~y_2, ~y_3, ..., ~y_{N} \right]$$

$$X = \begin{bmatrix} x_1^{(1)} & x_1^{(2)} & \cdots & x_1^{(K)} \\ x_2^{(1)} & x_2^{(2)} & \cdots & x_2^{(K)} \\ \vdots & \vdots & \ddots & \vdots \\ x_N^{(1)} & x_N^{(2)} & \cdots & x_N^{(K)} \\ \end{bmatrix}$$

We have indexed our observations starting at 1 in the expressions above. That is common in mathematics, but sometimes it is more convenient to use 0 as the initial index, especially when you are trying to be consistent with how indices are assigned in a Python object, such as a list or array. We will alternate between these indexing schemes based on what is most convenient in any given situation.

## Regression and classification

Supervised learning tasks can be further grouped into regression and classification problems, based on whether the target values are numerical or categorical.

A **regression** task is one for which the target values are continuous, real numbers. Examples of regression tasks include:

- Predicting a credit score.
- Predicting the sale price of a home.
- Predicting blood pressure.
- Predicting bodily dimensions of an organism.

A **classification** task is one for which the target values are discrete classes or categories. Examples of classification tasks include:

- Predicting whether a loan is "high risk" or "low risk".
- Predicting the species of an organism based on measurements.
- Classifying elements within an image.
- Recognizing images of hand-written letters or digits.
- Voice recognition.

## Additional resources

The following video from Crash Course Statistics provides an intuitive explanation of supervised learning, along with some examples.

<div class="video"><iframe src="https://www.youtube.com/embed/jmLid2x9eKg" title="Supervised Machine Learning | Crash Course Statistics" loading="lazy" allowfullscreen></iframe></div>

*Supervised Machine Learning* (2018). *Crash Course Statistics* \[Video File\]. Retrieved from YouTube.
