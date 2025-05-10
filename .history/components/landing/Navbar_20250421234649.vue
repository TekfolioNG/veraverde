<script setup>
import { ref } from 'vue';

const menuitems = [
  { title: "WHO WE ARE", path: "/who-we-are" },
  { title: "WHAT WE DO", path: "/what-we-do" },
  { title: "PROJECTS", path: "/projects" },
  { title: "SERVICES", path: "/services" },
  { title: "CAREERS", path: "/careers" },
  { title: "CONTACT", path: "/contact" },
];

const open = ref(false);
</script>

<template>
  <div class="fixed w-full z-50 top-0 backdrop-blur-sm bg-white/80">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex justify-between items-center py-3">
        <!-- Logo -->
        <a href="/" class="flex-shrink-0">
          <img src="~/assets/img/PPIL Logo.svg" alt="PPIL Logo" class="h-14 md:h-16" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
          <div v-for="(item, index) in menuitems" :key="item.title" class="flex items-center">
            <a :href="item.path"
              class="px-3 py-2 text-xs lg:text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-primary transition-colors">
              {{ item.title }}
            </a>
            <span v-if="index !== menuitems.length - 1" class="text-gray-300 text-sm">|</span>
          </div>
        </nav>

        <!-- Desktop Buttons -->
        <div class="hidden md:flex items-center space-x-3">
          <NuxtLink to="/contact"
            class="px-4 py-2 bg-yellow text-black text-xs lg:text-sm font-bold uppercase hover:bg-yellow-500 transition-colors">
            Get in Touch
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="open = !open" class="text-gray-900 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-show="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-show="open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>

      <!-- Mobile Menu -->
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-show="open" class="md:hidden bg-white/90 backdrop-blur-md rounded-lg shadow-lg mt-2 py-2">
          <div v-for="item in menuitems" :key="item.title" class="block">
            <a :href="item.path" class="block px-4 py-3 text-sm font-bold uppercase text-gray-900 hover:bg-gray-100">
              {{ item.title }}
            </a>
          </div>
          <div class="px-4 py-3">
            <NuxtLink to="/contact"
              class="block w-full text-center px-4 py-2 bg-yellow text-black text-sm font-bold uppercase hover:bg-yellow-500">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Custom transitions for smoother effects */
.router-link-active {
  @apply text-primary;
}
</style>