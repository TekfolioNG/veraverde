<template>
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <!-- Section Heading -->
            <h3 class="inline-block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-6 py-2 mb-4 leading-tight bg-[#FFB81C] rounded-lg"
                style="font-family: 'Barlow Condensed', sans-serif;">
                Explore Our Capabilities
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Design & Planning Card -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <UIcon name="i-heroicons-pencil-square" class="w-10 h-10 text-primary" />
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4 uppercase">Design & Planning</h3>
                        <p class="text-gray-600 text-center mb-6">
                            Comprehensive architectural design and strategic planning services to bring your vision to
                            life.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/design-planning"
                                class="inline-block text-primary font-semibold hover:text-primary-dark transition-colors">
                                LEARN MORE
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <UIcon name="i-heroicons-building-office" class="w-10 h-10 text-primary" />
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4 uppercase">Construction & Project
                            Management</h3>
                        <p class="text-gray-600 text-center mb-6">
                            End-to-end construction solutions and expert project management ensuring quality and
                            timeliness.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/construction-management"
                                class="inline-block text-primary font-semibold hover:text-primary-dark transition-colors">
                                LEARN MORE
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <UIcon name="i-heroicons-wrench-screwdriver" class="w-10 h-10 text-primary" />
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4 uppercase">Renovation &
                            Infrastructure Upgrades</h3>
                        <p class="text-gray-600 text-center mb-6">
                            Transforming existing structures with modern upgrades to enhance functionality and appeal.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/renovation-upgrades"
                                class="inline-block text-primary font-semibold hover:text-primary-dark transition-colors">
                                LEARN MORE
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <UIcon name="i-heroicons-clipboard-document-check" class="w-10 h-10 text-primary" />
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4 uppercase">Facility Maintenance</h3>
                        <p class="text-gray-600 text-center mb-6">
                            Proactive maintenance services to ensure facilities remain safe and efficient.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/facility-maintenance"
                                class="inline-block text-primary font-semibold hover:text-primary-dark transition-colors">
                                LEARN MORE
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Structural Engineering Card -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <UIcon name="i-heroicons-cube" class="w-10 h-10 text-primary" />
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4 uppercase">Structural Engineering
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Expert engineering solutions for durable and innovative building structures.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/structural-engineering"
                                class="inline-block text-primary font-semibold hover:text-primary-dark transition-colors">
                                LEARN MORE
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Sustainable Construction Card -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <UIcon name="i-heroicons-leaf" class="w-10 h-10 text-primary" />
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4 uppercase">Sustainable Construction
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Eco-friendly building practices and sustainable development solutions.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/sustainable-construction"
                                class="inline-block text-primary font-semibold hover:text-primary-dark transition-colors">
                                LEARN MORE
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