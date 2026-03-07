// Imports
#import "@preview/brilliant-cv:3.1.2": cv-section, cv-entry, h-bar
#let metadata = toml("../metadata.toml")
#let cv-section = cv-section.with(metadata: metadata)
#let cv-entry = cv-entry.with(metadata: metadata)


#cv-section("Practical Experience")

#cv-entry(
  title: [Practical Phase 1 - ABAP Development],
  society: [SAP SE],
  date: [Oct 2023 - Dec 2023],
  location: [Walldorf],
  description: list(
    [First practical phase in ABAP development],
  ),
  tags: ("ABAP", "SAP"),
)

#cv-entry(
  title: [Practical Phase 2],
  society: [SAP SE],
  date: [Apr 2024 - Jun 2024],
  location: [Walldorf],
  description: list(
    [Description of second practical phase],
  ),
)

#cv-entry(
  title: [Practical Phase 3],
  society: [SAP SE],
  date: [Oct 2024 - Dec 2024],
  location: [Walldorf],
  description: list(
    [Description of third practical phase],
  ),
)
