import megaHeader from "./app.js";
megaHeader;
// declar variables (lies and services)
let lies = Array.from(document.querySelectorAll(".accord"));
let services = Array.from(document.querySelectorAll(".services__information"));

// looping throw the lies array
lies.forEach((li) => {
  li.addEventListener("click", () => {
    let service = document.getElementById(li.dataset.show);
    removeActive(services);
    removeActive(lies);
    service.classList.add("active");
    li.classList.add("active");
  });
});

// function to remove active class from any passing array
function removeActive(Array) {
  Array.forEach((element) => {
    element.classList.remove("active");
  });
}


