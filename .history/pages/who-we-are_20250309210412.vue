<template>
    <div>
        <!-- Enhanced hero section -->
        <section class="w-full h-[85vh] relative">
            <img src="~/assets/img/toei-about-us.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div class="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    <!-- Vision Title -->
                    <div class="text-white text-right max-w-md">
                        <h4 class="text-white text-lg md:text-xl uppercase tracking-wide font-medium mb-3">OUR VISION
                        </h4>
                    </div>

                    <!-- Content -->
                    <div class="text-white max-w-2xl">
                        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Rebuilding Lives, <span class="text-[#CEE377] italic">Transforming</span> Communities
                        </h1>
                        <p class="text-base md:text-lg leading-relaxed mb-8">
                            Across Nigeria, individuals and communities face significant challenges that limit their
                            potential.
                            At The Oaktree Empowerment Initiative, we focus on rebuilding lives and creating hope for
                            those in desperate need.
                            Through skills acquisition, rehabilitation, healthcare services, sustainable water sources,
                            and community infrastructure,
                            we empower people to transform their lives and build self-sustaining futures.
                        </p>
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

<style scoped>
/* Add any custom styles here if needed */
</style>