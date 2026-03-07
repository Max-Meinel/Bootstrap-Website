// Imports
#import "@preview/brilliant-cv:3.1.2": cv-section, cv-entry
#let metadata = toml("../metadata.toml")
#let cv-section = cv-section.with(metadata: metadata)
#let cv-entry = cv-entry.with(metadata: metadata)


#cv-section("Projects")

#cv-entry(
  title: [NEXtickets],
  society: [Own Project],
  date: [2024 - present],
  location: [],
  description: list(
    [Ticket system for small clubs and event organizers],
    [Development with Next.js, TypeScript and PostgreSQL],
  ),
  tags: ("Next.js", "TypeScript", "PostgreSQL"),
)

#cv-entry(
  title: [Sudoku Generator],
  society: [School Project],
  date: [2022],
  location: [],
  description: list(
    [Java program for generating valid Sudoku puzzles],
    [User interface with Java Swing],
  ),
  tags: ("Java", "Swing"),
)

#cv-entry(
  title: [Discord Bot],
  society: [Own Project],
  date: [2021],
  location: [],
  description: list(
    [Discord bot with level system and API integrations],
  ),
  tags: ("Python", "discord.py"),
)
