<!-- Services Introduction -->
<section class="py-12 md:py-16 bg-gray-50">
  <div class="container mx-auto px-4 md:px-6 max-w-6xl">
    <div class="flex flex-col md:flex-row gap-8 md:gap-12">
      <!-- Left Column - Decorative Element -->
      <div class="hidden md:block md:w-1/12 relative">
        <div class="absolute top-0 left-0 h-full w-1 bg-[#E6A619]"></div>
      </div>
      
      <!-- Center Column - Content -->
      <div class="md:w-7/12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Comprehensive Solutions <span class="text-[#335FA8]">Engineered for Excellence</span>
        </h2>
        
        <div class="space-y-6">
          <p class="text-lg text-gray-700 leading-relaxed">
            At Xstrato Prime, we blend technical expertise with innovative thinking to deliver solutions that exceed expectations. Our integrated approach ensures every project is executed with precision and care.
          </p>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#E6A619]">
            <p class="text-lg font-medium text-gray-900">
              "From cutting-edge solar installations to comprehensive construction services, we're equipped to handle projects of any scale with efficiency and unwavering commitment to quality."
            </p>
          </div>
        </div>
      </div>
      
      <!-- Right Column - Image -->
      <div class="md:w-4/12 flex items-center">
        <img src="~/assets/img/services-xsatro2.jpg" alt="Xstrato Services" 
             class="rounded-lg shadow-md w-full h-auto object-cover">
      </div>
    </div>
  </div>
</section>

<!-- Services Grid -->
<section class="py-12 bg-gray-50">
  <div class="container mx-auto px-4 md:px-6 max-w-7xl">
    <!-- Grid Title -->
    <div class="text-center mb-12">
      <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Our Core Services
      </h3>
      <div class="w-20 h-1 bg-[#E6A619] mx-auto"></div>
    </div>
    
    <!-- Services Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Construction & General Contracting -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <img src="~/assets/img/services-xsatro4.jpg" alt="Construction" class="w-full h-48 object-cover">
        <div class="p-6 flex-grow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Construction & General Contracting</h3>
          <div class="w-12 h-0.5 bg-[#E6A619] mb-4"></div>
          <p class="text-gray-700 mb-4">
            From foundations to finishing, we handle all aspects of construction—ensuring every build is solid, safe, and delivered as promised.
          </p>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Complete project coordination</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Quality construction standards</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>On-time delivery</span>
            </li>
          </ul>
        </div>
        <div class="px-6 pb-6">
          <NuxtLink to="/services/construction" 
            class="text-[#335FA8] font-medium inline-flex items-center hover:underline">
            Learn more <UIcon name="i-heroicons-arrow-right" class="ml-1 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
      
      <!-- Solar Energy Solutions -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <img src="~/assets/img/services-xsatro6.jpg" alt="Solar Energy" class="w-full h-48 object-cover">
        <div class="p-6 flex-grow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Solar Energy Solutions</h3>
          <div class="w-12 h-0.5 bg-[#E6A619] mb-4"></div>
          <p class="text-gray-700 mb-4">
            We design and install reliable solar systems that reduce costs, boost energy independence, and support a cleaner environment.
          </p>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Custom solar system design</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Professional installation</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Maintenance services</span>
            </li>
          </ul>
        </div>
        <div class="px-6 pb-6">
          <NuxtLink to="/services/solar" 
            class="text-[#335FA8] font-medium inline-flex items-center hover:underline">
            Learn more <UIcon name="i-heroicons-arrow-right" class="ml-1 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
      
      <!-- Engineering & Design Services -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <img src="~/assets/img/services-xsatro2.jpg" alt="Engineering" class="w-full h-48 object-cover">
        <div class="p-6 flex-grow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Engineering & Design</h3>
          <div class="w-12 h-0.5 bg-[#E6A619] mb-4"></div>
          <p class="text-gray-700 mb-4">
            We bring your ideas to life with practical engineering insights and smart design that balances form, function, and budget.
          </p>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Design development</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Structural engineering</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Sustainable solutions</span>
            </li>
          </ul>
        </div>
        <div class="px-6 pb-6">
          <NuxtLink to="/services/engineering" 
            class="text-[#335FA8] font-medium inline-flex items-center hover:underline">
            Learn more <UIcon name="i-heroicons-arrow-right" class="ml-1 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
      
      <!-- Renovation & Infrastructure Upgrades -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <img src="~/assets/img/services-xsatro7.jpg" alt="Renovation" class="w-full h-48 object-cover">
        <div class="p-6 flex-grow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Renovation & Upgrades</h3>
          <div class="w-12 h-0.5 bg-[#E6A619] mb-4"></div>
          <p class="text-gray-700 mb-4">
            We breathe new life into aging buildings and infrastructure—improving usability, compliance, and efficiency without unnecessary disruption.
          </p>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Facility assessments</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Modern systems integration</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Code compliance</span>
            </li>
          </ul>
        </div>
        <div class="px-6 pb-6">
          <NuxtLink to="/services/renovation" 
            class="text-[#335FA8] font-medium inline-flex items-center hover:underline">
            Learn more <UIcon name="i-heroicons-arrow-right" class="ml-1 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
      
      <!-- Project Management & Advisory -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <img src="~/assets/img/services-xsatro5.jpg" alt="Project Management" class="w-full h-48 object-cover">
        <div class="p-6 flex-grow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Project Management</h3>
          <div class="w-12 h-0.5 bg-[#E6A619] mb-4"></div>
          <p class="text-gray-700 mb-4">
            We help clients stay on track with expert planning, budgeting, and on-site supervision—so every project stays focused and stress-free.
          </p>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Strategic planning</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Budget management</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Risk assessment</span>
            </li>
          </ul>
        </div>
        <div class="px-6 pb-6">
          <NuxtLink to="/services/project-management" 
            class="text-[#335FA8] font-medium inline-flex items-center hover:underline">
            Learn more <UIcon name="i-heroicons-arrow-right" class="ml-1 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
      
      <!-- Technical Training & Workforce Development -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <img src="~/assets/img/services-xsatro10.jpg" alt="Training" class="w-full h-48 object-cover">
        <div class="p-6 flex-grow">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Training & Development</h3>
          <div class="w-12 h-0.5 bg-[#E6A619] mb-4"></div>
          <p class="text-gray-700 mb-4">
            Through our XstratoPrime Academy, we train artisans and technicians with real-world skills needed in today's evolving job market.
          </p>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Technical training programs</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Industry certifications</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-[#E6A619] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Apprenticeship opportunities</span>
            </li>
          </ul>
        </div>
        <div class="px-6 pb-6">
          <NuxtLink to="/services/training" 
            class="text-[#335FA8] font-medium inline-flex items-center hover:underline">
            Learn more <UIcon name="i-heroicons-arrow-right" class="ml-1 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Bottom margin as requested -->
    <div class="mt-16"></div>
  </div>
</section>