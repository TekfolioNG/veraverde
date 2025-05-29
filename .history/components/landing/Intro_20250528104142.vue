<template>
  <!-- Hero-style layout with diagonal accent -->
  <section class="relative bg-gradient-to-br from-slate-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
    <!-- Subtle geometric background -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-yellow rounded-full blur-2xl"></div>
    </div>

    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative">
      <!-- Header with centered approach -->
      <div class="text-center mb-12 md:mb-16">
        <!-- Company identifier -->
        <div class="inline-flex items-center mb-4">
          <div class="w-8 h-0.5 bg-yellow mr-3"></div>
          <span class="text-sm uppercase tracking-wider font-medium text-gray-600">XSTRATOPRIME</span>
          <div class="w-8 h-0.5 bg-yellow ml-3"></div>
        </div>

        <!-- Main value proposition -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto"
          style="font-family: 'Barlow Condensed', sans-serif;">
          We bring innovation and experienced hands to construction and energy projects
        </h2>
      </div>

      <!-- Two-column asymmetric layout -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

        <!-- Main content - wider column -->
        <div class="lg:col-span-3 space-y-6">
          <div class="prose prose-lg max-w-none">
            <p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              XstratoPrime is a multidisciplinary firm helping people and organizations deliver projects that matter.
              We work at the intersection of <span class="font-semibold text-primary">construction</span>,
              <span class="font-semibold text-primary">solar energy</span>, and
              <span class="font-semibold text-primary">workforce training</span>—three areas where practical solutions
              can drive real change.
            </p>

            <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              From our base in Nigeria, we've completed over <strong>40 civil and industrial construction
                projects</strong>,
              trained more than <strong>1,000 technicians and artisans</strong>, and deployed <strong>500+ solar
                installations</strong>
              across the country. Our work spans private, public, and community-driven sectors.
            </p>

            <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We're not a one-size-fits-all contractor. Each project is treated with its own lens—planned, managed,
              and delivered with care. Whether it's a school block in a rural town, a smart energy solution for a
              growing business, or hands-on technical training for local youth, we show up with the same goal:
              to create value that lasts.
            </p>

            <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p class="text-base md:text-lg text-gray-800 italic leading-relaxed">
                At the heart of XstratoPrime is a team of engineers, builders, trainers, and problem-solvers
                who care about doing good work and doing it right.
              </p>
            </div>
          </div>
        </div>

        <!-- Stats sidebar - compact grid -->
        <div class="lg:col-span-2">
          <div class="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
            <div v-for="(stat, index) in stats" :key="index"
              class="group bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-elevated hover:border-primary/20 transition-all duration-500">

              <!-- Large number display -->
              <div class="mb-3">
                <span class="text-2xl lg:text-3xl font-black text-primary block leading-none">
                  <span ref="counterRefs" :data-target="stat.targetValue" :data-prefix="stat.prefix || ''"
                    :data-suffix="stat.suffix || ''" class="counter">0</span>
                </span>
              </div>

              <!-- Stat description -->
              <div class="space-y-1">
                <h4 class="text-sm font-semibold text-gray-900 leading-tight">
                  {{ stat.title }}
                </h4>
                <p class="text-xs text-gray-600 leading-snug">
                  {{ stat.description }}
                </p>
              </div>

              <!-- Subtle accent line -->
              <div
                class="w-full h-0.5 bg-gradient-to-r from-yellow to-transparent mt-4 group-hover:from-primary transition-colors duration-500">
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

// Restructured stats data with cleaner presentation
const stats = [
  {
    targetValue: 10,
    suffix: "+",
    title: "Years of Consistent Delivery",
    description: "Building trust through quality work since 2015."
  },
  {
    targetValue: 40,
    suffix: "+",
    title: "Construction Projects Completed",
    description: "Spanning roads, buildings, and civil infrastructure."
  },
  {
    targetValue: 1000,
    suffix: "+",
    title: "Technicians & Artisans Trained",
    description: "Empowering Nigeria's technical workforce."
  },
  {
    targetValue: 500,
    suffix: "+",
    title: "Solar Systems Installed",
    description: "Delivering cleaner energy, one system at a time."
  },
  {
    targetValue: 6,
    title: "Key Sectors Served",
    description: "Including education, healthcare, energy, and more."
  },
  {
    targetValue: 1,
    title: "Guiding Focus",
    description: "Practical solutions. Long-term value."
  }
];

const counterRefs = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate all counters with staggered timing
        document.querySelectorAll('.counter').forEach((counter, index) => {
          setTimeout(() => {
            const target = parseInt(counter.getAttribute('data-target'));
            const prefix = counter.getAttribute('data-prefix') || '';
            const suffix = counter.getAttribute('data-suffix') || '';

            let startValue = 0;
            const duration = 2500;
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
          }, index * 150); // Stagger animation by 150ms per item
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe the stats section
  const statsSection = document.querySelector('.lg\\:col-span-2');
  if (statsSection) {
    observer.observe(statsSection);
  }
});
</script>

<style scoped>
/* Color system */
.bg-primary {
  background-color: #003366;
}

.text-primary {
  color: #003366;
}

.border-primary {
  border-color: #003366;
}

.bg-yellow {
  background-color: #FFB81C;
}

.from-yellow {
  --tw-gradient-from: #FFB81C;
}

.to-yellow {
  --tw-gradient-to: #FFB81C;
}

.from-primary {
  --tw-gradient-from: #003366;
}

/* Enhanced shadows */
.shadow-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-elevated {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Typography enhancements */
.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1.5rem;
}

/* Counter animation improvements */
.counter {
  display: inline-block;
  font-variant-numeric: tabular-nums;
  min-width: 2ch;
}

/* Responsive adjustments */
@media (max-width: 1023px) {

  .lg\:col-span-3,
  .lg\:col-span-2 {
    grid-column: span 1;
  }

  /* Stack stats in 2 columns on tablet */
  .grid-cols-2.lg\:grid-cols-1 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {

  /* Single column on mobile */
  .grid-cols-2.lg\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-500 {
  transition-duration: 500ms;
}

/* Group hover effects */
.group:hover .group-hover\:from-primary {
  --tw-gradient-from: #003366;
}
</style>