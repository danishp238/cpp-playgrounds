<script setup>
import Typewriter from './Typewriter.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Engine, Render, Runner, World, Bodies, Composite } from 'matter-js'
import Slider from './Slider.vue'
import Header from './Header.vue'

const canvasRef = ref(null)
let engine, render, runner

const emojis = [
  'https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png',
  'https://em-content.zobj.net/thumbs/240/apple/354/red-heart_2764-fe0f.png',
  'https://em-content.zobj.net/thumbs/240/apple/354/video-game_1f3ae.png',
  'https://em-content.zobj.net/thumbs/240/apple/354/keyboard_2328-fe0f.png',
  'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  'https://em-content.zobj.net/thumbs/240/apple/354/smiling-face-with-sunglasses_1f60e.png',
  'https://em-content.zobj.net/thumbs/240/apple/354/money-bag_1f4b0.png',
  'https://em-content.zobj.net/thumbs/240/apple/354/party-popper_1f389.png',
  'https://em-content.zobj.net/thumbs/240/apple/354/technologist_1f9d1-200d-1f4bb.png'
]

function createEmoji(x, y, emoji) {
  const size = 40
  return Bodies.rectangle(x, y, size, size, {
    render: {
      sprite: {
        texture: emoji,
        xScale: 0.4,
        yScale: 0.4
      }
    }
  })
}

onMounted(() => {

  engine = Engine.create()
  const world = engine.world

  render = Render.create({
    canvas: canvasRef.value,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      background: 'transparent',
      wireframes: false
    }
  })

  Render.run(render)
  runner = Runner.create()
  Runner.run(runner, engine)

  // Floor
  const floor = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + 20,
    window.innerWidth,
    40,
    {
      isStatic: true,
      render: { fillStyle: '#333' }
    }
  )
  World.add(world, floor)

  // Drop emojis
  const interval = setInterval(() => {
    const x = Math.random() * window.innerWidth
    const y = -50
    const index = Math.floor(Math.random() * emojis.length)
    const body = createEmoji(x, y, emojis[index])
    World.add(world, body)
  }, 50)

  // Resize handler
  const resize = () => {
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight }
    })
  }
  window.addEventListener('resize', resize)

  onBeforeUnmount(() => {
    clearInterval(interval)
    window.removeEventListener('resize', resize)
    Render.stop(render)
    Runner.stop(runner)
  })
})

</script>

<template>

  <Header></Header>


  <h1 class="font-serif text-center text-2xl sm:text-3xl mt-6 sm:mt-1" data-aos="zoom-out" data-aos-delay="100">
   CPP Playgrounds
  </h1>

  <Typewriter />

  <!-- Banner -->

  <div
    class="flex sm:flex-row flex-col justify-around items-center w-full min-h-screen p-4 space-y-6 md:space-y-0 mt-20 md:mt-36">
    <canvas ref="canvasRef" class="w-1/2 sm:w-1/2 md:w-1/2 h-[300px] md:h-[60vh] bg-black"></canvas>
    <div class="w-full sm:w-1/3 md:w-1/3 text-xl md:text-2xl text-white" data-aos="fade-left" data-aos-delay="250">
      
      <br>
      <p>Unlock your game development potential with our comprehensive C++ guides and step-by-step walkthroughs. Whether
      you're a beginner or looking to refine your skills, our expertly crafted tutorials cover everything from graphics
      and game loops to physics engines and AI logic. Learn how to build powerful, high-performance games using C++, the
      industry-standard language behind many of today’s biggest titles. With real-world examples, source code snippets,
      and hands-on projects, we make it easy for you to master the art of game development. Start building your dream
      game today — no experience needed!
      </p>
    </div>
  </div>

  <Slider></Slider>

   <div class="relative z-10 text-center mt-12 mb-3 text-sm">
      &copy; 2025 Cpp Playgrounds. All rights reserved.
    </div>

</template>