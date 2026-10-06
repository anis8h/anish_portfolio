
/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 11, 18, 0.97)";
        header.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.25)";
    } else {
        header.style.background = "rgba(8, 11, 18, 0.88)";
        header.style.boxShadow = "none";
    }

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".section, .interest-card, .skill-card, .project-card, .learning-item"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("hidden");

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   SMOOTH SCROLL
========================================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   DYNAMIC FOOTER YEAR
========================================= */

const footerYear = document.querySelector("footer p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        "© " + currentYear + " Anish Ramchandra Jadhav";

}


/* =========================================
   WELCOME MESSAGE
========================================= */

console.log(
    "Welcome to Anish Jadhav's Developer Portfolio 🚀"
);
```
/* =========================================
   MOBILE HAMBURGER MENU
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const mobileNavLinks = document.querySelector(".nav-links");

if (menuToggle && mobileNavLinks) {

    menuToggle.addEventListener("click", function () {

        mobileNavLinks.classList.toggle("active");

    });

    mobileNavLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNavLinks.classList.remove("active");

        });

    });

}
/* =========================================
   TYPING ANIMATION
========================================= */

const typingText = document.getElementById("typing-text");

const text = "Aspiring Full Stack Developer";

let typingIndex = 0;

function typeText() {

    if (typingIndex < text.length) {

        typingText.textContent += text.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeText, 80);

    }

}

if (typingText) {
    typeText();
}
/* =========================================
   BACK TO TOP
========================================= */

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 200) {

        backToTopButton.classList.add("show");

    } else {

        backToTopButton.classList.remove("show");

    }

});


backToTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});