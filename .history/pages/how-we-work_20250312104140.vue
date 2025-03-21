<template>
    <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 md:px-8">
            <!-- Grid layout: 2 columns -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <!-- Left column: Content (3/5th width) -->
                <div class="md:col-span-3">
                    <!-- Section header -->
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
                        Our <span class="text-emerald-700 italic">Impact</span>
                    </h2>

                    <!-- Description -->
                    <p class="text-gray-700 text-lg leading-relaxed mb-8">
                        We aim to rebuild lives and create hope for individuals and communities through skills
                        acquisition, rehabilitation, healthcare services, and community infrastructure. We empower
                        people to transform their lives and build self-sustaining futures.
                    </p>

                    <!-- Key impact areas -->
                    <div class="space-y-6">
                        <!-- Impact 1 -->
                        <div class="flex items-start">
                            <div class="w-12 h-12 flex items-center justify-center bg-emerald-700 rounded-full mr-4">
                                <span class="text-white text-2xl font-bold">1</span>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-[#901F61] mb-2">Skills Development</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    We provide vocational training and upskilling opportunities to individuals, enabling
                                    them to secure sustainable livelihoods and break free from poverty.
                                </p>
                            </div>
                        </div>

                        <!-- Impact 2 -->
                        <div class="flex items-start">
                            <div class="w-12 h-12 flex items-center justify-center bg-emerald-700 rounded-full mr-4">
                                <span class="text-white text-2xl font-bold">2</span>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-[#901F61] mb-2">Healthcare Access</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    We ensure communities have access to essential healthcare services, improving
                                    overall well-being and reducing preventable diseases.
                                </p>
                            </div>
                        </div>

                        <!-- Impact 3 -->
                        <div class="flex items-start">
                            <div class="w-12 h-12 flex items-center justify-center bg-emerald-700 rounded-full mr-4">
                                <span class="text-white text-2xl font-bold">3</span>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-[#901F61] mb-2">Community Infrastructure</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    We build and rehabilitate vital community infrastructure, such as water sources and
                                    schools, to create environments where people can thrive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right column: Image (2/5th width) -->
                <div class="md:col-span-2">
                    <img src="~/assets/img/toei-our-impact.png" alt="Our Impact"
                        class="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Custom styles if needed */
</style>

<script setup>
definePageMeta({
    layout: "landing",
});
</script>