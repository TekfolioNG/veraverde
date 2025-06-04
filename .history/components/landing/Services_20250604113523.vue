<template>
    <section class="w-full py-20 bg-gradient-to-br from-gray-50 to-white">
        <div class="container mx-auto px-6 lg:px-12 xl:px-16">
            <!-- Section Heading -->
            <div class="text-center mb-20">
                <h3 class="inline-block text-3xl md:text-4xl lg:text-5xl font-bold text-white px-8 py-3 leading-tight bg-[#335FA8] rounded-2xl shadow-lg"
                    style="font-family: 'Barlow Condensed', sans-serif;">
                    Our Expert Services
                </h3>
                <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We offer a well-rounded suite of services designed to move your project from idea to
                    execution—seamlessly and efficiently.
                </p>
            </div>

            <!-- Asymmetric Grid Layout -->
            <div class="max-w-7xl mx-auto">
                <!-- Row 1: Large + Small -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <!-- Featured Service - Procurement -->
                    <div
                        class="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                        <div class="p-10 h-full flex flex-col">
                            <div class="flex items-start justify-between mb-6">
                                <div class="bg-gradient-to-br from-[#FFB81C] to-[#e6a519] p-4 rounded-xl shadow-md">
                                    <UIcon name="i-heroicons-truck" class="w-8 h-8 text-white" />
                                </div>

                            </div>
                            <h4 class="text-2xl font-bold text-[#002244] mb-4"
                                style="font-family: 'Barlow Condensed', sans-serif;">
                                Procurement & Supply Chain
                            </h4>
                            <p class="text-gray-600 mb-8 text-lg leading-relaxed">
                                We streamline your procurement process with efficient supply chain management, ensuring
                                quality materials and services are delivered on time and within budget.
                            </p>
                            <div class="mt-auto">
                                <NuxtLink to="/services#procurement-supply-chain" class="inline-flex items-center bg-[#002244] text-white px-6 py-3 rounded-lg
                                    font-semibold hover:bg-[#B51C1C] transition-all duration-300 group">
                                    <span>LEARN MORE</span>
                                    <UIcon name="i-heroicons-arrow-right"
                                        class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Construction & General Contracting -->
                    <div
                        class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-blue-100">
                        <div class="p-8 h-full flex flex-col">
                            <div
                                class="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg w-fit mb-6 shadow-md">
                                <UIcon name="i-heroicons-building-office" class="w-6 h-6 text-white" />
                            </div>
                            <h4 class="text-xl font-bold text-[#002244] mb-4"
                                style="font-family: 'Barlow Condensed', sans-serif;">
                                Construction & General Contracting
                            </h4>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                From foundations to finishing, we handle all aspects of construction—ensuring every
                                build is solid, safe, and delivered as promised.
                            </p>
                            <div class="mt-auto">
                                <NuxtLink to="/services#construction-and-contracting"
                                    class="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors group">
                                    <span class="text-sm">LEARN MORE</span>
                                    <span
                                        class="ml-2 bg-blue-200 rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
                                        <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-blue-700" />
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Row 2: Two Equal Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <!-- Project Management & Engineering -->
                    <div
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                        <div class="p-8 h-full flex flex-col">
                            <div class="bg-[#335FA8] p-3 rounded-lg w-fit mb-6 shadow-md">
                                <UIcon name="i-heroicons-clipboard-document-check" class="w-6 h-6 text-white" />
                            </div>
                            <h4 class="text-xl font-bold text-[#002244] mb-4"
                                style="font-family: 'Barlow Condensed', sans-serif;">
                                Project Management & Engineering Services
                            </h4>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                We combine expert project management with engineering excellence to deliver
                                comprehensive solutions that keep your projects on track and within scope.
                            </p>
                            <div class="mt-auto">
                                <NuxtLink to="/services#project-management"
                                    class="inline-flex items-center text-[#002244] font-semibold hover:text-[#B51C1C] transition-colors group">
                                    <span class="text-sm">LEARN MORE</span>
                                    <span
                                        class="ml-2 bg-[#FFB81C]/20 rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
                                        <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-[#002244]" />
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Solar Energy Solutions -->
                    <div
                        class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-green-100">
                        <div class="p-8 h-full flex flex-col">
                            <div
                                class="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-lg w-fit mb-6 shadow-md">
                                <UIcon name="i-heroicons-sun" class="w-6 h-6 text-white" />
                            </div>
                            <h4 class="text-xl font-bold text-[#002244] mb-4"
                                style="font-family: 'Barlow Condensed', sans-serif;">
                                Solar Energy Solutions
                            </h4>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                We design and install reliable solar systems that reduce costs, boost energy
                                independence, and support a cleaner environment.
                            </p>
                            <div class="mt-auto">
                                <NuxtLink to="/services#solar-solutions"
                                    class="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors group">
                                    <span class="text-sm">LEARN MORE</span>
                                    <span
                                        class="ml-2 bg-green-200 rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
                                        <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-green-700" />
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Row 3: Wide Training Card -->
                <div
                    class="bg-gradient-to-r from-[#002244] to-[#1a365d] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                    <div class="p-10 flex flex-col lg:flex-row items-center justify-between">
                        <div class="flex-1 lg:pr-12 mb-8 lg:mb-0">
                            <div class="flex items-center mb-6">
                                <div class="bg-white p-4 rounded-xl shadow-lg mr-6">
                                    <UIcon name="i-heroicons-academic-cap" class="w-8 h-8 text-[#335FA8]" />
                                </div>
                                <div>
                                    <h4 class="text-2xl font-bold text-white mb-2"
                                        style="font-family: 'Barlow Condensed', sans-serif;">
                                        Training & Development
                                    </h4>

                                </div>
                            </div>
                            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                                Through our XstratoPrime Academy, we train artisans and technicians with real-world
                                skills needed in today's evolving job market.
                            </p>
                            <NuxtLink to="/services#training-development"
                                class="inline-flex items-center bg-white text-[#335FA8] px-8 py-4 rounded-lg font-bold hover:bg-[#e6a519] transition-all duration-300 group shadow-lg">
                                <span>LEARN MORE</span>
                                <UIcon name="i-heroicons-arrow-right"
                                    class="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
                            </NuxtLink>
                        </div>
                        <div class="flex-shrink-0">
                            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div class="grid grid-cols-2 gap-4 text-center text-white">
                                    <div>
                                        <div class="text-2xl font-bold text-[#FFB81C]">500+</div>
                                        <div class="text-sm opacity-80">Trained</div>
                                    </div>
                                    <div>
                                        <div class="text-2xl font-bold text-[#FFB81C]">95%</div>
                                        <div class="text-sm opacity-80">Job Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>