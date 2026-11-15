# Week 3: Systems of linear equations

**MATH 309/509 Math for AI** · Linear algebra

In this lesson, we will discuss how to use tools from NumPy to solve linear systems of equations. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Linear Systems](https://colab.research.google.com/drive/1intIQpajnw-5_4yJzrBOP3TEliCi_dMX?usp=sharing).

## Systems of linear equations

A **system of equations** is a set of equations that each involve one or more variables. A system of equations is said to be **linear** if each of the equations is a linear equation. A **solution** to a system of equations is a particular assignment of values to the variables appearing in the system that results in all of the equations in the system being satisfied simultaneously. An example of a system of equations is provided below.

$$\begin{align*} 4 x_1 - 2 x_2 + 5 x_3 &= 12 \\ -3 x_1 + 7 x_2 + 3 x_3&= 26 \\ 8 x_1 - x_2 - 2 x_3 &= 18 \end{align*}$$

The study of linear systems has been a primary motivating factor in the development of linear algebra, and solving such systems is one of the most fundamental use cases for linear algebra. In this lesson, we will explain how to use tools from NumPy to solve systems of equations.

## Matrix representation of systems

When using linear algebra tools to solve systems of equations, we will typically need to first put the system into **standard form** by placing each term containing a variable on the left side of its equation and placing each constant term on the right side of its equation. The system shown above is already in standard form.

Next, we need to create a **coefficient matrix** $A$, a **variable column vector** $x$, and a **constant column vector** $b$. The coefficient matrix will have one row for each equation in the system and one column for each variable. An entry of the coefficient matrix is equal to the coefficient of the corresponding variable within the relevant equation. The variable column vector contains the variables used within the system. The order in which the variables appear within the variable vector (from top to bottom) should be consistent with the ordering of the variables in the columns of the coefficient matrix (from left to right). The constant column vector contains the constant values on the right side of the equations in the system. The objects $A$, $x$, and $b$ for the system shown above are as follows:

$$A = \begin{bmatrix} 4 & -2 & 5 \\ -3 & 7 & 3 \\ 8 & -1 & -2 \\ \end{bmatrix}$$

$$x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ \end{bmatrix}$$

$$b = \begin{bmatrix} 12 \\ 26 \\ 18 \\ \end{bmatrix}$$

The coefficient matrix, variable vector, and constant vector can be used to write a system of equations in **matrix form**, as shown below:

$$A x = b$$

## Solving a system of equations

We will focus our attention on the situation in which the number of equations in the system is equal to the number of variables in the system since this is the most commonly encountered case when working with systems of equations. Such a system is guaranteed to have a single, unique solution if certain criteria are satisfied.

If a linear system has $N$ equations and $N$ variables, then the coefficient matrix $A$ will be a square $N \times N$ matrix, and could thus potentially have an inverse matrix. The linear system $A x = b$ has a unique solution if and only if $A$ is invertible. If $A$ is invertible, then the solution to the system is given by the matrix equation below.

$$x = A^{-1} b$$

The solution shown above was obtained by multiplying both sides of the equation $A x = b$ by $A^{-1}$.

## Solving a linear system with NumPy

We already have all of the tools required to implement the solution technique discussed above in NumPy. We will use these tools in the code block below to solve the system of equations shown at the start of this lesson.

$$\begin{align*} 4 x_1 - 2 x_2 + 5 x_3 &= 12 \\ -3 x_1 + 7 x_2 + 3 x_3&= 26 \\ 8 x_1 - x_2 - 2 x_3 &= 18 \end{align*}$$

```
A = [[ 4, -2,  5],            # Define Matrix A
     [-3,  7,  3],
     [ 8, -1, -2]]

b = [12, 26, 18]              # Define vector b

A_inv = np.linalg.inv(A)      # Find inverse of A
x = np.matmul(A_inv, b)       # Find the solution

print(x)                      # Prints [3.2 4.4 1.6]
```

The output of the code block above provides the following solution for the system of equations:

$$x_1 = 3.2, ~ x_2 = 4.4, ~ x_3 = 1.6$$

Note that in the example above, we represented the column vector $b$ as a 1D NumPy array rather than as a true 2D array. As we have discussed in a previous lesson, when performing the matrix multiplication step in the code above, NumPy will treat the array `b` as if it were a 2D column array. Since we represented `b` as a 1D array, the resulting array `x` is also a 1D array. This is a convenience when using NumPy, but be aware that, from a mathematical perspective, these objects are technically column vectors.

The `np.linalg` module of NumPy contains a `solve()` function that can be used to (slightly) simplify the process of solving a system of equations. An application of this function is provided in the code block below.

```
A = [[ 4, -2,  5],            # Define Matrix A
     [-3,  7,  3],
     [ 8, -1, -2]]

b = [12, 26, 18]              # Define vector b

x = np.linalg.solve(A, b)     # Find the solution

print(x)                      # Prints [3.2 4.4 1.6]
```

We will close this section with an example of solving a system of 4 equations and 4 unknowns. The system we will solve is shown below.

$$\begin{align*} 3 x_1 + 5 x_2 + 2 x_3 + 7 x_4 &= 7 \\ 7 x_1 + 3 x_2 + 5 x_3 + 2 x_4 &= 3 \\ 4 x_1 + 6 x_2 + 5 x_3 + 5 x_4 &= 6\\ 3 x_1 + 7 x_2 + 5 x_3 + 2 x_4 &= 5 \\ \end{align*}$$

```
A = [[3, 5, 2, 7],               # Define Matrix A
     [7, 3, 5, 2],
     [4, 6, 5, 5],
     [3, 7, 5, 2]]

b = [7, 3, 6, 5]                 # Define vector b

x = np.linalg.solve(A, b)        # Find the solution

print(x)                         # Prints [ 0.2  0.7 -0.3  0.5]
```
