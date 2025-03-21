<script setup>
import { ref } from 'vue';

const menuitems = [
  { title: "WHO WE ARE", path: "/who-we-are" },
  { title: "HOW WE WORK", path: "/how-we-work" },
  { title: "WHERE WE WORK", path: "/where-we-work" },
  { title: "HOW TO HELP", path: "/how-to-help" },
];

const open = ref(false); // For mobile menu toggle
const showSearch = ref(false); // For search field toggle
</script>

<template>
  <div class="absolute w-full z-20 top-0">
    <LandingContainer>
      <header class="flex flex-col lg:flex-row justify-between items-center py-5">
        <div class="flex w-full lg:w-auto items-center justify-between">
          <!-- Logo -->
          <a href="/" class="text-lg">
            <img src="~/assets/img/Petabiz_logo.png" alt="Petabiz Nigeria" class="h-10" />
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
                class="flex lg:px-3 py-2 font-light text-black lg:text-white hover:text-gray-700 lg:hover:text-gray-300">
                {{ item.title }}
              </a>
              <span v-if="index !== menuitems.length - 1" class="text-gray-300">|</span>
            </li>
          </ul>
        </nav>
        <!-- Desktop: Search and Buttons Section -->
        <div class="hidden lg:flex flex-col gap-2">
          <!-- CONTACT US and Search Icons -->
          <div class="flex items-center gap-4 ml-4">
            <a href="/contact-us" class="text-gray-300 hover:text-gray-200 ml-auto">CONTACT US</a>
            <div class="flex items-center gap-2">
              <span class="text-gray-300">|</span>
              <div class="relative">
                <!-- Search Icon -->
                <button @click="showSearch = !showSearch" class="text-gray-300 hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <!-- Search Field -->
                <div v-if="showSearch"
                  class="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50">
                  <input type="text" placeholder="Search..."
                    class="w-full px-3 py-2 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#901F61]" />
                </div>
              </div>
            </div>
          </div>
          <!-- Buttons -->
          <div class="flex gap-2">
            <NuxtLink to="/donate"
              class="bg-[#901F61] text-white px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-[#A82C6F] text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd" />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
              SUPPORT A PROJECT
            </NuxtLink>
          </div>
        </div>
        <!-- Mobile: Search and Buttons Section -->
        <div class="lg:hidden flex flex-col gap-4 mt-4 bg-white/0 backdrop-blur-sm p-4 rounded-lg w-full text-center"
          v-if="open">
          <!-- CONTACT US and Search Icons -->
          <div class="flex items-center justify-center gap-4">
            <a href="/contact-us" class="text-gray-600 hover:text-gray-800">CONTACT US</a>
            <div class="flex items-center gap-2">
              <span class="text-gray-400">|</span>
              <div class="relative">
                <!-- Search Icon -->
                <button @click="showSearch = !showSearch" class="text-gray-600 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <!-- Search Field -->
                <div v-if="showSearch"
                  class="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50">
                  <input type="text" placeholder="Search..."
                    class="w-full px-3 py-2 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#901F61]" />
                </div>
              </div>
            </div>
          </div>
          <!-- Buttons -->
          <div class="flex justify-center gap-2">
            <NuxtLink to="/donate"
              class="bg-[#901F61] text-white px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-[#A82C6F] text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd" />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
              SUPPORT A PROJECT
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