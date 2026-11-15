# Week 2: One-hot encoding

**MATH 309/509 Math for AI** · Python

In this lesson, we will discuss an application of two-dimensional arrays known as one-hot encoding. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [One-Hot Encoding](https://colab.research.google.com/drive/1BzimcxjnNNzzsF9Dpij4dgfl7TnMwUlG?usp=sharing).

## Categorical variables

In the fields of statistics and machine learning, the term **variable** is used to describe any characteristic or quantity that can be observed as the result of an event and subsequently measured, but that might vary from one occurrence of the event to another. In a machine learning context, variables are often separated into **target variables** and **predictor variables**, with the goal of a machine learning model being to predict or estimate the values of the target variables based on the given values of the predictor variables. Variables can also be subdivided into **numerical (or quantitative)** **variables**, which are variables whose values can be represented numerically in a meaningful, non-arbitrary way, and **categorical (or qualitative)** **variables** whose values are not inherently numerical in nature. Categorical variables typically take on values selected from a finite collection of **categories** or **classes**.

When building a machine learning model that includes categorical variables among its target or predictor variables, it is often necessary to numerically encode these categorical variables before applying our modeling tools. We will discuss two such encoding schemes in this lesson.

## Integer encoding

**Integer encoding** of a categorical variable is performed by assigning a unique integer value to each distinct class of the categorical variable. If there are $K$ classes for the variable, then it is standard (but not required) to assign the integers 0 to $K-1$ to the classes. The exact way in which the assignment is performed is arbitrary, but common techniques are to assign the integer values to the classes in alphabetical order (if the classes are represented as words or letters) or by assigning the integers in order based on the frequency of the classes within the set of observations being encoded.

For example, suppose that we have a categorical variable with the following four classes:

`'A', 'B', 'C', 'D'`

A natural (but still arbitrary) integer encoding scheme would be to assign the integers 0 through 3 to the classes in alphabetical order, as shown below.

```
'A' --> 0
'B' --> 1
'C' --> 2
'D' --> 3
```

Suppose that we were provided with the following list of six observations for our categorical variable:

`['C', 'A', 'A', 'B', 'C', 'D']`

If we applied our integer encoding scheme to these observations, we would get the following encoded list:

`[2, 0, 0, 1, 2, 3]`

## Dictionaries

A **dictionary** is a Python data type that is similar to a list, but that allows values to be looked up using non-numerical alternatives to indices. The items in a dictionary are **key-value pairs** that consist of two entities: the **key** and the **value**. The values represent the data stored in the dictionary, and the keys are used to look up the values. The keys in a dictionary perform a function similar to that of the indices in a list, but keys are not required to be integers.

We define a dictionary by listing the key-value pairs inside a set of curly braces `{}`. Each key-value pair is given in the form `key:value`, and the different pairs in the dictionary are separated by commas. Dictionaries have many applications and are a natural choice for representing an integer encoding scheme for a categorical variable. In the code block below, we create a dictionary to represent our encoding scheme from above.

```
integer_enc = {'A':0, 'B':1, 'C':2, 'D':3}
```

In the cell below, we demonstrate the selection of values from a dictionary. In this example, we determine the integer encoding for each of our four classes.

```
print(integer_enc['A'])    # Prints 0
print(integer_enc['B'])    # Prints 1
print(integer_enc['C'])    # Prints 2
print(integer_enc['D'])    # Prints 3
```

## Example: Counting words

Dictionaries are well suited to counting. The code below counts how many times each word appears in a sentence. We use the string method `split()` to break the sentence into a list of words. For each word, we check whether it is already a key in the dictionary. If it is, we increase its count by 1. If not, we add it with a count of 1.

```
sentence = 'the cat sat on the mat and the dog sat on the rug'
word_counts = {}                       # Create an empty dictionary
for word in sentence.split(' '):       # Loop over the words
    if word in word_counts:
        word_counts[word] += 1         # Seen before: add 1 to its count
    else:
        word_counts[word] = 1          # First time: start its count at 1
print(word_counts)
```

The output is shown below.

`{'the': 4, 'cat': 1, 'sat': 2, 'on': 2, 'mat': 1, 'and': 1, 'dog': 1, 'rug': 1}`

Representing a piece of text by its word counts is known as a **bag-of-words** model. It ignores the order of the words, but it is simple and was for many years the standard way to prepare text for tasks such as spam detection. We will use word counts again in Week 8.

## Using a dictionary to apply an integer encoding

In the code block below, we use the dictionary representing our integer encoding to apply the encoding scheme to a collection of six observations of the categorical variable.

```
y = ['C', 'A', 'A', 'B', 'C', 'D']     # Create list of classes

y_enc = []                             # Create empty list

for item in y:                         # Loop over the classes
    enc_item = integer_enc[item]       # Get encoded value for current class
    y_enc.append(enc_item)             # Add encoded value to list

print(y_enc)                           # Print the encoded list
```

The output of the code block above will be the integer-encoded list that we mentioned previously.

`[2, 0, 0, 1, 2, 3]`

## One-hot encoding

Integer encoding is frequently used to represent the values for a categorical variable. Unfortunately, in many cases, it is not a sufficient tool for preparing a categorical variable for use in a machine learning model. Integer encoding produces a numerical list of values. If a machine learning tool does not have a way of understanding that these values are associated with a categorical variable, then it will simply treat the values as it would any other numerical values, and will apply numerical significance to encoded values that were assigned arbitrarily. Some tools provided by some machine learning packages provide the user with the option to specify that an array of integers represents an integer-encoded categorical variable, and some are able to make that determination in certain situations based on context. In many cases, however, this is not possible, and an integer encoding is simply not suitable.

A commonly used alternative to integer encoding is **one-hot encoding**. Applying one-hot encoding to a set of observations of a categorical variable will produce a two-dimensional array. The number of rows in the array will be equal to the number of observations, and the number of columns in the array will be equal to the number of classes. Each row will be associated with a single observation, and each column will be associated with a single class. The values in the array will all be 0 or 1. Each row will contain a single value of 1, and that value will occur in the column that represents the correct class for that observation.

The first step when performing one-hot encoding is generally to develop an integer encoding scheme for the categorical variable. This is done to determine the association between classes and columns.

The code block below demonstrates an example of performing one-hot encoding on a list of values for a categorical variable. In this example, we make use of the NumPy function `np.zeros()`, which is used to create an array that consists entirely of zeros. We then loop over the observations, use the integer encoding from before to determine the column number for the 1 for each observation, and then set the appropriate entry of the one-hot encoded array equal to 1.

```
one_hot_array = np.zeros(shape=(6,4))  # Create 2D array of zeros

for i in range(len(y)):                # Loop over all observations
    item = y[i]                        # Select item to encode
    col_idx = integer_enc[item]        # Get integer encoding
    one_hot_array[i, col_idx] = 1      # Set entry of encoded array to 1

print(y)                               # Print original list
print(one_hot_array)                   # Print encoded array
```

The one-hot encoded array created in the example above is shown below.

```
[[0. 0. 1. 0.]
 [1. 0. 0. 0.]
 [1. 0. 0. 0.]
 [0. 1. 0. 0.]
 [0. 0. 1. 0.]
 [0. 0. 0. 1.]]
```

## Using scikit-learn for one-hot encoding

You will rarely need to perform one-hot encoding "manually," as we have done above. Most machine learning packages will provide tools for performing one-hot encoding. The scikit-learn package is the most commonly used Python package for machine learning. It provides a `OneHotEncoder` tool for performing one-hot encoding. In the code block below, we will repeat the task from the previous example using `OneHotEncoder`.

```
from sklearn.preprocessing import OneHotEncoder

y_col = np.array([y]).T
one_hot_array = OneHotEncoder(sparse_output=False).fit_transform(y_col)
print(one_hot_array)
```

The array `one_hot_array` created by this code will be identical to the one created in the previous example.
