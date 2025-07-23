<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { reactive, ref } from 'vue'

// Form data reactive object
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// Form status
const formStatus = ref({
  loading: false,
  success: false,
  error: false,
  message: ''
})

// Reset form function
const resetForm = () => {
  Object.keys(formData).forEach(key => {
    formData[key] = ''
  })
}

// Form validation function
const validateForm = () => {
  const errors = []

  if (!formData.name.trim() || formData.name.length < 2) {
    errors.push('Name must be at least 2 characters long')
  }

  if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address')
  }

  if (!formData.subject.trim() || formData.subject.length < 3) {
    errors.push('Subject must be at least 3 characters long')
  }

  if (!formData.message.trim() || formData.message.length < 10) {
    errors.push('Message must be at least 10 characters long')
  }

  return errors
}

// Submit form function - PROXY VERSION
const submitForm = async (event) => {
  event.preventDefault()

  // Client-side validation
  const validationErrors = validateForm()
  if (validationErrors.length > 0) {
    formStatus.value = {
      loading: false,
      success: false,
      error: true,
      message: validationErrors.join('. ')
    }
    setTimeout(() => {
      formStatus.value.message = ''
      formStatus.value.error = false
    }, 8000)
    return
  }

  // Reset status
  formStatus.value = {
    loading: true,
    success: false,
    error: false,
    message: 'Sending your message...'
  }

  try {
    console.log('Submitting form via API proxy...') // Debug log

    // Use Nuxt's $fetch to call our API route
    const result = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      }
    })

    console.log('API response:', result) // Debug log

    if (result.success) {
      formStatus.value = {
        loading: false,
        success: true,
        error: false,
        message: result.message || 'Message sent successfully! We will contact you soon.'
      }
      resetForm()

      setTimeout(() => {
        formStatus.value.message = ''
        formStatus.value.success = false
      }, 5000)
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
  } catch (error) {
    console.error('Form submission error:', error) // Debug log

    let errorMessage = 'An unexpected error occurred. Please try again.'

    // Handle different error types
    if (error.statusCode === 400) {
      errorMessage = error.statusMessage || 'Please check your form data and try again.'
    } else if (error.statusCode === 408) {
      errorMessage = 'Request timed out. Please try again.'
    } else if (error.statusCode === 429) {
      errorMessage = 'Too many requests. Please wait a moment and try again.'
    } else if (error.statusCode >= 500) {
      errorMessage = 'Server error occurred. Please try again in a few minutes.'
    } else if (error.data?.message) {
      errorMessage = error.data.message
    } else if (error.message) {
      errorMessage = error.message
    }

    formStatus.value = {
      loading: false,
      success: false,
      error: true,
      message: errorMessage
    }

    setTimeout(() => {
      formStatus.value.message = ''
      formStatus.value.error = false
    }, 8000)
  }
}

// Page meta configuration
definePageMeta({
  layout: "landing"
})

useHead({
  title: 'Vera Verde | Contact Us',
  meta: [
    { property: 'og:title', content: 'VeraVerde | Eco-Smart Agriculture & Clean Energy Solutions' },
    { property: 'og:description', content: 'Driving climate-smart farming and sustainable biofuels across Africa. VeraVerde connects innovation with impact in agriculture and renewable energy.' },
    { property: 'og:image', content: '/veraverde-og.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'VeraVerde - Climate-Smart Agriculture & Clean Energy' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'VeraVerde | Eco-Smart Agriculture & Clean Energy Solutions' },
    { name: 'twitter:description', content: 'Driving climate-smart farming and sustainable biofuels across Africa.' },
    { name: 'twitter:image', content: '/veraverde-og.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://veraverde.com/contact' }
  ],
});

</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Hero Section with Contact Info Overlay -->
    <section class="relative w-full min-h-screen overflow-hidden pt-20 md:pt-24">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-[#0f2409]"></div>

      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse">
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent animate-pulse"
            style="animation-delay: 1s;"></div>
        </div>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 container mx-auto px-6 py-12 md:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Left Side - Animation & Title -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <div class="mb-6 md:mb-8">
              <DotLottieVue style="height: 280px; width: 280px" class="mx-auto lg:mx-0 md:!h-[320px] md:!w-[320px]"
                autoplay loop src="https://lottie.host/8b8dd837-0019-4a06-8457-790847e7f3e9/l50uZweUGU.lottie" />
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-barlow">
              LET'S CONNECT
            </h1>
            <p class="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
              Ready to discuss sustainable solutions? We're here to help with your agricultural and energy needs.
            </p>
          </div>

          <!-- Right Side - Contact Cards -->
          <div class="space-y-4 md:space-y-6 order-1 lg:order-2">
            <!-- Head Office Card -->
            <div
              class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div class="flex items-start space-x-3 md:space-x-4">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 bg-[#99cc33] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 20 20"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Head Office</h3>
                  <p class="text-sm md:text-base text-gray-300">Minna, Niger State, Nigeria</p>
                </div>
              </div>
            </div>

            <!-- Contact Details Card -->
            <div
              class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div class="space-y-3 md:space-y-4">
                <div class="flex items-center space-x-3 md:space-x-4">
                  <div
                    class="w-8 h-8 md:w-10 md:h-10 bg-[#99cc33] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                      aria-hidden="true">
                      <path
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+2348034272579"
                      class="text-sm md:text-base text-white font-medium hover:text-[#99cc33] transition-colors">+234
                      803 427 2579</a>
                  </div>
                </div>

                <div class="flex items-center space-x-3 md:space-x-4">
                  <div
                    class="w-8 h-8 md:w-10 md:h-10 bg-[#99cc33] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                      aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <a href="mailto:veraverde.ng@gmail.com"
                      class="text-sm md:text-base text-white font-medium hover:text-[#99cc33] transition-colors">veraverde.ng@gmail.com</a>
                    <br>
                    <a href="mailto:info@veraverde.org"
                      class="text-sm md:text-base text-gray-300 hover:text-[#99cc33] transition-colors">info@veraverde.org</a>
                  </div>
                </div>

                <div class="flex items-center space-x-3 md:space-x-4">
                  <div
                    class="w-8 h-8 md:w-10 md:h-10 bg-[#99cc33] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <a href="https://wa.me/2348034272579"
                      class="text-sm md:text-base text-white font-medium hover:text-[#99cc33] transition-colors">Chat
                      with us on WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-barlow">
              SEND US A MESSAGE
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about our sustainable solutions? We'd love to hear from you.
            </p>
          </div>

          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12">
            <form @submit="submitForm" class="space-y-8" novalidate>
              <!-- Remove all hidden inputs since we're using JSON now -->

              <!-- Honeypot field for spam protection (keep this one) -->
              <input type="checkbox" name="botcheck" style="display: none;">

              <!-- Form Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <label for="name"
                    class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Full Name <span class="text-red-500">*</span>
                  </label>
                  <input type="text" id="name" name="name" v-model="formData.name" required minlength="2"
                    maxlength="100"
                    class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#99cc33] focus:outline-none dark:text-white transition-colors duration-300"
                    placeholder="Enter your full name" autocomplete="name">
                </div>

                <div class="space-y-2">
                  <label for="email"
                    class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Email Address <span class="text-red-500">*</span>
                  </label>
                  <input type="email" id="email" name="email" v-model="formData.email" required maxlength="150"
                    class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#99cc33] focus:outline-none dark:text-white transition-colors duration-300"
                    placeholder="your.email@example.com" autocomplete="email">
                </div>

                <div class="space-y-2">
                  <label for="phone"
                    class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" v-model="formData.phone" maxlength="20"
                    class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#99cc33] focus:outline-none dark:text-white transition-colors duration-300"
                    placeholder="+234 xxx xxx xxxx" autocomplete="tel">
                </div>

                <div class="space-y-2">
                  <label for="subject"
                    class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Subject <span class="text-red-500">*</span>
                  </label>
                  <input type="text" id="subject" name="subject" v-model="formData.subject" required minlength="3"
                    maxlength="200"
                    class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#99cc33] focus:outline-none dark:text-white transition-colors duration-300"
                    placeholder="What's this about?">
                </div>
              </div>

              <div class="space-y-2">
                <label for="message"
                  class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Your Message <span class="text-red-500">*</span>
                </label>
                <textarea id="message" name="message" v-model="formData.message" rows="6" required minlength="10"
                  maxlength="2000"
                  class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#99cc33] focus:outline-none dark:text-white transition-colors duration-300 resize-none"
                  placeholder="Tell us about your inquiry or project..."></textarea>
              </div>

              <!-- Submit Button -->
              <div class="pt-6">
                <button type="submit" :disabled="formStatus.loading"
                  class="group relative w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#99cc33] to-[#88bb22] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-4 focus:ring-[#99cc33]/30"
                  :aria-label="formStatus.loading ? 'Sending message...' : 'Send message'">
                  <span v-if="!formStatus.loading" class="flex items-center justify-center">
                    SEND MESSAGE
                    <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>
                    SENDING...
                  </span>
                </button>
              </div>

              <!-- Status Message -->
              <Transition name="fade" mode="out-in">
                <div v-if="formStatus.message" :class="{
                  'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300': formStatus.success,
                  'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300': formStatus.error,
                  'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300': formStatus.loading
                }" class="border-2 px-6 py-4 rounded-xl" role="status"
                  :aria-live="formStatus.error ? 'assertive' : 'polite'">
                  <div class="flex items-center">
                    <svg v-if="formStatus.success" class="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor"
                      viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <svg v-else-if="formStatus.error" class="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor"
                      viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <p class="font-medium">{{ formStatus.message }}</p>
                  </div>
                </div>
              </Transition>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-barlow">
            OUR LOCATION
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">Visit our head office in Minna, Niger State</p>
        </div>

        <div class="flex justify-center">
          <div class="w-full max-w-4xl">
            <div
              class="bg-gradient-to-br from-green-800 to-green-700 rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-300">
              <h3 class="text-2xl font-bold mb-4 font-barlow">HEAD OFFICE</h3>
              <p class="text-gray-300 mb-6">Minna, Niger State, Nigeria</p>
              <div class="h-96 bg-gray-200/20 rounded-2xl overflow-hidden backdrop-blur-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.847202180092!2d7.433682315797442!3d9.05747019354719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745c8b9f8d7b%3A0xa1b2c3d4e5f67890!2sMinna%2C%20Niger%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1623345678901!5m2!1sen!2sng"
                  width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" class="rounded-2xl"
                  title="Vera Verde Head Office Location"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.font-barlow {
  font-family: 'Barlow Condensed', sans-serif;
}

/* Fade transition for status messages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #99cc33;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #88bb22;
}

/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-track {
  background: #374151;
}

.dark ::-webkit-scrollbar-thumb {
  background: #99cc33;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #88bb22;
}

/* Form validation styles */
input:invalid:not(:placeholder-shown),
textarea:invalid:not(:placeholder-shown) {
  border-bottom-color: #ef4444;
}

input:valid:not(:placeholder-shown),
textarea:valid:not(:placeholder-shown) {
  border-bottom-color: #22c55e;
}

/* Focus ring for better accessibility */
input:focus-visible,
textarea:focus-visible,
button:focus-visible {
  outline: 2px solid #99cc33;
  outline-offset: 2px;
}

/* Hover effects for interactive elements */
a:hover {
  text-decoration: underline;
}

/* Loading animation enhancement */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

.loading-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Mobile-first responsive improvements */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .text-4xl {
    font-size: 2.5rem;
  }

  .text-5xl {
    font-size: 3rem;
  }
}

/* Improved button states */
button:disabled {
  cursor: not-allowed;
  transform: none !important;
}

button:not(:disabled):hover {
  box-shadow: 0 20px 40px rgba(153, 204, 51, 0.3);
}

/* Enhanced card hover effects */
.hover\:scale-105:hover {
  transform: scale(1.02);
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>