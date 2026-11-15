# Week 1: Conditional statements

**MATH 309/509 Math for AI** · Python

In this lesson, we will discuss conditional statements, which can be used to alter the behavior of a Python script based on certain logical criteria. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Conditional Statements](https://colab.research.google.com/drive/1Zvf_4Un0LNtsx0hXF4bemxEPH2A4yAEU?usp=sharing).

## Boolean values

When writing a program to automate a task, it is often necessary for the program to be able to check whether or not a certain logical condition is true, and then select an action based on this evaluation. As a tool for evaluating logical expressions, Python provides us with a **Boolean** data type. Boolean variables can take only one of two values: `True` or `False`. In the code block below, we print both of the two Boolean values.

```
print(True)
print(False)
```

## Comparison operators

Python provides many **comparison operators** for checking to see if certain relationships exist between two values. Each comparison operator will evaluate as a single Boolean value. The most commonly used comparison operators are provided in the list below.

- **Less than:** `<`
- **Less than or equal to:** `<=`
- **Equal to:** `==`
- **Greater than:** `>`
- **Greater than or equal to:** `>=`
- **Not equal to:** `!=`

Note that the equality comparison operator (`==`) consists of two equal signs, while the assignment operator (`=`) consists of one equal sign. Mixing up these operators is a very common mistake, even for experienced programmers.

The code block below provides several examples of using comparison operators to compare two integer values, one of which is stored in a variable.

```
x = 6                  # Set the value of x to 6

print(x < 9)           # Prints True
print(x > 6)           # Prints False
print(x == 7)          # Prints False
print(x == 2*3)        # Prints True
print(x != 10 - 3)     # Prints True
```

The examples above all involve comparisons between numerical values. We can compare string (text) values as well. Strings are ordered alphabetically (or lexicographically) with all uppercase letters being considered "less than" all lowercase letters.

```
print('cat' == 'Cat')    # Prints False
print('cat' < 'dog')     # Prints True
print('Dog' < 'cat')     # Prints True
print('Dog' < 'Cat')     # Prints False
```

## If statements

We can use **conditional statements** to control how or if portions of our code will be executed, based on the "truthiness" of logical criteria that we provide. The most basic type of conditional statement is an **if statement**, which is used to determine whether or not a set of statements will be executed. The syntax for an if statement is as follows:

```
if condition_to_be_evaluated:
    code to be executed if condition is true
    this code can consist of several lines
```

The code inside of an if statement is known as the **body** of the if statement. The body is executed if and only if the logical condition following the `if` keyword evaluates to `True`. There are two important syntactical details to notice here. The first is that the condition must be followed by a colon character. The second is that each line of the body of the if statement is indented by the same number of spaces. Four spaces are common, and when you are editing a code cell in Colab, the `[TAB]` key will insert four spaces.

A simple example of an if statement is provided below. As written, this code will NOT print anything. You should experiment with the value of `grade` in the demonstration notebook to see how different values affect the output of the code cell.

```
grade = 34

if grade >= 60:
    print('You passed the exam.')
    print('Congratulations!')
```

## If-else statements

We can use an if statement to determine whether or not a particular set of actions will be performed. But we will occasionally want to use a condition to determine which of two sets of actions will be completed. This functionality is provided to us by an **if-else statement**. The syntax for an if-else statement is as follows:

```
if condition_to_be_evaluated:
    code to be executed if condition is true
else:
    code to be executed if condition is false
```

The code block below contains a modification of the example above that involves an if-else statement. As before, you should experiment with the value of `grade` to explore how this affects the results.

```
grade = 34

if grade >= 60:
    print('You passed the exam.')
    print('Congratulations!')
else:
    print("You failed the exam.")
    print("Better luck next time.")
```

## Example: Counting grades

The code cell below provides an example in which we use a for loop and a conditional statement to analyze the contents of the list. The list we are provided in this example is intended to represent a collection of grades for students in a course. The loop and if statements are used to count the number of grades that are C or better. Pay careful attention to the indentation of the lines of code in this example, as they are important.

```
grades = ['C', 'B', 'D', 'A', 'F', 'F', 'B', 'D', 'A', 'C']

count = 0                 # Set count to 0
for g in grades:          # Loop over all grades
    if g <= 'C':          # Check if current grade is A, B, or C
        count += 1        # If so, increment count

print(count)              # Prints 6
```
