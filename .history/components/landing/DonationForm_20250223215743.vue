<template>
    <form class="bg-white/90 backdrop-blur-sm rounded-lg p-6 w-full max-w-4xl">
        <!-- Stacked on Mobile, Grid on Desktop -->
        <div class="flex flex-col space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
            <!-- Project Dropdown -->
            <div>
                <label class="block text-sm font-medium text-gray-700">Project</label>
                <select v-model="project"
                    class="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required>
                    <option value="">Select project</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="community">Community</option>
                    <option value="general">General</option>
                </select>
            </div>

            <!-- Donation Type Dropdown -->
            <div>
                <label class="block text-sm font-medium text-gray-700">Donation Type</label>
                <select v-model="donationType"
                    class="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required>
                    <option value="">Select type</option>
                    <option value="one-time">One-time</option>
                    <option value="recurring">Recurring</option>
                </select>
            </div>

            <!-- DONATE Button with Heart SVG Icon -->
            <div class="flex items-end">
                <NuxtLink to="/donate"
                    class="w-full bg-[#009976 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-center flex items-center justify-center gap-2">
                    <span>DONATE</span>
                    <!-- Heart SVG Icon -->
                    <svg class="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </form>
</template>

<script setup>
// Reactive data for form fields
const project = ref('');
const donationType = ref('');
</script>