const SNOW_ENABLED = true;
const SNOW_COUNT = 45;
const MIN_FLAKE_SIZE = 1;
const MAX_FLAKE_SIZE = 3.2;

function randomBetween(min, max) { return Math.random() * (max - min) + min; }
function makeSnow() {
  if (!SNOW_ENABLED) return;
  const layer = document.querySelector("#snow");
  if (!layer) return;
  for (let i = 0; i < SNOW_COUNT; i += 1) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.style.setProperty("--flake-size", `${randomBetween(MIN_FLAKE_SIZE, MAX_FLAKE_SIZE)}px`);
    flake.style.setProperty("--start-x", `${randomBetween(0, 100)}vw`);
    flake.style.setProperty("--drift", `${randomBetween(-7, 7)}vw`);
    flake.style.setProperty("--fall-duration", `${randomBetween(5.5, 12)}s`);
    flake.style.setProperty("--fall-delay", `${randomBetween(-12, 0)}s`);
    flake.style.setProperty("--flake-opacity", randomBetween(0.55, 1).toFixed(2));
    layer.appendChild(flake);
  }
}
makeSnow();

const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicIcon = document.getElementById("music-icon");

function updateMusicButton(isOn) {
  musicToggle.setAttribute("aria-pressed", String(isOn));
  musicToggle.setAttribute("aria-label", isOn ? "Turn music off" : "Turn music on");
  musicIcon.src = isOn ? "assets/button-on.gif" : "assets/button-off.gif";
  musicIcon.alt = isOn ? "Music on" : "Music off";
}

if (bgMusic && musicToggle) {
  bgMusic.volume = 0.5;
  updateMusicButton(false);
  musicToggle.addEventListener("click", async () => {
    if (bgMusic.paused) {
      try {
        await bgMusic.play();
        updateMusicButton(true);
      } catch (error) {
        updateMusicButton(false);
      }
    } else {
      bgMusic.pause();
      updateMusicButton(false);
    }
  });
  bgMusic.addEventListener("play", () => updateMusicButton(true));
  bgMusic.addEventListener("pause", () => updateMusicButton(false));
}

function openDialog(id) {
  const dialog = document.getElementById(id);
  if (!dialog) return;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}
function closeDialog(id) {
  const dialog = document.getElementById(id);
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

document.getElementById("dress-button")?.addEventListener("click", () => openDialog("dress-dialog"));
document.getElementById("gift-button")?.addEventListener("click", () => openDialog("gift-dialog"));
document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => closeDialog(button.dataset.close));
});
