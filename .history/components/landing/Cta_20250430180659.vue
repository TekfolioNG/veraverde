<template>
  <section class="ppil-cta relative py-20 md:py-28 overflow-hidden mb-10">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-r"
      style="background: linear-gradient(135deg, #002244 0%, #1A4173 50%, #002244 100%);"></div>

    <!-- Subtle pattern overlay -->
    <div class="absolute inset-0 opacity-20"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Discuss Your Project</h2>

        <p class="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
          Our specialized engineering teams deliver infrastructure solutions that endure.
          From concept to completion, we bring technical precision and operational excellence
          to every project. <br>Ready to build something remarkable together?</br>
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" class="inline-block py-3 px-8 rounded-md font-medium text-lg transition-all duration-300"
            style="background-color: #FFB81C; color: #002244; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
            START A CONVERSATION
          </a>
        </div>
      </div>
    </div>

    <!-- Decorative element -->
    <div class="absolute bottom-0 left-0 w-full h-2" style="background-color: #D92121;"></div>
  </section>
</template>

<script setup>
// No additional script logic needed
</script>

<style scoped>
.ppil-cta {
  position: relative;
  margin-bottom: 2rem;
  /* Additional margin in case the Tailwind class isn't enough */
}
</style>