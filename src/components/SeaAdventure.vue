<template>
  <div class="game-container">
    <h2>🌊 Sea Adventure Game</h2>
    <canvas ref="canvas" width="600" height="400"></canvas>
    <p>Use arrow keys ⬅️➡️⬆️⬇️ to swim and avoid obstacles!</p>
    <p>Score: {{ score }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
const score = ref(0);

const player = {
  x: 280,
  y: 180,
  size: 20,
  speed: 5,
  dx: 0,
  dy: 0,
};

const obstacles = [];

function drawPlayer(ctx) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
  ctx.fill();
}

function drawObstacles(ctx) {
  ctx.fillStyle = "red";
  obstacles.forEach((ob) => {
    ctx.fillRect(ob.x, ob.y, ob.size, ob.size);
  });
}

function update() {
  const ctx = canvas.value.getContext("2d");
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  // Move player
  player.x += player.dx;
  player.y += player.dy;

  // Keep player inside canvas
  if (player.x < player.size) player.x = player.size;
  if (player.y < player.size) player.y = player.size;
  if (player.x > canvas.value.width - player.size) player.x = canvas.value.width - player.size;
  if (player.y > canvas.value.height - player.size) player.y = canvas.value.height - player.size;

  // Draw
  drawPlayer(ctx);
  drawObstacles(ctx);

  // Collision detection
  obstacles.forEach((ob) => {
    if (
      player.x < ob.x + ob.size &&
      player.x + player.size > ob.x &&
      player.y < ob.y + ob.size &&
      player.y + player.size > ob.y
    ) {
      score.value -= 1;
      ob.x = -100; // move off-screen after hit
    }
  });

  requestAnimationFrame(update);
}

function spawnObstacle() {
  obstacles.push({
    x: Math.random() * 580,
    y: Math.random() * 380,
    size: 20,
  });
}

function keyDown(e) {
  if (e.key === "ArrowRight") player.dx = player.speed;
  if (e.key === "ArrowLeft") player.dx = -player.speed;
  if (e.key === "ArrowUp") player.dy = -player.speed;
  if (e.key === "ArrowDown") player.dy = player.speed;
}

function keyUp(e) {
  if (
    e.key === "ArrowRight" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowUp" ||
    e.key === "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

onMounted(() => {
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);

  setInterval(spawnObstacle, 2000);
  update();
});

onUnmounted(() => {
  window.removeEventListener("keydown", keyDown);
  window.removeEventListener("keyup", keyUp);
});
</script>

<style scoped>
.game-container {
  text-align: center;
  margin-top: 20px;
}
canvas {
  border: 2px solid #000;
  background: lightblue;
  margin: auto;
}
</style>
