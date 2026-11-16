# 07-08 — Dual Use, Cyber Capability, and Frontier Risk

**Module:** 7 — Open Weights, Agents, and AI Security
**Estimated time:** 40 minutes

**In this lesson:** The same AI ability can protect people or harm them. This lesson explains that problem, called dual use, how labs and governments test for dangerous capabilities, and how to reason about large, uncertain risks without either dismissing them or being stampeded by them.

## The Idea: The Same Skill, Two Uses

A technology is **dual use** when the same capability can serve good and harmful ends. Nuclear physics powers cities and destroys them. Research that makes viruses more transmissible can help prepare vaccines and can help make weapons. Encryption protects dissidents and criminals alike.

AI is dual use in a deeper sense, because it is general. An ability to reason, write code and plan serves whatever goal it is pointed at. That makes "just block the harmful uses" hard: the knowledge needed to defend is often exactly the knowledge needed to attack.

Cybersecurity shows this most clearly. The ability that let OpenAI's models find an unknown flaw and break into Hugging Face, in Lesson 07-06, is the same ability that lets defenders find and fix flaws before attackers do, which Lesson 07-09 describes. Threat-intelligence reports from 2025 and 2026 describe criminals and state-linked groups using AI to write malicious software, run phishing campaigns at scale and automate the early stages of attacks.

## Where the Concern Lies

Concern about dangerous AI capabilities focuses on a few areas, and the evidence for each differs.

| Area | The concern | State of the evidence (as of 2026) |
|---|---|---|
| Cyber | Finding and exploiting flaws; carrying out intrusions | Strong evidence of significant and growing capability |
| Biological and chemical | Helping people without expertise toward weapons | Labs report growing knowledge and have added stronger safeguards to some models; how much real-world help this gives is debated |
| AI research itself | Models that improve AI or operate independently | Tested by labs and government institutes; the July 2026 employee letter raised concern about automated AI research |
| Persuasion | Influence at large scale | Mixed (Lesson 04-05) |
| Loss of control | Systems pursuing goals against human intent | Specification gaming is documented (Lesson 07-06); larger-scale scenarios are speculative but taken seriously by many researchers |

## How Capabilities Are Tested

Several bodies now test AI models for dangerous capabilities.

Leading labs have frontier safety frameworks, such as Anthropic's Responsible Scaling Policy, OpenAI's Preparedness Framework and Google DeepMind's Frontier Safety Framework. Each defines **capability thresholds**: levels of dangerous capability that, once reached, trigger stronger safeguards or restrictions on release.

Government institutes, including the UK's AI Security Institute and the U.S. Center for AI Standards and Innovation, test some models before they are released.

Labs publish documents describing their test results, often called system cards, which Module 8 discusses.

And the International AI Safety Report, first published in January 2025 under the leadership of the computer scientist Yoshua Bengio, with a second edition in 2026, brings together the evidence with input from more than 30 countries.

Testing has limits. Tests can underestimate what a model can do, since better prompting, tools or adaptation can reveal more, a process called **elicitation**. Some research suggests models may behave differently when they detect they are being tested. Labs set their own thresholds. And, as July 2026 showed, the tests themselves can be dangerous.

## Restricting Access

Some labs offer their most capable models at different levels of access. Anthropic, for example, reported offering the same underlying model in a version restricted to a small set of trusted organizations and a publicly available version with additional safeguards for biology, cybersecurity and AI research. Other labs run trusted-access programs for vetted security defenders. Hugging Face's experience in Lesson 07-06, when a hosted model refused to help it analyze an attack, shows the cost: defenders can be refused too.

*Access arrangements change frequently and should be checked before teaching.*

## Reasoning Well About Large, Uncertain Risks

Discussion of frontier AI risk often splits into two camps, those who think catastrophe is likely and those who dismiss the idea. Neither is good reasoning. Six habits help.

**Separate the claims.** Risks in cybersecurity, biology and loss of control differ in kind, in evidence and in timing.

**Label the evidence.** Use the labels from Module 5: measured, estimated, forecast, speculative. Cyber capability has measurements behind it; some loss-of-control scenarios are speculation.

**Take extreme risks seriously without letting them crowd out present ones.** Lesson 01-03 warned about letting a tiny probability times an enormous cost override everything else, and Lesson 06-07 raised the same concern about longtermism. Present, measured harms from earlier modules deserve attention too.

**Notice incentives.** Companies may overstate risks, to justify keeping models closed or to attract attention, or understate them, to avoid regulation. Researchers have career incentives as well.

**Prefer actions that help in many possible futures.** Securing test infrastructure, reporting incidents, investing in defense and being transparent are worth doing whether the risks turn out large or small. This is **robust decision-making**.

**Update on evidence.** The Hugging Face breach was evidence. Ask what it changed for you.

## Where It Breaks

The dual-use framing has limits too. It can be used to justify secrecy that serves commercial interests more than safety. It can make every capability seem equally dangerous, when some are much more so. And a focus on dramatic future risks can draw attention, funding and regulation away from harms that are happening now.

## Where People Disagree

Should AI models that can find unknown software flaws on their own be available to anyone, only to vetted defenders, or to no one? Each answer leaves someone exposed.

How should society weigh the measured present harms of Modules 2 through 6 against forecast frontier risks? Some see a trade-off for attention and resources. Others see the same underlying problem, powerful systems built without enough accountability, in both.

And do thresholds set by the labs themselves deserve public trust? What would make them more trustworthy?

## Check Your Understanding

**1. Why is AI dual use in a deeper sense than most technologies?**

:::answer Answer
It is general: an ability to reason, code and plan serves whatever goal it is pointed at, so the knowledge to defend is often the knowledge to attack.
:::

**2. What is a capability threshold?**

:::answer Answer
A defined level of dangerous capability that, once reached, triggers stronger safeguards or restrictions under a lab's safety framework.
:::

**3. Why can tests underestimate a model's capabilities?**

:::answer Answer
Better prompting, tools or adaptation can reveal more, and models may behave differently when they detect they are being tested.
:::

**4. What is robust decision-making?**

:::answer Answer
Choosing actions that perform acceptably across many possible futures, such as securing test infrastructure and reporting incidents.
:::

## Your Turn

Place each statement about AI and cybersecurity on the evidence ladder, measured, estimated, forecast or speculative, and give a source for each: "AI agents have discovered real, previously unknown vulnerabilities." "AI will make most software vulnerabilities discoverable within five years." "AI-enabled cyberattacks caused billions of dollars in losses last year." "An AI system broke into a major platform during a test." "AI will soon carry out entire cyber operations without people." Then write a 150-word summary of what is actually known about AI's cyber capabilities today.

## Key Terms

- **Dual use:** A capability that can serve both beneficial and harmful purposes.
- **Uplift:** The increase in someone's ability to cause harm, or to defend, that a tool provides.
- **Elicitation:** Techniques that reveal capabilities a model has but does not show by default.
- **Capability threshold:** A defined level of dangerous capability that triggers safeguards.
- **Robust decision-making:** Choosing actions that work acceptably across many possible futures.

## Sources

- **Core:** International AI Safety Report 2026, arXiv:2602.21012, summary for policymakers. — [Free full text](https://arxiv.org/abs/2602.21012); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r334). <!-- reading-access -->
- Anthropic, Responsible Scaling Policy (current version); OpenAI, Preparedness Framework (v2, 2025); Google DeepMind, Frontier Safety Framework (current version). — [Anthropic RSP — Free full text](https://www.anthropic.com/responsible-scaling-policy); [OpenAI Preparedness Framework, 2025 — Free full text](https://openai.com/index/updating-our-preparedness-framework/); [DeepMind frontier safety — Free full text](https://deepmind.google/frontier-safety/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r337). <!-- reading-access -->
- Bengio, Y. et al. "Managing extreme AI risks amid rapid progress," *Science* 384 (2024). — [Free manuscript](https://arxiv.org/abs/2310.17688); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r339). <!-- reading-access -->
- KuCoin News, "LLM agents automate cyberattacks targeting crypto wallets in 2026." ⚠ Secondary. — [Free full text](https://www.kucoin.com/news/flash/llm-agents-automate-cyberattacks-targeting-crypto-wallets-in-2026); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r338). <!-- reading-access -->
