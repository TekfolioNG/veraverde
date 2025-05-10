<script setup>
import { ref } from 'vue';

const menuitems = [
  { title: "WHO WE ARE", path: "/who-we-are" },
  { title: "HOW WE WORK", path: "/how-we-work" },
  { title: "HOW TO HELP", path: "/how-to-help" },
  { title: "IDEAS BOX", path: "/ideas-box" },
];

const open = ref(false); // For mobile menu toggle
</script>

<template>
  <div class="absolute w-full z-20 top-0">
    <LandingContainer>
      <header class="flex flex-col lg:flex-row justify-between items-center py-5">
        <div class="flex w-full lg:w-auto items-center justify-between">
          <!-- Logo -->
          <a href="/" class="text-lg">
            <img src="~/assets/img/PPIL Logo.svg" alt="PPIL-Logo" class="h-20" />
          </a>
          <!-- Mobile Menu Toggle -->
          <div class="block lg:hidden">
            <button @click="open = !open" class="text-white">
              <svg fill="currentColor" class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path v-show="open" fill-rule="evenodd" clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z">
                </path>
                <path v-show="!open" fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Navbar Menu Items -->
        <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ block: open, hidden: !open }">
          <ul
            class="flex flex-col lg:flex-row lg:gap-3 bg-white/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-2 lg:p-0 rounded-lg">
            <li v-for="(item, index) of menuitems" :key="item.title" class="flex items-center">
              <a :href="item.path"
                class="flex lg:px-3 py-2 font-bold text-black lg:text-white hover:text-gray-700 lg:hover:text-gray-300">
                {{ item.title }}
              </a>
              <span v-if="index !== menuitems.length - 1" class="text-gray-300">|</span>
            </li>
          </ul>
        </nav>
        <!-- Desktop: Buttons Section -->
        <div class="hidden lg:flex flex-col gap-2">
          <!-- CONTACT US -->
          <div class="flex items-center gap-4 ml-4">
            <a href="/contact-us" class="text-gray-300 hover:text-gray-200 ml-auto">CONTACT US</a>
          </div>
        </div>
        <!-- Mobile: Buttons Section -->
        <div class="lg:hidden flex flex-col gap-4 mt-4 bg-white/0 backdrop-blur-sm p-4 rounded-lg w-full text-center"
          v-if="open">

          <!-- Buttons -->
          <div class="flex justify-center gap-2">
            <!-- DONATE Button -->
            <NuxtLink to="/how-to-help"
              class="bg-[#901F61] text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-[#A82C6F] text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd" />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
              DONATE
            </NuxtLink>
            <!-- SHARE IDEA Button -->
            <NuxtLink to="/ideas-box"
              class="bg-emerald-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-emerald-800 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clip-rule="evenodd" />
              </svg>
              SHARE IDEA
            </NuxtLink>
          </div>
        </div>
      </header>
    </LandingContainer>
  </div>
</template>

<style scoped>
/* Add any custom styles here if needed */
</style>