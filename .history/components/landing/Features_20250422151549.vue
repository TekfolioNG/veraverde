<template>
  <section class="relative bg-white py-16 md:py-24 lg:py-32">
    <div class="container mx-auto px-6 md:px-8 lg:px-12">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Who We Are
        </h2>
        <div class="w-20 h-1 bg-yellow mx-auto mb-6"></div>
        <p class="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
          People. Projects. Premium Performance.
          <span class="block text-primary">— PPIL delivers value where it matters most.</span>
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Text Content -->
        <div class="space-y-6">
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

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 gap-6">
          <div v-for="(stat, index) in stats" :key="index"
            class="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-100">
            <h3 class="text-4xl md:text-5xl font-bold text-primary mb-2">{{ stat.value }}</h3>
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
  { value: "100+", label: "Completed Infrastructure & Facility Projects" },
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
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .text-content {
    order: 2;
  }

  .stats-grid {
    order: 1;
  }
}
</style>