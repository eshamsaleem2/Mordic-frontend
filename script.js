const getStartedBtn = document.getElementById("getStartedBtn");
const learnMoreBtn = document.getElementById("learnMoreBtn");
const conceptBtn = document.getElementById("conceptBtn");

// Get Started: scroll to the concepts section
getStartedBtn.addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// Learn More: scroll to the experience section
learnMoreBtn.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

// Concepts button: scroll to the experience section
conceptBtn.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

const heroSection = document.querySelector(".hero");
const sliderDots = document.querySelectorAll(".slider-dot");

const heroImages = [
    "images/hero.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

let currentSlide = 0;
let sliderInterval;

function showSlide(index) {
    currentSlide = index;

    heroSection.style.backgroundImage =
        `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("${heroImages[currentSlide]}")`;

    sliderDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}

function startSlider() {
    clearInterval(sliderInterval);

    sliderInterval = setInterval(() => {
        const nextSlide = (currentSlide + 1) % heroImages.length;
        showSlide(nextSlide);
    }, 4000);
}

sliderDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        showSlide(Number(dot.dataset.slide));
        startSlider();
    });
});

showSlide(0);
startSlider();