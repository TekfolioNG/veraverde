<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { ref } from 'vue'

// Form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// Form status
const isSubmitting = ref(false)
const formSuccess = ref(false)
const formError = ref(false)
const errorMessage = ref('')

// Form submission handler
const handleSubmit = async () => {
  isSubmitting.value = true
  formSuccess.value = false
  formError.value = false
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '1d005cda-aa81-48a8-99fd-d5a6cb3d5c66',
        subject: `New Contact Form Submission: ${formData.value.subject}`,
        from_name: 'PPIL Website Contact Form',
        to_email: 'kelvinkeshi@gmail.com',
        ...formData.value
      })
    })
    
    const result = await response.json()
    if (result.success) {
      formSuccess.value = true
      // Reset form
      formData.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    } else {
      formError.value = true
      errorMessage.value = result.message || 'Something went wrong. Please try again.'
    }
  } catch (error) {
    formError.value = true
    errorMessage.value = 'Something went wrong. Please try again.'
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'Our Work | Premium Projects Infrastructure Limited',
  ogTitle: 'Our Work | Premium Projects Infrastructure Limited',
  description: 'Explore our portfolio of impactful projects and meet our expert management team',
  ogDescription: 'Explore our portfolio of impactful projects and meet our expert management team',
});
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-12 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-6 md:px-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Contact Us
        </h1>
        <p class="text-lg text-gray-700 dark:text-gray-300 mt-4 text-center max-w-3xl mx-auto">
          We're here to help with your construction and maintenance needs. Reach out to us today.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12">
      <div class="container mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Left Column - Contact Form -->
          <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              style="font-family: 'Barlow Condensed', sans-serif;">
              Send Us a Message
            </h2>
            
            <!-- Success Message -->
            <div v-if="formSuccess" class="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-6">
              <p>Thank you for your message! We'll get back to you soon.</p>
            </div>
            
            <!-- Error Message -->
            <div v-if="formError" class="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-6">
              <p>{{ errorMessage }}</p>
            </div>
            
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#E6A619] focus:border-[#E6A619] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div class="mb-4">
                <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#E6A619] focus:border-[#E6A619] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div class="mb-4">
                <label for="phone" class="block text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#E6A619] focus:border-[#E6A619] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="+234 000 000 0000"
                />
              </div>
              
              <div class="mb-4">
                <label for="subject" class="block text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  v-model="formData.subject"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#E6A619] focus:border-[#E6A619] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="5"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#E6A619] focus:border-[#E6A619] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Tell us about your project or inquiry"
                ></textarea>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-6 py-3 bg-[#E6A619] text-black font-bold rounded-lg hover:bg-[#d49916] transition-colors duration-300 flex justify-center items-center"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
          
          <!-- Right Column - Lottie Animation and Contact Info -->
          <div class="flex flex-col">
            <!-- Lottie Animation -->
            <div class="flex justify-center mb-8">
              <DotLottieVue class="h-64 md:h-80 w-full" autoplay loop src="https://lottie.host/8c75d389-ecf9-4562-8954-e85abce4deee/WUueg0Z8bT.lottie" />
            </div>
            
            <!-- Contact Information -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                style="font-family: 'Barlow Condensed', sans-serif;">
                Our Offices
              </h2>
              
              <div class="space-y-8">
                <!-- Head Office -->
                <div class="flex flex-col md:flex-row md:items-start">
                  <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                    <div class="bg-[#E6A619] rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Head Office</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                      03, Borno Road, off Independence Way,<br>
                      Marafa, Kaduna.
                    </p>
                  </div>
                </div>
                
                <!-- Abuja Office -->
                <div class="flex flex-col md:flex-row md:items-start">
                  <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                    <div class="bg-[#E6A619] rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Abuja Office</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                      02, Bilyamin Usman Street,<br>
                      Off Ebitu Ukiwe Street, Jabi Abuja.
                    </p>
                  </div>
                </div>
                
                <!-- Phone -->
                <div class="flex flex-col md:flex-row md:items-start">
                  <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                    <div class="bg-[#E6A619] rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                      +234 (0) 9-292-0035<br>
                      +234 803 786 7646
                    </p>
                  </div>
                </div>
                
                <!-- Email -->
                <div class="flex flex-col md:flex-row md:items-start">
                  <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                    <div class="bg-[#E6A619] rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                      <a href="mailto:info@ppil.com.ng" class="hover:text-[#E6A619] transition-colors duration-300">info@ppil.com.ng</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="py-12 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-6 md:px-10">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Find Us
        </h2>
        <div class="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <!-- You can replace this with an actual map embed -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.6475400201046!2d7.437749574686518!3d10.536145089689388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d343c2a5cb68d%3A0x1f30b14cc9d31992!2sIndependence%20Way%2C%20810212%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1683878977982!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-8 md:py-10 mb-12">
      <div class="container mx-auto px-6 md:px-10 text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          style="font-family: 'Barlow Condensed', sans-serif;">
          Ready to work together?
        </h3>
        <p class="text-lg text-gray-900 dark:text-gray-200 mb-6 max-w-3xl mx-auto">
          Whether you have a project in mind and you're looking for a reliable construction partner or seeking
          maintenance solutions,
          our team at <b>PPIL</b> is ready to deliver excellence at every stage.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services"
            class="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300">
            Explore Our Services
          </a>
          <a href="/projects"
            class="px-6 py-3 bg-[#E6A619] text-black font-black rounded-lg hover:bg-[#d49916] transition-colors duration-300">
            View Our Projects
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

