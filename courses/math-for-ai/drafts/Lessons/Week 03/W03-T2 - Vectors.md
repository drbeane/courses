# Week 3: Vectors

**MATH 309/509 Math for AI** · Linear algebra

In this lesson, we will introduce vectors, which are a fundamental concept from linear algebra. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Vectors](https://colab.research.google.com/drive/1vJ0HhY7RqCVjkNt_K7rwG5A60LCzc6TK?usp=sharing).

## Introduction to vectors

We will begin our study of linear algebra with a discussion of an essential type of object studied in the discipline: vectors. For our purposes, a **vector** can be thought of as an ordered list of numbers that are equipped with a few special mathematical operations.

There are many commonly used conventions for denoting vectors. Vectors are often (but not always) denoted using lower-case letters, and letters such as $a$, $b$, $u$, $v$, and $w$ are common choices for denoting generic vectors. It is also common to further indicate that a letter denotes a vector by including some sort of "decoration" above the letter, such as a horizontal bar ($\bar v$) or an arrow ($\vec v$). In this course, we will simply use lowercase letters without any decoration to denote vectors.

When stating the elements contained in a vector, it is standard to list out the elements separated by commas, surrounded by parentheses `()`, angle brackets `<>`, or square brackets `[]`. In this course, we will use the square bracket convention. An example of using this notation to define a vector is provided below.

$$v = \left[17, -9, 6, 11, -12 \right]$$

## Vectors and arrays

Since a vector is a list of numbers, a Python list might seem to be a logical choice for a data type to use for representing a vector in Python. However, the vector operations that we will present later in this lesson are not implemented for Python lists. For this reason, one-dimensional NumPy arrays are a much more natural choice for representing vectors. We could use the code shown below to create an array representation of the vector we defined above.

```
v = np.array([17, -9, 6, 11, -12])
```

We will now move on to discuss several vector operations.

## Scalar multiplication

The first vector operation we will discuss is **scalar multiplication**. This refers to multiplying a vector by a single number, and performing the operation in an elementwise fashion. Within linear algebra, single numbers are often called **scalars**, which explains the name given for this operation. In terms of notation, if $c$ is a scalar and $v$ is a vector, then the product of the two objects is denoted as shown below.

$$c \cdot v$$

As we have seen in previous lessons, NumPy arrays are naturally equipped to support scalar multiplication.

```
print(2 * v)           # Prints [ 34 -18  12  22 -24]
```

## Vector addition

The next three vector operations we will discuss will all be performed on pairs of vectors with equal length. For these examples, we will use the vectors `u` and `w` defined below.

```
u = np.array([5, -5, 2])
w = np.array([-1, 8, 4])
```

One fundamental operation that can be performed on a pair of equal-length vectors is **vector addition**. Vector addition is performed elementwise and results in a new vector with the same length as the original two vectors. The sum of two vectors $u$ and $w$ is denoted as follows:

$$u + w$$

The way in which NumPy performs addition between two arrays is consistent with vector addition.

```
print(u + w)           # Prints [4 3 6]
```

## The dot product

The **dot product** provides a way of "multiplying" two vectors to get a single scalar value. The dot product of two vectors $u$ and $w$ is denoted as follows:

$$u \cdot w$$

The scalar value produced by the dot product operation is calculated by first performing an elementwise product of the two vectors and then summing the results. This could be performed using tools we have already introduced, as shown below.

```
print(np.sum(u * w))    # Prints -37
```

NumPy provides a special function for calculating dot products. This is demonstrated below.

```
print(np.dot(u, w))     # Prints -37
```

The choice of which of the two approaches above to use when calculating a dot product is primarily a matter of taste. Neither approach offers any sort of performance benefit over the other. However, the `np.dot()` function can be used to perform another type of operation known as matrix multiplication, which we will discuss in a later lesson.

## The cross product

The **cross product** is another type of product that can be calculated for two vectors. The cross product of two vectors $u$ and $w$ is denoted as follows:

$$u \times w$$

The cross product is specifically limited to vectors of three elements, and it produces a vector of three elements. We will not make use of the cross product in this course, and will thus not describe the (somewhat complicated) details of how to calculate such a product. However, in case it is a concept you are already familiar with, we have provided an example below to demonstrate how to use NumPy to calculate a cross product.

```
print(np.cross(u, w))   # Prints [-36 -22 35]
```

## Additional resources

Vectors have many different interpretations and definitions. The different ways of thinking about vectors all have their own value and specific use cases, and understanding multiple interpretations will help you to develop a better intuition for vectors. The list-based definition of the concept will be sufficient for our purposes in this course, but if you are interested in further exploring the concept, the following video from 3Blue1Brown is a good place to start.

<div class="video"><iframe src="https://www.youtube.com/embed/fNk_zzaMoSs" title="Vectors | Chapter 1, Essence of Linear Algebra" loading="lazy" allowfullscreen></iframe></div>

3Blue1Brown (2016). Vectors | Chapter 1, Essence of Linear Algebra \[Video File\]. Retrieved from YouTube.
