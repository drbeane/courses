# Week 1: Arithmetic operations in Python

**MATH 309/509 Math for AI** · Python

In this lesson, we will demonstrate how to use Python to perform basic arithmetic operations. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Arithmetic Operations](https://colab.research.google.com/drive/1ZBODg45EWPvdNepGWAL4YlsJVImOWXpp?usp=sharing).

## Arithmetic in Python

Python can be used to perform calculations involving addition, subtraction, multiplication, and division, as well as other types of arithmetic operations. These are some of the most basic types of processes that Python is able to perform. Addition, subtraction, multiplication, and division are performed in Python through the use of the `+`, `-`, `*`, and `/` operators, respectively. Examples of each of these operations are provided in the code block below.

```
print(4.2 + 3.7)      # This prints 7.9
print(3 - 15)         # This prints -12
print(6 * 7)          # This prints 42
print(5 / 2)          # This prints 2.5
```

If we attempt to perform an illegal operation, such as dividing by 0, Python will display an error.

```
print(7 / 0)          # This results in an error
```

## Exponentiation

Python uses two consecutive asterisks (`**`) to indicate exponentiation. This is demonstrated in the cell below, where we calculate 3 raised to the 5th power, or $3^5$.

```
print(3 ** 5)         # This prints 243
```

Many programming languages and computer algebra systems use the “caret” symbol (`^`) for exponentiation. Python is somewhat unusual in its use of `**` for exponentiation. It should be noted that Python does use the caret operator, but to indicate a different operation called "bitwise XOR." This can be something of a pitfall because if you typed `3 ^ 5` in an attempt to calculate $3^5$, you would NOT get an error message, but you would instead get an incorrect answer (try this on your own). If you didn’t realize that your answer was wrong, that could cause problems for you down the road.

## Negative exponents and roots

We can use negative exponents when performing calculations in Python. Recall that the mathematical expression $x^{-n}$ is defined by $x^{-n} = \frac{1}{x^n}$. In the next cell, we will calculate $5^{-2}$, which is equal to 1/25, or 0.04.

```
print(5 ** -2)        # This prints 0.04
```

We can also use exponents to calculate roots. Recall that the *n*-th root of a number can be calculated by raising that number to the power $1/n$. This can be represented symbolically as follows: $\sqrt[n]{x} = x ^ {1/n}$.

To provide examples, we will now calculate the square root of 81 and the fourth root of 37.

```
print(81 ** 0.5)      # This prints 9.0
print(37 ** (1/4))    # This prints 2.46632571...
```

Notice that we placed parentheses around the fraction 1/4 in the code cell above. This was necessary for us to obtain the desired result. Python respects the standard mathematical order of operations. If we did not include the parentheses, then Python would have raised 37 to the power of 1 and then divided the result by 4. In summary:

- The Python expression `37 ** 1/4` would result in the following calculation: $\frac{37^1}{4} = 9.25$
- The Python expression `37 ** (1/4)` would result in the following calculation: $37^{1/4} \approx 2.4663$

We will discuss the order of operations in more detail in the next section.

## Order of operations

The value of a mathematical expression can be dependent on the order in which you perform the operations that constitute that expression. To avoid ambiguity or the need for excessive use of parentheses, mathematicians have adopted a standard [order of operations](https://mathworld.wolfram.com/PEMDAS.html) that should be followed when evaluating expressions. Python adheres to these same rules when evaluating expressions.

The order of operations is often summarized using the acronym **PEMDAS**. The meaning of this acronym is explained below.

- **\[P\]arentheses**<br>
  Calculate the value of any expression appearing within a set of parentheses before performing calculations that involve that expression.
- **\[E\]xponentiation**<br>
  Perform calculations involving exponentiation before moving on to other operations.
- **\[M\]ultiplication and \[D\]ivision**<br>
  Perform calculations involving multiplication and division before those involving addition or subtraction.
- **\[A\]ddition and \[S\]ubtraction**<br>
  Perform calculations involving addition and subtraction last.

The code block below demonstrates that Python does indeed perform multiplication prior to addition.

```
print(4 + 5 * 6)       # This prints 34
```

If we wished for the addition to be performed before the multiplication in the expression above, then we could add parentheses to the expression. This is demonstrated below.

```
print((4 + 5) * 6)     # This prints 54
```

We can combine parentheses and operations to form complex arithmetic expressions.

```
print( (1 + 4) * (3 + 8 / 2) ** 2 )      # This prints 245.0
```
