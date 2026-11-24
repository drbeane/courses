---
marp: true
title: "Week 10: Specifications and Tests"
paginate: true
---

# Specifications and Tests
### Week 10
COSC-300/500 Applied AI Essentials

---

## Why a Specification

Last week the assistant filled gaps in your request with its own choices: layouts, names, rules, extra features.

A **specification** is the task brief, written for software.

- Code does exactly what it says, so a gap becomes a behavior someone has to live with.
- A spec moves those decisions to you, before the code is written, when they're cheap to change.

---

## What a Specification Contains

- **Purpose**: what the software is for, and who uses it
- **Requirements**: numbered statements of what it must do
- **Rules and edge cases**: limits, errors, and unusual situations
- **Data**: what is stored, and what each item contains
- **Out of scope**: what it deliberately doesn't do

Without "out of scope", assistants add features nobody asked for.

---

## Make Requirements Testable

| Vague | Testable |
|---|---|
| "Members shouldn't borrow too many books." | "A member with 5 books on loan can't borrow a sixth. Message: 'Loan limit reached'." |
| "Handle overdue books properly." | "Overdue = more than 14 days after checkout." |

A testable requirement names a number, a condition, or an exact message, so a test can check it.

---

## Specification-Driven Work

1. **Write the spec**: what the software must do
2. **Split** it into steps small enough to check one at a time
3. Write **acceptance tests** for each step
4. Direct the assistant one step at a time
5. When the tests pass, commit, and move on to the next step

The spec says what to build. The tests say whether it was built.

---

## A Test Is a Checkable Promise

```python
def test_loan_limit():
    member = register_member("Ada")
    for n in range(5):
        check_out(member, add_book(f"Book {n}"))

    result = check_out(member, add_book("One too many"))

    assert result.rejected
    assert result.message == "Loan limit reached"
```

<!-- Read it aloud line by line. Nobody needs to know Python to follow it. -->

---

## Reading Test Results

```
test_add_book ............ passed
test_check_out ........... passed
test_loan_limit .......... FAILED
  expected "Loan limit reached", got "Too many books"

2 passed, 1 failed
```

Which promise broke, and how. Give the assistant this output exactly.

---

## Tests as Acceptance Criteria

- A test is a **checkable promise** about what the software does.
- "Done" means the tests pass, not that the AI said it's done.
- Ask for **tests before code**, so the tests describe the requirement, not whatever got built.
- Keep the tests you were given **unchanged**. Changing a test changes the promise.
- Run the **whole suite**, every time, not just the new test.

---

## What Tests Can't Tell You

They check the promises someone wrote down, and nothing else.

- A requirement nobody wrote a test for can be broken without any test failing.
- A test can check the wrong thing, or check it too loosely.
- A suite can pass while the software fails in real use.

Run the program yourself too, the way a real user would.
