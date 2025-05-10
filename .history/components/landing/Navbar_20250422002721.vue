<script setup>
import { ref, computed } from 'vue';

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  }
});

// Updated menu items with dropdown indicators
const menuitems = [
  { title: "Who We Are", path: "/who-we-are", hasDropdown: false },
  { title: "Our Services", path: "/what-we-do", hasDropdown: true },
  { title: "Our Work", path: "/projects", hasDropdown: false },
  { title: "Sectors", path: "/services", hasDropdown: true },
  { title: "Why PPIL", path: "/careers", hasDropdown: false },
  { title: "Contact Us", path: "/contact", hasDropdown: false },
];

const open = ref(false);
</script>

<template>
  <div class="fixed w-full z-50 top-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex justify-between items-center py-4">
        <!-- Logo with subtle background -->
        <a href="/" class="flex-shrink-0">
          <div class="bg-black/20 p-1 rounded-lg">
            <img src="~/assets/img/PPIL Logo.svg" alt="PPIL Logo" class="h-16 md:h-20" :class="{ 'invert': isDark }" />
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center">
          <div v-for="item in menuitems" :key="item.title" class="flex items-center">
            <NuxtLink :to="item.path" class="px-4 py-2 text-sm lg:text-base font-medium"
              :class="isDark ? 'text-white hover:text-primary' : 'text-white hover:text-primary'">
              {{ item.title }}
              <span v-if="item.hasDropdown" class="ml-1 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </nav>

        <!-- Color Mode Toggle -->
        <div class="hidden md:flex items-center ml-4">
          <ClientOnly v-if="!colorMode?.forced">
            <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="neutral" variant="ghost"
              @click="isDark = !isDark" class="text-white" />

            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <!-- Color Mode Toggle Mobile -->
          <ClientOnly v-if="!colorMode?.forced" class="mr-2">
            <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="neutral" variant="ghost" size="sm"
              @click="isDark = !isDark" class="text-white" />

            <template #fallback>
              <div class="size-6" />
            </template>
          </ClientOnly>

          <!-- Hamburger Menu -->
          <button @click="open = !open" class="text-white focus:outline-none">
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
        <div v-show="open" class="md:hidden bg-black/80 rounded-lg shadow-lg mt-2 py-2">
          <div v-for="item in menuitems" :key="item.title" class="block">
            <NuxtLink :to="item.path"
              class="block px-4 py-3 text-sm font-medium text-white hover:text-primary flex justify-between"
              @click="open = false">
              {{ item.title }}
              <span v-if="item.hasDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>