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
  <div class="fixed w-full z-50 top-0 left-0 right-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex justify-between items-center py-3">
        <!-- Logo with high contrast background -->
        <a href="/"
          class="flex-shrink-0 bg-white/30 p-2 rounded-lg shadow-md backdrop-contrast-200 border border-white/20">
          <img src="~/assets/img/PPIL Logo.svg" alt="PPIL Logo" class="h-14 md:h-16" :class="{ 'invert': isDark }" />
        </a>

        <!-- Desktop Navigation - fixed position -->
        <nav class="hidden md:flex items-center fixed left-1/2 transform -translate-x-1/2">
          <div v-for="item in menuitems" :key="item.title" class="flex items-center">
            <NuxtLink :to="item.path"
              class="px-4 py-2 text-sm lg:text-base font-medium text-white hover:text-primary transition-colors duration-200 flex items-center"
              :class="{ 'text-gray-900': !isDark, 'text-white': isDark }">
              {{ item.title }}
              <span v-if="item.hasDropdown" class="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
                  :class="{ 'text-gray-900': !isDark, 'text-white': isDark }">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </nav>

        <!-- Color Mode Toggle with white sun icon -->
        <div class="hidden md:flex items-center ml-4">
          <ClientOnly v-if="!colorMode?.forced">
            <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="white" variant="ghost"
              :class="[isDark ? 'text-white' : 'text-gray-900', 'hover:text-primary']" @click="isDark = !isDark" />
            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <!-- Color Mode Toggle Mobile -->
          <ClientOnly v-if="!colorMode?.forced" class="mr-2">
            <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="white" variant="ghost" size="sm"
              :class="[isDark ? 'text-white' : 'text-gray-900', 'hover:text-primary']" @click="isDark = !isDark" />
            <template #fallback>
              <div class="size-6" />
            </template>
          </ClientOnly>

          <!-- Hamburger Menu -->
          <button @click="open = !open" class="focus:outline-none"
            :class="{ 'text-gray-900': !isDark, 'text-white': isDark }">
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
        <div v-show="open" class="md:hidden mt-2 py-2 rounded-lg shadow-lg"
          :class="{ 'bg-white/95': !isDark, 'bg-gray-900/95': isDark }">
          <div v-for="item in menuitems" :key="item.title" class="block">
            <NuxtLink :to="item.path" class="block px-4 py-3 text-sm font-medium flex justify-between"
              :class="{ 'text-gray-900 hover:text-primary': !isDark, 'text-white hover:text-yellow-400': isDark }"
              @click="open = false">
              {{ item.title }}
              <span v-if="item.hasDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
                  :class="{ 'text-gray-900': !isDark, 'text-white': isDark }">
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

<style lang="postcss">
/* Fixed navbar */
.fixed {
  position: fixed;
  will-change: transform;
}

/* Logo contrast */
.logo-container {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: contrast(2);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Center navigation */
nav.fixed {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}

/* Active link */
.router-link-active:not(.bg-yellow) {
  color: theme('colors.primary');
}

/* Transitions */
a,
button {
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>