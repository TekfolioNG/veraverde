<template>
    <section class="relative w-screen overflow-hidden py-8">
        <div class="container mx-auto px-4">
            <div class="text-center mb-10">
                <button class="bg-yellow-400 font-bold text-sm uppercase tracking-wide py-3 px-8 rounded">
                    EXPLORE CAPABILITIES
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <!-- Card 1: Design & Planning -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-6 text-center">
                        <div class="flex justify-center mb-5">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 text-blue-500 mx-auto">
                                    <path
                                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold mb-3">Design & Planning</h3>
                        <p class="text-gray-600 text-sm mb-5">
                            Our expert design team delivers comprehensive architectural services and strategic planning
                            solutions to transform your vision into functional, innovative spaces.
                        </p>
                        <div class="mt-auto">
                            <a href="/services/design-planning"
                                class="inline-flex items-center text-sm font-bold uppercase">
                                LEARN MORE
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5 ml-1 bg-yellow-400 rounded-full p-1">
                                    <path fill-rule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Construction & Project Management -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-6 text-center">
                        <div class="flex justify-center mb-5">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 text-blue-500 mx-auto">
                                    <path
                                        d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                                    <path fill-rule="evenodd"
                                        d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold mb-3">Construction & Project Management</h3>
                        <p class="text-gray-600 text-sm mb-5">
                            Our construction experts deliver end-to-end building solutions with meticulous project
                            management that ensures quality, timeliness, and budget adherence.
                        </p>
                        <div class="mt-auto">
                            <a href="/services/construction-management"
                                class="inline-flex items-center text-sm font-bold uppercase">
                                LEARN MORE
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5 ml-1 bg-yellow-400 rounded-full p-1">
                                    <path fill-rule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Renovation & Infrastructure Upgrades -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-6 text-center">
                        <div class="flex justify-center mb-5">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 text-blue-500 mx-auto">
                                    <path fill-rule="evenodd"
                                        d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold mb-3">Renovation & Infrastructure Upgrades</h3>
                        <p class="text-gray-600 text-sm mb-5">
                            Our renovation specialists transform existing structures with modern upgrades that enhance
                            functionality, energy efficiency, and aesthetic appeal.
                        </p>
                        <div class="mt-auto">
                            <a href="/services/renovation-upgrades"
                                class="inline-flex items-center text-sm font-bold uppercase">
                                LEARN MORE
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5 ml-1 bg-yellow-400 rounded-full p-1">
                                    <path fill-rule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Facility Maintenance -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-6 text-center">
                        <div class="flex justify-center mb-5">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 text-blue-500 mx-auto">
                                    <path
                                        d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold mb-3">Facility Maintenance</h3>
                        <p class="text-gray-600 text-sm mb-5">
                            Our maintenance teams provide proactive and responsive services to keep your facilities
                            safe, functional, and operating at peak efficiency.
                        </p>
                        <div class="mt-auto">
                            <a href="/services/facility-maintenance"
                                class="inline-flex items-center text-sm font-bold uppercase">
                                LEARN MORE
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5 ml-1 bg-yellow-400 rounded-full p-1">
                                    <path fill-rule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Card 5: Sustainability Solutions (Added) -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-6 text-center">
                        <div class="flex justify-center mb-5">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 text-blue-500 mx-auto">
                                    <path fill-rule="evenodd"
                                        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold mb-3">Sustainability Solutions</h3>
                        <p class="text-gray-600 text-sm mb-5">
                            Our sustainability experts develop and implement eco-friendly solutions that reduce
                            environmental impact while optimizing operational efficiency.
                        </p>
                        <div class="mt-auto">
                            <a href="/services/sustainability"
                                class="inline-flex items-center text-sm font-bold uppercase">
                                LEARN MORE
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5 ml-1 bg-yellow-400 rounded-full p-1">
                                    <path fill-rule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Safety & Compliance (Added) -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-6 text-center">
                        <div class="flex justify-center mb-5">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-16 h-16 text-blue-500 mx-auto">
                                    <path fill-rule="evenodd"
                                        d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold mb-3">Safety & Compliance</h3>
                        <p class="text-gray-600 text-sm mb-5">
                            Our compliance specialists ensure all facilities meet regulatory requirements while
                            implementing industry-leading safety protocols and risk management strategies.
                        </p>
                        <div class="mt-auto">
                            <a href="/services/safety-compliance"
                                class="inline-flex items-center text-sm font-bold uppercase">
                                LEARN MORE
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5 ml-1 bg-yellow-400 rounded-full p-1">
                                    <path fill-rule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed for this simple component
</script>