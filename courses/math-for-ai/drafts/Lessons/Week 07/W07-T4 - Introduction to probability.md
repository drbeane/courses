# Week 7: Introduction to probability

**MATH 309/509 Math for AI** · Statistics and probability

In this lesson, we will introduce the field of mathematics known as probability theory. We will discuss the purpose of the field and will introduce some fundamental terminology relating to probability.

## What is probability?

Informally, probability can be thought of as a measurement of uncertainty. If we are interested in the outcome of some incident or circumstance but are not able to directly observe the outcome (either because it has not yet occurred, or because the results are obscured from us), we can use probability to express our level of confidence that the outcome of the incident will satisfy certain criteria. Before delving further into the nature of probabilities, we will establish some terminology that is essential for discussing probabilities.

## Experiments, events, and outcomes

In the context of probability theory, an **experiment** (or **probability experiment**) is any action, situation, or process that results in an unpredictable but observable result. An experiment could represent prototypical examples of "random" processes, such as flipping a coin or rolling a die. It might also represent more complex phenomena such as measuring the price of a stock at some point in the future, observing the outcome of a sporting event, observing the action of an AI-controlled bot in a video game, or observing the behavior of a pedestrian near the planned path of an autonomous vehicle.

An **outcome** of an experiment is any one specific result that might be observed to have occurred when conducting an experiment. A probability theorist has some freedom to define the outcomes of interest for an experiment, but there are some guidelines regarding how outcomes are to be defined. Outcomes should be distinct and non-overlapping. Any particular iteration of an experiment should result in exactly one outcome. The **sample space** for an experiment is the collection of all possible outcomes of the experiment.

An **event** for an experiment is a criterion that can be verified as being either true or false based on the outcome of the experiment. Events can be thought of as collections of outcomes and are, as such, subsets of the sample space. Individual outcomes can satisfy multiple events, and different outcomes might satisfy the same event.

It is important to note the difference between outcomes and events. Outcomes are, in a sense, the “atomic” concept when working with probabilities. Two different outcomes are completely distinct from one another. A particular iteration of an experiment will have exactly one outcome. Events, on the other hand, are collections of outcomes. An event can be satisfied by no outcomes, a single outcome, or multiple outcomes. It is possible for the outcome of a single iteration of an experiment to satisfy multiple events at once. Two events are said to be **mutually exclusive** if it is not possible for them to occur simultaneously.

As an example of some of these concepts, consider an experiment in which we roll two dice and sum the results. If we define the outcomes of this experiment to be the possible totals that could be obtained, then the sample space of the experiment would contain the 11 outcomes shown below.

$$S = \left\lbrace 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 \right\rbrace$$

We can define many different types of events for this experiment. Four examples are provided below.

- Let $A$ be the event of rolling a total less than or equal to 5. This event can be represented as follows: $A = \left\lbrace 2, 3, 4, 5 \right\rbrace$
- Let $B$ be the event of rolling a total greater than or equal to 6. This event can be represented as follows: $B = \left\lbrace 6, 7, 8, 9, 10, 11, 12 \right\rbrace$
- Let $C$ be the event of rolling a total that is odd. This event can be represented as follows: $C = \left\lbrace 3, 5, 7, 9, 11 \right\rbrace$
- Let $D$ be the event of rolling a total that is even. This event can be represented as follows: $D = \left\lbrace 2, 4, 6, 8, 10, 12 \right\rbrace$

## Complementary events

We are occasionally interested in knowing the probability that a certain event will not occur. As it turns out, the criterion that a certain event does not occur is itself an event. We will introduce some terminology and notation for working with such events.

Suppose that $E$ is an event. The **complement** (or **negation**) of $E$ is another event that is satisfied if and only if $E$ is not satisfied. The complement of an event $E$ is commonly denoted by $\sim E$ or $E^c$. A specific outcome is contained in $\sim E$ if and only if it is not contained in $E$. Note that the events $E$ and $\sim E$ will always be mutually exclusive.

## Compound events

We are often interested in the probability of two events occurring simultaneously or in the probability that at least one of two events will occur. Events that are formed from other events in this way are called **compound events**. There are two primary types of compound events: intersections and unions.

The **intersection** (or **conjunction**) of two events $A$ and $B$ is a new event that is satisfied by the outcome of an experiment if and only if BOTH $A$ and $B$ are satisfied. We will typically denote the intersection of $A$ and $B$ as either $A$ $\cap$ $B$ or “$A$ and $B$”.

The **union** (or **disjunction**) of two events $A$ and $B$ is a new event that is satisfied by the outcome of an experiment if and only if at least one of $A$ or $B$ is satisfied. We will typically denote the union of $A$ and $B$ as either $A$ $\cup$ $B$ or “$A$ or $B$”.

## Probability and events

The most fundamental task in probability theory is to assign probabilities to events. That is to say, probability theory is interested in assigning numbers to events that can be used to measure how likely it is for the event to occur. Such a number is called a **probability**. Some important properties of probabilities are listed below.

- The probability of an event is always between 0 and 1, inclusive.
- The higher the probability of an event, the more likely it is to occur.
- An event with a probability of 0 is all but guaranteed not to occur.
- An event with a probability of 0.5 is as likely to occur as it is not to occur.
- An event with a probability of 1 is all but guaranteed to occur.

It should be noted that there are certain important scenarios where an event with a probability of 0 can occur or an event with a probability of 1 could fail to occur. This is perhaps counter-intuitive, but it can be the case when working with an experiment with infinitely many outcomes.

## Probability functions

A **probability function** for an experiment is a function $P$ that assigns to each event $E$ a probability $P[E]$. Probability functions must satisfy the following three properties:

1. $P[E] \geq 0$ for any event $E$.
2. The probability of the sample space is 1. That is, $P[S] = 1$.
3. If $A$ and $B$ are mutually exclusive events, then $P[A \textrm{ or } B] = P[A] + P[B]$.
