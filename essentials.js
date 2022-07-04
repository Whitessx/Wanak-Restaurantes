let copyright = document.querySelector(".copyright");
let currentYear = new Date().getFullYear();
copyright.innerHTML = `©${currentYear} Wanak Restaurantes`;

const BOTON = document.getElementById("btn-hamburger");
const MENU = document.querySelector(".navbar__menu--mobile");
const HIDE = document.querySelector(".transparent");

MENU.style.display = "none";
BOTON.addEventListener("click", function() {
  if (MENU.style.display == "none") {
    MENU.style.display = "flex";
    HIDE.style.display = "block";
  } else if (MENU.style.display != "none") {
    MENU.style.display = "none";
    HIDE.style.display = "none";
  }
});

HIDE.addEventListener("click", function() {
    MENU.style.display = "none";
    HIDE.style.display = "none";
});