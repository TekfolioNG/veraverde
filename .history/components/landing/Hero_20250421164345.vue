<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Slides wrapper -->
    <div class="absolute inset-0 z-0">
      <transition-group name="fade" tag="div">
        <img v-for="(image, index) in images" :key="index" v-show="currentSlide === index" :src="image"
          alt="PPIL Project Image"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000" />
      </transition-group>
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50 z-10" />
    </div>

    <!-- Content overlay -->
    <div class="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
      <h1 class="text-4xl md:text-6xl font-bold font-hero tracking-wide leading-tight">
        Smart Infrastructure. Premium Execution.
      </h1>
      <p class="mt-4 max-w-2xl text-lg md:text-xl font-light text-gray-100">
        We design, build, and maintain high-impact projects — combining deep technical know-how
        with a future-ready mindset for real results.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        <NuxtLink to="/projects" class="ui-button bg-ppil-yellow text-black hover:bg-yellow-400 transition">
          View Projects
        </NuxtLink>
        <NuxtLink to="/contact"
          class="ui-button border border-white text-white hover:bg-white hover:text-black transition">
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const images = [
  '/assets/img/PPIL1.png',
  '/assets/img/PPIL3.jpg',
  '/assets/img/PPIL2.jpg',
]

const currentSlide = ref(0)

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % images.length
  }, 6000) // 6-second autoplay
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
