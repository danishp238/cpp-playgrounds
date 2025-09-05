<template>
  <section class="text-white px-4 py-12">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-8" data-aos="fade-up">
        Latest Project Walkthroughs
      </h2>

      <div class="relative overflow-hidden">
        <div ref="slider" class="flex space-x-6 w-full">
          <div v-for="(project, index) in projects" :key="project.id"
            class="min-w-[300px] md:min-w-[350px] bg-gray-800 rounded-2xl shadow-xl overflow-hidden group relative"
            data-aos="fade-up" :data-aos-delay="100 * index">
            <!-- Image with overlay -->
                <router-link :to="`/blogs/${project.slug}`">
              <div class="relative">
              <img :src="project.image" alt="Project Image"
                class="w-full h-68 object-cover transition duration-300 group-hover:blur-sm" />
              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end transition-all duration-300 group-hover:backdrop-blur-sm">
                <p class="text-lg text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </router-link>
            

            <!-- Text below image -->
            <div class="p-4">
              <!-- <a :href="project.slug"> -->
                <!-- <router-link :to="`${project.slug}`"> -->
                  <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                <!-- </router-link> -->
                  
              <!-- </a> -->
              
              <span class="text-xs text-gray-400">{{ project.date }}</span>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button @click="prev"
          class="absolute top-1/2 -translate-y-10 left-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10">
          ⬅
        </button>
        <button @click="next"
          class="absolute top-1/2 -translate-y-1/2 right-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10">
          ➡
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RouterLink } from 'vue-router'
import projectData from '@/assets/projects'

const projects = ref(projectData)


function getPerPage() {
  const width = window.innerWidth
  if (width < 640) return 1         // mobile
  if (width < 1024) return 2        // tablet
  return 3                          // desktop
}

const currentIndex = ref(0)
const perPage = ref(getPerPage())
const slider = ref(null)

const updatePerPage = () => {
  perPage.value = getPerPage()
  currentIndex.value = 0 // reset to start
}



// const visibleProjects = computed(() =>
//   projects.value.slice(currentIndex.value, currentIndex.value + perPage.value)
// )


const position = ref(0)

const updateSlider = () => {
  if (!slider.value) return
  const slideWidth = slider.value.children[0]?.offsetWidth || 0
  const gap = 24 // space-x-6

  // Animate the whole track
  gsap.to(slider.value, {
    x: -position.value * (slideWidth + gap),
    duration: 0.6,
    ease: 'power3.inOut'
  })

  // Animate visible cards (fade + scale-up effect)
  const visibleCards = [...slider.value.children].slice(position.value, position.value + perPage.value)
  gsap.fromTo(
  visibleCards,
  { opacity: 0, rotationY: 45, y: 50 },
  { opacity: 1, rotationY: 0, y: 0, duration: 0.7, stagger: 0.1, ease: 'back.out(1.7)' }
)
}


const next = () => {
  if (position.value + perPage.value >= projects.value.length) {
    position.value = 0
  } else {
    position.value += perPage.value
  }
  updateSlider()
}

const prev = () => {
  if (position.value - perPage.value < 0) {
    position.value = Math.max(projects.value.length - perPage.value, 0)
  } else {
    position.value -= perPage.value
  }
  updateSlider()
}

onMounted(() => {
  AOS.init({ once: true }),
    window.addEventListener('resize', updatePerPage)

})

onUnmounted(() => {
  window.removeEventListener('resize', updatePerPage)
})


/*
UCC Grocery List

mangoes 250
peaches 70
lemons 60
arvi 100
garlic 30
ginger 30
onions 50
capsicum 30
sugar 175
porridge 210
breads 220
eggs 302
milks 170
rio biscuits 60
juice 50

*/

</script>
