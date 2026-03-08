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
Dual Student in Business Informatics (Software Engineering) at SAP & DHBW Mannheim, graduating in September 2026. Seeking a full-time software development position. Passionate about developing solutions with cutting-edge technologies and creating intuitive user experiences.

== Experience
#r2c2-entry-list(
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - Practical Phase 5],
      top-right: [Feb 2026 - Present],
      bottom-left: [CAP Tools & MTX],
      bottom-right: [Walldorf, Germany],
    ),
    list-items: (
      [Developing VS Code extension for domain-based navigation in SAP CAP projects],
      [Implementing aggregated service overview to reduce navigation complexity],
      [Technologies: TypeScript, VS Code Extension API, Language Server Protocol],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://nex-tickets.de")[NEXtickets]],
      top-right: [Oct 2025 - Present],
      bottom-left: [Co-Founder & Developer],
      bottom-right: [Münster (Hessen), Germany],
    ),
    list-items: (
      [Developing a ticket system for small clubs and event organizers],
      [Building with Next.js, TypeScript and PostgreSQL],
      [Enabling event creation, ticket sales and attendee management],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - Practical Phase 4],
      top-right: [Aug 2025 - Nov 2025],
      bottom-left: [Construction & Real Estate Industry GTM],
      bottom-right: [Singapore],
    ),
    list-items: (
      [Developed SAP Analytics Cloud planning dashboard for project cost forecasting],
      [Worked with SAP Business Data Cloud and data products],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - Practical Phase 3],
      top-right: [Feb 2025 - May 2025],
      bottom-left: [Platform CoE],
      bottom-right: [Walldorf, Germany],
    ),
    list-items: (
      [Developed optimized data model for SAP Analytics Cloud Just Ask to analyze League of Legends Esports data],
      [Enabled coaches of Team Liquid to access complex game statistics via natural language queries],
      [Applied CRISP-DM methodology for data transformation and model optimization],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - Practical Phase 2],
      top-right: [Jul 2024 - Nov 2024],
      bottom-left: [SAP Datasphere Data Marketplace],
      bottom-right: [Walldorf, Germany],
    ),
    list-items: (
      [Extended existing API for data product installation to support CLI functionality],
      [Enabled seamless data product installation via command line interface],
    )
  ),
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE] - Practical Phase 1],
      top-right: [Jan 2024 - May 2024],
      bottom-left: [Product Lifecycle Management],
      bottom-right: [Walldorf, Germany],
    ),
    list-items: (
      [Developed recursive diffing algorithm for payloads exchanged between SAP and Siemens],
      [Enabled version comparison similar to GitHub diff functionality],
      [Technologies: ABAP],
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
      [Dual study program combining theory and practice],
    ),
  ),
  (
    entry-header-args: (
      top-left: [Landrat-Gruber-Schule],
      top-right: [2020 - 2023],
      bottom-left: [Abitur (High School Diploma), Grade: 1.7],
      bottom-right: [Dieburg, Germany],
    ),
    list-items: (),
  ),
)

== Skills
#multi-line-list(
  single-line-entry("Programming:", [Java, Python, TypeScript/JavaScript, HTML/CSS, ABAP], []),
  single-line-entry("Technologies:", [Next.js, React, PostgreSQL, Git, Tailwind CSS], []),
  single-line-entry("SAP:", [SAP Analytics Cloud, SAP Datasphere, SAP CAP], []),
  single-line-entry("IT Skills:", [Microsoft 365, Photoshop/GIMP, DaVinci Resolve, Windows/Linux/macOS], []),
)

== Additional Information
#multi-line-text(
  single-line-entry([Languages:], [German (Native), English (Fluent), Spanish (Basic)], []),
  single-line-entry([Interests:], [Table Tennis (Regional League)], [])
)
