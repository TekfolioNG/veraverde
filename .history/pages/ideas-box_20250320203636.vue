<template>
    <div class="bg-white py-10 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg max-w-5xl mx-auto">
        <div class="max-w-3xl mx-auto">
            <!-- Section heading with decorative elements -->
            <div class="text-center mb-8">
                <h2 class="text-2xl sm:text-3xl font-bold text-emerald-800">Share Your Community Idea</h2>
                <div class="h-1 w-24 bg-emerald-500 mx-auto mt-2 rounded-full"></div>
                <p class="mt-4 text-gray-600">Your insights can help us develop solutions that truly address community
                    needs</p>
            </div>

            <!-- Form starts here -->
            <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Personal Information Section -->
                <div class="bg-emerald-50 p-4 rounded-md">
                    <h3 class="text-lg font-medium text-emerald-700 mb-4">Personal Information</h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Full Name -->
                        <div>
                            <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name <span
                                    class="text-red-500">*</span></label>
                            <input id="fullName" v-model="formData.fullName" type="text" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Your full name" />
                        </div>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address <span
                                    class="text-red-500">*</span></label>
                            <input id="email" v-model="formData.email" type="email" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="your.email@example.com" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <!-- Phone Number -->
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input id="phone" v-model="formData.phone" type="tel"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Your phone number" />
                        </div>

                        <!-- Location -->
                        <div>
                            <label for="location" class="block text-sm font-medium text-gray-700 mb-1">Location in
                                Nigeria <span class="text-red-500">*</span></label>
                            <select id="location" v-model="formData.location" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                                <option value="" disabled selected>Select your state</option>
                                <option v-for="state in nigerianStates" :key="state" :value="state">{{ state }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Idea Information Section -->
                <div class="bg-emerald-50 p-4 rounded-md">
                    <h3 class="text-lg font-medium text-emerald-700 mb-4">Your Idea Details</h3>

                    <!-- Idea Title -->
                    <div class="mb-4">
                        <label for="ideaTitle" class="block text-sm font-medium text-gray-700 mb-1">Idea Title <span
                                class="text-red-500">*</span></label>
                        <input id="ideaTitle" v-model="formData.ideaTitle" type="text" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="A brief title for your community initiative" />
                    </div>

                    <!-- Category -->
                    <div class="mb-4">
                        <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Category <span
                                class="text-red-500">*</span></label>
                        <select id="category" v-model="formData.category" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                            <option value="" disabled selected>Select a category</option>
                            <option value="Education">Education</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Environment">Environment</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Technology">Technology</option>
                            <option value="Infrastructure">Infrastructure</option>
                            <option value="Youth Empowerment">Youth Empowerment</option>
                            <option value="Women Empowerment">Women Empowerment</option>
                            <option value="Economic Development">Economic Development</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <!-- Description -->
                    <div class="mb-4">
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description <span
                                class="text-red-500">*</span></label>
                        <textarea id="description" v-model="formData.description" rows="5" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="Please describe your idea, its potential impact, and how it can benefit your community..."></textarea>
                    </div>

                    <!-- Challenge Addressed -->
                    <div class="mb-4">
                        <label for="challenge" class="block text-sm font-medium text-gray-700 mb-1">What challenge does
                            this address?</label>
                        <textarea id="challenge" v-model="formData.challenge" rows="3"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="Describe the specific community challenge your idea would help solve..."></textarea>
                    </div>
                </div>

                <!-- Submit button -->
                <div class="flex justify-center">
                    <button type="submit" :disabled="isSubmitting"
                        class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                        <span v-if="isSubmitting">
                            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Submitting...
                        </span>
                        <span v-else>Submit Your Idea</span>
                    </button>
                </div>
            </form>

            <!-- Success message (shown after form submission) -->
            <div v-if="formSubmitted" class="mt-6 p-4 bg-green-100 text-green-800 rounded-md text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="font-medium">Thank you for sharing your idea!</p>
                <p class="text-sm mt-1">Our team will review your submission and may contact you for more information.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Nigerian states array for location dropdown
const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT (Abuja)', 'Gombe',
    'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
    'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
    'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

// Form data reactive object
const formData = ref({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    ideaTitle: '',
    category: '',
    description: '',
    challenge: ''
});

// Form submission states
const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Form submission handler
const submitForm = async () => {
    try {
        isSubmitting.value = true;

        // Simulate API call/email sending (replace with actual implementation)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Handle successful submission
        formSubmitted.value = true;

        // Reset form after submission
        formData.value = {
            fullName: '',
            email: '',
            phone: '',
            location: '',
            ideaTitle: '',
            category: '',
            description: '',
            challenge: ''
        };

    } catch (error) {
        console.error('Error submitting form:', error);
        // Here you would handle any errors, perhaps showing an error message
    } finally {
        isSubmitting.value = false;
    }
};
</script>