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
                                class="text-white text-xl uppercase tracking-wide font-medium mb-3 border-l-4 border-[#E6A619] pl-4">
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
                                <span class="border-b-2 border-[#E6A619] pb-1">About PPIL</span>
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


    <!-- Section 1: Image on right -->
    <!-- Section 1: Image on right -->
    <section class="py-12 md:py-20 bg-gray-150">
        <div class="container mx-auto px-6 md:px-10">
            <div class="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
                <!-- Text Content -->
                <div class="w-full md:w-2/5 mb-6 md:mb-0 flex flex-col justify-center">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3"
                        style="font-family: 'Barlow Condensed', sans-serif;">We are PURPOSEFUL</h2>
                    <div class="w-full h-0.5 bg-[#E6A619] mb-6"></div>
                    <div class="space-y-3 text-gray-900">
                        <p class="text-base md:text-lg">
                            Mission-focused and impact-driven, we approach each project with a clear commitment to
                            deliver
                            value that outlasts the work itself.
                        </p>
                        <p class="text-base md:text-lg">
                            At PPIL, we believe infrastructure is more than concrete and steel—it's about creating
                            access,
                            enabling growth, and improving lives.
                        </p>
                        <p class="text-base md:text-lg">
                            Our hybrid approach brings speed, precision, and insight to the table, enabling us to meet
                            needs
                            today while preparing for tomorrow.
                        </p>
                    </div>
                </div>

                <!-- Image -->
                <div class="w-full md:w-3/5">
                    <img src="~/assets/img/about-us-ppil.jpg" alt="PPIL Purposeful"
                        class="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <!-- Section 2: Image on left -->
    <section class="py-12 md:py-20 bg-gray-150">
        <div class="container mx-auto px-6 md:px-10">
            <div class="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-10">
                <!-- Text Content -->
                <div class="w-full md:w-2/5 mb-6 md:mb-0 flex flex-col justify-center">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3"
                        style="font-family: 'Barlow Condensed', sans-serif;">We are PRINCIPLED</h2>
                    <div class="w-full h-0.5 bg-[#E6A619] mb-6"></div>
                    <div class="space-y-3 text-gray-900">
                        <p class="text-base md:text-lg">
                            Integrity guides our process—from how we bid and build, to how we engage our clients and
                            communities.
                        </p>
                        <p class="text-base md:text-lg">
                            We deliver what we promise and hold ourselves to high standards in every engagement.
                        </p>
                        <p class="text-base md:text-lg">
                            For us, success is measured not just in milestones, but in the relationships we build and
                            the trust
                            we earn through consistent performance.
                        </p>
                    </div>
                </div>

                <!-- Image -->
                <div class="w-full md:w-3/5">
                    <img src="~/assets/img/about-us-ppil2.jpg" alt="PPIL Principled"
                        class="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <!-- Section 3: Image on right -->
    <section class="py-12 md:py-20 bg-gray-150">
        <div class="container mx-auto px-6 md:px-10">
            <div class="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
                <!-- Text Content -->
                <div class="w-full md:w-2/5 mb-6 md:mb-0 flex flex-col justify-center">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3"
                        style="font-family: 'Barlow Condensed', sans-serif;">We are PRACTICAL INNOVATORS</h2>
                    <div class="w-full h-0.5 bg-[#E6A619] mb-6"></div>
                    <div class="space-y-3 text-gray-900">
                        <p class="text-base md:text-lg">
                            While rooted in solid engineering, we remain flexible and forward-thinking.
                        </p>
                        <p class="text-base md:text-lg">
                            Our teams are constantly refining methods, embracing smarter tools, and adapting solutions
                            to fit
                            diverse environments.
                        </p>
                        <p class="text-base md:text-lg">
                            Whether it's a community borehole or an aviation facility, we bring the same dedication to
                            excellence,
                            efficiency, and continuous improvement.
                        </p>
                    </div>
                </div>

                <!-- Image -->
                <div class="w-full md:w-3/5">
                    <img src="~/assets/img/about-us-ppil5.jpg" alt="PPIL Practical Innovators"
                        class="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <!-- Section 4: Image on left -->
    <section class="py-12 md:py-20 bg-gray-150">
        <div class="container mx-auto px-6 md:px-10">
            <div class="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-10">
                <!-- Text Content -->
                <div class="w-full md:w-2/5 mb-6 md:mb-0 flex flex-col justify-center">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3"
                        style="font-family: 'Barlow Condensed', sans-serif;">We are PEOPLE-FIRST</h2>
                    <div class="w-full h-0.5 bg-[#E6A619] mb-6"></div>
                    <div class="space-y-3 text-gray-900">
                        <p class="text-base md:text-lg">
                            Culture is our backbone. PPIL thrives because of the people behind it—resilient
                            professionals
                            who bring purpose, skill, and heart to their work.
                        </p>
                        <p class="text-base md:text-lg">
                            We foster an environment where collaboration, respect, and ownership drive performance.
                        </p>
                        <p class="text-base md:text-lg">
                            Every member of our team is empowered to lead, learn, and contribute meaningfully to our
                            mission.
                        </p>
                    </div>
                </div>

                <!-- Image -->
                <div class="w-full md:w-3/5">
                    <img src="~/assets/img/about-us-ppil4.jpg" alt="PPIL People-First"
                        class="w-full h-auto max-h-70 object-cover rounded-lg shadow-lg" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <!-- Section 5: Image on right -->
    <section class="py-12 md:py-20 bg-gray-150">
        <div class="container mx-auto px-6 md:px-10">
            <div class="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
                <!-- Text Content -->
                <div class="w-full md:w-2/5 mb-6 md:mb-0 flex flex-col justify-center">
                    <h2 class="text-3xl font-bold text-gray-900 mb-3"
                        style="font-family: 'Barlow Condensed', sans-serif;">We are PROVEN</h2>
                    <div class="w-full h-0.5 bg-[#E6A619] mb-6"></div>
                    <div class="space-y-3 text-gray-900">
                        <p class="text-base md:text-lg">
                            Our portfolio speaks volumes. From critical health facility upgrades to large-scale water
                            access
                            projects, our record is backed by results.
                        </p>
                        <p class="text-base md:text-lg">
                            Clients like the Nigerian College of Aviation Technology (NCAT), ICAP, and local agencies
                            across
                            Nigeria trust us because we deliver—on time, on budget, and beyond expectations.
                        </p>
                    </div>
                </div>

                <!-- Image -->
                <div class="w-full md:w-3/5">
                    <img src="~/assets/img/about-us-ppil3.jpg" alt="PPIL Proven"
                        class="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg" loading="lazy" />
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
     section .container {
         padding-left: 1.5rem;
         padding-right: 1.5rem;
     }

     section img {
         border-radius: 0.5rem;
     }
 }
 .bg-gray-150 {
     background-color: #f0f2f5;
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