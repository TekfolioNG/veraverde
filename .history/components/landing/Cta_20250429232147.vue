<template>
  <section class="cta-section bg-primary-dark py-16 md:py-24">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Engineer Your Vision With PPIL</h2>

        <div class="mb-8">
          <p class="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            Our mission-driven team combines technical excellence with award-winning execution to deliver infrastructure
            that stands the test of time.
          </p>
          <p class="text-lg md:text-xl text-gray-200 leading-relaxed">
            Let's collaborate to build solutions that meet your most critical project requirements.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a href="/contact"
            class="bg-white text-primary-dark px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Get in Touch
          </a>
          <a href="/projects"
            class="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-primary-dark transition duration-300">
            View Our Projects
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this static component
</script>

<style scoped>
.cta-section {
  background-color: #002244;
  /* primary-dark */
}

.bg-primary-dark {
  background-color: #002244;
}

.text-primary-dark {
  color: #003366;
}

.hover\:bg-primary-dark:hover {
  background-color: #002244;
}
</style>