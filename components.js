// Navbar HTML
const navbarHTML = `
<nav class="bg-neutral-900 py-4 md:py-5 fixed top-0 w-full z-50">
    <div class="max-w-container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="index.html" class="text-xl md:text-2xl font-bold">Max Meinel</a>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden text-2xl text-neutral-400 hover:text-accent transition">
            <i class="fa-solid fa-bars"></i>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-10 items-center">
            <a href="index.html#education" class="text-neutral-400 hover:text-accent transition text-lg" data-i18n="nav.education">Ausbildung</a>
            <a href="index.html#praxis" class="text-neutral-400 hover:text-accent transition text-lg" data-i18n="nav.praxis">Praxisphasen</a>
            <a href="index.html#projects" class="text-neutral-400 hover:text-accent transition text-lg" data-i18n="nav.projects">Meine Projekte</a>

            <!-- Language Dropdown -->
            <div class="relative lang-selector">
                <button onclick="toggleDropdown('lang-dropdown')" class="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 rounded-lg text-sm font-medium hover:bg-neutral-700 transition">
                    <span id="lang-flag">🇩🇪</span>
                    <span id="lang-text">DE</span>
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </button>
                <div id="lang-dropdown" class="lang-dropdown hidden opacity-0 -translate-y-2 absolute right-0 mt-2 w-36 bg-neutral-800 rounded-xl shadow-xl border border-neutral-700 overflow-hidden transition-all duration-200">
                    <button onclick="setLanguage('de')" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-700 transition text-left">
                        <span>🇩🇪</span>
                        <span>Deutsch</span>
                    </button>
                    <button onclick="setLanguage('en')" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-700 transition text-left">
                        <span>🇬🇧</span>
                        <span>English</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-neutral-900 border-t border-neutral-800 mt-4">
        <div class="flex flex-col px-4 py-4 gap-4">
            <a href="index.html#education" class="text-neutral-400 hover:text-accent transition text-lg py-2 mobile-link" data-i18n="nav.education">Ausbildung</a>
            <a href="index.html#praxis" class="text-neutral-400 hover:text-accent transition text-lg py-2 mobile-link" data-i18n="nav.praxis">Praxisphasen</a>
            <a href="index.html#projects" class="text-neutral-400 hover:text-accent transition text-lg py-2 mobile-link" data-i18n="nav.projects">Meine Projekte</a>

            <!-- Mobile Language Dropdown -->
            <div class="relative lang-selector">
                <button onclick="toggleDropdown('lang-dropdown-mobile')" class="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg text-sm font-medium hover:bg-neutral-700 transition">
                    <span id="lang-flag-mobile">🇩🇪</span>
                    <span id="lang-text-mobile">DE</span>
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </button>
                <div id="lang-dropdown-mobile" class="lang-dropdown hidden opacity-0 -translate-y-2 absolute left-0 bottom-full mb-2 w-36 bg-neutral-800 rounded-xl shadow-xl border border-neutral-700 overflow-hidden transition-all duration-200">
                    <button onclick="setLanguage('de')" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-700 transition text-left">
                        <span>🇩🇪</span>
                        <span>Deutsch</span>
                    </button>
                    <button onclick="setLanguage('en')" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-700 transition text-left">
                        <span>🇬🇧</span>
                        <span>English</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</nav>
`;

// Footer HTML
const footerHTML = `
<footer class="py-8 md:py-12 bg-neutral-900 border-t border-neutral-800">
    <div class="max-w-container mx-auto px-4 md:px-8">
        <div class="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <!-- Navigation -->
            <div>
                <h4 class="text-accent font-semibold mb-4">Navigation</h4>
                <ul class="space-y-2">
                    <li><a href="index.html#education" class="text-neutral-400 hover:text-accent transition text-sm" data-i18n="nav.education">Ausbildung</a></li>
                    <li><a href="index.html#praxis" class="text-neutral-400 hover:text-accent transition text-sm" data-i18n="nav.praxis">Praxisphasen</a></li>
                    <li><a href="index.html#projects" class="text-neutral-400 hover:text-accent transition text-sm" data-i18n="nav.projects">Meine Projekte</a></li>
                </ul>
            </div>
            <!-- Contact -->
            <div>
                <h4 class="text-accent font-semibold mb-4" data-i18n="home.contact">Kontakt</h4>
                <div class="flex gap-6 text-2xl">
                    <a href="https://www.linkedin.com/in/max-meinel" target="_blank" class="text-neutral-400 hover:text-accent transition"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="mailto:max.meinel@sap.com" class="text-neutral-400 hover:text-accent transition"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://github.com/max-meinel" target="_blank" class="text-neutral-400 hover:text-accent transition"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <!-- Legal -->
            <div>
                <h4 class="text-accent font-semibold mb-4">Rechtliches</h4>
                <ul class="space-y-2">
                    <li><a href="impressum/" class="text-neutral-400 hover:text-accent transition text-sm">Impressum</a></li>
                </ul>
            </div>
        </div>
        <div class="text-center">
            <p class="text-neutral-500 text-sm md:text-base">Copyright © ${new Date().getFullYear()} Max Meinel</p>
        </div>
    </div>
</footer>
`;

// Insert components
document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }

    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }

    // Initialize mobile menu
    initMobileMenu();

    // Re-apply translations if i18n is loaded
    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
});

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            });
        });
    }
}
