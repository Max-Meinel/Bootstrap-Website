#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Max Meinel",
    primary-info: [
      #link("mailto:max.meinel@sap.com")[max.meinel\@sap.com] | #link("https://max-meinel.github.io/Portfolio")[max-meinel.github.io/Portfolio]
    ],
    secondary-info: [
      #link("https://www.linkedin.com/in/max-meinel")[linkedin] | #link("https://github.com/max-meinel")[github]
    ],
    tertiary-info: "Mannheim, Germany",
  ),
  author-position: center
)

== Objective
Dual Studies student in Business Informatics (Software Engineering) graduating September 2026, seeking a full-time software development position. Five SAP rotations across full-stack, cloud, and analytics.


== Experience
#r2c2-entry-list(
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - 5th Rotation],
      top-right: [Feb 2026 - Jun 2026],
      bottom-left: [CAP Tools & MTX],
      bottom-right: [Walldorf, Germany],
    ),
    list-items: (
      [Built VS Code extension for domain-based navigation in SAP CAP projects],
      [Technologies: TypeScript, VS Code Extension API, Language Server Protocol],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://nex-tickets.de")[NEXtickets]],
      top-right: [Oct 2025 - Present],
      bottom-left: [Co-Founder & Developer],
      bottom-right: [],
    ),
    list-items: (
      [Developing a ticket system for small clubs and event organizers with Next.js, TypeScript and PostgreSQL],
      [Enabling event creation, ticket sales and ticket validation],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - 4th Rotation],
      top-right: [Aug 2025 - Nov 2025],
      bottom-left: [Construction & Real Estate Industry GTM],
      bottom-right: [Singapore],
    ),
    list-items: (
      [Built a SAP Analytics Cloud planning dashboard for project cost forecasting],
      [Worked with SAP Business Data Cloud and data products],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - 3rd Rotation],
      top-right: [Feb 2025 - May 2025],
      bottom-left: [Platform CoE],
      bottom-right: [Walldorf, Germany],
    ),
    list-items: (
      [Developed optimized data model for SAP Analytics Cloud Just Ask to analyze League of Legends Esports data],
      [Enabled coaches of Team Liquid to access game statistics via natural language queries],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - 2nd Rotation],
      top-right: [Jul 2024 - Nov 2024],
      bottom-left: [SAP Datasphere Data Marketplace],
      bottom-right: [Walldorf, Germany],
    ),
    list-items: (
      [Extended existing API for data product installation to support CLI functionality],
      [Enabled data product installation via command line interface],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - 1st Rotation],
      top-right: [Jan 2024 - May 2024],
      bottom-left: [Product Lifecycle Management],
      bottom-right: [Walldorf, Germany],
    ),
    list-items: (
      [Developed recursive diffing algorithm for payloads exchanged between SAP and Siemens],
      [Enabled version comparison similar to GitHub diff functionality (ABAP)]
    )
  ),
)

== Education
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [DHBW Mannheim & SAP SE],
      top-right: [Oct 2023 - Present],
      bottom-left: [B.Sc. Business Informatics (Software Engineering)],
      bottom-right: [Mannheim, Germany],
    ),
    list-items: (
    ),
  ),
  (
    entry-header-args: (
      top-left: [Landrat-Gruber-Schule],
      top-right: [2020 - 2023],
      bottom-left: [Abitur (High School Diploma), Grade: 1.7],
      bottom-right: [Dieburg, Germany],
    ),
    list-items: (
      [Performance Courses: Informatics, Mathematics],
    ),
  ),
)

== Skills
#multi-line-list(
  single-line-entry("Programming:", [TypeScript/JavaScript, Java, Python, HTML/CSS, ABAP], []),
  single-line-entry("Technologies:", [Next.js, React, PostgreSQL, Git, Docker, CI/CD], []),
  single-line-entry("AI:", [Agentic Coding, MCP, Claude Code, Prompt Engineering, Ollama, LLM-as-a-Judge], []),
  single-line-entry("SAP:", [SAP Analytics Cloud, SAP Datasphere, SAP CAP], []),
)

== Projects
#r2c2-entry-list(
  (
    entry-header-args:(
      top-left: [AI Chat Moderation Model – University Project],
      top-right: [2026],
      bottom-left: [],
      bottom-right: [],
    ),
    list-items: (
      [Trained a multi-task classifier (XLM-RoBERTa) for Twitch chat moderation predicting severity and category],
      [Cascade architecture: ML model as pre-filter, LLM-as-a-Judge with custom instructions for final verdict],
    )
  ),
)

== Additional Information
#multi-line-text(
  single-line-entry([Languages:], [German (Native), English (Fluent), Spanish (Basic)], []),
  single-line-entry([Interests:], [Table Tennis (Regional League)], [])
)
