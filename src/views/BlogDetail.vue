<template>
  <div class="max-w-3xl mx-auto p-4 mt-24 text-white">
    <h1 class="text-3xl font-bold mb-4">{{ blog?.title }}</h1>
    <img :src="blog?.image" alt="" class="w-full rounded-xl mb-4" />
    <p class="text-lg">{{ blog?.description }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import blogs from '@/data/blogs.js';

const route = useRoute();
const blog = blogs.find(b => b.slug === route.params.slug);
</script>
