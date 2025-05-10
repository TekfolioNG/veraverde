<template>
    <section class="py-16 bg-[#FFB81C]/10"> <!-- Light yellow background with 10% opacity -->
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-primary mb-12">EXPLORE OUR CAPABILITIES</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 w-full">
                <!-- Row 1 -->

                <!-- Design & Planning Card -->
                <div
                    class="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary">
                    <div class="p-8">
                        <div class="flex justify-center mb-6">
                            <div class="bg-white p-5 rounded-full border-4 border-primary border-opacity-30 shadow-md">
                                <UIcon name="i-heroicons-pencil-square" class="w-12 h-12 text-primary" />
                                <UIcon name="i-heroicons-pencil-square"
                                    class="w-12 h-12 text-black absolute opacity-20" />
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Design & Planning</h3>
                        <p class="text-gray-700 text-center mb-6 text-lg">
                            Comprehensive architectural design and strategic planning services to bring your vision to
                            life with precision and innovation.
                        </p>
                        <NuxtLink to="/services/design-planning"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group text-lg">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div
                    class="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary">
                    <div class="p-8">
                        <div class="flex justify-center mb-6">
                            <div class="bg-white p-5 rounded-full border-4 border-primary border-opacity-30 shadow-md">
                                <UIcon name="i-heroicons-building-office" class="w-12 h-12 text-primary" />
                                <UIcon name="i-heroicons-building-office"
                                    class="w-12 h-12 text-black absolute opacity-20" />
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Construction & Project
                            Management</h3>
                        <p class="text-gray-700 text-center mb-6 text-lg">
                            End-to-end construction solutions and expert project management ensuring quality,
                            timeliness, and budget adherence.
                        </p>
                        <NuxtLink to="/services/construction-management"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group text-lg">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Row 2 -->

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div
                    class="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary">
                    <div class="p-8">
                        <div class="flex justify-center mb-6">
                            <div class="bg-white p-5 rounded-full border-4 border-primary border-opacity-30 shadow-md">
                                <UIcon name="i-heroicons-wrench-screwdriver" class="w-12 h-12 text-primary" />
                                <UIcon name="i-heroicons-wrench-screwdriver"
                                    class="w-12 h-12 text-black absolute opacity-20" />
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Renovation & Infrastructure
                            Upgrades</h3>
                        <p class="text-gray-700 text-center mb-6 text-lg">
                            Transforming existing structures with modern upgrades and renovations to enhance
                            functionality and aesthetic appeal.
                        </p>
                        <NuxtLink to="/services/renovation-upgrades"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group text-lg">
                            Learn more
                            <UIcon name="i-heroicons-arrow-right"
                                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div
                    class="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary">
                    <div class="p-8">
                        <div class="flex justify-center mb-6">
                            <div class="bg-white p-5 rounded-full border-4 border-primary border-opacity-30 shadow-md">
                                <UIcon name="i-heroicons-clipboard-document-check" class="w-12 h-12 text-primary" />
                                <UIcon name="i-heroicons-clipboard-document-check"
                                    class="w-12 h-12 text-black absolute opacity-20" />
                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold text-center text-primary mb-4">Facility Maintenance</h3>
                        <p class="text-gray-700 text-center mb-6 text-lg">
                            Proactive and responsive maintenance services to ensure your facilities remain safe,
                            functional, and efficient.
                        </p>
                        <NuxtLink to="/services/facility-maintenance"
                            class="flex items-center justify-center text-primary font-medium hover:text-primary-dark transition-colors group text-lg">
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

<style scoped>
/* Custom shadow intensity */
.shadow-xl {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-2xl:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>