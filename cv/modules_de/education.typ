// Imports
#import "@preview/brilliant-cv:3.1.2": cv-section, cv-entry, h-bar
#let metadata = toml("../metadata.toml")
#let cv-section = cv-section.with(metadata: metadata)
#let cv-entry = cv-entry.with(metadata: metadata)


#cv-section("Ausbildung")

#cv-entry(
  title: [Duales Studium Wirtschaftsinformatik (Software Engineering)],
  society: [DHBW Mannheim & SAP SE],
  date: [2023 - heute],
  location: [Mannheim],
  description: list(
    [Bachelor of Science in Wirtschaftsinformatik mit Schwerpunkt Software Engineering],
    [Praxisphasen bei SAP SE in verschiedenen Abteilungen],
  ),
)

#cv-entry(
  title: [Allgemeine Hochschulreife (Abitur)],
  society: [Landrat-Gruber-Schule],
  date: [2020 - 2023],
  location: [Dieburg],
  description: list(
    [Gymnasium mit Schwerpunkt auf Naturwissenschaften und Informatik],
  ),
)

#cv-entry(
  title: [Weiterführende Schule],
  society: [Schule auf der Aue],
  date: [2014 - 2020],
  location: [Münster (Hessen)],
  description: none,
)
