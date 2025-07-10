<!-- pages/about.vue -->
<template>
    <div>
        <!-- Hero Section -->
        <section class="relative h-[80vh] overflow-hidden">
            <!-- Background image with overlay -->
            <div class="absolute inset-0 bg-gray-900">
                <img src="~/assets/img/about-us-veraverde2.jpg" alt="Vera Verde sustainable operations"
                    class="w-full h-full object-cover opacity-70" />
                <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 container mx-auto h-full flex items-center px-6">
                <div class="w-full flex flex-col lg:flex-row items-center justify-between">
                    <!-- Left side - Simple pipe and "About Us" -->
                    <div class="hidden lg:block w-1/12">
                        <div class="flex items-start h-full pt-2"> <!-- Added pt-2 for vertical alignment -->
                            <div class="w-1 h-24 bg-[#99cc33]"></div>
                            <span
                                class="text-white text-lg font-medium ml-4 -rotate-90 origin-left whitespace-nowrap translate-y-18">
                                <!-- Added translate-y-8 -->
                                About Us
                            </span>
                        </div>
                    </div>

                    <!-- Right side - Main content -->
                    <div class="w-full lg:w-10/12 flex flex-col items-end translate-y-12">
                        <!-- Changed to flex-col and items-end -->
                        <div class="text-right"> <!-- Wrapper div for right alignment -->
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                <!-- Changed to font-bold -->
                                Sustainable by Nature
                            </h1>
                            <div class="w-20 h-0.5 bg-[#99cc33] ml-auto mb-8"></div>
                            <!-- Removed mx-auto, kept ml-auto -->
                            <p class="text-lg text-gray-300 max-w-2xl ml-auto"> <!-- Removed mx-auto, kept ml-auto -->
                                Committed to environmental stewardship through innovative solutions that harmonize
                                economic growth with ecological preservation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Company Overview -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div class="inline-block mb-4">
                            <span
                                class="bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] px-4 py-2 rounded-full text-sm font-medium">
                                Who We Are
                            </span>
                        </div>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 section-title">
                            Building Africa’s Climate-Resilient Future
                        </h2>
                        <div class="w-20 h-1 bg-[#99cc33] mb-6"></div>
                        <p class="text-lg text-gray-900 mb-6 leading-relaxed">
                            At <strong>Vera Verde</strong> we’re driven by a simple belief: sustainability should work
                            for both people and the planet. As a Nigerian-based green innovation company, we focus on
                            real-world solutions that cut emissions, revive farmlands, and create economic
                            opportunities—especially in rural communities.
                        </p>
                        <p class="text-lg text-gray-900 mb-8 leading-relaxed">
                            From farming clusters to ecofuel hubs, we partner with local cooperatives, farmers, and
                            institutions to deliver impact at scale. Our approach blends regenerative agriculture, clean
                            energy alternatives, and carbon-smart practices to help build a future that’s greener,
                            fairer, and more resilient.

                        </p>


                    </div>

                    <div class="relative">
                        <div class="bg-gradient-to-br from-[#2d420c] to-[#406112] rounded-2xl p-8 text-white">
                            <h3 class="text-2xl font-bold mb-6 section-title">What We Do</h3>
                            <div class="space-y-4">
                                <div class="flex items-start space-x-3">
                                    <div
                                        class="w-2 h-2 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-full mt-2 flex-shrink-0">
                                    </div>
                                    <p class="text-white">Deployment of mechanized and climate-smart agricultural
                                        systems</p>
                                </div>
                                <div class="flex items-start space-x-3">
                                    <div
                                        class="w-2 h-2 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-full mt-2 flex-shrink-0">
                                    </div>
                                    <p class="text-white">Production of sustainable ecofuel briquettes from
                                        agricultural residues</p>
                                </div>
                                <div class="flex items-start space-x-3">
                                    <div
                                        class="w-2 h-2 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-full mt-2 flex-shrink-0">
                                    </div>
                                    <p class="text-white">Development of certified carbon credit projects</p>
                                </div>
                                <div class="flex items-start space-x-3">
                                    <div
                                        class="w-2 h-2 bg-gradient-to-br from-[#c8e6a0] to-[#d4f0b0] rounded-full mt-2 flex-shrink-0">
                                    </div>
                                    <p class="text-white">Partnership with NGOs, government, and rural communities
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="absolute -bottom-4 -right-4 w-full h-full bg-green-200 rounded-2xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission & Vision Section -->
        <section id="mission" class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">Our Purpose & Vision
                    </h2>
                    <div class="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Driving sustainable transformation across Africa through innovation, partnership, and
                        environmental stewardship.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-12">
                    <!-- Mission -->
                    <div class="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-2xl card-hover">
                        <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 section-title">Our Mission</h3>
                        <p class="text-gray-700 leading-relaxed text-lg">
                            To lead Nigeria's transition to a low-carbon economy by enabling regenerative agriculture,
                            promoting clean energy from biomass, and creating inclusive green jobs through innovation
                            and partnership.
                        </p>
                    </div>

                    <!-- Vision -->
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-2xl card-hover">
                        <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 section-title">Our Vision</h3>
                        <p class="text-gray-700 leading-relaxed text-lg">
                            To become Africa's foremost green enterprise empowering communities with sustainable
                            technologies that restore land, reduce emissions, and build resilience against climate
                            change.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Focus Areas Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">Our Focus Areas</h2>
                    <div class="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Three key pillars driving sustainable development across Nigeria and beyond.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Climate Smart Agriculture -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Climate Smart <br>Agriculture</br></h3>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            We support farmers with access to mechanized tools and regenerative practices including
                            biochar application, agroforestry, and water-efficient farming systems.
                        </p>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                <span class="text-sm text-gray-600">Mechanized farming solutions</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                <span class="text-sm text-gray-600">Biochar soil enhancement</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                <span class="text-sm text-gray-600">Water-efficient systems</span>
                            </div>
                        </div>
                    </div>

                    <!-- Carbon Credits -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Carbon Credits Development</h3>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            We develop measurable carbon reduction projects under global standards like Verra and Gold
                            Standard, enabling Nigeria to earn and trade carbon credits.
                        </p>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                                <span class="text-sm text-gray-900">Verra certified projects</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                                <span class="text-sm text-gray-900">Gold Standard compliance</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                                <span class="text-sm text-gray-900">Emission reduction tracking</span>
                            </div>
                        </div>
                    </div>

                    <!-- Sustainable Ecofuel -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div class="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Sustainable Ecofuel Briquettes</h3>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            We manufacture high-quality ecofuel briquettes from rice husk, sawdust, and groundnut
                            husk—providing clean, affordable alternatives to charcoal and firewood.
                        </p>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                                <span class="text-sm text-gray-600">Agricultural waste utilization</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                                <span class="text-sm text-gray-600">Deforestation-free fuel</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                                <span class="text-sm text-gray-600">Clean burning technology</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">Our Core Values</h2>
                    <div class="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        The principles that guide our commitment to sustainable development and community empowerment.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Sustainability -->
                    <div class="text-center group">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3">Sustainability</h3>
                        <p class="text-gray-900 text-sm leading-relaxed">
                            Every solution we develop prioritizes long-term environmental and social impact.
                        </p>
                    </div>

                    <!-- Innovation -->
                    <div class="text-center group">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3">Innovation</h3>
                        <p class="text-gray-900 text-sm leading-relaxed">
                            We embrace cutting-edge technologies to solve complex environmental challenges.
                        </p>
                    </div>

                    <!-- Partnership -->
                    <div class="text-center group">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3">Partnership</h3>
                        <p class="text-gray-900 text-sm leading-relaxed">
                            Collaboration with communities, governments, and organizations drives our success.
                        </p>
                    </div>

                    <!-- Impact -->
                    <div class="text-center group">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3">Impact</h3>
                        <p class="text-gray-900 text-sm leading-relaxed">
                            We measure success by the positive change we create in communities and ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Impact Section -->
        <section id="impact" class="py-20 bg-gradient-to-br from-green-50 to-blue-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">Our Impact</h2>
                    <div class="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Creating measurable change across Nigeria's agricultural and environmental landscape.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center bg-white p-6 rounded-2xl shadow-sm">
                        <div class="text-4xl font-bold text-green-600 mb-2 stats-counter">850+</div>
                        <div class="text-gray-600">Farmers Empowered</div>
                    </div>
                    <div class="text-center bg-white p-6 rounded-2xl shadow-sm">
                        <div class="text-4xl font-bold text-blue-600 mb-2 stats-counter">10,000+</div>
                        <div class="text-gray-600">Tons CO₂ Reduced</div>
                    </div>
                    <div class="text-center bg-white p-6 rounded-2xl shadow-sm">
                        <div class="text-4xl font-bold text-amber-600 mb-2 stats-counter">25+</div>
                        <div class="text-gray-600">Communities Served</div>
                    </div>
                    <div class="text-center bg-white p-6 rounded-2xl shadow-sm">
                        <div class="text-4xl font-bold text-purple-600 mb-2 stats-counter">1000+</div>
                        <div class="text-gray-600">Green Jobs Created</div>
                    </div>
                </div>
            </div>
        </section>
        <LandingCta />
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing"
});
useHead({
    title: 'About Us - Vera Verde Limited',
    meta: [
        { name: 'description', content: 'Learn about Vera Verde Limited and our mission to pioneer Nigeria\'s green revolution through sustainable technologies and climate-smart solutions.' }
    ]
})
</script>