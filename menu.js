const print = console.log;

const mobile_menu = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav ul");

mobile_menu.addEventListener("click", () => {
  nav.classList.toggle("hide-desktop-links");
});
