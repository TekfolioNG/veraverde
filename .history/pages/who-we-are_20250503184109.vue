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
    <!-- Quote Section -->
    <section class="py-12 md:py-24 bg-white">
        <div class="container mx-auto px-6 md:px-8">
            <div class="flex flex-col md:flex-row items-center">
                <!-- Text Content -->
                <div class="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3">Our Mission</h2>
                    <div class="w-20 h-1 bg-[#E6A619] mb-6"></div>
                    <p class="text-base md:text-lg text-gray-700 mb-4">
                        People-centric and forward-focused, we go beyond the expected to deliver added value for our
                        customers.
                        Across Nigeria, we share our new vision of what infrastructure means today and for the future
                        and are
                        fully committed to meet the challenge of change.
                    </p>
                    <p class="text-base md:text-lg text-gray-700">
                        We may have gotten our start by building roads, but tomorrow promises innovations in
                        construction
                        solutions and with our diversified services propelling us to the forefront of this exciting new
                        horizon, we're ready to pave the way.
                    </p>
                </div>

                <!-- Image -->
                <div class="w-full md:w-1/2">
                    <img src="~/assets/img/about-us-ppil.jpg" alt="PPIL Mission"
                        class="w-full h-auto rounded-lg shadow-lg object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <!-- Section 2: Image on left -->
    <section class="py-12 md:py-24 bg-gray-50">
        <div class="container mx-auto px-6 md:px-8">
            <div class="flex flex-col md:flex-row-reverse items-center">
                <!-- Text Content -->
                <div class="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3">Our Vision</h2>
                    <div class="w-20 h-1 bg-[#E6A619] mb-6"></div>
                    <p class="text-base md:text-lg text-gray-700 mb-4">
                        To be the leading infrastructure solutions provider in Nigeria, recognized for excellence,
                        innovation, and integrity in every project we undertake. We envision a future where our work
                        directly contributes to the development of communities and the enhancement of lives.
                    </p>
                    <p class="text-base md:text-lg text-gray-700">
                        By combining technical expertise with deep local knowledge, we aim to set new standards in
                        the construction industry while remaining true to our Nigerian roots and commitment to
                        sustainable development.
                    </p>
                </div>

                <!-- Image -->
                <div class="w-full md:w-1/2">
                    <img src="~/assets/img/about-us-ppil2.jpg" alt="PPIL Vision"
                        class="w-full h-auto rounded-lg shadow-lg object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <!-- Section 3: Image on right -->
    <section class="py-12 md:py-24 bg-white">
        <div class="container mx-auto px-6 md:px-8">
            <div class="flex flex-col md:flex-row items-center">
                <!-- Text Content -->
                <div class="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3">Our Approach</h2>
                    <div class="w-20 h-1 bg-[#E6A619] mb-6"></div>
                    <p class="text-base md:text-lg text-gray-700 mb-4">
                        At PPIL, our approach is defined by precision, adaptability, and collaboration. We believe that
                        successful infrastructure projects require not just technical excellence, but also a deep
                        understanding of client needs and community contexts.
                    </p>
                    <p class="text-base md:text-lg text-gray-700">
                        From initial planning through to completion, we maintain rigorous quality standards while
                        remaining flexible enough to navigate the unique challenges of each project. This balanced
                        approach ensures we deliver results that exceed expectations and stand the test of time.
                    </p>
                </div>

                <!-- Image -->
                <div class="w-full md:w-1/2">
                    <img src="~/assets/img/about-us-ppil5.jpg" alt="PPIL Approach"
                        class="w-full h-auto rounded-lg shadow-lg object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <!-- Section 4: Image on left -->
    <section class="py-12 md:py-24 bg-gray-50">
        <div class="container mx-auto px-6 md:px-8">
            <div class="flex flex-col md:flex-row-reverse items-center">
                <!-- Text Content -->
                <div class="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3">Our Team</h2>
                    <div class="w-20 h-1 bg-[#E6A619] mb-6"></div>
                    <p class="text-base md:text-lg text-gray-700 mb-4">
                        Behind every PPIL project stands a team of dedicated professionals with diverse skills and
                        shared
                        values. From seasoned engineers and project managers to skilled technicians and support staff,
                        our people form the backbone of our success.
                    </p>
                    <p class="text-base md:text-lg text-gray-700">
                        We invest in continuous professional development and foster a culture of collaboration, safety,
                        and excellence. By empowering our team members to innovate and excel, we ensure that PPIL
                        remains
                        at the cutting edge of infrastructure solutions in Nigeria.
                    </p>
                </div>

                <!-- Image -->
                <div class="w-full md:w-1/2">
                    <img src="~/assets/img/about-us-ppil4.jpg" alt="PPIL Team"
                        class="w-full h-auto rounded-lg shadow-lg object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <!-- Section 5: Image on right -->
    <section class="py-12 md:py-24 bg-white">
        <div class="container mx-auto px-6 md:px-8">
            <div class="flex flex-col md:flex-row items-center">
                <!-- Text Content -->
                <div class="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3">Our Impact</h2>
                    <div class="w-20 h-1 bg-[#E6A619] mb-6"></div>
                    <p class="text-base md:text-lg text-gray-700 mb-4">
                        Beyond building physical structures, PPIL is committed to creating lasting positive impact in
                        communities across Nigeria. We measure our success not just by projects completed, but by the
                        improved quality of life they enable.
                    </p>
                    <p class="text-base md:text-lg text-gray-700">
                        From job creation and skills transfer to enhanced connectivity and access to essential services,
                        our work contributes to sustainable development goals while strengthening local economies. We
                        take
                        pride in building infrastructure that serves as a foundation for Nigeria's continued growth and
                        prosperity.
                    </p>
                </div>

                <!-- Image -->
                <div class="w-full md:w-1/2">
                    <img src="~/assets/img/about-us-ppil3.jpg" alt="PPIL Impact"
                        class="w-full h-auto rounded-lg shadow-lg object-cover" loading="lazy" />
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
 @media (max-width: 640px) {
     section img {
         border-radius: 0.5rem;
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