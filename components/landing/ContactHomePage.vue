<template>
    <section class="relative w-full bg-gray-100 py-6 md:py-8"> <!-- Reduced padding -->
        <!-- White Top Background - reduced height -->
        <div class="absolute top-0 left-0 w-full h-1/6 bg-white"></div>

        <div class="container mx-auto px-4 lg:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end"> <!-- Equal columns for form and image -->
                <!-- Contact Form Column - occupies 1/2 of the space -->
                <div class="relative z-10 bg-white p-6 lg:p-8 rounded-lg shadow-lg lg:mb-8"> <!-- Reduced mb -->
                    <h2 class="text-2xl lg:text-3xl font-bold text-[#0E0147] mb-4">Get in Touch</h2> <!-- Reduced mb -->
                    <form @submit.prevent="handleSubmit" class="space-y-4"> <!-- Reduced space-y -->
                        <input type="hidden" name="access_key" :value="formAccessKey">

                        <!-- Name Fields Row -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <!-- Reduced gap -->
                            <input v-model="formData.firstName" type="text" name="first_name" placeholder="First Name *"
                                required
                                class="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] focus:ring-1 focus:ring-[#0E0147] transition-colors" />
                            <input v-model="formData.lastName" type="text" name="last_name" placeholder="Last Name *"
                                required
                                class="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] focus:ring-1 focus:ring-[#0E0147] transition-colors" />
                        </div>

                        <!-- Contact Fields Row -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <!-- Reduced gap -->
                            <input v-model="formData.email" type="email" name="email" placeholder="Email *" required
                                class="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] focus:ring-1 focus:ring-[#0E0147] transition-colors" />
                            <input v-model="formData.phone" type="tel" name="phone" placeholder="Phone *" required
                                class="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] focus:ring-1 focus:ring-[#0E0147] transition-colors" />
                        </div>

                        <!-- Message Field -->
                        <div>
                            <textarea v-model="formData.message" name="message"
                                placeholder="What can we help you with today?" rows="4" required
                                class="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] focus:ring-1 focus:ring-[#0E0147] transition-colors resize-none"></textarea>
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-start">
                            <button type="submit"
                                class="px-6 py-2 text-white bg-[#0E0147] rounded-md hover:bg-[#1a0275] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                :disabled="isSubmitting">
                                {{ isSubmitting ? 'Submitting...' : 'SUBMIT' }}
                            </button>
                        </div>

                        <!-- Status Message -->
                        <div v-if="statusMessage.show"
                            :class="['p-3 rounded-md', statusMessage.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700']">
                            {{ statusMessage.text }}
                        </div>
                    </form>
                </div>

                <!-- Image Column - occupies 1/2 of the space -->
                <div class="relative h-full lg:mb-8"> <!-- Reduced mb -->
                    <img src="@/assets/img/support_petabiz.png" alt="Support Team"
                        class="w-full h-auto object-cover object-bottom rounded-lg lg:rounded-none" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const formAccessKey = ref('0f124479-05cd-4fcf-a66e-67276a365cbb')
const isSubmitting = ref(false)

const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
})

const statusMessage = ref({
    show: false,
    error: false,
    text: ''
})

const handleSubmit = async () => {
    if (isSubmitting.value) return

    isSubmitting.value = true
    try {
        const response = await $fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: {
                access_key: formAccessKey.value,
                ...formData.value
            }
        })

        if (response.success) {
            statusMessage.value = {
                show: true,
                error: false,
                text: 'Thank you for contacting us! We\'ll get back to you soon.'
            }
            // Reset form
            formData.value = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            }
        } else {
            throw new Error('Submission failed')
        }
    } catch (error) {
        statusMessage.value = {
            show: true,
            error: true,
            text: 'There was an error submitting the form. Please try again.'
        }
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
.contact-section {
    background: #f3f4f6;
    position: relative;
    overflow: hidden;
}

.container {
    position: relative;
    z-index: 2;
}

@media (max-width: 1024px) {
    .contact-section {
        padding: 1.5rem 1rem;
        /* Reduced padding */
    }

    .grid {
        flex-direction: column;
    }

    .col-span-12 {
        width: 100%;
    }

    .col-span-12 img {
        width: 100%;
        margin: 0 auto;
        display: block;
    }

    .col-span-12.-mt-16 {
        margin-top: 0;
    }
}
</style>