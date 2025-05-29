<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

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
  { title: "HOME", path: "/", hasDropdown: false },
  { title: "WHO WE ARE", path: "/who-we-are", hasDropdown: false },
  { title: "WHAT WE DO", path: "/what-we-do", hasDropdown: false },
  { title: "OUR WORK", path: "/our-work", hasDropdown: false },
  { title: "OUR TEAM", path: "/our-team", hasDropdown: false },
  { title: "CONTACT US", path: "/contact", hasDropdown: false },
];

const open = ref(false);
const scrolled = ref(false);

// Add scroll event listener to detect scrolling
const handleScroll = () => {
  scrolled.value = window.scrollY > 20; // Change background after scrolling 20px
};

// Add and remove event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<script setup>
// (Your existing script setup remains the same)
</script>

<script setup>
// (Your existing script setup remains the same)
</script>

<template>
  <div class="fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300"
    :class="{ 'bg-white shadow-md': scrolled && !isDark, 'bg-gray-900 shadow-md': scrolled && isDark }">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Changed py-1 to py-0 to reduce bottom padding -->
      <header class="flex items-center justify-between py-0">
        <!-- Logo section with increased size -->
        <NuxtLink to="/" class="inline-block">
          <img src="~/assets/img/Xstrato-logo.png" alt="XSTRATO Logo" class="h-32 md:h-36 drop-shadow-lg" />
        </NuxtLink>

        <!-- Desktop Navigation - center fixed with reduced height -->
        <nav class="hidden md:block fixed-nav">
          <ul class="flex space-x-6 lg:space-x-8">
            <li v-for="item in menuitems" :key="item.title">
              <NuxtLink :to="item.path"
                class="text-sm lg:text-base transition-colors duration-200 flex items-center whitespace-nowrap font-medium"
                :class="{
                  'text-black': (!isDark && scrolled),
                  'text-white': (!isDark && !scrolled) || (isDark && !scrolled) || (isDark && scrolled),
                  'hover:text-[#335FA8]': true
                }">
                {{ item.title }}
                <span v-if="item.hasDropdown" class="ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
                    :class="{
                      'text-black': (!isDark && scrolled),
                      'text-white': (!isDark && !scrolled) || (isDark && scrolled) || (isDark && !scrolled)
                    }">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- (Rest of your template remains the same) -->
      </header>

      <!-- Mobile Menu with fixed text colors -->
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-show="open" class="md:hidden mt-2 py-2 rounded-lg shadow-lg"
          :class="{ 'bg-white/95': !isDark, 'bg-gray-900/95': isDark }">
          <div v-for="item in menuitems" :key="item.title" class="block">
            <NuxtLink :to="item.path" class="block px-4 py-3 text-sm font-medium flex justify-between items-center"
              :class="{
                'text-gray-900 hover:text-[#335FA8]': !isDark,  < !--Changed hover color to #335FA8-- >
                  'text-gray-100 hover:text-[#335FA8]': isDark < !--Changed hover color to #335FA8-- >
              }" @click="open = false">
              {{ item.title }}
              <span v-if="item.hasDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" :class="{
                  'text-gray-900': !isDark,
                  'text-gray-100': isDark
                }">
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

<style scoped>
/* Fixed navigation that doesn't move on scroll */
.fixed-nav {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 51;
  margin-top: -1rem;
}

/* Active link */
:deep(.router-link-active) {
  color: #E6A619 !important;
  font-weight: 600;
}

.bg-white\/95 a.router-link-active,
.bg-gray-900\/95 a.router-link-active {
  color: #E6A619 !important;
}

/* Transitions */
a,
button {
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Override Tailwind classes for pure black */
.text-black {
  color: #000000 !important;
}

/* Ensure mobile menu contrast */
@media (max-width: 767px) {
  .bg-white\/95 a {
    color: #111827 !important;
    /* Almost black for contrast */
  }

  .bg-gray-900\/95 a {
    color: #f3f4f6 !important;
    /* Light gray for contrast */
  }
}
</style>