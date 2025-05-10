<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group :name="transitionName" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full transition-opacity duration-1000">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
      </transition-group>
    </div>

    <!-- Overlay content -->
    <div class="relative z-20 w-full h-full flex flex-col px-6 md:px-16 lg:px-24 xl:px-32">
      <div class="flex flex-col mt-auto mb-24 md:mb-32 lg:mb-40 max-w-3xl text-white">
        <transition name="fade" mode="out-in">
          <h1 key="title"
            class="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide leading-snug text-black drop-shadow-sm">
            {{ slides[currentSlide].title }}
          </h1>
        </transition>
        <transition name="fade" mode="out-in">
          <p key="desc" class="mt-4 text-base md:text-lg text-gray-100 max-w-xl font-light leading-relaxed">
            {{ slides[currentSlide].description }}
          </p>
        </transition>
        <div class="mt-6 flex flex-wrap gap-4">
          <NuxtLink :to="slides[currentSlide].primaryLink"
            class="px-6 py-3 bg-yellow text-black hover:bg-yellow-500 font-semibold transition-all duration-300 text-base transform hover:scale-105">
            {{ slides[currentSlide].primaryText }}
          </NuxtLink>
          <NuxtLink :to="slides[currentSlide].secondaryLink"
            class="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold text-base transform hover:scale-105">
            {{ slides[currentSlide].secondaryText }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Slide navigation -->
    <div class="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
      <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
        class="w-12 h-1.5 transition-all duration-300 rounded-full"
        :class="currentSlide === index ? 'bg-yellow' : 'bg-white/40 hover:bg-white/60'"
        :aria-label="`Go to slide ${index + 1}`" />
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
      <div class="bg-yellow h-full transition-all duration-300 ease-linear" :style="{ width: `${progress}%` }"></div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

import ppil1 from '/assets/img/PPIL1.png'
import ppil2 from '/assets/img/PPIL2.jpg'
import ppil3 from '/assets/img/PPIL3.jpg'

const SLIDE_DURATION = 8000
const slides = [
  {
    image: ppil1,
    alt: 'PPIL Construction Site',
    title: 'Smart Infrastructure. Premium Execution.',
    description: 'We design, build, and maintain high-impact projects — combining deep technical know-how with a future-ready mindset for real results.',
    primaryLink: '/about',
    primaryText: 'Who we are',
    secondaryLink: '/services',
    secondaryText: 'Our Services',
    transition: 'fade'
  },
  {
    image: ppil2,
    alt: 'Supervisor at project site',
    title: 'Engineering Projects. Building Relationships.',
    description: 'PPIL is your trusted partner for sustainable construction, project management, and maintenance, shaping environments that last generations.',
    primaryLink: '/sectors',
    primaryText: 'Sectors',
    secondaryLink: '/partners',
    secondaryText: 'Projects & Partners',
    transition: 'slide-up'
  },
  {
    image: ppil3,
    alt: 'Active construction site',
    title: 'Building with Precision. Delivering with Integrity.',
    description: 'At PPIL, we bring vision to life through expertly managed design, construction, and infrastructure solutions — trusted by public and private clients across Nigeria.',
    primaryLink: '/why-ppil',
    primaryText: 'Why We’re Different',
    secondaryLink: '/contact',
    secondaryText: 'Contact Us',
    transition: 'zoom'
  }
]

const currentSlide = ref(0)
const progress = ref(0)
const transitionName = ref(slides[0].transition)
let timer = null
let progressTimer = null

const setSlide = (index) => {
  currentSlide.value = index
  transitionName.value = slides[index].transition
  resetProgress()
}

const resetProgress = () => {
  progress.value = 0
  if (progressTimer) clearInterval(progressTimer)
  progressTimer = setInterval(() => {
    progress.value += (100 / (SLIDE_DURATION / 100))
    if (progress.value >= 100) progress.value = 0
  }, 100)
}

onMounted(() => {
  timer = setInterval(() => {
    const nextIndex = (currentSlide.value + 1) % slides.length
    currentSlide.value = nextIndex
    transitionName.value = slides[nextIndex].transition
    resetProgress()
  }, SLIDE_DURATION)
  resetProgress()
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  if (progressTimer) clearInterval(progressTimer)
})
</script>

<style scoped>
/* Variations of transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 1s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: all 1.2s ease;
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Fonts and spacing */
.font-heading {
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.01em;
}
</style>
