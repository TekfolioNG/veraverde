<template>
  <div>
    <section class="w-full h-[50vh] relative">
      <img src="~/assets/img/about-xstrato.png" alt="PPIL Project Portfolio" class="w-full h-full object-cover" />
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
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 md:px-8 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style="font-family: 'Barlow Condensed', sans-serif;">
            Building Excellence Across Nigeria
          </h2>
          <div class="w-24 h-1 bg-[#E6A619] mx-auto mb-8"></div>
          <p class="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            From critical healthcare infrastructure to sustainable water solutions and modern residential developments, 
            our diverse project portfolio demonstrates our commitment to transforming communities across Nigeria. Each 
            project reflects our dedication to quality construction, innovative engineering, and sustainable development practices.
          </p>
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
            With our multidisciplinary team of engineers, architects, and project managers, PPIL delivers comprehensive 
            infrastructure solutions that meet international standards while addressing local needs and environmental considerations.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 md:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style="font-family: 'Barlow Condensed', sans-serif;">
            Featured Project Portfolio
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise across healthcare infrastructure, water systems, residential development, 
            and specialized engineering solutions.
          </p>
        </div>

        <!-- Healthcare Infrastructure Projects -->
        <div class="mb-20">
          <div class="flex items-center mb-10">
            <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900" 
                style="font-family: 'Barlow Condensed', sans-serif;">
              HEALTHCARE INFRASTRUCTURE
            </h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="~/assets/img/hospital-renovation.jpg" alt="Hospital Rehabilitation" class="w-full h-48 object-cover">
              <div class="p-6">
                <h4 class="text-xl font-bold text-gray-900 mb-2">Kafanchan General Hospital Rehabilitation</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: ICAP | Location: Kaduna State</p>
                <p class="text-gray-700 mb-4">
                  Comprehensive renovation and modernization of Kafanchan General Hospital's critical care facilities. 
                  Our team executed structural repairs, upgraded medical gas systems, improved electrical infrastructure, 
                  and enhanced patient flow designs to meet contemporary healthcare standards.
                </p>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="font-semibold text-gray-800">Scope:</span>
                    <p class="text-gray-600">Structural rehabilitation, MEP upgrades</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-800">Impact:</span>
                    <p class="text-gray-600">Enhanced healthcare delivery capacity</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="~/assets/img/hospital-repairs.jpg" alt="Hospital Rehabilitation" class="w-full h-48 object-cover">
              <div class="p-6">
                <h4 class="text-xl font-bold text-gray-900 mb-2">Hajiya Gambo Swaba General Hospital Upgrade</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: ICAP | Location: Zaria, Kaduna State</p>
                <p class="text-gray-700 mb-4">
                  Complete rehabilitation of aging hospital infrastructure including emergency department expansion, 
                  operating theater modernization, and installation of backup power systems. The project aligned 
                  facility standards with modern health compliance benchmarks and improved service delivery capacity.
                </p>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="font-semibold text-gray-800">Scope:</span>
                    <p class="text-gray-600">Emergency dept., theaters, power systems</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-800">Impact:</span>
                    <p class="text-gray-600">Improved patient care standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div class="md:flex">
              <img src="~/assets/img/hospital-repairs2.jpg" alt="Hospital Rehabilitation" class="w-full md:w-1/2 h-64 md:h-auto object-cover">
              <div class="p-6 md:w-1/2">
                <h4 class="text-xl font-bold text-gray-900 mb-2">General Hospital Dukku Rehabilitation</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: Gombe State Government | Location: Dukku, Gombe State</p>
                <p class="text-gray-700 mb-4">
                  Major rehabilitation project focusing on emergency care capacity enhancement, inpatient ward upgrades, 
                  and comprehensive facility-wide power and water system improvements. Our engineering team designed 
                  sustainable solutions to ensure reliable utility services and improved patient care environments.
                </p>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="font-semibold text-gray-800">Key Features:</span>
                    <ul class="text-gray-600 text-xs mt-1">
                      <li>• Emergency care expansion</li>
                      <li>• Inpatient facility upgrades</li>
                      <li>• Utility system overhaul</li>
                    </ul>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-800">Outcome:</span>
                    <p class="text-gray-600">Enhanced healthcare delivery for rural communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Water Infrastructure Projects -->
        <div class="mb-20">
          <div class="flex items-center mb-10">
            <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900" 
                style="font-family: 'Barlow Condensed', sans-serif;">
              WATER INFRASTRUCTURE & DRILLING
            </h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="~/assets/img/water-drilling.jpg" alt="Borehole Drilling" class="w-full h-48 object-cover">
              <div class="p-6">
                <h4 class="text-xl font-bold text-gray-900 mb-2">Gombe Metropolitan Borehole Development</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: Community Groups | Location: Gombe Metropolis</p>
                <p class="text-gray-700 mb-4">
                  Strategic borehole drilling program across densely populated areas of Gombe to address chronic water 
                  shortages. Our team utilized advanced drilling technology and hydrogeological surveys to ensure 
                  sustainable water yield and quality for thousands of residents.
                </p>
                <div class="text-sm space-y-2">
                  <div><span class="font-semibold text-gray-800">Technology:</span> <span class="text-gray-600">Advanced rotary drilling equipment</span></div>
                  <div><span class="font-semibold text-gray-800">Beneficiaries:</span> <span class="text-gray-600">Over 5,000 residents</span></div>
                  <div><span class="font-semibold text-gray-800">Sustainability:</span> <span class="text-gray-600">Solar-powered pump systems</span></div>
                </div>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="~/assets/img/water-drilling2.jpg" alt="Hospital Borehole" class="w-full h-48 object-cover">
              <div class="p-6">
                <h4 class="text-xl font-bold text-gray-900 mb-2">General Hospital Zambuk Borehole System</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: ICAP | Location: Zambuk, Gombe State</p>
                <p class="text-gray-700 mb-4">
                  Specialized borehole installation designed to serve both hospital operations and surrounding communities. 
                  The project included water treatment systems, storage tanks, and distribution networks to ensure 
                  reliable water supply for critical healthcare services.
                </p>
                <div class="text-sm space-y-2">
                  <div><span class="font-semibold text-gray-800">Capacity:</span> <span class="text-gray-600">50,000 liters/day sustainable yield</span></div>
                  <div><span class="font-semibold text-gray-800">Features:</span> <span class="text-gray-600">Treatment plant, dual distribution</span></div>
                  <div><span class="font-semibold text-gray-800">Impact:</span> <span class="text-gray-600">Hospital + 2,000 community members</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Residential & Housing Projects -->
        <div class="mb-20">
          <div class="flex items-center mb-10">
            <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900" 
                style="font-family: 'Barlow Condensed', sans-serif;">
              RESIDENTIAL DEVELOPMENT
            </h3>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="~/assets/img/terrace-house2.jpg" alt="Terrace House Construction" class="w-full h-40 object-cover">
              <div class="p-5">
                <h4 class="text-lg font-bold text-gray-900 mb-2">Gusau Terrace Housing Development</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: CDP Partnership Ltd</p>
                <p class="text-gray-700 text-sm mb-3">
                  Modern terrace housing units designed with contemporary architecture and locally sourced materials. 
                  Features energy-efficient designs and community amenities.
                </p>
                <div class="text-xs text-gray-600">
                  <div><span class="font-semibold">Units:</span> 24 terrace houses</div>
                  <div><span class="font-semibold">Features:</span> Modern amenities, parking</div>
                </div>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="~/assets/img/residential-building3.jpg" alt="Multi-State Residential" class="w-full h-40 object-cover">
              <div class="p-5">
                <h4 class="text-lg font-bold text-gray-900 mb-2">Multi-State Residential Program</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: State Governments</p>
                <p class="text-gray-700 text-sm mb-3">
                  Residential developments across Gombe, Kano, Borno, and Kaduna states, providing quality housing 
                  solutions tailored to each state's specific requirements and climate conditions.
                </p>
                <div class="text-xs text-gray-600">
                  <div><span class="font-semibold">Locations:</span> 4 northern states</div>
                  <div><span class="font-semibold">Target:</span> Civil servants & residents</div>
                </div>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="~/assets/img/residential-building2.jpg" alt="FHA Mass Housing" class="w-full h-40 object-cover">
              <div class="p-5">
                <h4 class="text-lg font-bold text-gray-900 mb-2">FHA Mass Housing Participation</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: Federal Housing Authority</p>
                <p class="text-gray-700 text-sm mb-3">
                  Strategic contribution to Abuja's mass housing development through land preparation, infrastructure 
                  support, and structural construction meeting federal housing standards.
                </p>
                <div class="text-xs text-gray-600">
                  <div><span class="font-semibold">Role:</span> Infrastructure & construction</div>
                  <div><span class="font-semibold">Standards:</span> Federal housing compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Specialized Engineering Projects -->
        <div class="mb-16">
          <div class="flex items-center mb-10">
            <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900" 
                style="font-family: 'Barlow Condensed', sans-serif;">
              SPECIALIZED ENGINEERING
            </h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="~/assets/img/hangar-maintenance.jpg" alt="Aviation Hangar Maintenance" class="w-full h-48 object-cover">
              <div class="p-6">
                <h4 class="text-xl font-bold text-gray-900 mb-2">NCAT Aviation Hangar Maintenance</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: Nigerian College of Aviation Technology</p>
                <p class="text-gray-700 mb-4">
                  Comprehensive preventive and corrective maintenance program for aviation training hangars. Our specialized 
                  team ensures safety compliance, structural integrity, and operational readiness of facilities critical 
                  to Nigeria's aviation training infrastructure.
                </p>
                <div class="text-sm">
                  <div class="mb-2"><span class="font-semibold text-gray-800">Services:</span> <span class="text-gray-600">Structural maintenance, safety systems, facility management</span></div>
                  <div><span class="font-semibold text-gray-800">Compliance:</span> <span class="text-gray-600">International aviation safety standards</span></div>
                </div>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="~/assets/img/bridge-construction-site.jpg" alt="Bridge Construction Supply" class="w-full h-48 object-cover">
              <div class="p-6">
                <h4 class="text-xl font-bold text-gray-900 mb-2">Bridge Construction Steel Supply</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: JM & AS Enterprises Ltd</p>
                <p class="text-gray-700 mb-4">
                  Critical supply of 65 tonnes of high-grade reinforcement steel for major bridge construction project. 
                  Our procurement team ensured timely delivery of certified materials meeting international structural 
                  standards, enabling seamless construction continuity.
                </p>
                <div class="text-sm">
                  <div class="mb-2"><span class="font-semibold text-gray-800">Volume:</span> <span class="text-gray-600">65 tonnes high-grade reinforcement bars</span></div>
                  <div><span class="font-semibold text-gray-800">Standards:</span> <span class="text-gray-600">International structural steel specifications</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Maintenance & Asset Management -->
        <div class="mb-16">
          <div class="flex items-center mb-10">
            <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900" 
                style="font-family: 'Barlow Condensed', sans-serif;">
              MAINTENANCE & ASSET MANAGEMENT
            </h3>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div class="md:flex">
              <img src="~/assets/img/residential-building4.jpg" alt="Mass Residential Maintenance" class="w-full md:w-1/2 h-64 md:h-auto object-cover">
              <div class="p-6 md:w-1/2">
                <h4 class="text-xl font-bold text-gray-900 mb-2">Large-Scale Residential Maintenance Program</h4>
                <p class="text-[#E6A619] font-semibold text-sm mb-3">Client: Mainstream Energy Solutions Ltd</p>
                <p class="text-gray-700 mb-4">
                  Comprehensive maintenance and asset management program covering over 1,000 residential units. Our 
                  integrated approach includes preventive maintenance schedules, emergency response systems, and 
                  systematic upgrades to plumbing, electrical, and structural components.
                </p>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="font-semibold text-gray-800">Scope of Work:</span>
                    <ul class="text-gray-600 text-xs mt-1">
                      <li>• Plumbing system maintenance</li>
                      <li>• Electrical infrastructure</li>
                      <li>• Structural component repairs</li>
                      <li>• HVAC system servicing</li>
                    </ul>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-800">Impact:</span>
                    <p class="text-gray-600">Enhanced property value, improved occupant satisfaction, extended asset lifespan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-6 md:px-8 text-center">
        <h3 class="text-3xl md:text-4xl font-bold mb-6" 
            style="font-family: 'Barlow Condensed', sans-serif;">
          Ready to Build Your Next Project?
        </h3>
        <p class="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Whether you're planning healthcare infrastructure, residential development, water systems, or specialized 
          engineering projects, our experienced team at PPIL is ready to deliver excellence at every stage.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services"
            class="px-8 py-3 bg-[#E6A619] text-black font-bold rounded-lg hover:bg-[#d4941a] transition-colors duration-300">
            Explore Our Services
          </a>
          <a href="/contact"
            class="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
            Start Your Project
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
    { property: 'og:title', content: 'Our Projects | Premium Projects Infrastructure Limited' },
    { property: 'og:description', content: 'Excellence & Innovation in Infrastructure Development Across Nigeria.' },
    { property: 'og:image', content: 'https://ppil.com.ng/PPIL-og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Our Projects | Premium Projects Infrastructure Limited' },
    { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Our Projects | Premium Projects Infrastructure Limited' },
        { name: 'twitter:description', content: 'Our Projects | Premium Projects Infrastructure Limited' },
    { name: 'twitter:image', content: 'https://ppil.com.ng/PPIL-og-image.png' }
  ]
});
</script>