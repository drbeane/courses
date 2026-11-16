# The History of AI

The chat assistants in this course arrived suddenly for most people, but they are the latest step in a field that is more than 70 years old. This page follows that history: the early hopes, the two main approaches, the periods when funding dried up, and the run of discoveries since 2010 that led to today's language models. It is background reading and is not assigned.

## Before Computers

The idea of an artificial mind is much older than the machines that could attempt one. Greek myths describe bronze servants built by the god Hephaestus. Medieval and early modern inventors built mechanical figures that wrote, played music, or appeared to play chess. The most famous chess-playing "automaton," the Mechanical Turk of 1770, was a hoax with a human player hidden inside.

The more important groundwork was in logic and mathematics. In the 1840s **Ada Lovelace**, writing about Charles Babbage's design for a mechanical computer, saw that such a machine could work with symbols of any kind, not only numbers. She also wrote that it could do only what it was instructed to do, an objection that people still raise about AI. In the 1930s **Alan Turing** described a simple, imaginary machine that could carry out any calculation that can be written as a procedure. That idea, now called a Turing machine, became the theory behind every computer.

## The Question: Can Machines Think? (1950)

In 1950 Turing published "Computing Machinery and Intelligence," which opens with the question "Can machines think?" Rather than argue about the definition of thinking, he proposed a test he called the **imitation game**: if a person exchanging typed messages with a machine and with a human can't reliably tell which is which, we have as much reason to call the machine intelligent as we do the human. Now known as the **Turing test**, it shaped how people talked about AI for decades. Turing also predicted that machines would one day learn, much as a child does, rather than having everything programmed in.

## The Field Gets a Name (1956)

In the summer of 1956, **John McCarthy**, **Marvin Minsky**, **Claude Shannon**, and **Nathaniel Rochester** organized a workshop at Dartmouth College. Their proposal coined the term **artificial intelligence** and stated a bold premise: that every aspect of learning or intelligence could in principle be described so precisely that a machine could simulate it. The workshop is usually treated as the founding of the field.

The early results were exciting. Allen Newell and Herbert Simon's **Logic Theorist** (1956) proved theorems from a standard logic textbook. Programs played checkers well enough to beat their authors; Arthur Samuel's checkers program, which improved by playing against itself, gave us the phrase **machine learning** in 1959. Researchers predicted that machines would match human intelligence within a generation.

## Two Approaches From the Start

From the beginning there were two broad ideas about how to build intelligence.

**Symbolic AI** held that thinking is the manipulation of symbols by rules. If you could write down the right facts and the right rules of reasoning, a computer could reason. This approach dominated the field's first decades and is sometimes called "good old-fashioned AI."

**Connectionism** held that intelligence comes from large networks of simple, connected units, loosely like neurons in a brain, that learn by adjusting their connections. In 1958 **Frank Rosenblatt** built the **perceptron**, a machine that learned to recognize simple patterns. The press reported it as the beginning of a machine that would walk, talk, and be conscious.

The two camps competed for attention and funding. In 1969 Minsky and Seymour Papert published *Perceptrons*, which proved that a single-layer perceptron couldn't learn some simple patterns. The book was widely read as a verdict on neural networks in general, and research on them slowed sharply for more than a decade.

## ELIZA and the First Chatbot (1966)

At MIT, **Joseph Weizenbaum** wrote **ELIZA**, a program that imitated a psychotherapist by matching patterns in what the user typed and turning statements back into questions. "I am unhappy" might become "Why do you say you are unhappy?" ELIZA understood nothing, yet some users confided in it and insisted it understood them. Weizenbaum was disturbed by how readily people attributed understanding to a simple program, and he spent much of his later career warning about it. The tendency is now called the **ELIZA effect**, and it is worth remembering when a modern chatbot sounds sympathetic.

## The First AI Winter (Mid-1970s)

The early predictions didn't come true. Programs that worked on small, tidy problems failed on real ones, because the number of possibilities grew far too quickly for the computers of the day. Translation between languages, which had looked close in the 1950s, turned out to be very hard. A 1966 U.S. report found machine translation slower, less accurate, and more expensive than human translation. In Britain, the 1973 **Lighthill report** concluded that AI had not delivered on its promises, and government funding was cut. U.S. military funding also became much more selective.

The years of reduced funding and interest that followed are called the first **AI winter**. The pattern, high expectations followed by disappointment and cuts, would repeat.

## Expert Systems (1980s)

AI recovered in the 1980s with a narrower goal. **Expert systems** captured the knowledge of human specialists as hundreds or thousands of if-then rules. **MYCIN**, developed at Stanford in the 1970s, recommended antibiotics for blood infections about as well as specialists did. **XCON**, used by Digital Equipment Corporation from 1980, configured computer orders and was reported to save the company tens of millions of dollars a year. Companies built AI departments, and Japan launched an ambitious national project to build a new generation of intelligent computers.

Expert systems had the weaknesses of all hand-written rules. They were expensive to build, because experts had to spell out what they knew, and much of what experts know is hard to put into words. They were brittle: a case the rules didn't anticipate could produce nonsense. And they were hard to maintain as the rules grew into the thousands.

## The Second AI Winter (Late 1980s to Mid-1990s)

The market for specialized AI computers collapsed in 1987, when ordinary desktop machines became powerful enough to do the same work. Many expert systems proved too costly to keep up to date, and Japan's project ended without reaching its goals. Funding and enthusiasm fell again. For years afterward, many researchers avoided the term "artificial intelligence" and described their work as machine learning, pattern recognition, or statistics instead.

## Neural Networks Return Quietly (1980s)

Neural network research didn't stop entirely. In 1986 **David Rumelhart**, **Geoffrey Hinton**, and **Ronald Williams** popularized **backpropagation**, a method for training networks with several layers by working backward from each error to adjust every connection a little. Multi-layer networks could learn the patterns that had defeated the single-layer perceptron.

In the late 1980s and 1990s **Yann LeCun** and colleagues used these methods to build networks that read handwritten digits, and by the late 1990s such systems were reading a substantial share of the checks deposited in U.S. banks. But neural networks were slow to train on the computers of the time and needed more data than was usually available, so through the 1990s and 2000s other machine learning methods were more popular.

## Learning From Data (1990s and 2000s)

The field's center of gravity moved from writing rules to **learning from data** with statistical methods. Instead of asking experts how to recognize spam, you collected thousands of messages labeled spam or not spam and let an algorithm find the patterns. This approach powered speech recognition, spam filters, search ranking, and product recommendations, often without being called AI at all.

Two public milestones marked the period. In 1997 IBM's **Deep Blue** beat world chess champion Garry Kasparov in a six-game match. Deep Blue relied mostly on enormous search speed and hand-tuned evaluation rather than learning, but the match showed that a machine could beat the best human at a game long treated as a test of intelligence. In 2011 IBM's **Watson** beat two champions on the quiz show *Jeopardy!*, answering clues written in ordinary, often punning English.

Meanwhile, two ingredients that would matter enormously were accumulating: the internet was producing vast amounts of text and images, and graphics processors (**GPUs**), designed for video games, were turning out to be very good at the arithmetic neural networks need.

## The Deep Learning Breakthrough (2012)

In 2012 a neural network called **AlexNet**, built by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton, entered the **ImageNet** challenge, a competition to label photos in a dataset of more than a million images in a thousand categories. Trained on GPUs, it made far fewer errors than any other entry. Within a few years, nearly every leading system in image recognition, and soon in speech recognition and translation, was a deep neural network. "Deep" refers to the many layers in these networks.

The lesson of the period was that methods dismissed decades earlier worked very well once they had enough data and enough computing power. Hinton, LeCun, and Yoshua Bengio received the 2018 Turing Award, computing's highest honor, for this work.

## Games and Science (2016 to 2020)

In 2016 **AlphaGo**, built by DeepMind, beat Lee Sedol, one of the world's strongest players of Go. Go has far too many possible positions to search the way Deep Blue searched chess, and experts had expected a human-level Go program to be a decade away. AlphaGo combined deep neural networks with search and learned partly by playing millions of games against itself. One of its moves in the second game, move 37, was so unexpected that commentators first thought it was a mistake.

DeepMind then turned similar methods to science. In 2020 **AlphaFold** predicted the three-dimensional shapes of proteins from their sequences with accuracy close to laboratory methods, solving a problem biologists had worked on for 50 years. Demis Hassabis and John Jumper shared the 2024 Nobel Prize in Chemistry for it. Hinton shared the 2024 Nobel Prize in Physics with John Hopfield for earlier foundational work on neural networks.

## The Transformer (2017)

In 2017 a team at Google published "Attention Is All You Need," which introduced the **transformer**, a neural network design built around a mechanism called **attention**. Attention lets the model weigh how much every word in a passage matters to every other word, and it can be computed in parallel, which made training on huge amounts of text practical.

The transformer was designed for translation, but it turned out to work for almost any kind of sequence. It is the "T" in GPT (generative pre-trained transformer), and every major language model in this course is built on it.

## Language Models Grow (2018 to 2022)

Researchers found that training a transformer to predict the next word in an enormous amount of text produced a model that had absorbed a great deal of grammar, facts, and reasoning patterns along the way. OpenAI's **GPT-2** (2019) wrote paragraphs that were sometimes hard to tell from human writing. **GPT-3** (2020), more than 100 times larger, could perform tasks it had never been trained for when given a few examples in the prompt.

A consistent finding, sometimes summarized as **scaling laws**, was that models improved predictably as they were given more data, more parameters, and more computing power. That finding drove a race to build larger models.

Raw language models were hard to use, though. They continued text rather than following instructions, and they reproduced the worst of what they had read along with the best. A second stage of training changed that: models were tuned on examples of helpful answers and then on human ratings of which answers were better, a method called **reinforcement learning from human feedback**. Anthropic, founded in 2021, developed a related approach in which a model is trained against a written set of principles, which it calls **Constitutional AI**.

## The Chat Era (2022 to Today)

On November 30, 2022, OpenAI released **ChatGPT**, a free chat interface to a tuned language model. It reached an estimated 100 million users in about two months, faster than any consumer application before it. For most of the public, this was the moment AI arrived.

Competitors followed quickly. Anthropic released **Claude** in March 2023, and Google, Meta, Microsoft, and others released or built on their own models. Several of the main developments since then are topics in this course:

- **Larger context windows**, from a few thousand tokens to hundreds of thousands and more (Week 2).
- **Multimodal models** that read images, documents, and audio as well as text (Week 5).
- **Reasoning models** that work through a problem step by step before answering, usually at greater cost (Weeks 1 and 3).
- **Tool use and agents**: models that search the web, run code, use connectors, and take actions on a computer (Weeks 6 to 13).
- **Open-weight models** whose parameters are published, so anyone can run and modify them.

Concern grew alongside capability. Researchers, companies, and governments began to take seriously questions about misinformation, bias, privacy, jobs, copyright, security, and the risks of increasingly capable systems. The European Union passed the **AI Act** in 2024, and many organizations now publish rules for how their people may use AI. Week 14 looks at AI in organizations.

## Patterns Worth Noticing

A few themes run through the whole history:

- **Predictions have been unreliable in both directions.** Early researchers expected human-level AI within a generation. Later, experts expected Go and protein folding to take much longer than they did.
- **Hype and winters alternate.** Periods of excitement and heavy funding have been followed by disappointment and cuts. Whether the current period is different is an open question.
- **The definition keeps moving.** Once something works reliably, people tend to stop calling it AI.
- **Data and computing power mattered as much as ideas.** Neural networks were invented in the 1950s and trained with backpropagation in the 1980s, but they took over only when the internet supplied the data and GPUs supplied the computing power.
- **People attribute understanding readily.** The ELIZA effect is as relevant to today's chatbots as it was in 1966.

## Further Reading

- Alan Turing, "Computing Machinery and Intelligence" (1950). The original paper is short and readable.
- Melanie Mitchell, *Artificial Intelligence: A Guide for Thinking Humans* (2019). A clear account of how modern AI works and where it falls short.
- Michael Wooldridge, *A Brief History of Artificial Intelligence* (2021). A short, readable history of the field.
