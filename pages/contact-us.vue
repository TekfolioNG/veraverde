<template>
  <div class="container mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Left Side: Image with Faster Bobbing Effect -->
      <div class="flex justify-center">
        <img src="~/assets/img/customer-care.png" alt="Customer Care" class="w-full max-w-md animate-bob" />
      </div>

      <!-- Right Side: Contact Information and Form -->
      <div class="mr-4"> <!-- Added margin to the right -->
        <!-- Contact Information Section -->
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-1.5 bg-[#0E0147] relative top-[2px]"></div>
            <h3 class="text-3xl font-medium tracking-wide">GET IN TOUCH</h3>
          </div>

          <h3 class="text-[#0E0147] font-bold text-2xl mt-8">Petabiz Nigeria</h3>
          <p class="mb-0">77 Awolowo Way,</p>
          <p class="mb-0">MAN House (4th Floor),</p>
          <p class="mb-0">Ikeja, Lagos, Nigeria</p>
          <p class="mb-0">(+234) 802 326 7433</p>
          <p class="mb-4">info@petabiz.com</p>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <input type="hidden" name="access_key" :value="formAccessKey" />

          <!-- Name Fields Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input v-model="formData.firstName" type="text" name="first_name" placeholder="First Name *" required
                class="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147]" />
            </div>
            <div>
              <input v-model="formData.lastName" type="text" name="last_name" placeholder="Last Name *" required
                class="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147]" />
            </div>
          </div>

          <!-- Contact Fields Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input v-model="formData.email" type="email" name="email" placeholder="Email *" required
                class="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147]" />
            </div>
            <div>
              <input v-model="formData.phone" type="tel" name="phone" placeholder="Phone *" required
                class="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147]" />
            </div>
          </div>

          <!-- Message Field -->
          <div>
            <textarea v-model="formData.message" name="message" placeholder="What can we help you with today?" rows="6"
              required
              class="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147]"></textarea>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-start">
            <button type="submit"
              class="px-8 py-3 text-white bg-[#0E0147] rounded hover:bg-[#1a0275] transition-colors disabled:opacity-70"
              :disabled="isSubmitting">
              {{ isSubmitting ? 'Submitting...' : 'SUBMIT' }}
            </button>
          </div>

          <!-- Status Message -->
          <div v-if="statusMessage.show" :class="[
            'p-4 rounded',
            statusMessage.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700',
          ]">
            {{ statusMessage.text }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
const formAccessKey = ref('0f124479-05cd-4fcf-a66e-67276a365cbb');
const isSubmitting = ref(false);

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
});

const statusMessage = ref({
  show: false,
  error: false,
  text: '',
});

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  try {
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        access_key: formAccessKey.value,
        ...formData.value,
      },
    });

    if (response.success) {
      statusMessage.value = {
        show: true,
        error: false,
        text: "Thank you for contacting us! We'll get back to you soon.",
      };
      // Reset form
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      };
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    statusMessage.value = {
      show: true,
      error: true,
      text: 'There was an error submitting the form. Please try again.',
    };
  } finally {
    isSubmitting.value = false;
  }
};

  useSeoMeta({
  title: 'Petabiz Nigeria Ltd | Contact Us',
  ogTitle: 'Petabiz Nigeria Ltd | Contact Us',
  titleTemplate: 'Petabiz Nigeria Ltd | Contact Us',
  description: 'Global OEM Solutions for Enterprise Success.',
  ogDescription: 'Global OEM Solutions for Enterprise Success',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Petabiz Nigeria Ltd',
  twitterDescription: 'Global OEM Solutions for Enterprise Success',

  ogImage: {
    url: 'https://petabiz-telco.com/Sefa_Energy_Ltd.png',
  width: 1200,
  height: 630,
  alt: 'Petabiz Nigeria Ltd - Trsuted Tech Partner'
    },
  twitterImage: 'https://petabiz-telco.com/Sefa_Energy_Ltd.png'
})

</script>

<style>
@keyframes bob {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

.animate-bob {
  animation: bob 3s ease-in-out infinite;
}
</style>