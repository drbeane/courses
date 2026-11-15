# Week 6: Principal component analysis

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will introduce a dimensionality reduction technique known as principal component analysis. The concepts introduced in this lesson will be explored in Lab 6.

## Dimensionality reduction

Machine learning problems often involve hundreds, thousands, or even millions of features that could potentially be used to create models. Using a large number of features to train a model can cause several issues. We list several potential issues in the bullet points below.

- Using many features can slow down the process of training a model. If too many features are used, then it might not be possible to train the model in a reasonable amount of time.
- Increasing the number of features used will also increase the size of the dataset. If the dataset becomes too large, it might not fit in memory on the device we are using to train the model.
- Many of the features might not be relevant to the model, and will offer little or no predictive value. However, we won't always know in advance which features are relevant.
- Increasing the number of features in the model increases the opportunities for the model to learn spurious relationships between variables, increasing the likelihood that the model will overfit.
- If two or more features are highly correlated with each other, it can cause instability in the training process for several types of models.

For the reasons mentioned above, we typically wish to limit the number of features included in our machine learning models. **Dimensionality reduction** refers to a collection of techniques used to reduce the number of variables used in a machine learning model. There are multiple ways to perform dimensionality reduction. The simplest technique is feature selection. **Feature** **selection** is performed by simply removing some of the features from consideration, selecting only a subset of features for use in our model. There are many statistical techniques that can be applied to guide us in our selection of the features when applying this approach. More sophisticated dimensionality reduction techniques often involve first performing **feature extraction** to create new features by transforming the original features in some way, and then selecting a subset of the transformed features. In this lesson, we will explore a technique for performing dimensionality reduction using transformations.

## Principal component analysis

**Principal component analysis**, or **PCA**, is the most popular dimensionality reduction technique. When the PCA algorithm is applied to a set of features, a new set of transformed features will be generated. The transformed features will have several desirable properties. First, the new features will be uncorrelated with one another. That is to say that each pair of transformed features will have a correlation of 0. Second, it is possible to rank the new features based on the amount of information they individually contain about the original dataset. This allows us to reduce the size of the dataset by discarding lower-ranked features that carry less information about the dataset.

Before explaining the details of how PCA is performed, we will discuss the intuition behind the algorithm. The first step in the PCA algorithm is to find vectors that describe the directions in which the data is scattered. These vectors are known as **principal components**. The number of principal components is equal to the number of features in the original dataset, and they are calculated iteratively. All principal components are based on a point that represents the center of the dataset. The first principal component points in the direction of the greatest scatter in the dataset. The second principal component is required to be perpendicular to the first, and will point in the direction of greatest scatter given this constraint. The third principal component is required to be perpendicular to the first two, and will likewise point in the direction of the greatest scatter possible given that constraint. Additional principal components are obtained in a similar fashion.

The principal components are used to define a new coordinate system for our data. Each observation is transformed to be written in coordinates determined by this new system. In essence, the dataset is rotated and flipped so that the principal components point in a direction parallel to the coordinate axes.

For reasons we have discussed, PCA is typically applied to datasets with many features. However, so that we can visualize the process, a figure has been included below to illustrate PCA for a 2D dataset. The original features in this example are labeled $X_1$ and $X_2$. A scatter plot for those features is shown on the left, along with the 2 principal components. The blue arrow points in the direction of the greatest scatter and represents the first principal component. The orange vector is the second principal component. The middle figure shows how two points (red and green) can be represented in terms of the principal components. The figure on the right shows the transformed dataset. The transformed features are labeled $Z_1$ and $Z_2$. These transformed features will have a correlation of 0.

<img src="/images/image-51a8e51a-1a23-468f-aae9-5995a720d65f.png" alt="Three panels illustrating principal component analysis: the principal component directions, one point decomposed onto them, and the data in transformed coordinates." width="1000">

:::image Image description: Principal component analysis
- **Principal Components:** a scatter of gray points (X1 and X2 from 0 to 8) trending up and to the right, with two arrows from the yellow center point showing the principal component directions.
- **Principal Component Decomposition:** the same data with one green point and one red point; orange and blue lines show how each point breaks into parts along the two component directions.
- **Transformed Coordinates:** the data plotted on the new axes Z1 and Z2 (−4 to 4), centered at the origin, with the green and red points shown in their new coordinates.
:::

## Finding principal components

We will now walk through the steps of performing PCA. Some, but not all, of the code will be provided. You will be asked to use tools previously discussed in this course to perform PCA in the lab assignment for this week. Throughout this discussion, we will assume that we will be applying the PCA process to a set of features stored in a matrix named $X$. We will assume that $X$ is represented programmatically by a NumPy array of the same name.

We will start by discussing how to find the principal components. The steps involved in this task are as follows:

1. Center each of the features in $X$ so that they each have a mean of 0.
2. Calculate the covariance matrix of the centered feature array.
3. Find the eigenvalues and eigenvectors of the covariance matrix.
4. The eigenvectors will represent the principal components.

We will denote the centered feature array/matrix mentioned in step 1 as $M$. The code shown below can be used to calculate this array.

```
M = X - X.mean(axis=0)
```

The function `np.cov()` can be used to find the covariance matrix. Recall that you will need to transpose the centered feature array. Next, we need to calculate the eigenvalues and eigenvectors of the covariance matrix. Covariance matrices are always symmetric, so the function `np.linalg.eigh()` can be used for this.

```
C = np.cov(M.T)
evals, W = np.linalg.eigh(C)
```

The array `evals` will contain the eigenvalues for `C`. The array `W` is a two-dimensional array whose columns represent the eigenvectors of `C`. Each of these eigenvectors is one of our principal components.

## Sorting the principal components

The eigenvalues returned by `np.linalg.eigh()` are sorted in increasing order, with the largest eigenvalues at the end of the array `evals`. The size of the eigenvalue indicates the relative importance of the corresponding principal component. This means that the arrays `evals` and `W` will be sorted in increasing order of importance with the most important entries appearing at the end. It will be useful for us to flip this order so that the principal component with the largest eigenvalue will appear first, the principal component with the second largest eigenvalue will appear second, and so on.

The code below shows how to flip the order of `evals` and the columns of `W`.

```
evals = np.flip(evals)
W = np.flip(W, axis=1)
```

## Applying the transformation

We have found a matrix $W$ whose columns represent eigenvectors of the covariance matrix, and are arranged in decreasing order by value of their corresponding eigenvalues. At this point, the transformation can be performed by simply multiplying the centered feature matrix $M$ by $W$. We will name the transformed matrix $Z$. The formula for $Z$ is shown below.

$$Z = M \cdot W$$

This operation can be performed as follows:

```
Z = M @ W
```

## Explained variance ratios

Each feature in the transformed matrix $Z$ will represent a new feature for the dataset. If constructed correctly, the features with lower indices will contain more information about the original dataset than those with higher indices. Each transformed feature will account for some amount of the variability in the original dataset, with earlier features accounting for a greater proportion of the original variability than later features. This can be quantified by calculating the **explained variance ratios**. The explained variance ratio for a principal component can be calculated by dividing the corresponding eigenvalue by the sum of all of the eigenvalues. This is demonstrated in the code block below. The explained variance ratios will sum to 1 and should decrease in value from one feature to the next.

```
exp_var = evals / evals.sum()
```

The explained variance ratios can be used to determine how many features to drop when performing dimensionality reduction, and can also be used to determine the amount of information we have retained in our dataset after dropping features. For example, assume that we have decided to keep 20 features out of 500. Suppose that the total of the explained variance ratios for the 20 preserved features is equal to 0.92. Then, these 20 features account for 92% of the variability in the original dataset, and the 480 features that we dropped would have accounted for the remaining 8% of the variability.

## Where PCA is used in AI

Principal component analysis appears in several places in machine learning and artificial intelligence.

- **Visualization.** The embeddings that represent words or images in an AI model have hundreds or thousands of elements, which cannot be plotted. Keeping only the first two principal components gives a two-dimensional picture in which items with similar meanings tend to appear near one another.
- **Compression.** A set of images can be stored using a few hundred transformed features in place of the tens of thousands of pixel values in each image.
- **Preparing features.** Replacing a large set of correlated features with a smaller set of uncorrelated ones can make a model faster to train and less likely to overfit.

## Low-rank approximation

PCA is one member of a family of techniques that replace a large matrix with a much smaller description of it. The general tool behind them is the **singular value decomposition**, or **SVD**, which can be calculated with `np.linalg.svd()`. The SVD breaks any matrix into a sum of simple pieces and attaches a number, called a **singular value**, to each piece that measures how much the piece contributes. Keeping only the pieces with the largest singular values gives a **low-rank approximation** of the matrix.

```
M = np.array([[4.0, 0.0, 2.0], [2.0, 0.0, 1.0], [6.0, 1.0, 3.0], [0.0, 2.0, 0.0]])
U, S, Vt = np.linalg.svd(M, full_matrices=False)
print(S.round(4))                                   # Prints [8.4074 2.0772 0.    ]
M1 = S[0] * np.outer(U[:, 0], Vt[0])                # Keep only the largest piece
print(M1.round(2))
```

The singular values show that this 4 by 3 matrix is really built from only two pieces, and that the first is much larger than the second. The approximation built from the first piece alone is shown below. It is already close to the original matrix in the three rows that resemble one another.

```
[[3.96 0.45 1.98]
 [1.98 0.23 0.99]
 [6.03 0.69 3.01]
 [0.18 0.02 0.09]]
```

Low-rank approximation has become important for large language models. The weight matrices of these models are enormous, and adjusting all of their entries to adapt a model to a new task is expensive. A widely used technique instead learns a low-rank change to each weight matrix, which is described by far fewer numbers than the matrix itself.
