<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from "../components/Header.vue"
import blogs from '/src/assets/projects.js'  // adjust path accordingly
import projects from '@/assets/projects'

// Access current route
const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug)

// Find blog by slug (including related)
function findBlogBySlug(slug) {
  for (const blog of blogs) {
    // Match main blog slug
    if (blog.slug === slug) return blog;

    // Match related
    const matchRelated = blog.related?.find(r => r.slug === slug);
    if (matchRelated) return matchRelated;

    // ✅ Match customReadMore
    const matchCustom = blog.customReadMore?.find(r => r.slug === slug);
    if (matchCustom) return matchCustom;
  }

  return null;
}


// Reactive blog reference
const blog = computed(() => findBlogBySlug(slug.value))

// For SPA-style navigation from raw HTML content
const htmlContainer = ref(null)

onMounted(() => {
  if (htmlContainer.value) {
    htmlContainer.value.addEventListener('click', (e) => {
      const target = e.target.closest('[data-router-link]')
      if (target) {
        e.preventDefault()
        const route = target.getAttribute('data-router-link')
        if (route) {
          router.push(route)
        }
      }
    })
  }
})

const moreBlogs = computed(() =>
  blogs.filter(b => b.slug !== blog.value?.slug).slice(0, 3) // show 3 other posts
)

</script>

<template>
  <Header></Header>

  <div v-if="blog" class="">
    <h1 class="text-center text-xl sm:text-3xl mt-8 px-4">{{ blog.title }}</h1>

    <div class="mt-10 w-1/2 mx-auto px-4 sm:px-6 lg:px-8">
      <img :src="blog.image" alt="blog-img" class="mt-4 w-full h-auto rounded-lg shadow-lg"
        style="max-height: 400px;" />
    </div>

    <div class="text-lg w-1/2 mx-auto" v-html="blog.content" ref="htmlContainer"></div>
  </div>
  <div v-else class="text-center py-24 text-2xl">
    Blog not found.
  </div>

  <!-- Custom Read More if available -->
<div v-if="blog?.customReadMore?.length" class="mt-20 border-t border-white/20 pt-10">
  <h2 class="text-2xl font-semibold text-white text-center mb-6">You Might Also Like</h2>

  <div class="space-y-8 max-w-3xl mx-auto px-4">
    <div
      v-for="more in blog.customReadMore"
      :key="more.slug"
      class="bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
      @click="router.push({ name: 'BlogPage', params: { slug: more.slug } })"
    >
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <img
          :src="more.image"
          alt="blog image"
          class="w-full sm:w-36 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 class="text-lg font-bold text-white">{{ more.title }}</h3>
          <p class="text-sm text-white/80 mt-1 line-clamp-2">
            {{ more.excerpt }}
          </p>
          <button class="mt-2 px-3 py-1 bg-indigo-600 text-sm text-white rounded hover:bg-indigo-700">
            Read More →
          </button>
        </div>
      </div>
    </div>
  </div>
</div>



  <!-- Read More Section -->
<div class="mt-20 border-t border-white/20 pt-10">
  <h2 class="text-2xl font-semibold text-white text-center mb-6">Read More</h2>

  <div class="space-y-8 max-w-3xl mx-auto px-4">
    <div
      v-for="more in moreBlogs"
      :key="more.slug"
      class="bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
      @click="router.push({ name: 'BlogPage', params: { slug: more.slug } })"
    >
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <img
          :src="more.image"
          alt="blog image"
          class="w-full sm:w-36 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 class="text-lg font-bold text-white">{{ more.title }}</h3>
          <p class="text-sm text-white/80 mt-1">{{ more.excerpt }}</p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
