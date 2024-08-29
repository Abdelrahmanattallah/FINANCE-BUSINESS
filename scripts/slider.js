// start slider function

const sliderHolder = document.querySelector(".slider__holder");
const sliderItems = sliderHolder.querySelectorAll(".slider");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

let sliderIndex = 0;

// start previous slider function handle
function prevSlide() {
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = sliderItems.length - 1;
  }
  sliderHolder.style.transform = `translateX(-${sliderIndex * 100}%)`;
}

// start next slider function handle

function nextSlide() {
  sliderIndex++;
  if (sliderIndex === sliderItems.length) {
    sliderIndex = 0;
  }
  sliderHolder.style.transform = `translateX(-${sliderIndex * 100}%)`;
}
setInterval(nextSlide, 4000);
