<template>
    <div>
        <!-- Enhanced hero section -->
        <section class="w-full h-[85vh] relative">
            <img src="~/assets/img/toei-about-us.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div class="container mx-auto px-4 md:px-8">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                        <!-- Main content area -->
                        <div class="text-white max-w-xl">
                            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                Rebuilding Lives,
                                <span class="text-[#CEE377] italic">Renewing</span>
                                Communities
                            </h1>
                            <p class="text-base md:text-lg leading-relaxed mb-8">
                                Across Nigeria, individuals and communities face significant challenges that limit their
                                potential.
                                We provide pathways for those seeking fresh starts after incarceration, deliver
                                essential healthcare,
                                develop sustainable water sources, and build vital infrastructure—transforming lives and
                                creating
                                self-sustaining communities where hope and opportunity can flourish.
                            </p>
                        </div>

                        <!-- Vision statement with design element -->
                        <div class="mt-8 md:mt-0 md:ml-8">
                            <div class="relative">
                                <div class="hidden md:block absolute -left-6 top-0 w-1 h-full bg-[#CEE377]"></div>
                                <h4
                                    class="text-[#CEE377] text-xl md:text-2xl uppercase tracking-wider font-medium mb-3 pl-4">
                                    our vision</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation tabs -->
            <div class="absolute bottom-0 w-full bg-[#116530]/90 py-4">
                <div class="container mx-auto px-4">
                    <div class="flex justify-center flex-wrap gap-8 md:gap-12">
                        <a href="#mission"
                            class="text-white font-semibold text-sm tracking-wider hover:text-[#CEE377] transition-colors">
                            OUR MISSION
                        </a>
                        <a href="#values"
                            class="text-white font-semibold text-sm tracking-wider hover:text-[#CEE377] transition-colors">
                            OUR VALUES
                        </a>
                        <a href="#impact"
                            class="text-white font-semibold text-sm tracking-wider hover:text-[#CEE377] transition-colors">
                            OUR IMPACT
                        </a>
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