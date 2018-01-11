const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListner("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListner("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListner("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListner("mouseleave", () => {
  container.classList.remove("hover-right");
});
