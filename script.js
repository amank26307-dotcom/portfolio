/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   1. THEME TOGGLE
========================================================= */

const themeBtn = document.getElementById("themeBtn");


// Check previously saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "☾";
} else {
    document.body.classList.remove("light");
    themeBtn.textContent = "☼";
}


// Toggle theme
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    if (isLight) {
        themeBtn.textContent = "☾";

        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "☼";

        localStorage.setItem("theme", "dark");
    }

});


/* =========================================================
   2. MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

    });


    // Close menu after clicking navigation link

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

        });

    });

}


/* =========================================================
   3. ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 130;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   4. PROJECT CASE STUDY MODAL
========================================================= */

const projectDetailsButtons =
    document.querySelectorAll(".project-details");

const modal =
    document.getElementById("projectModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTech =
    document.getElementById("modalTech");

const modalClose =
    document.getElementById("modalClose");


projectDetailsButtons.forEach(button => {

    button.addEventListener("click", () => {

        const title =
            button.getAttribute("data-title");

        const description =
            button.getAttribute("data-description");

        const tech =
            button.getAttribute("data-tech");


        modalTitle.textContent = title;

        modalDescription.textContent = description;


        modalTech.innerHTML = "";


        tech.split(",").forEach(item => {

            const tag = document.createElement("span");

            tag.textContent = item.trim();

            modalTech.appendChild(tag);

        });


        modal.classList.add("open");

        document.body.style.overflow = "hidden";

    });

});


/* =========================================================
   5. CLOSE MODAL
========================================================= */

function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

}


if (modalClose) {

    modalClose.addEventListener("click", closeModal);

}


/* =========================================================
   6. CLOSE MODAL WHEN CLICKING BACKDROP
========================================================= */

if (modal) {

    modal.addEventListener("click", (event) => {

        if (event.target.classList.contains("modal-backdrop")) {

            closeModal();

        }

    });

}


/* =========================================================
   7. ESC KEY CLOSE MODAL
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (modal.classList.contains("open")) {

            closeModal();

        }

    }

});


/* =========================================================
   8. CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}