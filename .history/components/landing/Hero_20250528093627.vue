<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper - full width with edge-to-edge coverage -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group name="fade" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>
      </transition-group>
    </div>

    <!-- Content overlay - positioned closer to bottom and shifted left -->
    <div class="relative z-20 w-full h-full flex flex-col px-6 md:pl-16 lg:pl-24 xl:pl-32">
      <div class="flex flex-col mt-auto mb-16 md:mb-20 lg:mb-28 max-w-3xl mx-auto md:mx-0">
        <transition name="slide-up" mode="out-in">
          <h1 :key="'title-' + currentSlide"
            class="hero-heading font-heading text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-wider-custom leading-tight">
            {{ slides[currentSlide].title }}
          </h1>
        </transition>
        <transition name="slide-up" mode="out-in">
          <p :key="'desc-' + currentSlide"
            class="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl font-light leading-relaxed">
            {{ slides[currentSlide].description }}
          </p>
        </transition>
        <div class="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <NuxtLink :to="slides[currentSlide].buttonLink"
            class="px-6 py-3 text-white font-medium transition-all duration-300 text-lg transform hover:scale-105"
            :style="{ backgroundColor: '#F3912C' }">
            {{ slides[currentSlide].buttonText }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Slide navigation -->
    <div class="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
      <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
        class="w-12 h-1.5 transition-all duration-300 rounded-full"
        :class="currentSlide === index ? 'bg-orange-500' : 'bg-white/40 hover:bg-white/60'"
        :aria-label="`Go to slide ${index + 1}`">
      </button>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
      <div class="bg-orange-500 h-full transition-all duration-300 ease-linear" :style="{ width: `${progress}%` }">
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Import images with new paths
import aerialView from '/assets/img/aerial-view-road-rail-bridge-xstrato.jpg';
import constructionSite from '/assets/img/construction-site-xstrato.jpg';
import roadConstruction from '/assets/img/road-construction-xstrato.jpg';

const SLIDE_DURATION = 8000; // 8 seconds per slide
const slides = [
  {
    image: constructionSite,
    alt: 'Construction Site - XSTRATO',
    title: 'Construction & General Contracting',
    description: 'From residential buildings to large-scale infrastructure, we manage every project with precision, speed, and integrity.',
    buttonLink: '/what-we-do',
    buttonText: 'Learn More'
  },
  {
    image: aerialView,
    alt: 'Aerial View Road Rail Bridge - XSTRATO',
    title: 'Solar Energy Solutions',
    description: 'We design and install efficient, scalable solar systems that reduce energy costs and support sustainable living.',
    buttonLink: '/solar-solutions',
    buttonText: 'Explore Solar'
  },
  {
    image: roadConstruction,
    alt: 'Road Construction - XSTRATO',
    title: 'Technical Training & Workforce Development',
    description: 'Our training programs develop skilled professionals ready to meet the demands of today\'s construction and tech industries.',
    buttonLink: '/training',
    buttonText: 'View Programs'
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
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 1.8s ease, transform 1.8s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.font-heading,
.hero-heading {
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 0.5px white;
}

.hero-heading {
  text-shadow:
    0 2px 6px rgba(0, 0, 0, 0.5),
    0 0 1px #fff,
    0 0 1px #fff;
}

.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

@media (max-width: 767px) {
  .hero-heading {
    text-align: center;
  }

  p {
    text-align: center;
  }
}
</style>