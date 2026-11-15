# Week 1: Defining functions

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce the concept of a function. A function is a useful tool for encapsulating and re-using pieces of code. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Functions](https://colab.research.google.com/drive/1e0g0iag1rUe_RVbnDuzQQJBegFsmcOq6?usp=sharing).

## Introduction to functions

A **function** is, in a sense, a sequence of instructions that has been given a name. Functions usually (but not always) take some number of inputs, called **parameters**, and usually (but not always) give an output, called the **return value**.

We will now discuss the syntax for creating a function in Python. The details of this are provided in the list below.

- Functions in Python are created using the `def` keyword.
- Following the `def` keyword, we write the name of the function. We can use any valid variable name as the name for a function.
- The function name is followed immediately by a set of parentheses, with no space in between.
- Within the parentheses, we place the names of any parameters (or inputs) to be used for the function. We can include any number of parameters (even zero).
- The closing parenthesis is followed by a colon.
- The body of the function is defined by one or more indented lines of code that immediately follow the definition line.
- The final line of the function should be a return statement that determines the output of the function. This line should start with the `return` keyword, and should be followed by an expression that defines the value to be returned (i.e., the output).

The rules above are demonstrated in the code block below for a function with 3 parameters.

```
def function_name(param1, param2, param3):
    # some code to be executed
    return output_value
```

## Calling a function

When we use a function in our code, we say that we are **calling** the function. A function can be called by typing its name, followed by parentheses, and then supplying values for each of the parameters. The values that are provided to parameters when calling a function are called **arguments**.

A generic example of calling a function is demonstrated below for the function defined in the previous code block. We are using variables `x1`, `x2`, and `x3` to indicate the arguments being provided to the function.

```
output_value = function_name(param1=x1, param2=x2, param3=x3)
```

When a function is called, the lines of code within the body of the function are executed with the arguments provided substituted in for the parameter values. When the function finishes executing, the expression used to call the function will be evaluated as the return value of the function. In the example above, we are assigning the return value to a variable named `output_value`.

## Polynomial function

Let's provide a simple example of a function with two parameters. Our function will represent the following two-variable polynomial:

$$f\left(x,y\right)=x^3y - 5x y^2+4x+12$$

The code used to define the function is provided below.

```
def f(x, y):
    return x**3 * y - 5 * x * y**2 + 4 * x + 12
```

For this particular function, the body consists of only a return statement. We could certainly include more lines prior to the return statement, however. Even for this function, we could have calculated the return value in an intermediate variable (perhaps with a name such as `output`) and then returned that variable. This is not necessary, however.

In the cell below, we will demonstrate how to call a function by calculating $f\left(2.8,3.3\right)$ and $f\left(-1,4\right)$.

```
z1 = f(x=2.8, y=3.3)   # Call the function with x=2.8, y=3.3
print(z1)              # Prints -56.8184

z2 = f(x=-1, y=4)      # Call the function with x=-1, y=4
print(z2)              # Prints 84
```

Notice that we explicitly stated the names for the parameters when calling the function `f` in the previous example. This is not strictly necessary. We can simply provide the values for the arguments without listing the parameters, as long as we provide the arguments for the parameters in the same order in which the parameters appeared in the original function definition. For example, the expressions `f(2.8, 3.3)` and `f(x=2.8, y=3.3)` produce identical results.

## Sum of powers

For our next example, we will write a function named `sum_of_powers` that can be used to calculate the **sum of powers** of values stored in a list. Sums of powers are encountered frequently in data science and artificial intelligence, especially in the form of sums of squares. The function will allow us to provide a list of values and a power. It will raise each of the values in the list to the specified power and will return the sum of the results. The definition of this function is expressed mathematically below.

$$\textrm{values} = \left[ v_1, v_2, v_3, ..., v_n \right]$$

$$\textrm{sum\_of\_powers} \left( \textrm{values}, k \right) = \sum_{i=1}^n v_i^k$$

In order to calculate the return value of the function, we will use a loop inside of a function.

```
def sum_of_powers(values, k):
    total = 0
    for v in values:
        total += v ** k
    return total
```

We will provide an example of calling this function in the code block below.

```
my_list = [6, -7, 2, 5, -4]                         # Define the input list

sum_squares = sum_of_powers(values=my_list, k=2)    # Call function with k=2
print(sum_squares)                                  # Prints 130

sum_cubes = sum_of_powers(values=my_list, k=3)      # Call function with k=3
print(sum_cubes)                                    # Prints -58
```

This example illustrates a few important concepts. First, we see that we can use for loops within the body of a function. When doing so, we must take care to add the appropriate indentation for both structures. The body of the function should be indented 4 spaces, and the body of the loop (which is part of the body of the function) should be indented another 4 spaces.

We also see that the arguments provided to function parameters can be of a variety of different data types. The values that we provided to the function `f` were floating point and integer values, while the arguments provided to `sum_of_powers` consisted of a list and an integer. Python does not require you to specify data types for function parameters and does not, by default, restrict the types of values that are provided as arguments. If the function can be executed with the given values, it will be. Otherwise, an error will be generated. Generally speaking, it is up to the individual using a function to make sure that they are providing the function with arguments that have appropriate data types.

## Example: Accuracy of a classifier

Functions are a natural tool for calculations that are repeated often. One such calculation in machine learning is measuring the **accuracy** of a classification model, which is the proportion of its predictions that are correct. The function below accepts a list of predictions and a list of correct labels. It counts the positions at which the two lists agree and divides by the number of labels.

```
def accuracy(predictions, labels):
    correct = 0
    for i in range(len(labels)):
        if predictions[i] == labels[i]:
            correct += 1
    return correct / len(labels)
```

In the code block below, we apply the function to the predictions of a model that labels email messages as spam or as ham (a common term for messages that are not spam). The model is correct for the first, second, and fourth messages.

```
pred = ['spam', 'ham', 'spam', 'ham', 'ham']
true = ['spam', 'ham', 'ham', 'ham', 'spam']
print(accuracy(pred, true))                 # Prints 0.6
```

This example combines a function, a for loop, and an if statement. The body of the function is indented 4 spaces, the body of the loop 8 spaces, and the body of the if statement 12 spaces.

## Lambda functions

Python provides two keywords that can be used to define functions: the aforementioned `def` keyword, and the lesser-known `lambda` keyword. Defining a function using the `lambda` keyword involves simpler syntax than using the `def` keyword and is primarily used to define very simple functions with a single line of code.

The syntax for defining a lambda function is demonstrated in the code block below. The word `"parameter"` stands for the name of the function's input. The word `"return_value"` should be replaced with an expression that calculates the return value using the parameter.

```
lambda parameter : return_value
```

We will now provide an example of using `lambda` to define a function. For this example, we will define a function to represent the following polynomial function:

$$g \left( x \right) = 3x^2 - 5 x + 14$$

In the code block below, we define the function $g \left( x \right)$ and then print the values of $g \left( 7 \right)$ and $g \left( -4.2 \right)$.

```
g = lambda x : 3 * x**2 - 5 * x + 14      # Define the function g
print(g(7))                               # Prints g(7) = 126
print(g(-4.2))                            # Prints g(-4.2) = 87.92
```

The `def` keyword is used much more frequently than `lambda`, and is appropriate for defining simple or complex functions. The `lambda` keyword, on the other hand, involves simpler syntax than `def`, but is only well-suited for defining simple, single-line functions.

One common application of lambda functions is to create **anonymous functions**, or functions that are not given a name by being assigned to a variable. Such functions are created in memory, used for some purpose, and are then discarded. We will use lambda functions in several later lessons as a quick way to define mathematical functions.
