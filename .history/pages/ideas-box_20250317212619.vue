<template>
    <div>
        <!-- Enhanced hero section with overlay gradient and animated elements -->
        <div class="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden">
            <img src="~/assets/img/toei-idea-box.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700" />

            <!-- Improved overlay with gradient -->
            <div
                class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 flex items-center justify-center">
                <div class="text-center p-6 md:p-10 max-w-3xl mx-auto">
                    <!-- Heading with animated underline effect -->
                    <div class="mb-4 md:mb-6 relative">
                        <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Shape <span class="text-emerald-400">Tomorrow</span> Today
                        </h1>
                        <div class="h-1 w-24 md:w-32 bg-emerald-500 mx-auto mt-3 md:mt-4 rounded-full animate-pulse">
                        </div>
                    </div>

                    <!-- Compelling subheading -->
                    <p class="text-gray-200 text-lg md:text-2xl font-light mb-6 md:mb-8">
                        Your ideas can transform communities across Nigeria
                    </p>

                    <!-- Call to action button with hover effect -->
                    <a href="#idea-form"
                        class="inline-block px-8 py-3 md:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30">
                        Share Your Vision
                    </a>
                </div>
            </div>

            <!-- Decorative element -->
            <div class="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#e6f5f0" class="w-full h-10">
                    <path
                        d="M0,64L80,64C160,64,320,64,480,53.3C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
                    </path>
                </svg>
            </div>
        </div>

        <!-- Introduction section with value proposition -->
        <div class="bg-[#e6f5f0] py-10 md:py-12">
            <div class="max-w-5xl mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                    <!-- Impact number cards -->
                    <div class="flex flex-col sm:flex-row gap-4 w-full md:w-1/2">
                        <div
                            class="bg-white rounded-lg shadow-md p-5 flex-1 transform hover:-translate-y-1 transition-all duration-300">
                            <h3 class="text-emerald-700 text-4xl font-bold">15+</h3>
                            <p class="text-gray-600 mt-2">Community-led initiatives launched this year</p>
                        </div>
                        <div
                            class="bg-white rounded-lg shadow-md p-5 flex-1 transform hover:-translate-y-1 transition-all duration-300">
                            <h3 class="text-emerald-700 text-4xl font-bold">84%</h3>
                            <p class="text-gray-600 mt-2">Of ideas receive funding and implementation support</p>
                        </div>
                    </div>

                    <!-- Empowering message -->
                    <div class="w-full md:w-1/2">
                        <h2 class="text-2xl md:text-3xl font-semibold text-emerald-800 mb-4">Your Voice Matters</h2>
                        <p class="text-gray-700 leading-relaxed">
                            The Oaktree Empowerment Initiative partners with communities across Nigeria to create
                            sustainable change. We believe the most powerful solutions come from the people who
                            understand the challenges best — you.
                        </p>
                        <div class="flex items-center mt-4 text-emerald-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="font-medium">Help us prioritize our next project</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ideas submission form -->
        <div id="idea-form">
            <LandingIdeasBox />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing",
});
</script>