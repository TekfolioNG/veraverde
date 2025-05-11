<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { ref } from 'vue'

const formStatus = ref({
  loading: false,
  success: false,
  error: false,
  message: ''
})

const submitForm = async (event) => {
  const form = event.target
  const formData = new FormData(form)

  // Reset status
  formStatus.value = {
    loading: true,
    success: false,
    error: false,
    message: 'Sending your message...'
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    // Log the response for debugging
    console.log('API Response:', data)

    if (data.success) {
      // Set success status
      formStatus.value = {
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! We will contact you soon.'
      }
      // Reset the form
      form.reset()
    } else {
      formStatus.value = {
        loading: false,
        success: false,
        error: true,
        message: data.message || 'Error sending message. Please try again.'
      }
    }
  } catch (error) {
    console.error('Error:', error)
    formStatus.value = {
      loading: false,
      success: false,
      error: true,
      message: 'Network error occurred. Please check your connection and try again.'
    }
  }
}

definePageMeta({
  layout: "landing"
})

useSeoMeta({
  title: 'Contact Us | Premium Projects Infrastructure Limited',
  ogTitle: 'Contact Us | Premium Projects Infrastructure Limited',
  titleTemplate: 'Contact Us | Premium Projects Infrastructure Limited',
  description: 'Contact Us | Premium Projects Infrastructure Limited',
  ogDescription: 'Contact Us | Premium Projects Infrastructure Limited',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact Us | Premium Projects Infrastructure Limited',
  twitterDescription: 'Contact Us | Premium Projects Infrastructure Limited',

  ogImage: {
    url: '/PPIL-og-image.png',
    width: 1200,
    height: 630,
    alt: 'Contact Us | Premium Projects Infrastructure Limited',
  },
  twitterImage: '/PPIL-og-image.png'

})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="w-full py-16 md:py-24 bg-gradient-to-r from-[#002244] to-[#003366]">
      <div class="container mx-auto px-6 md:px-8 text-center text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-6" style="font-family: 'Barlow Condensed', sans-serif;">
          CONTACT US
        </h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto">
          Get in touch with our team for inquiries, partnerships, or project discussions
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-6 md:px-8">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Contact Info & Animation -->
          <div class="lg:w-1/2">
            <div class="flex justify-center mb-12">
              <DotLottieVue style="height: 400px; width: 400px" autoplay loop
                src="https://lottie.host/8c75d389-ecf9-4562-8954-e85abce4deee/WUueg0Z8bT.lottie" />
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Head Office</h3>
                <p class="text-gray-700 dark:text-gray-300">
                  03, Borno Road, off Independence Way, Marafa, Kaduna.
                </p>
              </div>

              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Abuja Office</h3>
                <p class="text-gray-700 dark:text-gray-300">
                  02, Bilyamin Usman Street, Off Ebitu Ukiwe Street, Jabi Abuja.
                </p>
              </div>

              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Details</h3>
                <p class="text-gray-700 dark:text-gray-300">
                  <span class="font-semibold">Tel:</span> +234 (0) 9-292-0035, +234 803 786 7646<br>
                  <span class="font-semibold">E-mail:</span> info@ppil.com.ng
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:w-1/2">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                style="font-family: 'Barlow Condensed', sans-serif;">
                SEND US A MESSAGE
              </h2>

              <form @submit.prevent="submitForm" class="space-y-6">
                <input type="hidden" name="access_key" value="1d005cda-aa81-48a8-99fd-d5a6cb3d5c66">
                <input type="hidden" name="redirect" value="https://ppil.com.ng/thank-you">
                <input type="hidden" name="subject" value="New Contact Form Submission">
                <input type="hidden" name="from_name" value="PPIL Website">
                <input type="hidden" name="replyto" value="info@ppil.com.ng">
                <input type="hidden" name="send_to" value="kelvinkeshi@gmail.com">

                <div>
                  <label for="name" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E6A619] dark:bg-gray-700 dark:text-white">
                </div>

                <div>
                  <label for="email" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email
                    Address</label>
                  <input type="email" id="email" name="email" required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E6A619] dark:bg-gray-700 dark:text-white">
                </div>

                <div>
                  <label for="phone" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Phone
                    Number</label>
                  <input type="tel" id="phone" name="phone"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E6A619] dark:bg-gray-700 dark:text-white">
                </div>

                <div>
                  <label for="subject" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E6A619] dark:bg-gray-700 dark:text-white">
                </div>

                <div>
                  <label for="message" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your
                    Message</label>
                  <textarea id="message" name="message" rows="5" required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E6A619] dark:bg-gray-700 dark:text-white"></textarea>
                </div>

                <button type="submit" :disabled="formStatus.loading"
                  class="w-full bg-[#E6A619] hover:bg-[#d49916] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                  <span v-if="!formStatus.loading">SEND MESSAGE</span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>
                    SENDING...
                  </span>
                </button>

                <!-- Status Message - Moved below the button -->
                <div v-if="formStatus.message" :class="{
                  'bg-green-100 border-green-400 text-green-700 dark:bg-green-900 dark:border-green-700 dark:text-green-300': formStatus.success,
                  'bg-red-100 border-red-400 text-red-700 dark:bg-red-900 dark:border-red-700 dark:text-red-300': formStatus.error,
                  'bg-blue-100 border-blue-400 text-blue-700 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300': formStatus.loading
                }" class="border px-4 py-3 rounded mt-4">
                  <p>{{ formStatus.message }}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-12 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-6 md:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          style="font-family: 'Barlow Condensed', sans-serif;">
          OUR LOCATIONS
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Kaduna Office</h3>
            <div class="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.963569876302!2d7.432798315793851!3d10.503758392500006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d3566f8a2b0b9%3A0x9b3b7b1b6b1b6b1b!2sBorno%20Road%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1623345678901!5m2!1sen!2sng"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                class="dark:grayscale dark:opacity-80"></iframe>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Abuja Office</h3>
            <div class="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.847202180092!2d7.433682315797442!3d9.05747019354719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b1b9b9b9b9b%3A0x9b3b7b1b6b1b6b1b!2sEbitu%20Ukiwe%20St%2C%20Jabi%2C%20Abuja!5e0!3m2!1sen!2sng!4v1623345678901!5m2!1sen!2sng"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                class="dark:grayscale dark:opacity-80"></iframe>
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