<template>
    <div>
        <!-- Enhanced hero section -->
        <section class="w-full h-[50vh] relative">
            <img src="~/assets/img/PPIL-inside-cover.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div class="container mx-auto px-4 md:px-8">
                    <!-- Desktop layout -->
                    <div class="hidden md:flex justify-between items-center">
                        <!-- Vision Title (moved to left) -->
                        <div class="text-white max-w-md">
                            <h4
                                class="text-white text-xl uppercase tracking-wide font-medium mb-3 border-l-4 border-[#CEE377] pl-4">
                                ABOUT PPIL
                            </h4>
                        </div>

                        <!-- Content (shifted slightly lower) -->
                        <div class="text-white max-w-2xl mt-16">
                            <h1 class="text-5xl lg:text-6xl font-bold leading-relaxed mb-6"
                                style="font-family: 'Barlow Condensed', sans-serif;">
                                Innovation in Infrastructure
                            </h1>

                        </div>
                    </div>

                    <!-- Mobile layout (stacked) -->
                    <div class="md:hidden flex flex-col items-center text-center">
                        <!-- Vision Title - centered on mobile -->
                        <div class="text-white mb-6">
                            <h4
                                class="text-white text-lg uppercase tracking-wide font-medium mb-3 relative inline-block">
                                <span class="border-b-2 border-[#CEE377] pb-1">About PPIL</span>
                            </h4>
                        </div>

                        <!-- Content -->
                        <div class="text-white">
                            <h1 class="text-3xl font-bold leading-tight mb-4"
                                style="font-family: 'Barlow Condensed', sans-serif;">
                                Innovation in Infrastructure
                            </h1>

                        </div>
                    </div>
                </div>
            </div>

        </section>

        <!-- Focus areas section can be added below the hero -->
    </div>
    <section class="relative py-20 md:py-28 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <!-- Image Column -->
                <div class="lg:w-1/2">
                    <img src="~/assets/img/construction-ppil.jpg" alt="PPIL Construction Team"
                        class="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                </div>

                <!-- Text Column -->
                <div class="lg:w-1/2">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        We build with intention. We engineer progress.
                    </h2>

                    <p class="text-lg text-gray-600 mb-6">
                        We bring ideas to life with precision, purpose, and pride. PPIL is shaping the future of
                        infrastructure through smart project delivery, skilled people, and a culture that puts mission
                        at the center of everything.
                    </p>

                    <p class="text-lg text-gray-600 mb-8">
                        As a proudly Nigerian company, our journey has been defined by a commitment to solving real
                        infrastructure challenges with practical, long-lasting solutions. What began as a focused
                        construction outfit has evolved into a premium service provider working across engineering,
                        facility upgrades, infrastructure rehabilitation, and supply chain support.
                    </p>

                    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#002244] mb-8">
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">
                            We've earned trust by being:
                        </h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <span class="text-[#FFB81C] mr-2">•</span>
                                <span>Dependable, flexible, and deliberate about results</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-[#FFB81C] mr-2">•</span>
                                <span>Focused on what matters most</span>
                            </li>
                        </ul>
                    </div>

                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-[#002244] text-white rounded-full p-2 mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Driving bottom-line results</h3>
                                <p class="text-gray-600">Through efficient, well-managed delivery</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-[#002244] text-white rounded-full p-2 mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Reducing risk</h3>
                                <p class="text-gray-600">By deploying experienced teams with strong technical oversight
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-[#002244] text-white rounded-full p-2 mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Expanding our portfolio</h3>
                                <p class="text-gray-600">With value-based services in high-need sectors</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-[#002244] text-white rounded-full p-2 mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Maintaining our culture</h3>
                                <p class="text-gray-600">Built on accountability, speed, and continuous learning</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-[#002244] text-white rounded-full p-2 mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Collaborating</h3>
                                <p class="text-gray-600">With public and private clients to deliver measurable impact
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-16 bg-[#FFB81C]/10 p-8 rounded-lg border border-[#FFB81C]/20">
                <p class="text-lg text-gray-700">
                    Today, PPIL stands at the intersection of quality infrastructure and strategic execution—trusted by
                    clients like the Nigerian College of Aviation Technology (NCAT), the International Centre for AIDS
                    Treatment Programs (ICAP), and several community-led organizations across Nigeria. Our work is not
                    just about what we build, but how we build—with people, for progress, and with pride.
                </p>
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
                    <p class="text-white text-2xl md:text-4xl font-medium leading-relaxed mb-8">
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
    <!-- Values Section -->
    <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4 md:px-8">
            <!-- Section header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-700 inline-block relative">
                    our <span class="font-cursive italic">values</span>
                </h2>
            </div>

            <!-- Values grid - 3 columns on desktop, 1 on mobile -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Value card 1 -->
                <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl">
                    <h3 class="text-xl font-bold text-[#a01a58] mb-4">We live the passion</h3>
                    <p class="text-gray-700 leading-relaxed">
                        We are a passionate team with a shared purpose. We listen, build trust, and find meaning in our
                        work together.
                    </p>
                </div>

                <!-- Value card 2 -->
                <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl">
                    <h3 class="text-xl font-bold text-[#a01a58] mb-4">We see talents in everyone</h3>
                    <p class="text-gray-700 leading-relaxed">
                        We believe every person has unique strengths and talents waiting to be discovered and maximized.
                    </p>
                </div>

                <!-- Value card 3 -->
                <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl">
                    <h3 class="text-xl font-bold text-[#a01a58] mb-4">We believe in teamwork</h3>
                    <p class="text-gray-700 leading-relaxed">
                        At OEI, relationships matter. Collaboration, communication, and teamwork help us achieve more
                        together than we ever could alone.
                    </p>
                </div>

                <!-- Value card 4 -->
                <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl">
                    <h3 class="text-xl font-bold text-[#a01a58] mb-4">We're always learning</h3>
                    <p class="text-gray-700 leading-relaxed">
                        We embrace knowledge, creativity, and new ideas. Data and research guide us as we continuously
                        improve.
                    </p>
                </div>

                <!-- Value card 5 -->
                <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl">
                    <h3 class="text-xl font-bold text-[#a01a58] mb-4">We're focused on impact</h3>
                    <p class="text-gray-700 leading-relaxed">
                        We are dedicated to creating lasting change. With clarity and growth, we ensure our work makes a
                        real difference.
                    </p>
                    <div class="invisible">
                        <!-- This invisible spacer helps maintain consistent height with other cards -->
                        <br>
                    </div>
                </div>

                <!-- Value image -->
                <div class="relative">
                    <img src="~/assets/img/toei-values.png" alt="Our values in action"
                        class="w-full h-full object-cover rounded-lg shadow-md" />
                    <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-[#CEE377] rounded-lg -z-10"></div>
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
    layout: "landing"
});

useSeoMeta({
    title: 'About Us | The OakTree Empowerment Intiative',
    ogTitle: 'About Us | The OakTree Empowerment Intiative',
    titleTemplate: 'About Us | The OakTree Empowerment Intiative',
    description: 'Rebuilding Lives & Communities',
    ogDescription: 'Rebuilding Lives & Communities',

    twitterCard: 'summary_large_image',
    twitterTitle: 'About Us | The OakTree Empowerment Intiative',
    twitterDescription: 'About Us | The OakTree Empowerment Intiative',

    ogImage: {
        url: 'https://oaktreeinitiative.org/toei-empowerment.jpg',
        width: 1200,
        height: 630,
        alt: 'The OakTree Empowerment Intiative - Rebuilding Lives & Communities'
    },
    twitterImage: 'https://oaktreeinitiative.org/toei-empowerment.jpg'
});
</script>