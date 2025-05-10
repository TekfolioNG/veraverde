<template>
  <footer class="bg-primary-dark text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Column 1: Logo & About -->
        <div class="footer-col">
          <NuxtLink to="/" class="mb-4 inline-block">
            <img src="~/assets/img/PPIL Logo.svg" alt="PPIL Logo" class="h-16">
          </NuxtLink>
          <p class="text-gray-300 text-sm mb-4">
            PPIL is one of Nigeria's most trusted hybrid construction and infrastructure firms — bringing together
            engineering, project management, and facility services under one roof.
          </p>
          <NuxtLink to="/who-we-are"
            class="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">
            Learn more about us →
          </NuxtLink>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-col">
          <h3 class="text-lg font-bold mb-4 text-yellow-400">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/our-work" class="text-gray-300 hover:text-white transition-colors">Our Work</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/why-ppil" class="text-gray-300 hover:text-white transition-colors">Why PPIL</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sectors" class="text-gray-300 hover:text-white transition-colors">Sectors</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div class="footer-col">
          <h3 class="text-lg font-bold mb-4 text-yellow-400">Services</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <span class="text-gray-300">{{ service }}</span>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact -->
        <div class="footer-col">
          <h3 class="text-lg font-bold mb-4 text-yellow-400">Contact Us</h3>
          <div class="space-y-3 text-gray-300 text-sm">
            <div class="flex items-start gap-2">
              <Icon name="mdi:map-marker" class="mt-0.5 flex-shrink-0" />
              <div>
                <p class="font-medium">Head Office:</p>
                <p>03, Borno Road, off Independence Way, Marafa, Kaduna</p>
                <p class="mt-2 font-medium">Abuja Office:</p>
                <p>02, Bilyamin Usman Street, Off Ebitu Ukiwe Street, Jabi Abuja</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="mdi:phone" />
              <span>+234 (0) 9-292-0035, +234 803 786 7646</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="mdi:email" />
              <span>info@ppil.com.ng</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="border-t border-gray-700 py-4">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div class="mb-2 md:mb-0">
          <NuxtLink to="https://tekfol.io" target="_blank" class="hover:text-yellow-400 transition-colors">
            Website Development by Tekfolio Ltd
          </NuxtLink>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-4">
          <div>
            &copy; {{ currentYear }} Premium Projects Infrastructure Limited (PPIL), All Rights Reserved.
          </div>
          <div class="flex items-center gap-4">
            <span>Connect:</span>
            <div class="flex gap-3">
              <NuxtLink to="https://linkedin.com" target="_blank" class="hover:text-white transition-colors">
                <Icon name="mdi:linkedin" size="20" />
              </NuxtLink>
              <NuxtLink to="https://instagram.com" target="_blank" class="hover:text-white transition-colors">
                <Icon name="mdi:instagram" size="20" />
              </NuxtLink>
              <NuxtLink to="https://x.com" target="_blank" class="hover:text-white transition-colors">
                <Icon name="mdi:twitter" size="20" />
              </NuxtLink>
              <NuxtLink to="https://facebook.com" target="_blank" class="hover:text-white transition-colors">
                <Icon name="mdi:facebook" size="20" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const services = [
  'Design & Planning',
  'Construction & Project Planning',
  'Renovation & Upgrades',
  'Facility Maintenance',
  'Structural Engineering',
  'Sustainable Construction'
];
</script>
