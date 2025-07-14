<script setup>
import { onMounted, ref } from 'vue';

// Preload images for faster loading
const preloadImages = () => {
  const imageUrls = [
    '/img/climate-smart-agric.jpg',
    '/img/carbon-sequestration.jpg',
    '/img/ecofuel-briquettes.jpg'
  ];

  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

onMounted(() => {
  preloadImages();
});

const menuitems = [
  { title: "HOME", path: "/", hasDropdown: false },
  { title: "ABOUT US", path: "/about", hasDropdown: false },
  {
    title: "OUR WORK",
    path: "/#",
    hasDropdown: true,
    subitems: [

      {
        title: "Vera Verde Ecofuel",
        path: "/ecofuel-briquettes",
        description: "Clean energy solutions from organic waste",
        image: "/img/ecofuel-briquettes.jpg"
      },
      {
        title: "Climate-Smart Agriculture",
        path: "/climate-smart-agriculture",
        description: "Sustainable farming practices for a greener future",
        image: "/img/climate-smart-agric.jpg"
      },
      {
        title: "Carbon Sequestration",
        path: "/carbon-sequestration",
        description: "Capturing carbon to combat climate change",
        image: "/img/carbon-sequestration.jpg"
      }

    ]
  },
  { title: "NEWS & EVENTS", path: "/news-events", hasDropdown: false },
  { title: "CONTACT US", path: "/contact", hasDropdown: false },
];

const open = ref(false);
const workDropdownOpen = ref(false);
const mobileWorkDropdownOpen = ref(false);
</script>

<template>
  <div class="absolute w-full z-50 top-0 left-0 right-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center justify-between py-8">
        <!-- Logo section -->
        <NuxtLink to="/" class="inline-block">
          <img src="/img/veaverde-logo.png" alt="VeraVerde Logo" class="h-18 md:h-24 drop-shadow-lg" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center">
          <!-- Centered Nav Items -->
          <nav class="absolute left-1/2 transform -translate-x-1/2">
            <ul class="flex space-x-6 lg:space-x-8">
              <li v-for="item in menuitems" :key="item.title" class="relative">
                <NuxtLink :to="item.path" @mouseenter="item.hasDropdown ? workDropdownOpen = true : null"
                  @mouseleave="item.hasDropdown ? workDropdownOpen = false : null" :class="[
                    'text-sm lg:text-base transition-colors duration-200 flex items-center whitespace-nowrap font-medium text-white hover:text-[#99cc33]',
                    { 'router-link-exact-active': false }
                  ]">
                  {{ item.title }}
                  <span v-if="item.hasDropdown" class="ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </NuxtLink>

                <!-- Enhanced Our Work Dropdown -->
                <div v-if="item.hasDropdown && workDropdownOpen" @mouseenter="workDropdownOpen = true"
                  @mouseleave="workDropdownOpen = false"
                  class="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-screen max-w-6xl bg-black/50 backdrop-blur-sm rounded-b-lg shadow-xl z-50 p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <NuxtLink v-for="subitem in item.subitems" :key="subitem.title" :to="subitem.path"
                      class="group hover:bg-white/10 transition-all duration-300 p-4 rounded-lg flex items-center space-x-4">
                      <!-- Smaller image container positioned to the left -->
                      <div class="flex-shrink-0 w-16 h-16 bg-gray-700 rounded-lg overflow-hidden">
                        <img :src="subitem.image" :alt="subitem.title" @error="$event.target.style.display = 'none'"
                          @load="$event.target.style.display = 'block'"
                          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy" />
                      </div>
                      <!-- Text content -->
                      <div class="flex-grow">
                        <h3 class="text-lg font-bold text-white mb-1">{{ subitem.title }}</h3>
                        <p class="text-gray-300 text-sm">{{ subitem.description }}</p>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <!-- Partner with Us Button -->
          <NuxtLink to="/partner"
            class="ml-12 px-6 py-3 rounded-md text-sm lg:text-base font-medium text-white bg-[#406112] hover:bg-[#a86414] transition-colors duration-200 whitespace-nowrap">
            Partner with Us
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="open = !open" class="focus:outline-none text-white">
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
        <div v-show="open" class="md:hidden mt-2 py-2 rounded-lg shadow-lg bg-white/95">
          <div v-for="item in menuitems" :key="item.title" class="block">
            <!-- Main menu item -->
            <div v-if="item.hasDropdown" class="block">
              <button @click="mobileWorkDropdownOpen = !mobileWorkDropdownOpen"
                class="w-full px-4 py-3 text-sm font-medium flex justify-between items-center text-gray-900 hover:text-[#E6A619] text-left">
                {{ item.title }}
                <svg xmlns="http://www.w3.org/2000/svg"
                  :class="['h-4 w-4 text-gray-900 transition-transform duration-200', mobileWorkDropdownOpen ? 'rotate-90' : '']"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </button>
              <!-- Mobile Dropdown Items with distinct background -->
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96" leave-active-class="transition ease-in duration-200"
                leave-from-class="opacity-100 max-h-96" leave-to-class="opacity-0 max-h-0">
                <div v-show="mobileWorkDropdownOpen" class="overflow-hidden">
                  <div class="bg-black/90 backdrop-blur-sm rounded-lg mx-4 my-2 border border-gray-700">
                    <NuxtLink v-for="subitem in item.subitems" :key="subitem.title" :to="subitem.path"
                      class="block px-4 py-3 text-sm text-white hover:text-[#99cc33] hover:bg-white/10 transition-all duration-200 border-b border-gray-700 last:border-0"
                      @click="open = false; mobileWorkDropdownOpen = false">
                      <div class="font-medium">{{ subitem.title }}</div>
                      <div class="text-xs text-gray-300 mt-1">{{ subitem.description }}</div>
                    </NuxtLink>
                  </div>
                </div>
              </transition>
            </div>
            <!-- Regular menu items without dropdown -->
            <NuxtLink v-else :to="item.path"
              class="block px-4 py-3 text-sm font-medium text-gray-900 hover:text-[#E6A619] transition-colors duration-200"
              @click="open = false">
              {{ item.title }}
            </NuxtLink>
          </div>
          <!-- Mobile Partner Button - Centered with proper hover -->
          <div class="px-4 mt-4">
            <NuxtLink to="/partner"
              class="block w-full text-center px-4 py-3 rounded-md text-sm font-medium text-white bg-[#406112] hover:bg-[#a86414] transition-all duration-200 shadow-md hover:shadow-lg"
              @click="open = false">
              Partner with Us
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Active link - only for exact matches */
:deep(.router-link-exact-active) {
  color: #99cc33 !important;
  font-weight: 600;
}

/* Prevent non-exact active links from getting the active color */
:deep(.router-link-active:not(.router-link-exact-active)) {
  color: inherit;
  font-weight: inherit;
}

/* Transitions */
a,
button {
  transition-property: color, background-color, border-color, transform, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile dropdown animation */
.max-h-0 {
  max-height: 0;
}

.max-h-96 {
  max-height: 24rem;
}
</style>