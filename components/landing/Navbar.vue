<script setup>
const menuitems = [
  {

    title: "Home",
    path: "/",
  },
  {
    
    title: "Our Services",
    path: "/our-services",
  },
  {
    title: "Our Products",
    path: "/our-products",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

const open = ref(false); // For mobile menu toggle
const showSearch = ref(false); // For search field toggle
</script>

<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <!-- Updated Logo -->
        <a href="/" class="text-lg">
          <img src="~/assets/img/Petabiz_logo.png" alt="Petabiz Nigeria" class="h-10" />
        </a>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-gray-800">
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
      <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ block: open, hidden: !open }">
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems" :key="item.title">
            <a :href="item.path" class="flex lg:px-3 py-2 text-gray-900 hover:text-[gray-1200]">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
      <!-- Search Icon and Search Field -->
      <div class="hidden lg:flex items-center gap-4">
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
            class="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
            <input type="text" placeholder="Search..."
              class="w-full px-3 py-2 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#336699]" />
          </div>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>