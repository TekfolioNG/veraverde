<template>
  <footer class="bg-gray-950 text-white">
    <div class="container mx-auto px-6 py-12">
      <!-- Add text-center for mobile and md:text-left for medium screens and above -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        <!-- Grid 1: About Us -->
        <div class="space-y-6">
          <NuxtLink to="/">
            <!-- Center the logo on mobile -->
            <img class="h-20 w-auto mx-auto md:mx-0" src="assets/img/Petabiz_logo.png" alt="Petabiz Nigeria" />
          </NuxtLink>
          <div>
            <h3 class="text-lg font-bold mb-2 pb-2 border-b border-[#81DBFF]">
              ABOUT US
            </h3>
            <p class="text-gray-300 mb-4">
              Petabiz Nigeria is a leading provider of enterprise-grade technology solutions, offering premium OEM
              products and cutting-edge IT infrastructure.
            </p>
          </div>
        </div>

        <!-- Grid 2: Our Solutions -->
        <div class="space-y-6">
          <h3 class="text-lg font-bold mb-2 pb-2 border-b border-[#81DBFF]">
            <NuxtLink to="/our-products" class="hover:text-[#81DBFF] transition-colors">
              OUR PRODUCTS
            </NuxtLink>
          </h3>
          <ul class="space-y-2  text-gray-300 text-sm">
            <li v-for="service in services" :key="service.name">
              {{ service.name }}
            </li>
          </ul>

        </div>

        <!-- Grid 3: OEM Partners -->
        <div class="space-y-6">
          <h3 class="text-lg font-bold mb-2 pb-2 border-b border-[#81DBFF]">
            <NuxtLink to="/our-services" class="hover:text-[#81DBFF] transition-colors">
              OEM PARTNERS
            </NuxtLink>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul class="space-y-2 text-gray-300 text-sm">
              <li v-for="(product, index) in products.slice(0, Math.ceil(products.length / 2))" :key="index">
                {{ product }}
              </li>
            </ul>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li v-for="(product, index) in products.slice(Math.ceil(products.length / 2))" :key="index">
                {{ product }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Grid 4: Contact Us -->
        <div class="space-y-6">
          <h3 class="text-lg font-bold mb-2 pb-2 border-b border-[#81DBFF]">
            CONTACT US
          </h3>
          <div class="space-y-4">
            <!-- Center contact info on mobile -->
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <MapPin class="w-6 h-6 text-[#81DBFF] flex-shrink-0 mt-1" stroke-width="1" />
              <p class="text-gray-300">77 Awolowo Way, <br>MAN House (4th Floor), <br>Ikeja, Lagos, Nigeria</p>
            </div>
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <Phone class="w-6 h-6 text-[#81DBFF] flex-shrink-0 mt-1" stroke-width="1" />
              <div class="text-gray-300">
                <p>(+234) 802 326 7433</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <Mail class="w-6 h-6 text-[#81DBFF] flex-shrink-0 mt-1" stroke-width="1" />
              <div class="text-gray-300">
                <p>info@petabiz.com</p>
              </div>
            </div>
          </div>
          <!-- Social Media Links: Center on mobile -->
          <div class="flex space-x-4 pt-4 justify-center md:justify-start">
            <a href="#" class="text-[#81DBFF] hover:text-white transition-colors">
              <Facebook class="w-6 h-6" stroke-width="1" />
            </a>
            <a href="#" class="text-[#81DBFF] hover:text-white transition-colors">
              <Linkedin class="w-6 h-6" stroke-width="1" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="bg-gray-900 py-4">
      <!-- Center text on mobile and align left on medium screens and above -->
      <div
        class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 text-center md:text-left">
        <p>© {{ currentYear }} Petabiz Nigeria Ltd. ALL RIGHTS RESERVED.</p>
        <a href="https://tekfol.io" target="_blank" rel="noopener noreferrer"
          class="hover:text-[#81DBFF] transition-colors mt-2 md:mt-0">
          Web Design by Tekfolio Ltd
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-vue-next';
import { computed } from 'vue';

// Dynamic year computation
const currentYear = computed(() => new Date().getFullYear());

// Services data
const services = [
  { name: 'Enterprise Servers', href: '/downstream-operations' },
  { name: 'Enterprise Storage Solutions', href: '/manpower-services' },
  { name: 'Converged & Hyper-Converged Systems', href: '/project-management' },
  { name: 'Routers & Switches', href: '/contract-management' },
  { name: 'Wireless Solutions (Access Points & Controllers)', href: '/oil-and-gas-chemical-processing' },
  { name: 'Network Security (Firewalls & VPNs)', href: '/marine-operations' },
  { name: 'Power Conditioning Systems (UPS & Inverters)', href: '/corrosion-management' },
  { name: 'Unified Communications (IP Phones & Video Conferencing Systems)', href: '/corrosion-management' },
];

// Products data
const products = [
  'Cisco Solutions',
  'Oracle Enterprise Solutions',
  'Huawei Innovations',
  'IBM Enterprise Systems',
  'Dell EMC Storage Solutions',
  'Microsoft Cloud Services',
  'Hitachi Data Systems',
  'Vertiv Infrastructure',
  'NetApp Storage',
  'Fortinet Security',
  'Palo Alto Networks',
  'VMware Virtualization',
];
</script>