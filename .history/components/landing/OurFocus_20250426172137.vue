<template>
    <section class="relative w-screen h-screen overflow-hidden">
        <div class="container mx-auto px-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 leading-tight"
                style="font-family: 'Barlow Condensed', sans-serif;">
                Explore Our Capabilities
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- Row 1 -->

                <!-- Design & Planning Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="bg-yellow-50 p-4 rounded-full"> <!-- Light yellow background -->
                                <UIcon name="i-heroicons-pencil-square" class="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-primary mb-3">Design & Planning</h3>
                        <p class="text-gray-600 text-center mb-4">
                            Comprehensive architectural design and strategic planning services to bring your vision to
                            life with precision and innovation.
                        </p>
                        <NuxtLink to="/services/design-planning"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="bg-primary-50 p-4 rounded-full"> <!-- Light primary background -->
                                <UIcon name="i-heroicons-building-office" class="w-8 h-8 text-blue" />
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-primary mb-3">Construction & Project
                            Management</h3>
                        <p class="text-gray-600 text-center mb-4">
                            End-to-end construction solutions and expert project management ensuring quality,
                            timeliness, and budget adherence.
                        </p>
                        <NuxtLink to="/services/construction-management"
                            class="flex items-center justify-center text-blue font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Row 2 -->

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-yellow">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="bg-red-50 p-4 rounded-full"> <!-- Light red background -->
                                <UIcon name="i-heroicons-wrench-screwdriver" class="w-8 h-8 text-yellow" />
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-primary mb-3">Renovation & Infrastructure
                            Upgrades</h3>
                        <p class="text-gray-600 text-center mb-4">
                            Transforming existing structures with modern upgrades and renovations to enhance
                            functionality and aesthetic appeal.
                        </p>
                        <NuxtLink to="/services/renovation-upgrades"
                            class="flex items-center justify-center text-yellow font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-red">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="bg-blue-50 p-4 rounded-full"> <!-- Light blue background -->
                                <UIcon name="i-heroicons-clipboard-document-check" class="w-8 h-8 text-red" />
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-primary mb-3">Facility Maintenance</h3>
                        <p class="text-gray-600 text-center mb-4">
                            Proactive and responsive maintenance services to ensure your facilities remain safe,
                            functional, and efficient.
                        </p>
                        <NuxtLink to="/services/facility-maintenance"
                            class="flex items-center justify-center text-red font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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