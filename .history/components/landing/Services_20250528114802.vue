<template>
    <section class="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12 xl:px-16">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div class="inline-flex items-center justify-center mb-4">
            <div class="w-10 h-0.5 bg-primary mr-3"></div>
            <h5 class="text-sm md:text-base uppercase tracking-wider font-medium text-gray-600">OUR EXPERT SERVICES</h5>
            <div class="w-10 h-0.5 bg-primary ml-3"></div>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We offer a well-rounded suite of services designed to move your project from idea to execution
          </h2>
          <p class="text-lg md:text-xl text-gray-600">
            — seamlessly and efficiently.
          </p>
        </div>
  
        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- Construction & General Contracting -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="p-8 h-full flex flex-col">
              <div class="flex justify-center mb-6">
                <div class="bg-primary/10 p-4 rounded-full">
                  <UIcon name="i-heroicons-building-office" class="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
                Construction & General Contracting
              </h3>
              <p class="text-gray-600 text-center mb-6">
                From foundations to finishing, we handle all aspects of construction—ensuring every build is solid, safe, and delivered as promised.
              </p>
              <div class="mt-auto text-center">
                <NuxtLink to="/services/construction"
                  class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                  <span class="text-sm">LEARN MORE</span>
                  <span class="ml-2 transform group-hover:translate-x-1 transition-transform">
                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
  
          <!-- Solar Energy Solutions -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="p-8 h-full flex flex-col">
              <div class="flex justify-center mb-6">
                <div class="bg-primary/10 p-4 rounded-full">
                  <UIcon name="i-heroicons-sun" class="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
                Solar Energy Solutions
              </h3>
              <p class="text-gray-600 text-center mb-6">
                We design and install reliable solar systems that reduce costs, boost energy independence, and support a cleaner environment.
              </p>
              <div class="mt-auto text-center">
                <NuxtLink to="/services/solar"
                  class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                  <span class="text-sm">LEARN MORE</span>
                  <span class="ml-2 transform group-hover:translate-x-1 transition-transform">
                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
  
          <!-- Engineering & Design Services -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="p-8 h-full flex flex-col">
              <div class="flex justify-center mb-6">
                <div class="bg-primary/10 p-4 rounded-full">
                  <UIcon name="i-heroicons-pencil-square" class="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
                Engineering & Design Services
              </h3>
              <p class="text-gray-600 text-center mb-6">
                We bring your ideas to life with practical engineering insights and smart design that balances form, function, and budget.
              </p>
              <div class="mt-auto text-center">
                <NuxtLink to="/services/engineering"
                  class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                  <span class="text-sm">LEARN MORE</span>
                  <span class="ml-2 transform group-hover:translate-x-1 transition-transform">
                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
  
          <!-- Renovation & Infrastructure Upgrades -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="p-8 h-full flex flex-col">
              <div class="flex justify-center mb-6">
                <div class="bg-primary/10 p-4 rounded-full">
                  <UIcon name="i-heroicons-wrench-screwdriver" class="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
                Renovation & Infrastructure Upgrades
              </h3>
              <p class="text-gray-600 text-center mb-6">
                We breathe new life into aging buildings and infrastructure—improving usability, compliance, and efficiency without unnecessary disruption.
              </p>
              <div class="mt-auto text-center">
                <NuxtLink to="/services/renovation"
                  class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                  <span class="text-sm">LEARN MORE</span>
                  <span class="ml-2 transform group-hover:translate-x-1 transition-transform">
                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
  
          <!-- Project Management & Advisory -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="p-8 h-full flex flex-col">
              <div class="flex justify-center mb-6">
                <div class="bg-primary/10 p-4 rounded-full">
                  <UIcon name="i-heroicons-clipboard-document-check" class="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
                Project Management & Advisory
              </h3>
              <p class="text-gray-600 text-center mb-6">
                We help clients stay on track with expert planning, budgeting, and on-site supervision—so every project stays focused and stress-free.
              </p>
              <div class="mt-auto text-center">
                <NuxtLink to="/services/project-management"
                  class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                  <span class="text-sm">LEARN MORE</span>
                  <span class="ml-2 transform group-hover:translate-x-1 transition-transform">
                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
  
          <!-- Technical Training & Workforce Development -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="p-8 h-full flex flex-col">
              <div class="flex justify-center mb-6">
                <div class="bg-primary/10 p-4 rounded-full">
                  <UIcon name="i-heroicons-academic-cap" class="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
                Technical Training & Workforce Development
              </h3>
              <p class="text-gray-600 text-center mb-6">
                Through our XstratoPrime Academy, we train artisans and technicians with real-world skills needed in today's evolving job market.
              </p>
              <div class="mt-auto text-center">
                <NuxtLink to="/services/training"
                  class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                  <span class="text-sm">LEARN MORE</span>
                  <span class="ml-2 transform group-hover:translate-x-1 transition-transform">
                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Define primary color if not already in your Tailwind config
  const primaryColor = '#335FA8';
  const primaryDarkColor = '#2a4d8a';
  </script>
  
  <style scoped>
  /* Primary color variables */
  .bg-primary {
    background-color: v-bind(primaryColor);
  }
  
  .bg-primary-dark {
    background-color: v-bind(primaryDarkColor);
  }
  
  .text-primary {
    color: v-bind(primaryColor);
  }
  
  .text-primary-dark {
    color: v-bind(primaryDarkColor);
  }
  
  /* Smooth transitions */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
  
  /* Card hover effect */
  .hover\:shadow-lg:hover {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  }
  </style>