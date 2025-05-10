<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper with varied transitions -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group name="varied" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full" :data-transition="slide.transition">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />
          <!-- Darker gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        </div>
      </transition-group>
    </div>

    <!-- Content positioned closer to bottom -->
    <div class="relative z-20 w-full h-full flex flex-col px-6 md:px-16 lg:px-24 xl:px-32">
      <div class="flex flex-col mt-auto mb-16 md:mb-24 lg:mb-32 max-w-3xl">
        <transition :name="slides[currentSlide].textTransition" mode="out-in">
          <h1 key="title"
            class="font-heading text-4xl md:text-5xl lg:text-6xl text-black font-extrabold tracking-tight leading-tight">
            {{ slides[currentSlide].title }}
          </h1>
        </transition>
        <transition :name="slides[currentSlide].textTransition" mode="out-in">
          <p key="desc" class="mt-4 text-lg md:text-xl text-gray-900 max-w-2xl font-semibold leading-relaxed">
            {{ slides[currentSlide].description }}
          </p>
        </transition>
        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink v-for="(cta, i) in slides[currentSlide].ctas" :key="i" :to="cta.link" :class="[
            'px-6 py-2.5 font-bold transition-all duration-300 text-lg',
            i === 0 ? 'bg-yellow text-black hover:bg-yellow-500' : 'border-2 border-black text-black hover:bg-black hover:text-white'
          ]">
            {{ cta.text }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Slide navigation -->
    <div class="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
      <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
        class="w-10 h-1.5 transition-all duration-300 rounded-full"
        :class="currentSlide === index ? 'bg-yellow' : 'bg-black/40 hover:bg-black/60'"
        :aria-label="`Go to slide ${index + 1}`">
      </button>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 z-30 h-1 bg-black/20">
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

const SLIDE_DURATION = 8000;
const slides = [
  {
    image: ppil1,
    alt: 'PPIL Construction Site',
    title: 'Smart Infrastructure. Premium Execution.',
    description: 'We design, build, and maintain high-impact projects — combining deep technical know-how with a future-ready mindset for real results.',
    transition: 'fade',
    textTransition: 'slide-up',
    ctas: [
      { text: 'Who We Are', link: '/about' },
      { text: 'Our Services', link: '/services' }
    ]
  },
  {
    image: ppil3,
    alt: 'PPIL Infrastructure Project',
    title: 'Building with Precision. Delivering with Integrity.',
    description: 'At PPIL, we bring vision to life through expertly managed design, construction, and infrastructure solutions.',
    transition: 'slide-up',
    textTransition: 'fade',
    ctas: [
      { text: 'Sectors & Projects', link: '/sectors' },
      { text: 'Our Partners', link: '/partners' }
    ]
  },
  {
    image: ppil2,
    alt: 'PPIL Commercial Building',
    title: 'Engineering Projects. Building Relationships.',
    description: 'Your trusted partner for sustainable construction, project management, and maintenance across Nigeria.',
    transition: 'zoom',
    textTransition: 'slide-up',
    ctas: [
      { text: 'Why We Are Different', link: '/differentiators' },
      { text: 'Contact Us', link: '/contact' }
    ]
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
  if (progressTimer) clearInterval(progressTimer)
  progressTimer = setInterval(() => {
    progress.value += (100 / (SLIDE_DURATION / 100))
    if (progress.value >= 100) progress.value = 0
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
/* Varied slide transitions */
.varied-enter-active {
  transition: all 1s ease;
}

.varied-leave-active {
  transition: all 1s ease;
}

.varied-enter-from[data-transition="fade"],
.varied-leave-to[data-transition="fade"] {
  opacity: 0;
}

.varied-enter-from[data-transition="slide-up"] {
  opacity: 0;
  transform: translateY(20px);
}

.varied-leave-to[data-transition="slide-up"] {
  opacity: 0;
  transform: translateY(-20px);
}

.varied-enter-from[data-transition="zoom"] {
  opacity: 0;
  transform: scale(0.95);
}

.varied-leave-to[data-transition="zoom"] {
  opacity: 0;
  transform: scale(1.05);
}

/* Text transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.6s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

/* Full width coverage */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Darker text for better contrast */
.text-black {
  color: #111;
}

.text-gray-900 {
  color: #222;
}
</style>