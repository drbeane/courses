# 02-08 — Smart Glasses and Bystander Privacy

**Module:** 2 — Surveillance, Biometrics, and Privacy
**Estimated time:** 35 minutes

## Learning objectives

By the end of this lesson, you will be able to:

1. Describe current and emerging AI wearables and their sensing capabilities.
2. Analyze the ethics of recording people who cannot consent or opt out.
3. Evaluate technical and legal protections for bystanders: indicators, consent laws and use restrictions.

## Opening case: the light that might go dark

In July 2026, reporting by the *Financial Times* (summarized by Android Authority) described a Meta prototype called "super sensing" glasses. Instead of recording only when the wearer chooses, the glasses would capture a photo every few seconds plus ambient audio, so the AI could later answer questions like "Where did I leave my keys?" or "What did my colleague say about the deadline?"

Two details drew attention:

1. Meta was reportedly considering **turning off the recording LED** while super sensing was active, because a constantly lit LED would be impractical and conspicuous.
2. Meta was reportedly exploring use of the collected data to **train its AI models**.

Meta said only that its products are built with privacy in mind. The plans are not final.

Two years earlier, in October 2024, two Harvard students had connected Ray-Ban Meta glasses to a face search engine (PimEyes) and public records to identify strangers on the subway in real time. Their tool was a demonstration called I-XRAY, which they did not release.

## Core ideas

### The landscape (as of 2026 ⚠)

| Device type | Capabilities |
|---|---|
| Camera glasses (e.g., Ray-Ban Meta) | Photos and video on demand, AI assistant, live streaming |
| Display glasses (e.g., Meta Ray-Ban Display, 2025) | Heads-up display, live captions, translation |
| Always-listening wearables | Pendants, pins and some glasses that continuously transcribe conversations |
| Prototypes | Continuous capture ("super sensing"); facial recognition |

### Why glasses are different from phones

- **Covert:** Recording is less obvious than holding up a phone.
- **Continuous:** Hands-free recording, possibly always on.
- **First-person:** They capture what the wearer sees, including faces, screens and documents.
- **Integrated AI:** Can recognize, transcribe, translate and look up in real time.
- **Social:** Worn into homes, offices, bathrooms, classrooms and clinics.

### The bystander problem

Bystanders are **non-users who bear the costs**. They can't read the privacy policy, change the settings or refuse. Consent-based privacy models fail completely for them (01-04).

Possible protections:

1. **Recording indicators:** Lights or sounds that signal capture. *Limits:* They are small and easy to miss, can be covered with tape, and can be disabled in software unless hardware-enforced. Bystanders may not know what the light means.
2. **Wiretap and eavesdropping laws:** In the U.S., federal law and most states allow recording a conversation if *one* party consents (the wearer). About a dozen states, including California, Florida, Illinois, Maryland, Massachusetts, Pennsylvania and Washington, require *all-party* consent for confidential communications. **Open legal question:** Does ambient transcription by an AI device count as "intercepting" a communication? Lawsuits against always-on transcription products are testing this.
3. **Biometric laws:** Running face recognition on bystanders implicates BIPA in Illinois and GDPR in the EU.
4. **Venue rules:** Hospitals, gyms, courts, schools and some businesses ban camera glasses.
5. **Design restraint:** Not building face recognition into consumer glasses; processing on-device; not retaining bystander data; not using it for training.

### Social norms are forming now

Google Glass (2013–2015) failed partly due to social backlash: "Glassholes," bans in bars, and discomfort among others. Today's glasses look ordinary. Norms for when wearing them is acceptable are being negotiated in real time. In theaters? On dates? In job interviews? In classrooms?

### Accessibility benefits

Smart glasses provide real benefits for blind and low-vision users (scene description, reading text, identifying products, as with Be My Eyes integration) and for Deaf and hard-of-hearing users (live captions). Privacy rules should not foreclose these. **Use restrictions** (what the device may do with bystander data) may be better than **device bans**.

## Applying the frameworks

- **Contextual integrity:** A conversation with a colleague now flows to a cloud server, a searchable archive and possibly a training set.
- **Deontology:** Bystanders become data sources without consent, used merely as means.
- **Consequences:** Memory aid and accessibility vs. normalized ubiquitous recording.
- **Decency, world lens:** What happens to candor, friendship and public life when anyone might be recording and indexing everything?

## Discussion questions

1. Should continuous-capture glasses be required to have a hardware-enforced recording light that can't be disabled? What about users with accessibility needs?
2. Should facial recognition in consumer glasses be legal? For identifying friends you've tagged? For strangers?
3. Is it ethical to wear always-on recording glasses in a classroom? In a therapy session? At a party?
4. A wearer says, "I'm just remembering what I saw, like a better memory." Is that a good analogy?

## Activity: norm design (15 minutes)

Write a one-paragraph policy for Maryville University on AI wearables on campus. Address:

1. classrooms,
2. offices and advising,
3. health and counseling centers,
4. residence halls, and
5. accessibility accommodations.

Explain your reasoning in two sentences.

## Key terms

- **Bystander:** A person affected by a device without using it.
- **One-party / all-party consent:** Recording laws requiring the consent of one participant vs. all participants.
- **Hardware-enforced indicator:** A recording light wired so it can't be turned off by software.
- **Ambient capture:** Continuous recording of surroundings without a specific trigger.

## Connections

- Always-on assistants → 02-07 · Face search → 02-06 · Consent limits → 01-04

## Sources and further reading

- Android Authority, "Meta testing 'super sensing' glasses," Jul 9, 2026 (summarizing FT reporting). ⚠ Plans not final. — [Free full text](https://www.androidauthority.com/meta-testing-super-sensing-glasses-3685734/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r078). <!-- reading-access -->
- TechCrunch, "Harvard dropouts to launch 'always on' AI smart glasses that listen and record every conversation," Aug 20, 2025. — [Free full text](https://techcrunch.com/2025/08/20/harvard-dropouts-to-launch-always-on-ai-smart-glasses-that-listen-and-record-every-conversation/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r079). <!-- reading-access -->
- Nguyen, A. & Ardayfio, C. "I-XRAY" demonstration and write-up (Oct 2024), as reported by 404 Media. — [Free full text](https://docs.google.com/document/d/1iWCqmaOUKhKjcKSktIwC3NNANoFP7vPsRvcbOIup_BA/edit); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r080). <!-- reading-access -->
- Reporters Committee for Freedom of the Press, "Reporter's Recording Guide" (state consent laws). — [Free full text](https://www.rcfp.org/reporters-recording-guide/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r081). <!-- reading-access -->
- Denning, T. et al. "In Situ with Bystanders of Augmented Reality Glasses," *CHI 2014*. — [Free manuscript](https://tamaradenning.net/files/papers/denning-chi2014-pn2112.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r082). <!-- reading-access -->
