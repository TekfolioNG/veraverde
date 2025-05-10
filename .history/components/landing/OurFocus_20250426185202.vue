<template>
    <section class="py-16 bg-[#003366]/10"> <!-- Light primary color background -->
        <div class="container mx-auto px-4">
            <!-- Section Heading -->
            <div class="flex justify-center mb-12"> <!-- Centered with more margin -->
                <h3 class="inline-block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-6 py-2 leading-tight bg-[#FFB81C] rounded-lg"
                    style="font-family: 'Barlow Condensed', sans-serif;">
                    Explore Our Capabilities
                </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Design & Planning Card -->
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                    @click="bounceCard($event.currentTarget)"
                    style="min-height: 380px; max-width: 320px; margin: 0 auto;" <!-- Taller and narrower cards -->
                    >
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#D92121]/10 p-4 rounded-full"> <!-- Red circular background -->
                                <UIcon name="i-heroicons-pencil-square" class="w-12 h-12 text-primary" />
                                <!-- Larger icon -->
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Design & planning <!-- Sentence case -->
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Our comprehensive architectural design and strategic planning services transform visions
                            into reality with innovative solutions tailored to your specific requirements and goals.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/design-planning"
                                class="inline-flex items-center justify-center bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 group">
                                Learn more
                                <UIcon name="i-heroicons-arrow-right"
                                    class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Construction & Project Management Card -->
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                    @click="bounceCard($event.currentTarget)"
                    style="min-height: 380px; max-width: 320px; margin: 0 auto;">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#D92121]/10 p-4 rounded-full">
                                <UIcon name="i-heroicons-building-office" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Construction & project management
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            We deliver end-to-end construction solutions with expert project management that ensures
                            timely completion, strict quality control, and adherence to budget constraints.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/construction-management"
                                class="inline-flex items-center justify-center bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 group">
                                Learn more
                                <UIcon name="i-heroicons-arrow-right"
                                    class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Renovation & Infrastructure Upgrades Card -->
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                    @click="bounceCard($event.currentTarget)"
                    style="min-height: 380px; max-width: 320px; margin: 0 auto;">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#D92121]/10 p-4 rounded-full">
                                <UIcon name="i-heroicons-wrench-screwdriver" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Renovation & infrastructure upgrades
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Our renovation services modernize existing structures with innovative upgrades that enhance
                            both functionality and aesthetic appeal while maintaining structural integrity.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/renovation-upgrades"
                                class="inline-flex items-center justify-center bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 group">
                                Learn more
                                <UIcon name="i-heroicons-arrow-right"
                                    class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Facility Maintenance Card -->
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                    @click="bounceCard($event.currentTarget)"
                    style="min-height: 380px; max-width: 320px; margin: 0 auto;">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#D92121]/10 p-4 rounded-full">
                                <UIcon name="i-heroicons-clipboard-document-check" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Facility maintenance
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Our proactive maintenance programs ensure your facilities remain safe, fully functional, and
                            efficient through regular inspections and timely repairs.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/facility-maintenance"
                                class="inline-flex items-center justify-center bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 group">
                                Learn more
                                <UIcon name="i-heroicons-arrow-right"
                                    class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Structural Engineering Card -->
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                    @click="bounceCard($event.currentTarget)"
                    style="min-height: 380px; max-width: 320px; margin: 0 auto;">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#D92121]/10 p-4 rounded-full">
                                <UIcon name="i-heroicons-cube" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Structural engineering
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            We provide expert structural engineering solutions that combine durability with innovation,
                            ensuring buildings meet all safety standards and design requirements.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/structural-engineering"
                                class="inline-flex items-center justify-center bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 group">
                                Learn more
                                <UIcon name="i-heroicons-arrow-right"
                                    class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Sustainable Construction Card -->
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                    @click="bounceCard($event.currentTarget)"
                    style="min-height: 380px; max-width: 320px; margin: 0 auto;">
                    <div class="p-8 h-full flex flex-col">
                        <div class="flex justify-center mb-6">
                            <div class="bg-[#D92121]/10 p-4 rounded-full">
                                <UIcon name="i-heroicons-leaf" class="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-center text-gray-900 mb-4"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            Sustainable construction
                        </h3>
                        <p class="text-gray-600 text-center mb-6">
                            Our eco-friendly building practices incorporate sustainable materials and energy-efficient
                            designs to minimize environmental impact while maximizing long-term value.
                        </p>
                        <div class="mt-auto text-center">
                            <NuxtLink to="/services/sustainable-construction"
                                class="inline-flex items-center justify-center bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 group">
                                Learn more
                                <UIcon name="i-heroicons-arrow-right"
                                    class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const bounceCard = (element) => {
    element.classList.add('animate-bounce');
    setTimeout(() => {
        element.classList.remove('animate-bounce');
    }, 1000);
};
</script>

<style>


.animate-bounce {
    animation: bounce 0.5s;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}
</style>