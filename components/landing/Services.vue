<template>
    <!-- Services Section -->
    <section class="py-20 bg-gradient-to-br from-[#2d420c] to-[#406112] mt-16 md:mt-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16">

            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Focus Areas
                </h2>
                <div class="w-24 h-1 bg-white rounded-full mx-auto mb-6"></div>
                <p class="text-lg text-gray-200 max-w-2xl mx-auto">
                    Building Africa’s climate-resilient future
                </p>
            </div>

            <!-- Services Grid -->
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:justify-items-start">

                <!-- Service 1 - Ecofuel Briquettes -->
                <div
                    class="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#406112]/20 relative overflow-hidden w-full max-w-sm lg:max-w-none">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Icon -->
                    <div class="relative mb-6">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[#406112]/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Icon name="heroicons:fire"
                                class="w-8 h-8 text-[#406112] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <!-- Pulse Effect -->
                        <div
                            class="absolute inset-0 w-16 h-16 bg-[#406112]/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="relative">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#406112] transition-colors duration-300">
                            Sustainable Ecofuel Briquettes
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-6">
                            We manufacture high-quality ecofuel briquettes from rice husk, sawdust, and groundnut
                            husk—providing clean, affordable, and deforestation-free alternatives to charcoal and
                            firewood.
                        </p>

                        <!-- Learn More Button -->
                        <div
                            class="flex items-center text-[#406112] font-semibold group-hover:text-[#2d420c] transition-colors duration-300">
                            <NuxtLink to="/ecofuel-briquettes"><span
                                    class="group-hover:translate-x-2 transition-transform duration-300">Learn
                                    More</span>

                                <Icon name="heroicons:arrow-right"
                                    class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Service 2 - Climate-Smart Agriculture -->
                <div
                    class="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#406112]/20 relative overflow-hidden w-full max-w-sm lg:max-w-none">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Icon -->
                    <div class="relative mb-6">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[#406112]/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Icon name="heroicons:beaker"
                                class="w-8 h-8 text-[#406112] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <!-- Pulse Effect -->
                        <div
                            class="absolute inset-0 w-16 h-16 bg-[#406112]/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="relative">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#406112] transition-colors duration-300">
                            Climate Smart Agriculture and Mechanization
                        </h3>

                        <p class="text-gray-600 leading-relaxed mb-6">
                            We support farmers with access to mechanized tools and regenerative practices including
                            biochar application, agroforestry, and water-efficient farming systems.
                        </p>

                        <!-- Learn More Button -->
                        <div
                            class="flex items-center text-[#406112] font-semibold group-hover:text-[#2d420c] transition-colors duration-300">
                            <NuxtLink to="/climate-smart-agriculture"><span
                                    class="group-hover:translate-x-2 transition-transform duration-300">Learn
                                    More</span>

                                <Icon name="heroicons:arrow-right"
                                    class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Service 3 - Carbon Sequestration -->
                <div
                    class="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#406112]/20 relative overflow-hidden w-full max-w-sm lg:max-w-none">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Icon -->
                    <div class="relative mb-6">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[#406112]/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <div
                                class="w-8 h-8 bg-[#406112] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <!-- Pulse Effect -->
                        <div
                            class="absolute inset-0 w-16 h-16 bg-[#406112]/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="relative">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#406112] transition-colors duration-300">
                            Achieving Carbon Credits from Certified Emission Reductions
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-6">
                            We develop measurable carbon reduction projects under global standards like Verra and
                            Gold Standard, enabling Nigeria to earn and trade carbon credits.
                        </p>

                        <!-- Learn More Button -->
                        <div
                            class="flex items-center text-[#406112] font-semibold group-hover:text-[#2d420c] transition-colors duration-300">
                            <NuxtLink to="/carbon-sequestration"><span
                                    class="group-hover:translate-x-2 transition-transform duration-300">Learn
                                    More</span>

                                <Icon name="heroicons:arrow-right"
                                    class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>