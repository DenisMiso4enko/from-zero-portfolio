const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu__list");
const body = document.body;

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("stopscroll");
});

document.querySelectorAll(".menu__list").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("stopscroll");
  })
);
