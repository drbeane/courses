# Design Notes and Review Log

## Key design decisions

1. **Governance comes last, but law appears in every module.** The redesign report's blueprint put governance in Module 2. This draft moves the systematic governance treatment to Module 8, where it sets up the final portfolio. To avoid a gap, Lesson 01-09 introduces the law/policy/standards/ethics distinction, and each topical module has its own law lesson (02-06, 03-05, 04-04, 05-09, 08-01 to 08-03). *Alternative:* swap Modules 2 and 8 if faculty prefer governance up front.
2. **The ten requested topics each get at least two primary lessons.** See `02 - Topics.md`.
3. **Vulnerable users are folded into Module 4** (Lesson 04-08) rather than given their own module, because the requested topics needed the space. The health and professional-duty material sits in 05-08.
4. **Environment gets its own module (8 lessons).** In COSC-643, environmental content was spread across the "non-humans" and "world" modules. It is now a measured-impact module with the non-human lens retained (06-07).
5. **Open vs. closed weights is paired with agents and security** because the 2026 cases (the Hugging Face breach, distillation allegations, export controls) tie them together.
6. **Labs are bounded and safe.** No lab attacks live systems or produces harmful content.

## Open questions for the program

- [ ] Keep the COSC-643 number and title, or retitle to *AI, Ethics, and Society*? (The redesign report suggested *AI Ethics, Society and Responsible Practice*.)
- [ ] Make this course required in the MS AI? The redesign report recommends guaranteeing ethics/society competency.
- [ ] Does the undergraduate COSC-443 get a parallel rebuild from these lessons?
- [ ] Textbook: no single required text yet. Candidates: Narayanan & Kapoor, *AI Snake Oil*; Barocas, Hardt & Narayanan, *Fairness and ML* (free); Crawford, *Atlas of AI*. Keep Todd May, *A Decent Life*, for Module 1.
- [ ] Coordinate with Applied LLM Systems and Applied Agentic AI so that Module 7 doesn't duplicate their technical content.
- [ ] Integrate George Chandy's tutorials (Muse, document summarization) as optional AI-literacy resources? (Meeting note, Oct 14, 2026.)

## Maintenance plan

- Before each offering, re-verify every ⚠ item in `_Research/01` and in lesson source lists.
- Replace at least two opening cases per offering with newer ones. Keep the frameworks stable.
- Record every legal status claim with an "as of" date.

## Review log

| Date | Change |
|---|---|
| 2026-10-19 | v1 structure, overview files and research notes created |
| 2026-10-20 | All 76 lessons drafted (about 81,000 words) |
| 2026-10-20 | Review pass 1. Structure check: all lessons have objectives, connections and sources, and Key terms were added to the five labs and workshops. All cross-references resolve. |
| 2026-10-20 | Fact updates from verification: EU AI Omnibus **adopted and in force July 27, 2026** (Reg. 2026/1744); Colorado SB 26-189 **effective Jan 1, 2027**, with its duties described; Hugging Face case updated from OpenAI's primary post (Artifactory zero-day, the models sought test solutions, third-party assessment); Clearview UK Upper Tribunal ruling (Oct 2025). |
| 2026-10-20 | Added `06 - Verification Checklist.md`, which lists every ⚠ item (157) for pre-offering review |
| 2026-10-20 | Research notes extended: xAI turbines, data-center opposition, Google per-prompt footprint, chardet, Replit, Clearview UT |
| 2026-10-20 | Hugging Face primary disclosure (Jul 16, 2026) added. It made no attribution; entry was via a remote-code dataset loader plus template injection. |
| 2026-10-20 | `_Instructor/` materials built (5 files); lessons 03-03, 04-08, 04-10 and 07-10 and the assessments now link to them |

## Known weaknesses to address in v2

- **Todd May characterization (01-05):** Check the summary of *A Decent Life* against the text. The list of "decent person" traits is a paraphrase.
- **Secondary sources:** Several 2026 items rely on vendor blogs or aggregators (HAQQ, Elephas, CSA note). Replace them with primary sources where possible.
- ~~**Hugging Face's own post-mortem**~~ Done Oct 20: added to 07-06, 07-02 and the research notes.
- **Reading load:** Each lesson lists 4–7 readings. Mark one "Core" and the rest "Optional" before building Canvas pages.
- ~~**Instructor materials**~~ Done Oct 20: `_Instructor/` now holds the verification key, the Kindred companion record, a sample bias audit, the debate guide and a simulated inbox.
- **Assessment balance:** The A1 debate weeks (2, 3, 5, 7) cluster with the A2 (Week 3) and A3 (Week 6) deadlines. Check the workload in a pilot.
