const toggleBtn = document.getElementById("toggle_btn");
const offScreen = document.getElementById("offscreen");
const closeBtn = document.getElementById("close");

toggleBtn.addEventListener("click", () => {
  offScreen.style.left = 0;
});

closeBtn.addEventListener("click", () => {
  offScreen.style.left = "-100%";
});
