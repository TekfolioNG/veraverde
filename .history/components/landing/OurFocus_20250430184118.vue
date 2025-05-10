<template>
    <section class="w-full py-20">
        <div class="container mx-auto px-6 lg:px-12 xl:px-16">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <h3 class="inline-block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-6 py-2 leading-tight bg-[#B51C1C] rounded-lg"
                    style="font-family: 'Barlow Condensed', sans-serif;">
                    Explore Our Capabilities
                </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                <!-- Design & Planning Card -->
                <div
                    class="bg-white/80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer border-2 border-gray-200">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFB81C]/20 p-4 rounded-full">
                                <UIcon name="i-heroicons-pencil-square" class="w-12 h-12 text-[#002244]" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-[#222] mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Design & Planning
                        </h3>
                        <p class="text-[#222] text-center mb-6">
                            Comprehensive architectural design and strategic planning services that transform your
                            vision into functional, innovative spaces while maintaining budget constraints.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/design-planning"
                                class="learn-more-link inline-flex items-center text-[#002244] font-semibold hover:text-[#B51C1C] transition-colors group">
                                <span class="text-xs">LEARN MORE</span>
                                <span
                                    class="ml-1 bg-[#FFB81C]/80 rounded-full p-0.5 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-[#002244]" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div
                    class="bg-white/80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer border-2 border-gray-200">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFB81C]/20 p-4 rounded-full">
                                <UIcon name="i-heroicons-building-office" class="w-12 h-12 text-[#002244]" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-[#222] mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Construction & Project Management
                        </h3>
                        <p class="text-[#222] text-center mb-6">
                            End-to-end construction solutions and expert project management ensuring quality,
                            timeliness, and adherence to specifications across all project phases.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/construction-management"
                                class="learn-more-link inline-flex items-center text-[#002244] font-semibold hover:text-[#B51C1C] transition-colors group">
                                <span class="text-xs">LEARN MORE</span>
                                <span
                                    class="ml-1 bg-[#FFB81C]/80 rounded-full p-0.5 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-[#002244]" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div
                    class="bg-white/80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer border-2 border-gray-200">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFB81C]/20 p-4 rounded-full">
                                <UIcon name="i-heroicons-wrench-screwdriver" class="w-12 h-12 text-[#002244]" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-[#222] mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Renovation & Upgrades
                        </h3>
                        <p class="text-[#222] text-center mb-6">
                            Transforming existing structures with modern upgrades to enhance functionality, energy
                            efficiency, and aesthetic appeal while minimizing operational disruptions.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/renovation-upgrades"
                                class="learn-more-link inline-flex items-center text-[#002244] font-semibold hover:text-[#B51C1C] transition-colors group">
                                <span class="text-xs">LEARN MORE</span>
                                <span
                                    class="ml-1 bg-[#FFB81C]/80 rounded-full p-0.5 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-[#002244]" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div
                    class="bg-white/80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer border-2 border-gray-200">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFB81C]/20 p-4 rounded-full">
                                <UIcon name="i-heroicons-clipboard-document-check" class="w-12 h-12 text-[#002244]" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-[#222] mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Facility Maintenance
                        </h3>
                        <p class="text-[#222] text-center mb-6">
                            Proactive and responsive maintenance services to ensure your facilities remain safe,
                            functional, and operating at peak efficiency throughout their lifecycle.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/facility-maintenance"
                                class="learn-more-link inline-flex items-center text-[#002244] font-semibold hover:text-[#B51C1C] transition-colors group">
                                <span class="text-xs">LEARN MORE</span>
                                <span
                                    class="ml-1 bg-[#FFB81C]/80 rounded-full p-0.5 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-[#002244]" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Structural Engineering Card -->
                <div
                    class="bg-white/80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer border-2 border-gray-200">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFB81C]/20 p-4 rounded-full">
                                <UIcon name="i-heroicons-cube" class="w-12 h-12 text-[#002244]" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-[#222] mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Structural Engineering
                        </h3>
                        <p class="text-[#222] text-center mb-6">
                            Expert engineering solutions that deliver durable, innovative, and code-compliant building
                            structures designed for safety, longevity, and sustainable performance.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/structural-engineering"
                                class="learn-more-link inline-flex items-center text-[#002244] font-semibold hover:text-[#FFB81C] transition-colors group">
                                <span class="text-xs">LEARN MORE</span>
                                <span
                                    class="ml-1 bg-[#FFB81C]/80 rounded-full p-0.5 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-[#002244]" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Sustainable Construction Card -->
                <div
                    class="bg-white/80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-96 transform hover:-translate-y-2 active:scale-95 cursor-pointer border-2 border-gray-200">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#FFB81C]/20 p-4 rounded-full">
                                <UIcon name="i-heroicons-globe-asia-australia" class="w-12 h-12 text-[#002244]" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-[#222] mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Sustainable Construction
                        </h3>
                        <p class="text-[#222] text-center mb-6">
                            Eco-friendly building practices and sustainable development solutions that reduce
                            environmental impact while optimizing energy efficiency and operational costs.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/sustainable-construction"
                                class="learn-more-link inline-flex items-center text-[#002244] font-semibold hover:text-[#B51C1C] transition-colors group">
                                <span class="text-xs">LEARN MORE</span>
                                <span
                                    class="ml-1 bg-[#FFB81C]/80 rounded-full p-0.5 transform group-hover:translate-x-1 transition-transform">
                                    <UIcon name="i-heroicons-arrow-right" class="w-3 h-3 text-[#002244]" />
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
// No additional script needed for these modifications
</script>

<style scoped>
/* You could also add additional customizations here if needed */
</style>