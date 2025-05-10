<template>
  <div>
    <!-- Enhanced hero section -->
    <section class="w-full h-[50vh] relative">
      <img src="~/assets/img/who-we-are-ppil.jpg" alt="The Oaktree Empowerment Initiative"
        class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
        <div class="container mx-auto px-4 md:px-8">
          <!-- Desktop layout -->
          <div class="hidden md:flex justify-between items-center">
            <!-- Vision Title (moved to left) -->
            <div class="text-white max-w-md">
              <h4 class="text-white text-xl uppercase tracking-wide font-medium mb-3 border-l-4 border-[#E6A619] pl-4">
                OUR SERVICES
              </h4>
            </div>

            <!-- Content (shifted slightly lower) -->
            <div class="text-white max-w-2xl mt-16">
              <h1 class="text-5xl lg:text-6xl font-bold leading-relaxed mb-6"
                style="font-family: 'Barlow Condensed', sans-serif;">
                Your Project, Our Mission
              </h1>

            </div>
          </div>

          <!-- Mobile layout (stacked) -->
          <div class="md:hidden flex flex-col items-center text-center">
            <!-- Vision Title - centered on mobile -->
            <div class="text-white mb-6">
              <h4 class="text-white text-lg uppercase tracking-wide font-medium mb-3 relative inline-block">
                <span class="border-b-2 border-[#E6A619] pb-1">OUR SERVICES</span>
              </h4>
            </div>

            <!-- Content -->
            <div class="text-white">
              <h1 class="text-3xl font-bold leading-tight mb-4" style="font-family: 'Barlow Condensed', sans-serif;">
                Your Project, Our Mission
              </h1>

            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Focus areas section can be added below the hero -->
  </div>
  <section class="py-10 md:py-12 bg-gray-50">
    <div class="container mx-auto px-6 md:px-8 max-w-6xl">
      <!-- Text Block 1 -->
      <div class="mb-4 md:mb-6">
        <!-- Modified to h3 with right alignment -->
        <h3 class="text-base md:text-lg text-gray-900 mb-5 text-right">
          We build and manage the infrastructure that drives business, supports communities, and shapes tomorrow's
          cities.
        </h3>
        <div class="w-full h-0.5 bg-[#E6A619] mb-6"></div>

        <p class="text-base md:text-lg text-gray-900">
          As industries evolve and expectations grow, so do we. PPIL is equipped with the expertise, tools, and talent
          to deliver practical solutions that meet today's needs and prepare for what's next. Our steady shift beyond
          traditional construction into design, procurement, facility management, and international sourcing has
          positioned us as a reliable partner in every phase of development.
        </p>
      </div>

      <!-- Text Block 2 -->
      <div class="mb-4">
        <p class="text-base md:text-lg text-gray-900 mb-4">
          PPIL operates across diverse service lines tailored to meet distinct project demands. From idea to execution,
          our teams are structured to respond, deliver, and exceed expectations—every step of the way.
        </p>

      </div>
    </div>
  </section>


  <!-- Section 1: Design & Planning -->
  <section class="py-8 md:py-12 bg-gray-150">
    <div class="container mx-auto px-6 md:px-10">
      <div class="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-3" style="font-family: 'Barlow Condensed', sans-serif;">Design
            & Planning</h2>
          <div class="w-full h-0.5 bg-[#E6A619] mb-4"></div>
          <div class="space-y-3 text-gray-900">
            <p class="text-base md:text-lg">
              We help clients move from concept to construction with smart, purposeful designs tailored to real-world
              needs. Our team blends creative thinking with technical know-how to shape projects that work as
              beautifully as they look. Whether it's a new build or reimagining an existing structure, our focus stays
              on usability, efficiency, and long-term value.
            </p>
            <p class="font-medium">At PPIL, we:</p>
            <ul class="custom-bullets space-y-2">
              <li>Collaborate closely with clients to align ideas with execution</li>
              <li>Provide design blueprints and feasibility reports</li>
              <li>Prioritize sustainable, cost-aware planning</li>
              <li>Ensure every design fits the environment it serves</li>
            </ul>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2">
          <img src="~/assets/img/about-us-ppil.jpg" alt="Design & Planning"
            class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Construction & Project Planning -->
  <section class="py-8 md:py-12 bg-gray-150">
    <div class="container mx-auto px-6 md:px-10">
      <div class="flex flex-col md:flex-row-reverse items-stretch gap-4 md:gap-6">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-3" style="font-family: 'Barlow Condensed', sans-serif;">
            Construction & Project Planning</h2>
          <div class="w-full h-0.5 bg-[#E6A619] mb-4"></div>
          <div class="space-y-3 text-gray-900">
            <p class="text-base md:text-lg">
              This is where ideas become reality. We plan and deliver construction projects with a focus on safety,
              quality, and speed. From site prep to handover, we manage every stage with precision and accountability.
            </p>
            <p class="font-medium">At PPIL, we:</p>
            <ul class="custom-bullets space-y-2">
              <li>Coordinate all phases of project execution</li>
              <li>Maintain strict control over budget and timelines</li>
              <li>Build lasting structures with attention to detail</li>
              <li>Work with trusted partners to deliver value</li>
            </ul>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2">
          <img src="~/assets/img/about-us-ppil2.jpg" alt="Construction & Project Planning"
            class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Renovation & Upgrades -->
  <section class="py-8 md:py-12 bg-gray-150">
    <div class="container mx-auto px-6 md:px-10">
      <div class="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-3" style="font-family: 'Barlow Condensed', sans-serif;">
            Renovation & Upgrades</h2>
          <div class="w-full h-0.5 bg-[#E6A619] mb-4"></div>
          <div class="space-y-3 text-gray-900">
            <p class="text-base md:text-lg">
              We modernize old spaces and give new purpose to aging facilities. Our upgrade solutions are tailored to
              preserve what works and replace what doesn't. From simple makeovers to full structural improvements, we
              make buildings more useful, more efficient, and more beautiful.
            </p>
            <p class="font-medium">At PPIL, we:</p>
            <ul class="custom-bullets space-y-2">
              <li>Upgrade mechanical, structural, and aesthetic elements</li>
              <li>Improve functionality while keeping original intent</li>
              <li>Align renovations with current safety and code standards</li>
              <li>Deliver clean, modern finishes that add value</li>
            </ul>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2">
          <img src="~/assets/img/about-us-ppil5.jpg" alt="Renovation & Upgrades"
            class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Facility Audit / Condition Survey -->
  <section class="py-8 md:py-12 bg-gray-150">
    <div class="container mx-auto px-6 md:px-10">
      <div class="flex flex-col md:flex-row-reverse items-stretch gap-4 md:gap-6">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-3" style="font-family: 'Barlow Condensed', sans-serif;">
            Facility Audit / Condition Survey</h2>
          <div class="w-full h-0.5 bg-[#E6A619] mb-4"></div>
          <div class="space-y-3 text-gray-900">
            <p class="text-base md:text-lg">
              Before you plan, build, or invest, you need the full picture. Our audit services uncover potential risks,
              wear and tear, and future maintenance needs, helping you make informed decisions with confidence.
            </p>
            <p class="font-medium">At PPIL, we:</p>
            <ul class="custom-bullets space-y-2">
              <li>Conduct thorough visual and technical inspections</li>
              <li>Document facility performance and safety conditions</li>
              <li>Recommend action steps for repair or replacement</li>
              <li>Help prioritize short-term fixes and long-term upgrades</li>
            </ul>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2">
          <img src="~/assets/img/about-us-ppil4.jpg" alt="Facility Audit / Condition Survey"
            class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Facility Management -->
  <section class="py-8 md:py-12 bg-gray-150">
    <div class="container mx-auto px-6 md:px-10">
      <div class="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-3" style="font-family: 'Barlow Condensed', sans-serif;">
            Facility Management</h2>
          <div class="w-full h-0.5 bg-[#E6A619] mb-4"></div>
          <div class="space-y-3 text-gray-900">
            <p class="text-base md:text-lg">
              We keep the places you depend on running smoothly. Our facility management team offers ongoing care, fast
              response, and proactive checks to reduce downtime and extend the life of your assets.
            </p>
            <p class="font-medium">At PPIL, we:</p>
            <ul class="custom-bullets space-y-2">
              <li>Manage day-to-day upkeep of critical infrastructure</li>
              <li>Handle repairs, safety checks, and routine servicing</li>
              <li>Respond quickly to urgent issues</li>
              <li>Focus on cost control and operational performance</li>
            </ul>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2">
          <img src="~/assets/img/about-us-ppil3.jpg" alt="Facility Management"
            class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Engineering & Procurement Consultancy -->
  <section class="py-8 md:py-12 bg-gray-150">
    <div class="container mx-auto px-6 md:px-10">
      <div class="flex flex-col md:flex-row-reverse items-stretch gap-4 md:gap-6">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-3" style="font-family: 'Barlow Condensed', sans-serif;">
            Engineering & Procurement Consultancy</h2>
          <div class="w-full h-0.5 bg-[#E6A619] mb-4"></div>
          <div class="space-y-3 text-gray-900">
            <p class="text-base md:text-lg">
              We support clients with the right technical advice and materials at the right time. With engineering
              knowledge and sourcing expertise, we help projects move faster and run smoother — from design input to
              material selection.
            </p>
            <p class="font-medium">At PPIL, we:</p>
            <ul class="custom-bullets space-y-2">
              <li>Provide expert engineering insight from concept to delivery</li>
              <li>Source quality materials through reliable networks</li>
              <li>Align procurement with project goals and timelines</li>
              <li>Minimize waste, delays, and supply chain disruptions</li>
            </ul>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2">
          <img src="~/assets/img/about-us-ppil.jpg" alt="Engineering & Procurement Consultancy"
            class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Import & Export -->
  <section class="py-8 md:py-12 bg-gray-150">
    <div class="container mx-auto px-6 md:px-10">
      <div class="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-3" style="font-family: 'Barlow Condensed', sans-serif;">Import
            & Export</h2>
          <div class="w-full h-0.5 bg-[#E6A619] mb-4"></div>
          <div class="space-y-3 text-gray-900">
            <p class="text-base md:text-lg">
              When local sourcing isn't enough, we go further. Our import-export service ensures you get the right
              materials, equipment, or parts — no matter where they're from — without delay or hassle.
            </p>
            <p class="font-medium">At PPIL, we:</p>
            <ul class="custom-bullets space-y-2">
              <li>Procure and ship specialized construction goods</li>
              <li>Navigate import regulations and logistics</li>
              <li>Handle customs documentation with care</li>
              <li>Support complex projects with global supply needs</li>
            </ul>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2">
          <img src="~/assets/img/about-us-ppil5.jpg" alt="Import & Export"
            class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- Section 8: General Contractor -->
  <section class="py-8 md:py-12 bg-gray-150">
    <div class="container mx-auto px-6 md:px-10">
      <div class="flex flex-col md:flex-row-reverse items-stretch gap-4 md:gap-6">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-3" style="font-family: 'Barlow Condensed', sans-serif;">General
            Contractor</h2>
          <div class="w-full h-0.5 bg-[#E6A619] mb-4"></div>
          <div class="space-y-3 text-gray-900">
            <p class="text-base md:text-lg">
              As your general contractor, we bring everything together. We lead projects from start to finish, managing
              teams, timelines, and expectations with full accountability and transparency.
            </p>
            <p class="font-medium">At PPIL, we:</p>
            <ul class="custom-bullets space-y-2">
              <li>Serve as the central point of contact for all work</li>
              <li>Coordinate subcontractors, materials, and schedules</li>
              <li>Ensure safety, compliance, and performance on-site</li>
              <li>Deliver projects that meet or exceed client standards</li>
            </ul>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2">
          <img src="~/assets/img/about-us-ppil2.jpg" alt="General Contractor"
            class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section at the bottom of the page -->
  <section class="py-8 md:py-10 bg-gray-100">
    <div class="container mx-auto px-6 md:px-10 text-center">
      <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
        style="font-family: 'Barlow Condensed', sans-serif;">
        Ready to Build Something Premium Together?
      </h3>
      <p class="text-lg text-gray-900 mb-6 max-w-3xl mx-auto">
        Innovative engineering solutions? First-class infrastructure services? Or facility upgrades? Whatever
        your project needs, our
        team at <b>PPIL</b> is ready to bring your vision to life.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/our-work"
          class="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300">
          View Our Projects
        </a>
        <a href="/contact"
          class="px-6 py-3 bg-[#E6A619] text-black font-black rounded-lg hover:bg-[#d49916] transition-colors duration-300">
          Contact Our Team
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-cursive {
  font-family: 'Caveat', cursive, sans-serif;
}

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
  description: 'Premium infrastructure services tailored to meet your project needs.',
  ogDescription: 'Premium infrastructure services tailored to meet your project needs.',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Our Services | PPIL Construction',
  twitterDescription: 'Premium infrastructure services tailored to meet your project needs.',

  ogImage: {
    url: 'https://ppil.com/ppil-services.jpg',
    width: 1200,
    height: 630,
    alt: 'PPIL Construction Services - Your Project, Our Mission'
  },
  twitterImage: 'https://ppil.com/ppil-services.jpg'
});
</script>