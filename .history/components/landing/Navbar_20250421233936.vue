<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menuItems = [
  { title: "WHO WE ARE", path: "/who-we-are" },
  { title: "SERVICES", path: "/services" },
  { title: "SECTORS", path: "/sectors" },
  { title: "PROJECTS", path: "/projects" },
  { title: "CAREERS", path: "/careers" },
  { title: "CONTACT", path: "/contact" },
];

const open = ref(false); // For mobile menu toggle
const isScrolled = ref(false);

// Handle navbar transparency on scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="fixed w-full z-30" :class="{ 'bg-white/80 shadow-md': isScrolled, 'bg-transparent': !isScrolled }">
    <div class="container mx-auto">
      <header class="flex flex-col lg:flex-row justify-between items-center py-3">
        <div class="flex w-full lg:w-auto items-center justify-between px-4 lg:px-0">
          <!-- Logo -->
          <a href="/" class="text-lg">
            <img src="~/assets/img/PPIL Logo.svg" alt="PPIL-Logo" class="h-16" />
          </a>
          <!-- Mobile Menu Toggle -->
          <div class="block lg:hidden">
            <button @click="open = !open" class="text-gray-800" aria-label="Toggle menu">
              <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
          <ul class="flex flex-col lg:flex-row lg:items-center lg:gap-1 bg-white/90 lg:bg-transparent backdrop-blur-md 
                      lg:backdrop-blur-none p-4 lg:p-0 rounded-lg">
            <li v-for="(item, index) of menuItems" :key="item.title" class="flex items-center">
              <a :href="item.path"
                class="px-3 py-2 text-sm font-semibold text-black lg:text-gray-800 hover:text-yellow-500 transition-colors duration-200">
                {{ item.title }}
              </a>
              <span v-if="index !== menuItems.length - 1" class="hidden lg:block text-gray-300 text-xs">|</span>
            </li>

            <!-- Search Icon -->
            <li class="hidden lg:block">
              <a href="#" class="px-2 py-2 text-gray-800 hover:text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Desktop: Call to Action Button -->
        <div class="hidden lg:flex items-center">
          <a href="/contact"
            class="px-4 py-2 bg-yellow text-black text-sm font-medium hover:bg-transparent hover:border-yellow hover:text-black border-2 border-yellow transition-all duration-300">
            REQUEST A QUOTE
          </a>
        </div>

        <!-- Mobile: Additional Menu Items -->
        <div class="lg:hidden flex flex-col gap-3 mt-2 bg-white/95 backdrop-blur-md p-4 rounded-lg w-full" v-if="open">
          <a href="/search" class="flex items-center gap-2 text-black hover:text-yellow-500 text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            SEARCH
          </a>
          <a href="/contact"
            class="mt-2 px-4 py-2 bg-yellow text-black text-sm font-medium hover:bg-transparent hover:border-yellow hover:text-black border-2 border-yellow text-center transition-all duration-300">
            REQUEST A QUOTE
          </a>
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped>
/* Transparent navbar that becomes solid on scroll */
.fixed {
  transition: all 0.3s ease;
}

/* Make room for the fixed navbar */
:deep(body) {
  padding-top: 66px;
}
</style>