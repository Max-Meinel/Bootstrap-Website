// Imports
#import "@preview/brilliant-cv:3.1.2": cv-section, cv-skill, cv-skill-with-level, cv-skill-tag, h-bar
#let metadata = toml("../metadata.toml")
#let cv-section = cv-section.with(metadata: metadata)


#cv-section("Skills")

#cv-skill(
  type: [Languages],
  info: [German (Native) #h-bar() English (Fluent) #h-bar() Spanish (Basic)],
)

#cv-skill(
  type: [Programming],
  info: [Java #h-bar() Python #h-bar() TypeScript/JavaScript #h-bar() HTML/CSS #h-bar() C\# (Unity)],
)

#cv-skill(
  type: [Technologies],
  info: [Next.js #h-bar() React #h-bar() PostgreSQL #h-bar() Git #h-bar() Tailwind CSS],
)

#cv-skill(
  type: [IT Skills],
  info: [Microsoft 365 #h-bar() Photoshop/GIMP #h-bar() DaVinci Resolve #h-bar() Windows/Linux/macOS],
)

#cv-skill(
  type: [Interests],
  info: [Table Tennis (Regional League) #h-bar() Piano],
)
