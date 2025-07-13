<script setup>
import Header from '@/components/Header.vue'
</script>

<template>

    <Header></Header>

  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          <span class="inline-block mr-3">👋</span> Let's Connect!
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Whether you're stuck on a bug, want to suggest improvements, or just geek out about game dev
        </p>
        <div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Main Content -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Card -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div class="p-8">
            <div class="flex items-center mb-6">
              <div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <span class="text-2xl">📬</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Shoot Us a Message</h2>
            </div>
            
            <div class="space-y-6">
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Found a bug in our code? Need advice on your project? Want mentorship or course recommendations?
              </p>
              
              <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                <p class="font-mono text-lg break-all text-blue-600 dark:text-blue-300">
                  programmingninja@proton.me
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  (We typically reply within 24 hours)
                </p>
              </div>
              
              <p class="text-gray-600 dark:text-gray-300">
                <span class="font-bold">Pro Tip:</span> Include "[GameDev]" in your subject line to skip the queue!
              </p>
            </div>
          </div>
        </div>

        <!-- Community Card -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div class="p-8">
            <div class="flex items-center mb-6">
              <div class="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                <span class="text-2xl">👨‍💻</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Join Community</h2>
            </div>
            
            <div class="space-y-6">
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Connect with other game developers, share projects, and get real-time help:
              </p>
              
              <div class="space-y-4">
                <a href="https://cppalliance.org/slack/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                  <span class="text-2xl mr-4">💬</span>
                  <div>
                    <h3 class="font-bold">C++ Slack/Discord</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Live chat with developers. Best for real-time help</p>
                  </div>
                </a>
                
                <a href="https://www.reddit.com/r/cpp/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                  <span class="text-2xl mr-4">🐦</span>
                  <div>
                    <h3 class="font-bold">r/cpp (Reddit)</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Best for  language updates, technical discussions</p>
                  </div>
                </a>
                
                <a href="https://stackoverflow.com/questions/tagged/c%252b%252b" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                  <span class="text-2xl mr-4">📱</span>
                  <div>
                    <h3 class="font-bold">Stack Overflow (C++ Tag)</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Code-specific questions</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fun Footer -->
      <div class="mt-16 text-center">
        <p class="text-white text-md font-extrabold">
          <span class="inline-block mr-2 text-xl font-extrabold">⚠️</span> 
          Warning: Contacting us about game dev may result in spontaneous coding sessions, 
          excessive coffee consumption, and unexpected friendships.
          <span class="inline-block ml-2">☕</span>
        </p>
      </div>
    </div>
  </div>
</template>