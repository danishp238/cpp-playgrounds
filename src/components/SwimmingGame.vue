<template>
  <div class="flex flex-col items-center">
    <h2 class="text-xl font-bold mb-2">🏊 Swimming Game</h2>
    <canvas
      ref="canvas"
      width="600"
      height="400"
      class="border rounded shadow"
      tabindex="0"
      aria-label="Swimming game"
    ></canvas>

    <p class="mt-2 text-lg font-semibold">Score: {{ score }}</p>
    <p class="mt-1 text-sm text-gray-600">
      Use ⬅️ ➡️ keys to move swimmer
      <span v-if="!assetsReady"> • Loading images…</span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvas = ref(null);
let ctx;
let frameId = null;

// State
const score = ref(0);
const assetsReady = ref(false);
const keys = {}; // simple map, no reactivity needed

// Player + objects
const swimmer = { x: 260, y: 340, width: 60, height: 40, speed: 6 };
let medals = [];
let sharks = [];
const medalSize = 25;
const sharkSize = 40;

// Images (preloaded)
let imgs = { swimmer: null, medal: null, shark: null };

// ---------- Helpers ----------
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${url}`));
    img.src = url;
  });
}

// Use BASE_URL so it works in dev and production subpaths
const BASE = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "") + "/";

// ---------- Drawing ----------
function drawBackground() {
  // Pool water
  ctx.fillStyle = "#1E90FF";
  ctx.fillRect(0, 0, 600, 400);

  // Lane lines
  ctx.fillStyle = "#ffffff";
  for (let i = 0; i < 5; i++) {
    ctx.fillRect(i * 120 + 55, 0, 5, 400);
  }
}

function drawSwimmer() {
  if (assetsReady.value && imgs.swimmer) {
    ctx.drawImage(imgs.swimmer, swimmer.x, swimmer.y, swimmer.width, swimmer.height);
  } else {
    // Fallback placeholder so you SEE movement even if images aren’t ready
    ctx.fillStyle = "#003366";
    ctx.fillRect(swimmer.x, swimmer.y, swimmer.width, swimmer.height);
  }
}

function drawMedals() {
  if (assetsReady.value && imgs.medal) {
    medals.forEach((m) => ctx.drawImage(imgs.medal, m.x, m.y, medalSize, medalSize));
  } else {
    ctx.fillStyle = "gold";
    medals.forEach((m) => { ctx.beginPath(); ctx.arc(m.x + medalSize/2, m.y + medalSize/2, medalSize/2, 0, Math.PI*2); ctx.fill(); });
  }
}

function drawSharks() {
  if (assetsReady.value && imgs.shark) {
    sharks.forEach((s) => ctx.drawImage(imgs.shark, s.x, s.y, sharkSize, sharkSize));
  } else {
    ctx.fillStyle = "black";
    sharks.forEach((s) => { ctx.fillRect(s.x, s.y, sharkSize, sharkSize); });
  }
}

// ---------- Update ----------
function updateSwimmer() {
  if (keys["ArrowLeft"]) swimmer.x -= swimmer.speed;
  if (keys["ArrowRight"]) swimmer.x += swimmer.speed;
  swimmer.x = Math.max(0, Math.min(600 - swimmer.width, swimmer.x));
}

function updateObjects() {
  medals.forEach((m) => (m.y += 2));
  sharks.forEach((s) => (s.y += 3));
  medals = medals.filter((m) => m.y < 400);
  sharks = sharks.filter((s) => s.y < 400);
}

function checkCollisions() {
  // medals -> +10
  for (let i = medals.length - 1; i >= 0; i--) {
    const m = medals[i];
    if (
      m.x < swimmer.x + swimmer.width &&
      m.x + medalSize > swimmer.x &&
      m.y < swimmer.y + swimmer.height &&
      m.y + medalSize > swimmer.y
    ) {
      score.value += 10;
      medals.splice(i, 1);
    }
  }
  // sharks -> -15
  for (let i = sharks.length - 1; i >= 0; i--) {
    const s = sharks[i];
    if (
      s.x < swimmer.x + swimmer.width &&
      s.x + sharkSize > swimmer.x &&
      s.y < swimmer.y + swimmer.height &&
      s.y + sharkSize > swimmer.y
    ) {
      score.value = Math.max(0, score.value - 15);
      sharks.splice(i, 1);
    }
  }
}

function spawnObjects() {
  if (Math.random() < 0.03) medals.push({ x: Math.random() * 560, y: 0 });
  if (Math.random() < 0.015) sharks.push({ x: Math.random() * 560, y: 0 });
}

// ---------- Loop ----------
function loop() {
  drawBackground();
  updateSwimmer();
  updateObjects();
  drawSwimmer();
  drawMedals();
  drawSharks();
  checkCollisions();
  spawnObjects();

  frameId = requestAnimationFrame(loop);
}

// ---------- Keyboard (named handlers + preventDefault) ----------
function onKeyDown(e) {
  // prevent page from scrolling on arrow keys
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key)) {
    e.preventDefault();
  }
  keys[e.key] = true;
}
function onKeyUp(e) {
  keys[e.key] = false;
}

// ---------- Lifecycle ----------
onMounted(async () => {
  ctx = canvas.value.getContext("2d");

  // Attach handlers (use named functions so removal works later)
  window.addEventListener("keydown", onKeyDown, { passive: false });
  window.addEventListener("keyup", onKeyUp);

  // Focus canvas so keys work even in some mobile/desktop setups
  try { canvas.value.focus(); } catch {}

  // Preload images; if they fail, we’ll draw placeholders
  try {
    const [swimmerImg, medalImg, sharkImg] = await Promise.all([
      loadImage(`${BASE}swimmer.png`),
      loadImage(`${BASE}medal.png`),
      loadImage(`${BASE}shark.png`),
    ]);
    imgs = { swimmer: swimmerImg, medal: medalImg, shark: sharkImg };
    assetsReady.value = true;
  } catch (err) {
    console.warn("Image load failed; using shape fallbacks:", err?.message || err);
    assetsReady.value = false;
  }

  frameId = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeyDown);
  window.removeEventListener("keyup", onKeyUp);
  if (frameId) cancelAnimationFrame(frameId);
});
</script>

<style scoped>
canvas { background: #87cefa; }
</style>
