<template>
  <div class="relative w-screen py-10 sm:py-12 mt-8 sm:mt-14 translate-x-[-5%] sm:translate-x-[-2.8%]">
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Centered Heading -->
      <h2
        class="text-center text-gray-900 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight lg:tracking-tight mt-4">
        Our OEM Partners
      </h2>

      <!-- First row - Scroll to the right -->
      <div class="relative mt-8">
        <div class="flex space-x-5 animate-scroll-right">
          <template v-for="(items, index) in [...firstRowLogos, ...firstRowLogos]" :key="`row1-${index}`">
            <div class="min-w-[150px] p-2" v-for="logo in items" :key="logo">
              <div class="rounded-lg p-3 transition-transform hover:scale-105">
                <img :src="logo" :alt="logo" class="h-12 sm:h-16 object-contain" />
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Second row - Scroll to the left -->
      <div class="relative mt-2"> <!-- Reduced spacing between rows -->
        <div class="flex space-x-5 animate-scroll-left">
          <template v-for="(items, index) in [...secondRowLogos, ...secondRowLogos]" :key="`row2-${index}`">
            <div class="min-w-[150px] p-2" v-for="logo in items" :key="logo">
              <div class="rounded-lg p-3 transition-transform hover:scale-105">
                <img :src="logo" :alt="logo" class="h-12 sm:h-16 object-contain" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import all logo images
import cisco from '@/assets/img/cisco.png';
import dell from '@/assets/img/dell.png';
import eset from '@/assets/img/eset.png';
import fortinet from '@/assets/img/fortinet.png';
import groupIb from '@/assets/img/group-ib.png';
import hitachi from '@/assets/img/hitachi.png';
import hp from '@/assets/img/hp.png';
import huawei from '@/assets/img/huawei.png';
import ibm from '@/assets/img/ibm.png';
import kaspersky from '@/assets/img/kaspersky.png';
import microsoft from '@/assets/img/microsoft.png';
import netapp from '@/assets/img/netapp.png';
import oracle from '@/assets/img/oracle.png';
import paloalto from '@/assets/img/paloalto.png';
import quest from '@/assets/img/quest.png';
import vertiv from '@/assets/img/vertiv.png';
import vmware from '@/assets/img/vmware.png';

// Split the logos into two separate lists
const firstRowLogos = [
  [
    cisco,
    oracle,
    dell,
    microsoft,
    huawei,
    hp,
    ibm,
    hitachi,
    dell
  ]
];

const secondRowLogos = [
  [
    vertiv,
    groupIb,
    vmware,
    eset,
    quest,
    kaspersky,
    netapp,
    fortinet,
    paloalto
  ]
];
</script>

<style>
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
}

.animate-scroll-left:hover,
.animate-scroll-right:hover {
  animation-play-state: paused;
}
</style>