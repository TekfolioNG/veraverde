<template>
  <div>
    <!-- Hero section -->
    <section class="w-full h-[50vh] relative">
      <img src="~/assets/img/who-we-are-ppil.jpg" alt="PPIL Project Portfolio" class="w-full h-full object-cover" />
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
                Our Work
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
                Our Work
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-10 md:py-12 bg-gray-50">
      <div class="container mx-auto px-6 md:px-8 max-w-6xl">
        <div class="mb-4 md:mb-6">
          <h3 class="text-base md:text-lg text-gray-900 mb-5 text-right">
            We build with purpose. From borehole drilling in remote communities to the rehabilitation of key healthcare
            centers and solar-powered solutions, our projects are designed to improve lives and support sustainable
            growth.
          </h3>
          <div class="w-full h-0.5 bg-[#E6A619] mb-6"></div>
          <p class="text-base md:text-lg text-gray-900">
            Each project reflects our commitment to quality, timely delivery, and local impact. With a multidisciplinary
            team and a commitment to integrity and excellence, PPIL takes pride in projects that improve lives,
            strengthen communities, and support long-term development goals across Nigeria.
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Header -->
    <section class="py-8 bg-gray-150">
      <div class="container mx-auto px-6 md:px-10">
        <h2 class="text-3xl font-bold text-gray-900 mb-3 text-center"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Some of Our Project Portfolio
        </h2>
        <div class="w-24 h-0.5 bg-[#E6A619] mx-auto mb-6"></div>
      </div>
    </section>

    <!-- Project Cards - First Row -->
    <section class="py-6 md:py-10 bg-gray-150">
      <div class="container mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <!-- Project Card 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Borehole Project in Gombe"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Drilling of Boreholes, Gombe Metropolis
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: Group of Individuals</p>
              <p class="text-base text-gray-700">
                Multiple boreholes drilled within densely populated areas of Gombe to address chronic water shortages.
                This initiative provided thousands with reliable, clean water sources for household and community use.
              </p>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Kafanchan General Hospital Repairs"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Repair Works, Kafanchan General Hospital, Kaduna
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: ICAP (International Centre for AIDS Treatment
                Programs)</p>
              <p class="text-base text-gray-700">
                Comprehensive renovation of healthcare facilities to improve structural integrity, patient flow, and
                clinical safety. The work included infrastructure repairs and upgrades to utility systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Cards - Second Row -->
    <section class="py-6 md:py-10 bg-gray-150">
      <div class="container mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <!-- Project Card 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Hospital Rehabilitation in Zaria"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Rehabilitation, Hajiya Gambo Swaba General Hospital, Zaria
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: ICAP</p>
              <p class="text-base text-gray-700">
                Critical repairs and upgrades to aging hospital structures to support improved service delivery. The
                project aimed to align facility standards with modern health compliance benchmarks.
              </p>
            </div>
          </div>

          <!-- Project Card 4 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Borehole Drilling at Hospital"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Borehole Drilling, General Hospital Zambuk, Gombe
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: ICAP</p>
              <p class="text-base text-gray-700">
                Strategically located boreholes installed to improve water access for both hospital operations and
                surrounding communities, reducing dependence on seasonal water sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Cards - Third Row -->
    <section class="py-6 md:py-10 bg-gray-150">
      <div class="container mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <!-- Project Card 5 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Aviation Hangar Maintenance"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Hangar Maintenance, NCAT, Zaria
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: Nigerian College of Aviation Technology (NCAT)
              </p>
              <p class="text-base text-gray-700">
                Preventive and corrective maintenance on aviation hangars, ensuring safety, functionality, and longevity
                of assets essential for Nigeria's aviation training hub.
              </p>
            </div>
          </div>

          <!-- Project Card 6 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Terrace Housing Construction"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Terrace House Construction, Gusau, Zamfara
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: CDP Partnership Ltd</p>
              <p class="text-base text-gray-700">
                Design and construction of stylish, durable terrace housing units, built with locally sourced materials
                and tailored for the growing demand in Gusau's urban sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Cards - Fourth Row -->
    <section class="py-6 md:py-10 bg-gray-150">
      <div class="container mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <!-- Project Card 7 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Residential Building Projects"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Residential Buildings, Multiple States
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: State Governments</p>
              <p class="text-base text-gray-700">
                A series of residential developments across four northern states (Gombe, Kano, Borno, Kaduna), providing
                safe, quality housing solutions for civil servants and local residents. Each project was tailored to
                state-specific requirements.
              </p>
            </div>
          </div>

          <!-- Project Card 8 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Hospital Rehabilitation in Dukku"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Hospital Rehabilitation, General Hospital Dukku, Gombe
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: Gombe State Government</p>
              <p class="text-base text-gray-700">
                Rehabilitation and upgrade of core hospital infrastructure—improving emergency care capacity, inpatient
                areas, and facility-wide power and water systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Cards - Fifth Row -->
    <section class="py-6 md:py-10 bg-gray-150">
      <div class="container mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <!-- Project Card 9 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Bridge Construction Materials"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Bridge Construction Supply, Reinforcement Steel
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: JM & AS Enterprises Ltd</p>
              <p class="text-base text-gray-700">
                Timely delivery of 65 tonnes of high-grade reinforcement bars for use in a major bridge project,
                ensuring structural integrity and construction continuity.
              </p>
            </div>
          </div>

          <!-- Project Card 10 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Housing Maintenance"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Maintenance of Residential Units, 1000+ Houses
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: Mainstream Energy Solutions Ltd</p>
              <p class="text-base text-gray-700">
                Full-cycle maintenance and servicing of over 1000 housing units, including plumbing, electrical, and
                structural components, enhancing property value and occupant satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Cards - Sixth Row -->
    <section class="py-6 md:py-10 bg-gray-150">
      <div class="container mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <!-- Project Card 11 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Mass Housing Development"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Mass Housing Participation, FHA, Abuja
                </h3>
              </div>
              <p class="text-sm font-medium text-[#E6A619] mb-3">Client: Federal Housing Authority</p>
              <p class="text-base text-gray-700">
                Contributed to the Abuja Mass Housing Development through land preparation, infrastructure support, and
                structural construction in line with federal housing standards.
              </p>
            </div>
          </div>

          <!-- Project Card 12 - Additional Works -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-56 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Specialized Services"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-1 h-16 bg-[#E6A619] mr-4"></div>
                <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Barlow Condensed', sans-serif;">
                  Additional Works & Specialized Services
                </h3>
              </div>
              <p class="text-base text-gray-700">
                We also deliver specialized services such as geotechnical surveys, compaction, excavation, standalone
                solar power systems, depression stabilization, and boulder supply—all tailored to meet diverse civil and
                structural engineering needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Management Team Section -->
    <section class="py-10 md:py-14 bg-gray-50">
      <div class="container mx-auto px-6 md:px-10">
        <h2 class="text-3xl font-bold text-gray-900 mb-3 text-center"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Our Management Team
        </h2>
        <div class="w-24 h-0.5 bg-[#E6A619] mx-auto mb-6"></div>

        <p class="text-base md:text-lg text-gray-900 mb-10 max-w-4xl mx-auto text-center">
          Behind every successful delivery is a team of seasoned professionals with deep expertise, local insight, and a
          shared commitment to excellence. Our leadership team brings decades of combined experience in construction,
          project management, engineering, procurement, and operations.
        </p>

        <!-- Team Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          <!-- Team Member 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-64 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Aminu Abubakar Suleiman"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1" style="font-family: 'Barlow Condensed', sans-serif;">
                Aminu Abubakar Suleiman
              </h3>
              <p class="text-[#E6A619] font-medium mb-4">MD/CEO</p>
              <p class="text-sm text-gray-700">
                A seasoned project manager and quantity surveyor with over 21 years of experience, Aminu has led
                multimillion-naira construction and infrastructure projects across Nigeria. He holds a Master's in
                Project Management from Sheffield Hallam University, UK, and is a member of the APM (UK), NIQS, and
                RICS.
              </p>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-64 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Muhammad Shuaibu" class="w-full h-full object-cover"
                loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1" style="font-family: 'Barlow Condensed', sans-serif;">
                Engr. Muhammad Shuaibu
              </h3>
              <p class="text-[#E6A619] font-medium mb-4">Executive Director, Engineering & Project Management</p>
              <p class="text-sm text-gray-700">
                With a career spanning both public and private sectors, Muhammad oversees engineering design, quality
                control, and project supervision. He holds an MSc in Construction Project Management from Heriot-Watt
                University and is registered with COREN and NICE.
              </p>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-64 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Ibrahim Aminu Mashi"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1" style="font-family: 'Barlow Condensed', sans-serif;">
                Engr. Ibrahim Aminu Mashi
              </h3>
              <p class="text-[#E6A619] font-medium mb-4">Executive Director, Operations</p>
              <p class="text-sm text-gray-700">
                Ibrahim ensures projects are delivered on time, within budget, and to specification. With an MBA from
                the Nigerian Defence Academy and a background in both engineering and executive management, he brings a
                rare blend of strategic oversight and operational execution.
              </p>
            </div>
          </div>

          <!-- Team Member 4 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-64 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Abu Abubakar Yaro"
                class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1" style="font-family: 'Barlow Condensed', sans-serif;">
                Abu Abubakar Yaro
              </h3>
              <p class="text-[#E6A619] font-medium mb-4">Building Engineering Strategist</p>
              <p class="text-sm text-gray-700">
                Abu leads the design and technical execution of our building projects. His role covers structural
                integrity, system optimization, and safety compliance. His practical experience and technical acumen
                make him a core asset at both planning and construction stages.
              </p>
            </div>
          </div>

          <!-- Team Member 5 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-64 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Obi Regina Bufa" class="w-full h-full object-cover"
                loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1" style="font-family: 'Barlow Condensed', sans-serif;">
                Obi Regina Bufa
              </h3>
              <p class="text-[#E6A619] font-medium mb-4">Administrative Executive</p>
              <p class="text-sm text-gray-700">
                Regina coordinates administrative operations, HR, logistics, and internal communications. With a
                background in psychology and experience in digital strategy, she blends people skills with process
                efficiency, ensuring the company runs smoothly behind the scenes.
              </p>
            </div>
          </div>

          <!-- Team Member 6 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-64 bg-gray-200">
              <img src="~/assets/img/design-planning-PPIL.jpg" alt="Saidu Ahmed" class="w-full h-full object-cover"
                loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1" style="font-family: 'Barlow Condensed', sans-serif;">
                Saidu Ahmed
              </h3>
              <p class="text-[#E6A619] font-medium mb-4">Procurement Officer</p>
              <p class="text-sm text-gray-700">
                Saidu manages sourcing, vendor relations, and materials logistics. With a degree in Mathematics from
                Usman Danfodio University and years of experience in banking, he brings analytical precision and fiscal
                responsibility to procurement planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-8 md:py-10 bg-gray-100">
      <div class="container mx-auto px-6 md:px-10 text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Ready to Discuss Your Next Project?
        </h3>
        <p class="text-lg text-gray-900 mb-6 max-w-3xl mx-auto">
          Whether you're planning a new development, need infrastructure upgrades, or seeking maintenance solutions,
          our team at <b>PPIL</b> is ready to deliver excellence at every stage.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services"
            class="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300">
            Explore Our Services
          </a>
          <a href="/contact"
            class="px-6 py-3 bg-[#E6A619] text-black font-black rounded-lg hover:bg-[#d49916] transition-colors duration-300">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.custom-bullets {
  list-style-type: none;
}

.custom-bullets li {
  position: relative;
  padding-left: 1.5rem;
}

.custom-bullets li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #E6A619;
  transform: rotate(45deg);
}

@media (max-width: 640px) {
  .container {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  img {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
    width: calc(100% + 2.5rem);
    border-radius: 0;
  }
}

@media (max-width: 640px) {
  section .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  section img {
    border-radius: 0.5rem;
  }
}

.bg-gray-150 {
  background-color: #f0f2f5;
}
</style>

<script setup>
definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'Our Services | PPIL Construction',
  ogTitle: 'Our Services | PPIL Construction',
  titleTemplate: 'Our Services | PPIL Construction',
  description: 'Premium infrastructure services engineered to meet your project needs.',
  ogDescription: 'Premium infrastructure services engineered to meet your project needs.',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Our Services | PPIL Construction',
  twitterDescription: 'Premium infrastructure services engineered to meet your project needs.',

  ogImage: {
    url: 'https://ppil.com/ppil-services.jpg',
    width: 1200,
    height: 630,
    alt: 'PPIL Construction Services - Your Project, Our Mission'
  },
  twitterImage: 'https://ppil.com/ppil-services.jpg'
});
</script>