<template>
  <div>
    <section class="w-full h-[50vh] relative">
      <img src="~/assets/img/about-xstrato.png" alt="XSATRO Project Portfolio" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
        <div class="container mx-auto px-4 md:px-8">
          <!-- Desktop layout -->
          <div class="hidden md:flex justify-between items-center">
            <!-- Title (moved to left) -->
            <div class="text-white max-w-md">
              <h4 class="text-white text-xl uppercase tracking-wide font-medium mb-3 border-l-4 border-[#E6A619] pl-4">
                XSATRO PROJECTS
              </h4>
            </div>

            <!-- Content (shifted slightly lower) -->
            <div class="text-white max-w-2xl mt-16">
              <h1 class="text-5xl lg:text-6xl font-bold leading-relaxed mb-6"
                style="font-family: 'Barlow Condensed', sans-serif;">
                Our Work Portfolio
              </h1>
            </div>
          </div>

          <!-- Mobile layout (stacked) -->
          <div class="md:hidden flex flex-col items-center text-center">
            <!-- Title - centered on mobile -->
            <div class="text-white mb-6">
              <h4 class="text-white text-lg uppercase tracking-wide font-medium mb-3 relative inline-block">
                <span class="border-b-2 border-[#E6A619] pb-1">XSATRO PROJECTS</span>
              </h4>
            </div>

            <!-- Content -->
            <div class="text-white">
              <h1 class="text-3xl font-bold leading-tight mb-4" style="font-family: 'Barlow Condensed', sans-serif;">
                Our Work Portfolio
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-6 md:px-8 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style="font-family: 'Barlow Condensed', sans-serif;">
            We Build With Purpose
          </h2>
          <div class="w-24 h-1 bg-[#E6A619] mx-auto mb-8"></div>
          <p class="text-lg md:text-xl text-gray-700 mb-6">
            From comprehensive infrastructure development and specialized consultancy services to digital transformation and telecommunications projects, our diverse portfolio reflects our commitment to excellence across multiple sectors. Each project demonstrates our ability to deliver innovative solutions that drive sustainable development and improve communities.
          </p>
          <p class="text-lg md:text-xl text-gray-700">
            With expertise spanning civil engineering, project management, procurement consulting, and digital strategy, XSATRO continues to be a trusted partner for organizations seeking reliable, high-quality project execution and strategic guidance across Nigeria and beyond.
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Portfolio Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 md:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Selected Projects Portfolio
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/hospital-renovation.jpg" alt="Healthcare Infrastructure Development" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Healthcare System Development Procurement Consultancy</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Kebbi State Government (World Bank Assisted)</p>
              <p class="text-gray-700">
                Served as Individual Consultant on Procurement of Civil Works and Goods for the Kebbi State Health System Development Project II. This World Bank-assisted initiative focused on strengthening healthcare infrastructure through strategic procurement planning, compliance oversight, and quality assurance to ensure optimal resource allocation and project delivery standards.
              </p>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/water-drilling.jpg" alt="Solar Powered Water Infrastructure" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Solar Powered Borehole & Water Treatment Plant</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Total Upstream Nigeria Limited (CSR Initiative)</p>
              <p class="text-gray-700">
                Led as Project Manager for the construction of a comprehensive solar-powered borehole and water treatment facility in Brinin Kebni from 2017-2019. This sustainable water infrastructure project combined renewable energy technology with advanced water treatment systems, providing reliable clean water access to the community while demonstrating environmental responsibility and corporate social investment.
              </p>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/hangar-maintenance.jpg" alt="University Equipment Procurement" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Critical Equipment Procurement for University Accreditation</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Usman Danfodiyo University Sokoto</p>
              <p class="text-gray-700">
                Served as Assistant Procurement Officer for the strategic provision of critical equipment and specialized supplies for the Department of Electrical Engineering's accreditation requirements. This project involved careful vendor selection, quality verification, and timely delivery coordination to meet stringent academic accreditation standards and enhance the university's educational infrastructure capabilities.
              </p>
            </div>
          </div>

          <!-- Project 4 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/bridge-construction-site.jpg" alt="Telecommunications Infrastructure" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Fibre Network Ducting Infrastructure Development</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: MTN Nigeria</p>
              <p class="text-gray-700">
                Executed as primary contractor for the construction of specialized ducting infrastructure for MTN Nigeria's fiber network expansion on a trial basis. This telecommunications project required precision engineering and adherence to strict technical specifications to ensure optimal fiber optic cable protection and future network scalability, contributing to Nigeria's digital infrastructure advancement.
              </p>
            </div>
          </div>

          <!-- Project 5 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/residential-building3.jpg" alt="Educational Infrastructure Rehabilitation" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Hostel Rehabilitation Project - NITT</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Nigerian Institute of Transport Technology</p>
              <p class="text-gray-700">
                Managed the comprehensive rehabilitation of 51 hostel rooms at the Nigerian Institute of Transport Technology as Project Manager. This extensive renovation project encompassed structural improvements, modern amenities installation, safety compliance upgrades, and enhanced living conditions to support the educational institution's accommodation standards and student welfare objectives.
              </p>
            </div>
          </div>

          <!-- Project 6 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/residential-building2.jpg" alt="Digital Marketing Strategy" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Digital Strategy & Social Media Campaign Management</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Webenza Digital Solutions</p>
              <p class="text-gray-700">
                Served as Digital Strategist specializing in Social Media Quality (SMQ) Analysis and comprehensive social media campaign planning. This role involved developing data-driven digital marketing strategies, analyzing engagement metrics, optimizing content performance, and creating targeted campaigns to enhance brand visibility and audience engagement across multiple digital platforms for diverse client portfolios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-8 md:py-10 pb-12 bg-white dark:bg-[#002244]">
      <div class="container mx-auto px-6 md:px-10 text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Ready to work together?
        </h3>
        <p class="text-lg text-gray-900 dark:text-gray-200 mb-6 max-w-3xl mx-auto">
          Whether you have a project in mind and you're looking for a reliable construction partner or seeking
          maintenance solutions,
          our team at <b class="dark:text-white">XSATRO</b> is ready to deliver excellence at every stage.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services"
            class="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:hover:bg-gray-600">
            Build a Project with Us
          </a>
          <a href="/contact"
            class="px-6 py-3 bg-[#E6A619] text-black font-black rounded-lg hover:bg-[#d49916] transition-colors duration-300 dark:hover:bg-[#c58e14]">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&display=swap');
</style>

<script setup>
definePageMeta({
  layout: "landing"
});

useHead({
  meta: [
    { property: 'og:title', content: 'Our Work | Premium Projects Infrastructure Limited' },
    { property: 'og:description', content: 'Excellence & Innovation in Infrastructure.' },
    { property: 'og:image', content: 'https://ppil.com.ng/PPIL-og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Our Work | Premium Projects Infrastructure Limited' },
    { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Our Work | Premium Projects Infrastructure Limited' },
        { name: 'twitter:description', content: 'Our Work | Premium Projects Infrastructure Limited' },
    { name: 'twitter:image', content: 'https://ppil.com.ng/PPIL-og-image.png' }
  ]
});
</script>