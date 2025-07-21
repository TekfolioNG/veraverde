<template>
  <footer class="bg-[#0f2409] text-white pt-16 pb-8 px-6 sm:px-8">
    <div class="container mx-auto">
      <!-- Main Footer -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <!-- Column 1: Logo and About -->
        <div class="md:col-span-4 flex flex-col items-center md:items-start">
          <NuxtLink to="/">
            <img src="~/assets/img/veaverde-logo-footer.png" alt="Vera Verde Logo" class="h-20 md:h-24" />
          </NuxtLink>

          <p class="text-gray-300 leading-relaxed mb-6 text-center md:text-left mt-4">
            Vera Verde is a climate-focused solutions company committed to reducing greenhouse gas emissions through
            carbon-smart agriculture, clean energy briquettes, and soil-restoring biochar. Based in Minna, Nigeria, we
            help protect the planet, empower farmers, and drive sustainable growth across communities.
          </p>
          <NuxtLink to="/about"
            class="text-[#d4b896] hover:text-white transition-colors text-sm inline-flex items-center">
            Learn more about us
            <Icon name="heroicons:arrow-right" class="h-4 w-4 ml-1" />
          </NuxtLink>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="md:col-span-2 flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-6 text-[#d4b896]">
            Quick Links
          </h3>
          <ul class="space-y-3 text-center md:text-left">
            <li>
              <NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/impact" class="text-gray-300 hover:text-white transition-colors">
                Impact Stories
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/partnerships" class="text-gray-300 hover:text-white transition-colors">
                Partner With Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Our Work -->
        <div class="md:col-span-3 flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-6 text-[#d4b896]">
            Our Work
          </h3>
          <ul class="space-y-3 text-center md:text-left">
            <li>
              <NuxtLink to="/climate-smart-agriculture" class="text-gray-300 hover:text-white transition-colors">
                Climate-Smart Agriculture
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/carbon-sequestration" class="text-gray-300 hover:text-white transition-colors">
                Carbon Sequestration
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ecofuel-briquettes" class="text-gray-300 hover:text-white transition-colors">
                Ecofuel Briquettes
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div class="md:col-span-3 flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-6 text-[#d4b896]">
            Contact Us
          </h3>
          <ul class="space-y-4 text-center md:text-left">
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-start mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:map-pin" class="h-5 w-5 text-[#d4b896] flex-shrink-0 mt-1" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">Head Office:</strong>
                Minna, Niger State, Nigeria
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:phone" class="h-5 w-5 text-[#d4b896] flex-shrink-0" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">Tel:</strong>
                +234 803 427 2579
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:envelope" class="h-5 w-5 text-[#d4b896] flex-shrink-0" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">E-mail:</strong>
                <a href="mailto:veraverde.ng@gmail.com" class="hover:text-[#a0d468] transition-colors">
                  veraverde.ng@gmail.com
                </a>
                <br>
                <a href="mailto:info@veraverde.org" class="hover:text-[#a0d468] transition-colors">
                  info@veraverde.org
                </a>
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <Icon name="mdi:whatsapp" class="h-5 w-5 text-[#d4b896] flex-shrink-0" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">WhatsApp:</strong>
                <a href="https://wa.me/2348034272579" class="hover:text-[#a0d468] transition-colors">
                  Chat with us
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-[#1e3a10] pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="order-2 md:order-1 text-gray-400 text-sm text-center">
            © {{ new Date().getFullYear() }} Vera Verde Nigeria Ltd. All Rights Reserved.
          </div>

          <div class="order-1 md:order-2 flex flex-col md:flex-row items-center gap-4">
            <div class="text-gray-400 text-sm">Follow Us:</div>
            <div class="flex gap-3">
              <a href="https://www.tiktok.com/@veraverde.charcoal" target="_blank" rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                <img src="assets/img/tiktok-logo2.png" alt="TikTok" class="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/veraverde.ng?igsh=YzljYTk1ODg3Zg==" target="_blank"
                rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram">
                <Icon name="mdi:instagram" size="20" />
              </a>
            </div>
          </div>

          <div class="order-3 text-gray-400 text-sm text-center md:text-right">
            Website by <NuxtLink to="https://tekfol.io" target="_blank"
              class="text-gray-300 hover:text-[#a0d468] transition-colors">Tekfolio Ltd</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this component
</script>