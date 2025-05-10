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
    <section class="py-12 md:py-16 bg-gray-50">
        <div class="container mx-auto px-6 md:px-8 max-w-6xl">
            <!-- Text Block 1 -->
            <div class="mb-8 md:mb-10">
                <p class="text-base md:text-lg text-gray-700 mb-5">
                    We build with intention. We engineer progress. We bring ideas to life with precision, purpose,
                    and pride. PPIL is shaping the future of infrastructure through smart project delivery, skilled
                    people, and a culture that puts mission at the center of everything.
                </p>

                <p class="text-base md:text-lg text-gray-700">
                    As a proudly Nigerian company, our journey has been defined by a commitment to solving real
                    infrastructure challenges with practical, long-lasting solutions. What began as a focused
                    construction outfit has evolved into a premium service provider working across engineering,
                    facility upgrades, infrastructure rehabilitation, and supply chain support.
                </p>
            </div>

            <!-- Full-width Image -->
            <div class="my-10">
                <img src="~/assets/img/construction-ppil.jpg" alt="PPIL Construction Project"
                    class="w-full h-auto rounded-lg shadow-md object-cover" loading="lazy" />
            </div>

            <!-- Text Block 2 -->
            <div class="mb-8">
                <p class="text-base md:text-lg text-gray-700 mb-6">
                    We've earned the trust of local and international partners by being dependable, flexible, and
                    deliberate about results. Each project we take on is a chance to make an impact as we continue
                    to grow by focusing on what matters most:
                </p>

                <ul class="text-base md:text-lg text-dark space-y-3 pl-5 list-disc mb-6">
                    <li class="text-gray-700">
                        Driving bottom-line results through efficient, well-managed delivery
                    </li>
                    <li class="text-gray-700">
                        Reducing risk by deploying experienced teams with strong technical oversight
                    </li>
                    <li class="text-gray-700">
                        Expanding our portfolio with value-based services in high-need sectors
                    </li>
                    <li class="text-gray-700">
                        Maintaining a culture built on accountability, speed, and continuous learning
                    </li>
                    <li class="text-gray-700">
                        Collaborating with public and private clients to deliver measurable impact
                    </li>
                </ul>

                <!-- Closing Text Block (no special background) -->
                <p class="text-base md:text-lg text-gray-700">
                    Today, PPIL stands at the intersection of quality infrastructure and strategic execution—trusted
                    by clients like the Nigerian College of Aviation Technology (NCAT), the International Centre for
                    AIDS Treatment Programs (ICAP), and several community-led organizations across Nigeria. Our work
                    is not just about what we build, but how we build—with people, for progress, and with pride.
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

@media (max-width: 640px) {
    .container {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    img {
        margin-left: -1.5rem;
        margin-right: -1.5rem;
        width: calc(100% + 3rem);
        border-radius: 0;
    }
}

</style>

<script setup>
definePageMeta({
    layout: "landing"
});

useSeoMeta({
    title: 'Share Idea | The OakTree Empowerment Intiative',
    ogTitle: 'Share Idea | The OakTree Empowerment Intiative',
    titleTemplate: 'Share Idea | The OakTree Empowerment Intiative',
    description: 'Rebuilding Lives & Communities',
    ogDescription: 'Rebuilding Lives & Communities',

    twitterCard: 'summary_large_image',
    twitterTitle: 'Share Idea | The OakTree Empowerment Intiative',
    twitterDescription: 'Share Idea | The OakTree Empowerment Intiative',

    ogImage: {
        url: 'https://oaktreeinitiative.org/toei-empowerment.jpg',
        width: 1200,
        height: 630,
        alt: 'The OakTree Empowerment Intiative - Rebuilding Lives & Communities'
    },
    twitterImage: 'https://oaktreeinitiative.org/toei-empowerment.jpg'
});
</script>