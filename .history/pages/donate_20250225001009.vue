<template>
    <div class="pt-8"></div>

    <div class="w-full h-64 md:h-80 relative mb-12">
        <img src="~/assets/img/toei_donate_hero.jpg" alt="Donate Hero Image" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div class="text-white text-center p-8">
                <h1 class="text-5xl font-bold mb-4">Make a Difference</h1>
                <p class="text-xl">Your support transforms lives and communities</p>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
        <!-- Main Container with Image and Form -->
        <div class="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="flex flex-col md:flex-row">
                <!-- Image Section -->
                <div class="hidden md:block w-1/2 relative">
                    <img src="~/assets/img/toei_support.jpg" alt="Joining hands in support"
                        class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div class="text-white text-center p-8">
                            <h1 class="text-4xl font-bold mb-4">Together We Can</h1>
                            <p class="text-xl">Make a lasting impact in our community</p>
                        </div>
                    </div>
                </div>

                <!-- Form Section -->
                <div class="w-full md:w-1/2 p-8 lg:p-12">
                    <div class="mb-8">
                        <h2 class="text-3xl font-bold text-gray-900 mb-3">Empower Change Today</h2>
                        <div class="space-y-2 text-gray-600">
                            <p class="text-lg">Your contribution creates ripples of positive change in our community.
                                Every donation, no matter the size, helps build a better tomorrow.</p>
                            <p class="italic text-gray-500">Select a cause close to your heart and join us in making a
                                difference.</p>
                        </div>
                    </div>

                    <!-- Impact Cards with Enhanced Design -->
                    <div class="grid grid-cols-3 gap-4 mb-8">
                        <div v-for="item in impactCards" :key="item.title"
                            class="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                            :class="{ 'ring-2 ring-[#009976 bg-gray-100': formData.project === item.value }"
                            @click="formData.project = item.value">
                            <div class="text-3xl mb-2">{{ item.icon }}</div>
                            <div class="font-medium text-gray-800">{{ item.title }}</div>
                        </div>
                    </div>

                    <!-- Donation Form -->
                    <form @submit.prevent="initializePayment" class="space-y-6">
                        <!-- Project Selection -->
                        <div class="space-y-1.5">
                            <label for="project" class="block text-sm font-medium text-gray-700">Select Project</label>
                            <select v-model="formData.project" id="project"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors"
                                required>
                                <option value="">Choose a project</option>
                                <option v-for="item in impactCards" :key="item.value" :value="item.value">
                                    {{ item.title }}
                                </option>
                            </select>
                        </div>

                        <!-- Personal Information -->
                        <div class="space-y-4">
                            <div class="space-y-1.5">
                                <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                                <input v-model="formData.name" type="text" id="name"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors"
                                    placeholder="Enter your full name" required />
                            </div>

                            <div class="space-y-1.5">
                                <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
                                <input v-model="formData.email" type="email" id="email"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors"
                                    placeholder="Enter your email" required />
                            </div>

                            <div class="space-y-1.5">
                                <label for="phone" class="block text-sm font-medium text-gray-700">Phone
                                    (Optional)</label>
                                <input v-model="formData.phone" type="tel" id="phone"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors"
                                    placeholder="Enter your phone number" />
                            </div>
                        </div>

                        <!-- Currency and Amount Section -->
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-1.5">
                                <label for="currency" class="block text-sm font-medium text-gray-700">Currency</label>
                                <select v-model="formData.currency" id="currency" @change="updateAmountMin"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors"
                                    required>
                                    <option value="NGN">Naira (₦)</option>
                                    <option value="USD">Dollar ($)</option>
                                </select>
                            </div>

                            <div class="space-y-1.5">
                                <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
                                <input v-model="formData.amount" type="number" id="amount" :min="minAmount"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors"
                                    placeholder="Enter amount" required />
                                <p v-if="formData.amount && formData.amount < minAmount"
                                    class="text-sm text-red-500 mt-1">
                                    Minimum amount is {{ formData.currency === 'NGN' ? '₦10,000' : '$15' }}.
                                </p>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <button type="submit" :disabled="!isValid"
                            class="w-full bg-[#009976 text-white py-3 px-6 rounded-xl hover:bg-[#00B28A] transition-all duration-300 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                            <span>Support Project</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </form>

                    <!-- Trust Indicators with Enhanced Design -->
                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <div class="grid grid-cols-3 gap-4 text-center">
                            <div class="p-3">
                                <span class="text-xl mb-2 block">🔒</span>
                                <span class="text-sm text-gray-600">Secure Payment</span>
                            </div>
                            <div class="p-3">
                                <span class="text-xl mb-2 block">✨</span>
                                <span class="text-sm text-gray-600">Tax Deductible</span>
                            </div>
                            <div class="p-3">
                                <span class="text-xl mb-2 block">💌</span>
                                <span class="text-sm text-gray-600">Receipt Provided</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom margin space -->
    <div class="pb-16"></div>
</template>

<script setup>
import { computed, ref } from 'vue';

const formData = ref({
    project: '',
    name: '',
    email: '',
    phone: '',
    currency: 'NGN',
    amount: ''
});

const minAmount = ref(10000); // Default to NGN minimum

// Update minimum amount based on currency
const updateAmountMin = () => {
    minAmount.value = formData.value.currency === 'NGN' ? 10000 : 15;
};

// Validate form
const isValid = computed(() => {
    const numAmount = Number(formData.value.amount);
    return (
        formData.value.project &&
        formData.value.name &&
        formData.value.email &&
        numAmount >= minAmount.value
    );
});

// Impact Cards
const impactCards = [
    { title: 'Skills Acquisition', icon: '🎓', value: 'skills' },
    { title: 'Healthcare Outreach', icon: '🏥', value: 'healthcare' },
    { title: 'Community Development', icon: '🤝', value: 'community' },
];

// Initialize Paystack payment
const initializePayment = async () => {
    if (!isValid.value) return;

    try {
        const response = await $fetch('/api/donations/initialize', {
            method: 'POST',
            body: {
                ...formData.value,
                amount: Number(formData.value.amount) * 100, // Paystack expects kobo/cents
            },
        });

        window.location.href = response.data.authorization_url;
    } catch (err) {
        console.error('Payment initialization failed:', err);
        alert('Sorry, there was an error processing your donation. Please try again.');
    }
};
definePageMeta({
    layout: "landing",
});
</script>