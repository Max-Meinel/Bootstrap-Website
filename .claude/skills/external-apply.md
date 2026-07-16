# External Job Application

Help Max write a job application for an external company based on a job posting URL or pasted text.

## Language

Always communicate with Max in German throughout the entire process.

## Steps

1. Read the job posting (fetch URL or read pasted text)
2. Extract automatically: job title, company, hiring manager name/role, tech stack, key responsibilities
3. Give Max a short summary in German structured as two blocks:
   - **Job-Zusammenfassung:** 3-5 sentences on what the company/team does, what Max would work on day-to-day, and what makes it interesting or unusual
   - **Tech Stack:** a clean list of all programming languages and technologies mentioned in the posting
4. Ask Max targeted questions based on what cannot be extracted from the posting:
   - What is your personal motivation for this specific company or product?
   - Which of your rotations or projects is most relevant here and why?
   - Do you know anyone at this company or have you had any prior contact with the hiring manager?
   - Is there anything specific about this role you want to emphasize or avoid?
5. Based on the answers, generate two files saved to `cv/applications/{company-job-slug}/`:

### File 1: `cover_letter.typ`

A Typst cover letter using this template structure:

```
#set page(margin: (top: 2.5cm, bottom: 2.5cm, left: 2.5cm, right: 2.5cm), paper: "a4")
#set text(font: "Libertinus Serif", size: 11pt, lang: "en")
#set par(leading: 0.8em, spacing: 1.2em)

// Header with external contact details
#align(center)[
  #text(size: 20pt, weight: "bold")[Max Meinel]
  #v(0.3em)
  #text(size: 10pt, fill: rgb("#555555"))[Mannheim, Germany]
  #v(0.2em)
  #text(size: 9.5pt, fill: rgb("#555555"))[
    #link("mailto:max.christian.meinel@gmail.com")[max.christian.meinel\@gmail.com] |
    #link("https://max-meinel.github.io/Portfolio")[max-meinel.github.io/Portfolio] |
    #link("https://github.com/max-meinel")[github.com/max-meinel] |
    #link("https://www.linkedin.com/in/max-meinel")[linkedin.com/in/max-meinel]
  ]
]
```

Content structure:
- Opening: show genuine knowledge of the company/product and personal motivation -- no hollow phrases like "Ich freue mich sehr auf die Stelle" or "I am very excited to apply"
- Middle: connect 1-2 of Max's most relevant experiences (rotations or projects) to the role's key requirements
- Closing: graduating September 2026, looking for full-time software development role

Tone: professional but personal. Keep under 350 words.

**Language rule:** Mirror the language of the job posting. If the posting is in German, write the cover letter and message in German. If the posting is in English, write in English. Set `lang: "de"` in the Typst file for German postings, `lang: "en"` for English.

### File 2: `message.md`

A short direct message to the hiring manager (or recruiter if no manager is named). Plain text, no markdown formatting. Approx 3-4 sentences. Same language as the job posting:
- Reference the role by name
- One sentence of genuine motivation
- Friendly close

## Important rules
- Mirror the language of the job posting (German posting = German output, English posting = English output)
- No m-dashes anywhere (in files or in conversation)
- No markdown formatting in message.md
- Use external email (max.christian.meinel@gmail.com) in all output files, never the SAP email
- No mention of T1/T2/T3 -- that is SAP-internal terminology
- Save both files before summarizing what was written
