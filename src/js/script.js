const nav = document.querySelector(".menu");
const toggle = document.querySelector(".menu-btn");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
});
}

// carrousel

const carousel = document.querySelector('.carousel__container');
const carouselItems = document.querySelector('.carousel__constrols');
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;

const careousel1 = document.querySelector('.carousel__container');

const prevButton = document.querySelector('.carousel__button--prev');

const nextButton = document.querySelector('.carousel__button--next');

if (carousel) {
    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });

    });
}
