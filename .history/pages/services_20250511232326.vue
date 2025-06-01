<template>
  <div>
    <!-- Enhanced hero section -->
    <section class="w-full h-[50vh] relative">
      <img src="~/assets/img/who-we-are-ppil.jpg" alt="PPIL Services" class="w-full h-full object-cover" />
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

    <!-- Added spacing between sections -->
    <div class="h-8 bg-gray-100"></div>

    <!-- Services Introduction - increased text size and changed bg to gray-100 -->
    <section class="py-10 md:py-12 bg-gray-100">
      <div class="container mx-auto px-6 md:px-8 max-w-6xl">
        <h2 class="text-2xl md:text-3xl text-gray-900 mb-4 text-right"
          style="font-family: 'Barlow Condensed', sans-serif;">
          We build and manage the infrastructure that drives businesses and public service, supports communities, and
          shapes tomorrow's
          cities.
        </h2>
        <div class="w-full h-0.5 bg-[#E6A619] mb-6"></div>

        <div class="space-y-6">
          <p class="text-base md:text-lg text-gray-900">
            As industries evolve and expectations grow, so do we. PPIL is equipped with the expertise, tools, and talent
            to deliver practical solutions that meet today's needs and prepare for what's next.
          </p>
          <p class="text-base md:text-lg text-gray-900">
            Our steady shift beyond traditional construction into design, procurement, facility management, and
            international sourcing has
            positioned us as a reliable partner in every phase of development.
          </p>
          <p class="text-base md:text-lg text-gray-900">
            PPIL operates across diverse service lines tailored to meet distinct project demands.
          </p>
          <p class="text-base md:text-lg text-gray-900">
            From idea to execution, our teams are structured to respond, deliver, and exceed expectations, every step of
            the way.
          </p>
        </div>
      </div>
    </section>

    <!-- Added spacing between sections -->
    <div class="h-8 bg-gray-100"></div>

    <!-- Services Grid - Now with gray-100 background instead of gray-150 -->
    <section class="bg-gray-100">
      <div class="container mx-auto px-6 md:px-8">
        <!-- Design & Planning -->
        <div class="flex flex-col md:flex-row items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Design & Planning
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                We help clients move from concept to construction with smart, purposeful architecture customized for
                practical, modern, and sustainable living.
              </p>
              <p class="text-base md:text-lg">
                Our team blends creative thinking with technical know-how to shape projects that work as
                beautifully as they look. Whether it's a new build or reimagining an existing structure, our focus stays
                on usability, efficiency, and long-term value.
              </p>
              <p class="text-base md:text-lg font-medium"><b>
                  At PPIL, we:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Collaborate closely with clients to align ideas with execution</li>
                <li>Provide design blueprints and feasibility reports</li>
                <li>Prioritize sustainable, cost-aware planning</li>
                <li>Ensure every design fits the environment it serves</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/design-planning-PPIL.jpg" alt="Design & Planning" class="w-full h-full object-cover"
              loading="lazy" />
          </div>
        </div>

        <!-- Construction & Project Planning -->
        <div class="flex flex-col md:flex-row-reverse items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Construction & Project Planning
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                This is where ideas become reality. We plan and deliver construction projects with a focus on safety,
                quality, and speed.
              </p>
              <p class="text-base md:text-lg">
                From site prep to handover, we manage every stage with precision and accountability.
              </p>
              <p class="text-base md:text-lg font-medium"><b>
                  At PPIL, we:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Coordinate all phases of project execution</li>
                <li>Maintain strict control over budget and timelines</li>
                <li>Build lasting structures with attention to detail</li>
                <li>Work with trusted partners to deliver value</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/facility-audit-PPIL.png" alt="Construction & Project Planning"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Renovation & Upgrades -->
        <div class="flex flex-col md:flex-row items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Renovation & Upgrades
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                We modernize old spaces and give new purpose to aging facilities.
              </p>
              <p class="text-base md:text-lg">
                Our upgrade solutions are tailored to preserve what works and replace what doesn't. From simple
                makeovers to full structural improvements, we
                make buildings more useful, more efficient, and more beautiful.
              </p>
              <p class="text-base md:text-lg font-medium"><b>
                  At PPIL, we:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Upgrade mechanical, structural, and aesthetic elements</li>
                <li>Improve functionality while keeping original intent</li>
                <li>Align renovations with current safety and code standards</li>
                <li>Deliver clean, modern finishes that add value</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/renovation-and-upgrades-PPIL.jpg" alt="Renovation & Upgrades"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Facility Audit / Condition Survey -->
        <div class="flex flex-col md:flex-row-reverse items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Facility Audit/Condition Survey
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                Before you plan, build, or invest, you need the full picture.
              </p>
              <p class="text-base md:text-lg">
                Our audit services uncover potential risks, wear and tear, and future maintenance needs, helping you
                make informed decisions with confidence.
              </p>
              <p class="text-base md:text-lg font-medium"><b>
                  At PPIL, we:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Conduct thorough visual and technical inspections</li>
                <li>Document facility performance and safety conditions</li>
                <li>Recommend action steps for repair or replacement</li>
                <li>Help prioritize short-term fixes and long-term upgrades</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/facility-audit-condition-survey.jpg" alt="Facility Audit"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Facility Management -->
        <div class="flex flex-col md:flex-row items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Facility Management
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                We keep the places you depend on running smoothly.
              </p>
              <p class="text-base md:text-lg">
                Our facility management team offers ongoing care, fast response, and proactive checks to reduce downtime
                and extend the life of your assets.
              </p>
              <p class="text-base md:text-lg font-medium"><b>
                  At PPIL, we:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Manage day-to-day upkeep of critical infrastructure</li>
                <li>Handle repairs, safety checks, and routine servicing</li>
                <li>Respond quickly to urgent issues</li>
                <li>Focus on cost control and operational performance</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/facility-management-PPIL.jpg" alt="Facility Management"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Engineering & Procurement Consultancy -->
        <div class="flex flex-col md:flex-row-reverse items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Engineering & Procurement Consultancy
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                We support clients with the right technical advice and materials at the right time.
              </p>
              <p class="text-base md:text-lg">
                With engineering knowledge and sourcing expertise, we help projects move faster and run smoother — from
                design input to material selection.
              </p>
              <p class="text-base md:text-lg font-medium"><b>
                  At PPIL, we:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Provide expert engineering insight from concept to delivery</li>
                <li>Source quality materials through reliable networks</li>
                <li>Align procurement with project goals and timelines</li>
                <li>Minimize waste, delays, and supply chain disruptions</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/engineering-procurement-consultancy-PPIL.jpg" alt="Engineering Consultancy"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Import & Export -->
        <div class="flex flex-col md:flex-row items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Import & Export
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                When local sourcing isn't enough, we go further.
              </p>
              <p class="text-base md:text-lg">
                Our import-export service ensures you get the right materials, equipment, or parts — no matter where
                they're from — without delay or hassle.
              </p>
              <p class="text-base md:text-lg font-medium"><b>
                  At PPIL, we:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Procure and ship specialized construction goods</li>
                <li>Navigate import regulations and logistics</li>
                <li>Handle customs documentation with care</li>
                <li>Support complex projects with global supply needs</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/import-export-PPIL.jpg" alt="Import & Export" class="w-full h-full object-cover"
              loading="lazy" />
          </div>
        </div>

        <!-- General Contractor -->
        <div class="flex flex-col md:flex-row-reverse items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              General Contractor
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                As your general contractor, we bring everything together.
              </p>
              <p class="text-base md:text-lg">
                We lead projects from start to finish, managing teams, timelines, and expectations with full
                accountability and transparency.
              </p>
              <p class="text-base md:text-lg font-medium"><b>
                  At PPIL, we:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Serve as the central point of contact for all work</li>
                <li>Coordinate subcontractors, materials, and schedules</li>
                <li>Ensure safety, compliance, and performance on-site</li>
                <li>Deliver projects that meet or exceed client standards</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/general-contractor-PPIL.jpg" alt="General Contractor"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 md:py-16 bg-[#002244] text-white">
      <div class="container mx-auto px-6 md:px-8 max-w-4xl text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-6" style="font-family: 'Barlow Condensed', sans-serif;">
          READY TO BUILD WITH PPIL?
        </h2>
        <p class="text-lg md:text-xl mb-8">
          Let's discuss how we can bring your infrastructure vision to life with our proven expertise and commitment to
          excellence.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact"
            class="bg-[#E6A619] hover:bg-[#FFB81C] text-[#002244] font-bold py-3 px-8 rounded-md transition-colors">
            Contact Our Team
          </NuxtLink>
          <NuxtLink to="/projects"
            class="border-2 border-white hover:bg-white hover:text-[#002244] font-bold py-3 px-8 rounded-md transition-colors">
            View Our Projects
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Changed bg-gray-150 to bg-gray-100 to use standard Tailwind class */
.bg-gray-100 {
  background-color: #f3f4f6;
}

/* Removed custom bullets styling since we're now using list-disc */

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&display=swap');
</style>

<script setup>
definePageMeta({
  layout: "landing"
});

useHead({
  meta: [
    { property: 'og:title', content: 'What We Do | Premium Projects Infrastructure Limited' },
    { property: 'og:description', content: 'Excellence & Innovation in Infrastructure.' },
    { property: 'og:image', content: 'https://ppil.com.ng/PPIL-og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'What We Do | Premium Projects Infrastructure Limited' },
    { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'What We Do | Premium Projects Infrastructure Limited' },
        { name: 'twitter:description', content: 'What We Do | Premium Projects Infrastructure Limited' },
    { name: 'twitter:image', content: 'https://ppil.com.ng/PPIL-og-image.png' }
  ]
});
</script>