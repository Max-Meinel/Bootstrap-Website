// Imports
#import "@preview/brilliant-cv:3.1.2": cv-section, cv-entry, h-bar
#let metadata = toml("../metadata.toml")
#let cv-section = cv-section.with(metadata: metadata)
#let cv-entry = cv-entry.with(metadata: metadata)


#cv-section("Education")

#cv-entry(
  title: [Dual Study Program in Business Informatics (Software Engineering)],
  society: [DHBW Mannheim & SAP SE],
  date: [2023 - present],
  location: [Mannheim],
  description: list(
    [Bachelor of Science in Business Informatics with focus on Software Engineering],
    [Practical phases at SAP SE in various departments],
  ),
)

#cv-entry(
  title: [General Higher Education Entrance Qualification (Abitur)],
  society: [Landrat-Gruber-Schule],
  date: [2020 - 2023],
  location: [Dieburg],
  description: list(
    [High school with focus on natural sciences and computer science],
  ),
)

#cv-entry(
  title: [Secondary School],
  society: [Schule auf der Aue],
  date: [2014 - 2020],
  location: [Münster (Hessen)],
  description: none,
)
