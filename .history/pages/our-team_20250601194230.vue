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
                                XSATRO MANAGEMENT
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
                                <span class="border-b-2 border-[#E6A619] pb-1">XSATRO MANAGEMENT</span>
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
                <!-- Project Management -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            PROJECT MANAGEMENT
                        </h3>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <div class="p-8">
                            <div class="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                                <div class="flex-1">
                                    <h4 class="text-xl font-bold text-gray-900 mb-2">Regina Bufa Obi</h4>
                                    <p class="text-[#E6A619] font-semibold mb-4">Managing Director (Projects)</p>
                                    <div class="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 class="font-semibold text-gray-800 mb-2">Qualifications</h5>
                                            <ul class="text-sm text-gray-600 space-y-1">
                                                <li>• MBA - Ahmadu Bello University</li>
                                                <li>• B.A Psychology - Bangalore University</li>
                                                <li>• Project Management (PMP)</li>
                                                <li>• Member NIM, MCCPPA</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 class="font-semibold text-gray-800 mb-2">Experience</h5>
                                            <p class="text-sm text-gray-600 mb-3">3+ Years in Construction & Project
                                                Management</p>
                                            <h5 class="font-semibold text-gray-800 mb-2">Key Projects</h5>
                                            <ul class="text-sm text-gray-600 space-y-1">
                                                <li>• World Bank Health System Development Project</li>
                                                <li>• Solar Borehole & Water Treatment Plant</li>
                                                <li>• MTN Fibre Network Infrastructure</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Architecture Team -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            ARCHITECTURE
                        </h3>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Arch. Nendi D. Gotom</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Senior Architect</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> MNIA,
                                    ARCON</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 15 Years
                                </p>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Arc. Mohammed Sanusi Yahaya</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Architect</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> B.TECH
                                    Architecture (Hons.)</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 8 Years
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Civil Engineering Team -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            CIVIL ENGINEERING & CONSTRUCTION
                        </h3>
                    </div>
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Engr. Ismail Abubakar</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Civil Engineer</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> B.Eng
                                    Civil Engineering</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 7 Years
                                </p>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Engr. Saeed Umar Maigari</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Civil Engineer</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> B.Eng
                                    Civil Engineering</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 8 Years
                                </p>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Umar Yakubu</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Senior Civil Engineer</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> B.Eng
                                    Civil Eng., MNSE</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 10 Years
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Electrical Engineering Team -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            ELECTRICAL ENGINEERING
                        </h3>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Eng. Mohd Usman</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Senior Electrical Engineer</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> B.Eng
                                    Electrical Engineering</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 19 Years
                                </p>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Zubair Onoruoiza</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Electrical Engineer</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> B.Eng,
                                    COREN</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 10 Years
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mechanical Engineering Team -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            MECHANICAL ENGINEERING
                        </h3>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                        <h4 class="text-lg font-bold text-gray-900 mb-2">Idris Aminu Sale</h4>
                        <p class="text-[#E6A619] font-semibold text-sm mb-3">Mechanical Engineer</p>
                        <div class="space-y-2">
                            <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> B.Eng
                                Mechanical Engineering</p>
                            <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 5 Years</p>
                        </div>
                    </div>
                </div>

                <!-- Quantity Surveying Team -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            QUANTITY SURVEYING
                        </h3>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Adepoju Abdulhakeem</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Senior Quantity Surveyor</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> MSc
                                    Constr. Mgt, MNIQS, RQS</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 8 Years
                                </p>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Aliyu Yahaya</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Quantity Surveyor</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span> MNIQS,
                                    RQS</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 8 Years
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Administrative Team -->
                <div class="mb-16">
                    <div class="flex items-center mb-8">
                        <div class="w-1 h-12 bg-[#E6A619] mr-4"></div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900"
                            style="font-family: 'Barlow Condensed', sans-serif;">
                            ADMINISTRATIVE SUPPORT
                        </h3>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Precious Jerry</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Business Management Specialist</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span>
                                    Business Management</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 2 Years
                                </p>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Adaobi Eguibe</h4>
                            <p class="text-[#E6A619] font-semibold text-sm mb-3">Accounting Officer</p>
                            <div class="space-y-2">
                                <p class="text-sm text-gray-600"><span class="font-medium">Qualification:</span>
                                    Accounting</p>
                                <p class="text-sm text-gray-600"><span class="font-medium">Experience:</span> 3 Years
                                </p>
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