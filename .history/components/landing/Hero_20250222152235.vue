<template>
  <main class="relative grid lg:grid-cols-2 place-items-center pt-0 pb-8 md:pt-0">
    <!-- Hero Image Section -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        src="~/assets/img/empowerment_toei.jpg" alt="Starship starts the engine" loading="eager" format="avif" />
      <!-- Overlay - made slightly darker for mobile to improve text readability -->
      <div class="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-40"></div>
    </div>

    <!-- Content Section - Added padding-top to push content down -->
    <div class="relative z-10 px-8 md:px-12 lg:px-16 pt-24 md:pt-32 self-start mt-16 md:mt-20">
      <h1 class="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight text-white">
        Powering Enterprise Innovation with Trusted Technology
      </h1>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingDonationForm />
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

/* Optional: Add this if you want to adjust the minimum height on mobile */
@media (max-width: 768px) {
  main {
    min-height: 80vh;
  }
}
</style>