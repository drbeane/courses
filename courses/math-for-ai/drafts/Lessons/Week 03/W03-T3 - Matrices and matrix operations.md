# Week 3: Matrices and matrix operations

**MATH 309/509 Math for AI** · Linear algebra

In this lesson, we will introduce another essential component of linear algebra: matrices. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Matrices](https://colab.research.google.com/drive/1on_keiMhlio12otrznK8yI6FtGHZpSCe?usp=sharing).

## Introduction to matrices

The next concept we will discuss from linear algebra will be matrices. A **matrix** is a two-dimensional grid of numbers organized into rows and columns. It is a standard convention to denote matrices with capital letters, and letters such as $A$, $B$, $M$, and $N$ are common choices for denoting generic matrices. When defining a matrix, we list the numbers contained in it in a grid layout, surrounded by square brackets. This is demonstrated below.

$$M = \begin{bmatrix} 17 & -9 & 6 & 11 & -12 \\ -5 & 11 & 18 & 0 & 7 \\ 8 & 7 & -5 & -3 & 16 \\ \end{bmatrix}$$

The **shape** of a matrix is expressed in the form $r \times c$, with $r$ denoting the number of rows and $c$ denoting the number of columns. For example, the shape of the matrix above is $3 \times 5$.

## Matrices and arrays

As you might have already guessed, two-dimensional NumPy arrays are a natural choice of data type for representing matrices in Python. We could use the code shown below to create an array representation of the matrix we defined above.

```
M = np.array(
    [[17, -9,  6, 11, -12],
     [-5, 11, 18,  0,   7],
     [8,   7, -5, -3,  16]]
)
```

Note that the order of the elements appearing in the shape attribute for a two-dimensional array is consistent with the convention used for matrices.

```
print(M.shape)    # Prints (3, 5)
```

We will now move on to discuss several matrix operations.

## Matrix transpose

The first matrix operation we will discuss is the transpose operation. The **transpose** of a matrix is a new matrix obtained by flipping and swapping the rows and columns of the matrix. The row at a particular index of the original matrix will become the column with the same index in the new matrix. Matrix transposition can be performed in NumPy using the `T` attribute of the array representing the matrix. If `A` is a 2D array, then `A.T` will represent the matrix transpose. This operation is demonstrated below.

```
print(M.T.shape)    # Prints (5, 3)
print(M.T)          # Prints the transpose
```

## Scalar multiplication

As with vectors, we can perform **scalar multiplication** on matrices. When multiplying a matrix by a scalar (or single number), each element of the matrix is multiplied by the scalar to produce a new matrix that is the same size as the original matrix, but that has been "scaled" by the factor provided by the scalar. This operation is demonstrated below.

```
print(2 * M)
```

The output of the previous code block is shown below.

```
[[ 34 -18  12  22 -24]
 [-10  22  36   0  14]
 [ 16  14 -10  -6  32]]
```

## Matrix addition

We can perform **matrix addition** to add two matrices that have the same shapes. The operation is performed elementwise, and the result will be a matrix with the same size as the original matrices. This is demonstrated below.

```
A = np.array(
    [[-8, -4,  5, 7],
     [ 6,  8, -2, 3]]
)

B = np.array(
    [[ 6,  0, -3, 4],
     [-5,  7,  5, 5]]
)

print(A + B)
```

The output of the previous code block is shown below.

```
[[-2 -4  2 11]
 [ 1 15  3  8]]
```

## Matrix multiplication

We have seen before that we can multiply two NumPy arrays with the same shapes using the `*` operation. This operation performs elementwise multiplication. Elementwise multiplication of arrays is a useful tool that has many applications, but it is not commonly studied in linear algebra, and is not typically performed on matrices. Instead, **matrix multiplication** refers to a different type of product that can be calculated between two matrices, and that is based on the dot product.

Matrix multiplication is a somewhat complicated operation. Before discussing *how* to perform the operation, we should explain *when* it can be performed. Suppose that two matrices $A$ and $B$ have shapes $r_A \times c_A$ and $r_B \times c_B$, respectively. Then, the matrix product $A\cdot B$ of the two matrices can be calculated if and only if $c_A = r_B$. If the product can be performed, then the product will have shape $r_A \times c_B$. For clarity, we restate these rules in the bullet points below.

- The matrix product $A\cdot B$ can only be calculated if the number of columns in $A$ is equal to the number of rows in $B$.
- If $A\cdot B$ can be calculated, it will have the same number of rows as $A$ and the same number of columns as $B$.

Now that we understand when such a product can be calculated, we need to explain how it is calculated. The product $A\cdot B$ is calculated one element at a time. When calculating a single entry in the product, you should determine the row and column for that entry. Next, select the corresponding row from matrix $A$ and the corresponding column from matrix $B$ and calculate their dot product, treating them as vectors. The resulting dot product provides the value for the entry for $A\cdot B$.

We will use the matrices defined below to demonstrate how to use NumPy to perform matrix multiplication.

```
A = np.array(
    [[-8, -4,  5, 7],
     [ 6,  8, -2, 3]]
)

B = np.array(
    [[ 1, -7,  5],
     [-2,  0, -1],
     [-5,  4, -7],
     [ 0, -3, -2]]
)
```

Note that the shape of matrix $A$ is `(2, 4)` and the shape of matrix $B$ is `(4, 3)`. We can apply the rules above to confirm that we can calculate the product $A\cdot B$ and that the result will have a shape of `(2, 3)`.

NumPy provides two functions that can be used for matrix multiplication. These are `np.dot()` and `np.matmul()`. The two functions are used in identical ways.

```
print(np.dot(A, B))
print(np.matmul(A, B))
```

Either line of code in the example above will produce the following output:

```
[[-25  55 -85]
 [  0 -59  30]]
```

Note that, unlike the standard multiplication of real numbers, matrix multiplication is not commutative. Even if we can calculate $A\cdot B$, we might not be able to calculate $B\cdot A$. Note that this is exactly the case in the example above. Even if we can calculate both $A\cdot B$ and $B\cdot A$, there is no guarantee that the two products will produce the same results, or that they will even have the same shape.

## Row and column vectors

A matrix with a single row is called a **row vector**, and a matrix with a single column is called a **column** **vector**. As the names imply, we tend to associate matrices of these types with vectors. There are situations when it is mathematically convenient to express an ordinary vector as a matrix in the form of either a row vector or a column vector. The expressions below show the definition for a vector $v$, as well as ways to re-express the vector as a row vector or a column vector.

$$v = \left[ 4, 1, 7 \right]$$

$$v_{\textrm{row}} = \begin{bmatrix} 4 & 1 & 7 \\ \end{bmatrix}$$

$$v_{\textrm{col}} = \begin{bmatrix} 4\\ 1\\ 7\\ \end{bmatrix}$$

One benefit of expressing a vector as a matrix is that it allows us to perform operations between matrices and vectors. We will discuss that in the next section of this lesson. But first, let's consider what happens if we multiply a row vector and a column vector using matrix multiplication. Suppose that both vectors contain $N$ elements. Then, the shape of the row vector will be $1\times N$ and the shape of the column vector will be $N\times 1$. Their product will thus be a $1\times 1$ matrix that contains a single number. This is demonstrated in the code block below.

```
row = np.array([[5, 2, 6, 8, 1]])
col = np.array([[4], [7], [3], [5], [2]])

print(row.shape)                              # Prints (1, 5)
print(col.shape)                              # Prints (5, 1)

print(np.matmul(row, col))                    # Prints [[94]]
```

The result of the multiplication above will technically be a two-dimensional array, even though it contains a single value. Note that if we were to represent these vectors as one-dimensional arrays and perform their dot product, we would get the exact same result, but as a single number rather than an array.

## Multiplying a vector and a matrix

In linear algebra, the multiplication of a vector and a matrix is performed by representing the vector as a row vector or a column vector and then performing matrix multiplication, assuming that the shapes of the matrices allow for the operation to be performed. Suppose, for example, that $M$ is an $R\times C$ matrix and $v$ is a vector.

- We can calculate the product $v \cdot M$ if $v$ is a $1 \times R$ row vector with $R$ elements. The result will be a $1\times C$ row vector.
- We can calculate the product $M \cdot v$ if $v$ is a $C \times 1$ column vector with $C$ elements. The result will be an $R\times 1$ column vector.

There are many applications in machine learning and artificial intelligence that require the multiplication of a matrix and a vector, so it is useful to understand how to perform this operation in NumPy. When working with NumPy, we typically represent vectors as one-dimensional arrays and represent matrices as two-dimensional arrays. In order to calculate the product of a matrix and a vector, we could represent the vector as a two-dimensional row or column array and then multiply the matrices as normal.

As it turns out, this is not necessary. NumPy allows us to apply the `np.dot()` and `np.matmul()` functions to a pair of arrays for which one array is one-dimensional, and the other is two-dimensional. In this case, NumPy will internally treat the one-dimensional array as either a row or column as appropriate, based on the order of the product, as described above. When doing so, the result will be provided as a one-dimensional array rather than as a row or column.

We will demonstrate this operation using the objects defined below.

```
x = np.array([3, -1, 3])

M = np.array(
    [[7, 9, 6, 1, 2],
     [5, 1, 8, 0, 7],
     [8, 7, 5, 3, 6]]
)
```

The shape of `x` is `(3,)` and the shape of `M` is `(3, 5)`. We can multiply these arrays as long as we place `x` on the left side of the product. In that case, NumPy will treat `x` as a `(1, 3)` array and will perform standard matrix multiplication, as described above.

```
print(np.matmul(x, M))
```

The code above prints the following one-dimensional NumPy array:

```
[40 47 25 12 17]
```

## Example: One-hot vectors and embedding lookup

In Week 2, we saw that a category can be represented by a one-hot vector: a vector of zeros with a single 1 in the position for that category. Multiplying a one-hot vector by a matrix has a simple and very useful effect. It selects one row of the matrix.

```
E = np.array(
    [[0.9, 0.8, 0.1, 0.0],
     [0.8, 0.9, 0.2, 0.1],
     [0.7, 0.6, 0.3, 0.1],
     [0.1, 0.0, 0.9, 0.8],
     [0.0, 0.1, 0.8, 0.9]]
)
one_hot = np.array([0, 0, 1, 0, 0])
print(np.matmul(one_hot, E))          # Prints [0.7 0.6 0.3 0.1]
print(E[2])                           # Prints [0.7 0.6 0.3 0.1]
```

To see why, recall that each entry of the product is a dot product of `one_hot` with a column of `E`. Every term in that dot product is multiplied by 0 except the one in position 2, so the dot product simply returns the entry of the column at index 2.

This is how a language model begins processing text. Each word or word piece in its vocabulary is assigned an integer, exactly as in integer encoding. The model stores a large matrix with one row for each item in the vocabulary. Multiplying the one-hot vector for a word by this matrix returns that word's row, which is a vector of numbers that represents the word. That vector is called an **embedding**, and the next lesson explains how embeddings are compared. In practice the row is selected directly with indexing, as in `E[2]`, because that is faster, but the result is identical to the matrix product.

## Additional resources

For additional information about matrices, we recommend the following video from Khan Academy.

<div class="video"><iframe src="https://www.youtube.com/embed/0oGJTQCy4cQ" title="Introduction to Matrices | Khan Academy" loading="lazy" allowfullscreen></iframe></div>

Khan Academy (2013). Introduction to Matrices \[Video File\]. Retrieved from YouTube.
