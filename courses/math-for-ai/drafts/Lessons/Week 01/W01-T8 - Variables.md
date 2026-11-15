# Week 1: Variables

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce variables, which are objects used to store values. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Variables](https://colab.research.google.com/drive/1IzERWI69c50dXH83IbmkdCAK3gISRKF4?usp=sharing).

## Variables

A **variable** can be thought of as a container or storage location for a piece of information. Every variable in Python consists of two features: a name and a value.

- A variable’s **value** refers to the piece of information which is stored within the variable. This could be a single number, a collection of numbers, a string of characters, or some more complex type of information.
- A variable’s **name** is used to refer to the variable. We use the name of a variable to access its contents.

We define variables in Python using the **assignment operator**, which is represented by a single equals sign (`=`). When using the assignment operator to define a new variable, the name of the variable must appear on the left side of the operator, and the value assigned to the variable must appear on the right side of the operator. An example of using the assignment operator to create a new variable is shown in the code block below, in which we assign values to variables named `x` and `y`.

```
x = 4        # Assign a value of 4 to the variable x
y = 9        # Assign a value of 9 to the variable y
```

After running the cell above, we will have two variables named `x` and `y` stored in memory for the duration of our Python session. Any time we reference the names of either of these variables, Python will substitute in the value contained in the variable. We can use the `print()` function to confirm that the values stored in `x` and `y` are as expected.

```
print(x)     # Prints 4
print(y)     # Prints 9
```

## Variables and arithmetic

We can perform arithmetic operations using the variables that we have created. Suppose that we have already created the two variables `x` and `y` from the first code block shown above. We can use the values stored in these variables in arithmetic expressions, as shown below.

```
print(2 * x)    # Prints 8
print(x - y)    # Prints -5
```

We can also use previously defined variables in an expression supplying the value for the assignment operator. In the code block below, we create a new variable `z`, setting it equal to the product of `x` and `y`.

```
z = x * y       # Define z
print(z)        # Prints 36
```

## Overwriting variable values

We can overwrite the value of a previously created variable by simply assigning a new value to it. This is demonstrated in the code cell below.

```
a = 2 * 6 + 1    # Define a
print(a)         # Prints 13
a = 3 * 5 / 2    # Overwrite the value in a
print(a)         # Prints 7.5
```

## Self-referential variable definitions

There are occasions in which we wish to update the value of a variable to contain a new value that is based on its current value. For example, we might wish to double the value of a variable or increase the value of a variable by 1. When using the assignment operator to overwrite the value of a variable, we can use the variable itself in the expression on the right side of the operator. The old value will be used to determine the new value, which will then be stored back into the variable, overwriting the old value.

This is demonstrated in the example below, in which we double the value of a variable `k`.

```
k = 7            # Set k to 7
print(k)         # Prints 7
k = 2 * k        # Double the value of k
print(k)         # Prints 14
```

## Incrementation

One of the most commonly encountered ways of updating the value of a variable is to increase it by a fixed amount. This process is known as incrementation. In the cell below, we define a variable `n` to be equal to 5, and we then increment its value by 3.

```
n = 5            # Set n to 5
print(n)         # Prints 5
n = n + 3        # Increment n by 3
print(n)         # Prints 8
```

Incrementation, especially incrementation by 1, is a very common operation to encounter when programming. It is used frequently enough that most programming languages provide a shortcut for performing this task. In Python, incrementation can be performed by using the “plus-equals” operator `+=`. The code block below demonstrates the syntax for using this operator.

```
i = 5            # Set initial value of i to 5.
print(i)         # Prints 5
i += 1           # Increment i by 1.
print(i)         # Prints 6
i += 1           # Increment i by 1.
print(i)         # Prints 7
i += 1           # Increment i by 1.
print(i)         # Prints 8
```

## Variable names

In the example above, we used simple one-letter names for our variables. Python allows the creation of longer, more descriptive names for variables. There are a few rules that need to be followed when naming a variable, however. A variable name in Python can be set to any sequence of characters that adhere to the following rules:

- Variable names can include numbers, letters (uppercase or lowercase), and underscores.
- Variable names cannot contain spaces or any characters not mentioned above.
- Variable names must always start with a letter or underscore.

The code block below provides a few examples of valid variable names.

```
var_1 = 42
var_2 = 37
my_variable = 2.71828
myVariable = 3.14159
_str_var_ = 'some text'
```

The code block below provides a few examples of invalid variable names.

```
1_var = 7
my variable = 3
thi$_is_inv@lid = 19
```

Attempting to run any of the lines of code shown above would result in a **`SyntaxError`**.

It is also important to note that Python variable names are case-sensitive. Variable names that use different combinations of uppercase and lowercase letters, but are otherwise identical will represent different variables. For example, the three lines of code in the cell below will create three separate variables. This can be verified by printing each variable after defining them.

```
my_var = 12
My_Var = 34
MY_VAR = 567
```
