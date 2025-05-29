<template>
  <section class="relative bg-white py-12 md:py-16 lg:py-20">
    <div class="container mx-auto px-6 md:px-8 lg:px-12">
      <!-- Header Section -->
      <div class="mb-10 md:mb-12">
        <!-- Rider -->
        <div class="flex items-center mb-3">
          <div class="w-12 h-0.5 bg-primary mr-3"></div>
          <h5 class="text-sm md:text-base uppercase tracking-wider font-medium text-gray-600">WHO WE ARE</h5>
        </div>

        <!-- Main Heading -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          We bring innovation and experienced hands to construction and energy projects
        </h2>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <!-- Text Content -->
        <div class="lg:col-span-2 space-y-6">
          <p class="text-lg md:text-xl text-gray-800 leading-relaxed">
            <span class="font-semibold">XstratoPrime</span> is a multidisciplinary firm helping people and organizations
            deliver projects that matter. We work at the intersection of construction, solar energy, and workforce
            training—three areas where practical solutions can drive real change.
          </p>

          <p class="text-lg md:text-xl text-gray-800 leading-relaxed">
            From our base in Nigeria, we've completed over 40 civil and industrial construction projects, trained more
            than 1,000 technicians and artisans, and deployed 500+ solar installations across the country. Our work
            spans private, public, and community-driven sectors.
          </p>

          <p class="text-lg md:text-xl text-gray-800 leading-relaxed">
            We're not a one-size-fits-all contractor. Each project is treated with its own lens—planned, managed, and
            delivered with care. Whether it's a school block in a rural town, a smart energy solution for a growing
            business, or hands-on technical training for local youth, we show up with the same goal: to create value
            that lasts.
          </p>

          <p class="text-lg md:text-xl text-gray-800 leading-relaxed">
            At the heart of XstratoPrime is a team of engineers, builders, trainers, and problem-solvers who care about
            doing good work and doing it right.
          </p>

          <NuxtLink to="/who-we-are"
            class="inline-block px-8 py-3 bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-300 mt-6 rounded-lg">
            Learn More About Us →
          </NuxtLink>
        </div>

        <!-- Stats Column -->
        <div class="lg:col-span-1">
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Our Impact in Numbers</h3>

            <div class="space-y-5">
              <div v-for="(stat, index) in stats" :key="index" class="border-l-4 border-primary pl-4 py-2">
                <h4 class="text-3xl font-bold text-primary mb-1">
                  <span ref="counterRefs" :data-target="stat.targetValue" :data-prefix="stat.prefix || ''"
                    :data-suffix="stat.suffix || ''" class="counter">0</span>
                </h4>
                <p class="text-base text-gray-700">
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Updated stats to match your content
const stats = [
  {
    targetValue: 10,
    suffix: "+",
    label: "Years of Consistent Delivery"
  },
  {
    targetValue: 40,
    suffix: "+",
    label: "Construction Projects Completed"
  },
  {
    targetValue: 1000,
    suffix: "+",
    label: "Technicians & Artisans Trained"
  },
  {
    targetValue: 500,
    suffix: "+",
    label: "Solar Systems Installed"
  },
  {
    targetValue: 6,
    label: "Key Sectors Served"
  },
  {
    targetValue: 1,
    label: "Guiding Focus"
  }
];

const counterRefs = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.counter').forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';

          let startValue = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const updateCounter = () => {
            startValue += increment;

            if (startValue < target) {
              counter.textContent = prefix + Math.floor(startValue) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = prefix + target + suffix;
            }
          };

          updateCounter();
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const statsSection = document.querySelector('.lg\\:col-span-1');
  if (statsSection) {
    observer.observe(statsSection);
  }
});
</script>

<style scoped>
/* Primary color */
.bg-primary {
  background-color: #335FA8;
}

.bg-primary-dark {
  background-color: #2a4d8a;
}

.text-primary {
  color: #335FA8;
}

/* Smooth transitions */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Counter animation */
.counter {
  display: inline-block;
  min-width: 1em;
}

/* Responsive adjustments */
@media (max-width: 1023px) {

  .lg\:col-span-2,
  .lg\:col-span-1 {
    grid-column: span 1;
  }

  .space-y-6>*+* {
    margin-top: 1.5rem;
  }
}
</style>