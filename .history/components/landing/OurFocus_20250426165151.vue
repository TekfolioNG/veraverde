<template>
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-primary mb-12">EXPLORE OUR CAPABILITIES</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Design & Planning Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="bg-primary-light bg-opacity-10 p-4 rounded-full">
                                <UIcon name="i-heroicons-pencil-square" class="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-primary mb-3">Design & Planning</h3>
                        <p class="text-gray-600 text-center mb-4">
                            Comprehensive architectural design and strategic planning services to bring your vision to
                            life with precision and innovation.
                        </p>
                        <NuxtLink to="/services/design-planning"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="bg-primary-light bg-opacity-10 p-4 rounded-full">
                                <UIcon name="i-heroicons-building-office" class="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-primary mb-3">Construction & Project
                            Management</h3>
                        <p class="text-gray-600 text-center mb-4">
                            End-to-end construction solutions and expert project management ensuring quality,
                            timeliness, and budget adherence.
                        </p>
                        <NuxtLink to="/services/construction-management"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="bg-primary-light bg-opacity-10 p-4 rounded-full">
                                <UIcon name="i-heroicons-wrench-screwdriver" class="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-primary mb-3">Renovation & Infrastructure
                            Upgrades</h3>
                        <p class="text-gray-600 text-center mb-4">
                            Transforming existing structures with modern upgrades and renovations to enhance
                            functionality and aesthetic appeal.
                        </p>
                        <NuxtLink to="/services/renovation-upgrades"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div class="p-6">
                        <div class="flex justify-center mb-4">
                            <div class="bg-primary-light bg-opacity-10 p-4 rounded-full">
                                <UIcon name="i-heroicons-clipboard-document-check" class="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-primary mb-3">Facility Maintenance</h3>
                        <p class="text-gray-600 text-center mb-4">
                            Proactive and responsive maintenance services to ensure your facilities remain safe,
                            functional, and efficient.
                        </p>
                        <NuxtLink to="/services/facility-maintenance"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed for this simple component, but kept for consistency
</script>

<style scoped>
/* You can add custom styles here if needed */
.bg-primary-light {
    background-color: rgba(0, 51, 102, 0.1);
}
</style>