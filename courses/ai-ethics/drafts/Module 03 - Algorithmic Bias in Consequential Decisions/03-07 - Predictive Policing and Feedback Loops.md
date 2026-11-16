# 03-07 — Predictive Policing and Feedback Loops

**Module:** 3 — Algorithmic Bias in Consequential Decisions
**Estimated time:** 35 minutes

**In this lesson:** Predictive policing promised to send officers where crime was about to happen. This lesson explains why crime data are not a neutral record of crime, how a model can confirm its own predictions, and why several of the best-known programs were shut down, while the idea behind them has not gone away.

## The List and the Knock on the Door

From 2012 to 2019 the Chicago Police Department kept what it called the Strategic Subject List, often referred to as the "heat list." An algorithm gave people scores for how likely they were to be involved in a shooting, as either a victim or a perpetrator. Officers sometimes visited people with high scores to warn them.

A RAND Corporation evaluation published in 2016 found that being on the list did not make a person less likely to be shot. People on the list were, however, more likely to be arrested for a shooting, which suggested that police were using it as a list of suspects. Many people on the list had never been arrested for a violent crime. A 2020 review by the city's inspector general found problems with the quality of the data, the lack of transparency and the way scores were used. Chicago shut the program down in late 2019.

## Two Kinds of Prediction

Predictive policing comes in two forms.

**Place-based** systems predict where and when crime is likely, and produce maps of small areas for officers to patrol. The best-known product was called PredPol. **Person-based** systems predict who is likely to be involved in crime, and produce lists of names or scores, as Chicago's did.

The concerns differ. Place-based prediction risks concentrating police in particular neighborhoods. Person-based prediction risks treating individuals as suspects for things they have not done.

## The Case for It

The idea behind place-based prediction has a solid foundation. Crime is highly concentrated. In many cities, a small share of street blocks accounts for a large share of crime, and those places stay much the same from year to year. Police have long concentrated patrols in such "hot spots." A 2019 systematic review of 65 studies found that most hot-spots interventions produced noteworthy reductions in crime and disorder, and that crime did not simply move around the corner; nearby areas often benefited too.

If a model can identify those places more accurately than officers' experience, or update them more quickly, it could prevent crimes, and the people who would have been victims are disproportionately residents of the same neighborhoods. Chicago's list also had a protective idea at its core: identifying people at high risk of being shot so that someone could intervene.

The question is whether the data and the systems could deliver on that idea.

## Crime Data Are Not Crime

A model trained on crime data learns from what was recorded, and recorded crime is shaped by three things besides crime itself.

It depends on what is reported. Whether victims call the police varies with how much a community trusts them.

It depends on what is observed. Police find more of the crimes that happen where police are, especially offenses such as drug possession that are discovered, not reported.

And it depends on what is recorded. Officers' discretion, departments' priorities and sometimes falsification decide what makes it into the data. Rashida Richardson, Jason Schultz and Kate Crawford documented that several police departments that used predictive tools had been under federal investigation or court supervision for unlawful practices, which means their data were produced by those practices. They called this "dirty data."

## A Model That Confirms Itself

Put those facts together with a model and you get a **runaway feedback loop**, which Danielle Ensign and colleagues described formally in 2018.

The model predicts crime in Area A, based on past recorded crime. Police patrol Area A more. More patrols mean more crime observed and recorded in Area A. The new data confirm the prediction, so the model sends still more patrols.

Even if the true amount of crime were the same in every area, the model could fix on one of them and never let go. In 2016 Kristian Lum and William Isaac tested this with real data. They applied a predictive policing algorithm to drug arrest records from Oakland, California. It sent police overwhelmingly to Black and low-income neighborhoods, although public health surveys suggested that drug use was spread across the city.

## What Happened to the Programs

Several prominent programs ended.

| Program | What happened |
|---|---|
| Los Angeles: Operation LASER and PredPol | Ended in 2019 and 2020, after an inspector general's audit found inconsistent use and weak evidence |
| Chicago's Strategic Subject List | Shut down in 2019 |
| PredPol, renamed Geolitica | A 2023 analysis by The Markup and Wired of its predictions in Plainfield, New Jersey, found that fewer than 0.5 percent matched a reported crime; the company shut down that year |
| Santa Cruz, California | Became the first U.S. city to ban predictive policing, in 2020 |

Randomized evaluations of place-based predictive policing have found mixed or modest effects, and many deployments were never evaluated at all. That is the central weakness: the programs often spread on the strength of a promise, not evidence.

## What Persists

Predictive policing as a brand has faded. Related tools are spreading. Gunshot detection systems listen for gunfire and alert police. Automated license plate readers, used by thousands of agencies, record where cars go; in 2025 questions arose about some agencies sharing that data with federal immigration enforcement. "Real-time crime centers" combine camera feeds, facial recognition and other data in one room. Each of these sends officers somewhere on the basis of data, so the feedback-loop logic can apply to all of them.

## Where People Disagree

One position holds that prediction based on crime data cannot escape its feedback loops, and that the record of discontinued programs proves it. On this view, cities should not use these tools, and new surveillance technologies should require public approval before they are adopted. Some cities have passed ordinances, often called Community Control Over Police Surveillance laws, that require exactly that.

Another position holds that the problem lies in particular data and designs, not in the idea. Prediction could use data less shaped by police activity, such as calls from the public about serious violent crime, and be tested with randomized trials before it spreads. Place-based patrolling of genuine hot spots has evidence behind it, and abandoning data entirely means going back to officers' intuition, which has its own biases.

A third question concerns person-based lists like Chicago's. If someone really is at high risk of being shot, is a police visit the right response, or should the warning come from social services or community violence-prevention programs? The same prediction can lead to help or to suspicion, depending on who acts on it.

## Check Your Understanding

**1. What is the difference between place-based and person-based predictive policing?**

:::answer Answer
Place-based systems predict where and when crime is likely and guide patrols. Person-based systems predict which individuals are likely to be involved in crime and produce lists or scores.
:::

**2. What are the three things besides crime that shape recorded crime data?**

:::answer Answer
What victims report, what police observe (which depends on where they patrol), and what gets recorded (which depends on discretion, priorities and sometimes falsification).
:::

**3. How does a runaway feedback loop work?**

:::answer Answer
The model predicts crime in an area, police patrol there more, more crime is recorded there, and the new data confirm the prediction, so the model sends even more patrols, even if true crime is the same elsewhere.
:::

**4. What did the evaluation of Chicago's Strategic Subject List find?**

:::answer Answer
Being on the list did not reduce a person's chance of being shot, but people on it were more likely to be arrested for a shooting, suggesting it was used as a suspect list.
:::

## Your Turn

Two neighborhoods have the same true amount of crime, 100 incidents a month. Police record 20 percent of incidents in a neighborhood they are patrolling and 5 percent in one they are not. In Month 1 patrols are split evenly, so each neighborhood is patrolled half the time and should record 12.5 incidents. But a data-entry error gives Neighborhood A 13 recorded incidents and Neighborhood B 12.5. From Month 2, the model sends all patrols to whichever neighborhood recorded more crime the month before.

Trace the recorded incidents for Months 2 to 4. What does the model "learn"? Then describe one change to the system that would stop the loop.

:::answer Check your answer
From Month 2, Neighborhood A gets all the patrols and records 20 incidents a month, while B records 5. The gap is permanent and confirms itself, though true crime is identical. Changes that help include randomizing some patrols, using data not generated by patrols, or capping how far predictions can shift patrols.
:::

## Key Terms

- **Place-based predictive policing:** Predicting where and when crime is likely.
- **Person-based predictive policing:** Predicting which individuals are likely to be involved in crime.
- **Hot spot:** A small area with a persistently high concentration of crime.
- **Runaway feedback loop:** A cycle in which predictions drive data collection that reinforces the predictions.
- **Dirty data:** Data produced by flawed, biased or unlawful practices.

## Sources

- **Core:** Richardson, R., Schultz, J. & Crawford, K. "Dirty Data, Bad Predictions," *NYU Law Review Online* 94 (2019). — [Free full text](https://nyulawreview.org/wp-content/uploads/2019/04/NYULawReview-94-Richardson_etal-FIN.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r135). <!-- reading-access -->
- Saunders, J., Hunt, P. & Hollywood, J. "Predictions put into practice: a quasi-experimental evaluation of Chicago's predictive policing pilot," *Journal of Experimental Criminology* 12 (2016). — [Free manuscript](https://www.nacdl.org/getattachment/9d276b57-0d3f-477a-90fb-5a00c003edff/rand-ssl-study.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r132). <!-- reading-access -->
- Ensign, D. et al. "Runaway Feedback Loops in Predictive Policing," *FAT\* 2018*. — [Free manuscript](https://arxiv.org/abs/1706.09847); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r133). <!-- reading-access -->
- Lum, K. & Isaac, W. "To predict and serve?" *Significance* 13(5), 2016. — [Free full text](https://rss.onlinelibrary.wiley.com/doi/abs/10.1111/j.1740-9713.2016.00960.x); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r134). <!-- reading-access -->
- Sankin, A. & Mattu, S. "Predictive Policing Software Terrible at Predicting Crimes," *The Markup* / *Wired*, Oct 2023. — [Free full text](https://themarkup.org/prediction-bias/2023/10/02/predictive-policing-software-terrible-at-predicting-crimes); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r136). <!-- reading-access -->
- Braga, A. et al. "Hot spots policing of small geographic areas effects on crime," *Campbell Systematic Reviews* 15(3), 2019. — [Free full text](https://doi.org/10.1002/cl2.1046)
