// start function animated numbers on scroll

export default function megaAnimatedNumbers() {
  const businessSection = document.querySelector(".business__growth");
  let statistics = Array.from(businessSection.querySelectorAll(".number"));
  let trigged = false;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= businessSection.offsetTop - 200) {
      if (trigged == false) {
        statisticsHandle();
      }
      trigged = true;
    } else {
      false;
    }
  });

  function statisticsHandle() {
    statistics.forEach((statics) => {
      counting(statics);
    });
  }

  function counting(el) {
    let goal = el.dataset.info;
    let startCount = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(startCount);
      }
    }, 2000 / goal);
  }
}
megaAnimatedNumbers();
