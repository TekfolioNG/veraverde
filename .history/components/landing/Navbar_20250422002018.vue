<script setup>
import { ref } from 'vue';

const menuitems = [
  { title: "Who We Are", path: "/who-we-are" },
  {
    title: "Our Services",
    path: "/services",
    dropdown: true
  },
  { title: "Our Work", path: "/projects" },
  {
    title: "Sectors",
    path: "/sectors",
    dropdown: true
  },
  { title: "Why PPIL", path: "/why-ppil" },
  { title: "Contact Us", path: "/contact" }
];

const open = ref(false);
const openSubmenus = ref({});

const toggleSubmenu = (index) => {
  openSubmenus.value[index] = !openSubmenus.value[index];
};
</script>

<template>
  <div class="fixed w-full z-50 top-0 backdrop-blur-sm bg-white/50 border-b border-gray-100/50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex justify-between items-center py-3">
        <!-- Logo - increased size -->
        <a href="/" class="flex-shrink-0">
          <img src="~/assets/img/PPIL Logo.svg" alt="PPIL Logo" class="h-14 md:h-16" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-4">
          <div v-for="(item, index) in menuitems" :key="item.title" class="relative group">
            <div class="flex items-center">
              <NuxtLink :to="item.path"
                class="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-colors duration-200">
                {{ item.title }}
              </NuxtLink>
              <span v-if="item.dropdown" class="ml-1">
                <UIcon name="i-heroicons-chevron-down-20-solid" class="w-4 h-4 text-gray-500" />
              </span>
            </div>

            <!-- Dropdown placeholder - add actual dropdown content here -->
            <div v-if="item.dropdown"
              class="absolute left-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-md shadow-lg py-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible border border-gray-100">
              <!-- Dropdown items would go here -->
              <div class="px-4 py-2 text-sm text-gray-700">Dropdown Item 1</div>
              <div class="px-4 py-2 text-sm text-gray-700">Dropdown Item 2</div>
            </div>
          </div>
        </nav>

        <!-- Color Mode Toggle -->
        <div class="hidden md:flex items-center ml-4">
          <ClientOnly>
            <ColorModeButton />
          </ClientOnly>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-4">
          <ClientOnly>
            <ColorModeButton />
          </ClientOnly>
          <button @click="open = !open" class="text-gray-800 focus:outline-none">
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
        <div v-show="open"
          class="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 py-2 border border-gray-100">
          <div v-for="(item, index) in menuitems" :key="item.title" class="block">
            <div v-if="item.dropdown" class="border-b border-gray-100/50">
              <button @click="toggleSubmenu(index)"
                class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50">
                <span>{{ item.title }}</span>
                <UIcon
                  :name="openSubmenus[index] ? 'i-heroicons-chevron-up-20-solid' : 'i-heroicons-chevron-down-20-solid'"
                  class="w-4 h-4 text-gray-500" />
              </button>
              <div v-show="openSubmenus[index]" class="pl-4 bg-gray-50/50">
                <!-- Mobile dropdown items would go here -->
                <NuxtLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dropdown Item 1
                </NuxtLink>
                <NuxtLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dropdown Item 2
                </NuxtLink>
              </div>
            </div>
            <NuxtLink v-else :to="item.path"
              class="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 border-b border-gray-100/50"
              @click="open = false">
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

