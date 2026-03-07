// Imports
#import "@preview/brilliant-cv:3.1.2": cv-section, cv-entry, h-bar
#let metadata = toml("../metadata.toml")
#let cv-section = cv-section.with(metadata: metadata)
#let cv-entry = cv-entry.with(metadata: metadata)


#cv-section("Praxiserfahrung")

#cv-entry(
  title: [Praxisphase 1 - ABAP Development],
  society: [SAP SE],
  date: [Okt 2023 - Dez 2023],
  location: [Walldorf],
  description: list(
    [Erste Praxisphase im Bereich ABAP-Entwicklung],
  ),
  tags: ("ABAP", "SAP"),
)

#cv-entry(
  title: [Praxisphase 2],
  society: [SAP SE],
  date: [Apr 2024 - Jun 2024],
  location: [Walldorf],
  description: list(
    [Beschreibung der zweiten Praxisphase],
  ),
)

#cv-entry(
  title: [Praxisphase 3],
  society: [SAP SE],
  date: [Okt 2024 - Dez 2024],
  location: [Walldorf],
  description: list(
    [Beschreibung der dritten Praxisphase],
  ),
)
