<template>
  <div class="wrap">
    <header>
      <h1>🌧️ Rain Catcher — Vue JS</h1>
      <div class="controls">Move: <strong>Mouse</strong> or <strong>◀ ▶</strong> • Start/Restart: <strong>Space</strong></div>
    </header>

    <div class="hud">
      <div class="pill">Score: <span>{{ score }}</span></div>
      <div class="pill">Level: <span>{{ level }}</span></div>
      <div class="pill lives">Lives: <span>{{ lives }}</span></div>
    </div>

    <div class="stage">
      <canvas ref="canvas" width="900" height="500" aria-label="Rain Catcher Game"></canvas>
      <div class="overlay" v-if="!running">
        <div class="card">
          <h2 v-if="lives <= 0">Game Over</h2>
          <h2 v-else>Catch the Rain!</h2>
          <p v-if="lives <= 0">
            You scored <strong>{{ score }}</strong> point{{ score === 1 ? '' : 's' }} at level <strong>{{ level }}</strong>.
          </p>
          <p v-else>Slide the bucket to catch falling drops. Miss three and it's game over.</p>
          <button class="btn" @click="startGame">{{ lives <= 0 ? 'Play again' : 'Start' }}</button>
        </div>
      </div>
    </div>

    <footer>
      Tip: Works inside Vue. Tweak values in <code>SETTINGS</code> to change difficulty.
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const canvas = ref(null);
const ctx = ref(null);

const SETTINGS = {
  gravity: 0.12,
  spawnEveryMs: 550,
  maxFallSpeed: 6.5,
  bucketSpeed: 6,
  bucketWidth: 100,
  bucketHeight: 18,
  startLives: 3,
  levelUpEvery: 8,
  levelSpeedBoost: 0.08
};

const running = ref(false);
const score = ref(0);
const level = ref(1);
const lives = ref(SETTINGS.startLives);
const lastSpawn = ref(0);
const lastTime = ref(0);
const drops = reactive([]);
const keys = reactive(new Set());

let bucket;

function makeDrop() {
  const x = Math.random() * (canvas.value.width - 12) + 6;
  return { x, y: -10, vy: Math.random() * 1 + 1.2, r: Math.random() * 3 + 3 };
}

function intersectsCircleRect(cx, cy, r, rx, ry, rw, rh) {
  const closestX = Math.max(rx, Math.min(cx, rx + rw));
  const closestY = Math.max(ry, Math.min(cy, ry + rh));
  const dx = cx - closestX, dy = cy - closestY;
  return (dx*dx + dy*dy) <= r*r;
}

function drawBackground(ctx, canvas) {
  ctx.save();
  ctx.globalAlpha = 0.15;
  ctx.strokeStyle = '#9bdbff';
  ctx.lineWidth = 1;
  ctx.setLineDash([10, 14]);
  ctx.beginPath();
  for (let x = -40; x < canvas.width + 40; x += 28) {
    ctx.moveTo(x, -20);
    ctx.lineTo(x + 60, canvas.height + 40);
  }
  ctx.stroke();
  ctx.restore();
}

function drawBucket(ctx) {
  const { x, y, w, h } = bucket;
  ctx.fillStyle = 'rgba(255, 209, 102, 0.95)';
  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 8, y);
  ctx.lineTo(x + w - 8, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + 8);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y + 8);
  ctx.quadraticCurveTo(x, y, x + 8, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawDrop(ctx, d) {
  ctx.save();
  const gradient = ctx.createRadialGradient(d.x-1, d.y-2, 1, d.x, d.y, d.r+2);
  gradient.addColorStop(0, 'rgba(220, 245, 255, 0.95)');
  gradient.addColorStop(1, 'rgba(108, 192, 255, 0.55)');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(d.x, d.y, d.r, Math.PI, 0);
  ctx.lineTo(d.x, d.y - d.r*1.6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function update() {
  const c = canvas.value;

  if (keys.has('ArrowLeft')) bucket.move(-SETTINGS.bucketSpeed);
  if (keys.has('ArrowRight')) bucket.move(SETTINGS.bucketSpeed);

  if (performance.now() - lastSpawn.value > SETTINGS.spawnEveryMs / Math.max(1, 1 + (level.value-1)*0.1)) {
    drops.push(makeDrop());
    lastSpawn.value = performance.now();
  }

  for (let i = drops.length - 1; i >= 0; i--) {
    const d = drops[i];
    d.vy = Math.min(d.vy + SETTINGS.gravity + SETTINGS.levelSpeedBoost*(level.value-1), SETTINGS.maxFallSpeed + (level.value-1)*0.6);
    d.y += d.vy;

    if (intersectsCircleRect(d.x, d.y, d.r, bucket.x, bucket.y, bucket.w, bucket.h)) {
      drops.splice(i, 1);
      score.value++;
      if (score.value % SETTINGS.levelUpEvery === 0) level.value++;
      continue;
    }
    if (d.y - d.r > c.height) {
      drops.splice(i, 1);
      lives.value--;
      if (lives.value <= 0) {
        gameOver();
        return;
      }
    }
  }
}

function render() {
  const c = canvas.value;
  const cctx = ctx.value;
  cctx.clearRect(0, 0, c.width, c.height);
  drawBackground(cctx, c);
  for (const d of drops) drawDrop(cctx, d);
  drawBucket(cctx);
}

function loop(ts) {
  if (!running.value) return;
  update();
  render();
  requestAnimationFrame(loop);
}

function startGame() {
  score.value = 0;
  level.value = 1;
  lives.value = SETTINGS.startLives;
  drops.splice(0, drops.length);
  lastTime.value = performance.now();
  lastSpawn.value = 0;
  running.value = true;
  requestAnimationFrame(loop);
}

function gameOver() {
  running.value = false;
}

onMounted(() => {
  ctx.value = canvas.value.getContext('2d');
  bucket = {
    x: canvas.value.width / 2 - SETTINGS.bucketWidth / 2,
    y: canvas.value.height - 40,
    w: SETTINGS.bucketWidth,
    h: SETTINGS.bucketHeight,
    move(dx) { this.x = Math.max(0, Math.min(canvas.value.width - this.w, this.x + dx)); }
  };

  canvas.value.addEventListener('mousemove', (e) => {
    const rect = canvas.value.getBoundingClientRect();
    const scaleX = canvas.value.width / rect.width;
    bucket.x = (e.clientX - rect.left) * scaleX - bucket.w / 2;
    bucket.x = Math.max(0, Math.min(canvas.value.width - bucket.w, bucket.x));
  });

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') { if (!running.value) startGame(); }
    keys.add(e.code);
  });
  window.addEventListener('keyup', (e) => keys.delete(e.code));
});
</script>

<style scoped>
:root {
  --bg: #0b1220;
  --fg: #e6f0ff;
  --accent: #6cc0ff;
  --accent2: #9bdbff;
  --bucket: #ffd166;
  --danger: #ff6b6b;
}
.wrap { width: min(900px, 95vw); margin: auto; color: var(--fg); font-family: system-ui, Arial, sans-serif; }
header { display: flex; justify-content: space-between; margin: 12px 0; }
.controls { font-size: 14px; opacity: 0.85; }
.hud { display: flex; justify-content: space-between; gap: 12px; margin: 8px 0 12px; font-size: 14px; }
.pill { padding: 6px 10px; border: 1px solid #2a3a5e; border-radius: 999px; background: rgba(255,255,255,0.04); }
.lives span { color: var(--danger); }
.stage { position: relative; border-radius: 12px; overflow: hidden; border: 1px solid #22304f; box-shadow: 0 8px 24px rgba(0,0,0,0.35); }
canvas { display: block; width: 100%; height: auto; background: linear-gradient(180deg, #0d1629, #0c1423 60%, #0a1220); }
.overlay { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(6,10,18,0.55); color: var(--fg); text-align: center; }
.card { background: rgba(13,22,41,0.9); border: 1px solid #2a3a5e; padding: 18px 20px; border-radius: 12px; width: min(380px, 92%); box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
.card h2 { margin: 0 0 6px; font-size: 20px; }
.card p { margin: 6px 0 14px; font-size: 14px; opacity: 0.9; }
.btn { border: 1px solid #2a3a5e; background: linear-gradient(180deg, #14233f, #0f1b33); color: var(--fg); padding: 10px 14px; border-radius: 10px; cursor: pointer; font-weight: 600; }
.btn:hover { filter: brightness(1.1); }
footer { margin-top: 10px; opacity: 0.7; font-size: 12px; text-align: center; }
</style>
