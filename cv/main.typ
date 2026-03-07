#import "@preview/pro-academic-cv:0.1.0": *

#show: resume.with(
  author-info: (
    name: "Max Meinel",
    primary-info: [
      #link("mailto:max.meinel@sap.com")[max.meinel\@sap.com] | #link("https://max-meinel.de")[max-meinel.de]
    ],
    secondary-info: [
      #link("https://www.linkedin.com/in/max-meinel")[linkedin] | #link("https://github.com/max-meinel")[github]
    ],
    tertiary-info: "Mannheim, Germany",
  ),
  author-position: center
)

== Objective
Dual Student in Business Informatics (Software Engineering) at SAP & DHBW Mannheim. Passionate about developing solutions with cutting-edge technologies and creating intuitive user experiences.

== Experience
#r2c2-entry-list(
  (
    entry-header-args:(
      top-left: [#link("https://www.sap.com")[SAP SE]],
      top-right: [Oct 2023 - Present],
      bottom-left: [Dual Student - Software Engineering],
      bottom-right: [Walldorf, Germany],
    ),
    list-items: (
      [Practical phases alternating with theoretical studies at DHBW Mannheim],
      [Working on various software development projects within SAP],
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
      bottom-left: [Abitur (High School Diploma)],
      bottom-right: [Dieburg, Germany],
    ),
    list-items: (),
  ),
)

== Projects
#r2c2-entry-list(
  (
    entry-header-args: (
      top-left: [NEXtickets: Ticket System for Events],
      top-right: [2024 - Present],
      bottom-left: [Tools: Next.js, TypeScript, PostgreSQL, Tailwind CSS],
      bottom-right: [#link("https://nex-tickets.de")[nex-tickets.de]],
    ),
    list-items: (
      [Developed a ticket system for small clubs and event organizers],
      [Built with Next.js, TypeScript and PostgreSQL],
      [Enables event creation, ticket sales and attendee management],
    ),
  ),
  (
    entry-header-args: (
      top-left: [Sudoku Generator],
      top-right: [2022],
      bottom-left: [Tools: Java, Swing],
      bottom-right: [#link("https://github.com/Max-Meinel/Soduko")[\@Max-Meinel/Soduko]],
    ),
    list-items: (
      [Java program generating valid Sudoku puzzles],
      [Implemented algorithm using swap-based duplicate elimination],
      [User interface built with Java Swing],
    )
  ),
  (
    entry-header-args: (
      top-left: [Discord Bot with Level System],
      top-right: [2021],
      bottom-left: [Tools: Python, discord.py],
      bottom-right: [#link("https://github.com/Max-Meinel/lvlBot")[\@Max-Meinel/lvlBot]],
    ),
    list-items: (
      [Discord bot with custom commands and API integrations],
      [Level system tracking user activity and online time],
    )
  )
)

== Skills
#multi-line-list(
  single-line-entry("Programming:", [Java, Python, TypeScript/JavaScript, HTML/CSS, C\# (Unity)], []),
  single-line-entry("Technologies:", [Next.js, React, PostgreSQL, Git, Tailwind CSS], []),
  single-line-entry("IT Skills:", [Microsoft 365, Photoshop/GIMP, DaVinci Resolve, Windows/Linux/macOS], []),
)

== Additional Information
#multi-line-text(
  single-line-entry([Languages:], [German (Native), English (Fluent), Spanish (Basic)], []),
  single-line-entry([Interests:], [Table Tennis (Regional League), Piano], [])
)
