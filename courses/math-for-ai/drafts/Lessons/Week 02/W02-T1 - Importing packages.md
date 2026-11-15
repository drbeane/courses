# Week 2: Importing packages

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce the concept of packages, which are used to provide additional tools not available in base Python.

## Packages

A **package** is a collection of Python scripts that contain definitions for variables, functions, data types, and other objects that have been designed to work together to perform certain tasks. Packages are used to extend the functionality of Python to provide sets of related tools not found in base Python.

Many packages are installed with Python by default, and additional packages can be installed as needed. Google Colab environments include many popular packages that are not included with a standard Python installation. All of the packages that we use in this course are already installed in Google Colab, so we will not discuss installing packages here.

If a package has been installed on your machine, you can import it into a Python session by using the `import` keyword followed by the name of the package. The standard Python installation comes with a `math` package that provides additional mathematical tools. This package can be imported using the code shown below.

```
import math
```

After running the import statement above, our Python session will contain a `math` object that serves as a gateway for the tools contained in the `math` package. These tools are accessed by following the name of the package with a period and then the name of the tool. For example, the `math` package contains a function named `log()`. This function can be accessed by using `math.log()`.

We will discuss the `math` package in more detail in the next lesson.

## Aliases

Some packages have fairly long names. If we are making frequent use of such a package, it can be tedious to type its name every time we want to use an object from it. When importing a package in Python, we have the option of specifying an alternate name to be used to refer to the package. A custom name specified for a package is called an **alias**. An alias can be set when importing a package by altering the import statement to follow the name of the package with the keyword `as`, which is itself followed by the alias.

We can use any valid variable name for an alias, but many popular packages have "standard" aliases that are commonly used when working with that package. For example, there is a package named NumPy that is used for simplifying certain types of numerical calculations. This package is typically imported using the alias `np`. The code block below demonstrates this.

```
import numpy as np
```

If we have imported a package using an alias, then we would use the alias (and not the official package name) as a gateway for the tools provided by the package.

## Modules

Many packages contain **modules**, which are sub-collections of objects that are used to organize the tools within the package based on their functionality. For example, the NumPy package contains a `random` module that is used for random number generation. We will discuss this module in some detail later, but for now, we will simply mention that the module contains a `choice()` function that can be used to select a random number from a list. Assuming that we have imported NumPy using its standard alias, we could access this function using `np.random.choice()`. We demonstrate this in the line of code shown below. This line of code will result in the variable `random_number` containing a value randomly selected from the integers 1 - 4.

```
random_number = np.random.choice([1, 2, 3, 4])
```

It is also possible to import specific modules under aliases. Matplotlib is a package that is used for creating plots. It contains a module named `pyplot` that provides an interface that is similar to the one used in the well-known MATLAB programming language. When using `pyplot`, it is common practice to directly import the module using the alias `plt`. This is demonstrated below.

```
import matplotlib.pyplot as plt
```

We will discuss some aspects of Matplotlib in later lessons.

## Namespaces

When we import a package, we create a new namespace for the contents of that package. A **namespace** is essentially a layer in the Python naming system that helps us to avoid naming conflicts. For example, NumPy and base Python both provide a `sum()` function. Because of namespaces, we can have access to both of these functions simultaneously. One will be accessed as `np.sum()` and the other as `sum()`.
