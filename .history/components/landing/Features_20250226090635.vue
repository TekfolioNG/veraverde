<template>
  <section class="bg-gray-100 relative w-screen py-10 sm:py-12 translate-x-[-5%] sm:translate-x-[-2.8%]">
    <div class="max-w-7xl mx-auto px-8 sm:px-8 lg:px-16">
      <h2 class="text-3xl font-bold text-gray-700 text-center mb-12 pt-6">
        Empowering Nigerian Communities Through Skills and Support
      </h2>

      <div class="flex flex-col md:flex-row gap-8 items-center">
        <!-- Left content section -->
        <div class="w-full md:w-2/3">
          <p class="text-gray-700 leading-relaxed mb-8">
            Across Nigeria, communities face significant challenges that limit their potential. Our programs focus on
            skills acquisition and rehabilitation for individuals seeking fresh starts after incarceration, while also
            providing essential healthcare services, developing sustainable water sources, and building vital community
            infrastructure. By equipping people with marketable skills and creating supportive environments, we help
            transform lives and build self-sustaining communities across Nigeria.
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
            "After my time in prison, I had nowhere to turn. The skills acquisition program
            taught me carpentry and business management. Now I run my own workshop and employ
            two others from my community."
          </blockquote>

          <div class="flex items-center">
            <p class="font-bold text-[#901F61] text-xl">— Adebayo O,</p>
            <p class="text-[#901F61]">PROGRAM GRADUATE, LAGOS</p>
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