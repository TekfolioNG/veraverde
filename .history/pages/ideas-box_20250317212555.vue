<template>
    <div>
        <!-- Hero Section -->
        <div class="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] relative overflow-hidden">
            <!-- Background Image -->
            <img src="~/assets/img/toei-idea-box.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover object-center" />

            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>

            <!-- Content -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white px-4 md:px-8 max-w-4xl mx-auto">
                    <!-- Main Heading -->
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span class="text-[#CEE377]">Rebuilding Lives,</span> Transforming Communities
                    </h1>

                    <!-- Subheading -->
                    <p class="text-lg md:text-xl lg:text-2xl font-medium mb-8">
                        Together, we empower individuals and communities to overcome challenges and build sustainable
                        futures.
                    </p>

                    <!-- Call-to-Action Button -->
                    <NuxtLink to="/get-involved"
                        class="inline-block bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-emerald-800 transition-all duration-300">
                        Join Our Mission
                    </NuxtLink>
                </div>
            </div>

            <!-- Scrolling Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div class="animate-bounce w-6 h-6 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Keep the existing content below -->
        <LandingIdeasBox />
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing",
});
</script>

<style scoped>
/* Custom styles for the hero section */
.animate-bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}
</style>