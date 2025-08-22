<template>
  <div class="flex flex-col items-center">
    <h2 class="text-xl font-bold mb-2">🏜️ Jeep in the Sand</h2>
    <canvas ref="canvas" width="600" height="400" class="border rounded shadow"></canvas>
    <p class="mt-2 text-sm text-gray-600">
      Use Arrow Keys ⬅️➡️⬆️⬇️ to move the Jeep.  
      Collect 💧 to gain points, avoid 🪨 or lose points!
    </p>
    <p class="mt-2 text-lg font-semibold">Score: {{ score }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvas = ref(null);
let ctx;
let jeepImg = new Image();
jeepImg.src = "https://i.ibb.co/kc2nb9L/jeep-icon.png"; // Jeep PNG (replace with your own if you want)

// Jeep state
let jeep = { x: 300, y: 200, width: 50, height: 30, speed: 4 };
let keys = {};

// Game objects
let obstacles = [];
let items = [];
const maxObstacles = 3;
const maxItems = 3;
const obstacleSize = 30;
const itemSize = 20;

const score = ref(0);

// Draw sand background
function drawBackground() {
  ctx.fillStyle = "#EDC9AF"; // sandy color
  ctx.fillRect(0, 0, 600, 400);
}

// Draw Jeep
function drawJeep() {
  ctx.drawImage(jeepImg, jeep.x, jeep.y, jeep.width, jeep.height);
}

// Draw obstacles
function drawObstacles() {
  ctx.fillStyle = "#654321"; // brown rock
  obstacles.forEach((o) => {
    ctx.beginPath();
    ctx.arc(o.x, o.y, obstacleSize / 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Draw collectible items
function drawItems() {
  ctx.fillStyle = "blue"; // water drop
  items.forEach((i) => {
    ctx.beginPath();
    ctx.arc(i.x, i.y, itemSize / 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Update Jeep position
function updateJeep() {
  if (keys["ArrowUp"]) jeep.y -= jeep.speed;
  if (keys["ArrowDown"]) jeep.y += jeep.speed;
  if (keys["ArrowLeft"]) jeep.x -= jeep.speed;
  if (keys["ArrowRight"]) jeep.x += jeep.speed;

  // Keep jeep within canvas
  jeep.x = Math.max(0, Math.min(600 - jeep.width, jeep.x));
  jeep.y = Math.max(0, Math.min(400 - jeep.height, jeep.y));
}

// Check collisions
function checkCollisions() {
  // Hit obstacle -> lose points
  obstacles.forEach((o, idx) => {
    if (
      jeep.x < o.x + obstacleSize &&
      jeep.x + jeep.width > o.x &&
      jeep.y < o.y + obstacleSize &&
      jeep.y + jeep.height > o.y
    ) {
      score.value = Math.max(0, score.value - 5);
      obstacles.splice(idx, 1); // remove obstacle after hit
    }
  });

  // Collect item -> gain points
  items.forEach((i, idx) => {
    if (
      jeep.x < i.x + itemSize &&
      jeep.x + jeep.width > i.x &&
      jeep.y < i.y + itemSize &&
      jeep.y + jeep.height > i.y
    ) {
      score.value += 10;
      items.splice(idx, 1); // remove item after collected
    }
  });
}

// Spawn random objects
function spawnObjects() {
  if (obstacles.length < maxObstacles) {
    obstacles.push({
      x: Math.random() * (600 - obstacleSize),
      y: Math.random() * (400 - obstacleSize),
    });
  }

  if (items.length < maxItems) {
    items.push({
      x: Math.random() * (600 - itemSize),
      y: Math.random() * (400 - itemSize),
    });
  }
}

// Game loop
function gameLoop() {
  drawBackground();
  updateJeep();
  drawJeep();
  drawObstacles();
  drawItems();
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
  background: #fdf5e6; /* sandy feel */
}
</style>
