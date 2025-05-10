<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Slides wrapper -->
    <div class="absolute inset-0 z-0">
      <transition-group name="slide" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-full h-full transition-opacity duration-1000">
          <img :src="slide.image" :alt="slide.alt" class="absolute inset-0 w-full h-full object-cover" />
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      </transition-group>
    </div>

    <!-- Content overlay -->
    <div class="relative z-20 container mx-auto h-full flex flex-col px-6">
      <div class="flex flex-col mt-auto mb-24 md:mb-32 max-w-3xl">
        <h1 class="font-heading text-5xl md:text-6xl lg:text-7xl text-white tracking-wider-custom leading-tight">
          {{ slides[currentSlide].title }}
        </h1>
        <p class="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl font-light leading-relaxed">
          {{ slides[currentSlide].description }}
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <NuxtLink :to="slides[currentSlide].primaryLink"
            class="px-6 py-3 bg-yellow text-black hover:bg-yellow/90 font-medium transition-colors duration-300 text-lg">
            {{ slides[currentSlide].primaryText }}
          </NuxtLink>
          <NuxtLink :to="slides[currentSlide].secondaryLink"
            class="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium text-lg">
            {{ slides[currentSlide].secondaryText }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Slide navigation -->
    <div class="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
      <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
        class="w-12 h-2 transition-all duration-300"
        :class="currentSlide === index ? 'bg-yellow' : 'bg-white/40 hover:bg-white/60'">
      </button>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
      <div class="bg-yellow h-full transition-all duration-100" :style="{ width: `${progress}%` }"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, computed } from 'vue'

const SLIDE_DURATION = 8000; // 8 seconds per slide
const slides = [
  {
    image: 'assets/img/PPIL1.png',
    alt: 'PPIL Construction Site',
    title: 'Smart Infrastructure. Premium Execution.',
    description: 'We design, build, and maintain high-impact projects — combining deep technical know-how with a future-ready mindset for real results.',
    primaryLink: '/projects',
    primaryText: 'View Projects',
    secondaryLink: '/contact',
    secondaryText: 'Contact Us'
  },
  {
    image: 'assets/img/PPIL3.jpg',
    alt: 'PPIL Infrastructure Project',
    title: 'Building Nigeria\'s Future',
    description: 'From roads to bridges and commercial structures, our expertise delivers infrastructure that stands the test of time.',
    primaryLink: '/about',
    primaryText: 'About Us',
    secondaryLink: '/projects',
    secondaryText: 'Our Work'
  },
  {
    image: 'assets/img/PPIL2.jpg',
    alt: 'PPIL Commercial Building',
    title: 'Excellence in Construction',
    description: 'With over 15 years of industry experience, we bring unmatched quality to every project across Nigeria.',
    primaryLink: '/services',
    primaryText: 'Our Services',
    secondaryLink: '/contact',
    secondaryText: 'Get Started'
  }
]

const currentSlide = ref(0)
const progress = ref(0)
let timer = null
let progressTimer = null

const setSlide = (index) => {
  currentSlide.value = index
  resetProgress()
}

const resetProgress = () => {
  progress.value = 0
  if (progressTimer) {
    clearInterval(progressTimer)
  }

  progressTimer = setInterval(() => {
    progress.value += (100 / (SLIDE_DURATION / 100))
    if (progress.value >= 100) {
      progress.value = 0
    }
  }, 100)
}

onMounted(() => {
  // Start autoplay
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
    resetProgress()
  }, SLIDE_DURATION)

  // Initialize progress bar
  resetProgress()
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  if (progressTimer) clearInterval(progressTimer)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.slide-leave-to {
  opacity: 0;
}
</style>