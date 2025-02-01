<template>
  <div class="relative w-full py-8 sm:py-12 lg:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative z-10 text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          Why Choose Petabiz
        </h2>
        <p class="text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 text-slate-600 max-w-3xl mx-auto">
          Your trusted partner for enterprise-grade technology solutions, delivering premium OEM products and
          exceptional service excellence
        </p>
      </div>
    </div>
  </div>
  <div class="px-4 sm:px-6 lg:px-8 w-full flex justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl">
      <div v-for="item of features" :key="item.title" class="flex flex-col items-center blue-filter">
        <div class="group text-center w-full">
          <div class="mb-6 flex justify-center">
            <img :src="item.icon" :alt="item.title"
              class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 transition-transform duration-300 group-hover:scale-110 blue-filter">
          </div>
          <div class="text-center">
            <h3 class="font-semibold text-lg text-gray-900">{{ item.title }}</h3>
            <p class="text-base text-slate-600 mt-2 leading-relaxed mx-auto max-w-sm">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import all icons as URLs
import certificateIcon from '@/assets/icons/certificate.svg';
import chipIcon from '@/assets/icons/chip.svg';
import globeIcon from '@/assets/icons/globe.svg';
import headsetIcon from '@/assets/icons/headset.svg';
import serverIcon from '@/assets/icons/server.svg';
import shieldCheckIcon from '@/assets/icons/shield-check.svg';

const features = [
  {
    title: "Authorized OEM Partner",
    description: "Direct partnerships with leading manufacturers including Cisco, Oracle, IBM, Dell EMC, and Microsoft ensure authentic products and premium support.",
    icon: certificateIcon,
    href: "/partnerships"
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive portfolio of data center, networking, and cloud solutions designed to meet complex business requirements and scale with your growth.",
    icon: serverIcon,
    href: "/solutions"
  },
  {
    title: "Technical Expertise",
    description: "Certified engineers and solution architects with deep expertise across multiple technologies to design and implement optimal solutions.",
    icon: chipIcon,
  
  },
  {
    title: "Global Supply Chain",
    description: "Robust procurement network and inventory management ensuring reliable access to critical technology components and rapid fulfillment.",
    icon: globeIcon,
  
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services to keep your mission-critical systems running at peak performance.",
    icon: headsetIcon,
  
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and validation processes guarantee that all products meet stringent quality standards and performance requirements.",
    icon: shieldCheckIcon,
  
  }
];
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>