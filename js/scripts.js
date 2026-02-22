window.addEventListener("DOMContentLoaded", () => {
    // Collapse the responsive navbar when a navigation link is clicked in mobile view
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = document.querySelectorAll("#navbarSupportedContent .nav-link");

    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener("click", () => {
            // Only trigger the toggler if it's currently visible (mobile view)
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeToggleMobile = document.getElementById("darkModeToggleMobile");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        updateIcons(true);
    }

    function updateIcons(isDark) {
        const icon = isDark ? "fa-sun" : "fa-moon";
        const oldIcon = isDark ? "fa-moon" : "fa-sun";
        [darkModeToggle, darkModeToggleMobile].forEach(btn => {
            if (btn) {
                const i = btn.querySelector("i");
                i.classList.remove(oldIcon);
                i.classList.add(icon);
            }
        });
    }

    function toggleDarkMode() {
        let theme = "light";
        if (document.documentElement.getAttribute("data-theme") !== "dark") {
            theme = "dark";
        }
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        updateIcons(theme === "dark");
    }

    if (darkModeToggle) darkModeToggle.addEventListener("click", toggleDarkMode);
    if (darkModeToggleMobile) darkModeToggleMobile.addEventListener("click", toggleDarkMode);

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add("active");
            }
        }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check
});
