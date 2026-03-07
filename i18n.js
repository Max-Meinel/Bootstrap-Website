const translations = {
  de: {
    'nav.home': 'Start',
    'nav.education': 'Ausbildung',
    'nav.praxis': 'Praxisphasen',
    'nav.projects': 'Meine Projekte',
    'home.welcome': 'Willkommen',
    'home.intro': 'Ich bin derzeit dualer Student an der DHBW Mannheim in Kooperation mit SAP. Ich bin sehr daran interessiert, Lösungen mit den neuesten Technologien zu entwickeln.',
    'home.contact': 'Kontakt',
    'edu.primary': 'Grundschule',
    'edu.secondary': 'Weiterführende Schule',
    'edu.highschool': 'Gymnasium',
    'edu.dual': 'Duales Studium',
    'edu.dualDesc': 'Wirtschaftsinformatik (Software Engineering)',
    'edu.today': '2023 – heute',
    'qual.title': 'Qualifikationen',
    'qual.languages': 'Sprachen',
    'qual.german': 'Deutsch (Muttersprache)',
    'qual.english': 'Englisch (sehr gut)',
    'qual.spanish': 'Spanisch (Grundkenntnisse)',
    'qual.programming': 'Programmierung',
    'qual.computer': 'IT-Kenntnisse',
    'qual.hobbies': 'Hobbys',
    'qual.tabletennis': 'Tischtennis (Verbandsliga)',
    'qual.piano': 'Klavier',
    'proj.sudoku.title': 'Sudoku Generator',
    'proj.sudoku.desc': 'Ich habe ein Java-Programm entwickelt, das eine Zahlenkombination als Grundlage für eine gültige Lösung innerhalb eines Sudoku-Gitters erstellt!',
    'proj.sudoku.details': 'Zunächst platziert das Programm die Zahlen 1-9 in jedem 3x3-Quadrat. Falls es Duplikate einer Zahl innerhalb einer Zeile oder Spalte gibt, werden Zahlen innerhalb des 3x3-Quadrats getauscht. Dieser Vorgang wird wiederholt, bis keine Duplikate mehr existieren. Die Benutzeroberfläche wurde mit Java Swing entwickelt.',
    'proj.discord.desc': 'Ich habe einen Discord-Bot programmiert, der dir antwortet, wenn du ihm einen bestimmten Befehl schreibst!',
    'proj.discord.details': 'Das Programm verwendet die discord.py API, die für Discord-Bots wie diesen entwickelt wurde. Der Bot kann dir coole Informationen von anderen APIs liefern. Ich habe ein Level-System programmiert, bei dem du dein eigenes Level sehen kannst, das sich erhöht, je länger du online bist.',
    'proj.snake.title': 'Snake Spiel',
    'proj.snake.desc': 'Ich habe das alte Snake-Spiel in Java programmiert (du bist eine Schlange in einem Raster und versuchst, einen sehr langen Schwanz zu bekommen, und wenn du einen Apfel isst, wird dein Schwanz länger)!',
    'proj.snake.details': 'Das Programm erstellt eine ArrayList für den Schwanz der Schlange. Wenn die Schlange den Apfel isst, wird der ArrayList ein weiteres Element hinzugefügt und die Punktzahl erhöht sich. Wenn die Schlange mit sich selbst oder dem Rand kollidiert, ist das Spiel vorbei. Die Benutzeroberfläche wurde mit Java Swing erstellt.',
    'common.readMore': 'Mehr erfahren <i class="fa-solid fa-arrow-right ml-1"></i>',
    'common.viewGithub': 'Auf GitHub ansehen',
    'praxis.title': 'Praxisphasen',
    'praxis.phase1.date': 'Okt 2023 – Dez 2023',
    'praxis.phase1.title': 'Team / Abteilung',
    'praxis.phase1.desc': 'Hier kannst du eine ausführliche Beschreibung deiner ersten Praxisphase schreiben. Erkläre, welche Aufgaben du übernommen hast, an welchen Projekten du gearbeitet hast und was du gelernt hast.',
    'praxis.phase1.details': 'Weitere Details zu deinen Tätigkeiten, Herausforderungen und Erfolgen in dieser Phase.',
    'praxis.phase2.date': 'Apr 2024 – Jun 2024',
    'praxis.phase2.title': 'Team / Abteilung',
    'praxis.phase2.desc': 'Hier kannst du eine ausführliche Beschreibung deiner zweiten Praxisphase schreiben. Erkläre, welche Aufgaben du übernommen hast, an welchen Projekten du gearbeitet hast und was du gelernt hast.',
    'praxis.phase2.details': 'Weitere Details zu deinen Tätigkeiten, Herausforderungen und Erfolgen in dieser Phase.',
    'praxis.phase3.date': 'Okt 2024 – Dez 2024',
    'praxis.phase3.title': 'Team / Abteilung',
    'praxis.phase3.desc': 'Hier kannst du eine ausführliche Beschreibung deiner dritten Praxisphase schreiben. Erkläre, welche Aufgaben du übernommen hast, an welchen Projekten du gearbeitet hast und was du gelernt hast.',
    'praxis.phase3.details': 'Weitere Details zu deinen Tätigkeiten, Herausforderungen und Erfolgen in dieser Phase.',
    'praxis.phase4.date': 'Apr 2025 – Jun 2025',
    'praxis.phase4.title': 'Team / Abteilung',
    'praxis.phase4.desc': 'Hier kannst du eine ausführliche Beschreibung deiner vierten Praxisphase schreiben. Erkläre, welche Aufgaben du übernommen hast, an welchen Projekten du gearbeitet hast und was du gelernt hast.',
    'praxis.phase4.details': 'Weitere Details zu deinen Tätigkeiten, Herausforderungen und Erfolgen in dieser Phase.',
    'praxis.phase5.date': 'Okt 2025 – Dez 2025',
    'praxis.phase5.title': 'Team / Abteilung',
    'praxis.phase5.desc': 'Hier kannst du eine ausführliche Beschreibung deiner fünften Praxisphase schreiben. Erkläre, welche Aufgaben du übernommen hast, an welchen Projekten du gearbeitet hast und was du gelernt hast.',
    'praxis.phase5.details': 'Weitere Details zu deinen Tätigkeiten, Herausforderungen und Erfolgen in dieser Phase.'
  },
  en: {
    'nav.home': 'Home',
    'nav.education': 'Education',
    'nav.praxis': 'Practical Phases',
    'nav.projects': 'My Projects',
    'home.welcome': 'Welcome',
    'home.intro': 'I am currently a dual student at DHBW Mannheim in cooperation with SAP. I am very interested in developing solutions using latest technologies.',
    'home.contact': 'Contact',
    'edu.primary': 'Primary School',
    'edu.secondary': 'Secondary School',
    'edu.highschool': 'High School',
    'edu.dual': 'Dual Studies',
    'edu.dualDesc': 'Business Informatics (Software Engineering)',
    'edu.today': '2023 – today',
    'qual.title': 'Qualifications',
    'qual.languages': 'Languages',
    'qual.german': 'German (native)',
    'qual.english': 'English (very good)',
    'qual.spanish': 'Spanish (basic)',
    'qual.programming': 'Programming',
    'qual.computer': 'Computer Skills',
    'qual.hobbies': 'Hobbies',
    'qual.tabletennis': 'Table Tennis (Verbandsliga)',
    'qual.piano': 'Piano',
    'proj.sudoku.title': 'Sudoku Generator',
    'proj.sudoku.desc': 'I developed a Java program, which creates a number combination as basis a feasible solution within a Sudoku grid!',
    'proj.sudoku.details': 'At first the program puts the numbers 1-9 in every 3x3 square. In case there are duplicates of one number within a line or a column, numbers are swapped within the 3x3 square. This procedure is repeated till no duplicates exist anymore. The UI is developed with Java Swing.',
    'proj.discord.desc': 'I programmed a Discord Bot which can answer you, if you write a specific command to him!',
    'proj.discord.details': 'The program is using the discord.py API, which is made for Discord Bots like these. The Bot can answer you cool information from other APIs. I programmed a level system, where you can see your own level, which increases the longer you are online.',
    'proj.snake.title': 'Snake Game',
    'proj.snake.desc': 'I programmed the old snake game in Java (you are a snake in a grid and try to get a very long tail and if you eat an apple, your tail gets longer)!',
    'proj.snake.details': 'The program creates an ArrayList for the tail of the snake. If the snake eats the apple, the ArrayList gets one more item added and the score increases. If the snake is colliding itself or the border the game is over. The UI is made with Java Swing.',
    'common.readMore': 'Read More <i class="fa-solid fa-arrow-right ml-1"></i>',
    'common.viewGithub': 'View on GitHub',
    'praxis.title': 'Practical Phases',
    'praxis.phase1.date': 'Oct 2023 – Dec 2023',
    'praxis.phase1.title': 'Team / Department',
    'praxis.phase1.desc': 'Here you can write a detailed description of your first practical phase. Explain what tasks you took on, which projects you worked on and what you learned.',
    'praxis.phase1.details': 'More details about your activities, challenges and achievements during this phase.',
    'praxis.phase2.date': 'Apr 2024 – Jun 2024',
    'praxis.phase2.title': 'Team / Department',
    'praxis.phase2.desc': 'Here you can write a detailed description of your second practical phase. Explain what tasks you took on, which projects you worked on and what you learned.',
    'praxis.phase2.details': 'More details about your activities, challenges and achievements during this phase.',
    'praxis.phase3.date': 'Oct 2024 – Dec 2024',
    'praxis.phase3.title': 'Team / Department',
    'praxis.phase3.desc': 'Here you can write a detailed description of your third practical phase. Explain what tasks you took on, which projects you worked on and what you learned.',
    'praxis.phase3.details': 'More details about your activities, challenges and achievements during this phase.',
    'praxis.phase4.date': 'Apr 2025 – Jun 2025',
    'praxis.phase4.title': 'Team / Department',
    'praxis.phase4.desc': 'Here you can write a detailed description of your fourth practical phase. Explain what tasks you took on, which projects you worked on and what you learned.',
    'praxis.phase4.details': 'More details about your activities, challenges and achievements during this phase.',
    'praxis.phase5.date': 'Oct 2025 – Dec 2025',
    'praxis.phase5.title': 'Team / Department',
    'praxis.phase5.desc': 'Here you can write a detailed description of your fifth practical phase. Explain what tasks you took on, which projects you worked on and what you learned.',
    'praxis.phase5.details': 'More details about your activities, challenges and achievements during this phase.'
  }
};

const languages = [
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', name: 'English' }
];

let currentLang = localStorage.getItem('lang') || 'de';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

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
