# Wooting Interview Prep
**Role:** Medior Frontend Developer - Wootility
**Interviewers:** Pola (Design Lead), Simon (Tech Lead)
**Date:** TBD

---

## The "Why not SAP?" Question

**Bullet points (your talking points):**
- SAP is a nice company - I really like the culture and the people
- The way they treat employees is not something you can take for granted at a company that size
- But I realized I don't like working at such a gigantic tech company
- Development feels very slow and the tech is also very outdated - usual for a company this big, but not what I want
- Working on NEXtickets made that really clear - smaller team, way more interesting tech, product that inspires me
- There I can really feel that this is what I like way more
- I also like being part of thinking about new features - that kind of ownership is what I want
- A company like Wooting - that's what I burn for

**Full answer:**
> "SAP is a nice company - I really like the culture and the people there. The way they treat employees is not something you can take for granted at a company that size.
>
> But during my time there I realized that I don't like working at such a gigantic tech company. The development feels very slow and the tech is also very outdated - which is usual for a company this big, but it's just not really what I enjoy.
>
> What made that really clear to me was working on NEXtickets together with other students. There I could really feel that this is what I like way more - the team is smaller, the tech is way more interesting, and the product inspires me. I also like being part of thinking about new features, not just implementing tickets.
>
> A company like Wooting - that's what I burn for."

---

## Other Questions They Will Likely Ask

### "Tell me about yourself"
Keep it to 2 minutes. Structure: where you are now (dual studies, graduating Sep 2026), what you have built (NEXtickets, SAP rotations), what you want next (product-focused frontend role). End on Wooting.

**Bullet points:**
- 22 years old, based in Mannheim, Germany
- Studying Business Informatics (Software Engineering) - finishing end of September
- Dual studies system: alternating 3 months university, 3 months working at SAP - 6 rotations total
- Started coding in school with Python, informatics in high school - grew from there
- About a year ago co-founded NEXtickets with 2 uni friends and my sister - real customers, small team, we own the tech decisions
- That experience showed me what kind of work I actually enjoy
- Now looking for a full-time role where I can go deep on one product I care about - that's why I'm here

**Full answer:**
> "I'm 22, based in Mannheim, and I'm finishing my Business Informatics degree at the end of September. I've been doing dual studies, which is a German system where you alternate between university and a company - I did six rotations at SAP across different teams, so I got a lot of exposure to different tech and real codebases early on.
>
> I started coding in school with Python and just kept going from there. About a year ago I co-founded a ticketing platform called NEXtickets with two friends from university and my sister. We build it for small clubs and event organizers, and we have real customers. That project taught me a lot - not just technically, but also what it feels like to own something and make real decisions about it.
>
> After all of that, I know I want to work somewhere small, with modern tech, on a product that people actually care about. Wooting is exactly that."

### "Walk me through NEXtickets"

**Bullet points:**
- Started 4 years ago - my own table tennis club was selling 1600 carnival tickets in person
- I thought: this could be easier - so I built a simple online ticketing system just for them
- Payment was handled outside the system, very simple, but it worked
- Did that for 2 years - then last year decided to turn it into a real product with friends
- Now building a proper ticketing platform for small clubs and event organizers - not just my club
- Stack: Next.js, PostgreSQL, hosted on a VPS
- Have real customers, but still early - not very profitable yet (honest, that's fine to say)

**Full answer:**
> "It actually started four years ago at my own table tennis club. They were selling 1600 carnival tickets completely by hand, in person, and I thought there had to be a better way. So I built them a simple online ticketing system - nothing fancy, payment was still handled separately outside the system, but it worked and the club used it.
>
> I ran that for two years, and last year I decided to take it further. I got together with two friends from university and my sister and we built a real product - not just something customized for my club, but a platform any small organizer or club could use.
>
> We built it with Next.js and PostgreSQL, hosted on a VPS. We have real customers now, though it's still early and not very profitable yet. But that's also what makes it valuable to me - every decision is real. The tech choices, the features, what we prioritize. That ownership is something I never had at SAP."

**If they ask about your specific role:**
Prepare an answer for what YOU personally built vs. what the team built. Think about this before the interview.

### "What is your experience with React?"

**Bullet points:**
- NEXtickets is built with Next.js, which is React - use it all the time there
- Familiar with shadcn/ui - component library where you copy the components into your project, so you can still edit them directly
- Familiar with frontend e2e testing with Playwright
- Wooting uses Chakra UI - similar concept to shadcn, component library, should adapt quickly

**Full answer:**
> "Most of my React experience comes from NEXtickets, which is built with Next.js. I use it all the time there - building pages, components, handling state.
>
> I'm also familiar with shadcn/ui, which is a component library I really like. What's nice about it is that you copy the components directly into your project, so you still have full control over the code and can edit them however you want.
>
> I've also done frontend end-to-end testing with Playwright.
>
> I saw that Wooting uses Chakra UI - I haven't used it directly, but it's a similar idea to what I know, so I'd pick it up quickly."

**Note:** They use Chakra UI - be honest that you haven't used it but connect it to shadcn. Don't pretend you know it.

### "What do you know about Wootility?"

**Bullet points:**
- I play CS and Valorant - bought the Wooting 60HE Two about a year and a half ago
- Was really fascinated by the love put into the product - hardware and software both feel amazing
- Wootility is the configuration software for Wooting keyboards - runs in the browser, talks directly to the keyboard via WebHID
- No server in the middle - the app communicates with the USB device directly from the browser
- Performance matters here: analog input, rapid trigger - latency is the point
- I'm a fan of cutting edge tech and Wooting is exactly that kind of company

**Full answer:**
> "I actually use a Wooting keyboard - I play a lot of CS and Valorant, so I bought the Wooting 60HE Two about a year and a half ago. What really struck me was the love that went into both the hardware and the software. It still feels amazing.
>
> Wootility is the configuration app that runs in the browser and talks directly to the keyboard over USB using WebHID - no server in the middle, just the browser communicating with the hardware directly. That makes it technically really interesting, because you're doing things in a web app that used to require a native desktop application.
>
> And performance is the whole point - analog input, rapid trigger - milliseconds matter. I'm drawn to cutting edge tech, and Wooting feels like one of the few companies actually pushing what's possible."

**Note:** Mentioning the 60HE by name signals you are a real user, not someone who googled the product the night before.

### "What does the tech stack look like to you?"
They use: **TypeScript, React, TailwindCSS, Chakra UI**
- You know TypeScript and React from NEXtickets
- If you have not used Tailwind or Chakra UI, say you have used similar utility-first CSS / component libraries and can adapt quickly - and give an honest example

### "Tell me about a bug or problem that was hard to solve"
Prepare one specific story from NEXtickets or a SAP rotation. Use this structure:
1. What was the context?
2. What was the bug/problem?
3. How did you debug/approach it?
4. What did you learn?

### "Where do you see yourself in 2-3 years?"

**Bullet points:**
- Want to establish myself in a real development team - find my place and grow within it
- Want to learn from developers who have been doing this way longer than me
- Want to grow into someone who can contribute at a senior level - not just implement, but help shape how things are built
- Want to still be here - go deep on one product, not jump around

**Full answer:**
> "I want to get serious experience in software development - working alongside people who have been doing this for years and learning from them. I'm still early in my career and I know there's a lot I don't know yet.
>
> In two or three years I want to be someone who really knows the product inside and out - the edge cases, the architecture, the decisions that were made and why. Someone the team can rely on, not just to implement things, but to think through problems properly.
>
> That only happens if you stay somewhere long enough to actually go deep. That's exactly what I'm looking for."

**Note:** Make sure to say "establish myself in a development team" - "myself" is the key word. Without it, it sounds like you want to build/lead a team, which is a different thing entirely.

### "What salary do you expect?"
You're still a dual student so your current salary is low - but you know a full-time SAP role would pay ~67k. Use that as a market reference, not a current salary claim.

**Bullet points:**
- I've been at SAP during my dual studies - I know what a full-time role there pays
- That's my benchmark: 65-70k EUR
- Ask them what their budget is

**If they bring it up, say:**
> "I've been at SAP for my dual studies and I know what a full-time role there would look like salary-wise - around 65-70k. That's my benchmark. What does the budget for this role look like?"

This is honest - you don't have an offer, but you know what you could realistically get there. Don't say "I have an offer from SAP" if you don't.

**If they push for a specific number:** say **65k**.

**Be aware:** Wooting is a small company. They may not be able to match SAP. Decide before the interview how much of a pay cut (if any) you are willing to accept - so you're not caught off guard in the moment.

---

## Questions YOU Should Ask

These show you are serious and have done your homework. Pick 3-4 that feel natural.

**About the process:**
- "How does your development cycle work - do you use Scrum, Kanban, or something else?"
- "How many meetings does a typical week look like for this role?"
- "How big is the Wootility team?"


- "How does the release cycle work - does Wootility ship independently from firmware, or are they tied together?"
- "What does the biggest technical challenge in Wootility look like right now?"
- "How does the team handle browser compatibility, given that WebHID and WebUSB support varies?"

**About the team:**
- "How big is the Wootility team and how is work distributed between frontend and other roles?"
- "What does the onboarding look like - how long until a new developer can ship something?"
- "How closely does frontend work with the hardware team?"

**About the design process:**
- "At what stage does frontend get involved when new features are being designed?"
- "How do you handle design debt versus feature work?"
- "How does a new feature come to life - is that driven by the team, design, or community feedback?"
- "As a developer, can I participate in the feature finding process, or is my role mainly implementing what's already defined?"

- "How does the team think about AI-assisted development and agentic coding tools? Is that something that's encouraged, and do developers get access to tools like Claude?"

**About the role itself:**
- "What would success look like in the first 3 months for this role?"
- "Are there any areas in the codebase that need the most attention right now?"

---

## What You Need to Know AFTER the Meeting

Before the interview ends, make sure you have answers to these. If they don't come up naturally, ask directly.

- [ ] What is the hiring process after this? (Another interview? Technical test?)
- [ ] What is the expected start date?
- [ ] Is this fully remote or would travel to a co-working space be expected?
- [ ] What country/jurisdiction would the contract be under?
- [ ] What is the salary range for this role?

---

## Things to Research Before the Interview

- [ ] Try Wootility if you haven't recently - open it, click around, note one thing you'd improve
- [ ] Look up WebHID API basics so you can speak to how Wootility talks to keyboards
- [ ] Check Wooting's public GitHub if they have one - shows initiative
- [ ] Look at Pola and Simon on LinkedIn - understand their backgrounds

---

## Your Strongest Cards (remind yourself)

1. You are a genuine Wooting user - not faking interest
2. NEXtickets is a real product with real users - not a tutorial project
3. FPV drones background - connects to the hardware/software performance angle
4. You ship things (VS Code extension, ticketing platform, ML moderation model)
5. You worked internationally (Singapore rotation) - fits remote-first culture

---

## English Reminders (from your message)

These were mistakes in your message, watch for them in the interview:
- "prepair" -> **prepare**
- "allied" -> **applied**
- "meethin" -> **meeting**
- "prepaired" -> **prepared**

In spoken English, don't worry too much. They listed "fluent English" as a requirement, and your cover letter English is already strong. Just slow down when you speak - it helps with both fluency and avoiding small mistakes.
