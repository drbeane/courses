# Week 3: Vector length and similarity

**MATH 309/509 Math for AI** · Linear algebra

In this lesson, we will discuss how to measure the length of a vector, the distance between two vectors, and how similar two vectors are. These three measurements are used constantly in modern AI systems, which represent words, images, and documents as vectors.

## The length of a vector

The **length** of a vector, also called its **norm** or **magnitude**, is a single nonnegative number that measures how large the vector is. The length of a vector $v = \left[v_1, v_2, ..., v_n \right]$ is denoted by $\lVert v \rVert$ and is defined by the formula below.

$$\lVert v \rVert = \sqrt{v_1^2 + v_2^2 + ... + v_n^2}$$

For a vector with two elements, this is the Pythagorean theorem. The vector $\left[3, 4\right]$ can be drawn as an arrow from the origin to the point $(3, 4)$, and its length is $\sqrt{3^2 + 4^2} = 5$.

Notice that the quantity under the square root is the dot product of the vector with itself. This gives a second way of writing the same formula.

$$\lVert v \rVert = \sqrt{v \cdot v}$$

The NumPy function `np.linalg.norm()` calculates the length of a vector. We demonstrate it below, along with the dot product formula.

```
v = np.array([3, 4])
print(np.linalg.norm(v))          # Prints 5.0
print(np.dot(v, v) ** 0.5)        # Prints 5.0
```

## The distance between two vectors

The **distance** between two vectors $u$ and $w$ of equal length is the length of their difference.

$$\textrm{distance}(u, w) = \lVert u - w \rVert$$

If the vectors are thought of as points, this is the ordinary straight-line distance between the points. It is often called the **Euclidean distance**. We calculate it below for the vectors `u` and `w` from the lesson on vectors.

```
u = np.array([5, -5, 2])
w = np.array([-1, 8, 4])
print(np.linalg.norm(u))          # Prints 7.3484...
print(np.linalg.norm(w))          # Prints 9.0
print(np.linalg.norm(u - w))      # Prints 14.4568...
```

## Cosine similarity

The dot product of two vectors is large when the vectors are long, and also when they point in similar directions. To measure direction alone, we divide the dot product by both lengths. The result is called the **cosine similarity** of the two vectors.

$$\textrm{cosine similarity}(u, w) = \frac{u \cdot w}{\lVert u \rVert \cdot \lVert w \rVert}$$

The name comes from geometry: this value is equal to the cosine of the angle between the two vectors. That fact gives cosine similarity a simple interpretation.

- The value is always between -1 and 1.
- A value of 1 means the vectors point in exactly the same direction.
- A value of 0 means the vectors are perpendicular. They have nothing in common, in the sense that neither one points along the other at all.
- A value of -1 means the vectors point in exactly opposite directions.

Cosine similarity ignores length. Doubling a vector does not change its cosine similarity with any other vector. The code block below calculates the cosine similarity of `u` and `w`, and then compares the vector $\left[2, 1\right]$ with three other vectors.

```
cos_uw = np.dot(u, w) / (np.linalg.norm(u) * np.linalg.norm(w))
print(cos_uw)                     # Prints -0.5594...

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

a = np.array([2, 1])
print(cosine_similarity(a, np.array([4, 2])))      # Prints 1.0 (same direction, twice as long)
print(cosine_similarity(a, np.array([-1, 2])))     # Prints 0.0 (perpendicular)
print(cosine_similarity(a, np.array([-2, -1])))    # Prints -1.0 (opposite direction)
```

Because of rounding inside the computer, the first and last results may be displayed as 0.9999999999999998 and -0.9999999999999998.

## Embeddings

A computer cannot do arithmetic on a word, a sentence, or an image directly. Modern AI systems solve this by representing each item as a vector of numbers called an **embedding**. The embeddings are learned during training, and they are arranged so that items with similar meanings end up with vectors that point in similar directions.

Embeddings are the reason the measurements in this lesson matter.

- A **large language model** begins by replacing each piece of its input text with an embedding. Every later step of the model is arithmetic on those vectors.
- A **semantic search** system stores an embedding for every document. To answer a question, it calculates an embedding for the question and returns the documents whose embeddings have the highest cosine similarity with it. This is how an AI assistant finds the relevant passages in a set of files before answering.
- A **recommender system** represents users and products as vectors and recommends the products whose vectors are most similar to the user's vector.

Real embeddings have hundreds or thousands of elements. The ideas are the same as for vectors with two or three elements. Only the number of terms in each sum changes.

## Example: Finding the most similar item

To see how a similarity search works, suppose that five words have been assigned the embeddings shown below. These vectors were made up for this example. Each has four elements, and each row of the array `E` is the embedding of one word.

```
words = ['cat', 'kitten', 'dog', 'car', 'truck']
E = np.array(
    [[0.9, 0.8, 0.1, 0.0],     # cat
     [0.8, 0.9, 0.2, 0.1],     # kitten
     [0.7, 0.6, 0.3, 0.1],     # dog
     [0.1, 0.0, 0.9, 0.8],     # car
     [0.0, 0.1, 0.8, 0.9]]     # truck
)
```

We will find the words most similar to "kitten". The code below calculates the cosine similarity between the embedding of "kitten" and every row of `E` at once. The product `np.matmul(E, q)` calculates all five dot products in a single step, and `np.linalg.norm(E, axis=1)` calculates the length of each row.

```
q = E[1]                                              # The embedding of 'kitten'
row_lengths = np.linalg.norm(E, axis=1)               # Length of each embedding
sims = np.matmul(E, q) / (row_lengths * np.linalg.norm(q))
print(sims.round(4))             # Prints [0.9866 1.     0.9801 0.2298 0.2298]

order = np.argsort(-sims)        # Indices from most similar to least similar
for i in order:
    print(words[i], sims[i].round(4))
```

The loop prints the words in order of similarity: kitten (1.0), cat (0.9866), dog (0.9801), truck (0.2298), and car (0.2298). The word is perfectly similar to itself, the two other animals are close behind, and the two vehicles are far away. A search system built on real embeddings does this same calculation, with millions of rows instead of five.
