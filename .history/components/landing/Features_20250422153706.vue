<template>
  <section class="relative bg-white py-16 md:py-24 lg:py-32">
    <div class="container mx-auto px-6 md:px-8 lg:px-12">
      <div class="flex flex-col items-start mb-12 md:mb-16">
        <!-- Section Rider -->
        <div class="flex items-center mb-4">
          <div class="w-20 h-1 bg-yellow mr-4"></div>
          <h4 class="text-sm md:text-base uppercase font-semibold tracking-wide">WHO WE ARE</h4>
        </div>

        <!-- Main Heading -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
          People. Projects. Premium Performance.
        </h2>
        <h3 class="text-xl md:text-2xl text-gray-700 font-medium italic">
          — PPIL delivers value where it matters most.
        </h3>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 items-start">
        <!-- Text Content (3/4) -->
        <div class="space-y-6 lg:col-span-3">
          <p class="text-lg text-gray-700">
            PPIL is one of Nigeria's most trusted hybrid construction and infrastructure firms — bringing together
            engineering, project management, and facility services under one roof. Since 2014, we've helped shape cities
            and communities through high-impact projects that deliver true value.
          </p>
          <p class="text-lg text-gray-700">
            From urban road construction to energy infrastructure, industrial complexes to facility upgrades — we
            provide tailored solutions backed by technical know-how, deep local insight, and a clear focus on quality.
          </p>
          <p class="text-lg text-gray-700">
            Our team is made up of experienced professionals who think beyond the blueprint, using smart,
            forward-thinking approaches to deliver projects that are built to last. With every project, we aim to exceed
            expectations — not just with the final product, but with how we deliver it.
          </p>
          <p class="text-lg text-gray-700">
            Whether you're a public agency, private investor, or development partner, choosing PPIL means working with a
            team that's focused, agile, and fully invested in your success.
          </p>
          <NuxtLink to="/about"
            class="inline-block px-8 py-3 bg-primary text-white font-bold hover:bg-primary-dark transition-colors duration-300 mt-6">
            About Us →
          </NuxtLink>
        </div>

        <!-- Stats Vertical Stack (1/4) -->
        <div class="lg:col-span-1 space-y-6">
          <div v-for="(stat, index) in stats" :key="index" class="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <div class="relative overflow-hidden">
              <h3 class="text-4xl font-bold text-primary mb-2">
                <span v-if="stat.animated" ref="countRef">{{ stat.start }}</span>
                <span v-else>{{ stat.value }}</span>
                <span v-if="stat.suffix">{{ stat.suffix }}</span>
              </h3>
              <p class="text-gray-700">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Updated stats with counter animation configuration
const stats = [
  {
    value: "10+",
    start: "0",
    suffix: "+",
    animated: true,
    label: "Years of Delivering Projects"
  },
  {
    value: "50+",
    start: "0",
    suffix: "+",
    animated: true,
    label: "Completed Infrastructure & Facility Projects"
  },
  {
    value: "8",
    start: "0",
    animated: true,
    label: "Sectors Served Nationwide"
  },
  {
    value: "1",
    animated: false,
    label: "Goal Delivering Value that Endures"
  }
];

const countRef = ref([]);

onMounted(() => {
  // Set up counting animation for stats
  stats.forEach((stat, index) => {
    if (stat.animated) {
      let startValue = 0;
      const endValue = parseInt(stat.value);
      const duration = 2000; // ms
      const frameRate = 16; // ms
      const totalFrames = Math.round(duration / frameRate);
      const increment = endValue / totalFrames;

      let currentFrame = 0;

      const counter = setInterval(() => {
        currentFrame++;
        startValue += increment;

        if (currentFrame === totalFrames) {
          clearInterval(counter);
          if (countRef.value[index]) {
            countRef.value[index].textContent = Math.floor(endValue);
          }
        } else {
          if (countRef.value[index]) {
            countRef.value[index].textContent = Math.floor(startValue);
          }
        }
      }, frameRate);
    }
  });
});
</script>

<style scoped>
/* Custom underline effect */
.bg-yellow {
  background-color: #FFB81C;
}

/* Primary color from your Tailwind config */
.bg-primary {
  background-color: #003366;
}

.bg-primary-dark {
  background-color: #002244;
}

.text-primary {
  color: #003366;
}

/* Smooth hover transitions */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .stats-grid {
    order: 1;
  }

  .text-content {
    order: 2;
  }
}
</style>