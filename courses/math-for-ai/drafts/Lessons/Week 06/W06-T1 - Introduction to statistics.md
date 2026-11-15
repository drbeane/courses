# Week 6: Introduction to statistics

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will provide an introduction to the field of statistics.

## What is statistics?

Statistics is a branch of mathematics that involves collecting, analyzing, interpreting, presenting, and organizing data. It provides tools for summarizing and describing collections of data, and for making inferences or predictions about the larger population from which a collection of data has been sampled.

## Statistical terminology

We will now introduce four of the most important definitions in statistics: observation, population, sample, and random variable.

An **observation** in a statistical study is a single entity of the type being studied. Depending on the nature of the study, an observation could represent a single person, a city, a plant, a specific stock, a single stock trade, a single post on a social media site, a flight between two destinations, or just about anything else you could imagine. Observations are the units of our study.

A **population** in statistics consists of all possible observations of the type being studied. If we are conducting a genetic study of people living in a certain geographic area, then our population would consist of all people living in that area. If we are analyzing trends on a social media site over the last week, then our population would consist of all posts made to that site during that time period. Populations can be abstract or hypothetical and do not have to represent collections of physical objects or realized events. For example, a geneticist might be interested in studying the population of all theoretically possible human genomes, even if the vast majority of those genomes have never appeared in a living human. As another example, an artificial intelligence engineer developing an AI for a strategy game might be interested in studying the population of all theoretically possible game states, even if some of those game states are not actually achievable.

A **sample** is a collection of observations taken from a population. Generally speaking, the purpose of collecting a sample is to gain insights about a population. The entire population of interest is often too large to study directly, and so a researcher will typically collect a sample from that population and use it as a proxy or stand-in for the entire population. When doing so, the researcher has to take care to increase the likelihood that a sample is representative of the entire population and not biased in some way. For example, if a researcher is conducting a study about the average annual salaries of full-time workers in a certain city, they should not create a sample by selecting individuals only from the more affluent areas in the city, as this would bias the study. Generally speaking, the selection of a sample should be performed at random, ideally with each individual in the population having an equal chance of being selected for the sample. As a general rule, the larger the size of a sample, the greater the likelihood that the sample will be representative of the entire population.

A **random variable** is a quantity or characteristic that can be measured for observations in a population, and that is of interest in a particular statistical study. If the observations in a study are people, then the following items are all examples of random variables in which we might be interested: height, weight, gender, hair color, cholesterol level, BMI, nationality, age, and so on. The value of a specific random variable will typically vary across observations in a population or sample. We will often refer to the value of a random variable for a specific observation as an observation of that random variable. For example, the height of a specific human in a population would be an observation of the height random variable.

## Notation for random variables

It is standard practice to use uppercase letters to denote a random variable and to use lowercase letters to denote specific observations of that random variable. For example, a random variable representing height might be denoted as $H$ while the height of a specific person might be denoted by $h$. The random variable $H$ is not a number and represents a characteristic that can be measured, while $h$ is a number that represents an actual observed measurement. When working with several observations of a random variable, we will typically use subscripts to distinguish them. For example, we might denote the heights of the individuals in a sample of size $n$ as $h_1$, $h_2$, ..., $h_n$. When speaking abstractly about random variables, we will often use letters such as $X$, $Y$, and $Z$ to refer to generic random variables.

## Usage of the term "sample"

Note that in machine learning and artificial intelligence, the term "sample" is sometimes used to mean observation. This is an unfortunate conflict in terminology and can certainly cause confusion. When encountering the word "sample", especially when studying ML or AI, one should pay careful attention to the context in which the word is used to determine the intended meaning. In this course, we will always use sample to mean "a collection of observations," but you should be aware of the alternate usage and might well see it used in other courses.

## Branches of statistics

There are two main branches of statistics. These are known as descriptive statistics and inferential statistics.

**Descriptive statistics** involves methods for summarizing, describing, and organizing data. This branch includes the calculation of measures of central tendency (such as mean, median, and mode), measures of variability (such as range, variance, and standard deviation), and measures of dependence (such as correlation and covariance). Quite often, descriptive statistics are calculated from a sample, and these sample statistics are used as approximations of their corresponding values for the overall population. The term **descriptive statistic** is used to refer to a number that is intended to summarize or describe some aspect of a data set.

**Inferential statistics** provides tools for making inferences or predictions about a population based on a sample of data, and for measuring the level of uncertainty in those predictions. This branch includes concepts such as hypothesis testing, confidence intervals, and regression analysis. Inferential statistics allow us to draw conclusions about a population based on the observations from a sample and provide us with a means of describing our level of confidence in those conclusions.

This week, we will focus our attention primarily on descriptive statistics. A study of inferential statistics requires knowledge of probability theory, which we will introduce in Week 7.

## Statistics in machine learning

Statistics plays an extremely important role in machine learning. In fact, the term "statistical learning" is often used to refer to machine learning or, in some cases, to refer to a very closely related field that emphasizes the statistical aspects of machine learning. The applications of statistics in machine learning include data imputation, outlier detection, exploratory data analysis, hypothesis testing and confidence intervals for model parameters and predictions, cross-validation, bootstrapping, and dimensionality reduction. You can explore the details of these applications as part of this week's discussion forum. You will also encounter some of these applications in examples from the lessons as well as in problems in the labs.
