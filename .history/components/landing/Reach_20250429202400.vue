<template>
    <section class="ppil-advantage py-16 md:py-24">
        <div class="container mx-auto px-4">
            <!-- Logo and Heading Section -->
            <div class="text-center mb-12">
                <div class="flex justify-center mb-6">
                    <img src="~/assets/img/PPIL Logo.svg" alt="PPIL Logo" class="h-24 md:h-28" />
                </div>
                <h2 class="text-4xl md:text-5xl mb-6 text-gray-800">The PPIL Advantage</h2>
                <p class="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
                    <strong>Built for impact. Proven by results.</strong>
                </p>
            </div>

            <!-- Two-column Content Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                <!-- Left Column: Core Value Proposition -->
                <div class="border-r-0 md:border-r border-gray-200 md:pr-8 flex flex-col justify-center">
                    <p class="text-base md:text-lg text-gray-600 leading-relaxed">
                        At PPIL, we don't just build projects — we engineer trust, performance, and long-term value.
                        With a hybrid model that blends smart project execution, technical depth, and a responsive team
                        culture,
                        the PPIL advantage lies in how we think, plan, and deliver — every time.
                    </p>
                </div>

                <!-- Right Column: Client Testimonials -->
                <div class="md:pl-8 flex flex-col justify-center">
                    <div class="relative">
                        <div class="absolute -left-4 top-0 h-full w-1 bg-blue-500 hidden md:block"></div>
                        <p class="text-base md:text-lg text-gray-600 leading-relaxed">
                            Clients like the Nigerian College of Aviation Technology (NCAT), the International Centre
                            for AIDS Treatment Programs (ICAP),
                            and JM & AS Enterprises Limited have trusted PPIL to deliver mission-focused infrastructure
                            — from borehole systems and
                            hospital repairs to hangar maintenance and structural supplies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No additional script logic needed for this component
</script>

<style scoped>
.ppil-advantage {
    background-color: #f8f9fa;
}

@media (max-width: 768px) {
    .grid-cols-1>div:first-child {
        padding-bottom: 2rem;
        border-bottom: 1px solid #e2e8f0;
        margin-bottom: 2rem;
    }
}
</style>