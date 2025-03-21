<template>
    <div>
        <!-- Enhanced hero section -->
        <section class="w-full h-[85vh] relative">
            <img src="~/assets/img/toei-about-us.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div class="container mx-auto px-4 md:px-8">
                    <!-- Desktop layout -->
                    <div class="hidden md:flex justify-between items-center">
                        <!-- Vision Title (moved to left) -->
                        <div class="text-white max-w-md">
                            <h4
                                class="text-white text-xl uppercase tracking-wide font-medium mb-3 border-l-4 border-[#CEE377] pl-4">
                                OUR VISION
                            </h4>
                        </div>

                        <!-- Content (shifted slightly lower) -->
                        <div class="text-white max-w-2xl mt-16">
                            <h1 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                Rebuilding Lives, <span class="text-[#CEE377] italic">Transforming</span> Communities
                            </h1>
                            <p class="text-lg leading-relaxed mb-8">
                                We aim to rebuild lives and create hope for
                                individuals and communities through skills acquisition, rehabilitation, healthcare
                                services,
                                and community infrastructure.
                                We empower people to transform their lives and build self-sustaining futures.
                            </p>
                        </div>
                    </div>

                    <!-- Mobile layout (stacked) -->
                    <div class="md:hidden flex flex-col items-center text-center">
                        <!-- Vision Title - centered on mobile -->
                        <div class="text-white mb-6">
                            <h4
                                class="text-white text-lg uppercase tracking-wide font-medium mb-3 relative inline-block">
                                <span class="border-b-2 border-[#CEE377] pb-1">OUR VISION</span>
                            </h4>
                        </div>

                        <!-- Content -->
                        <div class="text-white">
                            <h1 class="text-3xl font-bold leading-tight mb-4">
                                Rebuilding Lives, <span class="text-[#CEE377] italic">Transforming</span> Communities
                            </h1>
                            <p class="text-base leading-relaxed">
                                We aim to rebuild lives and create hope for
                                individuals and communities through skills acquisition, rehabilitation, healthcare
                                services,
                                and community infrastructure.
                                We empower people to transform their lives and build self-sustaining futures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation tabs -->
            <div class="absolute bottom-0 w-full bg-emerald-700 py-4">
                <div class="container mx-auto px-4">
                    <div class="flex justify-center flex-wrap gap-8 md:gap-12">
                        <NuxtLink to="/mission"
                            class="text-white font-semibold text-sm tracking-wider hover:text-[#CEE377] transition-colors">
                            OUR MISSION
                        </NuxtLink>
                        <NuxtLink to="/values"
                            class="text-white font-semibold text-sm tracking-wider hover:text-[#CEE377] transition-colors">
                            OUR VALUES
                        </NuxtLink>
                        <NuxtLink to="/impact"
                            class="text-white font-semibold text-sm tracking-wider hover:text-[#CEE377] transition-colors">
                            OUR IMPACT
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Focus areas section can be added below the hero -->
    </div>
    <section id="mission" class="relative py-16 md:py-24 overflow-hidden">
        <!-- Background map (semi-transparent) -->
        <div class="absolute inset-0 z-0 opacity-10 flex justify-end -mr-120">
            <img src="~/assets/img/map2.jpg" alt="Nigeria Map" class="w-full h-full object-cover" />
        </div>
        <div class="container mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                <!-- Mission text content -->
                <div class="order-2 md:order-1">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-700">
                        our <span class="font-cursive italic">mission</span>
                    </h2>

                    <p class="text-gray-700 text-base mb-6 leading-relaxed">
                        We empower individuals and communities across Nigeria to overcome challenges and build
                        sustainable futures.
                        Working together with local partners like the Nigeria Correction Service and other agencies,
                        ministries and NGOs, we invest in skills development for individuals seeking rehabilitation and
                        upskilling opportunities for those in the informal sector.
                        We also help communities build resilience by providing access to essential healthcare, develop
                        sustainable water sources, and build vital
                        community infrastructure.
                    </p>

                    <p class="text-gray-700 text-base mb-8 leading-relaxed">
                        Your support is what makes all this possible.
                        <NuxtLink to="/programs" class="text-[#116530] hover:underline font-medium">
                            Learn more about how our programs are helping
                        </NuxtLink>
                        more than 15,000 individuals and their communities break free from cycles of poverty and build
                        paths to self-sufficiency.
                    </p>

                    <!-- Impact markers (simplified) -->
                    <div class="flex flex-wrap gap-4 mt-8">
                        <div class="bg-[#116530] text-white rounded-full px-4 py-1 text-sm font-medium">Lagos</div>
                        <div class="bg-[#116530] text-white rounded-full px-4 py-1 text-sm font-medium">Abuja</div>
                        <div class="bg-[#116530] text-white rounded-full px-4 py-1 text-sm font-medium">Port Harcourt
                        </div>
                        <div class="bg-[#116530] text-white rounded-full px-4 py-1 text-sm font-medium">Enugu</div>
                        <div class="bg-[#116530] text-white rounded-full px-4 py-1 text-sm font-medium">Kaduna</div>
                    </div>
                </div>

                <!-- Mission image -->
                <div class="order-1 md:order-2 flex justify-center">
                    <div class="relative w-full max-w-md">
                        <img src="~/assets/img/toei-mission.png" alt="Oaktree Empowerment Initiative Mission"
                            class="w-full h-auto rounded-lg shadow-xl" />
                        <!-- Optional decorative element -->
                        <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-[#CEE377] rounded-lg -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Quote Section -->
    <section class="relative overflow-hidden">
        <!-- Background image with adjusted gradient overlay - full width, panoramic -->
        <div class="absolute inset-0 z-0 w-full h-[85vh]">
            <img src="~/assets/img/toei_mentor.jpg" alt="Mentorship Program"
                class="w-full h-full object-cover object-top" />
            <!-- Gradient overlay - lighter on left, darker on right -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/30 to-black/80"></div>
        </div>

        <!-- Quote content - moved to right side -->
        <div class="container mx-auto px-4 md:px-8">
            <div class="relative z-10 py-20 md:py-28 h-[85vh] flex items-center justify-end">
                <div class="max-w-xl text-right pr-0 md:pr-8">
                    <!-- Quote marks -->
                    <span class="text-white text-9xl font-serif leading-none block mb-6 opacity-70 ml-auto">"</span>

                    <!-- Quote text with increased line spacing -->
                    <p class="text-white text-2xl md:text-4xl font-medium leading-loose mb-8">
                        True progress is measured not by how far we've come, but by how many we've brought along with
                        us.
                    </p>

                    <!-- Attribution with increased spacing -->
                    <div class="mt-10">
                        <span class="block text-white text-lg md:text-xl font-bold mb-2">
                            – The Oaktree Empowerment Initiative
                        </span>
                        <span class="block text-[#CEE377] text-sm md:text-base">
                            REBUILDING LIVES, TRANSFORMING COMMUNITIES
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-cursive {
    font-family: 'Caveat', cursive, sans-serif;
}
</style>

<script setup>
definePageMeta({
    layout: "landing",
});
</script>