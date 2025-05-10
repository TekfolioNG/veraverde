<template>
    <section class="py-16 bg-[#FFB81C] bg-opacity-10"> <!-- Yellow background with 10% opacity -->
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Enhanced Heading -->
            <div class="mb-12 px-4">
                <h2 class="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                    style="font-family: 'Barlow Condensed', sans-serif;">
                    EXPLORE OUR CAPABILITIES
                </h2>
                <div class="mx-auto w-24 h-1 bg-primary rounded-full"></div> <!-- Decorative underline -->
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 w-full">
                <!-- Design & Planning Card -->
                <div
                    class="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary transform hover:-translate-y-1">
                    <div class="p-8">
                        <div class="flex justify-center mb-6">
                            <div class="bg-white p-5 rounded-full border-4 border-primary border-opacity-30 shadow-md">
                                <div class="relative">
                                    <UIcon name="i-heroicons-pencil-square" class="w-12 h-12 text-black opacity-20" />
                                    <UIcon name="i-heroicons-pencil-square"
                                        class="w-12 h-12 text-primary absolute top-0 left-0" />
                                </div>
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Design & Planning</h3>
                        <p class="text-gray-700 text-center mb-6 text-lg">
                            Comprehensive architectural design and strategic planning services to bring your vision to
                            life.
                        </p>
                        <NuxtLink to="/services/design-planning"
                            class="flex items-center justify-center text-primary font-semibold hover:text-primary-dark transition-colors group text-lg">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div
                    class="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary transform hover:-translate-y-1">
                    <div class="p-8">
                        <div class="flex justify-center mb-6">
                            <div class="bg-white p-5 rounded-full border-4 border-primary border-opacity-30 shadow-md">
                                <div class="relative">
                                    <UIcon name="i-heroicons-building-office" class="w-12 h-12 text-black opacity-20" />
                                    <UIcon name="i-heroicons-building-office"
                                        class="w-12 h-12 text-primary absolute top-0 left-0" />
                                </div>
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Construction & Project
                            Management</h3>
                        <p class="text-gray-700 text-center mb-6 text-lg">
                            End-to-end construction solutions with expert project management for quality and timely
                            delivery.
                        </p>
                        <NuxtLink to="/services/construction-management"
                            class="flex items-center justify-center text-primary font-semibold hover:text-primary-dark transition-colors group text-lg">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div
                    class="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary transform hover:-translate-y-1">
                    <div class="p-8">
                        <div class="flex justify-center mb-6">
                            <div class="bg-white p-5 rounded-full border-4 border-primary border-opacity-30 shadow-md">
                                <div class="relative">
                                    <UIcon name="i-heroicons-wrench-screwdriver"
                                        class="w-12 h-12 text-black opacity-20" />
                                    <UIcon name="i-heroicons-wrench-screwdriver"
                                        class="w-12 h-12 text-primary absolute top-0 left-0" />
                                </div>
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Renovation & Infrastructure
                            Upgrades</h3>
                        <p class="text-gray-700 text-center mb-6 text-lg">
                            Modern upgrades and renovations to enhance functionality and aesthetic appeal.
                        </p>
                        <NuxtLink to="/services/renovation-upgrades"
                            class="flex items-center justify-center text-primary font-semibold hover:text-primary-dark transition-colors group text-lg">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div
                    class="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary transform hover:-translate-y-1">
                    <div class="p-8">
                        <div class="flex justify-center mb-6">
                            <div class="bg-white p-5 rounded-full border-4 border-primary border-opacity-30 shadow-md">
                                <div class="relative">
                                    <UIcon name="i-heroicons-clipboard-document-check"
                                        class="w-12 h-12 text-black opacity-20" />
                                    <UIcon name="i-heroicons-clipboard-document-check"
                                        class="w-12 h-12 text-primary absolute top-0 left-0" />
                                </div>
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Facility Maintenance</h3>
                        <p class="text-gray-700 text-center mb-6 text-lg">
                            Proactive maintenance services to keep facilities safe, functional, and efficient.
                        </p>
                        <NuxtLink to="/services/facility-maintenance"
                            class="flex items-center justify-center text-primary font-semibold hover:text-primary-dark transition-colors group text-lg">
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&display=swap');
</style>