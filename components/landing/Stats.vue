<template>
    <!-- Impact Section -->
    <section class="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <!-- Subtle background patterns -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <!-- Main content grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

                <!-- Left Column: Image + SDG Targets -->
                <div class="order-1 lg:order-1 space-y-12">
                    <!-- Enhanced Image with overlay -->
                    <div class="relative group">
                        <div
                            class="w-full h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
                            <img src="~/assets/img/slider1-veraverde.jpg" alt="Impact visualization"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <!-- Gradient overlay for better text readability -->
                            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent">
                            </div>
                            <!-- Floating impact badge -->
                            <div
                                class="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                <div class="flex items-center space-x-2">
                                    <div
                                        class="w-3 h-3 gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                    <span class="text-sm font-semibold text-gray-800">Live Impact</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Enhanced SDG Targets Section -->
                    <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                        <div class="mb-8">
                            <div class="flex items-center space-x-3 mb-4">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl flex items-center justify-center">
                                    <Icon name="heroicons:check-circle" class="w-6 h-6 text-white" />
                                </div>
                                <h2
                                    class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    SDG & AU Agenda 2063 Targets
                                </h2>
                            </div>
                            <p class="text-lg text-gray-600 leading-relaxed">
                                Our work directly supports these United Nations Sustainable Development Goals and
                                African Union's Agenda 2063
                            </p>
                        </div>

                        <!-- Updated SDG Grid - 3 columns for better mobile display -->
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto px-4 md:px-0">
                            <!-- SDG 1: No Poverty -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 1</span>
                                            <Icon name="heroicons:hand-raised"
                                                class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                No Poverty
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 2: Zero Hunger -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 2</span>
                                            <Icon name="heroicons:heart" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Zero Hunger
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 3: Good Health -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 3</span>
                                            <Icon name="heroicons:heart" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Good Health
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 4: Quality Education -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 4</span>
                                            <Icon name="heroicons:academic-cap"
                                                class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Quality Education
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 5: Gender Equality -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 5</span>
                                            <Icon name="heroicons:scale" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Gender Equality
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 6: Clean Water -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 6</span>
                                            <Icon name="heroicons:droplet" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Clean Water
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 7: Affordable Energy -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 7</span>
                                            <Icon name="heroicons:bolt" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Affordable Energy
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 8: Decent Work -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 8</span>
                                            <Icon name="heroicons:briefcase" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Decent Work
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 9: Industry Innovation -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 9</span>
                                            <Icon name="heroicons:cog" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Industry Innovation
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 12: Responsible Consumption -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 12</span>
                                            <Icon name="heroicons:arrow-path"
                                                class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Responsible Consumption
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 13: Climate Action -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 13</span>
                                            <Icon name="heroicons:sun" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Climate Action
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 15: Life on Land -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">SDG 15</span>
                                            <Icon name="heroicons:globe-europe-africa"
                                                class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Life on Land
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- AU Agenda 2063 Goal 3 -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">AU 3</span>
                                            <Icon name="heroicons:heart" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Health & Well-being
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- AU Agenda 2063 Goal 4 -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">AU 4</span>
                                            <Icon name="heroicons:academic-cap"
                                                class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Education & Skills
                                            </b></h4>
                                    </div>
                                </div>
                            </div>

                            <!-- AU Agenda 2063 Goal 5 -->
                            <div
                                class="group cursor-pointer transition-all duration-300 hover:-translate-y-2 w-full mx-auto">
                                <div
                                    class="relative bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>

                                    <div class="relative">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="text-xl font-bold text-white">AU 5</span>
                                            <Icon name="heroicons:scale" class="w-5 h-5 text-white flex-shrink-0" />
                                        </div>
                                        <h4 class="text-white/90 font-medium text-xs"><b>
                                                Gender Equality
                                            </b></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Enhanced Stats -->
                <div class="order-2 lg:order-2">
                    <!-- Enhanced Section header -->
                    <div class="mb-16 text-center lg:text-left">
                        <div class="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-2xl flex items-center justify-center shadow-lg">
                                <Icon name="heroicons:chart-bar" class="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2
                                    class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Our Impact in Numbers</h2>
                                <div class="w-24 h-1 bg-[#2d420c] rounded-full mt-2 mx-auto lg:mx-0">
                                </div>
                            </div>
                        </div>
                        <p class="text-lg text-gray-900 leading-relaxed">
                            Every data point represents progress toward a cleaner, more resilient future.
                        </p>
                    </div>

                    <!-- Enhanced Stats Grid with Better Icons -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center sm:justify-items-start">

                        <!-- Stat 1 - Briquettes Sold -->
                        <div
                            class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 w-full max-w-sm sm:max-w-none text-center sm:text-left">
                            <div class="flex items-center justify-center sm:justify-start space-x-4 mb-2">
                                <div class="flex-shrink-0 relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="heroicons:archive-box" class="w-7 h-7 text-primary" />
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                </div>
                                <div class="text-3xl md:text-3xl font-bold bg-gradient-to-br from-[#2d420c] to-[#406112] bg-clip-text text-transparent"
                                    ref="stat1">30</div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-base font-semibold text-gray-900">Tons of Briquettes Sold</h3>
                                <p class="text-sm text-gray-900 leading-relaxed mb-0">Clean cooking fuel alternative</p>
                            </div>
                        </div>

                        <!-- Stat 2 - Trees Prevented -->
                        <div
                            class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 w-full max-w-sm sm:max-w-none text-center sm:text-left">
                            <div class="flex items-center justify-center sm:justify-start space-x-4 mb-2">
                                <div class="flex-shrink-0 relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="heroicons:globe-europe-africa" class="w-7 h-7 text-primary" />
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                </div>
                                <div class="text-3xl md:text-3xl font-bold bg-gradient-to-br from-[#2d420c] to-[#406112] bg-clip-text text-transparent"
                                    ref="stat2">1,200</div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-base font-semibold text-gray-900">Trees Prevented Annually</h3>
                                <p class="text-sm text-gray-900 leading-relaxed mb-0">Forest conservation through
                                    sustainable alternatives</p>
                            </div>
                        </div>

                        <!-- Stat 3 - CO₂ Prevented -->
                        <div
                            class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 w-full max-w-sm sm:max-w-none text-center sm:text-left">
                            <div class="flex items-center justify-center sm:justify-start space-x-4 mb-2">
                                <div class="flex-shrink-0 relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="heroicons:cloud" class="w-7 h-7 text-primary" />
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                </div>
                                <div class="text-3xl md:text-3xl font-bold bg-gradient-to-br from-[#2d420c] to-[#406112] bg-clip-text text-transparent"
                                    ref="stat3">49</div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-base font-semibold text-gray-900">Tons of CO₂ Prevented Annually</h3>
                                <p class="text-sm text-gray-900 leading-relaxed mb-0">Through sustainable practices</p>
                            </div>
                        </div>

                        <!-- Stat 4 - Jobs Created -->
                        <div
                            class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 w-full max-w-sm sm:max-w-none text-center sm:text-left">
                            <div class="flex items-center justify-center sm:justify-start space-x-4 mb-2">
                                <div class="flex-shrink-0 relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="heroicons:briefcase" class="w-7 h-7 text-primary" />
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                </div>
                                <div class="text-3xl md:text-3xl font-bold bg-gradient-to-br from-[#2d420c] to-[#406112] bg-clip-text text-transparent"
                                    ref="stat4">50+</div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-base font-semibold text-gray-900">Jobs Created</h3>
                                <p class="text-sm text-gray-900 leading-relaxed mb-0">Dignified employment across value
                                    chains</p>
                            </div>
                        </div>

                        <!-- Stat 5 - Grains Produced & Traded -->
                        <div
                            class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 w-full max-w-sm sm:max-w-none text-center sm:text-left">
                            <div class="flex items-center justify-center sm:justify-start space-x-4 mb-2">
                                <div class="flex-shrink-0 relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="heroicons:archive-box" class="w-7 h-7 text-primary" />
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                </div>
                                <div class="text-3xl md:text-3xl font-bold bg-gradient-to-br from-[#2d420c] to-[#406112] bg-clip-text text-transparent"
                                    ref="stat5">0</div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-base font-semibold text-gray-900">Grains Produced & Traded</h3>
                                <p class="text-sm text-gray-900 leading-relaxed mb-0">Boosting food production through
                                    climate-smart methods</p>
                            </div>
                        </div>

                        <!-- Stat 6 - Farmers Onboarded -->
                        <div
                            class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 w-full max-w-sm sm:max-w-none text-center sm:text-left">
                            <div class="flex items-center justify-center sm:justify-start space-x-4 mb-2">
                                <div class="flex-shrink-0 relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="heroicons:user-group" class="w-7 h-7 text-primary" />
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                </div>
                                <div class="text-3xl md:text-3xl font-bold bg-gradient-to-br from-[#2d420c] to-[#406112] bg-clip-text text-transparent"
                                    ref="stat6">0</div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-base font-semibold text-gray-900">Farmers Onboarded</h3>
                                <p class="text-sm text-gray-900 leading-relaxed mb-0">Empowering smallholder farmers
                                    with sustainable practices</p>
                            </div>
                        </div>

                        <!-- Stat 7 - Communities Reached -->
                        <div
                            class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 w-full max-w-sm sm:max-w-none text-center sm:text-left">
                            <div class="flex items-center justify-center sm:justify-start space-x-4 mb-2">
                                <div class="flex-shrink-0 relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="heroicons:building-office-2" class="w-7 h-7 text-primary" />
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                </div>
                                <div class="text-3xl md:text-3xl font-bold bg-gradient-to-br from-[#2d420c] to-[#406112] bg-clip-text text-transparent"
                                    ref="stat7">0</div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-base font-semibold text-gray-900">Communities Reached</h3>
                                <p class="text-sm text-gray-900 leading-relaxed mb-0">Driving transformation across
                                    rural areas</p>
                            </div>
                        </div>

                        <!-- Stat 8 - Hectares Cultivated -->
                        <div
                            class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 w-full max-w-sm sm:max-w-none text-center sm:text-left">
                            <div class="flex items-center justify-center sm:justify-start space-x-4 mb-2">
                                <div class="flex-shrink-0 relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="heroicons:map" class="w-7 h-7 text-primary" />
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                </div>
                                <div class="text-3xl md:text-3xl font-bold bg-gradient-to-br from-[#2d420c] to-[#406112] bg-clip-text text-transparent"
                                    ref="stat8">0</div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-base font-semibold text-gray-900">Hectares Cultivated</h3>
                                <p class="text-sm text-gray-900 leading-relaxed mb-0">Improved soil fertility at scale
                                </p>
                            </div>
                        </div>

                        <!-- Stat 9 - Storage Acquired -->
                        <div
                            class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 w-full max-w-sm sm:max-w-none text-center sm:text-left">
                            <div class="flex items-center justify-center sm:justify-start space-x-4 mb-2">
                                <div class="flex-shrink-0 relative">
                                    <div
                                        class="w-14 h-14 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="heroicons:server-stack" class="w-7 h-7 text-primary" />
                                    </div>
                                    <div
                                        class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-full animate-pulse">
                                    </div>
                                </div>
                                <div class="text-3xl md:text-3xl font-bold bg-gradient-to-br from-[#2d420c] to-[#406112] bg-clip-text text-transparent"
                                    ref="stat9">0</div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-base font-semibold text-gray-900">Storage Acquired (MT)</h3>
                                <p class="text-sm text-gray-900 leading-relaxed mb-0">Sustainable storage capacity</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Refs for the stat elements
const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)
const stat4 = ref(null)
const stat5 = ref(null)
const stat6 = ref(null)
const stat7 = ref(null)
const stat8 = ref(null)
const stat9 = ref(null)

// Stats data - verified stats have actual numbers, others are 0
const stats = [
    { ref: stat1, value: 30, suffix: '' },       // Briquettes sold
    { ref: stat2, value: 1200, suffix: '' },    // Trees prevented
    { ref: stat3, value: 49, suffix: '' },      // CO₂ prevented
    { ref: stat4, value: 50, suffix: '+' },     // Jobs created
    { ref: stat5, value: 0, suffix: '' },       // Grains produced
    { ref: stat6, value: 0, suffix: '' },       // Farmers onboarded
    { ref: stat7, value: 0, suffix: '' },       // Communities reached
    { ref: stat8, value: 0, suffix: '' },       // Hectares cultivated
    { ref: stat9, value: 0, suffix: '' }        // Storage acquired
]

// Enhanced format number with better formatting
const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
}

// Enhanced animation function with easing
const animateNumber = (element, targetValue, duration = 2500, suffix = '') => {
    let startValue = 0
    const startTime = performance.now()

    const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)

        const formattedValue = formatNumber(currentValue)
        element.textContent = formattedValue + suffix

        if (progress < 1) {
            requestAnimationFrame(animate)
        } else {
            // Ensure final value is exactly correct
            element.textContent = formatNumber(targetValue) + suffix
        }
    }

    requestAnimationFrame(animate)
}

// Enhanced intersection observer with staggered animations
const observeStats = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const statIndex = stats.findIndex(stat => stat.ref.value === entry.target)
                if (statIndex !== -1) {
                    const { value, suffix } = stats[statIndex]
                    // Stagger animations for visual appeal
                    setTimeout(() => {
                        animateNumber(entry.target, value, 2500, suffix)
                    }, statIndex * 150)
                    observer.unobserve(entry.target)
                }
            }
        })
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    })

    stats.forEach(stat => {
        if (stat.ref.value) {
            observer.observe(stat.ref.value)
        }
    })
}

onMounted(() => {
    observeStats()
})
</script>

<style scoped>
/* Enhanced brand colors with gradients */
.bg-primary {
    background-color: #406112;
}

.text-primary {
    color: #406112;
}

/* Custom shadow utilities */
.shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Enhanced transitions */
.transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glassmorphism effect */
.backdrop-blur-sm {
    backdrop-filter: blur(4px);
}

/* Custom gradient text */
.bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

.group:hover .group-hover\:shadow-2xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }

    .text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem;
    }

    .text-5xl {
        font-size: 3rem;
        line-height: 1;
    }
}

/* Animation keyframes */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Custom pulse animation */
@keyframes pulse-soft {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}

.animate-pulse {
    animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>