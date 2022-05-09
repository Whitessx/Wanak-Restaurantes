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

const BOTON_MAPA = document.querySelector("#map_btn");
const MAPA = document.querySelector(".iframe_gamarra");
const GAMARRA_GRID = document.querySelector(".restaurants__card__grid--gamarra");
const HIDE_RESTAURANT = document.querySelector(".transparent_restaurant");

MAPA.style.display = "none";

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

HIDE_RESTAURANT.addEventListener("click", function() {
  MAPA.style.display = "none";
  HIDE_RESTAURANT.style.display = "none";
  GAMARRA_GRID.style.display = "grid";
  MAPA2.style.display = "none";
  ARMENTIA_GRID.style.display = "grid";
  MAPA3.style.display = "none";
  GORBEIA_GRID.style.display = "grid";
});

const BOTON_MAPA2 = document.querySelector("#map_btn2");
const MAPA2 = document.querySelector(".iframe_armentia");
const ARMENTIA_GRID = document.querySelector(".restaurants__card__grid--armentia");

MAPA2.style.display = "none";

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

const BOTON_MAPA3 = document.querySelector("#map_btn3");
const MAPA3 = document.querySelector(".iframe_gorbeia");
const GORBEIA_GRID = document.querySelector(".restaurants__card__grid--gorbeia");

MAPA3.style.display = "none";

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