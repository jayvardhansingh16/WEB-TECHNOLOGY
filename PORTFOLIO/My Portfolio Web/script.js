// Light / dark theme toggle
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

if (themeToggle) {
    const currentTheme = () => (rootElement.dataset.theme === 'light' ? 'light' : 'dark');

    const setTheme = (theme) => {
        if (theme === 'light') {
            rootElement.dataset.theme = 'light';
        } else {
            delete rootElement.dataset.theme;
        }

        themeToggle.setAttribute(
            'aria-label',
            theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
        );

        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            // Storage may be unavailable (private mode); the theme still applies.
        }
    };

    // Sync the label with any theme restored before paint
    themeToggle.setAttribute(
        'aria-label',
        currentTheme() === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
    );

    themeToggle.addEventListener('click', () => {
        setTheme(currentTheme() === 'light' ? 'dark' : 'light');
    });
}

// Typing animation in the hero section
if (window.Typed) {
    new Typed('#element', {
        strings: [
            'an Aspiring Software Developer',
            'a Python Programmer',
            'a Web Developer',
            'a Forex Trading Learner',
            'an AI-ML Enthusiast',
            'a Powerlifter'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });
}

// Responsive navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.right');

if (menuToggle && navLinks) {
    const closeMenu = () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 860) closeMenu();
    });
}
