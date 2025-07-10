<template>
  <!-- Clean, nature-inspired layout -->
  <section class="relative bg-gradient-to-br from-green-50 to-white overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-accent/20 blur-2xl"></div>
    </div>

    <!-- Main content container -->
    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-16 md:py-24 lg:py-32">
      <!-- Company identifier - spans across both columns -->
      <div class="flex items-center justify-center mb-12">
        <div class="w-12 h-0.5 bg-accent mr-4 hidden md:block"></div>
        <span class="text-base uppercase tracking-wider font-medium text-primary text-center">
          <b>Vera Verde</b> means True Green
        </span>
        <div class="w-12 h-0.5 bg-accent ml-4 hidden md:block"></div>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-12 xl:gap-16">
        <!-- Text content -->
        <div class="lg:w-1/2 space-y-6 md:space-y-8">
          <!-- Mission header -->
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd" />
              </svg>
              <h2 class="text-sm uppercase tracking-wider font-medium text-primary">Our Mission</h2>
            </div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Igniting <span class="text-primary">a sustainable</span> future
            </h1>
          </div>

          <!-- Mission content -->
          <div class="prose max-w-none text-gray-700 space-y-4 md:space-y-6">
            <p class="text-base md:text-lg">
              <span class="font-semibold text-primary">Vera Verde</span> Limited
              is a forward-thinking green innovation company committed to
              advancing sustainable development through climate-smart agriculture, clean energy
              solutions, and environmental stewardship.
            </p>

            <p class="text-sm md:text-base">
              Based in Nigeria, our operations span across<span class="font-semibold"> farming communities, rice mill
                clusters,</span> and
              <span class="font-semibold">ecofuel processing hubs.</span>We collaborate with
              farmers, cooperatives, and institutions to deliver solutions that reduce emissions, enhance
              soil health, and generate economic value
            </p>

            <p class="text-sm md:text-base">
              We're not just reducing carbon; we're building better harvests, cleaner energy, and climate-resilient
              communities.
            </p>
          </div>

          <!-- Visual element - Mobile positioned here -->
          <div class="w-full lg:hidden relative my-8">
            <div class="relative">
              <!-- Main visual container - Enhanced for mobile -->
              <div
                class="relative aspect-[4/3] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-gradient-to-br from-green-100 via-white to-accent/10 floating-gentle">
                <!-- Before/After Transformation Images -->
                <div class="absolute inset-0 flex">
                  <!-- Rice Husk (Before) -->
                  <div class="w-1/2 relative overflow-hidden">
                    <img src="~/assets/img/rice-husk.jpg" alt="Rice husk agricultural waste"
                      class="w-full h-full object-cover">
                    <div
                      class="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Waste
                    </div>
                  </div>

                  <!-- Transformation Arrow - Mobile optimized -->
                  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div class="bg-white rounded-full p-1.5 shadow-lg">
                      <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </div>
                  </div>

                  <!-- Bio-coal (After) -->
                  <div class="w-1/2 relative overflow-hidden">
                    <img src="~/assets/img/bio-coal.jpg" alt="Biochar and briquettes climate solution"
                      class="w-full h-full object-cover">
                    <div
                      class="absolute bottom-2 right-2 bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Solution
                    </div>
                  </div>
                </div>
              </div>

              <!-- Decorative floating elements - Mobile version -->
              <div
                class="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-xl">
              </div>
              <div
                class="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 blur-lg">
              </div>

              <!-- Small accent dots - Mobile -->
              <div class="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full opacity-60"></div>
              <div class="absolute bottom-8 right-8 w-1.5 h-1.5 bg-accent rounded-full opacity-80"></div>
            </div>
          </div>

          <div
            class="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-4 md:p-6 border-l-4 border-[#406112]">
            <p class="text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed font-medium italic">
              With the right partners and support, we aim to scale our work toward certified carbon
              credits
              and greater environmental impact.
            </p>
          </div>

          <!-- Learn more button -->
          <div class="pt-4 text-center lg:text-left">
            <NuxtLink to="/about-us"
              class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300 group">
              <span>Learn more about us</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Visual element - Desktop only -->
        <div class="hidden lg:block lg:w-2/5 relative">
          <div class="relative">
            <!-- Main visual container - Enhanced for desktop -->
            <div
              class="relative aspect-[4/3.2] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-green-100 via-white to-accent/10 floating-gentle">
              <!-- Before/After Transformation Images -->
              <div class="absolute inset-0 flex">
                <!-- Rice Husk (Before) -->
                <div class="w-1/2 relative overflow-hidden">
                  <img src="~/assets/img/rice-husk.jpg" alt="Rice husk agricultural waste"
                    class="w-full h-full object-cover">
                  <div
                    class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Agricultural Waste
                  </div>
                </div>

                <!-- Transformation Arrow - Desktop -->
                <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div class="bg-white rounded-full p-2 shadow-lg">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>

                <!-- Bio-coal (After) -->
                <div class="w-1/2 relative overflow-hidden">
                  <img src="~/assets/img/bio-coal.jpg" alt="Biochar and briquettes climate solution"
                    class="w-full h-full object-cover">
                  <div
                    class="absolute bottom-4 right-4 bg-gradient-to-br from-[#2d420c] to-[#406112] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Climate Solution
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative floating elements - Desktop -->
            <div
              class="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-2xl">
            </div>
            <div
              class="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 blur-xl">
            </div>

            <!-- Small accent dots - Desktop -->
            <div class="absolute top-8 left-8 w-3 h-3 bg-primary rounded-full opacity-60"></div>
            <div class="absolute bottom-12 right-12 w-2 h-2 bg-accent rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>
/* Brand colors */
.bg-primary {
  background-color: #406112;
}

.text-primary {
  color: #406112;
}

.bg-primary-dark {
  background-color: #2f4a0d;
}

.bg-accent {
  background-color: #E6A619;
}

/* Gentle floating animation */
.floating-gentle {
  animation: float 4.5s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }
}

/* Smooth transitions */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Prose content styling */
.prose {
  color: #374151;
}

.prose p {
  margin-bottom: 1.25em;
  line-height: 1.625;
}

.prose p:last-child {
  margin-bottom: 0;
}

/* Mobile-specific improvements */
@media (max-width: 640px) {
  .floating-gentle {
    animation: float 4.5s ease-in-out infinite;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-6px);
    }
  }
}
</style>