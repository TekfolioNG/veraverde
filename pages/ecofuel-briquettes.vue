<template>
    <div>
        <!-- Hero Section -->
        <section class="relative h-[80vh] overflow-hidden">
            <!-- Background image with overlay -->
            <div class="absolute inset-0 bg-gray-900">
                <img src="~/assets/img/ververde-ecofuel-hero.jpg" alt="Vera Verde Ecofuel Briquettes"
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
                                Clean Energy from Farm Waste
                            </h1>
                            <div class="w-20 h-0.5 bg-[#99cc33] ml-auto mb-8"></div>
                            <p class="text-lg text-gray-300 max-w-2xl ml-auto">
                                Sustainable fuel made from agricultural residues,
                                offering a cleaner, safer alternative to firewood and charcoal.
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
                            Vera Verde Ecofuel Briquettes
                        </h2>

                        <div class="w-20 h-1 bg-[#99cc33] mb-6 mx-auto md:mx-0"></div>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            Vera Verde produces sustainable ecofuel briquettes made from agricultural residues like
                            rice husk, sawdust, and groundnut shells. These clean-burning briquettes are designed to
                            replace firewood and charcoal, offering households and businesses a safer, more affordable,
                            and deforestation-free fuel alternative.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            Our goal is simple: reduce indoor air pollution, protect forests, and provide clean energy
                            that meets the daily needs of real people.
                        </p>
                    </div>

                    <!-- Image Section -->
                    <div class="relative rounded-2xl overflow-hidden shadow-xl">
                        <img src="~/assets/img/veraverde-ecofuel3.jpg" alt="Vera Verde Ecofuel Briquettes Production"
                            class="w-full h-auto rounded-2xl" />
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
                        From waste collection to clean energy distribution
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Waste-to-Energy Production -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover mx-auto md:mx-0">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:arrow-path" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Waste-to-Energy
                            Production</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            We collect agricultural byproducts and compress them into high-density briquettes that
                            burn longer and cleaner than traditional fuels, with far lower carbon emissions.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Made from rice husk, sawdust, and groundnut shells</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Burns 3x longer than traditional charcoal</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">High-density compression for efficient storage</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Accessible Distribution -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:truck" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Accessible
                            Distribution</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            Our briquettes are sold directly to homes and businesses through our partnerships with
                            e-commerce giants like Konga.com and Jumia.com as well as through clean cookstove campaigns.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Available on Konga.com and Jumia.com</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Government and NGO partnerships</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Direct-to-consumer delivery</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Emission Reduction -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:cloud" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Emission Reduction
                        </h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            One kilogram of our briquettes emits just 0.02 kg of CO₂—compared to 1.65–1.83 kg from
                            firewood or charcoal—drastically cutting harmful emissions.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">98% lower CO₂ emissions than charcoal</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Reduces indoor air pollution by 75%</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Helps combat deforestation</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Scalable Model -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:chart-bar-square" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Scalable, Lean Model
                        </h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            We operate a flexible model focused on marketing, logistics, and partnerships, allowing us
                            to scale rapidly without heavy manufacturing overhead.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Flexible production partnerships</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Focus on marketing and logistics</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Rapid scaling without heavy overhead</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Impact Stats Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div class="relative rounded-2xl overflow-hidden shadow-xl">
                        <img src="~/assets/img/veraverde-ecofuel4.jpg" alt="Clean cookstove with briquettes"
                            class="w-full h-auto rounded-2xl" />
                    </div>

                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 section-title">
                            Clean Energy Impact
                        </h2>
                        <div class="w-20 h-1 bg-[#99cc33] mb-6"></div>

                        <div class="space-y-6">
                            <div class="flex items-center">
                                <div class="w-16 h-16 bg-[#e8f5e9] rounded-xl flex items-center justify-center mr-4">
                                    <span class="text-2xl font-bold text-[#2d420c]">70%</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900">Nigerian Households</h3>
                                    <p class="text-gray-600">Still rely on wood-based fuel for cooking, putting both
                                        human health and forests at risk.</p>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <div class="w-16 h-16 bg-[#e8f5e9] rounded-xl flex items-center justify-center mr-4">
                                    <span class="text-2xl font-bold text-[#2d420c]">0.02</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900">kg CO₂ per kg</h3>
                                    <p class="text-gray-600">Emissions from our briquettes vs 1.65-1.83kg from wood.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <div class="w-16 h-16 bg-[#e8f5e9] rounded-xl flex items-center justify-center mr-4">
                                    <span class="text-2xl font-bold text-[#2d420c]">3x</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900">Longer Burning</h3>
                                    <p class="text-gray-600">Burns 3x longer than traditional charcoal</p>
                                </div>
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
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 section-title">Why Ecofuel Matters</h2>
                    <div class="w-20 h-0.5 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Providing clean energy solutions for Nigerian households and businesses
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 class="text-2xl font-bold mb-4">The Challenge</h3>
                        <p class="mb-6">
                            Over 70% of Nigerian households still rely on wood-based fuel, putting both human health and
                            forests at risk. Traditional fuels contribute to respiratory illnesses and accelerate
                            deforestation.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:information-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>4 million hectares of forest lost annually in Nigeria</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:information-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>93,000 Nigerian women and children die yearly from firewood smoke
                                    inhalation</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:information-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Families spend 20-30% of income on cooking fuel</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 class="text-2xl font-bold mb-4">The Solution</h3>
                        <p class="mb-6">
                            We're scaling clean energy one household at a time. Our ecofuel briquettes offer a practical
                            solution that's making a difference today.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>30% cheaper than traditional charcoal</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>1 ton of briquettes saves 88 trees</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Currently serving 15,000+ households monthly</span>
                            </li>
                        </ul>
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
    title: 'Vera Verde | Ecofuel Briquettes',
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