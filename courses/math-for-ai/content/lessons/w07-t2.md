# Week 7: Random number generation in NumPy

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will introduce the `random` module of the NumPy package, which is used for pseudo-random number generation. We will discuss additional tools from this module in later lessons. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Random Sampling with NumPy](https://colab.research.google.com/drive/1xhN6jA6OqiJlF_Q46yAhdKmqDjCH2lFP?usp=sharing).

## Random sampling with NumPy

Python comes equipped with a package called `random` that can be used to generate pseudo-random numbers. However, the NumPy package also provides tools for random number generation, which are accessible from the `np.random` module. The tools provided by NumPy are more robust than the ones found in the standard `random` package, and they have the advantage of being able to produce entire arrays of random numbers.

The simplest tool provided by NumPy for randomization is the `choice()` function. This function will select and return an item at random from a list, range, or array. The function is called using the expression `np.random.choice(some_collection)`. In this example, `some_collection` is the collection from which the random elements are to be drawn. The process of randomly selecting one or more items from a collection is known as **sampling**. One or more items collected through a sampling process is known as a **sample**.

By default, the `choice()` function will sample a single random element from the collection it is provided, but it does have an optional `size` parameter that can be used to indicate that a random array or matrix should be generated. If a positive integer is provided to this parameter, then `choice()` will return a one-dimensional array containing that number of randomly selected elements of the collection. If a tuple of integers is provided for `size`, then `choice()` will return a random multi-dimensional array with that shape.

The code block below demonstrates three example usages of `choice()`. The first generates a single random integer, the second generates an array of 20 random integers, and the third generates a 4x5 matrix of random integers. In each case, the random integers are selected from `range(1000)`, which corresponds to the set of integers from 0 to 999, inclusive.

```
rand_number = np.random.choice(range(1000))                # Generate a single random number
rand_array  = np.random.choice(range(1000), size=20)       # Generate an array of 20 random numbers
rand_matrix = np.random.choice(range(1000), size=(4,5))    # Generate a 4x5 matrix of random numbers
```

Note that the collection that is being sampled does not have to contain numerical values. We can provide `choice()` with a list of any type of object that we would like to sample. For example, if we wanted to simulate a coin flip, we might sample from the list `['H', 'T']`. This is demonstrated in the code block below.

```
flip_result = np.random.choice(['H', 'T'])                 # Simulate a coin flip
```

## Sampling probabilities

By default, the sampling performed by `choice()` is uniform. That means that each item in the collection has an equal likelihood of being selected for the sample. In cases where uniform sampling is not desired, `choice()` provides an optional parameter `p` that can be used to indicate the probabilities with which the elements are to be sampled. The value provided to this parameter should be a list or array of the same size as the collection being sampled from, and the elements of the list or array should be probabilities that sum to 1.

As an example, suppose that we want to simulate a coin flip for an unbalanced coin that has a 40% chance of turning up heads and a 60% chance of turning up tails. This can be accomplished using the code shown below.

```
flip_result = np.random.choice(['H', 'T'], p=[0.4, 0.6])   # Simulate a flip of an unbalanced coin
```

## Sampling with and without replacement

When sampling multiple values using `choice()`, the sampling is performed **with replacement** by default. This means that after an item is sampled, it is returned to the pool of options and could potentially be sampled again in a later selection. If sampling **without replacement** is preferred, then we can set `replace=False` when calling the `choice()` function. Both forms of sampling are demonstrated in the code block below.

```
sample_1 = np.random.choice(range(10), size=8)                  # Sampling with replacement
sample_2 = np.random.choice(range(10), size=8, replace=False)   # Sampling without replacement
```

If you print the arrays `sample_1` and `sample_2` created above, you will likely see that `sample_1` contains duplicate values. The array `sample_2`, however, will be certain not to contain any duplicates.

## Setting a random seed

The `np.random.seed()` function can be used to set a seed for the pseudo-random number generation algorithm used by NumPy. This involves simply passing an integer value to the function. Setting a seed before calling `choice()` will guarantee reproducible results. Consider the code in the code block below. Because we are setting a seed, this code will produce the same result (102) every time. However, if we remove the line that sets the seed, then the results will vary with each execution.

```
np.random.seed(42)                   # Set the seed
x = np.random.choice(range(1000))    # Sample a random number
print(x)                             # Print the number (which will be 102)
```

Note that when you set a seed for the NumPy random generator, that seed will be in effect for any code that you run later, even if it is in a different cell. That is sometimes not desirable. If you don't want later results to be affected by a seed, you can unset the NumPy seed by passing `None` to the seed function, as follows: `np.random.seed(None)`.

## Example: Simulating die rolls

We will now consider an example with applications in gaming. Suppose that a game requires players to frequently roll a pair of six-sided dice and sum the results. Assume that we would like to simulate the results of a sequence of 20 such rolls. There are multiple ways of accomplishing this, but one way would be to generate a random matrix with shape `(20,2)` with the values sampled from `range(1,7)`. Note that the second value in the range is a 7 because ranges go up to but do not include the second number. Each row of this matrix would contain 2 values, which would represent a pair of die rolls. We would have 20 such pairs. We could then sum the pairs of rolls by calling the `sum()` method of the matrix, summing along the rows (by setting `axis=1`). This is demonstrated in the code block below.

```
rolls = np.random.choice(range(1,7), size=(20,2))   # Simulate the rolls
totals = rolls.sum(axis=1)                          # Sum along the rows
print(totals)                                       # Print the results
```

## The newer generator interface

The functions in this lesson, such as `np.random.seed()` and `np.random.choice()`, share a single hidden random number generator. NumPy also provides a newer interface in which you create a generator object yourself and call its methods. The NumPy documentation recommends this approach for new code. A seed is supplied when the generator is created.

```
rng = np.random.default_rng(42)       # Create a generator with a seed of 42
x = rng.choice(range(1000))           # Sample a random number
print(x)                              # Prints 89
```

Notice that the result differs from the value of 102 obtained above with the same seed. The two interfaces use different algorithms, so they produce different sequences. We will continue to use the older functions in this course because you will see them in a great deal of existing code, but you should be able to recognize both.

## Example: Sampling the next word

The `choice()` function with the `p` parameter is, in miniature, how an AI system generates text. At each step, a language model calculates a probability for every word that could come next, and the next word is then selected at random according to those probabilities.

Suppose that a model has calculated the probabilities below for the first word of a sentence. The code samples a first word 10 times.

```
np.random.seed(7)
words = ['the', 'a', 'my', 'your']
probs = [0.5, 0.3, 0.15, 0.05]
print(np.random.choice(words, p=probs, size=10))
```

With a seed of 7, the output is as follows:

`['the' 'a' 'the' 'a' 'your' 'a' 'a' 'the' 'the' 'the']`

The most likely word is selected most often, but not always. This is why an AI assistant can give a different response each time it is asked the same question. Setting a seed removes the variation, which is what the developers of such systems do when they need to reproduce a result.

## Example: Shuffling, initializing, and dropout

Random numbers are used at several other points when a machine learning model is trained. We give three examples here.

**Shuffling.** A training set is usually placed in a random order before it is used, so that the order in which the observations were collected does not influence the model. The function `np.random.permutation()` returns the integers from 0 up to a given number in a random order. These can be used as indices to shuffle arrays.

```
np.random.seed(7)
print(np.random.permutation(8))       # Prints [2 5 0 6 3 1 4 7]
```

**Initializing weights.** The weights of a neural network must be given starting values before training begins. They are set to small random numbers. The function `np.random.normal()`, which we will study in Week 8, generates random numbers clustered around a central value. The code below creates a 2 by 3 weight matrix with values near 0.

```
np.random.seed(7)
W = np.random.normal(loc=0, scale=0.1, size=(2, 3))
print(W.round(4))
```

```
[[ 0.1691 -0.0466  0.0033]
 [ 0.0408 -0.0789  0.0002]]
```

**Dropout.** One technique for improving a neural network is to randomly switch off some of its nodes during each training step, which prevents the network from relying too heavily on any one node. This is called **dropout**. It is carried out by multiplying the outputs of a layer by a random array of zeros and ones. In the code below, each node is kept with probability 0.8.

```
np.random.seed(7)
mask = np.random.choice([0, 1], p=[0.2, 0.8], size=10)
print(mask)                           # Prints [0 1 1 1 1 1 1 0 1 1]
outputs = np.array([0.5, 1.2, 0.0, 2.1, 0.7, 0.3, 1.8, 0.9, 0.4, 1.1])
print(outputs * mask)                 # Prints [0.  1.2 0.  2.1 0.7 0.3 1.8 0.  0.4 1.1]
```
