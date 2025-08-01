const slides = document.getElementById('slides');
let index = 0;

function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

window.nextSlide = function () {
    const total = slides.children.length;
    index = (index + 1) % total;
    showSlide();
};

window.prevSlide = function () {
    const total = slides.children.length;
    index = (index - 1 + total) % total;
    showSlide();
};