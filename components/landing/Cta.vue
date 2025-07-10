<template>
  <!-- CTA Section -->
  <section class="relative bg-gradient-to-br from-amber-50 to-green-50 py-16 md:py-24 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23519e0f%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
      </div>
    </div>

    <!-- Floating Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
      <div class="max-w-5xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <!-- Left Column: Content -->
          <div class="text-center lg:text-left">
            <!-- Badge -->
            <div
              class="inline-flex items-center px-4 py-2 bg-green-200/20 backdrop-blur-sm rounded-full text-green-800 text-sm font-medium mb-6">
              <Icon name="heroicons:sparkles" class="w-4 h-4 mr-2" />
              Join the Green Revolution
            </div>

            <!-- Heading -->
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Let's Build a Cleaner, More
              <span class="text-green-700">Resilient Future—Together</span>
            </h2>

            <!-- Description -->
            <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              We’re helping farmers grow more, replacing firewood with cleaner fuel, and putting carbon back into the
              soil where it belongs. Your support—whether as a partner, donor, or advocate—can help us do even more.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink to="/contact"
                class="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#406112] font-semibold rounded-lg shadow-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Icon name="heroicons:users" class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Partner With Us
                <Icon name="heroicons:arrow-right"
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </NuxtLink>

              <NuxtLink to="/services"
                class="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-green-700 text-green-700 font-semibold rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 hover:scale-105">
                <Icon name="heroicons:chat-bubble-left-right"
                  class="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Get in Touch
              </NuxtLink>
            </div>

            <!-- Trust Indicators -->
            <div class="mt-8 pt-8 border-t border-green-200">
              <div class="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-700">
                <div class="flex items-center">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                  <span class="text-sm">100% Organic</span>
                </div>
                <div class="flex items-center">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                  <span class="text-sm">Proven Results</span>
                </div>
                <div class="flex items-center">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                  <span class="text-sm">Expert Support</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Image -->
          <div class="relative flex justify-center lg:justify-start">
            <div class="relative group max-w-sm">
              <!-- Main Image -->
              <div class="relative">
                <img src="~/assets/img/veraverde-gardener.png" alt="Vera Verde - Sustainable Agriculture Solutions"
                  class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
              </div>

              <!-- Floating Elements -->
              <div
                class="absolute -top-6 -right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Icon name="heroicons:leaf" class="w-6 h-6 text-green-600" />
              </div>

              <div
                class="absolute -bottom-6 -left-6 w-16 h-16 bg-green-500/90 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Icon name="heroicons:chart-bar-square" class="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
/* Custom animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Smooth transitions */
.transition-all {
  transition: all 0.3s ease-in-out;
}

/* Custom gradient text */
.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #d1fae5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>