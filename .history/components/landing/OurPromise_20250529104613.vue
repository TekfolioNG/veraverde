<template>
    <section class="xstrato-promise py-12 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section with logo and heading centered -->
        <div class="flex flex-col items-center mb-12 md:mb-16 gap-4 md:gap-6 text-center">
          <img src="~/assets/img/Xstrato-logo.png" alt="XSTRATO Logo" class="h-28 md:h-32 drop-shadow-lg" />
          <div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              The Xstrato Promise
            </h2>
            <p class="text-xl md:text-2xl text-gray-600 mt-2">
              What We Build Is Only Part of What We Deliver
            </p>
          </div>
        </div>
  
        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <!-- Left Column - Promise Text -->
          <div class="space-y-5">
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
              At XstratoPrime, we believe clients deserve more than just finished projects. They deserve a team that listens, delivers, and stands by its word. Whether we're constructing, training, or powering with solar, we stay grounded in values that guide every choice we make.
            </p>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
              From start to finish, we're committed to doing honest work, meeting real needs, and delivering outcomes that speak for themselves.
            </p>
          </div>
  
          <!-- Right Column - Bullet Points -->
          <div class="space-y-5">
            <h3 class="text-2xl md:text-3xl font-semibold text-gray-900">
              What You Can Expect from Us
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1 mr-3 text-primary">
                  <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" />
                </div>
                <span class="text-lg text-gray-700">
                  <strong class="text-gray-900">Innovation that works</strong> — not just new ideas, but practical solutions that make sense.
                </span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1 mr-3 text-primary">
                  <UIcon name="i-heroicons-document-text" class="w-5 h-5" />
                </div>
                <span class="text-lg text-gray-700">
                  <strong class="text-gray-900">Clarity on cost, quality, and timelines</strong> — no surprises, no shortcuts.
                </span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1 mr-3 text-primary">
                  <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5" />
                </div>
                <span class="text-lg text-gray-700">
                  <strong class="text-gray-900">Responsiveness</strong> — we stay in touch, follow up, and never leave clients in the dark.
                </span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1 mr-3 text-primary">
                  <UIcon name="i-heroicons-shield-check" class="w-5 h-5" />
                </div>
                <span class="text-lg text-gray-700">
                  <strong class="text-gray-900">Ethical standards</strong> — our work is clean, our dealings are straight.
                </span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 mt-1 mr-3 text-primary">
                  <UIcon name="i-heroicons-handshake" class="w-5 h-5" />
                </div>
                <span class="text-lg text-gray-700">
                  <strong class="text-gray-900">Trust you can build on</strong> — because every successful project starts with reliability.
                </span>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Visual divider -->
        <div class="flex justify-center mt-12">
          <div class="w-24 h-1 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Define primary color
  const primaryColor = '#335FA8';
  </script>
  
  <style scoped>
  /* Primary color variables */
  .bg-primary {
    background-color: v-bind(primaryColor);
  }
  
  .text-primary {
    color: v-bind(primaryColor);
  }
  
  /* Custom styling */
  .xstrato-promise {
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(245,248,250,1) 100%);
  }
  
  /* Responsive adjustments */
  @media (max-width: 767px) {
    .xstrato-promise {
      background: white;
    }
  }
  </style>