# Job Search

Search a given careers page for software development roles that would be a good fit for Max, then generate a feature-rich HTML overview of the results.

## Input

The user provides one or more URLs of careers pages to search.

## Max's Profile

Max is a software developer graduating September 2026 with a B.Sc. in Business Informatics (Software Engineering). He is looking for a full-time entry-level software development position. His strengths:

- TypeScript/JavaScript, Python, Java, HTML/CSS
- Next.js, React, TailwindCSS, PostgreSQL, Git, Docker, CI/CD
- AI: agentic coding, MCP, LLM workflows, prompt engineering, LLM-as-a-Judge
- Built a VS Code extension (Language Server Protocol), a full-stack ticketing platform, an AI chat moderation model
- Comfortable with cloud environments and developer tooling

## What Max is looking for

- Software development role (not consulting, not project management, not pure ops)
- Modern tech stack -- think TypeScript, Python, Go, Rust, React, cloud-native, AI
- AI involvement is a strong plus
- Entry level or junior to mid level
- Location: Germany-wide, Austria, Switzerland, Netherlands, remote -- cast wide
- Full-time

## What Max is NOT looking for

- Roles focused exclusively on legacy SAP technologies (ABAP, SAP GUI, classic Basis)
- Pure infrastructure/network/hardware roles
- Non-technical roles (sales, HR, finance, marketing)
- Roles requiring 5+ years experience with no junior path

## How to search

1. Fetch the careers page URL provided by the user
2. Use only filters available on the website itself (location, job category, etc.) -- do NOT filter by keyword
3. Read ALL job listings visible on the page, including multiple pages if pagination exists
4. For each listing, fetch the full job description page
5. Extract: title, URL, location, tech stack and programming languages mentioned, a short German summary (2-3 sentences) of what the role actually involves and why it could be a fit for Max
6. Apply your own judgment about fit -- be generous but honest. If unsure, include it and mark as "maybe"

## Output

Generate a single self-contained HTML file saved to `cv/job-search/results.html`.

### List view (main page)

- Clean white background, modern readable design
- Search bar at the top that filters cards live as you type
- Filter buttons for: location, company, AI involvement (yes/maybe/no), fit (strong/maybe)
- Each role shown as a card with:
  - Job title
  - Company and location
  - AI-written German summary (2-3 sentences)
  - Tech stack tags (extracted from the posting)
  - "Strong fit" or "Maybe" badge
  - A "Save" button that bookmarks the role (persisted in localStorage)
  - Clicking the card opens the detail view

### Detail view (inline expand or modal)

When a card is clicked, show:
- Full German AI summary
- Extracted tech stack and programming languages as tags
- Original job description text (fetched and embedded)
- Link button to the original job posting (opens in new tab)
- Save/unsave toggle

### Saved view

- A "Saved roles" tab or section showing only bookmarked roles
- Persisted in localStorage so it survives page reload

### Stats bar at the top

- Total roles found on the page
- How many were included
- How many saved

## Important rules

- No keyword filtering on the websites -- use only the site's own filters
- Be thorough: read every page of results, not just the first
- Be honest about fit: do not include roles that clearly do not match
- All AI summaries in German
- Original job description text always in the original language
- No m-dashes anywhere
- The HTML file must be fully self-contained (no external dependencies except CDN fonts if needed)
- Save the file before summarizing
