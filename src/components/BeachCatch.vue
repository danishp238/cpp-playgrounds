<template>
  <div class="flex flex-col items-center">
    <h2 class="text-xl font-bold mb-2">🏖️ Beach Bucket Game</h2>
    <canvas ref="canvas" width="600" height="400" class="border rounded shadow"></canvas>
    <p class="mt-2 text-lg font-semibold">Score: {{ score }}</p>
    <p class="mt-1 text-sm text-gray-600">Move bucket with ⬅️ ➡️ keys to catch 🐚 and avoid 🦀</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvas = ref(null);
let ctx;

// Game objects
let bucket = { x: 250, y: 360, width: 80, height: 30, speed: 6 };
let keys = {};

let seashells = [];
let crabs = [];
const seashellSize = 20;
const crabSize = 25;

const score = ref(0);

// 🎨 Background
function drawBackground() {
  ctx.fillStyle = "#87CEEB"; // sky blue
  ctx.fillRect(0, 0, 600, 300);
  ctx.fillStyle = "#F4E1A1"; // sandy beach
  ctx.fillRect(0, 300, 600, 100);
}

// 🪣 Draw bucket
function drawBucket() {
  ctx.fillStyle = "#8B4513"; // brown bucket
  ctx.fillRect(bucket.x, bucket.y, bucket.width, bucket.height);
}

// 🐚 Draw seashells
function drawSeashells() {
  ctx.fillStyle = "pink";
  seashells.forEach((s) => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, seashellSize / 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

// 🦀 Draw crabs
function drawCrabs() {
  ctx.fillStyle = "red";
  crabs.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, crabSize / 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Update bucket position
function updateBucket() {
  if (keys["ArrowLeft"]) bucket.x -= bucket.speed;
  if (keys["ArrowRight"]) bucket.x += bucket.speed;

  // Stay in bounds
  bucket.x = Math.max(0, Math.min(600 - bucket.width, bucket.x));
}

// Drop seashells + crabs
function updateObjects() {
  seashells.forEach((s) => (s.y += 2));
  crabs.forEach((c) => (c.y += 2));

  // Remove off-screen
  seashells = seashells.filter((s) => s.y < 400);
  crabs = crabs.filter((c) => c.y < 400);
}

// Collision check
function checkCollisions() {
  // Seashells
  seashells.forEach((s, idx) => {
    if (
      s.x > bucket.x &&
      s.x < bucket.x + bucket.width &&
      s.y > bucket.y &&
      s.y < bucket.y + bucket.height
    ) {
      score.value += 10;
      seashells.splice(idx, 1);
    }
  });

  // Crabs
  crabs.forEach((c, idx) => {
    if (
      c.x > bucket.x &&
      c.x < bucket.x + bucket.width &&
      c.y > bucket.y &&
      c.y < bucket.y + bucket.height
    ) {
      score.value = Math.max(0, score.value - 5);
      crabs.splice(idx, 1);
    }
  });
}

// Random spawning
function spawnObjects() {
  if (Math.random() < 0.03) {
    seashells.push({ x: Math.random() * 580 + 10, y: 0 });
  }
  if (Math.random() < 0.01) {
    crabs.push({ x: Math.random() * 580 + 10, y: 0 });
  }
}

// Main loop
function gameLoop() {
  drawBackground();
  updateBucket();
  updateObjects();
  drawBucket();
  drawSeashells();
  drawCrabs();
  checkCollisions();
  spawnObjects();

  requestAnimationFrame(gameLoop);
}

onMounted(() => {
  ctx = canvas.value.getContext("2d");

  window.addEventListener("keydown", (e) => (keys[e.key] = true));
  window.addEventListener("keyup", (e) => (keys[e.key] = false));

  gameLoop();
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", (e) => (keys[e.key] = true));
  window.removeEventListener("keyup", (e) => (keys[e.key] = false));
});
</script>

<style scoped>
canvas {
  background: #fdf6e3; /* beach sand tone */
}
</style>
