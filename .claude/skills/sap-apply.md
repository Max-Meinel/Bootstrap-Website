# SAP Internal Application

Help Max write an internal SAP job application based on a job posting URL or pasted text.

## Language

Always communicate with Max in German throughout the entire process.

## Steps

1. Read the job posting (fetch URL or read pasted text)
2. Extract automatically: job title, team, hiring manager name/role, tech stack, key responsibilities
3. Give Max a short summary in German structured as two blocks:
   - **Job-Zusammenfassung:** 3-5 sentences on what the team does, what Max would work on day-to-day, and what makes it interesting or unusual
   - **Tech Stack:** a clean list of all programming languages and technologies mentioned in the posting
4. Ask Max targeted questions based on what cannot be extracted from the posting:
   - What is your personal motivation for this specific team or product?
   - Which of your rotations or projects is most relevant here and why?
   - Do you know anyone on this team or have you had any prior contact with the hiring manager?
   - Is there anything specific about this role you want to emphasize or avoid?
4. Based on the answers, generate two files saved to `cv/applications/{job-title-slug}/`:

### File 1: `cover_letter.txt`

A plain text English cover letter (no markdown) structured as:
- Opening: show genuine knowledge of the team/product and personal motivation
- Middle: connect 1-2 of Max's most relevant experiences (rotations or projects) to the role's key requirements
- Closing: express enthusiasm, mention T1 entry level naturally without over-emphasizing it

Tone: professional but personal, not generic. No hollow phrases like "I am very excited to apply."

### File 2: `message.txt`

A short, warm direct message to the hiring manager (or recruiter if no manager is named). Plain text, no markdown. Approx 3-5 sentences:
- Reference the role by name
- One sentence of genuine motivation
- Mention you would start at T1
- Friendly close

## Important rules
- Always English for output files
- No m-dashes anywhere (in files or in conversation)
- No markdown in output files
- Keep cover letter under 350 words
- Save both files before summarizing what was written
