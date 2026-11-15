# Week 1: Loops and sums

**MATH 309/509 Math for AI** · Python

In this lesson, we will discuss summation notation, and will explain how for loops can be used to calculate sums. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Loops and Sums](https://colab.research.google.com/drive/109CkeLqwkTey8ge5QhZE8hUJjUEo2KRE?usp=sharing).

## Summation notation

A common task to perform in mathematics and related fields is the calculation of a sum of a sequence of numbers. Consider a sequence of $N$ values, denoted as follows:

$$x_0, x_1, x_2, ..., x_{N-1}$$

The sum of this sequence is often denoted using **summation notation** (or **sigma notation**), as shown below.

$$\sum_{i=0}^{N-1} x_i$$

The values in the sequence could be provided in the form of a list of numbers, or according to some formula that depends on the **summation** **index**, $i$. For example, consider the following expression:

$$\sum_{i=0}^{10} i^2$$

This summation expression represents the sum of the squares of the integers from 0 to 10. This is expressed in the form of an equation below.

$$\sum_{i=0}^{10} i^2 = 0^2 + 1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 + 8^2 + 9^2 + 10^2$$

Certainly, the $0^2$ term does not affect the value of this sum, and could be omitted. If desired, we can start the summation index at a value other than 0. For example, the same sum above could be represented by a sum with the summation index starting at 1.

$$\sum_{i=1}^{10} i^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 + 8^2 + 9^2 + 10^2$$

## Using loops to calculate sums

Loops are a useful tool for calculating sums. To do so, you can create a variable outside of the loop to store the running total of the sum. This running total should have a starting value of 0. With each iteration of the loop, we would calculate the value of the new term to be added to the running total, and then increment the running total by this amount.

You can select any name that makes sense for the variable that represents the running total, but you should avoid using the name `sum`, since this is the name of the Python `sum()` function that we discussed in a previous lesson. Storing a value under that name would make the function unavailable. If you are looking for a generic name to use for the running total, the variable name `total` is a good option.

A generic structure for using a loop to calculate a sum is demonstrated in the code block below.

```
total = 0
for i in range(N):
    # Calculate the value of new_term
    total += new_term
```

Note that the loop counter in the code block above will run from `0` to `N-1` for whatever value is stored in `N`. The range can be adjusted as needed for the sake of the particular sum we are working with.

## Example: Sum of consecutive integers

As an example, we will calculate the sum of the first 100 positive integers. This sum can be expressed in summation notation as follows:

$$\sum_{i=1}^{100} i$$

The code block below demonstrates how to calculate this sum using a loop.

```
total = 0
N = 100

for i in range(1, N+1):
    total += i

print(f'The sum of the first {N} positive integers is {total}.')
```

The value of `N` in the example above can be adjusted to alter the range of the sum. You are encouraged to experiment with this in the demonstration notebook.

## Example: Sum of squares of consecutive integers

For the next example, we will calculate the sum of the squares of the first 100 positive integers. This sum can be expressed in summation notation as follows:

$$\sum_{i=1}^{100} i^2$$

The code block below demonstrates how to calculate this sum using a loop.

```
total = 0
N = 100

for i in range(1, N+1):
    total += i**2

print(f'The sum of the squares of the first {N} positive integers is {total}.')
```

Once again, you are encouraged to experiment with this example in the demonstration notebook. You can alter the value of `N` or change the squaring function to sum other functions of `i`.

## Example: Sum of squared error

A major theme of machine learning and artificial intelligence is the creation of models that can be used to generate predictions or estimates for a value. As some examples, we might wish to create a model that estimates someone's credit score based on various inputs, or that predicts someone's likelihood of developing a medical condition, or that estimates the sales price of a house based on characteristics of the property.

When creating a model to generate estimates, we will often want to measure the quality of those estimates in some way. There are many metrics that can be used for measuring the quality of a set of estimates, but one of the most common is the sum of squared errors. Suppose that we have used a model to generate $N$ predictions, and have measured the error in each of those $N$ predictions. Let the error terms be denoted as follows:

$$e_0, e_1, e_2, ..., e_{N-1}$$

The **sum of squared errors** for this set of predictions is defined as follows:

$$SSE=\large \sum_{i=0}^{N-1} e_{i}^2$$

The code block below demonstrates how to use a loop to calculate this sum of squared errors. In this example, the error values are stored in a list, and the individual error terms are accessed by using the loop counter as an index for the list.

```
errors = [1.6, 4.2, -2.7, 3.6, -1.9, 2.4]
N = len(errors)
sse = 0

for i in range(N):
    e = errors[i]
    sse += e**2

print(f'The sum of the squared errors is {sse}.')
```

The example above could be written a bit more concisely by looping over the list of errors directly. This would allow us to avoid the need to work with indices, or to determine the length of the list. This alternate approach is presented in the code block below.

```
errors = [1.6, 4.2, -2.7, 3.6, -1.9, 2.4]
sse = 0

for e in errors:
    sse += e**2

print(f'The sum of the squared errors is {sse}.')
```

Both approaches above are important to understand. The second solution is definitely more concise, but the first solution is more flexible and can be used in a wider range of scenarios.

## Determining length of lists

When using a loop counter as an index to loop over a list, you should avoid hard-coding in the length of the list in your for loop. Instead, you should programmatically determine the length of the list using the `len()` function.

For example, you should **avoid** writing code such as what is shown below:

```
my_list = [10, 20, 30, 40]
for i in range(4):
    # Loop body
```

You should instead use something similar to the following:

```
my_list = [10, 20, 30, 40]
N = len(my_list)
for i in range(N):
    # Loop body
```

This might seem like it introduces an unnecessary extra step, but this actually represents good programming practice. Programmatically determining the length of a list you are looping over will eliminate a step that would need to be performed manually and will make your code more modular and reusable.
