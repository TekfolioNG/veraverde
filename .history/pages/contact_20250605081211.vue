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

// Submit form function
const submitForm = async (event) => {
  const form = event.target
  const data = new FormData(form)

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
      headers: {
        'Accept': 'application/json'
      },
      body: data
    })

    const result = await response.json()

    if (result.success) {
      formStatus.value = {
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! We will contact you soon.'
      }
      resetForm()

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        formStatus.value.message = ''
        formStatus.value.success = false
      }, 5000)
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    formStatus.value = {
      loading: false,
      success: false,
      error: true,
      message: error.message || 'Network error occurred. Please check your connection and try again.'
    }

    // Auto-hide error message after 8 seconds
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

// SEO head configuration
useHead({
  title: 'Contact Us - Xstrato Prime Nigeria Limited',
  meta: [
    { name: 'description', content: 'Contact Xstrato Prime Nigeria Limited for engineering and construction services. Reach us at our Port Harcourt head office or Abuja branch office.' },
    { name: 'keywords', content: 'contact xstrato, engineering consultation, construction services nigeria, port harcourt office, abuja office' },
    { property: 'og:title', content: 'Contact Us - Xstrato Prime Nigeria Limited | Engineering Excellence' },
    { property: 'og:description', content: 'Get in touch with Xstrato Prime Nigeria Limited for innovative infrastructure solutions. Visit our offices in Port Harcourt or Abuja.' },
    { property: 'og:image', content: 'https://xstrato.com/xstrato-contact-og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Contact Xstrato Prime Nigeria Limited' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact Us - Xstrato Prime Nigeria Limited' },
    { name: 'twitter:description', content: 'Get in touch with Xstrato Prime Nigeria Limited for innovative infrastructure solutions.' },
    { name: 'twitter:image', content: 'https://xstrato.com/xstrato-contact-og-image.jpg' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://xstrato.com/contact' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Hero Section with Contact Info Overlay -->
    <section class="relative w-full min-h-screen overflow-hidden pt-20 md:pt-24">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#001122] via-[#002244] to-[#003366]"></div>

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
                autoplay loop src="https://lottie.host/d53719be-b868-4298-80c2-c7397958273a/veH5wxdKqv.lottie" />
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-barlow">
              LET'S CONNECT
            </h1>
            <p class="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
              Ready to start your next project? We're here to help bring your vision to life.
            </p>
          </div>

          <!-- Right Side - Contact Cards -->
          <div class="space-y-4 md:space-y-6 order-1 lg:order-2">
            <!-- Head Office Card -->
            <div
              class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div class="flex items-start space-x-3 md:space-x-4">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 bg-[#E6A619] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 20 20"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Head Office</h3>
                  <p class="text-sm md:text-base text-gray-300">19a Agudama off, Wogu Street, D-Line, Port Harcourt,
                    Nigeria</p>
                </div>
              </div>
            </div>

            <!-- Abuja Office Card -->
            <div
              class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div class="flex items-start space-x-3 md:space-x-4">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 bg-[#E6A619] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 20 20"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Abuja Office</h3>
                  <p class="text-sm md:text-base text-gray-300">1 Idris Garba Street, Kado FCT Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            <!-- Contact Details Card -->
            <div
              class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div class="space-y-3 md:space-y-4">
                <div class="flex items-center space-x-3 md:space-x-4">
                  <div
                    class="w-8 h-8 md:w-10 md:h-10 bg-[#E6A619] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                      aria-hidden="true">
                      <path
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+2349055440633"
                      class="text-sm md:text-base text-white font-medium hover:text-[#E6A619] transition-colors">+234
                      (0) 905 544 0633</a>
                    <br>
                    <a href="tel:+2347052905863"
                      class="text-sm md:text-base text-gray-300 hover:text-[#E6A619] transition-colors">+234 705 290
                      5863</a>
                  </div>
                </div>

                <div class="flex items-center space-x-3 md:space-x-4">
                  <div
                    class="w-8 h-8 md:w-10 md:h-10 bg-[#E6A619] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                      aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <a href="mailto:info@xstratoprime.com"
                      class="text-sm md:text-base text-white font-medium hover:text-[#E6A619] transition-colors">info@xstratoprime.com</a>
                    <br>
                    <a href="mailto:xstratoprime@gmail.com"
                      class="text-sm md:text-base text-gray-300 hover:text-[#E6A619] transition-colors">xstratoprime@gmail.com</a>
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
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12">
            <form @submit.prevent="submitForm" class="space-y-8" novalidate>
              <!-- Web3Forms Configuration -->
              <input type="hidden" name="access_key" value="1d005cda-aa81-48a8-99fd-d5a6cb3d5c66">
              <input type="hidden" name="subject" value="New Contact Form Submission - Xstrato Prime">
              <input type="hidden" name="from_name" value="Xstrato Prime Website">
              <input type="hidden" name="redirect" value="false">

              <!-- Honeypot field for spam protection -->
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
                    class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#E6A619] focus:outline-none dark:text-white transition-colors duration-300"
                    placeholder="Enter your full name" autocomplete="name">
                </div>

                <div class="space-y-2">
                  <label for="email"
                    class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Email Address <span class="text-red-500">*</span>
                  </label>
                  <input type="email" id="email" name="email" v-model="formData.email" required maxlength="150"
                    class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#E6A619] focus:outline-none dark:text-white transition-colors duration-300"
                    placeholder="your.email@example.com" autocomplete="email">
                </div>

                <div class="space-y-2">
                  <label for="phone"
                    class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" v-model="formData.phone" maxlength="20"
                    class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#E6A619] focus:outline-none dark:text-white transition-colors duration-300"
                    placeholder="+234 xxx xxx xxxx" autocomplete="tel">
                </div>

                <div class="space-y-2">
                  <label for="subject"
                    class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Subject <span class="text-red-500">*</span>
                  </label>
                  <input type="text" id="subject" name="subject" v-model="formData.subject" required minlength="3"
                    maxlength="200"
                    class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#E6A619] focus:outline-none dark:text-white transition-colors duration-300"
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
                  class="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-[#E6A619] focus:outline-none dark:text-white transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."></textarea>
              </div>

              <!-- Submit Button -->
              <div class="pt-6">
                <button type="submit" :disabled="formStatus.loading"
                  class="group relative w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#E6A619] to-[#d49916] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-4 focus:ring-[#E6A619]/30"
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
            FIND US HERE
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">Visit our offices for face-to-face consultations</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Head Office -->
          <div class="space-y-6">
            <div
              class="bg-gradient-to-br from-[#002244] to-[#003366] rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-300">
              <h3 class="text-2xl font-bold mb-4 font-barlow">HEAD OFFICE</h3>
              <p class="text-gray-300 mb-6">19a Agudama off, Wogu Street, D-Line, Port Harcourt, Nigeria</p>
              <div class="h-64 bg-gray-200/20 rounded-2xl overflow-hidden backdrop-blur-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2891234567!2d7.0334567!3d4.8156789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d2b1c8f9a5c7%3A0x12345678901234!2s19a%20Agudama%20off%20Wogu%20Street%2C%20D-Line%2C%20Port%20Harcourt%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1623345678901!5m2!1sen!2sng"
                  width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade" class="rounded-2xl"
                  title="Xstrato Prime Head Office Location"></iframe>
              </div>
            </div>
          </div>

          <!-- Abuja Office -->
          <div class="space-y-6">
            <div
              class="bg-gradient-to-br from-[#E6A619] to-[#d49916] rounded-3xl p-8 text-black hover:scale-105 transition-transform duration-300">
              <h3 class="text-2xl font-bold mb-4 font-barlow">ABUJA OFFICE</h3>
              <p class="text-gray-800 mb-6">1 Idris Garba Street, Kado FCT Abuja, Nigeria</p>
              <div class="h-64 bg-black/10 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.847202180092!2d7.433682315797442!3d9.05747019354719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745c8b9f8d7b%3A0xa1b2c3d4e5f67890!2s1%20Idris%20Garba%20Street%2C%20Kado%20FCT%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1623345678901!5m2!1sen!2sng"
                  width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade" class="rounded-2xl"
                  title="Xstrato Prime Abuja Office Location"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&display=swap');

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
  background: #E6A619;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d49916;
}

/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-track {
  background: #374151;
}

.dark ::-webkit-scrollbar-thumb {
  background: #E6A619;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #d49916;
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
  outline: 2px solid #E6A619;
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
  box-shadow: 0 20px 40px rgba(230, 166, 25, 0.3);
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