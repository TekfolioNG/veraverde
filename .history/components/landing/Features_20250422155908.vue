<template>
  <section class="relative bg-white py-16 md:py-24 lg:py-32">
    <div class="container mx-auto px-6 md:px-8 lg:px-12">
      <div class="flex flex-col items-start mb-12 md:mb-16">
        <!-- Section Rider -->
        <div class="flex items-center mb-4">
          <div class="w-12 h-0.5 bg-yellow mr-4"></div>
          <h4 class="text-sm md:text-base uppercase tracking-wide font-normal">WHO WE ARE</h4>
        </div>

        <!-- Main Heading -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-2">
          People. Projects. Premium Performance.
        </h2>
        <h3 class="text-xl md:text-2xl text-gray-700 font-normal italic">
          — <span class="uppercase">PPIL</span> delivers value where it matters most.
        </h3>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        <!-- Text Content (3/5) -->
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

        <!-- Stats Vertical Stack (2/5) -->
        <div class="lg:col-span-2 space-y-8">
          <div v-for="(stat, index) in stats" :key="index"
            class="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-lg mx-auto max-w-xs text-center">
            <div class="relative overflow-hidden">
              <h3 class="text-4xl font-bold text-primary mb-2">
                <span ref="counterRefs" :data-target="stat.target" :data-suffix="stat.suffix" class="counter">0</span>
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

// Stats with proper configuration for counter animation
const stats = [
  {
    target: 10,
    suffix: "+",
    label: "Years of Delivering Projects"
  },
  {
    target: 50,
    suffix: "+",
    label: "Completed Infrastructure & Facility Projects"
  },
  {
    target: 8,
    suffix: "",
    label: "Sectors Served Nationwide"
  },
  {
    target: 1,
    suffix: "",
    label: "Goal Delivering Value that Endures"
  }
];

const counterRefs = ref([]);

onMounted(() => {
  // Set up intersection observer to trigger animation when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start the counter animation for all counters
        document.querySelectorAll('.counter').forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const suffix = counter.getAttribute('data-suffix') || '';

          let startValue = 0;
          const duration = 3500; // Slowed down to 3.5 seconds
          const increment = target / (duration / 16);

          const updateCounter = () => {
            startValue += increment;

            if (startValue < target) {
              counter.textContent = Math.floor(startValue) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + suffix;
            }
          };

          updateCounter();
        });

        // Unobserve after animation starts
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

  // Start observing the stats section
  const statsSection = document.querySelector('.lg\\:col-span-2');
  if (statsSection) {
    observer.observe(statsSection);
  }
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

/* Enhanced shadow effect */
.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .container {
    padding-left: 4%;
    padding-right: 4%;
  }

  .max-w-xs {
    max-width: 90%;
  }
}

@media (max-width: 640px) {
  .container {
    padding-left: 5%;
    padding-right: 5%;
  }

  h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .space-y-8>*+* {
    margin-top: 1.5rem;
  }
}
</style>