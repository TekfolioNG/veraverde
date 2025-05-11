<template>
    <div>
        <section class="w-full h-[50vh] relative">
            <img src="~/assets/img/our-team-ppil.jpg" alt="PPIL Project Portfolio" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div class="container mx-auto px-4 md:px-8">
                    <!-- Desktop layout -->
                    <div class="hidden md:flex justify-between items-center">
                        <!-- Title (moved to left) -->
                        <div class="text-white max-w-md">
                            <h4
                                class="text-white text-xl uppercase tracking-wide font-medium mb-3 border-l-4 border-[#E6A619] pl-4">
                                PPIL MANAGEMENT
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
                                <span class="border-b-2 border-[#E6A619] pb-1">PPIL PROJECTS</span>
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

        <!-- Management Team Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-6 md:px-8">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
                    style="font-family: 'Barlow Condensed', sans-serif;">
                    Our Management Team
                </h2>
                <p class="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-12">
                    Behind every successful delivery is a team of seasoned professionals with deep expertise, local
                    insight, and a
                    shared commitment to excellence. Our leadership team brings decades of combined experience in
                    construction,
                    project management, engineering, procurement, and operations.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Team Member 1 -->
                    <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Aminu Abubakar Suleiman</h3>
                            <p class="text-sm text-[#E6A619] font-semibold mb-3">MD/CEO</p>
                            <p class="text-gray-700 mb-4">
                                A seasoned project manager and quantity surveyor with over 21 years of experience, Aminu
                                has led
                                multimillion-naira construction and infrastructure projects across Nigeria.
                            </p>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Master's in Project Management from Sheffield Hallam University, UK</li>
                                <li>• Member of APM (UK), NIQS, and RICS</li>
                                <li>• Instrumental in World Bank-funded initiatives</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Team Member 2 -->
                    <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Engr. Muhammad Shuaibu</h3>
                            <p class="text-sm text-[#E6A619] font-semibold mb-3">Executive Director, Engineering &
                                Project Management
                            </p>
                            <p class="text-gray-700 mb-4">
                                Oversees engineering design, quality control, and project supervision with career
                                spanning both public
                                and private sectors.
                            </p>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• MSc in Construction Project Management from Heriot-Watt University</li>
                                <li>• Registered with COREN and NICE</li>
                                <li>• Former role at Federal Ministry of Works</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Team Member 3 -->
                    <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Engr. Ibrahim Aminu Mashi</h3>
                            <p class="text-sm text-[#E6A619] font-semibold mb-3">Executive Director, Operations</p>
                            <p class="text-gray-700 mb-4">
                                Ensures projects are delivered on time, within budget, and to specification with a blend
                                of strategic
                                oversight and operational execution.
                            </p>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• MBA from the Nigerian Defence Academy</li>
                                <li>• Background in engineering and executive management</li>
                                <li>• Former roles at Stratrade Nigeria Ltd and Fine Aluminum Ltd</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Team Member 4 -->
                    <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Abu Abubakar Yaro</h3>
                            <p class="text-sm text-[#E6A619] font-semibold mb-3">Building Engineering Strategist</p>
                            <p class="text-gray-700 mb-4">
                                Leads the design and technical execution of building projects covering structural
                                integrity, system
                                optimization, and safety compliance.
                            </p>
                        </div>
                    </div>

                    <!-- Team Member 5 -->
                    <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Obi Regina Bufa</h3>
                            <p class="text-sm text-[#E6A619] font-semibold mb-3">Administrative Executive</p>
                            <p class="text-gray-700 mb-4">
                                Coordinates administrative operations, HR, logistics, and internal communications with a
                                blend of people
                                skills and process efficiency.
                            </p>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Background in psychology and digital strategy</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Team Member 6 -->
                    <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Saidu Ahmed</h3>
                            <p class="text-sm text-[#E6A619] font-semibold mb-3">Procurement Officer</p>
                            <p class="text-gray-700 mb-4">
                                Manages sourcing, vendor relations, and materials logistics with analytical precision
                                and fiscal
                                responsibility.
                            </p>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>• Degree in Mathematics from Usman Danfodio University</li>
                                <li>• Years of experience in banking</li>
                            </ul>
                        </div>
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

useSeoMeta({
    title: 'Our Work | Premium Projects Infrastructure Limited',
    ogTitle: 'Our Work | Premium Projects Infrastructure Ltd',
    description: 'Explore our portfolio of impactful projects and meet our expert management team',
    ogDescription: 'Explore our portfolio of impactful projects and meet our expert management team',
});
</script>