<template>
  <section class="xstrato-cta relative py-16 md:py-24 overflow-hidden">
    <!-- Diagonal gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light"></div>

    <!-- Geometric pattern overlay -->
    <div class="absolute inset-0 opacity-10"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm40 40h40v40H40V40z\' fill=\'%23ffffff\' fill-opacity=\'0.3\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Logo and heading -->
        <div class="flex justify-center mb-6">
          <img src="~/assets/img/Xstrato-logo.png" alt="XSTRATO Logo" class="h-20 md:h-24 drop-shadow-lg" />
        </div>
        
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Power Your Vision With Xstrato
        </h2>

        <p class="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
          We combine innovative construction, sustainable energy solutions, and workforce development to bring your projects to life. 
          <br>Let's collaborate to build something that lasts.</br>
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" 
            class="inline-flex items-center justify-center py-3 px-8 rounded-lg font-medium text-lg transition-all duration-300 bg-white text-primary hover:bg-gray-100 hover:shadow-lg">
            GET STARTED TODAY
            <UIcon name="i-heroicons-arrow-right" class="ml-2 w-5 h-5" />
          </NuxtLink>
          
          <NuxtLink to="/our-work" 
            class="inline-flex items-center justify-center py-3 px-8 rounded-lg font-medium text-lg transition-all duration-300 border-2 border-white text-white hover:bg-white/10">
            VIEW OUR WORK
            <UIcon name="i-heroicons-eye" class="ml-2 w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Decorative bottom accent -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-accent"></div>
  </section>
</template>

<script setup>
// Color definitions
const primaryColor = '#335FA8';
const primaryDarkColor = '#2a4d8a';
const primaryLightColor = '#4a7bc8';
const accentColor = '#E6A619';
</script>

<style scoped>
/* Color variables */
.bg-primary {
  background-color: v-bind(primaryColor);
}
.bg-primary-dark {
  background-color: v-bind(primaryDarkColor);
}
.bg-primary-light {
  background-color: v-bind(primaryLightColor);
}
.bg-accent {
  background-color: v-bind(accentColor);
}
.text-primary {
  color: v-bind(primaryColor);
}

/* Custom animations */
.xstrato-cta a {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.xstrato-cta a:hover {
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .xstrato-cta {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>