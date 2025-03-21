<template>
  <section class="bg-gray-100 relative w-screen py-10 sm:py-12 translate-x-[-5%] sm:translate-x-[-2.8%]">
    <div class="max-w-7xl mx-auto px-8 sm:px-8 lg:px-16">
      <h2 class="text-3xl font-bold text-gray-700 text-center mb-12 pt-6">
        You can help transform Nigerian communities through sustainable development
      </h2>

      <div class="flex flex-col md:flex-row gap-8 items-center">
        <!-- Left content section -->
        <div class="w-full md:w-2/3">
          <p class="text-gray-700 leading-relaxed mb-8">
            Across Nigeria, communities face significant challenges: limited access to healthcare,
            scarcity of clean water, inadequate public facilities, and lack of economic opportunities.
            With your support, we provide essential healthcare services, develop sustainable water sources,
            build community infrastructure, and offer skills training programs for adults—including those
            seeking rehabilitation after incarceration. Together, we can create lasting change that empowers
            individuals and builds resilient communities across Nigeria.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/projects"
              class="bg-[#901F61] hover:bg-[#A82C6F] text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300">
              SUPPORT OUR PROJECTS
            </NuxtLink>

            <NuxtLink to="/our-approach"
              class="text-[#009976 hover:text-[#00B28A] font-medium py-3 flex items-center justify-center transition-colors duration-300">
              SEE HOW WE CREATE IMPACT
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
          <blockquote class="italic text-[#901F61] text-lg mb-4">
            "After completing the skills acquisition program,
            I was able to start my own business and provide for my family.
            This organization gave me hope for the future."
          </blockquote>

          <div class="flex items-center">
            <div>
              <p class="font-bold text-[#901F61] text-xl">— Adebayo O,</p>
              <p class="text-[#901F61]">PROGRAM GRADUATE, LAGOS</p>
            </div>
          </div>

          <NuxtLink to="/success-stories"
            class="text-[#009976 hover:text-[#00B28A] font-medium mt-6 flex items-center transition-colors duration-300">
            MORE SUCCESS STORIES
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