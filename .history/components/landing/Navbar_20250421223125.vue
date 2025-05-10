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

        </div>
        <!-- Mobile: Buttons Section -->
        <div class="lg:hidden flex flex-col gap-4 mt-4 bg-white/0 backdrop-blur-sm p-4 rounded-lg w-full text-center"
          v-if="open">

        </div>
      </header>
    </LandingContainer>
  </div>
</template>

<style scoped>
/* Add any custom styles here if needed */
</style>