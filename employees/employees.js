const PLAYER_IMAGE = document.querySelector(".player-image");
const VIDEO_PLAYER = document.querySelector(".player");

VIDEO_PLAYER.style.display = "none";

PLAYER_IMAGE.addEventListener("click", () => {
  if (VIDEO_PLAYER.style.display == "none") {
    VIDEO_PLAYER.style.display = "flex";
  } else if (VIDEO_PLAYER.style.display != "none") {
    VIDEO_PLAYER.style.display = "none";
  }
});