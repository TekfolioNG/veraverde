<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-primary mb-4">EXPLORE OUR CAPABILITIES</h2>
                <div class="w-24 h-1 bg-yellow mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Design & Planning -->
                <div
                    class="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div class="flex justify-center mb-4">
                        <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                            <UIcon name="i-heroicons-document-text" class="text-primary text-3xl" />
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-blue text-center mb-3">Design & Planning</h3>
                    <p class="text-gray-600 text-center mb-6">
                        Our experts provide comprehensive design and planning services tailored to your specific project
                        requirements and goals.
                    </p>
                    <div class="text-center">
                        <NuxtLink to="/services/design-planning"
                            class="text-primary font-medium hover:text-primary-dark flex items-center justify-center">
                            Learn More
                            <UIcon name="i-heroicons-arrow-right" class="ml-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Construction & Project Management -->
                <div
                    class="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div class="flex justify-center mb-4">
                        <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                            <UIcon name="i-heroicons-building-office-2" class="text-primary text-3xl" />
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-blue text-center mb-3">Construction & Project Management</h3>
                    <p class="text-gray-600 text-center mb-6">
                        We deliver exceptional construction services with meticulous project management to ensure
                        on-time and on-budget completion.
                    </p>
                    <div class="text-center">
                        <NuxtLink to="/services/construction-management"
                            class="text-primary font-medium hover:text-primary-dark flex items-center justify-center">
                            Learn More
                            <UIcon name="i-heroicons-arrow-right" class="ml-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Renovation & Infrastructure Upgrades -->
                <div
                    class="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div class="flex justify-center mb-4">
                        <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                            <UIcon name="i-heroicons-wrench-screwdriver" class="text-primary text-3xl" />
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
                            class="text-primary font-medium hover:text-primary-dark flex items-center justify-center">
                            Learn More
                            <UIcon name="i-heroicons-arrow-right" class="ml-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Facility Maintenance -->
                <div
                    class="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div class="flex justify-center mb-4">
                        <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                            <UIcon name="i-heroicons-cog-6-tooth" class="text-primary text-3xl" />
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-blue text-center mb-3">Facility Maintenance</h3>
                    <p class="text-gray-600 text-center mb-6">
                        Keep your facilities operating at peak performance with our comprehensive maintenance and
                        management services.
                    </p>
                    <div class="text-center">
                        <NuxtLink to="/services/facility-maintenance"
                            class="text-primary font-medium hover:text-primary-dark flex items-center justify-center">
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
// No additional script needed for this component, but you could add props if needed
// For example:
// defineProps({
//   services: {
//     type: Array,
//     default: () => []
//   }
// });
</script>