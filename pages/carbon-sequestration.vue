<template>
    <div>
        <!-- Hero Section -->
        <section class="relative h-[80vh] overflow-hidden">
            <!-- Background image with overlay -->
            <div class="absolute inset-0 bg-gray-900">
                <img src="~/assets/img/carbom-sequestration-hero.png" alt="Carbon Sequestration"
                    class="w-full h-full object-cover opacity-80" />
                <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 container mx-auto h-full flex items-center px-6">
                <div class="w-full flex flex-col lg:flex-row items-center justify-between">
                    <!-- Left side - Simple pipe and section title -->
                    <div class="hidden lg:block w-1/12">
                        <div class="flex items-start h-full pt-2">
                            <div class="w-1 h-24 bg-[#99cc33]"></div>
                            <span
                                class="text-white text-lg font-medium ml-4 -rotate-90 origin-left whitespace-nowrap translate-y-18">
                                Our Work
                            </span>
                        </div>
                    </div>

                    <!-- Right side - Main content -->
                    <div class="w-full lg:w-10/12 flex flex-col items-end translate-y-12">
                        <div class="text-right">
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Putting Carbon Back Where It Belongs
                            </h1>
                            <div class="w-20 h-0.5 bg-[#99cc33] ml-auto mb-8"></div>
                            <p class="text-lg text-gray-300 max-w-2xl ml-auto">
                                Through biochar technology, we capture carbon from agricultural waste and return it to
                                the soil,
                                where it improves fertility and stays locked away for hundreds of years.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Intro Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2
                            class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 section-title text-center md:text-left">
                            Carbon Sequestration
                        </h2>

                        <div class="w-20 h-1 bg-[#99cc33] mb-6 mx-auto md:mx-0"></div>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            At Vera Verde, we don't just reduce emissions—we remove them. Through the use of biochar,
                            we capture carbon from agricultural waste and return it to the soil, where it improves
                            fertility,
                            retains moisture, and stays locked away for hundreds of years.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            This process, known as carbon sequestration, helps fight climate change at the root, while
                            improving
                            farm productivity and soil resilience in the communities we serve.
                        </p>
                    </div>

                    <!-- Image Section -->
                    <div class="relative rounded-2xl overflow-hidden shadow-xl">
                        <img src="~/assets/img/ververde-carbon.jpg" alt="Carbon Sequestration Process"
                            class="w-full h-auto rounded-2xl" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <p class="text-sm font-medium">Biochar Application</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What We Do Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">What We Do</h2>
                    <div class="w-20 h-1 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Advanced carbon removal solutions that benefit both climate and agriculture
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Biochar for Soil Enrichment -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover mx-auto md:mx-0">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:beaker" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Biochar for Soil
                            Enrichment</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            We produce biochar by heating agricultural waste in low-oxygen conditions. The result is a
                            stable,
                            carbon-rich material that's applied to farmland to restore degraded soils.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Produced from agricultural waste materials</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Restores degraded and overfarmed soils</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Stable carbon-rich material</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Long-Term Carbon Storage -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:lock-closed" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Long-Term Carbon
                            Storage</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            Unlike compost or mulch, biochar stores carbon for decades. This helps offset greenhouse gas
                            emissions and supports verified carbon credit projects under global standards.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Carbon stored for hundreds of years</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Verified carbon credit projects</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Meets global carbon standards</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Climate-Resilient Farming -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:shield-check" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Climate-Resilient
                            Farming</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            Biochar improves water retention, nutrient absorption, and root development—leading to
                            stronger
                            harvests, especially in arid or overfarmed regions.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Improves water retention by 30-40%</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Enhances nutrient absorption</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Stronger root development</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Pathway to Carbon Credits -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:currency-dollar" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Pathway to Carbon
                            Credits</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            We're laying the groundwork to certify carbon removal projects under frameworks like Verra
                            and
                            Gold Standard, creating new revenue opportunities for climate action in Africa.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Verra and Gold Standard certification</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Revenue from carbon credits</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Climate action financing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">How Carbon Sequestration
                        Works</h2>
                    <div class="w-20 h-1 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        The journey from agricultural waste to permanent carbon storage
                    </p>
                </div>

                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div class="relative rounded-2xl overflow-hidden shadow-xl">
                        <img src="~/assets/img/veraverde-ecofuel.jpg" alt="Biochar Production Process"
                            class="w-full h-auto rounded-2xl" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <p class="text-sm font-medium">Biochar Production</p>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div class="flex items-start">
                            <div
                                class="w-12 h-12 bg-[#99cc33] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                                1
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Waste Collection</h3>
                                <p class="text-gray-700">Agricultural residues like rice husks, corn stalks, and other
                                    organic matter are collected from farms.</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div
                                class="w-12 h-12 bg-[#99cc33] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                                2
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Pyrolysis Process</h3>
                                <p class="text-gray-700">Organic waste is heated in low-oxygen conditions, converting it
                                    into stable biochar that can store carbon for centuries.</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div
                                class="w-12 h-12 bg-[#99cc33] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                                3
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Soil Application</h3>
                                <p class="text-gray-700">Biochar is applied to farmland, where it enriches soil,
                                    improves water retention, and permanently sequesters carbon.</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div
                                class="w-12 h-12 bg-[#99cc33] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                                4
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Carbon Credit Generation</h3>
                                <p class="text-gray-700">The carbon removed from the atmosphere is verified and
                                    certified, generating valuable carbon credits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why It Matters Section -->
        <section class="py-20 bg-gradient-to-br from-[#2d420c] to-[#406112]">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 section-title">Why It Matters</h2>
                    <div class="w-20 h-0.5 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Carbon sequestration through biochar is one of the most effective nature-based solutions to
                        global warming
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 class="text-2xl font-bold mb-4">Climate Impact</h3>
                        <p class="mb-6">
                            At scale, biochar not only pulls CO₂ from the atmosphere but creates a permanent carbon sink
                            that can store carbon for hundreds of years, making it a crucial tool in fighting climate
                            change.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Removes CO₂ directly from atmosphere</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Permanent carbon storage solution</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Scalable across agricultural regions</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 class="text-2xl font-bold mb-4">Agricultural Benefits</h3>
                        <p class="mb-6">
                            Biochar helps farmers grow more with less—less water, less fertilizer, and less degradation.
                            It's a win-win solution that benefits both climate and agriculture.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Reduces water and fertilizer needs</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Improves soil health and fertility</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Increases crop yields and resilience</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="text-center">
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 class="text-2xl font-bold mb-4">The Future of Carbon Removal</h3>
                        <p class="text-lg mb-6">
                            As the world seeks effective climate solutions, biochar stands out as a proven technology
                            that
                            can be deployed at scale across Africa and beyond. Join us in building a carbon-negative
                            future.
                        </p>

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
    title: 'Vera Verde | Carbon Sequestration',
    meta: [
        { property: 'og:title', content: 'VeraVerde | Eco-Smart Agriculture & Clean Energy Solutions' },
        { property: 'og:description', content: 'Driving climate-smart farming and sustainable biofuels across Africa. VeraVerde connects innovation with impact in agriculture and renewable energy.' },
        { property: 'og:image', content: '/veraverde-og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'VeraVerde - Climate-Smart Agriculture & Clean Energy' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'VeraVerde | Eco-Smart Agriculture & Clean Energy Solutions' },
        { name: 'twitter:description', content: 'Driving climate-smart farming and sustainable biofuels across Africa.' },
        { name: 'twitter:image', content: '/veraverde-og.jpg' }
    ]
});
</script>

<style scoped>
.section-title {
    font-family: 'Barlow Condensed', sans-serif;
}

.card-hover {
    transition: all 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
</style>