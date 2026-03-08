const translations = {
  de: {
    // Navigation
    'nav.home': 'Start',
    'nav.education': 'Ausbildung',
    'nav.praxis': 'Praxisphasen',
    'nav.projects': 'Meine Projekte',

    // Home Section
    'home.welcome': 'Willkommen',
    'home.intro': 'Ich bin derzeit dualer Student an der DHBW Mannheim in Kooperation mit SAP. Ich bin sehr daran interessiert, Lösungen mit den neuesten Technologien zu entwickeln.',
    'home.contact': 'Kontakt',

    // Education
    'edu.primary': 'Grundschule',
    'edu.secondary': 'Weiterführende Schule',
    'edu.highschool': 'Gymnasium',
    'edu.dual': 'Duales Studium',
    'edu.dualDesc': 'Wirtschaftsinformatik (Software Engineering)',
    'edu.today': '2023 – heute',

    // Practical Phases
    'praxis.title': 'Praxisphasen',
    'praxis.phase1.date': 'Jan 2024 – Mai 2024',
    'praxis.phase1.title': 'Product Lifecycle Management',
    'praxis.phase1.desc': 'In meiner ersten Praxisphase habe ich einen rekursiven Diffing-Algorithmus für Payloads entwickelt, die zwischen SAP und Siemens ausgetauscht werden.',
    'praxis.phase1.details': 'Der Algorithmus ermöglicht einen Versionsvergleich ähnlich der GitHub Diff-Funktionalität. Damit können Änderungen zwischen verschiedenen Versionen von Datenpaketen schnell und übersichtlich identifiziert werden.',
    'praxis.phase2.date': 'Jul 2024 – Nov 2024',
    'praxis.phase2.title': 'SAP Datasphere Data Marketplace',
    'praxis.phase2.desc': 'In meiner zweiten Praxisphase habe ich eine bestehende API für die Installation von Datenprodukten erweitert, um CLI-Funktionalität zu unterstützen.',
    'praxis.phase2.details': 'Durch diese Erweiterung können Datenprodukte nun nahtlos über die Kommandozeile installiert werden. Dies verbessert die Developer Experience und ermöglicht die Automatisierung von Installationsprozessen in CI/CD-Pipelines.',
    'praxis.phase3.date': 'Feb 2025 – Mai 2025',
    'praxis.phase3.title': 'Platform CoE – SAP Analytics Cloud',
    'praxis.phase3.desc': 'In meiner dritten Praxisphase habe ich ein optimiertes Datenmodell für SAP Analytics Cloud Just Ask entwickelt, um League of Legends Esports-Daten zu analysieren.',
    'praxis.phase3.details': 'Das Projekt ermöglichte es den Coaches von Team Liquid, komplexe Spielstatistiken über natürlichsprachliche Abfragen abzurufen. Ich wendete die CRISP-DM Methodik für Datentransformation und Modelloptimierung an.',
    'praxis.phase4.date': 'Aug 2025 – Nov 2025 · Singapur',
    'praxis.phase4.title': 'Construction & Real Estate Industry GTM',
    'praxis.phase4.desc': 'Meine vierte Praxisphase absolvierte ich in Singapur, wo ich ein SAP Analytics Cloud Planning Dashboard für Projektkostenprognosen entwickelte.',
    'praxis.phase4.details': 'Ich arbeitete mit SAP Business Data Cloud und Datenprodukten, um Echtzeit-Einblicke in Bauprojektkosten zu ermöglichen. Die internationale Erfahrung erweiterte meinen Horizont für globale Geschäftsprozesse.',
    'praxis.phase5.date': 'Feb 2026 – heute',
    'praxis.phase5.title': 'CAP Tools & MTX',
    'praxis.phase5.desc': 'In meiner aktuellen Praxisphase entwickle ich eine VS Code Extension für domänenbasierte Navigation in SAP CAP Projekten.',
    'praxis.phase5.details': 'Die Extension implementiert eine aggregierte Service-Übersicht, um die Navigationskomplexität in großen CAP-Projekten zu reduzieren. Entwickler können damit schneller zwischen zusammengehörigen Artefakten wie Services, Entities und Handlers navigieren.',

    // Qualifications
    'qual.title': 'Qualifikationen',
    'qual.languages': 'Sprachen',
    'qual.german': 'Deutsch (Muttersprache)',
    'qual.english': 'Englisch (fließend)',
    'qual.spanish': 'Spanisch (Grundkenntnisse)',
    'qual.programming': 'Programmierung',
    'qual.technologies': 'Technologien',
    'qual.sap': 'SAP',
    'qual.computer': 'IT-Kenntnisse',
    'qual.hobbies': 'Hobbys',
    'qual.tabletennis': 'Tischtennis (Verbandsliga)',

    // Projects
    'proj.nextickets.desc': 'Ein Ticketsystem für kleine Vereine und Veranstalter, das den Ticketverkauf und die Verwaltung von Events vereinfacht.',
    'proj.nextickets.details': 'Die Plattform ermöglicht es Veranstaltern, Events zu erstellen, Tickets zu verkaufen und Teilnehmer zu verwalten. Entwickelt mit modernen Webtechnologien für eine optimale Benutzererfahrung.',
    'proj.sudoku.title': 'Sudoku Generator',
    'proj.sudoku.desc': 'Ich habe ein Java-Programm entwickelt, das eine Zahlenkombination als Grundlage für eine gültige Lösung innerhalb eines Sudoku-Gitters erstellt!',
    'proj.sudoku.details': 'Zunächst platziert das Programm die Zahlen 1-9 in jedem 3x3-Quadrat. Falls es Duplikate einer Zahl innerhalb einer Zeile oder Spalte gibt, werden Zahlen innerhalb des 3x3-Quadrats getauscht. Dieser Vorgang wird wiederholt, bis keine Duplikate mehr existieren. Die Benutzeroberfläche wurde mit Java Swing entwickelt.',
    'proj.discord.desc': 'Ich habe einen Discord-Bot programmiert, der dir antwortet, wenn du ihm einen bestimmten Befehl schreibst!',
    'proj.discord.details': 'Das Programm verwendet die discord.py API, die für Discord-Bots wie diesen entwickelt wurde. Der Bot kann dir coole Informationen von anderen APIs liefern. Ich habe ein Level-System programmiert, bei dem du dein eigenes Level sehen kannst, das sich erhöht, je länger du online bist.',
    'proj.snake.title': 'Snake Spiel',
    'proj.snake.desc': 'Ich habe das alte Snake-Spiel in Java programmiert (du bist eine Schlange in einem Raster und versuchst, einen sehr langen Schwanz zu bekommen, und wenn du einen Apfel isst, wird dein Schwanz länger)!',
    'proj.snake.details': 'Das Programm erstellt eine ArrayList für den Schwanz der Schlange. Wenn die Schlange den Apfel isst, wird der ArrayList ein weiteres Element hinzugefügt und die Punktzahl erhöht sich. Wenn die Schlange mit sich selbst oder dem Rand kollidiert, ist das Spiel vorbei. Die Benutzeroberfläche wurde mit Java Swing erstellt.',

    // Common
    'common.readMore': 'Mehr erfahren <i class="fa-solid fa-arrow-right ml-1"></i>',
    'common.viewGithub': 'Auf GitHub ansehen',
    'common.visitWebsite': 'Website besuchen'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.education': 'Education',
    'nav.praxis': 'Practical Phases',
    'nav.projects': 'My Projects',

    // Home Section
    'home.welcome': 'Welcome',
    'home.intro': 'I am currently a dual student at DHBW Mannheim in cooperation with SAP. I am very interested in developing solutions using latest technologies.',
    'home.contact': 'Contact',

    // Education
    'edu.primary': 'Primary School',
    'edu.secondary': 'Secondary School',
    'edu.highschool': 'High School',
    'edu.dual': 'Dual Studies',
    'edu.dualDesc': 'Business Informatics (Software Engineering)',
    'edu.today': '2023 – today',

    // Practical Phases
    'praxis.title': 'Practical Phases',
    'praxis.phase1.date': 'Jan 2024 – May 2024',
    'praxis.phase1.title': 'Product Lifecycle Management',
    'praxis.phase1.desc': 'In my first practical phase, I developed a recursive diffing algorithm for payloads exchanged between SAP and Siemens.',
    'praxis.phase1.details': 'The algorithm enables version comparison similar to GitHub diff functionality. This allows changes between different versions of data packages to be identified quickly and clearly.',
    'praxis.phase2.date': 'Jul 2024 – Nov 2024',
    'praxis.phase2.title': 'SAP Datasphere Data Marketplace',
    'praxis.phase2.desc': 'In my second practical phase, I extended an existing API for data product installation to support CLI functionality.',
    'praxis.phase2.details': 'Through this extension, data products can now be seamlessly installed via the command line. This improves the developer experience and enables automation of installation processes in CI/CD pipelines.',
    'praxis.phase3.date': 'Feb 2025 – May 2025',
    'praxis.phase3.title': 'Platform CoE – SAP Analytics Cloud',
    'praxis.phase3.desc': 'In my third practical phase, I developed an optimized data model for SAP Analytics Cloud Just Ask to analyze League of Legends Esports data.',
    'praxis.phase3.details': 'The project enabled Team Liquid coaches to access complex game statistics via natural language queries. I applied the CRISP-DM methodology for data transformation and model optimization.',
    'praxis.phase4.date': 'Aug 2025 – Nov 2025 · Singapore',
    'praxis.phase4.title': 'Construction & Real Estate Industry GTM',
    'praxis.phase4.desc': 'I completed my fourth practical phase in Singapore, where I developed an SAP Analytics Cloud Planning Dashboard for project cost forecasting.',
    'praxis.phase4.details': 'I worked with SAP Business Data Cloud and data products to enable real-time insights into construction project costs. The international experience broadened my horizon for global business processes.',
    'praxis.phase5.date': 'Feb 2026 – present',
    'praxis.phase5.title': 'CAP Tools & MTX',
    'praxis.phase5.desc': 'In my current practical phase, I am developing a VS Code extension for domain-based navigation in SAP CAP projects.',
    'praxis.phase5.details': 'The extension implements an aggregated service overview to reduce navigation complexity in large CAP projects. Developers can navigate faster between related artifacts such as services, entities, and handlers.',

    // Qualifications
    'qual.title': 'Qualifications',
    'qual.languages': 'Languages',
    'qual.german': 'German (native)',
    'qual.english': 'English (fluent)',
    'qual.spanish': 'Spanish (basic)',
    'qual.programming': 'Programming',
    'qual.technologies': 'Technologies',
    'qual.sap': 'SAP',
    'qual.computer': 'IT Skills',
    'qual.hobbies': 'Hobbies',
    'qual.tabletennis': 'Table Tennis (Regional League)',

    // Projects
    'proj.nextickets.desc': 'A ticket system for small clubs and event organizers that simplifies ticket sales and event management.',
    'proj.nextickets.details': 'The platform enables organizers to create events, sell tickets, and manage attendees. Developed with modern web technologies for an optimal user experience.',
    'proj.sudoku.title': 'Sudoku Generator',
    'proj.sudoku.desc': 'I developed a Java program that creates a number combination as the basis for a valid solution within a Sudoku grid!',
    'proj.sudoku.details': 'First, the program places the numbers 1-9 in each 3x3 square. If there are duplicates of a number within a row or column, numbers are swapped within the 3x3 square. This process is repeated until no duplicates exist. The user interface was developed with Java Swing.',
    'proj.discord.desc': 'I programmed a Discord bot that responds when you write a specific command to it!',
    'proj.discord.details': 'The program uses the discord.py API, which was developed for Discord bots like this one. The bot can provide you with cool information from other APIs. I programmed a level system where you can see your own level, which increases the longer you are online.',
    'proj.snake.title': 'Snake Game',
    'proj.snake.desc': 'I programmed the classic Snake game in Java (you are a snake in a grid trying to get a very long tail, and when you eat an apple, your tail gets longer)!',
    'proj.snake.details': 'The program creates an ArrayList for the snake\'s tail. When the snake eats the apple, another element is added to the ArrayList and the score increases. When the snake collides with itself or the border, the game is over. The user interface was created with Java Swing.',

    // Common
    'common.readMore': 'Read more <i class="fa-solid fa-arrow-right ml-1"></i>',
    'common.viewGithub': 'View on GitHub',
    'common.visitWebsite': 'Visit website'
  }
};

const languages = [
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', name: 'English' }
];

let currentLang = localStorage.getItem('lang') || 'de';

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  applyTranslations();
  updateLanguageButtons();
  closeAllDropdowns();
}

function updateLanguageButtons() {
  const langData = languages.find(l => l.code === currentLang);

  ['', '-mobile'].forEach(suffix => {
    const flagEl = document.getElementById(`lang-flag${suffix}`);
    const textEl = document.getElementById(`lang-text${suffix}`);
    if (flagEl) flagEl.textContent = langData.flag;
    if (textEl) textEl.textContent = langData.code.toUpperCase();
  });
}

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const isHidden = dropdown.classList.contains('hidden');

  closeAllDropdowns();

  if (isHidden) {
    dropdown.classList.remove('hidden');
    setTimeout(() => dropdown.classList.add('opacity-100', 'translate-y-0'), 10);
  }
}

function closeAllDropdowns() {
  document.querySelectorAll('.lang-dropdown').forEach(dropdown => {
    dropdown.classList.remove('opacity-100', 'translate-y-0');
    dropdown.classList.add('hidden');
  });
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-selector')) {
    closeAllDropdowns();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
