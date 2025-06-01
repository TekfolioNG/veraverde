<template>
  <div>
    <!-- Enhanced hero section -->
    <section class="w-full h-[50vh] relative">
      <img src="~/assets/img/who-we-are-ppil.jpg" alt="Xstrato Prime Services" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
        <div class="container mx-auto px-4 md:px-8">
          <!-- Desktop layout -->
          <div class="hidden md:flex justify-between items-center">
            <!-- Services Title (moved to left) -->
            <div class="text-white max-w-md">
              <h4 class="text-white text-xl uppercase tracking-wide font-medium mb-3 border-l-4 border-[#E6A619] pl-4">
                OUR SERVICES
              </h4>
            </div>

            <!-- Content (shifted slightly lower) -->
            <div class="text-white max-w-2xl mt-16">
              <h1 class="text-5xl lg:text-6xl font-bold leading-relaxed mb-6"
                style="font-family: 'Barlow Condensed', sans-serif;">
                From Vision to Reality
              </h1>
            </div>
          </div>

          <!-- Mobile layout (stacked) -->
          <div class="md:hidden flex flex-col items-center text-center">
            <!-- Services Title - centered on mobile -->
            <div class="text-white mb-6">
              <h4 class="text-white text-lg uppercase tracking-wide font-medium mb-3 relative inline-block">
                <span class="border-b-2 border-[#E6A619] pb-1">OUR SERVICES</span>
              </h4>
            </div>

            <!-- Content -->
            <div class="text-white">
              <h1 class="text-3xl font-bold leading-tight mb-4" style="font-family: 'Barlow Condensed', sans-serif;">
                From Vision to Reality
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Added spacing between sections -->
    <div class="h-8 bg-gray-50"></div>

    <!-- Services Introduction -->
    <section class="py-10 md:py-12 bg-gray-50">
      <div class="container mx-auto px-6 md:px-8 max-w-6xl">
        <h2 class="text-2xl md:text-3xl text-gray-900 mb-4 text-right"
          style="font-family: 'Barlow Condensed', sans-serif;">
          We deliver comprehensive solutions that transform ideas into exceptional results, building the infrastructure
          that powers progress.
        </h2>
        <div class="w-full h-0.5 bg-[#E6A619] mb-6"></div>

        <div class="space-y-6">
          <p class="text-base md:text-lg text-gray-900">
            At Xstrato Prime, we believe every great project starts with understanding your unique needs and vision. Our
            integrated approach combines technical expertise with innovative thinking to deliver solutions that exceed
            expectations.
          </p>
          <p class="text-base md:text-lg text-gray-900">
            From cutting-edge solar installations to comprehensive construction services, we're equipped to handle
            projects of any scale with precision, efficiency, and unwavering commitment to quality.
          </p>
          <p class="text-base md:text-lg text-gray-900">
            Our diverse service portfolio is designed to support you through every phase of your project journey,
            ensuring seamless execution and outstanding results.
          </p>
        </div>
      </div>
    </section>

    <!-- Added spacing between sections -->
    <div class="h-8 bg-gray-50"></div>

    <!-- Services Grid -->
    <section class="bg-gray-50">
      <div class="container mx-auto px-6 md:px-8">
        <!-- Construction & General Contracting -->
        <div class="flex flex-col md:flex-row items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Construction & General Contracting
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                From foundations to finishing, we handle all aspects of construction—ensuring every build is solid,
                safe, and delivered as promised.
              </p>
              <p class="text-base md:text-lg">
                Our experienced team brings together proven construction methods with modern techniques to deliver
                projects that stand the test of time. We manage every detail from initial site preparation to final
                handover.
              </p>
              <p class="text-base md:text-lg font-medium">
                <b>What we deliver:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Complete project coordination from start to finish</li>
                <li>Quality construction with rigorous safety standards</li>
                <li>On-time delivery within agreed budgets</li>
                <li>Transparent communication throughout the process</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/design-planning-PPIL.jpg" alt="Construction & General Contracting"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Solar Energy Solutions -->
        <div class="flex flex-col md:flex-row-reverse items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Solar Energy Solutions
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                We design and install reliable solar systems that reduce costs, boost energy independence, and support a
                cleaner environment.
              </p>
              <p class="text-base md:text-lg">
                Our solar solutions are tailored to your specific energy needs and site conditions. From residential
                installations to large-scale commercial systems, we ensure optimal performance and maximum return on
                investment.
              </p>
              <p class="text-base md:text-lg font-medium">
                <b>What we deliver:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Custom solar system design and engineering</li>
                <li>Professional installation with premium components</li>
                <li>Comprehensive maintenance and monitoring services</li>
                <li>Energy efficiency consulting and optimization</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/facility-audit-PPIL.png" alt="Solar Energy Solutions"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Engineering & Design Services -->
        <div class="flex flex-col md:flex-row items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Engineering & Design Services
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                We bring your ideas to life with practical engineering insights and smart design that balances form,
                function, and budget.
              </p>
              <p class="text-base md:text-lg">
                Our design philosophy centers on creating solutions that are both innovative and practical. We combine
                technical expertise with creative vision to develop designs that meet your objectives while optimizing
                performance and cost-effectiveness.
              </p>
              <p class="text-base md:text-lg font-medium">
                <b>What we deliver:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Comprehensive design development and documentation</li>
                <li>Structural and systems engineering analysis</li>
                <li>Value engineering and cost optimization</li>
                <li>Sustainable design solutions and certifications</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/renovation-and-upgrades-PPIL.jpg" alt="Engineering & Design Services"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Renovation & Infrastructure Upgrades -->
        <div class="flex flex-col md:flex-row-reverse items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Renovation & Infrastructure Upgrades
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                We breathe new life into aging buildings and infrastructure—improving usability, compliance, and
                efficiency without unnecessary disruption.
              </p>
              <p class="text-base md:text-lg">
                Our renovation approach focuses on maximizing the potential of existing structures while minimizing
                operational disruption. We specialize in strategic upgrades that enhance performance, extend asset life,
                and improve user experience.
              </p>
              <p class="text-base md:text-lg font-medium">
                <b>What we deliver:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Comprehensive facility assessments and upgrade planning</li>
                <li>Modern systems integration and technology upgrades</li>
                <li>Code compliance and safety improvements</li>
                <li>Phased renovation to minimize operational impact</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/facility-audit-condition-survey.jpg" alt="Renovation & Infrastructure Upgrades"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Project Management & Advisory -->
        <div class="flex flex-col md:flex-row items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Project Management & Advisory
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                We help clients stay on track with expert planning, budgeting, and on-site supervision—so every project
                stays focused and stress-free.
              </p>
              <p class="text-base md:text-lg">
                Our project management expertise ensures seamless coordination across all project phases. We provide
                strategic guidance, risk management, and hands-on oversight to keep your project on schedule and within
                budget.
              </p>
              <p class="text-base md:text-lg font-medium">
                <b>What we deliver:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Strategic project planning and scheduling</li>
                <li>Budget management and cost control</li>
                <li>Risk assessment and mitigation strategies</li>
                <li>Quality assurance and progress reporting</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/facility-management-PPIL.jpg" alt="Project Management & Advisory"
              class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Technical Training & Workforce Development -->
        <div class="flex flex-col md:flex-row-reverse items-stretch">
          <div class="w-full md:w-1/2 p-8 md:p-12 bg-white">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Technical Training & Workforce Development
            </h2>
            <div class="w-20 h-0.5 bg-[#E6A619] mb-6"></div>
            <div class="space-y-4 text-gray-900">
              <p class="text-lg md:text-xl">
                Through our XstratoPrime Academy, we train artisans and technicians with real-world skills needed in
                today's evolving job market.
              </p>
              <p class="text-base md:text-lg">
                We believe in building not just structures, but also the skilled workforce that creates them. Our
                comprehensive training programs combine theoretical knowledge with hands-on experience to develop
                competent professionals.
              </p>
              <p class="text-base md:text-lg font-medium">
                <b>What we deliver:</b>
              </p>
              <ul class="text-base md:text-lg space-y-3 pl-5 list-disc marker:text-[#E6A619]">
                <li>Structured technical training programs</li>
                <li>Industry-relevant skill certifications</li>
                <li>Apprenticeship and mentorship opportunities</li>
                <li>Continuous professional development support</li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/img/engineering-procurement-consultancy-PPIL.jpg"
              alt="Technical Training & Workforce Development" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 md:py-16 bg-[#002244] text-white">
      <div class="container mx-auto px-6 md:px-8 max-w-4xl text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-6" style="font-family: 'Barlow Condensed', sans-serif;">
          READY TO START YOUR PROJECT?
        </h2>
        <p class="text-lg md:text-xl mb-8">
          Let's collaborate to turn your vision into reality with our comprehensive expertise and commitment to
          excellence.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact"
            class="bg-[#E6A619] hover:bg-[#FFB81C] text-[#002244] font-bold py-3 px-8 rounded-md transition-colors">
            Get Started Today
          </NuxtLink>
          <NuxtLink to="/projects"
            class="border-2 border-white hover:bg-white hover:text-[#002244] font-bold py-3 px-8 rounded-md transition-colors">
            See Our Work
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-gray-50 {
  background-color: #f9fafb;
}

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&display=swap');
</style>

<script setup>
definePageMeta({
  layout: "landing"
});

useHead({
  meta: [
    { property: 'og:title', content: 'Our Services | Xstrato Prime' },
    { property: 'og:description', content: 'Comprehensive solutions from construction to solar energy, engineering to workforce development.' },
    { property: 'og:image', content: 'https://xstratoprime.com/xstrato-og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Our Services | Xstrato Prime' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Our Services | Xstrato Prime' },
    { name: 'twitter:description', content: 'Comprehensive solutions from construction to solar energy, engineering to workforce development.' },
    { name: 'twitter:image', content: 'https://xstratoprime.com/xstrato-og-image.png' }
  ]
});
</script>