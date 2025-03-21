<template>
    <div>
        <!-- Keep the existing hero section -->
        <div class="w-full h-48 md:h-64 lg:h-96 relative">
            <img src="~/assets/img/toei-about-us.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div class="text-white text-center p-4 md:p-8">
                    <h1 class="text-[#CEE377] text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Make a Difference
                    </h1>
                    <p class="text-base md:text-xl">Your support transforms lives</p>
                </div>
            </div>
        </div>

        <!-- New Animation Section -->
        <div class="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 flex flex-col items-center">
            <h2 class="text-3xl font-bold text-center mb-8">Your Donation Journey</h2>

            <div class="w-full max-w-2xl relative h-80 bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                <!-- Animation container -->
                <div class="animation-container relative w-full h-full">
                    <!-- Paper document -->
                    <div ref="paper"
                        class="absolute w-20 h-28 bg-white border-2 border-gray-300 rounded shadow-md z-10 transform-gpu"
                        :style="paperStyle" @click="startAnimation">
                        <div class="w-full h-1 bg-blue-500 mt-2"></div>
                        <div class="w-3/4 h-1 bg-gray-300 mx-auto mt-3"></div>
                        <div class="w-3/4 h-1 bg-gray-300 mx-auto mt-2"></div>
                        <div class="w-3/4 h-1 bg-gray-300 mx-auto mt-2"></div>
                        <div class="w-1/2 h-1 bg-gray-300 mx-auto mt-2"></div>
                    </div>

                    <!-- Box -->
                    <div class="absolute bottom-10 right-20 w-32 h-24">
                        <!-- Box back -->
                        <div class="absolute bottom-0 w-full h-20 bg-amber-700 rounded-md"></div>
                        <!-- Box opening -->
                        <div class="absolute bottom-20 w-full h-4 bg-amber-800 rounded-t-md"></div>
                        <!-- Box left flap (open) -->
                        <div ref="leftFlap" :class="flapClass"
                            class="absolute bottom-20 left-0 w-14 h-12 bg-amber-600 origin-bottom-left"
                            :style="leftFlapStyle"></div>
                        <!-- Box right flap (open) -->
                        <div ref="rightFlap" :class="flapClass"
                            class="absolute bottom-20 right-0 w-14 h-12 bg-amber-600 origin-bottom-right"
                            :style="rightFlapStyle"></div>
                    </div>

                    <div class="absolute bottom-4 w-full text-center text-gray-600 text-sm" v-if="!isAnimating">
                        Click the document to start animation
                    </div>
                </div>
            </div>

            <div class="max-w-xl text-center px-4">
                <p class="text-lg mb-6">Much like this paper safely reaching its destination, your donation makes its
                    way to those who need it most.</p>
                <a href="/donate"
                    class="bg-[#009976] hover:bg-[#00B28A] text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors">
                    Make Your Donation
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { computed, ref } from 'vue';

// Animation state
const isAnimating = ref(false);
const animationComplete = ref(false);

// Element refs
const paper = ref(null);
const leftFlap = ref(null);
const rightFlap = ref(null);

// Initial styles
const paperStyle = computed(() => ({
    top: '50px',
    left: '50px',
    transform: animationComplete.value ? 'scale(0.7) rotate(5deg)' : 'scale(1) rotate(0deg)'
}));

const leftFlapStyle = computed(() => ({
    transform: `rotate(${animationComplete.value ? 0 : -60}deg)`
}));

const rightFlapStyle = computed(() => ({
    transform: `rotate(${animationComplete.value ? 0 : 60}deg)`
}));

const flapClass = computed(() =>
    animationComplete.value ? 'transition-transform duration-1000' : ''
);

// Animation function
const startAnimation = () => {
    if (isAnimating.value) return;
    isAnimating.value = true;

    // Create animation timeline
    const tl = gsap.timeline({
        onComplete: () => {
            isAnimating.value = false;
            animationComplete.value = true;

            // Reset animation after 2 seconds
            setTimeout(() => {
                gsap.to(paper.value, {
                    top: 50,
                    left: 50,
                    rotation: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                });
                animationComplete.value = false;
            }, 2000);
        }
    });

    // Animation sequence
    tl.to(paper.value, {
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        duration: 1,
        ease: "power1.inOut"
    })
        .to(paper.value, {
            top: '55%',
            left: '55%',
            rotation: 5,
            scale: 0.7,
            duration: 1,
            ease: "power2.in"
        });
};

definePageMeta({
    layout: "landing",
});
</script>

<style scoped>
.animation-container {
    perspective: 1000px;
}
</style>