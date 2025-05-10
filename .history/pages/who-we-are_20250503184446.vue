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
                <p class="text-base md:text-lg text-gray-900 mb-5">
                    We build with intention. We engineer progress. We bring ideas to life with precision, purpose,
                    and pride. PPIL is shaping the future of infrastructure through smart project delivery, skilled
                    people, and a culture that puts mission at the center of everything.
                </p>

                <p class="text-base md:text-lg text-gray-900">
                    As a <b>proudly Nigerian company</b>, our journey has been defined by a commitment to solving real
                    infrastructure challenges with practical, long-lasting solutions. What began as a focused
                    construction outfit has evolved into a <b>premium service provider working across engineering,
                        facility upgrades,</b> infrastructure rehabilitation, and supply chain support.
                </p>
            </div>

            <!-- Full-width Image -->
            <div class="my-10">
                <img src="~/assets/img/construction-ppil.jpg" alt="PPIL Construction Project"
                    class="w-full h-auto rounded-lg shadow-md object-cover" loading="lazy" />
            </div>

            <!-- Text Block 2 -->
            <div class="mb-8">
                <p class="text-base md:text-lg text-gray-900 mb-6">
                    We've earned the trust of local and international partners by being dependable, flexible, and
                    deliberate about results. Each project we take on is a chance to make an impact as we continue
                    to grow by focusing on what matters most:
                </p>

                <ul class="text-base md:text-lg text-gray-900 space-y-3 pl-5 mb-6 custom-bullets">
                    <li class="text-gray-900">
                        Driving bottom-line results through efficient, well-managed delivery
                    </li>
                    <li class="text-gray-900">
                        Reducing risk by deploying experienced teams with strong technical oversight
                    </li>
                    <li class="text-gray-900">
                        Expanding our portfolio with value-based services in high-need sectors
                    </li>
                    <li class="text-gray-900">
                        Maintaining a culture built on accountability, speed, and continuous learning
                    </li>
                    <li class="text-gray-900">
                        Collaborating with public and private clients to deliver measurable impact
                    </li>
                </ul>


                <!-- Closing Text Block (no special background) -->
                <p class="text-base md:text-lg text-gray-900">
                    Today, PPIL stands at the intersection of <b>quality infrastructure and strategic execution</b>,
                    trusted
                    by clients like the Nigerian College of Aviation Technology (NCAT), the International Centre for
                    AIDS Treatment Programs (ICAP), and several community-led organizations across Nigeria. Our work
                    is not just about what we build, but how we build—with people, for progress, and with pride.
                </p>
            </div>
        </div>
    </section>

    <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4">
            <!-- Main Heading -->
            <div class="text-center mb-16 max-w-3xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    We Are PPIL
                </h2>
                <p class="text-lg md:text-xl text-gray-600">
                    People-centric and forward-focused, we go beyond the expected to deliver added value for our
                    clients.
                    Across PPIL, we share a vision of what infrastructure means today and for the future, fully
                    committed
                    to meeting the challenge of change. We may have gotten our start in construction, but tomorrow
                    promises
                    innovations in infrastructure solutions that will propel us to the forefront of this exciting new
                    horizon.
                </p>
            </div>

            <!-- Subsection 1 -->
            <div class="flex flex-col lg:flex-row items-center gap-12 mb-20">
                <div class="lg:w-1/2">
                    <img src="~/assets/img/about-us-ppil.jpg" alt="PPIL Team"
                        class="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                </div>
                <div class="lg:w-1/2">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Our Heritage
                    </h3>
                    <p class="text-lg text-gray-600 mb-6">
                        Founded in 2014, PPIL began as a specialized construction firm with a mission to rebuild
                        Nigeria's
                        infrastructure. Our early projects focused on road construction and rehabilitation, laying the
                        foundation for our reputation of quality and reliability.
                    </p>
                    <p class="text-lg text-gray-600">
                        Today, we've grown into a comprehensive infrastructure solutions provider while maintaining our
                        commitment to the values that built our reputation: integrity, excellence, and community impact.
                    </p>
                </div>
            </div>

            <!-- Subsection 2 (Reversed) -->
            <div class="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
                <div class="lg:w-1/2">
                    <img src="~/assets/img/about-us-ppil2.jpg" alt="PPIL Project"
                        class="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                </div>
                <div class="lg:w-1/2">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Our Approach
                    </h3>
                    <p class="text-lg text-gray-600 mb-6">
                        We combine technical expertise with deep local knowledge to deliver projects that stand the test
                        of time.
                        Our hybrid model blends international best practices with tailored solutions for Nigeria's
                        unique
                        infrastructure challenges.
                    </p>
                    <p class="text-lg text-gray-600">
                        Every project begins with careful planning and ends with measurable impact - on communities,
                        clients,
                        and the country's development goals.
                    </p>
                </div>
            </div>

            <!-- Subsection 3 -->
            <div class="flex flex-col lg:flex-row items-center gap-12 mb-20">
                <div class="lg:w-1/2">
                    <img src="~/assets/img/about-us-ppil5.jpg" alt="PPIL Engineering"
                        class="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                </div>
                <div class="lg:w-1/2">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Our Capabilities
                    </h3>
                    <p class="text-lg text-gray-600 mb-6">
                        From design to maintenance, PPIL offers end-to-end infrastructure solutions. Our diversified
                        services
                        include civil engineering, facility upgrades, structural rehabilitation, and sustainable
                        construction
                        practices.
                    </p>
                    <p class="text-lg text-gray-600">
                        We continuously invest in new technologies and training to expand our service offerings and
                        deliver
                        innovative solutions to complex challenges.
                    </p>
                </div>
            </div>

            <!-- Subsection 4 (Reversed) -->
            <div class="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
                <div class="lg:w-1/2">
                    <img src="~/assets/img/about-us-ppil4.jpg" alt="PPIL Teamwork"
                        class="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                </div>
                <div class="lg:w-1/2">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Our Culture
                    </h3>
                    <p class="text-lg text-gray-600 mb-6">
                        At PPIL, we believe our people are our greatest asset. We foster a culture of collaboration,
                        continuous learning, and accountability where every team member can thrive and contribute to
                        meaningful projects.
                    </p>
                    <p class="text-lg text-gray-600">
                        Our workplace values diversity, innovation, and safety - creating an environment where
                        excellence
                        becomes the standard, not the exception.
                    </p>
                </div>
            </div>

            <!-- Subsection 5 -->
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="lg:w-1/2">
                    <img src="~/assets/img/about-us-ppil3.jpg" alt="PPIL Future"
                        class="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                </div>
                <div class="lg:w-1/2">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Our Future
                    </h3>
                    <p class="text-lg text-gray-600 mb-6">
                        As Nigeria's infrastructure needs evolve, so does PPIL. We're expanding into smart city
                        solutions,
                        renewable energy projects, and digital infrastructure to meet tomorrow's challenges today.
                    </p>
                    <p class="text-lg text-gray-600">
                        Our vision is to be Nigeria's most trusted infrastructure partner, recognized for transforming
                        communities through engineering excellence and sustainable development.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-cursive {
    font-family: 'Caveat', cursive, sans-serif;
}

.custom-bullets {
    list-style-type: none;
}

.custom-bullets li {
    position: relative;
    padding-left: 1.5rem;
}

.custom-bullets li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    background-color: #E6A619;
    transform: rotate(45deg);
}

@media (max-width: 640px) {
    .container {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }

    img {
        margin-left: -1.25rem;
        margin-right: -1.25rem;
        width: calc(100% + 2.5rem);
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