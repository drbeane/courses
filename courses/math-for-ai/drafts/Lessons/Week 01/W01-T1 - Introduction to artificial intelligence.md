# Week 1: Introduction to artificial intelligence

**MATH 309/509 Math for AI** · Python

In this lesson, we will provide a brief introduction to the field of artificial intelligence.

## What is intelligence?

The field of artificial intelligence has been around since the mid-1950s. Since the inception of the field, there have been many attempts to provide a concise definition of exactly what artificial intelligence is, with varying degrees of success.

Part of the challenge in defining artificial intelligence is the elusiveness of the definition of intelligence itself. What is intelligence? Who possesses intelligence? Does it belong only to humans, or can other animals (or even plants) exhibit intelligence? By what mechanism is an individual endowed with intelligence? How can intelligence be identified or measured? Questions such as these have been the subject of debate for scientists and philosophers for centuries, and these debates continue to this day. The definition of intelligence is a matter of some controversy and is perhaps somewhat subjective. Given the difficulty in defining “intelligence,” it will certainly be challenging to define “artificial intelligence.” But such efforts are necessary in order to understand what the field of artificial intelligence entails and the sort of problems it hopes to address.

## Original definition of artificial intelligence

John McCarthy, who is often regarded as the father of artificial intelligence, originally defined AI to be “the science and engineering of making intelligent machines.” For the purposes of this definition, McCarthy suggests that “intelligence is the computational part of the ability to achieve goals in the world.” This definition of intelligence would likely be unsatisfying to many but is perhaps a suitable definition for discussing the sort of intelligence that might be exhibited by machines. It could be argued that McCarthy’s definition of artificial intelligence is too broad, however. There are many machines that perform mundane calculations in order to accomplish some goal but would not typically be considered to be intelligent.

## Emphasis on human intelligence

One can find many proposed definitions of artificial intelligence that take a form similar to the following statement: Artificial Intelligence is the theory and development of computer systems capable of performing tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and problem-solving.

Is the emphasis on “human intelligence” in this definition important? If a machine were designed to perform tasks that require a level of intelligence exhibited by a different kind of life, such as an elephant, a dog, or even a swarm of insects, should that not be considered artificial intelligence? Like McCarthy’s definition, this definition could also be considered to be too broad. Prior to the development of computational devices, calculating the first 4 decimal digits of the square root of 37 would have required human intelligence, but this calculation can be performed quite easily on a hand-held calculator. Should calculators be considered examples of artificial intelligence?

In 1983, Elaine Rich tersely defined artificial intelligence to be “The study of how to make computers do things at which, at the moment, people are better.” This definition slyly circumvents the issues the previous definitions have in attributing intelligence to mundane devices. But it also uses human intelligence as an arbitrary benchmark and produces a somewhat unsatisfying moving target as to what should be considered artificial intelligence. Should a particular AI application no longer be considered to be part of the field of AI once it is able to outperform humans?

## Proposed definition of artificial intelligence

While there might not be a completely satisfying definition of artificial intelligence, for the sake of this course, we propose to define AI as follows:

***Artificial Intelligence is the study and development of computer systems that are capable of performing tasks commonly associated with intelligent beings, particularly those related to problem-solving, decision-making, and perception.***

The exact way in which a machine performs these tasks will vary from application to application, and the degree of success it has to demonstrate in order to be considered intelligent is open to interpretation. But this will provide us with a loose framework to work with as we begin our study of artificial intelligence.

## Generative AI and large language models

Many of the AI systems in wide use today are examples of **generative AI**: systems that produce new text, images, audio, or computer code in response to a request. The best-known examples are AI assistants built on **large language models**, or **LLMs**. A large language model is a very large neural network that has been trained on an enormous amount of text to do one thing: predict what comes next in a piece of text. Repeating that prediction many times produces sentences, answers, and programs.

These systems fit the definition proposed above. Writing, summarizing, translating, and answering questions are tasks commonly associated with intelligent beings.

It is worth knowing from the start of this course that an LLM is built entirely from the mathematics we are about to study. The text it reads is turned into lists of numbers (Week 2 and Week 3). The model combines those numbers using matrix multiplication (Week 3). It is trained by an optimization method that relies on derivatives (Week 4 and Week 5). Its output is a set of probabilities, from which the next piece of text is chosen at random (Week 7 and Week 8). In the final lessons of the course, we will put these pieces together.
