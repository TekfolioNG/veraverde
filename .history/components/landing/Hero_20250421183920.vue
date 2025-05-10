<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper - full width with edge-to-edge coverage -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group :name="transitions[currentSlide]" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
      </transition-group>
    </div>

    <!-- Content overlay - positioned closer to bottom -->
    <div class="relative z-20 w-full h-full flex flex-col px-6 md:px-16 lg:px-24 xl:px-32">
      <div class="flex flex-col mt-auto mb-16 md:mb-20 lg:mb-28 max-w-3xl">
        <transition :name="textTransitions[currentSlide]" mode="out-in">
          <h1 :key="'title-' + currentSlide"
            class="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-wider-custom leading-tight">
            {{ slides[currentSlide].title }}
          </h1>
        </transition>
        <transition :name="textTransitions[currentSlide]" mode="out-in">
          <p :key="'desc-' + currentSlide"
            class="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl font-light leading-relaxed">
            {{ slides[currentSlide].description }}
          </p>
        </transition>
        <div class="mt-8 flex flex-wrap gap-4">
          <NuxtLink :to="slides[currentSlide].primaryLink"
            class="px-6 py-3 bg-yellow text-black border-2 border-yellow hover:bg-transparent hover:text-white hover:border-yellow font-medium transition-all duration-300 text-lg transform hover:scale-105">
            {{ slides[currentSlide].primaryText }}
          </NuxtLink>
          <NuxtLink :to="slides[currentSlide].secondaryLink"
            class="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg transform hover:scale-105">
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
        :aria-label="`Go to slide ${index + 1}`">
      </button>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
      <div class="bg-yellow h-full transition-all duration-300 ease-linear" :style="{ width: `${progress}%` }"></div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'

// Import images
import ppil1 from '/assets/img/PPIL1.png'
import ppil2 from '/assets/img/PPIL2.jpg'
import ppil3 from '/assets/img/PPIL3.jpg'

const SLIDE_DURATION = 8000; // 8 seconds per slide
const slides = [
  {
    image: ppil1,
    alt: 'PPIL Construction Site',
    title: 'Smart Infrastructure. Premium Execution.',
    description: 'We design, build, and maintain high-impact projects — combining deep technical know-how with a future-ready mindset for real results.',
    primaryLink: '/about',
    primaryText: 'Who We Are',
    secondaryLink: '/services',
    secondaryText: 'Our Services'
  },
  {
    image: ppil3,
    alt: 'PPIL Infrastructure Project',
    title: 'Building with Precision. Delivering with Integrity.',
    description: 'At PPIL, we bring vision to life through expertly managed design, construction, and infrastructure solutions — trusted by public and private clients across Nigeria.',
    primaryLink: '/sectors',
    primaryText: 'Sectors & Projects',
    secondaryLink: '/partners',
    secondaryText: 'Partners'
  },
  {
    image: ppil2,
    alt: 'PPIL Commercial Building',
    title: 'Engineering Projects. Building Relationships.',
    description: 'PPIL is your trusted partner for sustainable construction, project management, and maintenance, shaping environments that last generations.',
    primaryLink: '/why-ppil',
    primaryText: 'Why We Are Different',
    secondaryLink: '/contact',
    secondaryText: 'Contact Us'
  }
]

// Different transition types for each slide
const transitions = ['fade', 'slide-up', 'zoom']
const textTransitions = ['fade', 'slide-left', 'slide-up']

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
/* Basic fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Zoom transition */
.zoom-enter-active,
.zoom-leave-active {
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Text transitions */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Adjust font weight and line height for hero text */
.font-heading {
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

/* Ensure full width coverage */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Custom first button hover effect */
.hover\:bg-transparent:hover {
  background-color: transparent !important;
}
</style>