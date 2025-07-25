<template>
  <div>
    <!-- Enhanced hero section -->
    <section class="w-full h-[50vh] relative">
      <img src="~/assets/img/about-xstrato3.png" alt="Xstrato Prime Services" class="w-full h-full object-cover" />
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

    <!-- Services Introduction - NEW LAYOUT -->
    <section class="py-16 md:py-20 bg-white relative overflow-hidden">
      <!-- Background accent -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E6A619]/5 to-transparent"></div>

      <div class="container mx-auto px-6 md:px-8 max-w-7xl relative">
        <div class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Left side - Headline and accent -->
          <div class="lg:col-span-2">
            <div class="sticky top-8">
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                style="font-family: 'Barlow Condensed', sans-serif;">
                Comprehensive Solutions That Transform Ideas
              </h2>
              <div class="w-16 h-1 bg-[#E6A619] mb-6"></div>
              <p class="text-lg text-gray-600 font-medium">
                Building the infrastructure that powers progress.
              </p>
            </div>
          </div>

          <!-- Right side - Content -->
          <div class="lg:col-span-3">
            <div class="space-y-8">
              <div class="bg-gray-50 p-8 rounded-lg border-l-4 border-[#E6A619]">
                <p class="text-lg text-gray-800 leading-relaxed">
                  At Xstrato Prime, we believe every great project starts with understanding your unique needs and
                  vision. Our integrated approach combines technical expertise with innovative thinking to deliver
                  solutions that exceed expectations.
                </p>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div
                  class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">Scale & Precision</h3>
                  <p class="text-gray-700">
                    From cutting-edge solar installations to comprehensive construction services, we're equipped to
                    handle projects of any scale with precision and efficiency.
                  </p>
                </div>

                <div
                  class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">End-to-End Support</h3>
                  <p class="text-gray-700">
                    Our diverse service portfolio supports you through every phase of your project journey, ensuring
                    seamless execution and outstanding results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid - NEW LAYOUT -->
    <section class="py-16 bg-gray-50 mb-16">
      <div class="container mx-auto px-6 md:px-8 max-w-7xl">

        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style="font-family: 'Barlow Condensed', sans-serif;">
            Our Service Portfolio
          </h2>
          <div class="w-20 h-1 bg-[#E6A619] mx-auto mb-6"></div>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to bring your vision to life
          </p>
        </div>

        <div class="space-y-12">
          <!-- Construction & General Contracting -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="grid lg:grid-cols-3 gap-0">
              <div class="lg:col-span-2 p-8 md:p-12">
                <div class="flex items-start gap-4 mb-6">
                  <div class="w-12 h-12 bg-[#E6A619] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                      style="font-family: 'Barlow Condensed', sans-serif;">
                      Construction & General Contracting
                    </h3>
                    <p class="text-[#E6A619] font-medium uppercase text-sm tracking-wide">Foundation to Finish</p>
                  </div>
                </div>

                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                  From foundations to finishing, we handle all aspects of construction—ensuring every build is solid,
                  safe, and delivered as promised.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Complete project coordination</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Quality with safety standards</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">On-time, within budget</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Transparent communication</span>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-1">
                <img src="~/assets/img/services-xsatro4.jpg" alt="Construction & General Contracting"
                  class="w-full h-64 lg:h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          <!-- Solar Energy Solutions -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="grid lg:grid-cols-3 gap-0">
              <div class="lg:col-span-1 order-2 lg:order-1">
                <img src="~/assets/img/services-xsatro6.jpg" alt="Solar Energy Solutions"
                  class="w-full h-64 lg:h-full object-cover" loading="lazy" />
              </div>
              <div class="lg:col-span-2 p-8 md:p-12 order-1 lg:order-2">
                <div class="flex items-start gap-4 mb-6">
                  <div class="w-12 h-12 bg-[#E6A619] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                      style="font-family: 'Barlow Condensed', sans-serif;">
                      Solar Energy Solutions
                    </h3>
                    <p class="text-[#E6A619] font-medium uppercase text-sm tracking-wide">Clean Energy Future</p>
                  </div>
                </div>

                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                  We design and install reliable solar systems that reduce costs, boost energy independence, and support
                  a cleaner environment.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Custom system design</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Professional installation</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Maintenance & monitoring</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Energy optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Engineering & Design Services -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="grid lg:grid-cols-3 gap-0">
              <div class="lg:col-span-2 p-8 md:p-12">
                <div class="flex items-start gap-4 mb-6">
                  <div class="w-12 h-12 bg-[#E6A619] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                      style="font-family: 'Barlow Condensed', sans-serif;">
                      Engineering & Design Services
                    </h3>
                    <p class="text-[#E6A619] font-medium uppercase text-sm tracking-wide">Innovation Meets Function</p>
                  </div>
                </div>

                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                  We bring your ideas to life with practical engineering insights and smart design that balances form,
                  function, and budget.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Design development</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Engineering analysis</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Cost optimization</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Sustainable solutions</span>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-1">
                <img src="~/assets/img/services-xsatro2.jpg" alt="Engineering & Design Services"
                  class="w-full h-64 lg:h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          <!-- Renovation & Infrastructure Upgrades -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="grid lg:grid-cols-3 gap-0">
              <div class="lg:col-span-1 order-2 lg:order-1">
                <img src="~/assets/img/services-xsatro7.jpg" alt="Renovation & Infrastructure Upgrades"
                  class="w-full h-64 lg:h-full object-cover" loading="lazy" />
              </div>
              <div class="lg:col-span-2 p-8 md:p-12 order-1 lg:order-2">
                <div class="flex items-start gap-4 mb-6">
                  <div class="w-12 h-12 bg-[#E6A619] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                      style="font-family: 'Barlow Condensed', sans-serif;">
                      Renovation & Infrastructure Upgrades
                    </h3>
                    <p class="text-[#E6A619] font-medium uppercase text-sm tracking-wide">Revitalize & Modernize</p>
                  </div>
                </div>

                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                  We breathe new life into aging buildings and infrastructure—improving usability, compliance, and
                  efficiency without unnecessary disruption.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Facility assessments</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Systems integration</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Code compliance</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Phased renovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Management & Advisory -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="grid lg:grid-cols-3 gap-0">
              <div class="lg:col-span-2 p-8 md:p-12">
                <div class="flex items-start gap-4 mb-6">
                  <div class="w-12 h-12 bg-[#E6A619] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                      style="font-family: 'Barlow Condensed', sans-serif;">
                      Project Management & Advisory
                    </h3>
                    <p class="text-[#E6A619] font-medium uppercase text-sm tracking-wide">Strategic Oversight</p>
                  </div>
                </div>

                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                  We help clients stay on track with expert planning, budgeting, and on-site supervision—so every
                  project stays focused and stress-free.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Strategic planning</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Budget management</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Risk assessment</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Quality assurance</span>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-1">
                <img src="~/assets/img/services-xsatro5.jpg" alt="Project Management & Advisory"
                  class="w-full h-64 lg:h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          <!-- Technical Training & Workforce Development -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="grid lg:grid-cols-3 gap-0">
              <div class="lg:col-span-1 order-2 lg:order-1">
                <img src="~/assets/img/services-xsatro10.jpg" alt="Technical Training & Workforce Development"
                  class="w-full h-64 lg:h-full object-cover" loading="lazy" />
              </div>
              <div class="lg:col-span-2 p-8 md:p-12 order-1 lg:order-2">
                <div class="flex items-start gap-4 mb-6">
                  <div class="w-12 h-12 bg-[#E6A619] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                      style="font-family: 'Barlow Condensed', sans-serif;">
                      Technical Training & Workforce Development
                    </h3>
                    <p class="text-[#E6A619] font-medium uppercase text-sm tracking-wide">XstratoPrime Academy</p>
                  </div>
                </div>

                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                  Through our XstratoPrime Academy, we train artisans and technicians with real-world skills needed in
                  today's evolving job market.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Technical training programs</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Industry certifications</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Apprenticeship opportunities</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[#E6A619] rounded-full"></div>
                    <span class="text-gray-700">Professional development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   <!-- CTA Section -->
   <section class="pt-16 pb-8 mb-12 mx-4 bg-gradient-to-r from-[#335FA8] to-slate-800 -p-2 md:p-0">


<div class="container mx-auto px-6 md:px-8 max-w-5xl">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content moved to left -->
        <div class="text-left">
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner with Xstrato Prime?
            </h3>
            <p class="text-xl text-blue-100 mb-8 leading-relaxed">
                Experience the difference of working with a hybrid company that combines innovative
                solutions,
                professional expertise, and unwavering commitment to customer satisfaction.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="/services"
                    class="px-8 py-4 bg-white text-[#335FA8] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg text-center">
                    Explore Our Services
                </a>
                <a href="/contact"
                    class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#335FA8] transition-colors duration-300 text-center">
                    Get In Touch
                </a>
            </div>
        </div>

        <!-- Image on the right -->
        <div class="lg:flex justify-end hidden">
            <img src="~/assets/img/about-xstrato4.png" alt="Xstrato Prime Team"
                class="max-w-md w-full h-auto rounded-lg shadow-lg" />
        </div>
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