# 02-07 — Always-On Devices: Assistants, Glasses, and Bystanders

**Module:** 2 — Surveillance, Biometrics, and Privacy
**Estimated time:** 40 minutes

**In this lesson:** AI assistants are most useful when they know the most about you, and the newest ones listen, watch and remember continuously. This lesson looks at what these devices collect, what has gone wrong, the people around the user who never agreed to any of it, and the design choices that decide how much privacy is lost.

## The Setting That Disappeared

In March 2025, Amazon emailed owners of some Echo devices to say it was discontinuing a setting called "Do Not Send Voice Recordings." That setting had let certain Echo models process voice requests on the device itself, so the audio never left the home. With the launch of Alexa+, Amazon's new generative AI assistant, every voice request would go to Amazon's cloud. The company said the change was needed to power the new features. Users could still choose not to have their recordings saved.

Fifteen months later, in July 2026, the *Financial Times* reported on a Meta prototype it called "super sensing" glasses. Instead of recording only when the wearer chose to, the glasses would take a photo every few seconds and capture ambient sound, so that the assistant could later answer questions such as "Where did I leave my keys?" or "What did my colleague say about the deadline?" Two details drew attention. Meta was reportedly considering turning off the glasses' recording light while this mode was active, since a light that was always on would be impractical. And it was reportedly exploring using the captured data to train its AI models. Meta said only that its products are built with privacy in mind, and the plans were not final.

Both stories show the same pattern. The more capable the assistant, the more data it needs, and the more of that data leaves the device.

## Four Ways of Being Always On

"Always on" covers four different kinds of collection.

Wake-word listening is the oldest. A smart speaker listens continuously but keeps the audio in a short buffer on the device until it hears its **wake word**, such as "Alexa." Then it starts sending audio to the company's servers.

Screen and activity capture takes periodic snapshots of what is on a computer screen and makes them searchable. Microsoft's Recall feature is the best-known example.

Persistent memory is information an assistant stores about you across conversations, so that it remembers your preferences, your job or your family next time. Most major chat assistants now offer some form of it.

Ambient capture is continuous recording of the surroundings, with no specific trigger. Some AI pendants and pins transcribe every conversation their wearer has, and the "super sensing" prototype would photograph everything the wearer sees.

## Why People Want Them

These products exist because they are genuinely useful, and the usefulness comes from the same data that creates the risk.

An assistant that knows your calendar, contacts and email can schedule a meeting with one sentence. One that remembers your earlier conversations does not need everything explained again. A searchable record of your screen helps you find the document you were reading last Tuesday. Hands-free devices help people who are driving, cooking or holding a child. For people with memory problems, a device that can answer "Did I take my medication this morning?" or "What is my grandson's name?" could, in principle, support independent living, though this use has not yet been well studied. And for blind and deaf users, as Lesson 02-08 describes, always-on sensing is a way of reaching information that is otherwise out of reach.

That is the core difficulty of this lesson. Being useful requires context, so some loss of privacy is built into the product. The question is how much, for whom, and under whose control.

## What Has Gone Wrong

The record so far includes several well-documented failures.

In 2019, journalists revealed that contractors working for Amazon, Apple, Google and Microsoft listened to recordings from voice assistants to improve their accuracy. The recordings included accidental activations that captured intimate moments, medical details and apparent crimes. The companies paused those programs and made human review something users had to opt into.

Smart speakers wake by mistake. A 2020 study found that common speakers activated accidentally several times a day in response to dialogue from television shows.

In 2023 the U.S. Federal Trade Commission fined Amazon $25 million for keeping children's voice recordings, and some transcripts, indefinitely, even after parents asked for them to be deleted. Federal law gives children's data special protection.

When Microsoft announced Recall in 2024, security researchers showed that the first design stored the screenshots in an unencrypted database on the computer that malicious software could read. Microsoft withdrew the feature and relaunched it in 2025 as something users must turn on, with encryption and a requirement to authenticate before viewing.

Users of chat assistants have been surprised to find that something they mentioned once was remembered and brought up later in an unrelated conversation. Vendors added controls for viewing and deleting memory, and modes in which nothing is remembered.

## Why AI Makes the Risk Larger

Older devices also recorded things. AI changes the stakes in five ways.

Context is the product. An AI assistant is valuable precisely because it holds your calendar, messages, contacts, location and history in one place.

Recordings that used to sit unused can now be searched and summarized, so a year of audio becomes a year of retrievable conversations.

An assistant with months of data can infer things you never said: your health, your relationships, your finances, your mood. Lesson 02-09 covers inference.

An assistant that can act can also be manipulated. One that reads your email and takes actions can be tricked by instructions hidden in a message into sending your data elsewhere, which Module 7 covers as prompt injection.

And stored data can be demanded by the courts. Recordings from smart speakers have been sought as evidence in U.S. criminal cases.

## The People Who Never Agreed

Everything so far concerns the user, who at least chose the device. The harder problem is everyone else.

A **bystander** is a person affected by a device without using it. The guest in a home with a smart speaker, the child who talks near it, the co-worker in a meeting with an AI note-taker, the stranger in view of camera glasses: none of them read the privacy policy, changed the settings or agreed to anything. Lesson 01-04 showed that consent is weak even for users. For bystanders it does not exist at all.

Camera glasses make this problem sharper than phones do. Recording with glasses is less obvious than holding up a phone. It can be continuous and hands-free. It captures what the wearer sees, including faces, screens and documents. The AI can recognize, transcribe, translate and look things up as it goes. And people wear glasses everywhere, including homes, offices, classrooms, clinics and bathrooms.

The risk is not hypothetical. In October 2024, two Harvard students connected a pair of camera glasses to a face search engine and public records, and showed that they could identify strangers on the subway in real time, sometimes finding names and home addresses. They did not release their tool, but they showed that the pieces exist.

## What Protects Bystanders

Several kinds of protection are available, and each has limits.

A recording light shows when the device is capturing. Lights are small and easy to miss, can be covered with tape, and can be switched off in software unless the light is a **hardware-enforced indicator**, wired so that the device cannot record without it. Bystanders may not even know what the light means. The reported plan to switch the light off during continuous capture shows how fragile this protection is.

Recording laws offer some protection. In the United States, federal law and most states allow a conversation to be recorded if one party to it consents, and the wearer is a party. About a dozen states, including California, Florida, Illinois, Maryland, Massachusetts, Pennsylvania and Washington, require **all-party consent** for confidential conversations. Whether an AI device that transcribes the room counts as "intercepting" a conversation is an open legal question that lawsuits against always-on transcription products are now testing.

Biometric laws apply if the device runs face recognition on bystanders. That would require consent under Illinois law and would be very hard to justify under the European GDPR.

Some places ban camera glasses outright, including some hospitals, gyms, courts and schools.

And design restraint can do more than any of these: not building face recognition into consumer glasses, processing on the device, not keeping data about bystanders, and not using it to train models.

## Design Choices That Decide the Outcome

For both assistants and glasses, the amount of privacy lost is largely a design decision.

| Choice | More private | Less private |
|---|---|---|
| Where processing happens | On the device | In the cloud |
| How long data is kept | Deleted after use | Kept indefinitely |
| Default setting | Off until the user turns it on | On until the user turns it off |
| Human review | None, or only with permission | Routine |
| Use for training | Excluded unless the user opts in | Included unless the user opts out |
| Memory | Visible, editable, limited in scope | Hidden or unlimited |
| Indicator | Hardware-enforced light or sound | Software-controlled, or none |
| Encryption | Keys held by the user | Keys held by the company |

**On-device processing** is the single most protective choice, because data that never leaves the device cannot be reviewed, sold or subpoenaed from the company. Its limit is that small devices can run only smaller models. Apple has tried a middle path, processing some requests on its own servers under published guarantees that nothing is kept and that outside researchers can inspect the system. Those guarantees depend on the company's hardware and on independent checking.

## Where People Disagree

The main disagreement is over defaults.

One side argues that memory, ambient capture and AI training should all be off until the user deliberately turns them on. Most people never change default settings, so whatever is on by default is what happens to nearly everyone. Bystanders cannot change any setting at all, so the defaults are their only protection.

The other side argues that strict defaults make the products far less useful, that most users want the features and are glad to have them, and that people with disabilities or memory problems are among those who lose the most when helpful features are hidden. They add that a well-designed device can protect bystanders through design, for example by never storing their faces, without crippling the device for its user.

A second disagreement is about where the line falls for glasses. Many people find a camera they cannot see acceptable on a street but not in a locker room, a therapy session or a job interview. Social norms for these devices are still forming. When Google Glass appeared in 2013, the backlash, including bans in bars, helped end the product. Today's glasses look like ordinary glasses, and the norms are being set by what people tolerate now.

## Check Your Understanding

**1. What are the four kinds of always-on collection?**

:::answer Answer
Wake-word listening, screen and activity capture, persistent memory, and ambient capture.
:::

**2. Why do bystanders pose a harder problem than users?**

:::answer Answer
Users at least chose the device and can change its settings. Bystanders did neither, could not read the policy, and have no setting to change, so consent-based protection does not reach them at all.
:::

**3. What is the difference between one-party and all-party consent laws?**

:::answer Answer
One-party laws allow a conversation to be recorded if one participant consents, which can be the person recording. All-party laws require every participant in a confidential conversation to consent.
:::

**4. Why is on-device processing considered the most protective design choice?**

:::answer Answer
Data that never leaves the device cannot be reviewed by contractors, used for training, sold, breached on the company's servers, or demanded from the company by a court.
:::

## Your Turn

Write a one-paragraph policy for a university on AI wearables and always-on assistants on campus. Cover classrooms, offices and advising, the health and counseling centers, residence halls, and accommodations for students with disabilities. Then write two sentences explaining the hardest trade-off you had to make.

## Key Terms

- **Wake word:** The phrase that triggers an assistant to start sending audio to its servers.
- **Persistent memory:** Information an assistant retains about a user across conversations.
- **Ambient capture:** Continuous recording of surroundings without a specific trigger.
- **Bystander:** A person affected by a device without using it.
- **All-party consent:** A legal rule that every participant in a confidential conversation must agree before it is recorded.
- **Hardware-enforced indicator:** A recording light wired so that the device cannot record without it.
- **On-device processing:** Computation done on the device itself, without sending data to a server.

## Sources

- **Core:** KIRO7 / Associated Press, "Amazon drops 'Do Not Send Voice Recordings' setting with AI upgrade," Mar 2025. — [Free full text](https://www.kiro7.com/news/local/amazon-drops-do-not-send-voice-recordings-setting-with-ai-upgrade/RIYBCHT3MBFVFM77FMMCXD5HCM/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r073). <!-- reading-access -->
- Android Authority, "Meta testing 'super sensing' glasses," Jul 9, 2026 (summarizing FT reporting). ⚠ Plans not final. — [Free full text](https://www.androidauthority.com/meta-testing-super-sensing-glasses-3685734/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r078). <!-- reading-access -->
- FTC, *U.S. v. Amazon.com* (Alexa COPPA), May 2023. — [Free full text](https://www.ftc.gov/system/files/ftc_gov/pdf/AmazonAlexaOrder-filed.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r074). <!-- reading-access -->
- Engadget, "Microsoft moves to resolve privacy concerns over its Recall feature," 2024; Microsoft Recall documentation (2025). — [Free full text](https://www.engadget.com/microsoft-moves-to-resolve-privacy-concerns-over-its-recall-feature-170318905.html); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r075). <!-- reading-access -->
- Dubois, D. et al. "When Speakers Are All Ears: Characterizing Misactivations of IoT Smart Speakers," *PETS 2020*. — [Free full text](https://petsymposium.org/popets/2020/popets-2020-0072.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r076). <!-- reading-access -->
- Nguyen, A. & Ardayfio, C. "I-XRAY" demonstration and write-up (Oct 2024), as reported by 404 Media. — [Free full text](https://docs.google.com/document/d/1iWCqmaOUKhKjcKSktIwC3NNANoFP7vPsRvcbOIup_BA/edit); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r080). <!-- reading-access -->
- Reporters Committee for Freedom of the Press, "Reporter's Recording Guide" (state consent laws). — [Free full text](https://www.rcfp.org/reporters-recording-guide/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r081). <!-- reading-access -->
- Apple Security Research, "Private Cloud Compute" (June 2024). — [Free full text](https://security.apple.com/documentation/private-cloud-compute/); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r077). <!-- reading-access -->
- Denning, T. et al. "In Situ with Bystanders of Augmented Reality Glasses," *CHI 2014*. — [Free manuscript](https://tamaradenning.net/files/papers/denning-chi2014-pn2112.pdf); [access notes](../_Research/04%20-%20Reading%20Access%20Register.md#r082). <!-- reading-access -->
