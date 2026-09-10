/* Falling flakes + background music */
const SNOW_ENABLED = true;
const SNOW_COUNT = 45;
const MIN_FLAKE_SIZE = 1;
const MAX_FLAKE_SIZE = 3.2;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function makeSnow() {
  if (!SNOW_ENABLED) return;
  const layer = document.querySelector("#snow");
  if (!layer) return;

  for (let i = 0; i < SNOW_COUNT; i += 1) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    const size = randomBetween(MIN_FLAKE_SIZE, MAX_FLAKE_SIZE);
    const x = randomBetween(0, 100);
    const drift = randomBetween(-7, 7);
    const duration = randomBetween(5.5, 12);
    const delay = randomBetween(-12, 0);
    const opacity = randomBetween(0.55, 1);
    flake.style.setProperty("--flake-size", `${size}px`);
    flake.style.setProperty("--start-x", `${x}vw`);
    flake.style.setProperty("--drift", `${drift}vw`);
    flake.style.setProperty("--fall-duration", `${duration}s`);
    flake.style.setProperty("--fall-delay", `${delay}s`);
    flake.style.setProperty("--flake-opacity", opacity.toFixed(2));
    layer.appendChild(flake);
  }
}

makeSnow();

const bgMusic = document.getElementById("bg-music");
if (bgMusic) {
  bgMusic.volume = 0.5;

  function startMusic() {
    bgMusic.play().then(removeMusicListeners).catch(() => {});
  }

  function removeMusicListeners() {
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
    document.removeEventListener("pointerdown", startMusic);
  }

  window.addEventListener("load", startMusic);
  document.addEventListener("click", startMusic);
  document.addEventListener("touchstart", startMusic, { passive: true });
  document.addEventListener("pointerdown", startMusic);
}
