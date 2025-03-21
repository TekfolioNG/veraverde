<template>
    <div>
        <!-- Enhanced hero section -->
        <section class="w-full h-[85vh] relative">
            <img src="~/assets/img/toei-about-us.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div class="container mx-auto px-4 md:px-8">
                    <div class="text-white max-w-2xl">
                        <h4 class="text-white text-lg md:text-xl uppercase tracking-wide font-medium mb-3">our vision
                        </h4>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Empowering people to
                            <span class="text-[#CEE377] italic">transform</span>
                            their communities.
                        </h1>
                        <p class="text-lg md:text-xl leading-relaxed mb-8">
                            We create pathways to self-sufficiency where every individual,
                            family, and community can heal, develop skills, and build
                            sustainable futures together.
                        </p>
                        <div class="flex flex-wrap gap-4 mt-4">
                            <NuxtLink to="/programs"
                                class="bg-[#116530] hover:bg-[#0D4D26] text-white py-3 px-6 rounded-md font-semibold transition-colors">
                                Our Programs
                            </NuxtLink>
                            <NuxtLink to="/get-involved"
                                class="border-2 border-white text-white py-3 px-6 rounded-md font-semibold hover:bg-white/10 transition-colors">
                                Get Involved
                            </NuxtLink>
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