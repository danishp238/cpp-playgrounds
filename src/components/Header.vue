<template>
    <header>
        <nav class="flex items-center justify-between">
            <div class="w-20 relative left-5 sm:left-5 sm:w-32">
                <router-link :to="'/'">
                    <img src="/images/logo.jpg"
                        class="cursor-pointer mt-4 rounded-full hover:scale-110 transition duration-150 ease-in-out"
                        alt="Logo">
                </router-link>
            </div>
            <div class="flex justify-between w-36 sm:w-42 relative right-6 sm:right-12">
                <router-link :to="'/about-cpp-playgrounds'">
                    <p class="cursor-pointer">About Us</p>
                </router-link>
                <router-link :to="'/contact-cpp-playgrounds'">
                    <p class="cursor-pointer">Contact</p>
                </router-link>
            </div>
        </nav>
    </header>
</template>
