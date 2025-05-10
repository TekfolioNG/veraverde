<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper with edge-to-edge coverage -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group :name="transitions[currentSlide]" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />
          <!-- Darker gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/50" />
        </div>
      </transition-group>
    </div>

    <!-- Content positioned lower with bolder text -->
    <div class="relative z-20 w-full h-full flex flex-col px-6 md:px-16 lg:px-24 xl:px-32 pb-24">
      <div class="flex flex-col mt-auto mb-8 max-w-3xl">
        <transition :name="textTransitions[currentSlide]" mode="out-in">
          <h1 :key="'title-' + currentSlide"
            class="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight leading-none">
            {{ slides[currentSlide].title }}
          </h1>
        </transition>
        <transition :name="textTransitions[currentSlide]" mode="out-in">
          <p :key="'desc-' + currentSlide"
            class="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl font-medium leading-relaxed">
            {{ slides[currentSlide].description }}
          </p>
        </transition>
      </div>

      <!-- CTA buttons positioned at the very bottom -->
      <div class="mt-auto pt-8 flex flex-wrap gap-4">
        <NuxtLink v-for="(cta, i) in slides[currentSlide].ctas" :key="i" :to="cta.link" :class="[
          'px-8 py-3 font-bold transition-all duration-300 text-lg border-2',
          i === 0
            ? 'bg-yellow text-black border-yellow hover:bg-transparent hover:text-white hover:border-yellow'
            : 'bg-black/30 text-white border-white hover:bg-white hover:text-black'
        ]">
          {{ cta.text }}
        </NuxtLink>
      </div>
    </div>

    <!-- Slide navigation -->
    <div class="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
      <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
        class="w-10 h-1.5 transition-all duration-300 rounded-full"
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

const SLIDE_DURATION = 8000;
const slides = [
  {
    image: ppil1,
    alt: 'PPIL Construction Site',
    title: 'Smart Infrastructure. Premium Execution.',
    description: 'We design, build, and maintain high-impact projects — combining deep technical know-how with a future-ready mindset for real results.',
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
    ctas: [
      { text: 'Why We Are Different', link: '/differentiators' },
      { text: 'Contact Us', link: '/contact' }
    ]
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-active {
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.zoom-enter-active {
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.zoom-leave-active {
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Text transitions */
.slide-left-enter-active {
  transition: all 0.8s ease-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

/* Ultra-bold heading with tight tracking */
.font-heading {
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

/* Full width coverage */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
</style>