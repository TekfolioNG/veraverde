<template>
  <section class="relative w-full h-screen-90 lg:h-screen overflow-hidden">
    <!-- Slideshow with improved transitions -->
    <div class="absolute inset-0 z-0">
      <div v-for="(image, index) in images" :key="index"
        class="absolute inset-0 w-full h-full transition-opacity duration-1000" :class="{
          'opacity-100 z-10': currentSlide === index,
          'opacity-0 z-0': currentSlide !== index
        }">
        <img :src="image" :alt="`PPIL Project ${index + 1}`" class="w-full h-full object-cover object-center" />
      </div>

      <!-- Gradient overlay for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
    </div>

    <!-- Content with better spacing and animations -->
    <div class="relative z-20 container mx-auto h-full flex flex-col justify-center px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
        <transition name="slide-up" mode="out-in">
          <div key="heading">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading tracking-wider-custom leading-tight text-white">
              Smart Infrastructure.<br class="hidden lg:block"> Premium Execution.
            </h1>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div key="subheading">
            <p class="text-lg md:text-xl lg:text-2xl font-light text-gray-100 max-w-3xl mx-auto">
              We design, build, and maintain high-impact projects — combining deep technical expertise with innovative
              solutions for lasting results.
            </p>
          </div>
        </transition>

        <div class="pt-4 flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/projects"
            class="ui-button bg-yellow hover:bg-yellow-500 text-black font-medium px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
            View Projects
          </NuxtLink>
          <NuxtLink to="/contact"
            class="ui-button border-2 border-white text-white hover:bg-white hover:text-black font-medium px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
            Contact Us
          </NuxtLink>
        </div>
      </div>

      <!-- Slide indicators -->
      <div class="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        <button v-for="(image, index) in images" :key="`indicator-${index}`" @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300" :class="{
            'bg-yellow w-6': currentSlide === index,
            'bg-white/50 hover:bg-white/80': currentSlide !== index
          }" :aria-label="`Go to slide ${index + 1}`">
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const images = [
  '/assets/img/PPIL1.png',
  '/assets/img/PPIL3.jpg',
  '/assets/img/PPIL2.jpg',
]

const currentSlide = ref(0)
let intervalId = null

const goToSlide = (index) => {
  currentSlide.value = index
  resetInterval()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length
}

const resetInterval = () => {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(nextSlide, 6000)
}

onMounted(() => {
  resetInterval()
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
/* Improved transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.8s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-6xl {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .text-xl {
    font-size: 1rem;
  }
}
</style>