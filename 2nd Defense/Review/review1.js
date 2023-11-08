let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
  });
  slides[n].style.display = "block";
};



document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};


document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);
setInterval(() => {
  next();
}, 3000);