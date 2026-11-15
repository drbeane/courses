# Week 8: Naive Bayes classification

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will introduce a probabilistic classification model known as the naive Bayes classifier. You will explore the topics discussed in this lesson in this week's lab assignment.

## Classification

Recall that the goal of a classification model in machine learning is to create a model that can be used to generate predictions about the value of a categorical target variable $Y$ based on the values of several feature variables $X^{(1)}, X^{(2)}, ..., X^{(K)}$. We will present a relatively simple probability-based model known as the **naive Bayes classifier** in this lesson.

## Conditional probabilities

Naive Bayes classifiers employ the concept of conditional probabilities. A **conditional probability** is a probability whose calculation depends on the knowledge that a certain condition has occurred or will occur. As a simple example, suppose that a card is drawn at random from a standard deck of 52 playing cards, and you are asked to provide the probability that the card is a diamond. The correct answer would be 1/4 or 0.25 since a quarter of the cards in the deck are diamonds. But suppose you are told that the card is red and then asked to state the probability that the card is a diamond. In this case, the correct answer would be 1/2 or 0.5 since one-half of the red cards are diamonds. The second probability, calculated based on additional knowledge, is an example of a conditional probability. The knowledge that the card drawn was red reduces the uncertainty about the outcome and requires us to adjust our probability.

Suppose that $A$ and $B$ are probabilistic events. The expression $P\left[ A ~|~ B\right]$ is read as "the probability of $A$ given $B$" and represents the conditional probability of the event $A$ given the knowledge that event $B$ has also occurred. We might denote the conditional probability referenced in the example above as $P\left[ \textrm{Card is a Diamond} ~|~ \textrm{Card is Red} \right]$.

A formula for calculating conditional probabilities is provided below.

$$P\left[ A ~|~ B\right] = \frac{P \left[A \textrm{ and } B \right]}{P\left[ B \right]}$$

## Bayes' theorem

The formula for conditional probability can be applied in both directions. It gives one expression for $P\left[ A ~|~ B\right]$ and a similar one for $P\left[ B ~|~ A\right]$, and both contain the probability $P \left[A \textrm{ and } B \right]$. Combining the two expressions produces one of the most important formulas in probability, known as **Bayes' theorem**.

$$P\left[ A ~|~ B\right] = \frac{P\left[ B ~|~ A\right] \cdot P\left[ A \right]}{P\left[ B \right]}$$

Bayes' theorem lets us reverse a conditional probability. This is useful because the probability we want is often hard to measure directly, while the reverse is easy.

As an example, suppose that 20% of all email messages are spam. Suppose also that the word "prize" appears in 60% of spam messages and in 5% of messages that are not spam. If a message contains the word "prize", what is the probability that it is spam? We want $P\left[ \textrm{spam} ~|~ \textrm{prize} \right]$, but the information we have been given is $P\left[ \textrm{prize} ~|~ \textrm{spam} \right] = 0.6$.

To apply the theorem, we need the overall probability that a message contains the word. A message contains it either as a spam message or as a message that is not spam, so we add the two cases.

$$P\left[ \textrm{prize} \right] = 0.6 \cdot 0.2 + 0.05 \cdot 0.8 = 0.12 + 0.04 = 0.16$$

Bayes' theorem then gives the answer.

$$P\left[ \textrm{spam} ~|~ \textrm{prize} \right] = \frac{P\left[ \textrm{prize} ~|~ \textrm{spam} \right] \cdot P\left[ \textrm{spam} \right]}{P\left[ \textrm{prize} \right]} = \frac{0.6 \cdot 0.2}{0.16} = 0.75$$

Seeing the word raises the probability that the message is spam from 20% to 75%. The naive Bayes classifier, as its name suggests, is built on this theorem. Its score for a class multiplies the probability of the class by the probabilities of the observed feature values given the class, which is the numerator of Bayes' theorem.

## Naive Bayes classification

We will now turn our attention to developing formulas for the naive Bayes classifier. We will focus our attention on the binary classification setting in which the target variable $Y$ has only two possible classes, although the ideas presented here can easily be extended to multiclass classification. We will assume that the categories have been integer encoded as 0 and 1. We will (often arbitrarily) refer to class 0 as the **negative class** and to class 1 as the **positive class**.

For the sake of notational convenience, let $X^{(*)}$ refer to a vector of features, $X^{(*)} = \left[ X^{(1)}, X^{(2)}, ..., X^{(K)} \right]$. Let $x = \left[ x^{(1)}, x^{(2)}, ..., x^{(K)} \right]$ be a vector of observed feature values for a specific observation. The goal of a naive Bayes classifier is, in essence, to estimate the following two conditional probabilities:

$P \left[ Y = 0 ~|~ X^{(*)} = x \right]$ and $P \left[ Y = 1 ~|~ X^{(*)} = x \right]$

The first probability is the probability that the observation belongs to the negative class, given the observed feature values. The second is the probability that the observation belongs to the positive class, given the observed feature values. Let $c$ indicate one of the possible classes (either 0 or 1 in our case). Then, the formula for conditional probability presented above tells us that:

$$P \left[ Y = c ~|~ X^{(*)} = x \right] = \frac {P\left[ Y ~=~ c \textrm{ and } X^{(*)} ~=~ x\right] } {P\left[ X^{(*)} ~=~ x\right] }$$

We typically do not know the exact values of the probabilities in the fraction on the right side of the equation above. In a supervised learning setting, we will have access to a training set of data from which we need to learn anything there is to know about our model. Our goal then will be to estimate the indicated probabilities from the training set. The idea behind this is similar to the one that motivates Monte Carlo simulation. We will treat the training set as a sample and will estimate probabilities from proportions calculated from the sample. For instance, in order to estimate $P\left[ X^{(*)} = x\right]$, we would need to determine the proportion of observations in the sample for which $X^{(*)} = x$. That is, we would determine the proportion of training observations for which the feature values are exactly the same as in the observation being classified.

There is an issue with this approach, however. It is quite possible that the number of observations satisfying $X^{(*)} = x$ will be too small to generate reasonable estimates for the desired probabilities. This becomes much more of a concern when the number of features is large, or when there are a large number of possible values for some of the features. In practice, it could easily be the case that there are no training observations that satisfy $X^{(*)} = x$, making the approach we have described impossible to implement.

The solution to this issue presented by naive Bayes classifiers is to assume that the feature values for observations are independent of one another given a particular value of the target variable. In short, this means that the value of any one particular feature has no effect on the value of any other feature. This "naive" assumption is rarely true in practice, but nonetheless, the model it leads to can be quite effective and easy to apply for certain types of problems.

The main consequence of our naive assumption of feature independence (whose derivation we will leave aside for this lesson) is that the numerator of our conditional probability can be decomposed into the product of individual probabilities, as shown below.

$$P \left[ Y = c ~|~ X^{(*)} = x \right] \approx \frac {P\left[ Y ~=~ c \right] \cdot P\left[ X^{(1)} ~=~ x^{(1)} ~|~ Y ~=~ c \right] \cdot P\left[ X^{(2)} ~=~ x^{(2)} ~|~ Y ~=~ c \right] \cdot ... \cdot P\left[ X^{(K)} ~=~ x^{(K)} ~|~ Y ~=~ c \right] } {P\left[ X^{(*)} ~=~ x\right] }$$

The probabilities appearing in the numerator can be more readily estimated from the sample provided by our training set. For example, to estimate $P\left[ Y = c\right]$, we need only look at the target variable, and to estimate $P\left[ X^{(1)} = x^{(1)} ~|~ Y = c\right]$ we can limit our attention to a single feature within the training observations from class $c$.

We still have issues with the denominator, but recall that our ultimate goal will be to compare estimates for $P \left[ Y = 0 ~|~ X^{(*)} = x \right]$ and $P \left[ Y = 1 ~|~ X^{(*)} = x \right]$. These two conditional probabilities will have the exact same denominator, so we can simply ignore it. In doing so we generate a score that can be calculated for each class. The formula for this score is presented below. For the sake of conciseness, we have collected the individual feature probability estimates into product notation as $\prod_{i=1}^K P\left[ X^{(i)} ~=~ x^{(i)} ~|~ Y ~=~ c \right]$.

$$\textrm{score}(c) = P\left[ Y ~=~ c \right] \cdot \prod_{i=1}^K P\left[ X^{(i)} ~=~ x^{(i)} ~|~ Y ~=~ c \right]$$

We can then perform classification by calculating the scores for both classes, $\textrm{score}(0)$ and $\textrm{score}(1)$, and then classifying the observation as the class with the larger score. When working with binary classification, we will often combine the scores into a **likelihood ratio**, as defined below.

$$LR = \frac{\textrm{score}(1)}{\textrm{score}(0)}$$

If $LR > 1$, then we classify the observation as being in the positive class. Otherwise, we classify the observation as being in the negative class.

## Naive Bayes classification with NumPy

In the code block below, we demonstrate how to use NumPy to estimate $\textrm{score}(c)$ for some class $c$. This code assumes that we have access to a training set provided in the form of a 2D feature array `X` and a 1D label array `y`. The feature values for the observation to be classified are provided in the form of a 1D array `x`.

```
Xc = X[y == c, :]                             # Select observations belonging to relevant class
probs = (Xc == x).sum(axis=0) / len(Xc)       # Calculate feature probabilities
score_c = np.mean(y == c) * np.prod(probs)    # Calculate the class score
```

## Spam classification

One common application of naive Bayes classifiers is spam detection for email. In one version of this application, each feature corresponds with a specific word that might be commonly encountered in a spam email. The value for that feature could be either a count of the number of times that word appears in a given email or a binary 0/1 value indicating whether or not the word appears at least once. Class 1 would indicate that the email is spam, and class 0 would indicate that the email is not spam.
