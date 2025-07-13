<template>
  <footer class="relative bg-gray-900 text-white pt-16 pb-8 px-4 overflow-hidden">
    <!-- Glowing Background -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 blur-3xl opacity-20 w-[500px] h-[500px] bg-purple-500 rounded-full z-0"></div>

    <!-- CTA Section -->
    <div class="relative z-10 max-w-5xl mx-auto text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Build Better Games with C++</h2>
      <p class="text-gray-300 mb-6">Join our newsletter to get exclusive guides, tools, and game-dev tips each week.</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          class="px-4 py-3 rounded-lg w-full sm:w-80 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
        />
        <button
          class="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-sm font-semibold shadow-md"
        >
          Subscribe
        </button>
      </div>
    </div>

    <!-- Footer Content -->
    <div class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm border-t border-gray-800 pt-10">
      <!-- Column 1 -->
      <div>
        <h4 class="text-white font-semibold mb-4">Product</h4>
        <ul class="space-y-2 text-gray-400">
          <li><a href="#">Walkthroughs</a></li>
          <li><a href="#">Tutorials</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Source Code</a></li>
        </ul>
      </div>

      <!-- Column 2 -->
      <div>
        <h4 class="text-white font-semibold mb-4">Resources</h4>
        <ul class="space-y-2 text-gray-400">
          <li><a href="#">Docs</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div>
        <h4 class="text-white font-semibold mb-4">Company</h4>
        <ul class="space-y-2 text-gray-400">
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <!-- Column 4: Socials -->
      <div>
        <h4 class="text-white font-semibold mb-4">Follow Us</h4>
        <div class="flex gap-4 text-xl">
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-discord"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="relative z-10 text-center text-gray-500 mt-12 text-xs">
      &copy; 2025 CodeQuest Games. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Animate footer on load
  gsap.from('footer', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  })

  // Animate social icons on hover
  const icons = document.querySelectorAll('.social-icon')
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, { y: -5, scale: 1.1, duration: 0.2, ease: 'power1.out' })
    })
    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, { y: 0, scale: 1, duration: 0.2, ease: 'power1.out' })
    })
  })
})
</script>
