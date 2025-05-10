<template>
    <section class="relative w-screen h-screen overflow-hidden py-12 mb-12">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h3 class="inline-block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-6 py-2 mb-4 leading-tight bg-[#FFB81C] rounded-lg"
                    style="font-family: 'Barlow Condensed', sans-serif;">
                    Explore Our Capabilities
                </h3>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <!-- Row 1 -->

                <!-- Design & Planning Card -->
                <div
                    class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
                    <div class="p-8">
                        <div class="flex justify-center mb-5">
                            <div class="bg-yellow-50 p-5 rounded-full"> <!-- Light yellow background -->
                                <UIcon name="i-heroicons-pencil-square" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Design & Planning</h3>
                        <p class="text-gray-600 text-center mb-5">
                            Comprehensive architectural design and strategic planning services to bring your vision to
                            life with precision and innovation.
                        </p>
                        <NuxtLink to="/services/design-planning"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div
                    class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue">
                    <div class="p-8">
                        <div class="flex justify-center mb-5">
                            <div class="bg-primary-50 p-5 rounded-full"> <!-- Light primary background -->
                                <UIcon name="i-heroicons-building-office" class="w-12 h-12 text-blue" />
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Construction & Project
                            Management</h3>
                        <p class="text-gray-600 text-center mb-5">
                            End-to-end construction solutions and expert project management ensuring quality,
                            timeliness, and budget adherence.
                        </p>
                        <NuxtLink to="/services/construction-management"
                            class="flex items-center justify-center text-blue font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Row 2 -->

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div
                    class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow">
                    <div class="p-8">
                        <div class="flex justify-center mb-5">
                            <div class="bg-red-50 p-5 rounded-full"> <!-- Light red background -->
                                <UIcon name="i-heroicons-wrench-screwdriver" class="w-12 h-12 text-yellow" />
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Renovation & Infrastructure
                            Upgrades</h3>
                        <p class="text-gray-600 text-center mb-5">
                            Transforming existing structures with modern upgrades and renovations to enhance
                            functionality and aesthetic appeal.
                        </p>
                        <NuxtLink to="/services/renovation-upgrades"
                            class="flex items-center justify-center text-yellow font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div
                    class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red">
                    <div class="p-8">
                        <div class="flex justify-center mb-5">
                            <div class="bg-blue-50 p-5 rounded-full"> <!-- Light blue background -->
                                <UIcon name="i-heroicons-clipboard-document-check" class="w-12 h-12 text-red" />
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Facility Maintenance</h3>
                        <p class="text-gray-600 text-center mb-5">
                            Proactive and responsive maintenance services to ensure your facilities remain safe,
                            functional, and efficient.
                        </p>
                        <NuxtLink to="/services/facility-maintenance"
                            class="flex items-center justify-center text-red font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed for this simple component
</script>