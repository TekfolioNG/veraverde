<template>
    <section class="py-16 bg-yellow/10">
        <div class="container mx-auto px-4 lg:px-8">
            <div class="text-center mb-16">
                <div class="inline-block bg-yellow px-6 py-3 rounded-md mb-6">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight"
                        style="font-family: 'Barlow Condensed', sans-serif;">
                        EXPLORE OUR CAPABILITIES
                    </h2>
                </div>
                <div class="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                <!-- Design & Planning -->
                <div
                    class="bg-white p-6 md:p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-primary">
                    <div class="flex justify-center mb-6">
                        <div class="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10">
                            <UIcon name="i-heroicons-document-text" class="text-primary text-5xl" />
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-blue text-center mb-3">Design & Planning</h3>
                    <p class="text-gray-600 text-center mb-6">
                        Our experts provide comprehensive design and planning services tailored to your specific project
                        requirements and goals.
                    </p>
                    <div class="text-center">
                        <NuxtLink to="/services/design-planning"
                            class="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors">
                            Learn More
                            <UIcon name="i-heroicons-arrow-right" class="ml-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Construction & Project Management -->
                <div
                    class="bg-white p-6 md:p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-blue">
                    <div class="flex justify-center mb-6">
                        <div class="w-24 h-24 flex items-center justify-center rounded-full bg-blue/10">
                            <UIcon name="i-heroicons-building-office-2" class="text-primary text-5xl" />
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-blue text-center mb-3">Construction & Project Management</h3>
                    <p class="text-gray-600 text-center mb-6">
                        We deliver exceptional construction services with meticulous project management to ensure
                        on-time and on-budget completion.
                    </p>
                    <div class="text-center">
                        <NuxtLink to="/services/construction-management"
                            class="inline-flex items-center px-4 py-2 rounded-md bg-blue text-white hover:bg-primary transition-colors">
                            Learn More
                            <UIcon name="i-heroicons-arrow-right" class="ml-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Renovation & Infrastructure Upgrades -->
                <div
                    class="bg-white p-6 md:p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-yellow">
                    <div class="flex justify-center mb-6">
                        <div class="w-24 h-24 flex items-center justify-center rounded-full bg-yellow/20">
                            <UIcon name="i-heroicons-wrench-screwdriver" class="text-primary text-5xl" />
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-blue text-center mb-3">Renovation & Infrastructure Upgrades
                    </h3>
                    <p class="text-gray-600 text-center mb-6">
                        Transform and modernize existing structures with our specialized renovation and infrastructure
                        upgrade solutions.
                    </p>
                    <div class="text-center">
                        <NuxtLink to="/services/renovation-upgrades"
                            class="inline-flex items-center px-4 py-2 rounded-md bg-yellow text-primary font-medium hover:bg-yellow/80 transition-colors">
                            Learn More
                            <UIcon name="i-heroicons-arrow-right" class="ml-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Facility Maintenance -->
                <div
                    class="bg-white p-6 md:p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-red">
                    <div class="flex justify-center mb-6">
                        <div class="w-24 h-24 flex items-center justify-center rounded-full bg-red/10">
                            <UIcon name="i-heroicons-cog-6-tooth" class="text-primary text-5xl" />
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-blue text-center mb-3">Facility Maintenance</h3>
                    <p class="text-gray-600 text-center mb-6">
                        Keep your facilities operating at peak performance with our comprehensive maintenance and
                        management services.
                    </p>
                    <div class="text-center">
                        <NuxtLink to="/services/facility-maintenance"
                            class="inline-flex items-center px-4 py-2 rounded-md bg-red text-white hover:bg-red/80 transition-colors">
                            Learn More
                            <UIcon name="i-heroicons-arrow-right" class="ml-1" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No additional script needed for this component
</script>