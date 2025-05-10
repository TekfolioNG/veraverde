<template>
  <section class="relative bg-white py-16 md:py-24 lg:py-32">
    <div class="container mx-auto px-6 md:px-8 lg:px-12">
      <!-- Section Header - Left Aligned -->
      <div class="mb-12 md:mb-16 lg:mb-20 text-left">
        <!-- Rider at top -->
        <div class="flex items-center mb-4">
          <div class="w-12 h-1 bg-yellow mr-4"></div>
          <h4 class="text-sm uppercase tracking-widest text-gray-600">WHO WE ARE</h4>
        </div>

        <!-- Main heading and subheading -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          People. Projects. Premium Performance.
        </h2>
        <h3 class="text-xl md:text-2xl text-gray-600 italic mt-2">
          — PPIL delivers value where it matters most.
        </h3>
      </div>

      <!-- Content Grid - 3/4 text and 1/4 stats -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
        <!-- Text Content - Takes 3/4 width -->
        <div class="lg:col-span-3 space-y-6">
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

        <!-- Stats Grid - Takes 1/4 width and stacks vertically -->
        <div class="lg:col-span-1 space-y-6">
          <div v-for="(stat, index) in stats" :key="index" class="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 class="text-4xl font-bold text-primary mb-2">{{ stat.value }}</h3>
            <p class="text-gray-700">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "10+", label: "Years of Delivering Projects" },
  { value: "50+", label: "Completed Infrastructure & Facility Projects" },
  { value: "8", label: "Sectors Served Nationwide" },
  { value: "1", label: "Goal Delivering Value that Endures" }
];
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

  .lg\:col-span-3,
  .lg\:col-span-1 {
    grid-column: span 1;
  }
}
</style>