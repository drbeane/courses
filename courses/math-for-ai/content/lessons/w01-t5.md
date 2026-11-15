# Week 1: Google Colab interface

**MATH 309/509 Math for AI** · Python

In this lesson, we will demonstrate some of the features of the Google Colab interface, as well as a few very basic features of Python. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Google Colab Interface](https://colab.research.google.com/drive/1dAFi5DsJZyWVGd0kRxD1M7yWWLxL6g9b?usp=sharing).

## Demonstration notebook

The demonstration notebook for this lesson (linked above) is intended to walk you through some of the features of the Google Colab interface and introduce you to some basic features of Python. Most of the content from that notebook will be stated in this lesson for the sake of reference, but since several aspects of this lesson are intended to be interactive, you are encouraged to work through the notebook rather than reading this page.

**If you are already familiar with Python and either Google Colab or Jupyter Notebooks, you can consider this lesson to be optional.**

## Notebook cells

The content in a Google Colab notebook is arranged into units called **cells**. Cells are arranged vertically within a notebook. There are two types of cells that could appear in a Google Colab notebook: markdown cells and code cells. **Markdown** **cells** contain the formatted text that is meant to be read. You can double-click on a markdown cell to see the syntax used to generate types of formatting such as headers and bold text. **Code cells**, on the other hand, contain executable Python code.

## Running code cells

A **code cell** contains executable Python code. The code block below displays the contents of the first code cell from the demonstration notebook.

```
print(1337)
```

The code in that cell simply uses the `print()` function to display a number on the screen. The code can be run (or executed) in one of the following two ways.

- Hover your mouse over the cell. Then, press the play button that appears on the left side of the cell.
- Click on the code cell and press `[CTRL/CMD] + [ENTER]`.

You should run the cell in the demonstration notebook. After running the cell, I encourage you to experiment by changing the number in the parentheses (but leaving both parentheses) and then running the cell again.

## Creating new cells

You can add new cells to a Colab notebook. If you hover your mouse in the area between two cells, you should see two buttons appear between the cells near the middle of the screen. The buttons will read "+ Code" and "+ Text". These can be used to insert a code cell or a markdown cell in the indicated position.

Within the demonstration notebook, you are encouraged to create a new cell and add to it the code shown below.

```
print('Hello!')
```

## Deleting cells

You can delete a cell from a Colab notebook by hovering your mouse over the cell and then clicking the "trash can" icon in the toolbar that appears above the cell on the right side of the screen. The demonstration notebook provides you with an opportunity to practice this.

## Comments

A **comment** in a programming language is a piece of text that appears alongside code, but that is not intended to be interpreted as code. Comments in Python are created by preceding the comment with the `#` symbol. When Python encounters the `#` symbol, it simply ignores that symbol and anything that appears on the same line after the `#`. Comments are primarily used to document and explain code.

Comments are demonstrated in the code block below. The entire first line is a comment. The second line includes some executable code that is followed by a comment.

```
# This entire line is a comment.
x = 27     # This sets the value of x to 27.
```

## Non-linear execution

The cells in a notebook are not required to be run in order from top to bottom. That is to say that notebooks allow **non-linear execution**. The ability to run code non-linearly has both advantages and disadvantages.

Notebooks are good for workshopping and demonstrating ideas. Sometimes, when you are exploring an idea, it is helpful to be able to jump around within the notebook and run cells out of order.

However, the result of a particular cell can depend on the order in which the cells of the notebook were executed. It can be undesirable for the results of a code cell to vary based on the execution order of the cells, and can, at times, cause confusion.

## Restart and run all

Seeing results that were executed non-linearly within a notebook could be confusing to someone reading that notebook from top to bottom. For that reason, you will **always** be expected to re-run your notebook from start to finish before submitting an assignment. You can accomplish that by clicking `Runtime > Restart and Run All`.

## Restarting kernel and clearing output

When working with a notebook, it can be a good idea to restart the notebook periodically. If you are frequently running cells in a non-linear fashion, this can result in unexpected results. This can often be remedied by simply restarting the notebook, which clears any variables that have been created and stored in memory.

You can restart a notebook by clicking `Runtime > Restart runtime`. Note that this command only restarts the notebook. It does not run all of the cells.

When restarting a notebook, we often wish to clear any output that was generated the last time the notebook was executed. This can be done by clicking `Edit > Clear All Outputs`.
