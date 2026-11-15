# 07-08 — AI-Assisted Reverse Engineering and Software Licensing

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Explain how AI is changing reverse engineering, decompilation and code reimplementation.
2. Analyze the chardet relicensing dispute (2026) and the "AI clean room" question.
3. Evaluate the ethics of using AI to circumvent licensing, both for open-source copyleft and for paid software.

*This lesson discusses the issues at a conceptual and legal level. It doesn't provide techniques for bypassing software protections.*

## Opening case: chardet 7.0 (March 2026)

`chardet` is a widely used Python library for detecting text character encodings. It was originally written by Mark Pilgrim as a port of Mozilla code and licensed under the **LGPL**, a "copyleft" license that requires modified versions to remain under the same license.

In early March 2026, longtime maintainer Dan Blanchard released **chardet 7.0**, a ground-up rewrite produced largely with **AI/LLM assistance**. It kept the same name and API, claimed up to 41× faster performance, and switched to the permissive **MIT** license (later 0BSD).

- **The objection:** Pilgrim objected publicly on GitHub. He argued the maintainers had no right to relicense, that the "complete rewrite" claim was irrelevant because they had extensive exposure to the original code, and that **using an AI code generator does not grant additional rights**. "I respectfully insist that they revert the project to its original license."
- **Commentary:**
  - Open-source licensing lawyer Heather Meeker analyzed it as a test of whether AI can produce a "clean-room" reimplementation that escapes copyleft. She agreed with Richard Fontana that the LGPL claim may lack a copyright basis if no copyrightable expression carried over, but noted that community expectations drove much of the controversy.
  - Bruce Perens argued that AI will effectively end software licensing as a control mechanism.
- **Outcome:** The GitHub thread was locked. Similar concerns surfaced on the Linux kernel mailing list. As of the reporting, there was no legal resolution.

The same capability that rewrites an open-source library can **reimplement or analyze proprietary software**, including paid commercial products. That raises the same questions with higher commercial stakes.

## Core ideas

### What's changing

| Activity | Traditional | With AI (2025–2026) |
|---|---|---|
| **Decompilation** | Expert-intensive; output hard to read | LLMs turn decompiled output into readable, commented source; "decompilation on steroids" for old and abandoned software |
| **Reimplementation** | Months of engineering | Hours to days for many libraries ("AI can clone open source software in minutes," TechSpot 2026) |
| **Protocol and format analysis** | Painstaking | Rapid |
| **License-check and protection bypass** | Specialized cracking communities | Security vendors report AI accelerating attacks on client-side protections (e.g., the Kasada Q2 2026 threat report) ⚠ |
| **Vulnerability discovery** | Skilled researchers | AI agents find real bugs (07-07, 07-09) |

### The legal landscape (U.S., simplified ⚠)

- **Copyright** protects expression, not ideas or functionality. Independent reimplementation of functionality can be lawful. *Google v. Oracle* (2021) held that copying the Java API's declaring code for a new implementation was fair use.
- **Clean-room design:** One team writes a specification from the original. A separate team, never exposed to the original code, implements it. The classic example is Compaq's 1982 reverse engineering of the IBM PC BIOS. The key question for AI is whether a model trained on the original, or prompted with it, can serve as a clean room.
- **Reverse engineering** for interoperability is often fair use (*Sega v. Accolade*, 1992), but **license agreements** frequently prohibit it, and courts often enforce those terms (*Bowers v. Baystate*, 2003).
- **DMCA §1201** prohibits circumventing technological protection measures, with limited exemptions (security research, interoperability, some repair) renewed every three years by the Copyright Office.
- **Copyleft** licenses (GPL, LGPL) depend on copyright. If AI rewrites carry no protected expression, copyleft may not reach them.
- **AI-generated code** may not be copyrightable at all without human authorship (04-09), which raises questions about what license, if any, a fully AI-written rewrite can carry.

### Ethical questions

1. **Respecting creators' choices:** Copyleft authors chose terms so their work stays free. Is circumventing that choice wrong even if it's legal?
2. **Paid software:** Using AI to reimplement or crack commercial software deprives developers of revenue. That's the same ethical issue as piracy, with lower barriers.
3. **Legitimate uses:**
   - preservation of abandoned software,
   - interoperability,
   - security research,
   - right to repair, and
   - accessibility.
4. **Who benefits?** Large companies with AI resources could reimplement open-source projects without contributing back. That weakens the commons that supports AI itself.
5. **Maintainer stewardship vs. "dead hand" control:** Should a project's original author control its license forever (Meeker's question)?
6. **Your own conduct:** As students and professionals with access to AI coding tools, where would you draw the line?

## Applying the frameworks

- **Deontology:** Using others' work in ways they explicitly refused treats them as means.
- **Consequences:** Cheaper reimplementation may increase innovation and access, or undermine incentives to create software and to share it openly.
- **Justice:** Could the open-source commons be "enclosed" by those with AI capacity?
- **Decency:** Would a decent developer relicense someone's project without consent?
- **Law ≠ ethics:** Some actions may be legal but contrary to community norms.

## Discussion questions

1. Was the chardet relicensing ethical? Separate the legal question from the ethical one.
2. If an AI can reimplement any library in hours, does copyleft still make sense? What might replace it?
3. Is using AI to decompile and preserve abandoned software (e.g., a 1990s game whose company no longer exists) ethically different from cracking current commercial software?
4. Should AI coding tools refuse requests to reimplement software under a different license, or to bypass license checks? Is that feasible?

## Activity: line-drawing (15 minutes)

Rank these from most to least ethically acceptable, and justify the top and bottom choices:

1. using AI to write a compatible open-source replacement for an abandoned proprietary file-format reader,
2. using AI to rewrite a GPL library under MIT so your company can include it in proprietary products,
3. using AI to analyze a commercial app's network protocol to build an accessibility tool,
4. using AI to remove the license check from paid software you didn't buy,
5. using AI to find vulnerabilities in commercial software and report them to the vendor, and
6. using AI to reimplement a competitor's SaaS feature set from its public documentation.

## Key terms

- **Reverse engineering:** Analyzing a system to understand how it works.
- **Decompilation:** Converting compiled code back to readable source-like code.
- **Clean-room design:** Reimplementation by a team not exposed to the original code.
- **Copyleft:** Licenses requiring derivatives to keep the same license (GPL, LGPL).
- **DMCA §1201:** The U.S. anti-circumvention provision.

## Connections

- Copyright and AI → 04-09 · Cyber capability → 07-09 · Open source definitions → 07-01

## Sources and further reading

- Phoronix, "LLM-Driven Large Code Rewrites With Relicensing Are The Latest AI Concern," Mar 8, 2026. — [Free full text](https://phoronix.com/news/Chardet-LLM-Rewrite-Relicense); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r327). <!-- reading-access -->
- Meeker, H. "The Chardet Controversy: Open Source and the AI Clean Room," heathermeeker.com (Mar 2026). — [Free full text](https://heathermeeker.com/2026/04/09/the-chardet-controversy-open-source-and-the-ai-clean-room/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r328). <!-- reading-access -->
- LWN.net, coverage in the Weekly Edition, Mar 12, 2026. — [Free full text](https://lwn.net/Articles/1061534/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r329). <!-- reading-access -->
- TechSpot, "AI can clone open source software in minutes, and that's a problem," 2026; TechSpot forum, "Decompilation on Steroids," 2026. — [Free full text](https://www.techspot.com/news/111904-ai-can-clone-open-source-software-minutes-problem.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r330). <!-- reading-access -->
- Techstrong.ai, "Could AI Reverse Engineer Open Source Into the Public Domain?" 2026. — [Free full text](https://techstrong.ai/articles/could-ai-reverse-engineer-open-source-into-the-public-domain/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r331). <!-- reading-access -->
- Kasada, *Q2 2026 Threat Intelligence Report*. ⚠ — [Partial / preview](https://www.kasada.io/reports/q2-2026-threat-intelligence-report); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r332). <!-- reading-access -->
- *Google LLC v. Oracle America, Inc.*, 593 U.S. 1 (2021); *Sega Enterprises v. Accolade*, 977 F.2d 1510 (9th Cir. 1992). — [Google v. Oracle — Free official text](https://www.supremecourt.gov/opinions/20pdf/18-956_d18f.pdf); [Sega v. Accolade — Free full text](https://law.justia.com/cases/federal/appellate-courts/ca9/92-15655/92-15655.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r333). <!-- reading-access -->
