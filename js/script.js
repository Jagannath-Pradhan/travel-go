const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentSlide = 0;
let slideInterval;


/* Show Slide */

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });


    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}


/* Next Slide */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


/* Previous Slide */

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}


/* Next Button */

nextButton.addEventListener("click", () => {

    nextSlide();

    resetAutoSlide();

});


/* Previous Button */

prevButton.addEventListener("click", () => {

    prevSlide();

    resetAutoSlide();

});


/* Dot Navigation */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        resetAutoSlide();

    });

});


/* Automatic Slider */

function startAutoSlide() {

    slideInterval = setInterval(() => {

        nextSlide();

    }, 5000);

}


/* Reset Timer */

function resetAutoSlide() {

    clearInterval(slideInterval);

    startAutoSlide();

}


/* Start Slider */

startAutoSlide();