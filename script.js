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

const BOTON_MAPA = document.querySelector("#map_btn");
const MAPA = document.querySelector(".iframe_gamarra");
const GAMARRA_GRID = document.querySelector(".restaurants__card__grid--gamarra");
const HIDE_RESTAURANT = document.querySelector(".transparent_restaurant");

const BOTON_MAPA2 = document.querySelector("#map_btn2");
const MAPA2 = document.querySelector(".iframe_armentia");
const ARMENTIA_GRID = document.querySelector(".restaurants__card__grid--armentia");

const BOTON_MAPA3 = document.querySelector("#map_btn3");
const MAPA3 = document.querySelector(".iframe_gorbeia");
const GORBEIA_GRID = document.querySelector(".restaurants__card__grid--gorbeia");

const BOTON_MAPA4 = document.querySelector("#map_btn4");
const MAPA4 = document.querySelector(".iframe_logrono");
const LOGRONO_GRID = document.querySelector(".restaurants__card__grid--logrono");

const MAGNIFY = document.querySelector(".magnify_gamarra");
const SERVICES = document.querySelector(".restaurants__card__gamarra__services");

const MAGNIFY2 = document.querySelector(".magnify_armentia");
const SERVICES_ARMENTIA = document.querySelector(".restaurants__card__armentia__services");

const MAGNIFY3 = document.querySelector(".magnify_gorbeia");
const SERVICES_GORBEIA = document.querySelector(".restaurants__card__gorbeia__services");

const MAGNIFY4 = document.querySelector(".magnify_logrono");
const SERVICES_LOGRONO = document.querySelector(".restaurants__card__logrono__services");

MAPA.style.display = "none";
MAPA2.style.display = "none";
MAPA3.style.display = "none";
MAPA4.style.display = "none";
SERVICES.style.display = "none";
SERVICES_ARMENTIA.style.display = "none";
SERVICES_GORBEIA.style.display = "none";
SERVICES_LOGRONO.style.display = "none";


HIDE.addEventListener("click", function() {
    MENU.style.display = "none";
    HIDE.style.display = "none";
});

BOTON_MAPA.addEventListener("click", function() {
  if (MAPA.style.display == "none") {
    MAPA.style.display = "block";
    GAMARRA_GRID.style.display = "none";
    HIDE_RESTAURANT.style.display = "block";
  } else if (MAPA.style.display == "block") {
    MAPA.style.display = "none";
    GAMARRA_GRID.style.display = "grid";
    HIDE_RESTAURANT.style.display = "none";
  }
});

BOTON_MAPA2.addEventListener("click", function(){
  if (MAPA2.style.display == "none") {
    MAPA2.style.display = "block";
    ARMENTIA_GRID.style.display = "none";
    HIDE_RESTAURANT.style.display = "block";
  } else if (MAPA2.style.display == "block") {
    MAPA2.style.display = "none";
    ARMENTIA_GRID.style.display = "grid";
    HIDE_RESTAURANT.style.display = "none";
  }
});

BOTON_MAPA3.addEventListener("click", function() {
  if (MAPA3.style.display == "none") {
    MAPA3.style.display = "block";
    GORBEIA_GRID.style.display = "none";
    HIDE_RESTAURANT.style.display = "block";
  } else if (MAPA3.style.display == "block") {
    MAPA3.style.display = "none";
    GORBEIA_GRID.style.display = "grid";
    HIDE_RESTAURANT.style.display = "none";
  }
});

BOTON_MAPA4.addEventListener("click", function() {
  if (MAPA4.style.display == "none") {
    MAPA4.style.display = "block";
    LOGRONO_GRID.style.display = "none";
    HIDE_RESTAURANT.style.display = "block";
  } else if (MAPA4.style.display == "block") {
    MAPA4.style.display = "none";
    LOGRONO_GRID.style.display = "grid";
    HIDE_RESTAURANT.style.display = "none";
  }
});

HIDE_RESTAURANT.addEventListener("click", function() {
  MAPA.style.display = "none";
  HIDE_RESTAURANT.style.display = "none";
  GAMARRA_GRID.style.display = "grid";
  MAPA2.style.display = "none";
  ARMENTIA_GRID.style.display = "grid";
  MAPA3.style.display = "none";
  GORBEIA_GRID.style.display = "grid";
  MAPA4.style.display = "none";
  LOGRONO_GRID.style.display = "grid";
  SERVICES.style.display = "none";
  SERVICES_ARMENTIA.style.display = "none";
  SERVICES_GORBEIA.style.display = "none";
  SERVICES_LOGRONO.style.display = "none";
});

MAGNIFY.addEventListener("click", () => {
  if (SERVICES.style.display == "none") {
    SERVICES.style.display = "grid";
    HIDE_RESTAURANT.style.display = "block";
  } else if (SERVICES.style.display == "grid") {
    SERVICES.style.display = "none";
    HIDE.style.display = "none";
  }
});

MAGNIFY2.addEventListener("click", () => {
  if (SERVICES_ARMENTIA.style.display == "none") {
    SERVICES_ARMENTIA.style.display = "grid";
    HIDE_RESTAURANT.style.display = "block";
  } else if (SERVICES_ARMENTIA.style.display == "grid") {
    SERVICES_ARMENTIA.style.display = "none";
    HIDE.style.display = "none";
  }
});

MAGNIFY3.addEventListener("click", () => {
  if (SERVICES_GORBEIA.style.display == "none") {
    SERVICES_GORBEIA.style.display = "grid";
    HIDE_RESTAURANT.style.display = "block";
  } else if (SERVICES_GORBEIA.style.display == "grid") {
    SERVICES_GORBEIA.style.display = "none";
    HIDE.style.display = "none";
  }
});

MAGNIFY4.addEventListener("click", () => {
  if (SERVICES_LOGRONO.style.display == "none") {
    SERVICES_LOGRONO.style.display = "grid";
    HIDE_RESTAURANT.style.display = "block";
  } else if (SERVICES_LOGRONO.style.display == "grid") {
    SERVICES_LOGRONO.style.display = "none";
    HIDE.style.display = "none";
  }
});