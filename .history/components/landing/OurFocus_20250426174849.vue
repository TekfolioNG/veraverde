<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <!-- Enhanced Heading -->
            <div class="mb-12 px-4 text-center">
                <h3 class="inline-block text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight px-6 py-3 rounded-lg"
                    style="font-family: 'Barlow Condensed', sans-serif; background-color: #FFB81C;">
                    EXPLORE OUR CAPABILITIES
                </h3>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
                <!-- Design & Planning Card -->
                <div
                    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary transform hover:-translate-y-1">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-primary/10 p-5 rounded-full">
                                <UIcon name="i-heroicons-pencil-square" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl md:text-2xl font-semibold text-center text-primary mb-4">Design & Planning
                        </h3>
                        <p class="text-gray-600 text-center mb-6 flex-grow">
                            Comprehensive architectural design and strategic planning services to bring your vision to
                            life.
                        </p>
                        <NuxtLink to="/services/design-planning"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div
                    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary transform hover:-translate-y-1">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-primary/10 p-5 rounded-full">
                                <UIcon name="i-heroicons-building-office" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl md:text-2xl font-semibold text-center text-primary mb-4">Construction &
                            Project Management</h3>
                        <p class="text-gray-600 text-center mb-6 flex-grow">
                            End-to-end construction solutions and expert project management.
                        </p>
                        <NuxtLink to="/services/construction-management"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div
                    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary transform hover:-translate-y-1">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-primary/10 p-5 rounded-full">
                                <UIcon name="i-heroicons-wrench-screwdriver" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl md:text-2xl font-semibold text-center text-primary mb-4">Renovation &
                            Upgrades</h3>
                        <p class="text-gray-600 text-center mb-6 flex-grow">
                            Modern upgrades and renovations to enhance functionality.
                        </p>
                        <NuxtLink to="/services/renovation-upgrades"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div
                    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary transform hover:-translate-y-1">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-primary/10 p-5 rounded-full">
                                <UIcon name="i-heroicons-clipboard-document-check" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl md:text-2xl font-semibold text-center text-primary mb-4">Facility Maintenance
                        </h3>
                        <p class="text-gray-600 text-center mb-6 flex-grow">
                            Maintenance services to keep facilities safe and functional.
                        </p>
                        <NuxtLink to="/services/facility-maintenance"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
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
