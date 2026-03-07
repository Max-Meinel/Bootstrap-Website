// Imports
#import "@preview/brilliant-cv:3.1.2": cv-section, cv-skill, cv-skill-with-level, cv-skill-tag, h-bar
#let metadata = toml("../metadata.toml")
#let cv-section = cv-section.with(metadata: metadata)


#cv-section("Fähigkeiten")

#cv-skill(
  type: [Sprachen],
  info: [Deutsch (Muttersprache) #h-bar() Englisch (sehr gut) #h-bar() Spanisch (Grundkenntnisse)],
)

#cv-skill(
  type: [Programmierung],
  info: [Java #h-bar() Python #h-bar() TypeScript/JavaScript #h-bar() HTML/CSS #h-bar() C\# (Unity)],
)

#cv-skill(
  type: [Technologien],
  info: [Next.js #h-bar() React #h-bar() PostgreSQL #h-bar() Git #h-bar() Tailwind CSS],
)

#cv-skill(
  type: [IT-Kenntnisse],
  info: [Microsoft 365 #h-bar() Photoshop/GIMP #h-bar() DaVinci Resolve #h-bar() Windows/Linux/macOS],
)

#cv-skill(
  type: [Interessen],
  info: [Tischtennis (Verbandsliga) #h-bar() Klavier],
)
