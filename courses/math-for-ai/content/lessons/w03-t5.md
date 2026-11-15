# Week 3: Inverse matrices

**MATH 309/509 Math for AI** · Linear algebra

In this lesson, we will discuss how to use NumPy to find the multiplicative inverse of a matrix. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Inverse Matrices](https://colab.research.google.com/drive/1rCR6qixlXuDQX2jI54bR5_bE5qGfNlJv?usp=sharing).

## Identity matrices

A matrix is said to be a **square matrix** if it has the same number of rows and columns. An **identity matrix** is a square matrix that contains a 1 in each entry along the diagonal from the upper-left corner down to the bottom-right corner and 0 in every other entry. It is standard to use the letter $I$ to denote an identity matrix. The 3x3 identity matrix is displayed below.

$$I = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ \end{bmatrix}$$

Identity matrices are named as they are because they serve as the **multiplicative identity** for matrix multiplication with square matrices. If $M$ is any square matrix and $I$ is the identity matrix of the same size, then $I \cdot M = M$ and $M \cdot I = M$. We can use NumPy to test this claim about identity matrices, as shown below.

```
M = np.array(
    [[3, 8, 4],
     [6, 1, 3],
     [2, 3, 9]]
)

I = np.array(
    [[1, 0, 0],
     [0, 1, 0],
     [0, 0, 1]]
)

print(np.matmul(M, I))   # Prints M
print(np.matmul(I, M))   # Prints M
```

## Inverse matrices

Two square matrices $A$ and $B$ with the same size are said to be **inverses** of each other if $A\cdot B = I$. If a matrix $M$ has an inverse, we typically denote the inverse using the expression $M^{-1}$. Inverse matrices play an important role in linear algebra. Multiplying something by an inverse matrix $M^{-1}$ essentially "undoes" multiplication by $M$, and in that sense, it effectively has the effect of "dividing" by $M$. As an example of an algebraic application of this, suppose that you need to find a matrix $X$ that satisfies the equation $A\cdot X = B$ for some square matrices $A$ and $B$. We can multiply both sides of this equation on the left by the inverse of A to find the solution, as shown below.

$$A\cdot X = B$$

$$\left( A ^{-1} \cdot A\right) \cdot X = A ^{-1} \cdot B$$

$$I \cdot X = A ^{-1} \cdot B$$

$$X = A ^{-1} \cdot B$$

There are algorithms for calculating the inverse of a square matrix (or to determine that it has no inverse). These algorithms are not terribly difficult to understand, but they do require a lot of small calculations and can be somewhat tedious to apply, especially for large matrices. We will not cover those algorithms in this course, but will instead discuss how to use Python and NumPy to calculate matrix inverses.

The NumPy package contains a module named `linalg` that contains many tools specifically used for linear algebra. One of those tools is the `np.linalg.inv()` function that can be used to find the inverse of a matrix. In the code block below, we use this function to calculate the inverse of the following 3x3 matrix:

$$M = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 5 \\ 5 & 6 & 0 \\ \end{bmatrix}$$

```
M = np.array(
    [[1, 2, 3],
     [0, 1, 5],
     [5, 6, 0]]
)

M_inv = np.linalg.inv(M)

print(M_inv)
```

When we run the code above, we obtain the following inverse matrix for $M$:

$$M^{-1} = \begin{bmatrix} -6 & 3.6 & 1.4 \\ 5 & -3 & -1 \\ -1 & 0.8 & 0.2 \\ \end{bmatrix}$$

We can use matrix multiplication to confirm that the matrix found truly is an inverse for $M$.

```
print(np.matmul(M, M_inv))   # Prints the identity matrix
```

The code above should display the 3x3 identity matrix, confirming that the two matrices being multiplied are, in fact, inverses.

## Singular matrices

As we have alluded to previously, not every square matrix has an inverse. If one row in a matrix is a linear combination of the other rows in the matrix, then that matrix has no inverse and is said to be **singular**. Consider the matrix below.

$$M = \begin{bmatrix} 3 & 5 & 2 \\ 1 & 4 & 5 \\ 4 & 9 & 7 \\ \end{bmatrix}$$

Notice that the third row is equal to the sum of the first two rows. This tells us that the matrix is singular and has no inverse. If we were to try to use `np.linalg.inv()` to find the inverse of $M$, we would get an error. This can be confirmed by running the code below.

```
M = np.array(
    [[3, 5, 2],
     [1, 4, 5],
     [4, 9, 7]]
)

M_inv = np.linalg.inv(M)   # Results in an error

print(M_inv)
```
