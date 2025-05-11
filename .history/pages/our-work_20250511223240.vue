<template>
  <div>
    <section class="w-full h-[50vh] relative">
      <img src="~/assets/img/PPIL-our-work.jpg" alt="PPIL Project Portfolio" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
        <div class="container mx-auto px-4 md:px-8">
          <!-- Desktop layout -->
          <div class="hidden md:flex justify-between items-center">
            <!-- Title (moved to left) -->
            <div class="text-white max-w-md">
              <h4 class="text-white text-xl uppercase tracking-wide font-medium mb-3 border-l-4 border-[#E6A619] pl-4">
                PPIL PROJECTS
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
                <span class="border-b-2 border-[#E6A619] pb-1">PPIL PROJECTS</span>
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
            From borehole drilling in remote communities to the rehabilitation of key healthcare centers and
            solar-powered solutions, our projects are designed to improve lives and support sustainable growth. Each
            project reflects our commitment to quality, timely delivery, and local impact.
          </p>
          <p class="text-lg md:text-xl text-gray-700">
            With a multidisciplinary team and a commitment to integrity and excellence, PPIL takes pride in projects
            that improve lives, strengthen communities, and support long-term development goals across Nigeria.
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Portfolio Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 md:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Some of Our Projects Portfolio
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/water-drilling.jpg" alt="Borehole Drilling" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Drilling of Boreholes, Gombe Metropolis</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Group of Individuals</p>
              <p class="text-gray-700">
                Multiple boreholes drilled within densely populated areas of Gombe to address chronic water shortages.
                This initiative provided thousands with reliable, clean water sources for household and community use.
              </p>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/hospital-renovation.jpg" alt="Hospital Rehabilitation"
              class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Repair Works, Kafanchan General Hospital, Kaduna</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: ICAP</p>
              <p class="text-gray-700">
                Comprehensive renovation of healthcare facilities to improve structural integrity, patient flow, and
                clinical safety. The work included infrastructure repairs and upgrades to utility systems.
              </p>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/hospital-repairs.jpg" alt="Hospital Rehabilitation" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Rehabilitation, Hajiya Gambo Swaba General Hospital,
                Zaria</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: ICAP</p>
              <p class="text-gray-700">
                Critical repairs and upgrades to aging hospital structures to support improved service delivery. The
                project aimed to align facility standards with modern health compliance benchmarks.
              </p>
            </div>
          </div>

          <!-- Project 4 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/water-drilling2.jpg" alt="Hospital Borehole" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Borehole Drilling, General Hospital Zambuk, Gombe</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: ICAP</p>
              <p class="text-gray-700">
                Strategically located boreholes installed to improve water access for both hospital operations and
                surrounding communities, reducing dependence on seasonal water sources.
              </p>
            </div>
          </div>

          <!-- Project 5 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/hangar-maintenance.jpg" alt="Hangar Maintenance" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Hangar Maintenance, NCAT, Zaria</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Nigerian College of Aviation Technology
                (NCAT)</p>
              <p class="text-gray-700">
                Preventive and corrective maintenance on aviation hangars, ensuring safety, functionality, and longevity
                of assets essential for Nigeria's aviation training hub.
              </p>
            </div>
          </div>

          <!-- Project 6 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/terrace-house2.jpg" alt="Terrace House" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Terrace House Construction, Gusau, Zamfara</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: CDP Partnership Ltd</p>
              <p class="text-gray-700">
                Design and construction of stylish, durable terrace housing units, built with locally sourced materials
                and tailored for the growing demand in Gusau's urban sector.
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/residential-building3.jpg" alt="Borehole Drilling" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Residential Buildings, Gombe, Kano, Borno, Kaduna</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: State Governments</p>
              <p class="text-gray-700">
                A series of residential developments across four northern states, providing safe, quality housing
                solutions for civil servants and local residents. Each project was tailored to state-specific
                requirements.
              </p>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/hospital-repairs2.jpg" alt="Hospital Rehabilitation"
              class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Hospital Rehabilitation, General Hospital Dukku, Gombe
              </h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Gombe State Government</p>
              <p class="text-gray-700">
                Rehabilitation and upgrade of core hospital infrastructure—improving emergency care capacity, inpatient
                areas, and facility-wide power and water systems.
              </p>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/bridge-construction-site.jpg" alt="Hospital Rehabilitation"
              class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Bridge Construction Supply, Reinforcement Steel</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: JM & AS Enterprises Ltd</p>
              <p class="text-gray-700">
                Timely delivery of 65 tonnes of high-grade reinforcement bars for use in a major bridge project,
                ensuring structural integrity and construction continuity.
              </p>
            </div>
          </div>

          <!-- Project 4 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/residential-building4.jpg" alt="Hospital Borehole" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Maintenance of Residential Units, 1000+ Houses</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Mainstream Energy Solutions Ltd</p>
              <p class="text-gray-700">
                Full-cycle maintenance and servicing of over 1000 housing units, including plumbing, electrical, and
                structural components, enhancing property value and occupant satisfaction.
              </p>
            </div>
          </div>

          <!-- Project 5 -->
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src="~/assets/img/residential-building2.jpg" alt="Hangar Maintenance" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Mass Housing Participation, FHA, Abuja</h3>
              <p class="text-sm text-[#E6A619] font-semibold mb-3">Client: Federal Housing Authority</p>
              <p class="text-gray-700">
                Contributed to the Abuja Mass Housing Development through land preparation, infrastructure support, and
                structural construction in line with federal housing standards.
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
          our team at <b class="dark:text-white">PPIL</b> is ready to deliver excellence at every stage.
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

useSeoMeta({
  title: 'Our Work | Premium Projects Infrastructure Limited',
  ogTitle: 'Our Work | Premium Projects Infrastructure Limited',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Our Work | Premium Projects Infrastructure Limited',
  twitterDescription: 'Our Work | Premium Projects Infrastructure Limited',

  ogImage: {
    url: '/PPIL-og-image.png',
    width: 1200,
    height: 630,
    alt: 'Our Work | Premium Projects Infrastructure Limited',
  },
  twitterImage: '/PPIL-og-image.png'

});
</script>