<template>
  <section class="sponsor-section w-screen overflow-hidden bg-gray-100 py-16">
    <div class="container-fluid px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-700 text-center mb-12">
        You can help end poverty for good by sponsoring a child
      </h2>

      <div class="flex flex-col md:flex-row gap-8 items-center">
        <!-- Left content section -->
        <div class="w-full md:w-2/3">
          <p class="text-gray-700 leading-relaxed mb-8">
            Growing up in poverty, children face tough challenges: hunger and
            malnutrition, limited access to education and medical services, social
            discrimination and isolation. But with charity from people like you, we can
            help children get the health care, education, life skills, job-readiness training
            and confidence they need to create lasting change in their lives and
            communities. Together, we can end poverty for good.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/sponsor"
              class="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300">
              SPONSOR A CHILD
            </NuxtLink>

            <NuxtLink to="/how-sponsorship-works"
              class="text-emerald-500 hover:text-emerald-600 font-medium py-3 flex items-center justify-center transition-colors duration-300">
              SEE HOW SPONSORSHIP WORKS
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 010-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right testimonial section -->
        <div class="w-full md:w-1/3 md:border-l border-gray-300 md:pl-8">
          <blockquote class="italic text-purple-700 text-lg mb-4">
            "It's wonderful to help a child in need,
            and Children International makes it
            possible."
          </blockquote>

          <div class="flex items-center">
            <div>
              <p class="font-bold text-purple-700 text-xl">— Giovanni S,</p>
              <p class="text-purple-700">DONOR SINCE 1999</p>
            </div>
          </div>

          <NuxtLink to="/testimonials"
            class="text-emerald-500 hover:text-emerald-600 font-medium mt-6 flex items-center transition-colors duration-300">
            MORE FROM OUR SUPPORTERS
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 010-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script logic needed for this component
</script>

<style scoped>
/* More aggressive full-width styles to eliminate all margins */
.sponsor-section {
  position: relative;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  box-sizing: border-box;
}

.container-fluid {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 16px;
  padding-right: 16px;
}

/* Target specifically the left margin issue */
@media (max-width: 768px) {
  .sponsor-section {
    left: 0;
    margin-left: 0;
    padding-left: 0;
  }

  .container-fluid {
    padding-left: 16px;
  }
}

/* Reset global styles that might be affecting your component */
:global(body),
:global(html),
:global(#__nuxt),
:global(#__layout) {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
</style>