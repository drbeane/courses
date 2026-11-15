# Week 3: Eigenvalues and eigenvectors

**MATH 309/509 Math for AI** · Linear algebra

In this lesson, we will discuss how to use NumPy to find the eigenvalues and eigenvectors of a matrix. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Eigenvalues and Eigenvectors](https://colab.research.google.com/drive/1CPcmX-Geopi17pvMgH32yxgOzlywRp_w?usp=sharing).

## Matrices as transformations

Matrices are often used to represent transformations of $N$-dimensional Euclidean spaces (such as the 2D plane or 3D space). To explain this application of matrices, suppose that $A$ is a square $N\times N$ matrix, and let $x$ be an $N \times 1$ column vector. We will associate $x$ with a point in $N$-dimensional Euclidean space. Define a function $T(x)$ as follows:

$$T(x) = Ax$$

If you think carefully about the shapes of the objects involved, you can see that the output $T(x)$ will be another $N \times 1$ column vector. We can think of $T(x)$ as being a different point in $N$-dimensional space. As a result, we can think of the function $T(x)$ as a transformation that maps points in $N$-dimensional space to other points in $N$-dimensional space.

This application of matrices is very important in fields such as computer graphics, computer vision, and image processing. Being able to represent geometric transformations as matrices is a powerful tool for describing, performing, and studying such transformations. This is a broad topic with many applications, but we will focus on just one specific aspect of it that is particularly relevant to artificial intelligence and machine learning.

## Example: Rotating points

One common family of transformations rotates every point around the origin. The matrix below rotates each point by 90 degrees counterclockwise.

$$R = \begin{bmatrix} 0 & -1 \\ 1 & 0 \\ \end{bmatrix}$$

To apply it to a point, we multiply the matrix by the point written as a column vector. For example, the point $(2, 1)$ is moved to $(-1, 2)$.

$$R \begin{bmatrix} 2 \\ 1 \\ \end{bmatrix} = \begin{bmatrix} 0 \cdot 2 + (-1) \cdot 1 \\ 1 \cdot 2 + 0 \cdot 1 \\ \end{bmatrix} = \begin{bmatrix} -1 \\ 2 \\ \end{bmatrix}$$

In NumPy, it is convenient to store several points as the rows of an array. Multiplying that array by the transpose of `R` then transforms every point at once.

```
R = np.array([[0, -1], [1, 0]])
points = np.array([[1, 0], [0, 1], [2, 1]])     # Three points, one per row
print(np.matmul(points, R.T))
```

```
[[ 0  1]
 [-1  0]
 [-1  2]]
```

A rotation by any other angle $\theta$ uses the matrix with entries $\cos \theta$, $-\sin \theta$, $\sin \theta$, and $\cos \theta$ in the same positions. Transformations such as this are used when training models that work with images. Each training image can be rotated, flipped, or stretched slightly to create additional training examples, a practice known as **data augmentation**.

## Eigenvalues and eigenvectors

Suppose that $A$ is a square $N\times N$ matrix. A nonzero $N \times 1$ column vector $x$ is said to be an **eigenvector** for $A$ if there is a constant $\lambda$ such that the following equation holds:

$$Ax = \lambda x$$

If such a constant $\lambda$ exists, then we refer to it as an **eigenvalue** for $A$. Note that eigenvalues and eigenvectors come in pairs. Every eigenvector has a single corresponding eigenvalue. A single eigenvalue, on the other hand, will correspond to infinitely many eigenvectors. If $x$ and $\lambda$ are an eigenvector/eigenvalue pair for $A$, then any nonzero constant multiple of $x$ will also be an eigenvector with the same eigenvalue $\lambda$. To see this, let $c$ be any nonzero constant. Then the vector $c x$ will satisfy the eigenvector criterion with $\lambda$, as demonstrated below.

$$A(c x) = c (A x) = c (\lambda x) = \lambda(c x)$$

A particular $N\times N$ matrix might have anywhere from 1 to $N$ distinct eigenvalues (some of which might be complex numbers).

The equation $Ax = \lambda x$ states that applying the transformation defined by $A$ to the vector $x$ is equivalent to scaling $x$ by a constant $\lambda$. If $x$ and $\lambda$ are an eigenvector/eigenvalue pair for $A$, then multiplying $x$ by $A$ using matrix multiplication will produce the same result as multiplying $x$ by $\lambda$ using scalar multiplication.

## Principal component analysis

Eigenvalues and eigenvectors contain a lot of information about the transformation represented by a matrix $A$. A great deal of theory has been developed relating to these objects, and many applications for eigenvalues and eigenvectors exist. The most commonly encountered application of eigenvalues and eigenvectors within the fields of machine learning and artificial intelligence is **principal component analysis**, or **PCA**. Principal component analysis is a **dimensionality** **reduction** technique that allows us to reduce the size and memory requirements for a dataset while (hopefully) still retaining much of the information contained within the dataset. You can think of it as being similar to a compression algorithm for datasets. We will need to introduce additional concepts from statistics before fully explaining PCA, so we will postpone that discussion for another week. However, we wanted to draw your attention to this application to provide you with some context to help you understand why we care about eigenvalues and eigenvectors.

## Calculating eigenvalues and eigenvectors with NumPy

The `np.linalg` module of NumPy contains an `eig()` function that can be used to find the eigenvalues and eigenvectors of a square matrix. This is demonstrated in the code block below.

```
A = [[-6, 3],
     [ 4, 5]]

evals, evecs = np.linalg.eig(A)
```

After running the code above, the variable `evals` will store the one-dimensional array `[-7, 6]`. This tells us that the matrix `A` has two eigenvalues, -7 and 6. The variable `evecs` will be a two-dimensional array with shape `(2, 2)`. Each column in this array will be an eigenvector, and will be associated with the eigenvalue with the same index.

We can confirm that the eigenvalue/eigenvector condition is satisfied for the objects returned by the `eig()` function. We do this below for the eigenvalue/eigenvector pair with index 0. If the scalar and vector are truly an eigenvalue/eigenvector pair, then the results displayed by the two print statements should be the same.

```
k0 = evals[0]          # Get first eigenvalue
v0 = evecs[:,0]        # Get first eigenvector

print(k0 * v0)         # Perform scalar multiplication
print(np.dot(A, v0))   # Perform matrix multiplication
```

## The eigh() function

NumPy has two functions for calculating eigenvalues. There is the `eig()` function that we have discussed above, as well as the `eigh()` function. These two functions are similar in some ways, but have important differences. The `eig()` function can be used on any square matrix, while the `eigh()` function can only be used on matrices that are symmetric about their main diagonal. If the matrix you are working with does not have this symmetry property, then it is not correct to use the `eigh()` function. The two functions also use different algorithms for calculating eigenvalues. The `eigh()` function uses an algorithm that takes advantage of the symmetries in the matrix, and tends to produce better, more stable, results than `eig()` when applied to symmetric matrices.

The main takeaway is that you should use `eigh()` if you know that your matrix is symmetric and you should use `eig()` if you do not know that your matrix is symmetric. For applications you encounter this week, you should use `eig()` exclusively. We will make use of the `eigh()` function in Week 6 when we discuss principal component analysis.

## Example: Ranking web pages

A well-known application of eigenvectors is PageRank, the method Google originally used to rank web pages. The idea is that a page is important if important pages link to it. That sounds circular, but it turns out to be an eigenvector problem.

Consider four web pages. Page 1 links to pages 2, 3, and 4. Page 2 links to pages 3 and 4. Page 3 links to page 1. Page 4 links to pages 1 and 3. We build a matrix $A$ in which each column describes one page's links: a page with $k$ links places $1/k$ in the row of each page it links to. Each column sums to 1.

$$A = \begin{bmatrix} 0 & 0 & 1 & 1/2 \\ 1/3 & 0 & 0 & 0 \\ 1/3 & 1/2 & 0 & 1/2 \\ 1/3 & 1/2 & 0 & 0 \\ \end{bmatrix}$$

Let $r$ be a vector holding the importance score of each page. Each page shares its score equally among the pages it links to, and the vector $Ar$ collects the amounts each page receives. The scores are consistent when every page receives exactly its own score back, which is the statement $Ar = r$. In other words, the score vector we want is an eigenvector of $A$ with an eigenvalue of 1.

```
A = np.array(
    [[0,   0,   1, 1/2],
     [1/3, 0,   0, 0  ],
     [1/3, 1/2, 0, 1/2],
     [1/3, 1/2, 0, 0  ]]
)
evals, evecs = np.linalg.eig(A)
k = np.argmax(evals.real)             # Position of the largest eigenvalue, which is 1
r = evecs[:, k].real                  # The matching eigenvector
r = r / r.sum()                       # Rescale so that the scores sum to 1
print(r.round(4))                     # Prints [0.3871 0.129  0.2903 0.1935]
```

Some of the eigenvalues of this matrix are complex numbers, so we use the `real` attribute to keep the real part of each value. Since any constant multiple of an eigenvector is also an eigenvector, we are free to rescale `r` so that its entries sum to 1.

Page 1 has the highest score, 0.3871. It receives links from pages 3 and 4, and page 3 gives it its entire score. Page 2 has the lowest score because only page 1 links to it, and page 1 divides its score three ways.
