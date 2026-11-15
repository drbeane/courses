# Week 1: Introduction to machine learning

**MATH 309/509 Math for AI** · Python

In this lesson, we will introduce the branch of artificial intelligence known as machine learning.

## Machine learning

**Machine learning** is a subfield of artificial intelligence and data science that uses computer science, mathematics, and statistics to create algorithms capable of analyzing and learning from previously collected data. Machine learning models are trained to perform certain tasks through trial and error, rather than by following a set of rules that have been explicitly programmed by a human. In many cases, this approach is simpler to implement than developing explicit rules, and is often more effective.

## Applications of machine learning

Machine learning has applications in many fields. A (non-exhaustive) list of applications includes spam detection, fraud detection, generating search results, image classification, voice recognition, language translation, programming autonomous vehicles, predicting credit scores, predicting housing costs, medical diagnoses, recommender systems, and handwriting recognition. More recent applications include AI assistants that answer questions and write text, and systems that generate images.

## Branches of machine learning

There are three general categories of machine learning problems: supervised learning, unsupervised learning, and reinforcement learning. A fourth approach, self-supervised learning, has become central to modern AI.

- **Supervised learning** involves using data, often arranged in a table, to create models that are capable of predicting or estimating the value of one or more fields in the dataset given the value of other fields. In supervised learning, we specify what field(s) we would like the model to try to predict, and we must supply a training algorithm with a dataset containing input values as well as the correct output values. The training algorithm will attempt to identify the model (from amongst a specified class of models) that performs the best on the given dataset.
- **Unsupervised learning** methods attempt to identify underlying structures and patterns in a dataset that might be difficult or impossible to identify by inspecting the data manually. An example usage of unsupervised learning is clustering, which attempts to group observations in a dataset into some number of closely-related groups. Some applications of clustering include performing customer segmentation for marketing purposes, or grouping users of a website or app based on their usage patterns in an attempt to identify potential security risks.
- **Reinforcement learning** is an approach to AI that involves training agents to react to complex, unpredictable environments in order to achieve some goal. Reinforcement learning agents "learn" how to perform a task through experience. The agent is asked to perform the task many times, adjusting its behavior in an attempt to obtain better performance. Feedback about an agent's behavior is provided to the agent in the form of numerical rewards and penalties intended to measure its performance.
- **Self-supervised learning** trains a model on data that has no labels supplied by people. Part of each example is hidden, and the model is trained to predict the hidden part from the rest. Large language models are trained this way: the model is shown the beginning of a piece of text and is trained to predict what comes next. The text itself supplies the correct answers, which makes it possible to train on enormous amounts of data.

We will explore supervised learning in more detail in the next lesson.

## Additional resources

The following video from Crash Course: Computer Science provides a brief introduction to machine learning.

<div class="video"><iframe src="https://www.youtube.com/embed/z-EtmaFJieY" title="Machine Learning and Artificial Intelligence | Crash Course Computer Science" loading="lazy" allowfullscreen></iframe></div>

Machine Learning and Artificial Intelligence (2018). Crash Course Computer Science \[Video File\]. Retrieved from YouTube.
