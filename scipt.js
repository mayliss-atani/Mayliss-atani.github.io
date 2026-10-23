
/* ========================================
   1. MENU DE NAVIGATION MOBILE
======================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Fermer le menu après avoir choisi une rubrique.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// Fermer le menu avec la touche Échap.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
    }
});

// Si l'écran s'agrandit, réinitialiser le menu mobile.
window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
        closeMenu();
    }
});

/* ========================================
   2. ANNÉE AUTOMATIQUE
======================================== */

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();

/* ========================================
   3. MESSAGE DANS LA CONSOLE
======================================== */

console.log(
    "Bienvenue sur le portfolio de Mayliss Atani !"
);
