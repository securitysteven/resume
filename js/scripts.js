window.addEventListener("DOMContentLoaded", () => {
    // Collapse the responsive navbar when a navigation link is clicked in mobile view
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarSupportedContent .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            // Only trigger the toggler if it's currently visible (mobile view)
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });
});
