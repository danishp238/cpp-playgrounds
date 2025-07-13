<script setup>
import Header from '@/components/Header.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <Header></Header>
    <div class="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <!-- Header Section -->
        <div class="text-center mb-16">
            <h1
                class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 mb-6">
                🎮 From Player to Creator: My C++ Game Dev Journey
            </h1>
            <div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full"></div>
        </div>

        <!-- Image Placeholder - Add your image here -->
        <div class="mb-16 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-500">
            <img src="/images/about_us.jpeg" alt="Game development workspace" class="w-full h-auto object-cover">
        </div>

        <!-- Story Content -->
        <div class="space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p class="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500">
                <span class="text-3xl mr-2">👾</span> I still remember the first time a video game truly captivated me.
                It wasn't just the immersive worlds or thrilling gameplay—I became obsessed with understanding <em
                    class="font-semibold text-blue-600 dark:text-blue-400">how</em> these digital magic tricks worked.
                As a wide-eyed teenager, I'd tear through game files, stumbling upon mysterious <code
                    class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.cpp</code> extensions that might as well
                have been ancient hieroglyphics.
            </p>

            <p class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500">
                <span class="text-3xl mr-2">🔥</span> My early coding attempts were brutal. I'd stare at walls of C++
                syntax—templates that looked like algebraic nightmares, pointer errors that crashed my screen, and
                linker errors that haunted my dreams. But every small breakthrough felt like leveling up in real life.
                That first moving sprite? <span class="font-bold text-amber-600 dark:text-amber-400">Pure
                    euphoria</span>. My initial collision detection that actually worked? <span
                    class="font-bold text-amber-600 dark:text-amber-400">Better than any boss fight</span>.
            </p>

            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner">
                <h3 class="text-2xl font-bold mb-4 flex items-center">
                    <span class="text-3xl mr-3">💡</span> Through years of trial and error, I discovered:
                </h3>
                <ul class="space-y-4 pl-2">
                    <li class="flex items-start">
                        <span class="text-amber-500 mr-3">⚙️</span>
                        <span><strong class="text-gray-900 dark:text-white">Game code isn't about
                                perfection</strong>—it's about systems talking to each other</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-500 mr-3">🧠</span>
                        <span><strong class="text-gray-900 dark:text-white">The best learning happens when you're fixing
                                broken things</strong>, not just copying working examples</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-purple-500 mr-3">🚀</span>
                        <span><strong class="text-gray-900 dark:text-white">C++'s complexity is its
                                superpower</strong>—once you tame it, you can bend hardware to your will</span>
                    </li>
                </ul>
            </div>

            <p class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500">
                <span class="text-3xl mr-2">✨</span> This site is the mentor I wish I'd had. Every tutorial solves a
                problem I struggled with—from "why does my character clip through walls?" to "how do I make NPCs
                <em>think</em>?" The code snippets are battle-tested, the explanations assume zero knowledge (but
                respect your intelligence), and the projects build toward actual portfolio pieces.
            </p>

            <div
                class="text-center mt-16 px-6 py-8 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 class="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center">
                    <span class="mr-3">🎯</span> Ready to Level Up?
                </h3>
                <p class="text-xl mb-6">
                    Whether you're modding your first game or architecting an engine from scratch, I'm here to help you
                    skip the years of frustration.
                </p>
                <router-link :to="'/'">
                    <button
                    class="px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white font-bold rounded-full hover:shadow-lg transition-all hover:scale-105">
                    Start Learning Now →
                </button>
                </router-link>
                
            </div>
        </div>
    </div>
</template>