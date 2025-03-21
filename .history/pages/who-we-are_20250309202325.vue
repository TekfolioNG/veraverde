<template>
    <div>
        <!-- Existing Hero Section -->
        <div class="w-full h-48 md:h-64 lg:h-96 relative">
            <img src="~/assets/img/toei-about-us.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div class="text-white text-center p-4 md:p-8">
                    <h1 class="text-[#CEE377] text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Make a Difference
                    </h1>
                    <p class="text-base md:text-xl">Your support transforms lives</p>
                </div>
            </div>
        </div>

        <!-- New Hero Section -->
        <section class="hero-section bg-[#F5F5F5] py-12 md:py-20">
            <div class="container mx-auto px-4">
                <div class="hero-content text-center mb-12">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
                        Empowering Lives, Building Futures
                    </h2>
                    <p class="text-lg md:text-xl text-[#555] max-w-2xl mx-auto">
                        At The Oaktree Empowerment Initiative, we believe in creating opportunities for individuals and
                        communities to thrive. Through skills empowerment, community wellness, and sustainable
                        development, we’re breaking barriers and building a brighter future for all.
                    </p>
                </div>
                <div class="hero-focus-areas grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="focus-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold text-[#2C3E50] mb-4">Skills Empowerment</h3>
                        <p class="text-[#555] mb-6">
                            We provide practical training in carpentry, tailoring, technology, and other
                            self-sustainable skills to help individuals rebuild their lives after incarceration.
                        </p>
                        <a href="/programs" class="text-[#CEE377] font-bold hover:text-[#A8C45A] transition-colors">
                            EXPLORE OUR PROGRAMS ›
                        </a>
                    </div>
                    <div class="focus-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold text-[#2C3E50] mb-4">Community Wellness</h3>
                        <p class="text-[#555] mb-6">
                            Our medical and water projects address immediate needs while building sustainable health
                            infrastructure, helping communities thrive.
                        </p>
                        <a href="/initiatives" class="text-[#CEE377] font-bold hover:text-[#A8C45A] transition-colors">
                            VIEW OUR INITIATIVES ›
                        </a>
                    </div>
                    <div class="focus-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold text-[#2C3E50] mb-4">Sustainable Development</h3>
                        <p class="text-[#555] mb-6">
                            We support communities in building lasting infrastructure, creating jobs, and improving
                            education access to achieve self-sufficiency.
                        </p>
                        <a href="/approach" class="text-[#CEE377] font-bold hover:text-[#A8C45A] transition-colors">
                            READ OUR APPROACH ›
                        </a>
                    </div>
                </div>
            </div>
        </section>
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