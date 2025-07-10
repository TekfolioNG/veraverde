<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Slides wrapper -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <transition-group name="fade" tag="div" class="h-full">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
          class="absolute inset-0 w-screen h-full">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover object-center" />
          <!-- Enhanced gradient overlay for better text contrast -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/30" />
        </div>
      </transition-group>
    </div>

    <!-- Content overlay with proper navbar spacing -->
    <div class="relative z-20 w-full h-full flex flex-col px-6 md:pl-16 lg:pl-24 xl:pl-32">
      <!-- Add top spacing to avoid navbar clash -->
      <div
        class="flex-1 flex flex-col justify-center items-start pt-32 md:pt-40 lg:pt-44 pb-32 md:pb-20 lg:pb-28 max-w-3xl mx-auto md:mx-0 hero-content-container">
        <transition name="content-fade" mode="out-in">
          <div :key="'content-' + currentSlide">
            <h1
              class="hero-heading font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-black tracking-wider-custom leading-tight">
              {{ slides[currentSlide].title }}
            </h1>
            <p v-if="slides[currentSlide].description"
              class="hero-description mt-4 md:mt-6 text-lg md:text-xl text-white max-w-2xl font-normal leading-relaxed px-3 py-2 rounded-md"
              style="background: rgba(0,0,0,0.5); backdrop-filter: blur(2px); text-shadow: 0 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5);">
              {{ slides[currentSlide].description }}
            </p>
            <div v-if="slides[currentSlide].buttonText" class="mt-8 w-full flex justify-start hero-button-container">
              <NuxtLink :to="slides[currentSlide].buttonLink"
                class="px-6 py-3 text-white font-medium transition-all duration-300 text-lg transform hover:scale-105 inline-block"
                :style="{ backgroundColor: '#406112' }">
                {{ slides[currentSlide].buttonText }}
              </NuxtLink>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Slide navigation -->
    <div class="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
      <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
        class="w-12 h-1.5 transition-all duration-300 rounded-full"
        :class="currentSlide === index ? 'bg-[#99cc33]' : 'bg-white/40 hover:bg-white/60'"
        :aria-label="`Go to slide ${index + 1}`">
      </button>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
      <div class="bg-[#99cc33] h-full transition-all duration-300 ease-linear" :style="{ width: `${progress}%` }">
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Import images with new paths
import slider2 from '~/assets/img/slider2-veraverde.jpg';
import slider3 from '~/assets/img/slider3-veraverde.jpg';
import slider1 from '~/assets/img/slider4-veraverde.jpg';

const SLIDE_DURATION = 8000; // 8 seconds per slide
const slides = [
  {
    image: slider1,
    alt: 'Climate-Smart Agriculture',
    title: 'Farming That Nurtures the Earth',
    description: 'We help farmers grow more, waste less, and protect the land they rely on.',
    buttonLink: '/services',
    buttonText: 'Here\'s How'
  },
  {
    image: slider2,
    alt: 'Carbon Sequestration',
    title: 'Turning Carbon into Soil Health',
    description: 'We lock carbon in the soil using biochar—helping the planet and boosting harvests.',
    buttonLink: '/services',
    buttonText: 'How It Works'
  },
  {
    image: slider3,
    alt: 'Ecofuel Briquettes',
    title: 'Clean Energy from Farm Waste',
    description: 'We turn sawdust and rice husk into eco-briquettes—an affordable, smokeless alternative.',
    buttonLink: '/services',
    buttonText: 'Our Green Energy Solution'
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
/* Background image transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Content transition - synchronized for all elements */
.content-fade-enter-active,
.content-fade-leave-active {
  transition: opacity 1.8s ease-in-out;
}

.content-fade-enter-from,
.content-fade-leave-to {
  opacity: 0;
}

.font-heading,
.hero-heading {
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
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

/* Desktop spacing adjustments */
.hero-content-container {
  min-height: calc(100vh - 8rem);
}

/* Mobile responsive adjustments */
@media (max-width: 767px) {
  .hero-content-container {
    padding-top: 8rem !important;
    padding-bottom: 8rem !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
  }

  .hero-heading {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.75rem;
    margin-top: 1rem !important;
  }

  /* Center buttons on mobile */
  .hero-button-container {
    justify-content: center !important;
  }
}

@media (max-width: 480px) {
  .hero-content-container {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important;
  }

  .hero-heading {
    font-size: 2rem;
  }
}

/* Large desktop screens - more spacing */
@media (min-width: 1280px) {
  .hero-content-container {
    padding-top: 12rem;
    padding-bottom: 3rem;
  }
}
</style>