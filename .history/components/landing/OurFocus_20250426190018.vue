<template>
    <section class="relative w-screen h-screen overflow-hidden py-16 bg-primary-dark">
        <div class="container mx-auto px-4">
            <!-- Section Heading -->
            <div class="text-center mb-12"> <!-- Added centralization and increased bottom margin -->
                <h3 class="inline-block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-6 py-2 leading-tight bg-[#FFB81C] rounded-lg"
                    style="font-family: 'Barlow Condensed', sans-serif;">
                    Explore Our Capabilities
                </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <!-- Design & Planning Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFEBEB] p-4 rounded-full"> <!-- Light shade of red -->
                                <UIcon name="i-heroicons-pencil-square" class="w-12 h-12 text-primary" />
                                <!-- Increased icon size -->
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Design & Planning
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Comprehensive architectural design and strategic planning services that transform your
                            vision into functional, innovative spaces while maintaining budget constraints.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/design-planning"
                                class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                                LEARN MORE
                                <span
                                    class="ml-2 bg-[#FFB81C] rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFEBEB] p-4 rounded-full"> <!-- Light shade of red -->
                                <UIcon name="i-heroicons-building-office" class="w-12 h-12 text-primary" />
                                <!-- Increased icon size -->
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Construction & Project Management
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            End-to-end construction solutions and expert project management ensuring quality,
                            timeliness, and adherence to specifications across all project phases.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/construction-management"
                                class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                                LEARN MORE
                                <span
                                    class="ml-2 bg-[#FFB81C] rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFEBEB] p-4 rounded-full"> <!-- Light shade of red -->
                                <UIcon name="i-heroicons-wrench-screwdriver" class="w-12 h-12 text-primary" />
                                <!-- Increased icon size -->
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Renovation & Infrastructure Upgrades
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Transforming existing structures with modern upgrades to enhance functionality, energy
                            efficiency, and aesthetic appeal while minimizing operational disruptions.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/renovation-upgrades"
                                class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                                LEARN MORE
                                <span
                                    class="ml-2 bg-[#FFB81C] rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFEBEB] p-4 rounded-full"> <!-- Light shade of red -->
                                <UIcon name="i-heroicons-clipboard-document-check" class="w-12 h-12 text-primary" />
                                <!-- Increased icon size -->
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Facility Maintenance
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Proactive and responsive maintenance services to ensure your facilities remain safe,
                            functional, and operating at peak efficiency throughout their lifecycle.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/facility-maintenance"
                                class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                                LEARN MORE
                                <span
                                    class="ml-2 bg-[#FFB81C] rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Structural Engineering Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFEBEB] p-4 rounded-full"> <!-- Light shade of red -->
                                <UIcon name="i-heroicons-cube" class="w-12 h-12 text-primary" />
                                <!-- Increased icon size -->
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Structural Engineering
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Expert engineering solutions that deliver durable, innovative, and code-compliant building
                            structures designed for safety, longevity, and sustainable performance.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/structural-engineering"
                                class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                                LEARN MORE
                                <span
                                    class="ml-2 bg-[#FFB81C] rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Sustainable Construction Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFEBEB] p-4 rounded-full"> <!-- Light shade of red -->
                                <UIcon name="i-heroicons-leaf" class="w-12 h-12 text-primary" />
                                <!-- Increased icon size -->
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Sustainable Construction
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Eco-friendly building practices and sustainable development solutions that reduce
                            environmental impact while optimizing energy efficiency and operational costs.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/sustainable-construction"
                                class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                                LEARN MORE
                                <span
                                    class="ml-2 bg-[#FFB81C] rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
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
// No script needed for this simple component
</script>