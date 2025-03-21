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
            <div class="absolute bottom-0 w-full bg-[#116530]/90 py-4">
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
</template>

<script setup>
definePageMeta({
    layout: "landing",
});
</script>