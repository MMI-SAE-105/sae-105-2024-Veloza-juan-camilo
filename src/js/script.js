// Menú
const nav = document.querySelector("#mainNav");
const menuToggle = document.querySelector(".menu-btn");
const closeButton = document.querySelector(".menu__close-btn");
const page = document.body;

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.ariaExpanded === "true";
        const isClosed = !isOpen;

        menuToggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}

if (closeButton && nav && menuToggle) {
    closeButton.addEventListener("click", () => {
        nav.ariaHidden = true;
        menuToggle.ariaExpanded = false;
        page.classList.remove("noscroll");
    });
}

// Carrusel
const carousel = document.querySelector('.carousel__container');
const items = document.querySelectorAll(".carousel__item");
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
let currentIndex = 0;

if (carousel && items.length > 0 && prevButton && nextButton) {
    const updateCarousel = () => {
        const offset = -currentIndex * items[0].clientWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });
}