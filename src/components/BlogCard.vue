<!-- <template>
  <div class="flex flex-col w-full border-4 border-emerald-500 rounded-2xl p-5">
    <router-link :to="`/blog/${post.slug}`">
      <p class="mb-6 cursor-pointer font-bold">
        {{ post.title }}
      </p>
    </router-link>
    <router-link :to="`/blog/${post.slug}`">
      <img
        :src="post.image"
        alt="Blog image"
        loading="lazy"
        class="w-full object-cover rounded-3xl hover:brightness-75"
      />
    </router-link>
    <p class="mt-2 sm:mt-1">
      {{ post.description }}
    </p>
    <router-link :to="`/blog/${post.slug}`">
      <button
        class="relative bg-gradient-to-b from-cyan-300 to-emerald-500 px-6 sm:px-10 py-2 sm:py-3 rounded-2xl mt-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6 absolute left-2" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        Read More
      </button>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  post: Object
});
</script> -->
