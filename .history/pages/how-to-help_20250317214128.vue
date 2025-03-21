<template>
  <div>
    <!-- Enhanced Hero/Header Section -->
    <div class="relative overflow-hidden">
      <!-- Background Image with Parallax Effect -->
      <div class="w-full h-64 md:h-80 lg:h-[500px] relative overflow-hidden">
        <img src="~/assets/img/toei_donate.jpg" alt="The Oaktree Empowerment Initiative"
          class="w-full h-full object-cover object-center transform scale-110 transition-transform duration-700" />

        <!-- Gradient Overlay for Better Text Visibility -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

        <!-- Content Container -->
        <div class="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8">
          <!-- Animated Badge -->
          <div class="mb-4 md:mb-6 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full 
                      text-sm md:text-base animate-pulse">
            Join 2,000+ donors making a difference
          </div>

          <!-- Heading with Enhanced Typography and Animation -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-center">
            <span class="text-white">Make a </span>
            <span class="text-[#CEE377]">Real Impact</span>
          </h1>

          <!-- Subheading with More Compelling Copy -->
          <p class="text-white text-lg md:text-xl lg:text-2xl text-center max-w-2xl leading-relaxed mb-6 md:mb-8">
            Your donation doesn't just help—it transforms communities, creates opportunities, and builds lasting change.
          </p>

          <!-- CTA Button -->
          <a href="#donate-form" class="bg-[#CEE377] hover:bg-[#daf090] text-gray-800 font-medium px-6 py-3 md:px-8 md:py-4 
                                      rounded-full transition-all duration-300 transform hover:scale-105 
                                      flex items-center gap-2 shadow-lg">
            Donate Now
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd" />
            </svg>
          </a>

          <!-- Impact Stats Bar -->
          <div class="hidden md:flex absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 
                      justify-center gap-8 lg:gap-16 text-white text-center">
            <div class="flex flex-col">
              <span class="text-2xl lg:text-3xl font-bold text-[#CEE377]">12+</span>
              <span class="text-sm">Years of Impact</span>
            </div>
            <div class="flex flex-col">
              <span class="text-2xl lg:text-3xl font-bold text-[#CEE377]">5,000+</span>
              <span class="text-sm">Lives Changed</span>
            </div>
            <div class="flex flex-col">
              <span class="text-2xl lg:text-3xl font-bold text-[#CEE377]">24</span>
              <span class="text-sm">Communities Served</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Impact Stats for Mobile Only -->
    <div class="md:hidden bg-gray-900 p-4 grid grid-cols-3 gap-2 text-white text-center">
      <div class="flex flex-col">
        <span class="text-xl font-bold text-[#CEE377]">12+</span>
        <span class="text-xs">Years</span>
      </div>
      <div class="flex flex-col">
        <span class="text-xl font-bold text-[#CEE377]">5,000+</span>
        <span class="text-xs">Lives Changed</span>
      </div>
      <div class="flex flex-col">
        <span class="text-xl font-bold text-[#CEE377]">24</span>
        <span class="text-xs">Communities</span>
      </div>
    </div>

    <div id="donate-form" class="scroll-mt-16">
      <!-- Rest of your form content continues here -->
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

// Your existing script setup code
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

// Add smooth scroll for the "Donate Now" button
onMounted(() => {
  const donateButtons = document.querySelectorAll('a[href^="#"]');
  donateButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 16,
          behavior: 'smooth'
        });
      }
    });
  });
});

definePageMeta({
  layout: "landing",
});
</script>