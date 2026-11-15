# Week 1: Values, expressions, and statements

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce some of the concepts and terminology that you will encounter when working with Python. The concepts discussed here are demonstrated in the following Colab notebook: [Values, Expressions, and Statements](https://colab.research.google.com/drive/1of7FsOJMXCa3f7jNogKv9mDAkI0wkf1N?usp=sharing).

## Values

A **value** in Python is anything that represents a piece of information. That information could be numerical, a piece of text, or something more complicated. Each of the five items below represents a value in Python:

`7` `8.214` `'cat'` `'dog'` `'Hello World!'`

Notice that the last three values are each contained in a pair of single quotes. This is necessary to tell Python that this value is intended to be a piece of text rather than a command or keyword that carries specific instructions for Python to process.

We can ask Python to display a value on the screen by using the `print()` function. We demonstrate the usage of this function in the code block below by printing three of the values shown above. When these commands are executed in a cell of a Google Colab notebook, the output will be displayed below the cell. You are encouraged to try this in the notebook provided for this lesson.

```
print(7)
print(8.214)
print('Hello World!')
```

## Data types

Every value in Python has a **data type** that describes what kind of information is represented by the value. There are many different types that a value can have, but the three most basic types in Python are integers, floating-point numbers (or floats), and strings.

- An **integer** is a value that represents a whole number.
- A **float** is a value that represents a decimal number.
- A **string** is a value that represents a piece of text.

We can use the `type()` function to check the type of a value. In the code block below, we check the type of each of the three values from the previous block.

```
print(type(7))                  # Prints <class 'int'>
print(type(8.214))              # Prints <class 'float'>
print(type('Hello World!'))     # Prints <class 'str'>
```

Notice that Python abbreviates the type names as `int`, `float`, and `str`.

## Expressions

An **expression** in Python is a sequence of characters that can be evaluated or reduced down to a single value. Here are three examples of Python expressions:

```
2*(5 + 8)
sum([1, 4, 6, 3])
'Mary' + 'ville'
```

You might be able to guess what values each of these expressions will evaluate as. To check your intuition, we can use the `print()` function to display what each expression evaluates to. This is demonstrated below.

```
print(2 * (5 + 8))             # Prints 26
print(sum([1, 4, 6, 3]))       # Prints 14
print('Mary' + 'ville')        # Prints Maryville
```

If it wasn’t immediately clear to you how these expressions would be evaluated, don’t worry. You’ll learn everything you need to understand these expressions early on in this course.

## Statements

A **statement** is a unit of code containing a complete instruction. Statements often contain expressions. Each line of code in the preceding code block is a statement. Each of the statements represents an instruction to print a value that is described using an expression.

The following notes should help to distinguish between the concepts of values, statements, and expressions.

- The line of code `print(2 * (5 + 8))` represents a **statement**.
- The **statement** above represents an instruction to print a **value** defined by the **expression** `2 * (5 + 8)`.
- The **expression** `2 * (5 + 8)` evaluates to the **value** 26.
- The **statement** shown in the first bullet point above results in the **value** 26 being displayed.
