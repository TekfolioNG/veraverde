<template>
  <main class="relative grid lg:grid-cols-2 place-items-center pt-0 pb-8 md:pt-0">
    <!-- Hero Image Section -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        src="~/assets/img/empowerment_toei.jpg" alt="Community empowerment in Nigeria" loading="eager" format="avif" />
      <!-- Overlay with gradient for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
    </div>

    <!-- Content Section - Enhanced with more engaging copy -->
    <div class="relative z-10 px-8 md:px-12 lg:px-16 pt-24 md:pt-32 self-start mt-16 md:mt-20">
      <div class="mb-4">
        <span class="bg-[#901F61] text-white px-3 py-1 rounded-full text-sm font-medium">Rebuilding Lives & Communities

        </span>
      </div>
      <h1 class="hero-heading text-white mt-8 leading-tight">
        <span class="block text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold tracking-tight whitespace-nowrap">
          Help create hope
        </span>
      </h1>


      <div class="mt-12 flex flex-col sm:flex-row gap-4">
        <LandingDonationForm />
        <a href="/how-we-work"
          class="inline-flex items-center px-4 py-2 border-2 border-white text-white font-medium rounded-lg transition-colors hover:bg-white hover:text-[#901F61]">
          Our Impact
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
    <div></div> <!-- Empty div for grid structure -->
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  position: relative;
}

@media (max-width: 768px) {
  main {
    min-height: 90vh;
  }

  a.inline-flex {
    justify-content: center;
    width: 100%;
    text-align: center;
  }
}
</style>