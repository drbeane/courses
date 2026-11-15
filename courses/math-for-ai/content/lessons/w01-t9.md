# Week 1: Lists and tuples

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce lists and tuples, which are special "collection" data types that are intended to store multiple values in a single object. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Lists and Tuples](https://colab.research.google.com/drive/1tNepD00FtlHuaKyygjUwyZjKUwe1GilF?usp=sharing).

## Introduction to lists

A **list** is a tool for storing a sequence of values. The individual values contained within a list are called the **elements** or **items** of the list.

To define a list in Python, we write the elements of the list between a pair of square brackets (`[]`), separated by commas. In the code cell below, we create a list containing strings representing the names of each of the eight planets in our solar system. We will store the list in a variable named `planets`.

```
planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
```

If we were to run the command `print(planets)`, then the contents of the list would be displayed exactly in the format shown in the statement in which we defined the list.

The items contained within a list can be of any data type, or even a combination of data types (although, in most cases, the elements in a list will all be of the same data type). In the code block below, we define a list containing several integer values.

```
int_list = [14, 37, 94, 163, 4, 16, 227]
```

There are occasions when we will want to work with a list that contains no elements. This is known as an **empty list**. An empty list can be defined as shown below. Note that the variable name has no relevance to the contents of the list. We could assign an empty list to any valid variable name.

```
empty_list = []
```

## Indexing list elements

Elements in a list are assigned an order when the list is defined, and each element is assigned a numerical position called an **index**. The first element is assigned an index of 0, the second element is assigned an index of 1, the third element is assigned an index of 2, and so on. The index of the last element of the list will be one less than the total number of elements in the list.

The index of an element in a list can be used to access that particular element. This is accomplished by following the name of the list with a pair of square brackets containing the index of the element. For example, if `my_list` is a list, then `my_list[3]` would refer to the element at index 3 (which is the fourth element).

We demonstrate list indexing in the code block below by using indices to access a few elements of the `planets` list.

```
print(planets[0])    # Prints Mercury
print(planets[2])    # Prints Earth
print(planets[7])    # Prints Neptune
```

Note that you will get an error if you attempt to access a list element that does not exist. For example, an attempt to use the expression `planets[8]` would result in an error. This error would state: **`IndexError: list index out of range`**

We can also access elements of a list by counting from the end of the list. This is accomplished through the use of negative indices. The last element in the list is at index -1, the second to last is at index -2, and so on. This is demonstrated below.

```
print(planets[-8])    # Prints Mercury
print(planets[-6])    # Prints Earth
print(planets[-1])    # Prints Neptune
```

## Slicing lists

As mentioned above, we can use indexing to select a single item from a list. There is also a technique known as **slicing** that can be used to select several items from a list. In other words, slicing can be used to create a **sublist** of a list. There are several ways to perform slicing, but all involve the use of the `:` character between a set of square brackets. We will explain the four main use cases for slicing in the bullet points below.

- `my_list[:n]` - This syntax will slice out the first `n` elements of the list. These are the elements from index `0` to index `n-1` (inclusive).
- `my_list[k:]` - This syntax will slice out the elements starting at index `k` and going on until the end of the list.
- `my_list[k:n]` - This syntax will slice out the elements starting at index `k` and going on until the element at index `n-1`.
- `my_list[:]` - This syntax will slice out the entire list.

Each of the methods of slicing mentioned above is demonstrated in the code block below.

```
print(planets[:4])    # Prints ['Mercury', 'Venus', 'Earth', 'Mars']
print(planets[4:])    # Prints ['Jupiter', 'Saturn', 'Uranus', 'Neptune']
print(planets[3:6])   # Prints ['Mars', 'Jupiter', 'Saturn']
print(planets[:])     # Prints entire planets list
```

## Appending elements to a list

Every list comes equipped with a set of special functions (called **methods**) that can be used to modify the list or perform other tasks related to the list. One such list method is the **`append()`** method. This method is used to add a new element to the end of an existing list. The code cell below demonstrates the use of the `append()` method.

```
fruit_list = ['apple', 'orange', 'lemon', 'grape', 'peach']
fruit_list.append('plum')
fruit_list.append('lime')
print(fruit_list)
```

When the print statement in the cell above is executed, it will display the following output:

```
['apple', 'orange', 'lemon', 'grape', 'peach', 'plum', 'lime']
```

## List functions

Python has several functions that can take lists as inputs. We will present four such functions here.

- `len()` returns the number of items in a list.
- `sum()` returns the sum of the elements in a list. This only works on numerical lists.
- `min()` returns the smallest item in a list.
- `max()` returns the largest item in a list.

Each of these functions is applied to a list of integers in the code block below.

```
sales_list = [754, 678, 548, 347, 465]    # Define a list
print(len(sales_list))                    # Prints 5
print(sum(sales_list))                    # Prints 2792
print(min(sales_list))                    # Prints 347
print(max(sales_list))                    # Prints 754
```

## Tuples

In addition to lists, Python provides another data type that can be used to store sequences of values. This second data type is called a **tuple**. In many ways, lists and tuples behave very similarly. Elements of a tuple each have an index, and are accessed in the same way as in a list. The fundamental distinction between the two data types is that tuples are **immutable**, meaning that once a tuple is created, its contents cannot be altered.

Syntactically, a tuple is defined much in the same way as a list, except that parentheses `()` are used to define a tuple in place of the square brackets `[]` that are used for a list. In the cell below, we define a tuple containing integer values and then print several elements of the tuple.

```
my_tuple = (159, 348, 214, 381, 194)      # Define a tuple
print(my_tuple[0])                        # Prints 159
print(my_tuple[2])                        # Prints 214
print(my_tuple[-2])                       # Prints 381
```

For the sake of this course, the difference between lists and tuples is not hugely significant. But tuples will be encountered occasionally, so it is good to be familiar with them. When encountering a tuple in this course, it will usually be sufficient to think of it simply as a list defined with parentheses instead of brackets, but be aware that there are differences between the two data types that are important in some contexts.
