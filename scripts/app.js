// start header in scrolling

export default function megaHeader() {
  const header = document.querySelector("header");
  const firstPart = document.querySelector(".first--part");
  const navLinks = document.querySelectorAll("nav a");
  const logo = document.querySelector(".logo");
  const burgerIcon = document.querySelector(".burger__icon");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      burgerIcon.classList.add("fixed");
      logo.classList.add("fixed");
      firstPart.classList.add("hidden");
      header.classList.add("fixed");
      navLinks.forEach((link) => {
        link.classList.add("fixed");
      });
    } else {
      burgerIcon.classList.remove("fixed");
      logo.classList.remove("fixed");
      firstPart.classList.remove("hidden");
      header.classList.remove("fixed");
      navLinks.forEach((link) => {
        link.classList.remove("fixed");
      });
    }
  });
}
megaHeader();
