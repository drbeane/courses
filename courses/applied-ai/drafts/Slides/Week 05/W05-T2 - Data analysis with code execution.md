---
marp: true
title: "Week 5: Data Analysis With Code Execution"
paginate: true
---

# Data Analysis With Code Execution
### Week 5
COSC-300/500 Applied AI Essentials

---

## Data Analysis With Code

- The AI **writes and runs code** on your uploaded data, usually in Python.
- It can clean, summarize, chart, and model the data.
- The computer does the arithmetic, so the calculations themselves are reliable.
- The program reads the whole file; only the results go into the model's context. That's how it handles files far larger than it could read.

---

## The Code Ran. Is the Analysis Right?

The model still decides:

- which rows to drop
- how to treat duplicates
- how to group categories
- how to read a column
- which calculation to run

Any of these can be wrong, and the chart looks just as convincing.

---

## The Code Is Visible: Read It

You don't need to be a programmer to follow most analysis code: look for filters, drops, and groupings.

Or ask:

> List every step your code took, in order, in plain language. Include any rows you removed or changed, and how many.

Compare that list with what you expected. A step you didn't ask for is worth a question.

---

## A Workflow That Holds Up

1. **Look first**: rows, columns, missing values, and problems, before any analysis
2. **Cleaning plan**: the model proposes; you approve or change it
3. **Specific questions**: change over time, differences between groups, what's unusual
4. **Table and chart**, with row counts, so you can see what each result rests on

---

## Ask for a Cleaning Plan

> Propose a cleaning plan as a numbered list. For each step, say what you'd change, how many rows it affects, and why. Wait for my approval.

You know things the model doesn't. A blank discount might mean no discount, not missing data. Two stores with the same name might really be two stores.

The plan is where your knowledge of the data gets into the analysis.

---

## Demo: A Messy Dataset

1. Upload the file
2. Ask for a cleaning plan before any analysis
3. Run the analysis and chart
4. Open the code and catch a wrong aggregation

<!-- Plant a duplicate-ID or mixed-unit issue that produces a wrong average. Ask: would you have caught this from the chart alone? -->

---

## Check the Analysis, Not Just the Chart

- Row counts before and after cleaning
- What was dropped, and why?
- Units and categories
- Is the total a plausible **size**?
- **Recompute** three numbers yourself
- Does the chart match the table?

---

## The Verification Log

| Number | AI's value | How I checked | My value | Match? |
|---|---|---|---|---|
| Rows after cleaning | 4,812 | Counted in Excel | 4,812 | Yes |
| Avg order, Midwest | $52.10 | Filter + AVERAGE | $47.85 | **No** |

The mismatch is the valuable row. Follow it up: was it the AI's code, your filter, or a cleaning step one of you missed?

---

## Responsible Use

What may you upload?

- **FERPA**: student records
- **Client and employer data**
- **Health and financial records**
- **Other people's personal information**

If you wouldn't email it to a stranger, don't upload it.

Remove columns the analysis doesn't need.
