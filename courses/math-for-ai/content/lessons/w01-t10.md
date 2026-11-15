# Week 1: For loops

**MATH 309/509 Math for AI** · Python

In this lesson, we will discuss for loops, which are a tool used for repeating blocks of code. For loops are essential for implementing iterative mathematical processes, which are extremely common in data science, machine learning, and artificial intelligence. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [For Loops](https://colab.research.google.com/drive/1PA6Z90X9iHnLtJmNqvqwjKMhNYX7Oefg?usp=sharing).

## Introduction to loops

A **loop** is a tool that allows us to instruct Python to repeat a task several times, usually with slight variations each time. Python has two types of loops: the **for loop** and the **while loop**. Each type of loop has its own use cases, and both are essential tools for any programmer. However, in this course, we will focus on the for loop.

## Example of a for loop

We will explain the syntax for creating a for loop by providing an example. Consider the code shown below.

```
for i in [1, 2, 3, 4, 5]:
    square = i**2
    print(f'The square of {i} is {square}.')
```

The output of this code block is shown below.

```
The square of 1 is 1.
The square of 2 is 4.
The square of 3 is 9.
The square of 4 is 16.
The square of 5 is 25.
```

## Explanation of the example

Let's break down the lines of code in the code block above. The first line defines the for loop. That line is shown below:

```
for i in [1, 2, 3, 4, 5]:
```

There is a lot going on with this line. The `for` keyword indicates that we are starting a for loop. The variable `i` is a loop counter. This is a variable whose value will change with each iteration of the loop, and that is used to vary the behavior of each iteration. The word `in` is used to separate the loop counter from the list of values that it will be assuming, which is given by `[1, 2, 3, 4, 5]`. Finally, the line concludes with a colon character, `:`. This is a required piece of syntax. The first line in a for loop must always end in a colon.

The first line of the loop might be read as "For each value i in the list of integers 1, 2, 3, 4, and 5...". The later lines in the loop essentially finish that sentence by describing exactly what should be accomplished during each iteration of the loop. These lines are referred to as the **body** of the loop. The body can contain one or more lines of code. The body of our loop contains two lines.

- The first line in the body creates a variable named `square`. This variable is set to be equal to the square of the current value of the loop counter `i`. The loop counter will change with each iteration, and so the value of `square` will be different with each iteration of the loop.
- The second line in the body prints a message that states the current value of the loop counter, as well as its square.

Notice that both lines inside the loop are indented by four spaces. This indentation is essential, since this is how Python distinguishes between lines of code that are intended to be part of the body and those that are not.

## Additional comments

There are a few additional items that should be pointed out about the previous example, and about for loops in general:

- The loop counter in a for loop does not have to be named `i`. This is a commonly used name, but other common names include `j`, `k`, `n`, and `m`. Sometimes, more descriptive variable names are used instead.
- The values in the list that we are looping over do not have to be consecutive. For example, we could replace the list `[1, 2, 3, 4, 5]` with a different list, such as `[5, 7, 42, 25, 1]`. The loop would still work, but the loop counter would assume these values instead.
- The values in the list that we are looping over do not have to be integers, or even numerical. However, we will almost always work with numerical lists when using loops in this course.

## Python ranges

The benefit of using loops is that they allow us to quickly repeat a set of instructions many times without needing to make redundant copies of lines of code. It is not uncommon to create a loop that is intended to run hundreds, thousands, or millions of times. In these cases, it would be tedious and perhaps impractical to first create a list that contained the required number of integers. Fortunately, Python provides a special data type, called a `range`, that can be used to easily represent sequences of consecutive integers. A range is created using the syntax shown below.

`range(a, b)`

The values `a` and `b` are required to be integers with `a < b`. The range `range(a, b)` represents the sequence of consecutive integers starting at `a`, and going up to, **but not including**, `b`. For example, `range(1, 6)` would represent the sequence of integers 1, 2, 3, 4, 5. We could rewrite our previous loop example using this range instead of the list we created. This is demonstrated below.

```
for i in range(1, 6):
    square = i**2
    print(f'The square of {i} is {square}.')
```

This would produce exactly the same results as the previous example, but would be easier to scale if we wanted to increase the range of values we were looping over. You are encouraged to experiment with this in the demonstration notebook. Replace the values 1 and 6 in the range with other values, and see how this affects the output of the loop.

It is important to remember that ranges do not actually include the second value listed. This is a bit of a quirk in Python that often trips up people who are new to the language. It is something you will likely get used to fairly quickly, however.

When creating a range, we will sometimes specify only a single integer, as shown below.

`range(b)`

A range created in this way is always assumed to start at 0 and go up to, but not include, `b`. In other words, `range(b)` is a shorthand for `range(0, b)`. It is interesting to note, and useful to remember that `range(b)` will always contain `b` values. For example, `range(4)` contains 4 values, and these are the integers 0, 1, 2, and 3.
