// Imports
#import "@preview/brilliant-cv:3.1.2": cv-section, cv-entry
#let metadata = toml("../metadata.toml")
#let cv-section = cv-section.with(metadata: metadata)
#let cv-entry = cv-entry.with(metadata: metadata)


#cv-section("Projekte")

#cv-entry(
  title: [NEXtickets],
  society: [Eigenes Projekt],
  date: [2024 - heute],
  location: [],
  description: list(
    [Ticketsystem für kleine Vereine und Veranstalter],
    [Entwicklung mit Next.js, TypeScript und PostgreSQL],
  ),
  tags: ("Next.js", "TypeScript", "PostgreSQL"),
)

#cv-entry(
  title: [Sudoku Generator],
  society: [Schulprojekt],
  date: [2022],
  location: [],
  description: list(
    [Java-Programm zur Generierung gültiger Sudoku-Rätsel],
    [Benutzeroberfläche mit Java Swing],
  ),
  tags: ("Java", "Swing"),
)

#cv-entry(
  title: [Discord Bot],
  society: [Eigenes Projekt],
  date: [2021],
  location: [],
  description: list(
    [Discord-Bot mit Level-System und API-Integrationen],
  ),
  tags: ("Python", "discord.py"),
)
