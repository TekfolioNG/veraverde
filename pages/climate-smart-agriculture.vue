<template>
    <div>
        <!-- Hero Section -->
        <section class="relative h-[80vh] overflow-hidden">
            <!-- Background image with overlay -->
            <div class="absolute inset-0 bg-gray-900">
                <img src="~/assets/img/climate-smart-agric3.jpg" alt="Climate Smart Agriculture"
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
                                Farming That Protects the Future
                            </h1>
                            <div class="w-20 h-0.5 bg-[#99cc33] ml-auto mb-8"></div>
                            <p class="text-lg text-gray-300 max-w-2xl ml-auto">
                                Regenerative practices that boost yields, restore soil health, and build climate
                                resilience for Nigerian farmers.
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
                            Working With Nature
                        </h2>

                        <div class="w-20 h-1 bg-[#99cc33] mb-6 mx-auto md:mx-0"></div>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            At Vera Verde, we help farmers grow more by working with nature, not against it. Our
                            climate-smart agriculture approach combines modern tools with regenerative practices to
                            boost yields, restore soil health, and build resilience to climate shocks like drought and
                            erosion.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            We support rural communities with affordable, low-emission solutions that make farming more
                            productive, more sustainable, and better for the planet.
                        </p>
                    </div>

                    <!-- Video Section -->
                    <div class="relative rounded-2xl overflow-hidden shadow-xl">
                        <!-- Video element -->
                        <video ref="videoPlayer" class="w-full h-auto rounded-2xl"
                            poster="~/assets/img/climate-smart-agric2.jpg" preload="metadata" controls>
                            <source
                                src="https://pub-9c521f4c51b34d61b7ad664a56247288.r2.dev/climate-smart-agric-veraverde.mp4"
                                type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div v-if="!isPlaying" @click="playVideo"
                            class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors duration-300 cursor-pointer">
                            <button
                                class="w-16 h-16 bg-[#99cc33] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <Icon name="heroicons:play" class="w-8 h-8 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What We Do Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title">Our Climate-Smart
                        Solutions</h2>
                    <div class="w-20 h-1 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Practical innovations that make farming more sustainable and productive
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Biochar Application -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover mx-auto md:mx-0">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:cube" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Biochar Application
                        </h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            We apply biochar—produced from organic waste—to enrich depleted soils, improve water
                            retention, and lock carbon deep underground, reducing emissions while boosting fertility.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Increases soil organic matter by up to 40%</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Improves water retention in sandy soils</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Sequesters carbon for centuries</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Mechanized Tools -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:cog" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Mechanized Farm Tools
                        </h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            Through cooperative networks, we give farmers access to time-saving equipment like tractors
                            and planters, improving efficiency and reducing manual labor.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Shared equipment reduces costs by 60%</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">5x faster planting than manual methods</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Precision planting improves yields</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Agroforestry -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:globe-europe-africa" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Agroforestry & Cover
                            Cropping</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            We encourage tree planting and intercropping techniques that prevent erosion, restore
                            biodiversity, and protect long-term soil productivity.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Reduces soil erosion by up to 80%</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Provides additional income from tree crops</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Creates microclimates that protect crops</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Water Efficiency -->
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                        <div
                            class="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Icon name="heroicons:cloud" class="w-8 h-8 text-[#2d420c]" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Water-Efficient
                            Farming</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            In dry zones, we support techniques like mulching and drip irrigation that help farmers
                            conserve water without reducing output.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Reduces water usage by 30-60%</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Maintains yields during droughts</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span class="text-gray-700">Prevents soil salinization</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why It Matters Section -->
        <section class="py-20 bg-gradient-to-br from-[#2d420c] to-[#406112]">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 section-title">Why Climate-Smart
                        Agriculture Matters</h2>
                    <div class="w-20 h-0.5 bg-[#99cc33] mx-auto mb-6"></div>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Transforming Nigerian agriculture for food security and environmental sustainability
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 class="text-2xl font-bold mb-4">The Challenge</h3>
                        <p class="mb-6">
                            In Nigeria, millions of smallholder farmers face degrading soil, irregular rainfall, and low
                            crop yields. Traditional farming methods struggle to adapt to climate change, threatening
                            food security and rural livelihoods.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:information-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Soil degradation affects 60% of farmland</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:information-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Rainfall variability increased by 40% in 20 years</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:information-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Average yields 30% below potential</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/20">
                        <h3 class="text-2xl font-bold mb-4">Our Solution</h3>
                        <p class="mb-6">
                            Climate-smart farming helps change this—boosting harvests, increasing income, and improving
                            food security while reducing environmental harm. Our approach delivers triple benefits:
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Increased productivity (20-50% yield gains)</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Enhanced resilience (drought/flood tolerance)</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle"
                                    class="w-5 h-5 text-[#99cc33] mt-0.5 mr-2 flex-shrink-0" />
                                <span>Reduced emissions (carbon sequestration)</span>
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
const videoPlayer = ref(null)
const isPlaying = ref(false)

const playVideo = () => {
    if (videoPlayer.value) {
        videoPlayer.value.play()
        isPlaying.value = true
    }
}

const pauseVideo = () => {
    if (videoPlayer.value) {
        videoPlayer.value.pause()
        isPlaying.value = false
    }
}

// Handle video events
const onVideoPlay = () => {
    isPlaying.value = true
}

const onVideoPause = () => {
    isPlaying.value = false
}

const onVideoEnded = () => {
    isPlaying.value = false
}

definePageMeta({
    layout: "landing"
});

useHead({
    title: 'Vera Verde | Climate-Smart Agriculture',
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

/* Video play button animation */
video::-webkit-media-controls-play-button {
    display: none !important;
}

video::-webkit-media-controls-start-playback-button {
    display: none !important;
}
</style>