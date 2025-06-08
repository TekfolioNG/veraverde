<template>
    <div>
        <!-- Hero Banner Section -->
        <section class="w-full h-[50vh] relative">
            <img src="~/assets/img/about-xstrato2.png" alt="PPIL Project Portfolio"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div class="container mx-auto px-4 md:px-8">
                    <!-- Desktop layout -->
                    <div class="hidden md:flex justify-between items-center">
                        <!-- Title (moved to left) -->
                        <div class="text-white max-w-md">
                            <h4
                                class="text-white text-xl uppercase tracking-wide font-medium mb-3 border-l-4 border-[#E6A619] pl-4">
                                XSTRATO MANAGEMENT
                            </h4>
                        </div>

                        <!-- Content (shifted slightly lower) -->
                        <div class="text-white max-w-2xl mt-16">
                            <h1 class="text-5xl lg:text-6xl font-bold leading-relaxed mb-6"
                                style="font-family: 'Barlow Condensed', sans-serif;">
                                Our Team
                            </h1>
                        </div>
                    </div>

                    <!-- Mobile layout (stacked) -->
                    <div class="md:hidden flex flex-col items-center text-center">
                        <!-- Title - centered on mobile -->
                        <div class="text-white mb-6">
                            <h4
                                class="text-white text-lg uppercase tracking-wide font-medium mb-3 relative inline-block">
                                <span class="border-b-2 border-[#E6A619] pb-1">XSTRATO MANAGEMENT</span>
                            </h4>
                        </div>

                        <!-- Content -->
                        <div class="text-white">
                            <h1 class="text-3xl font-bold leading-tight mb-4"
                                style="font-family: 'Barlow Condensed', sans-serif;">
                                Our Team
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Overview Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 md:px-8">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        style="font-family: 'Barlow Condensed', sans-serif;">
                        Professional Excellence
                    </h2>
                    <div class="w-24 h-1 bg-[#E6A619] mx-auto mb-8"></div>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Our multidisciplinary team brings together decades of combined expertise in project management,
                        engineering, architecture, and construction. Each professional is carefully selected for their
                        technical competence, industry experience, and commitment to delivering world-class
                        infrastructure solutions.
                    </p>
                </div>
            </div>
        </section>

        <!-- Team Directory -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 md:px-8">
                <!-- Leadership Team -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            LEADERSHIP TEAM
                        </h3>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Chairman -->
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <div class="p-8">
                                <h4 class="text-xl font-bold text-gray-900 mb-2">Nnamdi Jude Ekechi</h4>
                                <p class="text-[#E6A619] font-semibold mb-4">Chairman</p>
                                <div class="space-y-2">
                                    <p class="text-sm text-gray-600">Strategic leadership and corporate governance
                                        oversight</p>
                                </div>
                            </div>
                        </div>

                        <!-- Managing Director -->
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <div class="p-8">
                                <h4 class="text-xl font-bold text-gray-900 mb-2">Regina Bufa Obi</h4>
                                <p class="text-[#E6A619] font-semibold mb-4">Managing Director (Projects)</p>
                                <div class="space-y-2">
                                    <p class="text-sm text-gray-600"><span class="font-medium">Qualifications:</span>
                                        MBA - Ahmadu Bello University, B.A Psychology, PMP, Member NIM, MCCPPA</p>
                                    <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 3+
                                        Years in Construction & Project Management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Senior Management -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            SENIOR MANAGEMENT
                        </h3>
                    </div>
                    <div class="grid md:grid-cols-3 gap-6">
                        <!-- Senior Business Developer -->
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Abumchi Chinaza</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Senior Business Developer</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600">Strategic business development and client relationship
                                    management</p>
                            </div>
                        </div>

                        <!-- Technical Manager -->
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Adaobi Iguegbe</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Technical Manager</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600">Technical operations oversight and quality assurance
                                </p>
                            </div>
                        </div>

                        <!-- Head Human Resource Manager -->
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Lucy Kamalu</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Head Human Resource Manager</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600">Human resources management and organizational
                                    development</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Key Projects Section (for Managing Director) -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            KEY PROJECTS PORTFOLIO
                        </h3>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                        <h4 class="text-lg font-bold text-gray-900 mb-4">Notable Project Achievements</h4>
                        <div class="grid md:grid-cols-3 gap-4">
                            <div class="text-sm text-gray-600">
                                <span class="font-medium text-gray-800">•</span> World Bank Health System Development
                                Project
                            </div>
                            <div class="text-sm text-gray-600">
                                <span class="font-medium text-gray-800">•</span> Solar Borehole & Water Treatment Plant
                            </div>
                            <div class="text-sm text-gray-600">
                                <span class="font-medium text-gray-800">•</span> MTN Fibre Network Infrastructure
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="pt-16 pb-8 mb-12 mx-4 bg-gradient-to-r from-[#335FA8] to-slate-800 -p-2 md:p-0">


            <div class="container mx-auto px-6 md:px-8 max-w-5xl">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Content moved to left -->
                    <div class="text-left">
                        <h3 class="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Partner with Xstrato Prime?
                        </h3>
                        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
                            Experience the difference of working with a hybrid company that combines innovative
                            solutions,
                            professional expertise, and unwavering commitment to customer satisfaction.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="/services"
                                class="px-8 py-4 bg-white text-[#335FA8] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg text-center">
                                Explore Our Services
                            </a>
                            <a href="/contact"
                                class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#335FA8] transition-colors duration-300 text-center">
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    <!-- Image on the right -->
                    <div class="lg:flex justify-end hidden">
                        <img src="~/assets/img/about-xstrato4.png" alt="Xstrato Prime Team"
                            class="max-w-md w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&display=swap');
</style>

<script setup>
definePageMeta({
    layout: "landing"
});

useHead({
    meta: [
        { property: 'og:title', content: 'Xstrato Prime Nigeria Limited | Engineering Excellence & Infrastructure Development' },
        { property: 'og:description', content: 'Leading engineering and construction company delivering innovative infrastructure solutions across Nigeria. Specializing in civil works, telecommunications, renewable energy, and project management.' },
        { property: 'og:image', content: 'https://xstrato.com/xstrato-og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Xstrato Prime Nigeria Limited - Engineering Excellence' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Xstrato Prime Nigeria Limited | Engineering Excellence' },
        { name: 'twitter:description', content: 'Leading engineering and construction company delivering innovative infrastructure solutions across Nigeria.' },
        { name: 'twitter:image', content: 'https://xstrato.com/xstrato-og-image.jpg' }
    ]
});
</script>